<template>
  <div>
    <div v-pre>添加图书</div>
    <div class="revise">
      <el-form ref="form"  label-width="80px">
        <el-form-item label="图书编号">
          <div class="addbook">
            <!-- v-model双向绑定 -->
            <el-input class="addbook" v-model="bookId"  ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="书名">
          <div class="addbook">
            <el-input class="addbook" v-model="bookName" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="作者">
          <div class="addbook">
            <el-input class="addbook"  v-model="author" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="图书类别">
          <div class="addbook">
            <el-select v-model="bookCategory" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="出版社">
          <div class="addbook">
            <el-input class="addbook" v-model="publishHouse" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="定价">
          <div class="addbook">
            <el-input class="addbook" v-model="price"></el-input>
          </div>
        </el-form-item>  
        <el-form-item label="库存">
          <div class="addbook">
            <el-input class="addbook" v-model="inventory" ></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button v-on:click="isadd" type="primary" style="float: left;">确定添加</el-button>
          <el-button v-on:click="goToBookList" type="primary" style="float: left;">返回列表</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'AddBook',
    data(){
        return{
            bookId:'',
            bookName:'',
            author:'',
            publishHouse:'',
            price:'',
            inventory:'',
            options: [{
                value: '文学',
            }, {
                value: '自然科学',
            },{
                value:'教辅',
            },{
                value:'历史',
            },{
                value:'人文社科'
            }],
            bookCategory:'',
        }
    },
    methods:{
        isadd:function(){
            axios.post("http://localhost:5188/Book",
                {
                    bookId:this.bookId,
                    bookName:this.bookName,
                    author:this.author,
                    inventory:this.inventory,
                    publishHouse:this.publishHouse,
                    price:this.price,
                    bookCategory:this.bookCategory
                }
            ).then((res)=>{
                console.log(res)
                if(res.data=="添加成功"){
                    this.$message('添加图书成功');
                    this.bookId='',
                    this.bookName='',
                    this.author='',
                    this.publishHouse='',
                    this.price='',
                    this.inventory='',
                    this.bookCategory=""
                }
                
            })
        },
        goToBookList(){
       // 使用编程式导航跳转到 /booklist 路由
       this.$router.push({ path: '/booklist' });
     }
    }
 
}
</script>

<style>

</style>