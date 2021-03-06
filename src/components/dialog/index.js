export default {
    name: 'PgDialog',
    props: {
        title: String,
        isShow: Boolean,
        size: {
            type: String,
            default: 'small'
        }
    },
    data() {
        return {
            dialogVisible: false
        }
    },
    watch: {
        isShow() {
            this.dialogVisible = this.isShow
        }
    },
    methods: {
        onClose() {
            this.dialogVisible = false
            this.$emit('close')
        }
    }
}