import { custompage as ajax} from 'services'
export default {
    props: {
        title: String,
        show: Boolean
    },
    data() {
        return {
            form: {
                name: '',
                link: '',
                bgcolor: '',
                fileList: []
            }
        }
    },
    methods: {
        onSubmit() {
            ajax.addDefPage(this.from).then(()=>{
                this.$message({
                message: '保存成功',
                type: 'success'
                })
            })
        },
        close() {
            this.$emit('close')
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
}