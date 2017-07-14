import { speech as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    data() {
    	return {
    		note: {
                login: '',
                mobile: '',
                password: '',
                code: '',
                message: ''
            },
    		dialogFormVisible: false,
            note: ''
    	}
    },
    methods: {
        handleCurrentChange(val) {
            console.log(val)
            // 点击查看用户消息之后，清空用户的信息条数
            val.userCount = 0
            this.$emit('getmsg', val.userID)
        },
        remark(index,rows){
            this.$prompt('请输入备注', '备注', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /[^\s+]/,
                inputValue: rows[index].userNote,
                inputErrorMessage: '备注不能为空'
            }).then(({ value }) => {
                ajax.editUserNote({
                    userID: rows[index].userID,
                    note: value
                }).then(() => {
                    // 备注之后重新请求
                    this.$emit('getMessUsers')
                    console
                    this.$message({
                        type: 'success',
                        message: '备注成功'
                    });
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });       
            });
        },
        del(index, rows) {
            this.$confirm('你确定删除此聊天记录?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.delUserMess(rows[index].userID).then(() => {
                    // 删除聊天记录之后，清空视图中的消息
                    this.refresh()
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }) 
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        refresh() {
            this.$emit('refresh')
        }
    }
}