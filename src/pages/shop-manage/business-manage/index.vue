<template>
  <div>
    <el-steps :active="active" align-center>
      <el-step title="个人信息" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="银行卡信息" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="手机号信息" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
    <keep-alive>
      <component :is="conName"></component>
    </keep-alive>
    <div>
      <el-button @click="prev">上一步</el-button>
      <el-button @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
import One from "./component/one";
import Two from "./component/two";
import Three from "./component/three";
export default {
  name: "step",
  data() {
    return {
      active: 0,
      conName: "One"
    };
  },
  components: {
    One,
    Two,
    Three
  },
  methods: {
    prev() {
      if (this.active == 0) {
        this.active = 0;
      } else {
        this.active--;
      }
      this.handleStepComponent()
    },
    next() {
      if (this.active == 2) {
        this.active = 2;
      } else {
        this.active++;
      }
      this.handleStepComponent()
    },
    handleStepComponent() {
      switch (this.active) {
        case 0:
          this.conName = "One";
          break;
        case 1:
          this.conName = "Two";
          break;
        case 2:
          this.conName = "Three";
          break;
      }
    }
  }
};
</script>

<style lang="scss">
</style>