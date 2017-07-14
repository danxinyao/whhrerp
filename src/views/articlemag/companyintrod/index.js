import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import {article as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            infoList: [],
            title: '编辑',
            isEdit: false,
            editForm: {}
        }
    },
    mounted() {
        this.getCompanyInfos()
    },
    methods: {
        getCompanyInfos() {
            ajax.getCompanyInfos().then((result) => {
                this.infoList = result
            })
        },
        //编辑
        edit(item) {
            this.editForm = item
            this.isEdit = true
        },
        closeEdit() {
            this.isEdit = false
        }
    }
}