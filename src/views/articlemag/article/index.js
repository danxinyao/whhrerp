import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { article as ajax} from 'services'
import { dropDownList as ajaxs} from 'services'
export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            articlelist: [],
            title: '编辑',
            showEdit: false,
            isEdit: false,
            editForm: {},
            query: {
                articleType: -1,
                name: ''
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
            options: [
                {
                    text: '全部',
                    value: -1
                }
            ],
            selected: [],
            articleTypeList: []
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '文章分类',
                        text: 'text',
                        value: 'value',
                        model: 'articleType',
                        options: this.options
                    },
                    {
                        type: 'input',
                        label: '文章名',
                        model: 'name'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getArticles()
        this.getArticleType()
    },
    methods: {
        // 获取文章类型
        getArticleType() {
            ajaxs.getArticleType().then((result) => {
                this.articleTypeList = result
                result.forEach((item) => {
                    this.options.push({
                        text: item.text,
                        value: item.value
                    })
                })
            })
        },
        getArticles() {
            if (this.query.articleType == '') {
                this.query.articleType = -1
            }
            ajax.getArticles(this.query, this.page, this.pageSize).then((result)=>{
                this.articlelist = result.data
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
            this.getArticles()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getArticles()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getArticles()
        },
        // 全选
        selectChange(selections) {
            console.log(selections)
            this.selected = selections
        },
        // 批量删除
        del() {
            const articleId = []
            this.selected.forEach((item) => {
                articleId.push(item.articleID)
            })
            ajax.delArt(articleId).then(() => {
                // 删除成功的回调函数
                console.log('删除成功')
                // 更新文章列表
                this.getArticles()
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
            this.getArticles()
        }
    }
}