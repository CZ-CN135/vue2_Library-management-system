<template>
  <div id="app" >
    <el-container>
      <el-header>
        <MyHeader ></MyHeader>
      </el-header>
      <el-container>
        <!-- 方法一 -->
        <!-- <Menu @send="send"></Menu> -->
        <Menu ref="menu"></Menu>
        <Main></Main>
      </el-container>
    </el-container>
    <span>{{bool}}</span>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import Menu from './components/Menu.vue';
import Main from './components/Main.vue';
import Login from './pages/Login.vue';
import FirstPage from './pages/FirstPage.vue';
import Regist from './pages/Regist.vue';
import PersonInfoDetails from './pages/PersonInfoDetails.vue'
import UpdatePersonInfo from './pages/UpdatePersonInfo.vue';
import Logout from './pages/Logout.vue';
import BookList from './pages/BookList.vue';
import AddBook from './pages/AddBook.vue';
import BorrowBook from './pages/BorrowBook.vue';
import ReturnBook from './pages/ReturnBook.vue';
import UserList from './pages/UserList.vue';
export default {
  name: 'App',
  data(){
    return{
      bool:''
    }

  },
  components: {
    MyHeader,
    Menu,
    Main,
    Login,
    FirstPage,
    Regist,
    PersonInfoDetails,
    UpdatePersonInfo,
    Logout,
    BookList,
    AddBook,
    BorrowBook,
    ReturnBook,
    UserList,
  },
  methods:{
    send(value){
       this.bool=value
    }
  },
  mounted(){

      console.log(1)
      this.$refs.menu.$on('send',this.send)
    
    
  }

}
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    .el-header {
    background-color:rgb(0, 157, 255);
    color: #333;
    text-align: left;
    font-size: 20px;
    line-height: 60px;
   }
</style>

