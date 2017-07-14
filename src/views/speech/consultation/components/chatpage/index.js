import {speech as ajax} from 'services'
export default {
    props: {
        msglist: Array,
        show: Boolean
    },
    data() {
    	return {
            reply: {
                replytime: '',
                replycontent: '',
                name: ''
            },
            replylist: [],
            showreply: false
    	}
    },
    methods: {
       reply() {
            this.showreply = true
       }
    }
}