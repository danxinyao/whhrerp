<template>
    <div id="app">
        <router-view></router-view>
        <el-dialog @close="closeBigImg" v-model="showBigImg.isShow">
            <img width="100%" :src="showBigImg.file">
        </el-dialog>
    </div>
</template>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                isShowBigImg: false,
                bigImg: ''
            }
        },
        computed: {
            ...mapGetters([
                'showBigImg'
            ])
        },
        methods: {
            ...mapActions([
                'setBigImg'
            ]),
            closeBigImg() {
                this.setBigImg = {
                    isShow: false,
                    file: ''
                }
            }
        }
    }
</script>

