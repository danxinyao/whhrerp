export default {
    name: 'PgOperations',
    props: {
        btns: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        handleClick(action) {
            if (action === 'del') {
                this.$confirm('确定删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$emit('del')
                }).catch(() => {

                })
            }
            else {
                this.$emit(action)
            }
        }
    }
}