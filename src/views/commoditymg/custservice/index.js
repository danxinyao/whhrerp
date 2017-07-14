import {goods as ajax} from 'services'
export default {
    data() {
        return {
            form: {
                supportContentID: '',
                content: ''
            },
            content: ''
        }
    },
    created() {
        this.getSupportContent()
    },
    methods: {
        getSupportContent() {
            ajax.getSupportContent().then((result) => {
                if (result) {
                    if (result[0]) {
                        this.form.supportContentID = result[0].supportContentID
                        this.form.content = result[0].content
                        this.content = this.form.content
                    }
                }
            })
        },
        save(){
            if (this.form.content == undefined) {
                this.form.content = this.content
            }
            ajax.addSupportContent(this.form).then(() => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
            })
        }
    }
}