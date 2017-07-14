<template>
	<pg-dialog :style="small" title="修改模块" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="栏目名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <div class="category" v-for="item in form.categoryList">
                <el-form-item label="分类名">
                    <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="  ">
                	<el-row>
                		<el-col :span="2">
                    		<label >链接:</label>
                		</el-col>
                    	<el-col :span="22">
                    		<el-input v-model="item.link"></el-input>
                    	</el-col>
                    </el-row>   
                </el-form-item>
            </div>
            <el-form-item label="  ">
                <el-button type="text" @click="addCategory">添加分类</el-button>
            </el-form-item>
            <el-form-item>            
                <el-button type="primary">确 定</el-button>
                <el-button @click="close">取 消</el-button>
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