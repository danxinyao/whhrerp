import {designer as ajax} from 'services'
export default {
    props: {
        list: Array 
    },
    data() {
    	return {
    	}
    },
    methods: {
        handleEdit(index, rows) {
            this.$emit("edit",rows[index])
       },
        del(index, rows) {
            this.$confirm('此操作将永久删除该图库, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
            // 删除所选的图库
                ajax.delDesDraw(rows[index].designerDrawingID).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                // 重新获取图库列表
                    this.$emit('getDesDraw')
                })
            })
        }
    }
}