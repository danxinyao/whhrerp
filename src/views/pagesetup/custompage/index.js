import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { custompage as ajax} from 'services'
export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            defpagelist: [],
            title: '编辑',
            isEdit: false,
            total: 20, // 数据总条数
            currentPage: 1, // 当前页数
            pageSize: 15, // 每页条数
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add'
                }
            ]
        }
    },
    mounted() {
        this.getDefPage()
    },
    methods: {
        getDefPage() {
            ajax.getDefPage().then((result)=>{
                this.defpagelist = result
            })
        },
         // 当前页数更是触发
        currentChange(current) {
            this.currentPage = current
            this.getDefPage()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getDefPage()
        },
        // 全选
        selectChange(selections) {
            console.log(selections)
        },
        // 批量删除
        del() {
            console.log('del')
        },
        // 新增
        add() {
            this.isEdit = true
        },
        //编辑
        edit(item) {
            console.log(item)
            this.isEdit = true
        },
        closeEdit() {
            this.isEdit = false
        }
    }
}