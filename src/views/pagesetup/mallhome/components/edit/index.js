import { property as ajax } from 'services'
import { cloneDeep } from 'lodash'
export default {
    props: {
        title: '编辑',
        show: Boolean,
        editForm: {},
        size: {
            type: Object,
            default() {
                return {
                    width: '',
                    height: ''
                }
            }
        }
    },
    data() {
        return {
            mainFiles: [],
            form: {},
            imgSize: ''
        }
    },
    watch: {
        editForm() {
            this.form = cloneDeep(this.editForm)
            this.$nextTick(() => {
                if (this.form.imageUrl && this.form.imageUrl != '') {
                    this.mainFiles = [this.form.imageUrl]
                }
                else {
                    this.mainFiles = []
                }
                // 图片规格提示
                this.imgSize = ''+this.size.width+'*'+this.size.height
            })
        }
    },
    methods: {
        // 上传图片成功回调
        uploadSuccess(file) {
            this.form.imageUrl = file
        },
        // 保存
        save() {
            this.refresh(this.form)
            this.close()
        },
        // 刷新列表
        refresh(data) {
            this.$emit('refresh', data)
        },
        // 关闭窗口
        close() {
            this.$emit('close')
        }
    }
}