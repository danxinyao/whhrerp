export default {
	data: function(){
		return {
		}
	},
    props: {
        list: Array
    },
    methods: {
        handleEdit(index, rows,type) {
            this.$emit('edit', rows[index],type)
        },
        detail(index, rows){
            this.$emit('detail', rows[index])
        }
    }
}