<template>
  <el-dialog title="商品信息更改" 
  :visible.sync="dialogFlag" 
  width="60%" 
  :before-close="handleClose"
  inline="true">
    <el-form :model="dialogInfo" label-width="80px" label-position="right">
      <el-form-item label="店铺名称">
        <el-input type="text" v-model="dialogInfo.shopName"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址">
        <el-input type="text" v-model="dialogInfo.shopAddress"></el-input>
      </el-form-item>
      <el-form-item label="店铺电话">
        <el-input type="text" v-model="dialogInfo.shopTel"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input type="text" v-model="dialogInfo.shopDesc"></el-input>
      </el-form-item>
      <!--推荐菜品-->
      <el-tag
        :key="index"
        v-for="(item,index) in dialogInfo.tag"
        closable
        :disable-transitions="false"
        @close="handleCloseTwo(index)"
      >{{item.text}}</el-tag>

      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      ></el-input>
      <!--输入新的菜品-->
      <el-button v-else class="button-new-tag" size="small" @click="showInput">新的标签</el-button>

      <el-form-item >
        <el-button class="btn_success" size="medium" type="primary" label="left" @click="submitForm(dialogInfo)">修改</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: "shopdialog",

  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    dialogData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      dialogFlag: false,
      dialogInfo: {},
      inputVisible: false,
      inputValue: ""
    };
  },
  watch: {
    dialogVisible(newVal) {
      this.dialogFlag = newVal;
    },
    dialogData(newVal) {
      console.log(newVal);
      this.dialogInfo = newVal;
    }
  },
  methods: {
    // 对话框关闭的回调
    handleClose() {
      this.$emit("close", false);
    },
    handleCloseTwo(index) {
      console.log(index);
      this.dialogInfo.tag.splice(this.dialogInfo.tag.indexOf(index), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dialogInfo.tag.push({text:inputValue,type:"success"});
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    submitForm(data) {
      console.log("123", data);
       this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
        this.dialogFlag=false
    }
  }
};
</script>

<style lang="scss">
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
el-form-item .btn_success{
  margin-top: 20px;
  margin-left: 0px!important;
}

</style>