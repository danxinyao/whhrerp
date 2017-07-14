import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'

export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            datalist: [],
            title: '编辑',
            sels: [],
            isEdit: false
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.datalist = [
                {
                    name: '[文章]运气不好？摆几个风水吉祥物',
                    date: '2017-03-20 16:15:15',
                    clicks: 12,
                    collections: 15,
                    comments: 8,                                          
                },
                {
                    name: '[文章]婴儿房装修易留隐患 这些要注意',
                    date: '2017-03-20 16:15:15',
                    clicks: 12,
                    collections: 15,
                    comments: 8,    
                },
                {
                    name: '[案例]家庭影院装修设计必知5件事情',
                    date: '2017-03-20 16:15:15',
                    clicks: 12,
                    collections: 15,
                    comments: 8,    
                },
                {
                    name: '[文章]婴儿房装修易留隐患 这些要注意',
                    date: '2017-03-20 16:15:15',
                    clicks: 12,
                    collections: 15,
                    comments: 8,    
                },
                {
                    name: '[案例]家庭影院装修设计必知5件事情',
                    date: '2017-03-20 16:15:15',
                    clicks: 12,
                    collections: 15,
                    comments: 8,    
                },
                {
                    name: '[文章]运气不好？摆几个风水吉祥物',
                    date: '2017-03-20 16:15:15',
                    clicks: 12,
                    collections: 15,
                    comments: 8,    
                },
                {
                    name: '[文章]运气不好？摆几个风水吉祥物',
                    date: '2017-03-20 16:15:15',
                    clicks: 12,
                    collections: 15,
                    comments: 8,    
                },
                {
                    name: '[文章]运气不好？摆几个风水吉祥物',
                    date: '2017-03-20 16:15:15',
                    clicks: 12,
                    collections: 15,
                    comments: 8,    
                },
                {
                    name: '[文章]运气不好？摆几个风水吉祥物',
                    date: '2017-03-20 16:15:15',
                    clicks: 12,
                    collections: 15,
                    comments: 8,    
                }
            ]
        },
        //编辑
        edit(item) {
            console.log(item)
            this.isEdit = true
        },
        closeEdit() {
            this.isEdit = false
        }
    }
}