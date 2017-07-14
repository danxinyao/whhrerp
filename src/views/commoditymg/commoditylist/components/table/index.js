import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        handleEdit(index, rows) {
            this.$emit('edit', rows[index])
        },
        // 上/下架
        shelfGood(index, rows){
            let flag = rows[index].stockStatus
            let str = ''
            let str1 = ''
            if (flag) {
                str = '你确定下架此商品?'
                str1 = '下架成功!'
                flag = 0
            }
            else {
                str = '你确定上架此商品?'
                str1 = '上架成功!'
                flag = 1
            }
            this.$confirm(str, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                 ajax.shelfGood(rows[index].goodsID,flag).then(() => {
                    rows[index].stockStatus = flag
                    this.$message({
                        message: str1,
                        type: 'success'
                    })
                })
            })
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}