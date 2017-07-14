import PgTable from './components/table/index.vue'
import { messageBoard as ajax } from 'services'
export default {
    components: {
        PgTable
    },
    data() {
        return {
            commentList: [],
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15 // 每页条数
        }
    },
    mounted() {
        this.getMessageBoards()
    },
    methods: {
        getMessageBoards() {
            ajax.getMessageBoards(this.page, this.pageSize).then((result)=>{
                this.commentList = result.data
                this.total = result.totalCount
                console.log(this.commentList)
            })
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getMessageBoards()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getMessageBoards()
        },
        refresh() {
            this.page = 1
            this.getMessageBoards()
        },
        auditing(messageBoardID) {
            this.$confirm('您确定通过该条评论?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.changeMesBoardFlag(messageBoardID,100).then(() => {
                    //审核通过
                    this.$message({
                        type: 'success',
                        message: '审核通过!'
                    });
                    // 刷新父级组件，更变状态
                    this.getMessageBoards()
                })
            })
        },
        shield(messageBoardID) {
            this.$confirm('您确定屏蔽该条评论?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.changeMesBoardFlag(messageBoardID,97).then(() => {
                    //审核通过
                    this.$message({
                        type: 'success',
                        message: '屏蔽成功!'
                    });
                    // 刷新父级组件，更变状态
                    this.getMessageBoards()
                })
            })
        }
    }
}