<template>
    <div>
        <div style="margin-bottom: 20px;">借阅图书</div>
    <el-table
        :data="bookTableData"
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
            <el-button @click="handleClick(scope.row)" type="text" size="small">借阅</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-dialog :visible.sync="borrowVisible"  title="借阅图书">
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
        <el-button @click="borrowVisible = false">取消</el-button>
        <el-button type="primary" @click="borrow">借阅</el-button>
      </span>
    </el-dialog>
    </div>
</template>

<script>
import axios from 'axios';
//import {getbook} from '../mixin'

export default {
    name:'BorrowBook',
    data(){
        return{
          currentBook:{},
          borrowVisible:false,
        }
    },
    computed:{
      bookTableData(){
        return this.$store.state.bookAbout.bookTableData
      }
    },
    // mixins:[getbook],
    mounted(){
        this.getbookServer()
    },
    methods:{
      getbookServer(){
        this.$store.dispatch('bookAbout/getbookServer')
      },

        handleClick(row) {
        this.currentBook = Object.assign({}, this.currentBook, row);
        this.borrowVisible=true;
        },
        borrow(){
            axios.get(`http://localhost:5188/Borrow/${sessionStorage["userNo"]}/${this.currentBook.bookId}`
            ).then((res)=>{
                this.$message(res.data);
                this.getbookServer();
                this.borrowVisible=false;
            })
        

        }
    }
    

}
</script>

<style>

</style>