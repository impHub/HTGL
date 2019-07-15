<template>
  <!-- <div class="zc"> -->
  <div class="btnL">
    <el-row>
      <el-col :span="2" :offset="21">
        <el-button class="btn" type="success" @click="refresh">添加商品</el-button>
      </el-col>
      <!-- <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col> -->
    </el-row>
    <!--添加图片  -->
    <div v-if="imgKey" class="zc">
      <!--  -->

      <!--  -->
      <div class="tk_3">
        <div class="wrap_2">
          <div>
            <el-button class="btn" type="info" @click="refreshImg">关闭</el-button>
          </div>
         
          <!--  -->
          <div class="wrap_img">

          
          <el-upload
            class="upload-demo"
            :action="iUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="suc"
            :file-list="fileList1"
            list-type="picture"
          >
            <el-button @click="djsc" size="small" type="primary">商品主图上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">商品主图</div> -->
          </el-upload>
          </div>
          <!--  -->
                     <!--  -->
           <div class="wrap_img">
          <el-upload
            class="upload-demo"
            :action="iUrl"
            :on-preview="handlePreview2"
            :on-remove="handleRemove2"
            :on-success="suc"
            :file-list="fileList3"
            list-type="picture"
          >
            <el-button @click="djsc3" size="small" type="primary">商品图片上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">商品图片</div> -->
          </el-upload>
          </div>
          <!--  -->
           <!--  -->
           <div class="wrap_img">
          <el-upload
            class="upload-demo"
            :action="iUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="suc"
            :file-list="fileList2"
            list-type="picture"
          >
            <el-button @click="djsc2" size="small" type="primary">商品详情图上传</el-button>
            <!-- <div  slot="tip" class="el-upload__tip">商品详情图</div> -->
          </el-upload>
          </div>
          <!--  -->

        </div>
      </div>
    </div>
    <!--  -->

    <!--添加商品  -->
    <div v-if="addKey" class="zc">
      <!--  -->

      <!--  -->
      <div class="tk_2">
        <div class="wrap_2">
          <h4>添加商品</h4>
          <!--  -->

          <!--  -->
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12">
              <el-input v-model="commodity.productName" placeholder="商品名称"></el-input>
              <el-input v-model="commodity.productNameS" placeholder="短名称"></el-input>
              <el-input v-model="commodity.productDescribe" placeholder="描述"></el-input>
              <el-input v-model="commodity.productPrice" placeholder="价格"></el-input>
              <!--  -->
              <el-select v-model="commodity.productClassifyId" placeholder="商品类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <!--  -->
              <el-input v-model="commodity.productCount" placeholder="库存"></el-input>
              <el-input v-model="commodity.productDiscount" placeholder="是否打折,填1为不打折"></el-input>
              <el-input v-model="commodity.productPromote" placeholder="是否促销,填0不促销"></el-input>

              <!-- <el-input v-model="commodity.productStatus" placeholder="状态"></el-input>
              <el-input v-model="commodity.productIsNew" placeholder="是否为新品"></el-input>-->
              <div class="btn">
                <el-button type="primary" @click="addC">确认</el-button>
                <el-button type="info" @click="Close">关闭</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!--  -->

    <div v-if="key" class="zc">
      <div class="tk">
        <div class="wrap">
          <h4>修改信息</h4>

          <!--  -->
          <!-- <el-upload
                class="upload-demo"
                action="/api/test"
                :on-change="handleChange"
                :file-list="fileList3"
              >
                <el-button size="small" type="primary">图片上传</el-button>
               
          </el-upload>-->
          <!--  -->
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12">
              <el-input v-model="edit.productId" placeholder="请输入内容" :disabled="true"></el-input>
              <el-input v-model="edit.productName" placeholder="商品名称"></el-input>
              <el-input v-model="edit.productPrice" placeholder="价格"></el-input>

              <div class="btn">
                <el-button type="primary" @click="confirm">确认</el-button>
                <el-button type="info" @click="close">关闭</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div>
      <!-- <el-col :span="2" :offset="21"><el-button class="btn" type="success" @click="refresh">刷新数据</el-button></el-col> -->
      <!-- <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col> -->

      <el-table :data="handData" stripe style="width: 100%">
        <el-table-column prop="productId" label="商品编号" width="180"></el-table-column>

        <el-table-column prop="productName" label="商品名称" width="280"></el-table-column>

        <el-table-column prop="productPrice" label="价格" width="180"></el-table-column>
        <!-- 操作 -->
        <el-table-column align="right" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleimg(scope.$index, scope.row)">图片管理</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="200"
      ></el-pagination>
      <!-- <el-button type="success">成功按钮</el-button> -->
    </div>
  </div>
</template>

<script>
// import { constants } from "crypto";
import qs from "qs";
import { constants } from 'crypto';
// import { constants } from "crypto";
// import { connect } from 'http2';
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld'

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      iUrl:'',
        cId:0,
        zImg:1,
        imgId:0,
        fileList2: [],
      //  fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
      //              {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
       fileList1:[],
       fileList3:[],
      imgKey: false,
      options: [
        {
          value: 1,
          label: "粮油米面"
        },
        {
          value: 2,
          label: "家禽生鲜"
        },
        {
          value: 3,
          label: "腊味干货"
        },
        {
          value: 4,
          label: "精品水果"
        },
        {
          value: 5,
          label: "地方佳酿"
        },
        {
          value: 6,
          label: "家乡荟萃"
        },
        {
          value: 7,
          label: "佳品团购"
        }
      ],
      value: "",

      handData: [],
      tableData: [],
      addKey: false, //添加商品
      key: false, //修改商品
      edit: {
        productId: "",
        productName: "",
        productPrice: ""
      },
      commodity: {
        productName: "", //名称
        productNameS: "", //短名称
        productClassifyId: "", //分类
        productDescribe: "", //描述
        productDiscount: "", //打折
        productIsNew: 1, //是否为新品
        productPrice: "", //价格
        productCount: "", //库存
        productPromote: "", //促销
        productStatus: 1 //状态
      }
    };
  },
  methods: {
    djsc(){
      console.log('主图片')
      this.iUrl = `http://192.168.31.220:8000/mall/admin/product/mainimg/set?productId=${this.cId}`;
      console.log(this.iUrl)
    },
     djsc2(){
      console.log('商品详情图')
      this.iUrl = `http://192.168.31.220:8000/mall/admin/product/introimg/add?productId=${this.cId}`;
      console.log(this.iUrl)
    },
     djsc3(){
      console.log('商品图片')
      this.iUrl = `http://192.168.31.220:8000/mall/admin/product/productimg/add?productId=${this.cId}`;
      console.log(this.iUrl)
    },
    // beforeUpload(file){
    //   console.log('上传图片')
    //   let fd = new FormData();
    // fd.append('files',file);//传文件
    // // fd.append('id',this.cId);//传其他参数
    // this.$axios.post('/api/admin/product/mainimg/set',qs.stringify({productId:this.cId}) ).then(function(res){
    //         alert('成功');
    // })
    // return false  //屏蔽了action的默认上传
    // },

    suc(){
      console.log('上传成功')
    },
    handleimg(e,c){
      
      console.log('上传图片',c.productId)
      this.imgId = c.productId;
      let id = c.productId;
      this.cId = id;
      this.$axios.post(`/admin/product/img/getbyid`,qs.stringify({productId:id}))
                  .then(res=>{
                      let obj = [{url:res.data.mainImg}]
                      console.log(res.data);
                      this.fileList1 = obj;
                      this.fileList2 = res.data.productIntroImg;
                      this.fileList3 = res.data.productImg;
                      console.log(this.fileList1,this.fileList2,this.fileList3,'22');
                      // this.Url = "/api/admin/product/mainimg/sat?productId="+
                  })
      this.imgKey = true;
      console.log('上传图片')
    },
    // 删除图片
      handleRemove(file, fileList) {
        //          被删除的
        console.log(file.index,'handleRemove1111111', fileList);
    
        this.$axios.post(`/admin/product/introimg/delete`,qs.stringify({productId:this.imgId,index:file.index}))
                          .then(res=>{
                            fileList.forEach(res=>{
                               if(res.index > file.index){
                                 res.index = res.index -1;
                               }
                            })
                            this.fileList2 = fileList;
                            console.log(fileList,'成功删除')
                          })
      },
      handlePreview(file) {
     
      },

        // 删除图片2  productImg
      handleRemove2(file, fileList) {
        console.log(file,'handleRemove1111111', fileList);
           console.log('handlePreview22222222',file);
           this.$axios.post(`/admin/product/productimg/delete`,qs.stringify({productId:this.imgId,index:file.index}))
                          .then(res=>{
                            fileList.forEach(res=>{
                               if(res.index > file.index){
                                 res.index = res.index -1;
                               }
                            })
                            this.fileList2 = fileList;
                            console.log(fileList,'成功删除')
                          })
        
      },
      handlePreview2(file) {
        console.log('handlePreview22222222',file);
      },
    //确认
    addC() {
      console.log(this.commodity);
      this.$axios
        .post(
          `/admin/product/save`,qs.stringify(this.commodity)
          // {
          //   // num:1,
          //   product:qs.stringify(this.edit)
          //   }
        )
        .then(res => {
          console.log(res, "修改成功");
          // this.key = false;
          this.$message({
            message: "修改成功",
            type: "success",
            duration: "1500"
          });
          this.commodity = {
            productName: "", //名称
            productNameS: "", //短名称
            productClassifyId: "", //分类
            productDescribe: "", //描述
            productDiscount: "", //打折
            productIsNew: 1, //是否为新品
            productPrice: "", //价格
            productCount: "", //库存
            productPromote: "", //促销
            productStatus: 1 //状态
          };
        });
    },
    // 关闭
    Close() {
      this.addKey = false;
    },
    // 添加商品按钮
    refresh() {
      this.addKey = true;
    },
    //
    open2() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .post(`/admin/product/delete`, qs.stringify({ productId: id }))
            .then(res => {
              console.log(res);
            });
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
    //
    // 删除
    handleDelete(index, val) {
      console.log(val.productId);
      //  let id =  this.tableData[index].productId;
      let id = val.productId;
      console.log(id);

      this.$confirm("是否删除商品信息?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .post(`/admin/product/delete`, qs.stringify({ productId: id }))
            .then(res => {
              console.log(res);
            });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.$router.go(0);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });

      // this.$axios.post(`/api/admin/product/delete`,qs.stringify({productId:id}))
      //   .then(res=>{
      //     console.log(res)
      //   })
    },
    img(e, c) {
      console.log(e, c, "文件上传");
    },
    // 图片上传
    handleChange(file, fileList) {
      console.log(file, fileList, "图片上传");
      // this.fileList3 = fileList.slice(-3);
    },
    // 编辑
    handleEdit(e, c) {
      this.key = true;
      console.log(c, 996);
      this.edit = c;
    },
    // 确认
    confirm() {
      console.log(this.edit, qs);
      this.$axios
        .post(
          `/admin/product/save`,
          qs.stringify(this.edit)
          // {
          //   // num:1,
          //   product:qs.stringify(this.edit)
          //   }
        )
        .then(res => {
          console.log(res, "修改成功");
          this.key = false;
          this.$message({
            message: "修改成功",
            type: "success",
            duration: "1500"
          });
        });
    },

    close() {
      this.key = false;
    },

    handleSizeChange(e) {
      // console.log(e,'dangq')
    },
    //当前页
    handleCurrentChange(e) {
      let val = e * 10;
      console.log(val);
      //切割数组 渲染值
      this.handData = this.tableData.slice(val - 10, val);
      //  console.log(this.handData)

      console.log(e, "dangq");
    },

      refreshImg(){
    console.log('关闭')
    this.imgKey = false;
  },
    // 刷新数据
    // refresh() {
    //   this.$axios.get(`/api/admin/product/list`).then(res => {
    //     console.log(res, "刷新");
    //     this.tableData = res.data;
    //     this.handleCurrentChange(1);
    //   });
    // }
  },

  created() {
    this.$axios.get(`/admin/product/list`).then(res => {
      console.log(res, "请求");
      this.tableData = res.data;
      console.log(this.tableData);
      this.handleCurrentChange(1);
      this.key = false;
    });
  }
};
</script>

<style>
.zc {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
}
.tk {
  width: 60%;
  height: 80%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 11;
  border-radius: 5px;
  background-color: aliceblue;
  /* background: rgba(0, 0, 0, 1); */
}
.tk_2 {
  width: 70%;
  height: 90%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 11;
  border-radius: 5px;
  background-color: aliceblue;
}
.tk_3 {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 11;
  border-radius: 5px;
  background-color: aliceblue;
}
.zc .wrap_2 {
  margin: 0 auto;
  padding: 0px;
  height: 100%;
}
.zc .wrap {
  margin: 20px auto;
  padding: 20px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}
.upload-demo{
  display: inline-block;
  width: 100%;
}
.wrap_img{
  /* position: absolute;
  top: 0; */
  width: 33%;
  display: inline-block;
  height: 100%;
}
h4 {
  color: rgb(51, 167, 155);
}
.btn {
  display: flex;
  justify-content: space-around;
}
.upload-demo {
  margin: 10px auto;
  /* width: 50%; */
  text-align: left;
}
.btn_c span {
  display: inline-block;
}
.btn_c {
  width: 100%;
}
/* .el-input {
  width: 80%;
} */
#pdd {
  width: 60%;
}
.el-select {
  width: 100%;
}
.el-upload__tip{
  text-align: center;
  font-size: 30px;
}
/* .el-upload{
  margin: 0 auto;
} */
.upload-demo{
  /* text-align: center; */
  /* text-align: right; */
}
.btnL{
  /* text-align: right; */
}
</style>