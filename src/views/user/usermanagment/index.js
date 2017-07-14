import PgTable from './components/table/index.vue'
import { userCenter as ajax} from 'services'
export default {
    components: {
        PgTable,
    },
    data() {
        return {
            userslist: [],
            query: {
                name: '',
                mobile: '',
                address: '',
                beginTime: '',
                endTime: ''
            },
            userCount: 0,
            isShowMoreQuery: false, // 搜索区是否显示更多
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '用户名',
                        model: 'name'
                    },
                    {
                        type: 'input',
                        label: '手机号',
                        model: 'mobile'
                    }
                ]
            }
        },
        // 搜索区显示更多
        moreQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '地址',
                        model: 'address'
                    },
                    {
                        type: 'time',
                        label: '开始时间',
                        model: 'beginTime'
                    },
                    {
                        type: 'time',
                        label: '结束时间',
                        model: 'endTime'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getUsersList()
    },
    methods: {
        getUsersList() {
            ajax.getUsersList(this.query,this.page,this.pageSize).then((result)=>{
                this.userslist = result.data
                // 获取中的用户数
                if (this.userCount === 0) {
                    this.userCount = result.totalCount
                }
                this.total = result.totalCount
            })
        },
         toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getUsersList()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getUsersList()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getUsersList()
        },
    }
}