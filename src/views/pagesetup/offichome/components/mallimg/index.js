export default {
    props: {
        mallForm: Array
    },
    data() {
    	return {
    		// form: {},
            // initForm: {
            //     title: '',
            //     subPages : [
            //         {
            //             title: '',
            //             name: '',
            //             imageUrl: '',
            //             url: ''
            //         },
            //         {
            //             title: '',
            //             name: '',
            //             imageUrl: '',
            //             url: ''
            //         },
            //         {
            //             title: '',
            //             name: '',
            //             imageUrl: '',
            //             url: ''
            //         },
            //         {
            //             title: '',
            //             name: '',
            //             imageUrl: '',
            //             url: ''
            //         },
            //         {
            //             title: '',
            //             name: '',
            //             imageUrl: '',
            //             url: ''
            //         },
            //         {
            //             title: '',
            //             name: '',
            //             imageUrl: '',
            //             url: ''
            //         }
            //     ]
            // }
    	}
    },
    watch: {
        // editForm() {
        //     this.form = this.util.isEmptyObject(this.editForm) ? this.initForm : this.editForm
        // }
    },
    methods: {
        showDialog(subPages) {
            this.$emit('moddiashow',subPages)
        }
    }
}