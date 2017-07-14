import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { merchant as ajax} from 'services'
export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            merchantslist: [],
            merchantcount: 0,
            title: '编辑',
            showEdit: false,
            editForm: {},
            isEdit: false,
            query: {
                name: '',
                mobile: ''
            },
            isShowMoreQuery: false, // 搜索区是否显示更多
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add'
                },
                {
                    name: '批量删除',
                    action: 'del'
                }
            ],
            selected: []
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '商户名',
                        model: 'name'
                    },
                    {
                        type: 'input',
                        label: '手机号',
                        model: 'mobile'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getMerchants()
    },
    methods: {
        getMerchants() {
            ajax.getMerchants(this.query,this.page,this.pageSize).then((result)=>{
                this.merchantslist = result.data
                this.total = result.totalCount
                // 第一次请求的时候，保存总的商户数
                if (this.merchantcount === 0) {
                    this.merchantcount = result.totalCount
                }
            })
        },
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getMerchants()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getMerchants()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getMerchants()
        },
         // 全选
        selectChange(selections) {
            this.selected = selections
        },
         // 批量删除
        del() {
            const disCountID = []
            this.selected.forEach((item) => {
                disCountID.push(item.merchantsID)
            })
            console.log(disCountID)
            ajax.delMerchants(disCountID).then(() => {
                //删除成功的回调函数
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                // 删除之后重新加载活动列表
                this.getMerchants()
            })
        },
        // 新增
        add() {
            this.editForm = {}
            this.title = '新增'
            this.isEdit = false
            this.showEdit = true
        },
        //编辑
        edit(item) {
            this.editForm = item
            this.title = '编辑'
            this.isEdit = true
            this.showEdit = true
        },
        closeEdit() {
            this.showEdit = false
        },
        refresh() {
            this.page = 1
            this.getMerchants()
        }
    }
}