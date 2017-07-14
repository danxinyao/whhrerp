export default {
    props: {
       list: Array,
       showmall: Boolean
    },
    data() {
    	return {
            name: '',
            form: {
                name: '',
                categoryList: [
                    {
                        name: '分类名',
                        link: ''
                    }
                ]
            },
            show: false
    	}
    },
    methods: {
        close() {
            this.show = false
        },
        addCategory() {
            this.form.categoryList.push({
                name: '',
                link: ''
            })
        },
       showDia() {
            // this.$emit('diaShow')
            this.show = true
        },
        showMod() {
            this.$emit('modShow')
        },
        del(index) {
            this.$confirm('此操作将永久删除该模块, 是否继续?', '提示', {                           
                cancelButtonText: '取消',
                confirmButtonText: '确定',
                type: 'warning'
        }).then(() => {
            //删除一个楼层
            this.list.splice(index,1)
            // 如果楼层的个数为0的时候，把按钮隐藏，和设置模块的现实为FALSE
            if (this.list.length === 0) {
                this.$emit('closeMall')
            }
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
          });          
        });
      }
    }
}