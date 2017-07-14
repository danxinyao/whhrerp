export default {
    props: {
        show: Boolean
    },
    data() {
        return {
            form: {
                link: ''
            },
            fileList: [],
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
        // handleRemove(file, fileList) {
        //     console.log(file, fileList);
        // },
        // handlePreview(file) {
        //     console.log(file);
        // },
        moddiaclose() {
            this.$emit('closeModdia')
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    }
}