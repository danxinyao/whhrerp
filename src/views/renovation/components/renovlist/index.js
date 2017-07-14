import {decorationeffect as ajax} from 'services'
export default {
    props: {
        list: Array,
        selections: Object
    },
    data() {
    	return {
            houseType: ''
    	}
    },
    watch: {
        list() {
            
        }
    },
    computed: {
        houseType() {
            this.selections.houseTypes.forEach((item) => {
                
            })
        }
    },
    methods: {
       handleEdit(index, rows) {
            this.$emit('edit', rows[index])
        },
        del(index, rows) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                ajax.delDecEffect(rows[index].decorationEffectID).then(() => {
                   this.$message({
                        type: 'success',
                        message: '删除成功!'
                    }); 
                    this.$emit('getDecEff')
                })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
        }
    }
}