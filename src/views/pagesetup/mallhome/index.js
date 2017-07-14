import {customPage as ajax} from 'services'
import { cloneDeep } from 'lodash'
import PgEdit from './components/edit/index.vue'
import PgEditName from './components/editModule/index.vue'
export default {
    components: {
        PgEdit,
        PgEditName
    },
    data() {
        return {
            showEdit: false,
            editForm: {},
            showEditModule: false,
            editModuleForm: {},
            editModuleTitle: '新增模块',
            isEditModule: false,
            shopList: [],
            initForm: {
                imageUrl: '',
                subDefinePages: [
                    {
                        imageUrl: '',
                        subDefinePages: [],
                        status: 1,
                        id: '',
                        definePageID: '',
                        name: '',
                        title: '',
                        code: '',
                        url: '',
                        bgColor: '',
                        pageType: 4,
                        orderNo: 1,
                        parentID: ''
                    },
                    {
                        imageUrl: '',
                        subDefinePages: [],
                        status: 1,
                        id: '',
                        definePageID: '',
                        name: '',
                        title: '',
                        code: '',
                        url: '',
                        bgColor: '',
                        pageType: 4,
                        orderNo: 2,
                        parentID: ''
                    },
                    {
                        imageUrl: '',
                        subDefinePages: [],
                        status: 1,
                        id: '',
                        definePageID: '',
                        name: '',
                        title: '',
                        code: '',
                        url: '',
                        bgColor: '',
                        pageType: 4,
                        orderNo: 3,
                        parentID: ''
                    },
                    {
                        imageUrl: '',
                        subDefinePages: [],
                        status: 1,
                        id: '',
                        definePageID: '',
                        name: '',
                        title: '',
                        code: '',
                        url: '',
                        bgColor: '',
                        pageType: 4,
                        orderNo: 4,
                        parentID: ''
                    },
                    {
                        imageUrl: '',
                        subDefinePages: [],
                        status: 1,
                        id: '',
                        definePageID: '',
                        name: '',
                        title: '',
                        code: '',
                        url: '',
                        bgColor: '',
                        pageType: 4,
                        orderNo: 5,
                        parentID: ''
                    },
                    {
                        imageUrl: '',
                        subDefinePages: [],
                        status: 1,
                        id: '',
                        definePageID: '',
                        name: '',
                        title: '',
                        code: '',
                        url: '',
                        bgColor: '',
                        pageType: 4,
                        orderNo: 6,
                        parentID: ''
                    },
                    {
                        imageUrl: '',
                        subDefinePages: [],
                        status: 1,
                        id: '',
                        definePageID: '',
                        name: '',
                        title: '',
                        code: '',
                        url: '',
                        bgColor: '',
                        pageType: 4,
                        orderNo: 7,
                        parentID: ''
                    }
                ],
                status: 1,
                id: '',
                definePageID: '',
                name: '',
                title: '',
                code: '',
                url: '',
                pageType: 2,
                orderNo: 0,
                parentID: '',
            },
            size: {
                width: '',
                height: ''
            }
        }
    },
    mounted() {
        this.getShopPage()
    },
    methods: {
        // 加载数据
        getShopPage() {
            ajax.getShopPage().then((result) => {
                this.shopList = result
            })
        },
        // 修改模块名
        editM(item) {
            this.editModuleTitle = '修改模块名'
            this.isEditModule = true
            this.editModuleForm = {
                definePageID: item.definePageID,
                name: item.name
            }
            this.showEditModule = true
        },
        // 新增
        add() {
            this.editModuleTitle = '新增模块名'
            this.isEditModule = false
            this.editModuleForm = {}
            this.showEditModule = true
        },
        // 编辑
        edit(item,width,height) {
            this.showEdit = true
            this.editForm = item
            this.size.width =width
            this.size.height =height
        },
        // 删除模块
        del(data) {
            this.$confirm('确定删除 '+ data.name +' 模块吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.delModule([data.definePageID]).then(() => {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    this.getShopPage()
                })
            })
        },
        // 保存
        save(data) {
            let tempData = this.shopList
            tempData.forEach((item, parentIndex) => {
                item.subDefinePages.forEach((sub, index) => {
                    if (data.definePageID == sub.definePageID) {
                        tempData[parentIndex].subDefinePages[index] = data
                    }
                })
            })

            ajax.saveShopPage(tempData).then(() => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.getShopPage()
            })
        },
        // 关闭编辑窗
        closeEdit() {
            this.showEdit = false
        },
        // 
        saveEditModule(data) {
            if (this.isEditModule) {
                let tempData = this.shopList
                tempData.forEach((item, parentIndex) => {
                    if (data.definePageID == item.definePageID) {
                        tempData[parentIndex].name = data.name
                    }
                })
                ajax.saveShopPage(tempData).then(() => {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    })
                    this.getShopPage()
                })
            }
            else {
                const form = cloneDeep(this.initForm)
                form.name = data.name
                form.orderNo = this.shopList.length
                this.shopList.push(form)
                ajax.saveShopPage(this.shopList).then(() => {
                    this.$message({
                        message: '新增成功',
                        type: 'success'
                    })
                    this.getShopPage()
                })
            }
        },
        // 关闭模块窗
        closeEditModule() {
            this.showEditModule = false
        }
    }
}