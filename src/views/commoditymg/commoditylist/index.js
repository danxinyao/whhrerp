import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { goods as ajax} from 'services'
export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            goodslist: [],
            title: '编辑',
            isEdit: false,
            showEdit: false,
            isTable: false,
            editForm: {},
            query: {
                title: '',
                customNo: '',
                stockStatus: -1
            },
            isShowMoreQuery: false, // 搜索区是否显示更多
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
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
            activeIndex: '-1'
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '标题',
                        model: 'title'
                    },
                    {
                        type: 'input',
                        label: '商品编号',
                        model: 'customNo'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getGood()
    },
    methods: {
        getGood() {
           ajax.getGoods(this.query, this.page, this.pageSize).then((result)=>{
                this.goodslist = result.data
                this.total = result.totalCount
           })
        },
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getGood()
        },
        // 当前页数更新触发
        currentChange(current) {
            this.page = current
            this.getGood()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getGood()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 批量删除
        del() {
            const reduceId = []
            this.selected.forEach((item) => {
                reduceId.push(item.goodsID)
            })
            ajax.delGoods(reduceId).then(() => {
                //删除成功的回调函数
                this.getGood()
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
            ajax.getAdminGoodsDetail(item.goodsID).then((result) => {
                this.editForm = result
                this.title = '编辑'
                this.isEdit = true
                this.showEdit = true
            })
        },
        closeEdit() {
            this.showEdit = false
        },
        handleSelect(key, keyPath) {
            // 按照活动的状态来查询活动列表
            this.query.stockStatus = key
            this.page = 1
            this.getGood()
        },
        handleClick() {
            this.query.stockStatus = parseInt(this.activeIndex)
            this.page = 1
            this.getGood()
        }
    }
}