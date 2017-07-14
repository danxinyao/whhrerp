export default {
	data:function(){
		return {
            // list: [
            //     {
            //         orderSheet: '123456',
            //         sheet: '987654321',
            //         payAmount: 456,
            //         cause: '破损'
            //     }
            // ]
		}
	},
    props: {
        list: Array
    },
    methods: {
        agree(index, rows) {
            this.$emit('agree',rows[index])
        },
        refuse(index, rows) {
            this.$emit('refuse',rows[index])
        },
        receiptAndRefund(index, rows) {
            this.$emit('receiptAndRefund',rows[index])
        },
        refuseRefund(index, rows) {
            this.$emit('refuse',rows[index])
        },
        // 查看大图
        showBigImg(url) {
            this.$emit('showBigImg', url)
        }
    }
}