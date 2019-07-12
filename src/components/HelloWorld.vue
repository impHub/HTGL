<template>
  <div class="wrap">
    <div>
    <!-- <el-alert title="错误提示的文案" type="error"></el-alert> -->
    <h1>后台数据管理系统</h1>
    <!-- <el-button>默认按钮</el-button> -->
    <!-- <el-button @click="show = !show">Click Me</el-button> -->

    <!-- <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>-->
    <div class="wrap">
      
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input minlength="4" class="el-input" v-model="login.accounts" placeholder="账号"></el-input>
            <el-input type="password" v-model="login.password" placeholder="密码"></el-input>
            <el-button type="primary" class="elbutton" @click="btn" :plain="true">登录</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br>check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
  </div>


  <!--数据列表  -->
  <div v-if="0">
    <el-row>
  <el-col :span="2" :offset="21"><el-button class="btn" type="success" @click="refresh">刷新数据</el-button></el-col>
  <!-- <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col> -->
</el-row>

     <el-table
    :data="handData"
    stripe
    style="width: 100%">

    <el-table-column
      prop="now"
      label="日期"
      width="180">
    </el-table-column>

     <el-table-column
      prop="orderNumber"
      label="订单编号"
      width="180">
    </el-table-column>

     <el-table-column
      prop="productName"
      label="产品名称"
      width="120">
    </el-table-column>

     <el-table-column
     align="center"
      prop="number"
      label="数量"
      width="140">
    </el-table-column>

     <el-table-column
      align="center"
      prop="productPrice"
      label="价格"
      width="140">
    </el-table-column>

     <el-table-column
      prop="phone"
      label="手机号码"
      width="180">
    </el-table-column>

    <el-table-column
      prop="addr"
      label="送货信息"
      width="280">
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
// import { constants } from 'crypto';
// import { type } from "os";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    key:true,
    show: true,
    login: {
      accounts: "",
      password: ""
    },
  // 点击之后的数组先生
    handData:[],

    tableData: [{
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',//送货信息
          status:'1'//订单状态
        }, {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'12'//订单状态
        }, {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'13'//订单状态
        }, {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'14'//订单状态
        },
        {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'15'//订单状态
        },
        {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'16'//订单状态
        },
        {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'17'//订单状态
        },
        {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'18'//订单状态
        },
        {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'19'//订单状态
        },
        {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'20'//订单状态
        },
        {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'21'//订单状态
        },
        {
          orderNumber:'8008008820',//订单编号
          productName:'土鸡蛋',//产品名称
          productPrice:'998',//产品价格
          number:'2',//购买数量
          phone:'13846579954',//电话号码
          now: '2016-05-02',//时间
          addr: '上海市普陀区金沙江路 1518 弄',//送货信息
          status:'22'//订单状态
        },]
  }),
  methods: {
    // 每一页多少条
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
      this.$axios.get(`/order/list`)
                  .then(res=>{
                    console.log(res,'刷新')
                    this.tableData = res.data;
                    this.handleCurrentChange(1);
                  })
    },
    //登录
    btn() {
      console.log(this.login, "---", this.login);
      this.$axios
        .get(`/api/admin/login`, {
          params: {
            userName: this.login.accounts,
            userPassword: this.login.password
          }
          // headers: {'Content-Type': 'application/json;charset=UTF-8'}
        })
        .then(res => {
          console.log(res.data);
          //密码正确
          if (res.data == 1) {
            this.$message({
              message: "登录成功",
              type: "success",
              duration: "1500"
            });
            // 路由跳转
            this.$router.push({ name: 'nav', params: { userId: '123' }})
            console.log('shuj1')
            // 请求后台数据
            this.$axios.get(`/order/list`)
                      .then(res=>{
                        console.log(res,'请求');
                        this.tableData = res.data;
                        this.handleCurrentChange(1);
                        this.key = false;
                      })
            
          } else {
            // 密码错误
            this.$message({
              message: "账号或密码错误",
              type: "warning",
              duration: "1500"
            });
          }
        });
    }
  },
  created(){
  //  this.handleCurrentChange(1);
    // console.log(this.key)
  }
};
</script>

<style>
/* .el-button{margin-bottom: 20px;} */
</style>
