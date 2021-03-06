import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { advertisingPostion as ajax } from 'services'
export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            datalist: [],
            title: '编辑',
            showEdit: false,
            isEdit: false,
            editForm: {},
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
            // 操作区按钮
            operations: [
                {
                    name: '批量删除',
                    action: 'del'
                },
                {
                    name: '新增',
                    action: 'add'
                }
            ],
            selected: [],
            len: 0
        }
    },
    mounted() {
        this.getAdvertPosit()
    },
    methods: {
        getAdvertPosit() {
            ajax.getAdvertPosit({
                condition: 3,
                pageSize: 100,
                page: 1
            }).then((result) => {
                this.datalist = result.data
                this.len = this.datalist.length
                this.total = result.totalCount
            })
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getAdvertPosit()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getAdvertPosit()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 批量删除
        del() {
            const advPosID = []
            this.selected.forEach((item) => {
                advPosID.push(item.advertisingPositionID)
            })
            ajax.delAdvertPosit(advPosID).then(() => {
                //删除成功的回调函数
                this.getAdvertPosit()
            })
        },
        // 新增
        add() {
            this.editForm = {}
            this.title = '新增'
            this.isEdit = false
            this.showEdit = true
        },
        //编辑
        edit(item) {
            this.editForm = item
            this.title = '编辑'
            this.isEdit = true
            this.showEdit = true
        },
        closeEdit() {
            this.showEdit = false
        },
        refresh() {
            this.page = 1
            this.getAdvertPosit()
        },
        arrowUp(advID1,advID2) {
            ajax.AdvPosSort(advID1,advID2).then(() =>{
                // 排序成功之后，刷新视图
                this.$message({
                    message: '排序成功',
                    type: 'success'
                })
                this.getAdvertPosit()
            })
        },
        arrowDown(advID1,advID2) {
            ajax.AdvPosSort(advID1,advID2).then(() =>{
                // 排序成功之后，刷新视图
                this.$message({
                    message: '排序成功',
                    type: 'success'
                })
                this.getAdvertPosit()
            })
        },
    }
}