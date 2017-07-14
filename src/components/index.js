import demo from './demo/demo.vue'
import dialog from './dialog/index.vue'
import searchForm from './search/index' // 搜索
import pagination from './pagination/index.vue' // 分页
import operations from './operations/index.vue' // 操作区
import editor from './editor/index.vue' // 编辑器
import region from './region/region.vue' // 省市区
import imgUpload from './imgUpload/imgUpload.vue' // 上传图片

const install = function (Vue) {
    Vue.component(demo.name, demo)
    Vue.component(searchForm.name, searchForm)
    Vue.component(dialog.name, dialog)
    Vue.component(pagination.name, pagination)
    Vue.component(operations.name, operations)
    Vue.component(editor.name, editor)
    Vue.component(region.name, region)
    Vue.component(imgUpload.name, imgUpload)
}

export default install