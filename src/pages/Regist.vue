<template>
  <div id="Regist">
        <h1>欢迎注册</h1>
        <hr>
        <div class="center">
            <el-form ref="form"  label-width="80px">
                    <el-form-item label="账号" for="de">
                      <el-input v-model.trim="useInfo.userNo" id="de" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item label="用户名">
                        <el-input v-model.trim="useInfo.userName" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model.trim="useInfo.passWord" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input v-model.trim="passWord1" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input type="number" v-model.number.trim="useInfo.age"  placeholder="请输入年龄"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                      <el-radio-group  v-model.trim="useInfo.sex"> 
                        <el-radio  label="男"></el-radio>
                        <el-radio  label="女"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="生日">
                        <div class="updatediv">
                            <el-date-picker
                            v-model.trim="useInfo.birthday"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </el-form-item>
                    <el-form-item label="电话">
                    <div class="updatediv">
                        <el-input class="updatediv" v-model.trim="useInfo.phoneNo"></el-input>
                    </div>
                    </el-form-item>  
                    <el-form-item label="地址">
                    <div class="updatediv">
                        <el-input class="updatediv" v-model.trim="useInfo.address" ></el-input>
                    </div>
                    </el-form-item>
                    <el-form-item label="可借数量">
                    <div class="updatediv">
                        <el-input class="updatediv" v-model.trim="useInfo.borrowNum" ></el-input>
                    </div>
                    </el-form-item>
                    <el-form-item>
                      <p v-if="passwordError" style="color: red;">两次输入的密码不一致</p> <!-- 显示错误消息 -->
                      <el-button v-on:click="regist" type="warning" style="float: left;">注册</el-button>
                      <div class="right" >
                      <span>已有账号?<router-link to="/login">立即登录</router-link></span>
                      </div>
                    </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"Regist",
    data(){
        return{
            useInfo:{
                userNo:"",
                userName:"",
                passWord:"",
                age:"",
                sex:"男",
                birthday:"",
                phoneNo:"",
                address:"",
                borrowNum:"",
            },
            pickerOptions: {
                disabledDate(time) {
                return time.getTime() > Date.now();
                }
            },
            passWord1:"",
            passwordError:false,
        }
    },
    methods:{
        regist:function(){
            if(this.useInfo.passWord==this.passWord1){
                axios.post("http://localhost:5188/Login",this.useInfo
                // {
                    
                //     //请求的负载，向后端发送的数据
                //     userNo:this.userNo,
                //     userName:this.userName,
                //     password:this.passWord,
                //     age:this.age,
                //     sex:this.sex,
                //     birthday:this.birthday,
                //     phoneNo:this.phoneNo,
                //     address:this.address,
                //     borrowNum:this.borrowNum
                // } 
                
                ).then((res)=>{
                    console.log(res.data),
                    this.$message(res.data);
                    this.$router.push("/login")
                })
                this.passwordError = false;

               
            }
            else{
                this.passwordError = true;
            }
               
        }

    }

}
</script>

<style>
    #Regist{
        width: 450px;
        height: 500px;
        margin: auto;
        margin-top: 10px;
        
    }
    #Regist h1{
        text-align: center;
    }
    #Regist hr{
        margin-top: 5%;
    }
    #Regist .center{
        width: 400px;
        height: 500px;
        margin: auto;
        margin-top: 5%;
    }
    #Regist .center button{
        width: 40%;
    }
    #Regist .center .right{
        text-align: right;
    }
</style>