import { upload as ajax } from 'services'
import { mapActions } from 'vuex'
export default {
    name: 'imgUpload',
    props: {
        multiple: {
            type: Boolean,
            default: false,
        },
        accept: {
            type: String,
            default: ''
        },
        files: {
            type: Array,
            default() {
                return []
            }
        },
        tip: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            fileList: [],
            isShowUpload: true
        }
    },
    watch: {
        files() {
            const tempFiles = []
            this.files.forEach((item) => {
                tempFiles.push({
                    imgUrl: item,
                    isSuccess: true
                })
            })
            this.fileList = tempFiles
        },
        fileList() {
            if (!this.multiple && this.fileList.length > 0) {
                this.isShowUpload = false
            }
            else {
                this.isShowUpload = true
            }
        }
    },
    methods: {
        ...mapActions([
            'setBigImg'
        ]),
        handleClick() {
            this.$refs.input.click()
        },
        handleChange(e) {
            const files = e.target.files
            if (!files)
                return

            this.uploadFiles(files)
            this.$refs.input.value = null
        },
        uploadFiles(files) {
            let postFiles = Array.prototype.slice.call(files)
            if (postFiles.length === 0)
                return
            if (!this.multiple)
                postFiles = postFiles.slice(0, 1)

            postFiles.forEach(file => {
                this.upload(file)
            })
        },
        upload(file) {
            if (this.multiple) {
                this.fileList.push({
                    isSuccess: false,
                    imgUrl: file
                })
            }
            else {
                this.fileList = []
                this.fileList.push({
                    isSuccess: false,
                    imgUrl: file
                })
            }
            ajax.uploadFile(file).then((result) => {
                this.handleSuccess(result.filePath, file)
            }).catch((error) => {
                this.$message.error('上传失败')
                this.fileList.forEach((item, index) => {
                    if (file == item.imgUrl) {
                        this.fileList.splice(index, 1)
                    }
                })
            })
        },
        handleSuccess(res, file) {
            const files = this.fileList
            const tempFiles = []
            files.forEach((item) => {
                if (item.isSuccess) {
                    tempFiles.push(item.imgUrl)
                }
                if (file == item.imgUrl) {
                    item.isSuccess = true
                    item.imgUrl = res
                    tempFiles.push(item.imgUrl)
                }
            })
            this.$emit('upload-success', this.multiple ? tempFiles : tempFiles[0])
        },
        handlePreview(file) {
            this.setBigImg({
                isShow: true,
                file: file
            })
        },
        handleRemove(file) {
            const fileList = this.fileList
            fileList.splice(fileList.indexOf(file), 1)
            this.$emit('upload-success', this.fileList)
        }
    }
}