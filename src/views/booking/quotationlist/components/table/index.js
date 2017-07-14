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
                // 使用正则表达式判断输入的内容是否为空
                inputPattern: /[^\s+]/,
                inputValue: rows[index].note,   
                inputErrorMessage: '备注不能为空'
            }).then(({ value }) => {
            	ajax.editDecorationQuotation({
                    decorationQuotationID: rows[index].decorationQuotationID,
                    note: value
                }).then(() => {
                    //修改备注之后重新请求
                    this.$emit('getDeco')
            		this.$message({
                    	type: 'success',
                    	message: '备注成功'
                	});
            	})
            })
        }
    }
}