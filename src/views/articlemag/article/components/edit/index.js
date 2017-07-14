import PgEditor from '../../../../../components/editor/index.vue'
import { article as ajax } from 'services'
import { cloneDeep } from 'lodash'
export default {
    components: {
        PgEditor
    },
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: {},
        options: Array
    },
    data() {
        return {
            form: {},
            content: '',
            initForm: {
                name: '',
                content: '',
                articleType: '',
                description: '',
                imageUrl: ''
            },
            mainFiles: [],
            imgSize: '210*150'
        }
    }, 
    mounted() {
        this.setInitContent()
    },
    watch: {
        editForm() {
            this.resetForm()
            this.setInitContent()
        },
    },
    created() {
        this.resetForm()
    },
    methods: {
        // 初始化编辑器
        setInitContent() {
            if (this.form.content) {
                this.content = this.form.content
            }
            else {
                this.content = ''
            }

            if (this.$refs.contentEditor) {
                this.$refs.contentEditor.updateEditor()
            }
        },
        // 初始化文章的图片
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
            if (this.form.content == undefined) {
                this.form.content = this.content
            }
            ajax.addArt(this.form).then(()=>{
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
        },
        // 图片上传成功 一张图
        uploadSuccess(file) {
            this.form.imageUrl = file
        },
    }
}