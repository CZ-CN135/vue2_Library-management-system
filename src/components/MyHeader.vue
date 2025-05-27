<template>
    <div>
        <!-- 指令语法 -->
        <div v-if="userName==null" style="float: right;" class="no-login">
            <span>
                <router-link style=" text-decoration: none;" 
                :to="{
                    path:'/login',
                    query:{
                        welcome:loginTitp,
                    }
                }">登录
                </router-link>
            </span>
        </div>
        <div v-else style="float: right;" class="logined">
            <span v-cloak>欢迎您，{{userName}}[{{identity}}]</span>
            <span style="margin-left: 20px;"><a v-on:click="unlogin">退出登录</a></span>
        </div>
       
    </div>
</template>

<script>
export default {
    name:'MyHeader',
    data(){
        return{
            loginTitp:'欢迎登陆',
            userName:null
        }
    },
    mounted(){
        this.$bus.$on('getuserName',(username)=>{
            this.userName=username
            console.log(username)
        })
        
    },
    computed:{
        identity(){
            if(this.$store.state.userAbout.userinfodetail.userLevel==0){
                return '管理员'
            }
            else{
                return '普通用户'
            }
        }
    },
    methods:{
        unlogin(){
            localStorage.clear();
            sessionStorage.clear();
            this.userName=null;
            window.location.reload();
        }
    }

}
</script>

<style>
 .el-header {
    background-color:rgb(0, 119, 255);
    color: #333;
    text-align: left;
    font-size: 20px; 
    line-height: 60px;
   }
   [v-cloak]{
    display: none  ;
   }

</style>