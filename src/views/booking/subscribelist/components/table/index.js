import { subscribe as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        remark(index,rows){
            this.$prompt('请输入备注', '备注', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /[^\s+]/,
                inputValue: rows[index].note,   
                inputErrorMessage: '备注不能为空'
            }).then(({ value }) => {
            	ajax.editSubscribeNote({
                    subscribeID: rows[index].subscribeID,
                    note: value
                }).then(() => {
                    // 备注之后重新请求
                    this.$emit('getSub')
            		this.$message({
                    	type: 'success',
                    	message: '备注成功'
                	});
            	})
            })
        }
    }
}