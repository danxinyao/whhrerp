import PgRenovlist from './components/renovlist/index.vue'
import PgEdit from './components/edit/index.vue'
import { decorationeffect as ajax} from 'services'
import { dropDownList as ajaxs} from 'services'
export default {
    components: {
        PgRenovlist,
        PgEdit
    },
    data() {
        return {
            title: '编辑',
            showEdit: false,
            isEdit: false,
            editForm: {},
            decorationlist: [],
            selectlist: {
                getDecorationType: [
                    {
                        text: '全部',
                        value: -1
                    }
                ],
                houseTypes: [],
                houseStyles: [],
                housePlaces: [],
                houseAreas: [],
                houseSites: [],
            },
            query: {
                decorationType: -1,
                houseStyleID: '',
                houseTypeID: '',
                housePlaceID: '',
                houseAreaID: '',
                houseSiteID: ''
            },
            isShowMoreQuery: false, // 搜索区是否显示更多
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add'
                }
            ],
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '家装/工装',
                        text: 'text',
                        value: 'value',
                        model: 'decorationType',
                        options: this.selectlist.getDecorationType
                    },
                    {
                        type: 'select',
                        label: '户型',
                        text: 'name',
                        value: 'houseTypeID',
                        model: 'houseTypeID',
                        options: this.selectlist.houseTypes
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
                        label: '风格',
                        text: 'name',
                        value: 'houseStyleID',
                        model: 'houseStyleID',
                        options: this.selectlist.houseStyles
                    },
                    {
                        type: 'select',
                        label: '面积',
                        text: 'name',
                        value: 'houseAreaID',
                        model: 'houseAreaID',
                        options: this.selectlist.houseAreas
                    },
                    {
                        type: 'select',
                        label: '空间',
                        text: 'name',
                        value: 'housePlaceID',
                        model: 'housePlaceID',
                        options: this.selectlist.housePlaces 
                    },
                    {
                        type: 'select',
                        label: '场所',
                        text: 'name',
                        value: 'houseSiteID',
                        model: 'houseSiteID',
                        options: this.selectlist.houseSites
                    },
                ]
            }
        }
    },
    mounted() {
        this.getDecorationEffects()
        this.getHouseTypes()
        this.getHouseStyles()
        this.getHouseAreas()
        this.getHousePlaces()
        this.getHouseSites()
        this.getDecType()
    },
    methods: {
        getDecType() {
            ajaxs.getDecorationType().then((result) => {
                result.forEach((item) => {
                    this.selectlist.getDecorationType.push({
                        text: item.text,
                        value: item.value
                    })
                })
            })
        },
        getDecorationEffects() {
            // 如果家工装类型的搜索为空的话，默认为 -1，即全部
            if (this.query.decorationType == '') {
                this.query.decorationType = -1
            }
            ajax.getDecorationEffects(this.query,this.page, this.pageSize).then((result) => {
                this.decorationlist = result.data
                this.total = result.totalCount
            })
        },
        getHouseTypes() {
            ajaxs.getHouseTypes().then((result) => {
                // 获取户型的id和名字绑定到搜索下拉列表中
                result.forEach((house) => {       
                    let flg= false
                    for(var item of this.selectlist.houseTypes) {
                        if (item.text == house.text){
                            // 在数组中存在
                            flg = true
                            break
                        }
                    }
                    // 不存在
                    if (this.selectlist.houseTypes.length == 0) {
                        this.selectlist.houseTypes.push({name:house.text,houseTypeID:house.value})
                    } else if (flg == false) {
                        this.selectlist.houseTypes.push({name:house.text,houseTypeID:house.value})
                    }
                })         
            })
        },
        getHouseStyles() {
            ajaxs.getHouseStyles().then((result) => {
                // 获取风格的id和名字绑定到搜索下拉列表中
                result.forEach((house) => {       
                    let flg= false
                    for(var item of this.selectlist.houseStyles) {
                        if (item.text == house.text){
                            // 在数组中存在
                            flg = true
                            break
                        }
                    }
                    // 不存在
                    if (this.selectlist.houseStyles.length == 0) {
                        this.selectlist.houseStyles.push({name:house.text,houseStyleID:house.value})
                    } else if (flg == false) {
                        this.selectlist.houseStyles.push({name:house.text,houseStyleID:house.value})
                    }
                })         
            })            
        },
        getHouseAreas() {
            ajaxs.getHouseAreas().then((result) => {
                // 获取面积的id和名字绑定到搜索下拉列表中
                result.forEach((house) => {       
                    let flg= false
                    for(var item of this.selectlist.houseAreas) {
                        if (item.text == house.text){
                            // 在数组中存在
                            flg = true
                            break
                        }
                    }
                    // 不存在
                    if (this.selectlist.houseAreas.length == 0) {
                        this.selectlist.houseAreas.push({name:house.text,houseAreaID:house.value})
                    } else if (flg == false) {
                        this.selectlist.houseAreas.push({name:house.text,houseAreaID:house.value})
                    }
                })         
            }) 
        },
        getHousePlaces() {
            ajaxs.getHousePlaces().then((result) => {
                // 获取空间的id和名字绑定到搜索下拉列表中
                result.forEach((house) => {       
                    let flg= false
                    for(var item of this.selectlist.housePlaces) {
                        if (item.text == house.text){
                            // 在数组中存在
                            flg = true
                            break
                        }
                    }
                    // 不存在
                    if (this.selectlist.housePlaces.length == 0) {
                        this.selectlist.housePlaces.push({name:house.text,housePlaceID:house.value})
                    } else if (flg == false) {
                        this.selectlist.housePlaces.push({name:house.text,housePlaceID:house.value})
                    }
                })   
            }) 
        },
        getHouseSites() {
            ajaxs.getHouseSites().then((result) => {
                // 获取装修类型的id和名字绑定到搜索下拉列表中
                result.forEach((house) => {       
                    let flg= false
                    for(var item of this.selectlist.houseSites) {
                        if (item.text == house.text){
                            // 在数组中存在
                            flg = true
                            break
                        }
                    }
                    // 不存在
                    if (this.selectlist.houseSites.length == 0) {
                        this.selectlist.houseSites.push({name:house.text,houseSiteID:house.value})
                    } else if (flg == false) {
                        this.selectlist.houseSites.push({name:house.text,houseSiteID:house.value})
                    }
                })   
            }) 
        },
       // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getDecorationEffects()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getDecorationEffects()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getDecorationEffects()
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
        // 关闭编辑窗口
        closeEdit() {
            this.showEdit = false
        },
        refresh() {
            this.page = 1
            this.getDecorationEffects()
        }
    }
}