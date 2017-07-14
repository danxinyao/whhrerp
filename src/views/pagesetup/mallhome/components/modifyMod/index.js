export default {
	props: {
		show: Boolean
	},
	data() {
        return {
            form: {
            	name: '',
            	categoryList: [
            		{
            			name: '',
            			link: ''
            		}
            	]
            }
        }
    },
	methods: {
		close() {
			this.$emit('close')
		},
		addCategory() {
			this.form.categoryList.push({
				name: '',
            	link: ''
			})
		}
	}
}