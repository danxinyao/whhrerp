import PgTable from './components/table/index.vue'
import { merchantEnter as ajax } from 'services'

export default {
    components: {
        PgTable,
    },
    data() {
        return {
            merchantList: [],
            // 搜索条件
            query: {
                company: '',
                mobile: '',
                address: '',
                beginTime: '',
                endTime: ''
            },
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
                        label: '公司名',
                        model: 'company'
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
                    },
                ]
            }
        }
    },
    mounted() {
        // 初始化数据
        this.getMerchant()
    },
    methods: {
        // 获取数据
        getMerchant() {
            ajax.getMerchant(this.query,this.page,this.pageSize).then((result) => {
                this.merchantList = result.data
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
            this.getMerchant()
        },
        // 当前页数更改时触发
        currentChange(current) {
            this.page = current
            this.getMerchant()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getMerchant()
        },
    }
}