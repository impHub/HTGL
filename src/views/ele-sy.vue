<template>
<div>
    souele
</div>
</template>

<script>
// import { METHODS } from 'http';
    export default {
    data: () => ({
      show: true,
    login:{
          accounts:'',
          password:''
      }
        
      
    }),

    created(){
      // this.$axios.get('http://192.168.31.220:8080/manage/login')
      //             .then(res=>{
      //               console.log(res,'res');
      //             })
    },
    methods:{
      // btn(){
      //   console.log(this.login,'---',this.login);
      //   this.$axios.post('https://wd6722557241mhrlvs.wilddogio.com/posts.json',this.login)
      //                 .then(res=>{
      //                   console.log(res);
      //                 })
      // }
    }
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .el-input{
    margin-bottom: 15px;
  }
  .elbutton{
    width: 100%;
  }
</style>