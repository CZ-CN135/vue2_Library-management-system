<template>
  <div class="booklist">
    <div style="margin-bottom: 20px;">图书列表</div>
    <div style="margin-bottom: 20px;">
      <el-input style="width: 60%;" v-model="keyWord" placeholder="请输入书名"></el-input>
      <el-button style="margin-left: 10px;" type="primary" @click="sorttype=2">库存升序</el-button>
      <el-button style="margin-left: 10px;" type="primary" @click="sorttype=1">库存降序</el-button>
      <el-button style="margin-left: 10px;" type="primary" @click="sorttype=0">默认排序</el-button>
    </div>
    <el-table
        :data="filbook"
        style="width: 100%">
        <el-table-column
          prop="bookId"
          label="图书编号"
          width="160">
        </el-table-column>
        <el-table-column
          prop="bookCategory"
          label="图书类别"
          width="130">
        </el-table-column>
        <el-table-column
          prop="bookName"
          label="书名"
          width="130">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="130">
        </el-table-column>
        <el-table-column
          prop="publishHouse"
          label="出版社"
          width="130">
        </el-table-column>
        <el-table-column
          prop="price"
          label="定价"
          width="130">
        </el-table-column>
        <el-table-column
          prop="inventory"
          label="库存"
          width="130">
        </el-table-column>
        <el-table-column
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button  @click="handleClick1(scope.row)"  type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-dialog :visible.sync="visible"  title="删除图书">
      <p>确定删除该图书吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
        <el-button type="primary" size="mini" @click="deletebook">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="editModalVisible"  title="编辑图书">
      <el-form :model="currentBook">
        <el-form-item label="图书编号">
          <el-input v-model="currentBook.bookId"></el-input>
        </el-form-item>
        <el-form-item label="图书类别">
          <el-input v-model="currentBook.bookCategory"></el-input>
        </el-form-item>
        <el-form-item label="书名">
          <el-input v-model="currentBook.bookName"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="currentBook.author"></el-input>
        </el-form-item>
        <el-form-item label="出版社">
          <el-input v-model="currentBook.publishHouse"></el-input>
        </el-form-item>
        <el-form-item label="定价">
          <el-input v-model="currentBook.price"></el-input>
        </el-form-item>
        <el-form-item label="库存">
          <el-input v-model="currentBook.inventory"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editModalVisible = false">取消</el-button>
        <el-button type="primary" @click="saveEditBook">保存</el-button>
      </span>
    </el-dialog>
    <div>
      <span>今日图书种类：{{bookCategoryNum}}</span>
      <span style="margin-left: 100px;">今日图书总库存：{{bookNum}}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {getbook} from '../mixin'

export default {
  name:'BookList',
  data() {
    console.log(this)
    return {
      filterData:[],
      editModalVisible:false,
      //currentBook:{},
      visible:false,
      bookid1:'',
      keyWord:'',
      sorttype:'',
    }
  },
  mixins:[getbook],
  mounted(){
    this.flushed();
  },
  computed:{
    // bookCategoryNum:{
    //   get(){
    //     return this.tableData.length
    //   }
    // },
    bookCategoryNum(){
      return this.tableData.length
    },
    bookNum(){
      var num = 0;
      this.tableData.forEach((item)=>{
        num += item.inventory;
      });
      return num;
    },
    filbook(){
      const arr= this.tableData.filter((p)=>{
      return p.bookName.indexOf(this.keyWord)!==-1
      });
      if(this.sorttype){
        arr.sort((a,b)=>{
          return this.sorttype===1? b.inventory-a.inventory : a.inventory-b.inventory
        })
      }
      return arr;
      
         
    }
  },
  //可完成异步功能
  watch:{
    currentBook:{
      // deep:true,
      // handler(newValue,oldValue){
      //     //console.log("图书已更改",newValue,oldValue)
      // }
    },
    // bookNum(newValue,oldValue){
    // setTimeout(() => {
    //   this.$message("图书库存已更改",newValue,oldValue)
    // }, 2000);
     
    // }
  //   keyWord:{
  //     immediate:true,
  //     handler(val){
  //        this.filterData=this.tableData.filter((p)=>{
  //         return p.bookName.indexOf(val)!==-1
  //        })
  //    }
  //  }
  },
  methods:{
    handleClick(row) {
      this.currentBook = Object.assign({}, this.currentBook, row);
      this.editModalVisible=true;
      console.log(row);
    },
    handleClick1(row){
       this.visible=true;
       this.bookid1=row.bookId;
    },
    

    saveEditBook:function(){
      axios.put("http://localhost:5188/Book",this.currentBook).then((res)=>{
        console.log(res),
        this.$message(res.data);
        this.editModalVisible=false
        this.flushed();
      })
    },
    deletebook:function(){
      axios.delete(`http://localhost:5188/Book/${this.bookid1}`).then((res)=>{
        console.log(res);
        this.$message(res.data);
        this.visible=false
        if(res.data=="删除成功"){
          this.flushed();
        }
      
      })
    }

  }
 

}
</script>

<style>

</style>