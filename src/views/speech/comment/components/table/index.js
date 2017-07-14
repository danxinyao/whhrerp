export default {
    props: {
        list: Array
    },
    data(){
         return {
         }
    },
    methods: {
        auditing(index,row){
            this.$emit('auditing',row[index].messageBoardID)
        },
        shield(index,row){
            this.$emit('shield',row[index].messageBoardID)
        }
    }
}