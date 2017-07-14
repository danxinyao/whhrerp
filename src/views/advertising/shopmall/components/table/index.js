export default {
    props: {
        list: Array,
        len: Number
    },
    methods: {
        handleEdit(index, rows) {
            this.$emit('edit', rows[index])
        },
        arrowUp(index, rows) {
            this.$emit('arrowUp',rows[index].advertisingPositionID,rows[index-1].advertisingPositionID)
        },
        arrowDown(index, rows) {
            this.$emit('arrowDown',rows[index].advertisingPositionID,rows[index+1].advertisingPositionID)
        },
        selectChange(val) {
            this.$emit('select-change',val)
        }
    }
}