import { goods as ajaxs } from 'services'
import { homePage as ajax } from 'services'
export default {
	props: {
		showTable: Boolean
	},
	data() {
		return {
			isShowMoreQuery: false, // 搜索区是否显示更多
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
            query: {
                typeName: '',
            	name: '',
                dept1: '',
                dept2: '',
                dept3: ''
            },
            subDept1: [],
            subDept2: [],
            subDept3: [],
			goodslist: [],
            namelist: [
                {
                    value: 0,
                    title: '商品名称'
                },
                {
                    value: 2,
                    title: '商品编码'
                },
                {
                    value: 3,
                    title: '供应商名称'
                }
            ],
            selected: []
		}
	},
	computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '一级类目',
                        text: 'name',
                        value: 'deptID',
                        model: 'dept1',
                        options: this.subDept1
                    },
                    {
                        type: 'select',
                        label: '二级类目',
                        text: 'name',
                        value: 'deptID',
                        model: 'dept2',
                        options: this.subDept2
                    }
                ]
            }
        },
        // 搜索区显示更多
        moreQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '三级类目',
                        text: 'name',
                        value: 'deptID',
                        model: 'dept3',
                        options: this.subDept3
                    },
                    {
                        type: 'select',
                        label: '商品名称',
                        text: 'title',
                        value: 'value',
                        model: 'typeName',
                        options: this.namelist
                    },
                    {
                        type: 'input',
                        label: '请输入名称',
                        model: 'name'
                    }
                ]
            }
        },
    },
    watch: {
        'query.dept1':function(val, oldVal) {
            //根据deptID来查找所属的一级分类
            if(val !== oldVal) {
                // 先清空之前的值
                this.subDept2 = []
                this.query.dept2 = ''
                this.subDept3 = []
                let dep1 = this.query.dept1
                this.subDept1.forEach((dept) => {
                    if (dept.deptID === dep1) {
                        this.subDept2 = dept.subDept
                    }
                })
            }
        },
        'query.dept2':function(val, oldVal) {
            //根据deptID来查找所属的一级分类
            if(val !== oldVal) {
                // 先清空之前的值
                this.subDept3 = []
                this.query.dept3 = ''
                let dep2 = this.query.dept2
                this.subDept2.forEach((dept) => {
                    if (dept.deptID === dep2) {
                        this.subDept3 = dept.subDept
                    }
                })
            }
        }
    },
    mounted() {
        this.getThreeDept()
        this.getGoods()
    },
	methods: {
        getGoods() {
            // 判断用户选择的搜索条件
            if (this.query.type ===0) {
                this.query.name = this.query.typeName
            }
            else if (this.query.type === 1) {
                this.query.customNo = this.query.typeName
            }
            else {
                this.query.merchantsName = this.query.typeName
            }
            // 判断用户选择的商品级别
            if (this.query.dept3 === '') {
                if (this.query.dept2 === '') {
                    if (this.query.dept1 === '') {
                        this.query.deptID = ''
                    }
                    else {
                        this.query.deptID = this.query.dept1
                    }
                }
                else {
                    this.query.deptID = this.query.dept2
                }
            }
            else {
                this.query.deptID = this.query.dept3
            }
            // 获取商品列表
            ajaxs.getGoodsForAct(this.query,this.page,this.pageSize).then((result) => {
                this.goodslist = result.data
                this.total = result.totalCount
            })
        },
        getThreeDept() {
            //获取商品的分类
            ajax.getThreeDept().then((result) => {
                //分别获取商品的一级分类
                this.subDept1 = result 
            })
        },
		closeTable() {
			this.$emit('closeTable')
		},
		toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getGoods()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getGoods()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getGoods()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        addGoods() {
            this.$emit('selectGoods', this.selected)
            this.selected = []
            this.closeTable()
        }
	}
}