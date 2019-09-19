<template>
  <div>
   <!--数据列表  -->
  <div>
    <el-row>
  <el-col :span="2" :offset="21"><el-button class="btn" type="success" @click="refresh">刷新数据</el-button></el-col>
  <!-- <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col> -->
</el-row>

     <el-table
    :data="handData"
    stripe
    style="width: 100%">

    <el-table-column
      prop="createTime"
      label="日期"
      width="180">
    </el-table-column>

     <el-table-column
      align="center"
      prop="orderId"
      label="订单编号"
      width="180">
    </el-table-column>

     <el-table-column
      align="center"
      prop="productInfo"
      label="产品名称数量"
      width="120">
    </el-table-column>

     <!-- <el-table-column
     align="center"
      prop="number"
      label="数量"
      width="140">
    </el-table-column> -->

     <el-table-column
      align="center"
      prop="price"
      label="总金额"
      width="120">
    </el-table-column>

     <!-- <el-table-column
      prop="phone"
      label="手机号码"
      width="180">
    </el-table-column> -->

    <el-table-column
     align="left"
      prop="addr"
      label="送货信息"
      width="320">
    </el-table-column>

     <el-table-column
      align="center"
      prop="orderlogisticcode"
      label="快递单号"
      width="180">
    </el-table-column>

     <el-table-column
      align="center"
      prop="ordershippercode"
      label="快递公司"
      width="120">
    </el-table-column>

    <el-table-column
   
      align="center"
      prop="status"
      label="订单状态">
    </el-table-column>


         <!-- <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column> -->
 

  </el-table>
      <el-pagination
   
        @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  background
  layout="prev, pager, next"
  :total="200">
</el-pagination>
      <!-- <el-button type="success">成功按钮</el-button> -->
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data(){
    return {
        orderS:["已付款","已发货","已收货","已完成",],
        handData:[],
    }
  },
  methods:{
      handleSizeChange(e){
      // console.log(e,'dangq')
    },
    //当前页
    handleCurrentChange(e){
      let val = e*10;
      console.log(val)
    //切割数组 渲染值
       this.handData = this.tableData.slice(val-10,val);
      //  console.log(this.handData)

      console.log(e,'dangq')
    },
    // 刷新数据
    refresh(){
      this.$axios.get(`/mall/admin/order/list`)
                  .then(res=>{
                    console.log(res,'刷新')
                    this.tableData = res.data;
                  })
    },
  },
  created(){
    this.$axios.get(`/mall/admin/order/list`)
                      .then(res=>{
                        console.log(res,'请求');
                        this.tableData = res.data;
                        console.log(res.data);
                        this.handleCurrentChange(1);
                        this.key = false;
                      })
  }
  
}
</script>

<style>

</style>