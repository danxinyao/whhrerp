import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import pgtable from './components/pgtable/index.vue'
import { activity as ajax} from 'services'
export default {
    components: {
        PgTable,
        PgEdit,
        pgtable
    },
    data() {
        return {
            discountlist: [],
            title: '编辑',
            showEdit: false,
            isEdit: false,
            isTable: false,
            editForm: {},
            query: {
                activityName: '',
                activityFlag: -1
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
            goods: [],
            activeIndex: '1'
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '活动名称',
                        model: 'activityName'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getTimeDiscounts()
    },
    methods: {
        getTimeDiscounts() {
            // 如果搜索条件为空，就查询全部
            if (this.query.activityFlag === '') {
                this.query.activityFlag = -1
            }
            ajax.getTimeDiscounts(this.query, this.page, this.pageSize).then((result)=>{
                this.discountlist = result.data
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
            this.getTimeDiscounts()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getTimeDiscounts()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getTimeDiscounts()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 批量删除
        del() {
            const disCountID = []
            this.selected.forEach((item) => {
                disCountID.push(item.timeDiscountID)
            })
            ajax.delTimeDiscount(disCountID).then(() => {
                //删除成功的回调函数
                console.log('删除成功')
                // 删除之后重新加载活动列表
                this.getTimeDiscounts()
            })
        },
        // 新增
        add() {
            console.log('add')
            this.editForm = {}
            this.title = '新增'
            this.isEdit = false
            this.showEdit = true
        },
        //编辑
        edit(item) {
            // 点击编辑的时候，查询单个商品的详情
            ajax.getTimeDiscount(item.timeDiscountID).then((result) => {
                this.editForm = result
                this.title = '编辑'
                this.isEdit = true
                this.showEdit = true
            })
        },
        refresh() {
            this.page = 1
            this.getTimeDiscounts()
        },
        closeEdit() {
            this.showEdit = false
        },
        //商品选择
        showTable() {
            this.isTable = true
        },
        closeTable() {
            this.isTable = false
        },
        selectGoods(selectedGoods) {
            this.goods = selectedGoods
        },
        handleSelect(key, keyPath) {
            // 按照活动的状态来查询活动列表
            this.query.activityFlag = key-2
            this.getTimeDiscounts()
        }
    }
}