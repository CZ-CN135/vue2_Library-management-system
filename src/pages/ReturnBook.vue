<template>
  <div>
    <div>图书归还</div>
    <div style="margin-top: 20px;">
        <el-form ref="form"  label-width="80px">
        <el-form-item label="账号">
          <div class="inputname">
            <el-input class="inputname" v-model="userNo" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="用户名">
          <div class="inputname">
            <el-input class="inputname" v-model="userName" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="身份">
          <div class="inputname">
            <el-input class="inputname" v-model="userLevel" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="可借数量">
          <div class="inputname">
            <el-input class="inputname" v-model="borrowNum" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="借阅列表">
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            prop="bookId"
            label="图书编号"
            width="110">
            </el-table-column>
            <el-table-column
            prop="bookCategory"
            label="图书类别"
            width="110">
            </el-table-column>
            <el-table-column
            prop="bookName"
            label="书名"
            width="110">
            </el-table-column>
            <el-table-column
            prop="author"
            label="作者"
            width="110">
            </el-table-column>
            <el-table-column
            prop="publishHouse"
            label="出版社"
            width="110">
            </el-table-column>
            <el-table-column
            prop="price"
            label="定价"
            width="110">
            </el-table-column>
            <el-table-column
            prop="borrowDate"
            label="借阅日期"
            width="110">
            </el-table-column>
            <el-table-column
            prop="returnDate"
            label="归还日期"
            width="110">
            </el-table-column>
            <el-table-column
            prop="isOverdue"
            label="是否逾期"
            width="110">
            <template slot-scope="scope">
            {{ scope.row.isOverdue ? '是' : '否' }}
            </template>
            </el-table-column>
            <el-table-column
            prop="isReturn"
            label="是否已归还"
            width="110">
            <template slot-scope="scope">
            {{ scope.row.isReturn ? '是' : '否' }}
            </template>
            </el-table-column>
            <el-table-column
            label="操作"
            width="110">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">归还</el-button>
            </template>
            </el-table-column>
            </el-table>
        </el-form-item>
      </el-form>
    </div>
  </div>
 
  
</template>

<script>
import axios from 'axios';

export default {
    name:'ReturnBook',
    data(){
        return{
            userNo:'',
            userName:'',
            userLevel:'',
            borrowNum:'',
            tableData:[],
        }
    },
    mounted(){
        console.log('调用')
        this.getBorrowNum()
        this.returnlist();
        var userInfoDetail=JSON.parse(sessionStorage["userInfoDetail"]);
        this.userNo=sessionStorage["userNo"]
        this.userName=userInfoDetail.userName;
        if(userInfoDetail.userLevel==0)
        {
          this.userLevel="管理员";
        };
        if(userInfoDetail.userLevel==1)
        {
          this.userLevel="普通用户";
        };
    },
    methods:{
        handleClick(row) {
        this.currentBook = Object.assign({}, this.currentBook, row);
        this.return();
        console.log(row);
        },
        returnlist:function(){
            axios.get(`http://localhost:5188/Borrow/${sessionStorage["userNo"]}`).then((res)=>{
                this.tableData=res.data
            })
        },
        return:function(){
            axios.put(`http://localhost:5188/Borrow/${sessionStorage["userNo"]}/${this.currentBook.bookId}`)
            .then((res)=>{
                console.log(res.data);
                this.$message(res.data);
                this.getBorrowNum();
                this.returnlist();
            })
        },
        getBorrowNum:function(){
            axios.get(`http://localhost:8080/api/Login/user/${sessionStorage["userNo"]}`)
            .then((res)=>{
                console.log(res.data);
                this.$bus.$emit('getborrowNumser',res.data)
                this.borrowNum=res.data;
            })
        }
    }
}
</script>

<style>

</style>