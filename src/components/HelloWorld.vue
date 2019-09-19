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
  }),
  methods: {
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
      this.$axios.get(`admin/order/list`)
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
        .get(`/mall/admin/login`, {
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
            this.$axios.get(`mall/admin/order/list`)
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

};
</script>

<style>
/* .el-button{margin-bottom: 20px;} */
</style>
