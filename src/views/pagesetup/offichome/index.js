import {customPage as ajax} from 'services'
import PgEdit from './components/edit/index.vue'
export default {
    components: {
        PgEdit
    },
    data() {
        return {
            homeList: [],
            showEdit: false,
            editForm: {},
            size: {
                width: '',
                height: ''
            }
        }
    },
    mounted() {
        this.getHomePage()
    },
    methods: {
        getHomePage() {
            ajax.getHomePage().then((result) => {
                this.homeList = result
            })
        },
        // 编辑
        edit(item,width,height) {
            this.editForm = item
            this.showEdit = true
            this.size.width = width
            this.size.height = height
        },
        // 保存
        save(data) {
            let tempData = {}
            this.homeList.forEach((item) => {
                item.subDefinePages.forEach((sub, index) => {
                    if (data.definePageID == sub.definePageID) {
                        tempData = item
                        tempData.subDefinePages[index] = data
                    }
                })
            })
            ajax.saveHomePage(tempData).then(() => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.getHomePage()
            })
        },
        // 关闭编辑窗
        closeEdit() {
            this.showEdit = false
        }
    }
}