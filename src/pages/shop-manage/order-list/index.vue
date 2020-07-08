<template>
  <div>
    <template>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="id" label="id" width="180"></el-table-column>
        <el-table-column prop="data" label="日期" width="180"></el-table-column>
        <el-table-column prop="order" label="订单号" width="180"></el-table-column>
      </el-table>
    </template>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="handlepage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getOrderlist } from "../../../api/request";
export default {
  name: "order",
  data() {
    return {
      tableData: [],
      orderInfo: {
        limit: 10,
        page: 1
      },
      total: 0
    };
  },
  mounted() {
    this.handleOrder(this.orderInfo);
  },
  methods: {
    async handleOrder(orderInfo) {
      let data = await getOrderlist(orderInfo);
      console.log(data);
      this.tableData = data.arr;
      this.total = data.total;
    },
    handlepage(page) {
      this.orderInfo.page = page;
      this.handleOrder(this.orderInfo);
      // console.log(page)
    }
  }
};
</script>

<style lang="scss">
.el-table td,
.el-table th.is-leaf {
  text-align: center;
}
.page{
    margin-top: 30px;
}
</style>