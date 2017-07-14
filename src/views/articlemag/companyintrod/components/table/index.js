export default {
    props: {
        list: Array
    },
    methods: {
        handleEdit(index, rows) {
            this.$emit('edit', rows[index])
        }
    }
}