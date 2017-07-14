import {decorationeffect as ajax} from 'services'
import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: {},
        selections: Object,
    },
    data() {
        return {
            form: {},
            initForm: {
                name: '',
                decorationEffectID: '',
                houseStyleID: '',
                houseTypeID: '',
                housePlaceID: '',
                houseAreaID: '',
                houseSiteID: '',
                mainImageUrl: '',
                subImageUrls: [],
                decorationType: 0
            },
            mainFiles: [],
            subFiles: [],
            imgSize: '770*520',
            rules: {
                name: [
                    { 
                        required: true, 
                        message: '请输入标题',
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
    created() {
        this.resetForm()
    },
    methods: {
        // 初始化编辑时的图片
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
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.addDecorationEffect(this.form).then(() => {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        // 新增之后重新刷新页面
                        this.form = {}
                        this.refresh()
                        this.close()        
                    })  
                }
            })
        },
        refresh() {
            this.$emit('refresh')
        },
        close() {
            this.$emit('close')
        },
        uploadSuccess(file) {
            this.form.mainImageUrl = file
        },
        // 多张图
        multipleUploadSuccess(files) {
            this.form.subImageUrls = files
        },
    }
}