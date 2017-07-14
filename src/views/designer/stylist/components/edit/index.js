import { designer as ajax} from 'services'
import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: {}
    },
    data() {
        return {
            form: {},
            initForm: {
                name: '',
                description: '',
                avatar: '',
                designerID: ''
            },
            mainFiles: [],
            imgSize: '120*120',
            rules: {
                name: [
                    { 
                        required: true, 
                        message: '请输入设计师名称',
                        trigger: 'blur' 
                    }
                ],
                description: [
                    {
                        max: 255,
                        message: '不能超过255个字符',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    watch: {
        editForm() {
            this.resetForm()
        }
    },
    created() {
        this.resetForm()
    },
    methods: {
        // 编辑的时候，初始化设计师头像
        resetForm() {
            if (this.util.isEmptyObject(this.editForm)) {
                this.form = cloneDeep(this.initForm)
                this.mainFiles = []
            }
            else {
                this.form = cloneDeep(this.editForm)
                this.$nextTick(() =>{
                    if (this.form.avatar) {
                        this.mainFiles = []
                        this.mainFiles.push(this.form.avatar)
                    }
                })
            }
        },
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveDesigner(this.form).then(()=>{
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.$emit('getDes')
                        this.close()
                    }).catch((error) => {
                        this.$message({
                            message: error,
                            type: 'warning'
                        })
                    })
                }
            })
        },
        close() {
            this.$emit('close')
        },
         // 图片上传成功 一张图
        uploadSuccess(file) {
            console.log(file)
            this.form.avatar = file
        },
    }
}