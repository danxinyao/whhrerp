export default {
    props: {
        list: Array
    },
    methods: {
        handleEdit(index, rows) {
            this.$emit('edit', rows[index])
        },
        selectChange(value) {
        	this.$emit('select-change',value)
        },
        recommend(index,rows) {
            // 推荐到首页
            this.$emit('recommend',rows[index].designerID,rows[index].recommendedFlag)
        }
    }
}