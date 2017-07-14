import { homePage, dept } from 'services'
import PgEdit from './components/edit/index.vue'
import PgProperty from './components/property/index.vue'
let id = 1000;
export default {
    components: {
        PgEdit,
        PgProperty
    },
    data() {
        return {
            deptData: [],
            defaultProps: {
              children: 'children',
              label: 'label'
            },
            title: '编辑',
            isEdit: false,
            showEdit: false,
            editForm: {},
            isFirst: false,
            propertyForm: {},
            showProperty: false,
        }
    },
    mounted() {
        this.getThreeDept()
    },
    methods: {
        // 关闭编辑框
        closeEdit() {
            this.showEdit = false
        },
        // 初始化数据
        getThreeDept() {
            homePage.getThreeDept().then((result) => {
                const subDept = []
                result.forEach((item) => {
                    const subDept2 = []
                    item.subDept.forEach((item2) => {
                        const subDept3 = []
                        item2.subDept.forEach((item3) => {
                            subDept3.push({
                                value: item3.deptID,
                                label: item3.name,
                                level: 3
                            })
                        })
                        subDept2.push({
                            value: item2.deptID,
                            label: item2.name,
                            level: 2,
                            children: subDept3
                        })
                    })
                    subDept.push({
                        value: item.deptID,
                        label: item.name,
                        level: 1,
                        children: subDept2
                    })
                })

                this.deptData = subDept
            })
        },
        // 刷新页面
        refresh() {
            this.getThreeDept()
        },
        // 新增一级分类
        addSubsOne() {
            this.isFirst = true
            this.editForm = {}
            this.title = '新增一级分类'
            this.isEdit = false
            this.showEdit = true
        },
        // 新增子分类
        addSubDept(store, data) {
            this.editForm = {
                label: '',
                value: data.value
            }
            this.title = '新增子分类'
            this.isEdit = false
            this.isFirst = false
            this.showEdit = true
        },
        // 删除分类
        delDept(store, data) {
            const delData = data
            this.$confirm('确定删除 '+ delData.label +' 吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                dept.delDept(delData.value).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })

                    this.getThreeDept()
                }).catch((error) => {
                    this.$message({
                        type: 'error',
                        message: error
                    })
                })
            })
        },
        // 修改分类
        updateDept(store, data) {
            this.editForm = {
                label: data.label,
                value: data.value
            }
            this.title = '修改'
            this.isEdit = true
            this.isFirst = false
            this.showEdit = true
        },
        // 属性
        getProperty(store, data) {
            this.propertyForm = data
            this.showProperty = true
        },
        // 关闭属性弹窗
        closeProperty() {
            this.showProperty = false
        },
        renderContent(h, { node, data, store }) {
            if (data.level === 3) {
                return (
                    <span>
                        <span>
                          <span>{ node.label }</span>
                        </span>
                        <span style="margin-left: 45px;">
                          <el-button type="text" size="mini" on-click={ () => this.delDept(store, data) }>删除分级</el-button>
                          <el-button type="text" size="mini" on-click={ () => this.updateDept(store, data) }>修改名称</el-button>
                          <el-button type="text" size="mini" on-click={ () => this.getProperty(store, data) }>属性</el-button>
                        </span>
                    </span>
                )
            }
            else {
                return (
                    <span>
                        <span>
                          <span>{ node.label }</span>
                        </span>
                        <span style="margin-left: 45px;">
                            <el-button type="text" size="mini" on-click={ () => this.addSubDept(store, data) }>新增分级</el-button>
                            <el-button type="text" size="mini" on-click={ () => this.delDept(store, data) }>删除分级</el-button>
                            <el-button type="text" size="mini" on-click={ () => this.updateDept(store, data) }>修改名称</el-button>
                        </span>
                    </span>
                )
            }
        } 
    }
}