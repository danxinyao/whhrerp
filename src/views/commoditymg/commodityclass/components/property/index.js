import {property as ajax} from 'services'
import { cloneDeep } from 'lodash'
export default {
    props: {
        title: {
            type: String,
            default: '属性管理'
        },
        show: Boolean,
        editForm: Object
    },
    data() {
        return {
            query: {
                condition: '',
                pageSize: 1000,
                page: 1
            },
            tags: [],
            inputVisible: false,
            inputValue: ''
        }
    },
    watch: {
        editForm() {
            this.query.condition = this.editForm.value
            this.getProperty()
        }
    },
    methods: {
        // 请求属性列表
        getProperty() {
            ajax.getProperty(this.query).then((result) => {
                this.tags = result.data
            })
        },
        // 删除属性
        handleClose(tag) {
            // console.log(11222333)
            ajax.delProperty(tag.propertyID).then(() => {
                // 删除之后，刷新视图
                this.getProperty()
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
            })
        },
        showInput() {
            this.inputVisible = true
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            })
        },
        // 添加属性
        handleInputConfirm() {
            let inputValue = this.inputValue
            if (inputValue) {
                ajax.addProperty({
                    deptID: this.editForm.value,
                    name: inputValue
                }).then(() => {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    })
                    this.getProperty()
                    this.close()
                })
            }

            this.inputVisible = false
            this.inputValue = ''
        },
        close() {
            this.$emit('close')
        }
    }
}