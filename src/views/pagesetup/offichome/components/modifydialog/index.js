export default {
    props: {
        show: Boolean,
        pageID: String,
        editForm: {}
    },
    data() {
        return {
            // form: {
            //     name: '',
            //     link: '',
            //     subtitle: ''
            // },
            form: {},
            initForm: {
                title: '',
                subPages : [
                    {
                        title: '',
                        name: '',
                        imageUrl: '',
                        url: ''
                    }
                ]
            },
            mainFiles: [],
        }
    },  
    watch: {
        editForm() {
            if (this.util.isEmptyObject(this.editForm)) {
                this.form = this.initForm
                this.mainFiles = []
            }
            else {
                this.form = this.editForm
                this.$nextTick(() =>{
                    if (this.form.imageUrl != '') {
                        this.mainFiles = []
                        this.mainFiles.push(this.form.imageUrl)
                    }
                })
            }
        }
    },
    methods: {
        subMit() {

        },
        moddiaclose() {
            this.$emit('closeModdia')
        },
        // 图片上传成功 一张图
        uploadSuccess(file) {
            this.form.mainImageUrl = file
        },
    }
}