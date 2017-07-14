<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="角色名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <!-- <el-form-item label="操作权限">
                <el-checkbox-group v-model="typeName">
                    <el-checkbox label="访问"></el-checkbox>
                    <el-checkbox label="编辑"></el-checkbox>
                    <el-checkbox label="删除"></el-checkbox>
                </el-checkbox-group>
            </el-form-item> -->
            <el-form-item label="*菜单权限">
                <div class="menus" v-for="item in form.roleMenus">
                    <p class="list-title">{{item.name}}</p>
                    <el-checkbox v-for="item1 in item.subMenus" v-model="item1.isChecked">{{item1.name}}</el-checkbox>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="close">取消</el-button>
            </el-form-item>
        </el-form>
    </pg-dialog>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>