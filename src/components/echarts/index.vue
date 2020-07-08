<template>
  <div class="echart-container">
    <div class="echart-background">
      <div v-for="item in nowdata" :key="item.id" class="now-data">
        <div>
          <div class="shuzi">{{item.nowAdd}}</div>

          <div>新增商户</div>
        </div>
        <div>
          <div>{{item.nowAddAdmin}}</div>
          <div>新增管理员</div>
        </div>
      </div>
      <div v-for="item in totaldata" :key="item.id" class="total-data">
        <div>
          <div>{{item.registerAdmin}}</div>

          <div>订单</div>
        </div>
        <div>
          <div>{{item.totalAdmin}}</div>

          <div>管理员</div>
        </div>
      </div>
    </div>

    <!-- 折线图 -->
    <div class="chart-container">
<div class="chart" ref="myEcharts"></div>
    </div>
    
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      dataArray: {}
    };
  },
  props: {
    nowdata: {
      type: Array
    },
    totaldata: {
      type: Array
    },
    datalist: {
      type: Object
    }
  },
  mounted() {
    this.chartHandle();
    console.log("tag", dataArray);
  },
  watch: {
    datalist: function(val) {
      console.log(val);
      this.chartHandle(val);
    },
    immediate: true
  },
  methods: {
    chartHandle(val) {
      let myechart = echarts.init(this.$refs.myEcharts);
      var options = {
        title: {
          text:"信息统计表",
          left: "center",
          bottom:0,
          textStyle:{
            color:"#999",
            fontSize:22,
          }
        },
        xAxis: {
          data: []
        },
        yAxis: {
          min: 0,
          max: 300
        },
        // 图例
        legend: {
          show: true,
          data: ["新注册用户", "新增订单", "新增管理员"]
          //   top:'bottom'
        },
        // 鼠标移动上显示数据
        tooltip: {
          show: true
        },
        series: [
          {
            type: "line",
            data: [],
            name: "新注册用户"
          },
          {
            type: "line",
            data: [],
            name: "新增订单"
          },
          {
            type: "line",
            data: [],
            name: "新增管理员"
          }
        ]
      };
      myechart.setOption(options);
      myechart.setOption({
        xAxis: {
          data: val.month
        },
        series: [
          {
            data: val.addUser
          },
          {
            data: val.order
          },
          {
            data: val.admin
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.echart-container{
  width: 100%;
  height: 200px;
}
.echart-background {
  width: 1100px;
  height: 200px;
  background: #fff;
  overflow: hidden;
  .now-data {
    height: 150px;
    float: left;
    margin: 25px 0px 25px 72px;
    & > div {
      width: 200px;
      height: 150px;
      float: left;
      text-align: center;
      color: #fff;
      margin-right: 50px;
      & > div:nth-child(1) {
        font-size: 38px;
        margin-top: 30px;
      }
      & > div:nth-child(2) {
        margin-top: 30px;
        
      }
    }
    & > div:nth-child(1) {
      background: #409eff;
    }
     & > div:nth-child(2) {
      background: #67C23A;
    }
  }
  .total-data {
    height: 150px;
    float: left;
    margin: 25px 0px 25px 0px;
   & > div {
      width: 200px;
      height: 150px;
      float: left;
      text-align: center;
      color: #fff;
       margin-right: 50px;
      & > div:nth-child(1) {
        font-size: 38px;
        margin-top: 30px;
      }
      & > div:nth-child(2) {
        margin-top: 30px;
       
      }
    }
    & > div:nth-child(1) {
      background: #E6A23C;
    }
     & > div:nth-child(2) {
      background: #F56C6C;
    }
  }
}
.chart-container{
  margin-top: 20px;
  width: 1100px;
  height: 600px;
  background: #fff;
  padding-top: 50px;
}
.chart {
  width: 1100px;
  height: 400px;
}
</style>