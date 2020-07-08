<template>
    <div>
        <el-form :model="inputData">
            <el-form-item>
                <el-input v-model="inputData.inputVal"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:"One",
    data() {
        return {
            inputData:{
                inputVal:""
            }
        }
    },
}
</script>