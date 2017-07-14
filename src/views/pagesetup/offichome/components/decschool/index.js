export default {
    props: {
        
    },
    data() {
    	return {
    		list: [
    			{
    				title: '装修学堂',
    				img1: ''
    			}
    		],
            list2: [
                {
                    arttitle: '大标题大标题',
                    artcontent: '装修简介简介简介装修简介简介简介装修简介简介简介装修简介简介装修简介介装修简介简介装修简介介装修'
                },
                {
                    arttitle: '大标题大标题',
                    artcontent: '装修简介简介简介装修简介简介简介装修简介简介简介装修简介简介装修简介介装修简介简介装修简介介装修'
                }
            ]
    	}
    },
    methods: {
       showDialog() {
            this.$emit('moddiashow')
        }
    }
}