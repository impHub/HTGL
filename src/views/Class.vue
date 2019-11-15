<template>
  <div>
      <!--分类  -->
        <el-row class="tac">
  <el-col :span="6">
    <h5>默认颜色</h5>
    <el-menu 
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">

      <el-menu-item @click="add(++i)" v-for="(item,i) in arr" :index= i :key="i">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.classificationName}}</span>
      </el-menu-item>
      
    </el-menu>
  </el-col>
 <!--  -->
 <div class="fl">

           <el-table
    :data="tableData"
    stripe
    style="width: 100%">

    <el-table-column
      prop="classificationId"
      label="分类ID"
      width="180">
    </el-table-column>

    <el-table-column
      prop="classificationName"
      label="名称"
      width="180">
    </el-table-column>

    <el-table-column
      prop="classificationStatus"
      label="状态"
      width="180">
    </el-table-column>

    <el-table-column
      prop="classificationTopId"
      label="上级ID"
      width="180">
    </el-table-column>

  </el-table>
 </div>


</el-row>
      <!--/分类  -->
 
  </div>
</template>

<script>
export default {
    data(){
        return {
            arr:[],
            tableData:[]
        }
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      add(i){
          console.log(i)
        this.$axios.get(`/mall/admin/classify/list?topId=${i}`)
            .then(res=>{
                console.log(res.data)
                this.tableData = res.data;
                
            })
      }
    },
    created(){
        this.$axios.get(`/mall/admin/classify/list?topId=${0}`)
            .then(res=>{
                console.log(res.data)
                this.arr = res.data;
            })
    }
    
}
</script>

<style>
.el-col-6{
    display: inline-block;
}
.fl{
    width: 70%;
    display: inline-block;
}

</style>