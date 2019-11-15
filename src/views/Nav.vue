<template>
  <div>
    <!-- 导航栏 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">订单管理</el-menu-item>
      <el-menu-item index="2">商品管理</el-menu-item>
      <el-menu-item index="3">轮播图</el-menu-item>
       <el-menu-item index="4">添加分类</el-menu-item>
      <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item> -->
    </el-menu>
    <!-- 子路由 -->
    <div>
      <router-view/>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, '-------',keyPath);
      if(key == 1){
        //   订单
        this.$router.push({name:'home'})
      }else if(key == 2){
          this.$router.push({name:'commodity'})
          console.log('商品管理')
      }else if(key == 3){
         this.$router.push({name:'about'})
      }else if(key == 4){
        this.$router.push({name:'class'})
      }
    }
    
  }
};
</script>

<style>
</style>
