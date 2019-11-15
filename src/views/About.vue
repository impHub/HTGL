<template>
  <div class="about">
    <h2>轮播图</h2>
    <div class="wrap">
          <el-upload
  class="upload-demo"
  action="https://www.lixikeji.cn/mall/admin/product/floatimg/add"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"

  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
</el-upload>
    </div>

  </div>
</template>

<script>
import qs from "qs";
  export default {
    data() {
      return {
        fileList: [],
      };
    },
    methods: {
      // 删除     this[i]被删除，没被删除 
      handleRemove(file, fileList) {
        console.log('删除')
        console.log(file.floatId, fileList);
           this.$axios
        .post(
          `/mall/admin/product/floatimg/delete`,
          qs.stringify({ floatImgId: file.floatId })
        )
        .then(res => {
          this.fileList = fileList;
          // fileList.forEach(res => {
          //   if (res.index > file.index) {
          //     res.index = res.index - 1;
          //   }
          // });
          // this.fileList2 = fileList;
          // console.log(fileList, "成功删除");
        });
      },

      handlePreview(file) {
        
        // 添加
        console.log(file,'添加');
      }
    },
    created(){
        this.$axios.get(`/mall/admin/product/floatimg/list`)
                    .then(res=>{
                      // this.fileList = res.data;
                      
                      console.log(res.data);
                      res.data.forEach(ele => {
                        ele.url = ele.floatImgurl
                      });
                      this.fileList = res.data;
                    })
    }
  }
</script>

<style scoped>
.about{
 /* width: 80%; */
}
.wrap{
  width: 80%;
  margin: 0 auto;
}
</style>