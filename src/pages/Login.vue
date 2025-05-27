<template>
        <transition name="animate__animated animate__bounce"  enter-active-class="animate__swing" leave-active-class="animate__backOutUp">
        <div id="Login" :class="color" @click="changecolor" v-show="isLogined1" >
                <h1 style="text-align: center;  font-size: 30px;">{{$route.query.welcome}}</h1>
                <h3>图书馆管理系统</h3>
                <p>
                    <el-input v-model="userNo" placeholder="账号">
                    </el-input>
                </p>
                <p>
                    <el-input v-model="passWord" placeholder="密码">
                    </el-input>
                </p>
                <p v-if="unlogined" style="color: red;">密码错误</p> <!-- 显示错误消息 -->
                <p>
                    <el-checkbox v-model="reMe">记住密码</el-checkbox>
                    <span>忘记密码？</span>
                </p>
                <p>
                    <el-button @click="Login" style="width: 100%;" type="primary">登录</el-button>
                </p>
                <div class="no-account" style="margin-top: 5%;">
                    <span>没有账号?<router-link to="/regist">立即注册</router-link></span>
                </div>    
        </div>

    </transition>


</template>

<script>
import 'animate.css'
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
            userNo:"",
            passWord:"",
            reMe:false,
            userName:null,
            unlogined:false,
            color:'',
            isLogined1:true,
           
        }     
    },
    
    //Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
    mounted(){
        var userInfo1=JSON.parse(localStorage["userInfo"]);
        this.userNo=userInfo1.userNO1,
        this.passWord=userInfo1.password1,
        this.reme=localStorage["reme"]=="true"?true:false;
        
    },
    methods:{
        changecolor(){
            const arr=['color1','color2','color3']
            const index=Math.floor(Math.random()*3)
            this.color=arr[index]
        },
        Login:function(){
            var userinfo={
                userNO1:"",
                password1:""
            }
            var userinfodetail={
                userName:"",
                userLevel:"",
                passWord:"",
                sex:"",
                age:"",
                birthday:"",
                phoneNo:"",
                address:"",
                borrowNum:"",
            }
            var userno=this.userNo;
            var pwd=this.passWord;
            var reme=this.reMe;
            this.$bus.$emit('updateLogin',{isLogining:true,errMsg:''})
            //网址为登录方法中的变量,进去即登录成功
            axios.get(`http://localhost:8080/api/Login/${userno}/${pwd}/`).then((res)=>{
                this.$bus.$emit('updateLogin',{isLogining:false,errMsg:''})
                this.$bus.$emit('getuserName',res.data.userName)
                this.$bus.$emit('getuserLevel',res.data.userLevel)
                this.isLogined1=false
                console.log(res);
                //this.$store.commit('userAbout/GET_USERINFO',res.data)
                localStorage["Token"]=res.data.token;
                sessionStorage["userNo"]=res.data.userNo;
                sessionStorage["userName"]=res.data.userName;
                sessionStorage["userLevel"]=res.data.userLevel;
                userinfodetail.userName=res.data.userName;
                userinfodetail.passWord=res.data.passWord;
                userinfodetail.userLevel=res.data.userLevel;
                userinfodetail.sex=res.data.sex;
                userinfodetail.age=res.data.age;
                userinfodetail.birthday=res.data.birthday;
                userinfodetail.phoneNo=res.data.phoneNo;
                userinfodetail.address=res.data.address;
                userinfodetail.borrowNum=res.data.borrowNum;
                sessionStorage["userInfoDetail"]=JSON.stringify(userinfodetail);
                if(reme){
                    userinfo.userNO1=userno;
                    userinfo.password1=res.data.autoLoginTag;
                    localStorage["userInfo"]=JSON.stringify(userinfo);
                }
                else{
                        localStorage.removeItem("userInfo");
                }
                if(res.data==false){
                    this.unlogined=true
                    this.passWord=''
                }
                else{
                    
                    this.unlogined=false
                }
                
            },
            error=>{
                this.$bus.$emit('updateLogin',{isLogining:false,errMsg:error.message})
                alert('请求失败',error)
            })
            // }).catch(function(error) {
            //     if (error.response) {
            //         // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            //         console.log(error.response.data);
            //         console.log(error.response.status);
            //         console.log(error.response.headers);
            //         alert("登录失败：" + error.response.data.message || "密码错误");
            //     } else if (error.request) {
            //             // 请求已发出，但没有收到回应
            //             console.log(error.request);
            //             alert("请求失败：请检查网络连接。");
            //     } else {
            //             // 发送请求时出了点问题
            //             console.log('Error', error.message);
            //             alert("请求错误：" + error.message);
            //     }
            // });

            
            
           
        }
    }
                
            
}

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.color1{
    background-color: red;
}
.color2{
    background-color: white;
}
.color3{
    background-color:rgb(0, 157, 255);
}
#Login {
    width:  500px;
    height: 370px;
    margin: auto;
    margin-top: 10%;
    padding-bottom: 30px;
    }
#Login p{
    width: 80%;
    margin: auto;
    display: flex; /* 使用Flexbox布局 */
    justify-content: space-between; /* 两端对齐 */
    align-items: center; /* 垂直居中 */
    margin-top: 5%;
}
#Login h3{
    text-align: center;
    padding: 20px 0;
}
#Login span{
    font-weight: normal; 
}
.no-account{
    text-align: center;
}
/* .v-enter-active{
    animation: identifier 1s linear
}
.v-leave-active{
    animation: identifier 0.5s linear reverse
}
@keyframes identifier {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
} */
    
</style>