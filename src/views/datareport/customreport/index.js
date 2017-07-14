import PgTable from './components/table/index.vue'
import {report as ajax} from 'services'
export default {
    components: {
        PgTable
    },
    data() {
        return {
            datalist: [],
            query: {
                beginTime: '',
                endTime: ''
            },
            isShowMoreQuery: false, // 搜索区是否显示更多
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15 // 每页条数
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
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
        this.getUserRank()
    },
    methods: {
        getUserRank() {
            ajax.getUserRank(this.query,this.page,this.pageSize).then((result) => {
                this.datalist = result.data
                this.total = result.totalCount
            })
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getUserRank()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getUserRank()
        },
         // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getUserRank()
        }
    }
}