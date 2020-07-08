<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="id" label="用户ID" width="150"></el-table-column>
      <el-table-column prop="name" label="停用/启用" width="120">
        <template slot-scope="props">
          <div>
            <el-switch v-model="props.row.status" @change="handleStatus(props.row)"></el-switch>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="username" label="登录账号" width="180"></el-table-column>
      <el-table-column prop="fullname" label="用户角色" width="150"></el-table-column>
      <el-table-column prop="firsttime" label="注册时间" width="200"></el-table-column>
      <el-table-column prop="email" label="邮箱地址" width="190"></el-table-column>
      <el-table-column prop="lasttime" label="最近登录时间" width="180"></el-table-column>
      <el-table-column fixed="right" label="操作" width="220">
        <template>
          <el-button size="mini">永久删除</el-button>
          <el-button size="mini">权限设置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="this.total"
    ></el-pagination>
  </div>
</template>

<script>
import { userList } from "../../../api/request";
export default {
  data() {
    return {
      tableData: [],
      userInfo: {
        limit: 10,
        page: 1
      },
      total: 1
    };
  },
  created() {
    this.getuserList(this.userInfo);
  },
  methods: {
    async getuserList(userInfo) {
      let data = await userList(userInfo);
      console.log(data);
      this.tableData = data.arr;
      this.total = data.total;
    },
    handleStatus(data) {
      console.log(data);
    },
    handleCurrentChange(value) {
      this.userInfo.page = value;
      this.getuserList(this.userInfo);
    },
    handleSelectionChange(...rest) {
      console.log(rest);
    }
  }
};
</script>

<style lang="scss">
</style>