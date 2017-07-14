import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { designer as ajax} from 'services'
export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            desiglist: [],
            title: '编辑',
            showEdit: false,
            isEdit: false,
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
                    name: '批量删除',
                    action: 'del'
                },
                {
                    name: '新增',
                    action: 'add'
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
                        label: '设计师名字',
                        model: 'name'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getDesigners()
    },
    methods: {
        getDesigners() {
            ajax.getDesigners(this.query,this.page, this.pageSize).then((result)=>{
                this.desiglist = result.data
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
            this.getDesigners()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getDesigners()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.page = 1
            this.pageSize = size
            this.getDesigners()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 批量删除
        del() {
            const disCountID = []
            this.selected.forEach((item) => {
                disCountID.push(item.designerID)
            })
            ajax.delDesigner(disCountID).then(() => {
                //删除成功的回调函数
                console.log('删除成功')
                // 删除之后重新加载活动列表
                this.getDesigners()
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
        // 推荐到首页
        recommend(designerID,recommendedFlag) {
            // 只能推荐4个设计师到首页，超过时，提示
            let count = 0
            let str = ''
            let str1 = ''
            this.desiglist.forEach((item) => {
                if (item.recommendedFlag ===1) {
                    count++
                }
            })
            if (count ===4) {
                this.$message({
                    message: '只能推荐4个设计师到首页',
                    type: 'warning'
                })
            }
            if (recommendedFlag) {
                str = '您确定取消推荐此设计师?'
                str1 = '已取消推荐!'
            }
            else {
                str = '您确定推荐此设计师到首页?'
                str1 = '推荐成功!'
            }
            this.$confirm(str, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.recommendToHomePage(designerID).then(() => {
                    this.$message({
                        message: str1,
                        type: 'success'
                    })
                    this.getDesigners() 
                })
            }) 
        }
    }
}