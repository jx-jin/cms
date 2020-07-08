<template>
  <div>
    <!--搜索-->
    <el-form :inline="true" :model="search_model">
      <el-form-item label="商家名称">
        <el-input v-model="search_model.shopname" @input="handleIput"></el-input>
      </el-form-item>
      <el-form-item label="菜品推荐">
        <el-select
          v-model="search_model.shopRecommendVal"
          placeholder="请选择"
          @change="handleshopRecommendVal"
        >
          <el-option
            v-for="item in search_model.shopRecommend"
            :key="item.text"
            :label="item.text"
            :value="item.text"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="销量">
        <el-select v-model="search_model.volumeVal" placeholder="请选择">
          <el-option v-for="item in search_model.volume" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.shopName }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shopName }}</span>
            </el-form-item>
            <el-form-item label="商品ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <div class="tag-group">
                <el-tag
                  v-for="(item,index) in props.row.tag"
                  :key="index"
                  :type="item.type"
                >{{item.text}}</el-tag>
              </div>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.shopAddress }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.shopDesc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <!--表头-->
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="店铺名称" prop="shopName" width="180"></el-table-column>
      <el-table-column label="店铺地址" prop="shopAddress" width="300"></el-table-column>
      <el-table-column label="店铺电话" prop="shopTel" width="180"></el-table-column>
      <el-table-column label="店铺简介" prop="shopDesc" width="300"></el-table-column>
      <el-table-column label="店铺菜品" prop="tag" width="180">
        <template slot-scope="props">
          <div class="tag-group">
            <el-tag
              v-for="(item,index) in props.row.tag"
              :key="index"
              :type="item.type"
            >{{item.text}}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="180">
        <template slot-scope="props">
          <div>
            <el-button size="small" type="primary" @click="handleWrite(props.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDel(props.row.id)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handlePage"
    ></el-pagination>
    <!--编辑-->
    <shopDialog :dialogVisible="dialogVisible" :dialogData="dialogData" @close="handleClose" />
  </div>
</template>

<script>
import { shopListApi } from "../../../api/request";
import shopDialog from "@components/shopDialog";
export default {
  components: {
    shopDialog
  },
  data() {
    return {
      search_model: {
        shopname: "",
        volume: ["升序", "降序"],
        volumeVal: "",
        shopRecommendVal: {},
        shopRecommend: [
          {
            text: "西红柿炒鸡蛋",
            type: "success"
          },
          {
            text: "小龙虾",
            type: "info"
          },
          {
            text: "麻辣烫",
            type: "danger"
          },
          {
            text: "北京烤鸭",
            type: "warning"
          },
          {
            text: "水煮鱼",
            type: "info"
          },
          {
            text: "过桥米线",
            type: "warning"
          }
        ]
      },
      dialogVisible: false,
      tableData: [],
      dialogData: {},
      shopInfo: {
        limit: 10,
        page: 1
      },
      total: 0
    };
  },
  created() {
    this.getShopList(this.shopInfo);
  },
  methods: {
    async getShopList(shopInfo) {
      let data = await shopListApi(shopInfo);
      this.tableData = data.datalist;
      this.total = data.total;
      console.log(data);
    },
    handlePage(page) {
      this.shopInfo.page = page;
      this.getShopList(this.shopInfo);
    },
    handleDel(id) {
      console.log(id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleWrite(data) {
      // console.log("编辑",data)
      this.dialogData = data;
      this.dialogVisible = true;
    },
    handleClose(bool) {
      this.dialogVisible = bool;
    },
    handleshopRecommendVal(value) {
      console.log(value);
    },
    handleIput(...rest) {
      console.log(rest);
    }
  }
};
</script>

<style lang="scss">
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>