export default {
    props: {
        
    },
    data() {
    	return {
    		list: [
    			{
    				'title': '案例展示',
    				'img1': ''
    			}
    		]
    	}
    },
    methods: {
       showDialog() {
            this.$emit('moddiashow')
        },
        modifyDesigner() {
            this.$router.push({
                path: '/stylist'
            })
        }
    }
}