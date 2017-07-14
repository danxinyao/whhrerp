// import {mallOrder as ajax} from 'services'
export default {	
    props: {
        isdetail: Boolean,
        mall: Object
    },
    data() {
        return {
            active: 0,
            active2: 0
        }
    },
    watch: {
        mall() {
            // 控制显示订单状态所在的状态
            this.active = 0
            if (this.mall.orderFlagTimeline.length !== 0) {
                this.mall.orderFlagTimeline.forEach((item) => {
                    if (item.hasValue) {
                        this.active++
                    }
                })
            }
            // 控制显示物流信息所在的状态
            this.active2 = 0
            if (this.mall.deliveryTimeline.length !== 0) {
                this.mall.deliveryTimeline.forEach((item) => {
                    if (item.hasValue) {
                        this.active2++
                    }
                })
            }
        }
    },
    methods: {
        close() {
            this.$emit('closeDetial')
        },
    }
}