import VueRouter from "vue-router";
import FirstPage from "@/pages/FirstPage.vue";
import Login from "@/pages/Login.vue";
import BookList from "@/pages/BookList.vue";
import Regist from "@/pages/Regist.vue";
import PersonInfoDetails from "@/pages/PersonInfoDetails.vue"
import UpdatePersonInfo from "@/pages/UpdatePersonInfo.vue";
import Logout from "@/pages/Logout.vue";
import AddBook from "@/pages/AddBook.vue";
import BorrowBook from "@/pages/BorrowBook.vue";
import ReturnBook from "@/pages/ReturnBook.vue";
import UserList from "@/pages/UserList.vue";

export default new VueRouter({
    routes:[
        {
            name:'登录',
            path:'/login',
            component:Login
        },
        {
            path:'/firstpage',
            component:FirstPage
        },
        {
            path:'/booklist',
            component:BookList

        },
        {
            path:'/regist',
            component:Regist
        },
        {
            path:'/personInfo',
            component:PersonInfoDetails
        },
        {
            path:'/updatepersonInfo',
            component:UpdatePersonInfo
        },
        {
            path:'/logout',
            component:Logout

        },
        {
            path:'/addbook',
            component:AddBook
        },
        {
            path:'/borrowbook',
            component:BorrowBook
        },
        {
            path:'/returnbook',
            component:ReturnBook
        },
        {
            path:'/userlist',
            component:UserList,
            meta:{isAuth:true}
        }
        
    ]
})