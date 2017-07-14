import {article as ajax} from 'services'
import { cloneDeep } from 'lodash'
export default {
    props: {
        editForm: Object,
        show: Boolean
    },
    data() {
        return {
            form: {},
            content: '',
        }
    },
    watch: {
        editForm: {
            handler: function(val, oldVal) {
                this.form = cloneDeep(this.editForm)
                this.content = this.form.content
            },
            deep: true
        }
    },
    methods: {
        onSubmit() {
            if (this.form.content == undefined) {
                this.form.content = this.content
            }
            ajax.addArt({
                articleID: this.form.articleID,
                articleType: this.form.articleType,
                name: this.form.name,
                description: this.form.description,
                content: this.form.content,
                imageUrl: ''
            }).then((result) => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.refresh()
                this.close()
            })
        },
        refresh() {
            this.$emit('refresh')
        },
        close() {
            this.$emit('close')
        }
    }
}