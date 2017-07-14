import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import PgDetail from './components/details/index.vue'
import { mallOrder as ajax} from 'services'
export default {
    components: {
        PgTable,
        PgEdit,
        PgDetail
    },
    data() {
        return {
            orderslist: [],
            title: '编辑',
            isEdit: false,
            mall: {},
            showdetail: false,
            resetForm: {
                flag: -1,
                sheet: ''
            },
            query: {
                flag: -1,
                sheet: ''
            },
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
            mallOrder: {},
            type: 0
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '订单编号',
                        model: 'sheet'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getOrderList()
    },
    methods: {
        getOrderList() {
            ajax.getOrderList(this.query, this.page, this.pageSize).then((result)=>{
                this.orderslist = result.data
                this.total = result.totalCount
                console.log(this.orderslist)
            })
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getOrderList()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getOrderList()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getOrderList()
        },
        //编辑
        edit(item,flag) {
            this.isEdit = true
            // 把订单的配送状态和id传到编辑页面
            this.mallOrder = item
            if (flag === 0) {
                this.title = '发货'
                this.type = 0
            }
            else {
                this.title = '更新配送'
                this.type = 1
            }
        },
        closeEdit() {
            this.isEdit = false
        },
        detail(item){
            //订单详情
            ajax.getOrderDetail(item.mallOrderID).then((result) => {
                this.mall = result
                this.showdetail = true
            }).catch((error) => {
                this.$message({
                    message: error,
                    type: 'warning'
                })
            })
        },
        closedetail() {
            this.showdetail = false
        },
        handleClick(tab, event) {
            let flag = parseInt(tab.index)
            if (flag ===0) {
                this.query.flag = -1
            }
            else if (flag ===1) {
                this.query.flag = 0
            }
            else if (flag ===2) {
                this.query.flag = 10
            }
            else if (flag ===3) {
                this.query.flag = 20
            }
            this.getOrderList()
        },
        refresh() {
            this.page = 1
            this.getOrderList()
        }
    }
}