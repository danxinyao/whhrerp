import PgPiclist from './components/piclist/index.vue'
import PgEdit from './components/edit/index.vue'
import { designer as ajax} from 'services'
import { dropDownList as ajaxs} from 'services'
export default {
    components: {
        PgPiclist,
        PgEdit
    },
    data() {
        return {
            datalist: [],
            title: '编辑',
            showEdit: false,
            isEdit: false,
            isTable: false,
            editForm: {},
            query: {
                decorationType: -1,
                name: ''
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
                }
            ],
            getDecorType: [
                {
                    text: '全部',
                    value: -1
                }
            ]
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '家装/工装',
                        text: 'text',
                        value: 'value',
                        model: 'decorationType',
                        options: this.getDecorType
                    },
                    {
                        type: 'input',
                        label: '设计师名字',
                        model: 'name'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getDesignerDraw()
        this.getDecorationType()
    },
    methods: {
        // 获取装修类型
        getDecorationType() {
            ajaxs.getDecorationType().then((result) => {
                result.forEach((item) => {
                    this.getDecorType.push({
                        text: item.text,
                        value: item.value
                    })
                })
            })
        },
        // 获取图库列表
        getDesignerDraw() {
            if (this.query.decorationType == '') {
                this.query.decorationType = -1
            }
            ajax.getDesignerDraw(this.query,this.pageSize,this.page).then((result) => {
                this.datalist = result.data
                this.total = result.totalCount
            })
        },
        // 刷新
        refresh() {
            this.page = 1
            this.getDesignerDraw()
        },
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getDesignerDraw()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getDesignerDraw()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getDesignerDraw()
        },
       
        // 批量删除
        del() {
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
            this.editForm = item
            this.title = '编辑'
            this.isEdit = true
            this.showEdit = true
        },
        // 关闭编辑窗口
        closeEdit() {
            this.showEdit = false
        }
    }
}