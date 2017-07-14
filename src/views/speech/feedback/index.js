import PgTable from './components/table/index.vue'
import { speech as ajax } from 'services'
export default {
    components: {
        PgTable
    },
    data() {
        return {
            feedbacklist: [],
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
        }
    },
    mounted() {
        this.getFeedbacks()
    },
    methods: {
        getFeedbacks() {
            ajax.getFeedbacks(this.page, this.pageSize).then((result)=>{
                this.feedbacklist = result.data
                this.total = result.totalCount
            })
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getFeedbacks()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getFeedbacks()
        },
    }
}