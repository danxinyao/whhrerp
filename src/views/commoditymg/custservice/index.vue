<template>
    <section>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="售后说明">
                <pg-editor v-model="form.content" :init-content="content"></pg-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>