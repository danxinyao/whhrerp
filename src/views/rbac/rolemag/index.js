import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { role as ajax} from 'services'
export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            rolelist: [],
            title: '编辑',
            showEdit: false,
            isEdit: false,
            editForm: {},
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
            operations: [
                {
                    name: '删除',
                    action: 'del',
                    type: 'primary'
                },
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                }
            ],
            selected: []
        }
    },
    mounted() {
        this.getRoles()
    },
    methods: {
        getRoles() {
            ajax.getRoles(this.page, this.pageSize).then((result)=>{
                this.rolelist = result.data
                this.total = result.totalCount
            })
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getRoles()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getRoles()
        },
         // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 批量删除
        del() {
            const disCountID = []
            this.selected.forEach((item) => {
                disCountID.push(item.roleID)
            })
            ajax.delroles(disCountID).then(() => {
                //删除成功的回调函数
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                // 删除之后重新加载活动列表
                this.getRoles()
            })
        },
        // 新增
        add() {
            this.editForm = {}
            this.title = '新增'
            this.isEdit = false
            this.showEdit = true
        },
        // 打开编辑窗口
        edit(item) {
            // 编辑的时候，查询角色详情
            ajax.getRole(item.roleID).then((result) => {
                this.editForm = result
                this.title = '编辑'
                this.isEdit = true
                this.showEdit = true
            })  
        },
        // 关闭编辑窗口
        closeEdit() {
            this.showEdit = false
        },
        refresh() {
            this.page = 1
            this.getRoles()
        }
    }
}