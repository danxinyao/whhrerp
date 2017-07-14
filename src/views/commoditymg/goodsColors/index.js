import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { property as ajax } from 'services'

export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            colors: [],
            // 操作区按钮
            operations: [
                {
                    name: '批量删除',
                    action: 'del'
                },
                {
                    name: '新增',
                    action: 'add'
                }
            ],
            selected: [],
            title: '编辑',
            isEdit: false,
            showEdit: false,
            editForm: {},
            query: {
                page: 1,
                pageSize: 15
            },
            total: 0
        }
    },
    mounted() {
        // 初始化数据
        this.getColorPageList()
    },
    methods: {
        // 获取数据
        getColorPageList() {
            ajax.getColorPageList(this.query).then((result) => {
                this.colors = result.data
                this.total = result.totalCount
            })
        },
        // 刷新列表
        refresh() {
            this.getColorPageList()
        },
        // 当前页数更新触发
        currentChange(current) {
            this.query.page = current
            this.getColorPageList()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.query.pageSize = size
            this.getColorPageList()
        },
        // 修改
        edit(item) {
            this.editForm = item
            this.isEdit = true
            this.title = '修改'
            this.showEdit = true
        },
        // 新增
        add() {
            this.editForm = {}
            this.isEdit = false
            this.title = '新增'
            this.showEdit = true
        },
        // 删除
        del() {
            const idList = []
            this.selected.forEach((item) => {
                idList.push(item.colorID)
            })
            ajax.delColors(idList).then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.refresh()
            })
        },
        // 关闭弹出框
        closeEdit() {
            this.showEdit = false
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
    }
}