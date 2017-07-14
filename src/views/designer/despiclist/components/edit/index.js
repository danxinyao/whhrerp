import { designer as ajax} from 'services'
import { dropDownList as ajaxs} from 'services'
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
                designer: {},
                decorationType: '',
                mainImageUrl: '',
                subImageUrls: [],
                designerID: ''
            },
            getDecorationType: [
                {
                    text: '家装',
                    value: 0
                },
                {
                    text: '工装',
                    value: 1
                }
            ],
            designers: [],
            mainFiles: [],
            subFiles: [],
            imgSize: '770*520',
            rules: {
                name: [
                    { 
                        required: true, 
                        message: '请输入图库名称',
                        trigger: 'blur' 
                    }
                ]
            }
        }
    },
    watch: {
        editForm() {
            this.resetForm()
        },
    },
    mounted() {
        this.getAllDesigners()
    },
    created() {
        this.resetForm()
    },
    methods: {
        // 初始化设计师的图片
        resetForm() {
            if (this.util.isEmptyObject(this.editForm)) {
                this.form = cloneDeep(this.initForm)
                this.mainFiles = []
                this.subFiles = []
            }
            else {
                this.form = cloneDeep(this.editForm)
                this.$nextTick(() =>{
                    if (this.form.mainImageUrl) {
                        this.mainFiles = []
                        this.mainFiles.push(this.form.mainImageUrl)
                    }
                    if (this.form.subImageUrls.length > 0) {
                        this.subFiles = this.form.subImageUrls
                    }
                })
            }
        },
        // 获取全部的设计师
        getAllDesigners() {
            ajax.getAllDesigners().then((result) => {
                this.designers = result
            })
        },
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveDesignerDrawing(this.form).then(() => {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        // 重新获取图库列表
                        this.$emit('refresh')
                        this.close()
                    })
                }
            })
        },
        close() {
            this.$emit('close')
        },
        // 图片上传成功 一张图
        uploadSuccess(file) {
            this.form.mainImageUrl = file
        },
        // 多张图
        multipleUploadSuccess(files) {
            this.form.subImageUrls = files
        }
    }
}