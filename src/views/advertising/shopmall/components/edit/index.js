import { advertisingPostion as ajax } from 'services'
import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: {},
    },
    data() {
        return {
            form: {},
            initForm: {
                imageUrl: '',
                url: '',
                positionType: 2
            },
            imgSize: '1920*400',
            mainFiles: []
        }
    },
    watch: {
        editForm() {
            this.resetForm()
        },
    },
    created() {
        this.resetForm()
    },
    methods: {
        resetForm() {
            if (this.util.isEmptyObject(this.editForm)) {
                this.form = cloneDeep(this.initForm)
                this.mainFiles = []
            }
            else {
                this.form = cloneDeep(this.editForm)
                this.$nextTick(() =>{
                    if (this.form.imageUrl) {
                        this.mainFiles = []
                        this.mainFiles.push(this.form.imageUrl)
                    }
                })
            }
        },
        onSubmit() {
            ajax.saveAdvertPosit(this.form).then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.refresh()
                this.close()
            })
        },
        close() {
            this.$emit('close')
        },
        // 图片上传成功 一张图
        uploadSuccess(file) {
            this.form.imageUrl = file
        },
        refresh() {
            this.$emit('refresh')
        }
    }
}