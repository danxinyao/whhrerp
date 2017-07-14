export default {
    props: {
        list: Array
    },
    methods: {
        handleEdit(index, rows) {
            this.$emit('edit', rows[index])
        },
        stopAndStartLogin(index, rows) {
            this.$emit('stopAndStartLogin',rows[index].loginID,rows[index].status)
        },
        del(index, rows) {
            this.$emit('delAccount',rows[index].loginID)
        },
        editPass(index, rows) {
            this.$emit('editPass',rows[index].loginID)
        }
    }
}