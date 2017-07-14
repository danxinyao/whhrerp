<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column align="center" prop="date" label="成交时间" width="620">
        </el-table-column>
        <el-table-column align="center" prop="money" label="成交金额" width="625">
            <template scope="scope">
                <span style="color: #13CE66; font-weight: bold" v-if="scope.row.state == 1">+</span>
                <span style="color: #FF4949; font-weight: bold" v-else>-</span>
                {{scope.row.money}}
            </template>
        </el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>