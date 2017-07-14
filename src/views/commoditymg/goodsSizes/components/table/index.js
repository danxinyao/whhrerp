import {merchantEnter as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
   		handleEdit(index, rows) {
            this.$emit('edit', rows[index])
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}