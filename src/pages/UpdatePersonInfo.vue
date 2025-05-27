<template>
    <div>
    <div>个人信息修改</div>
    <div class="revise">
      <el-form ref="form"  label-width="80px" >
        <el-form-item label="账号">
          <div class="updatediv">
            <el-input class="updatediv" v-model="userNo"  ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="用户名">
          <div class="updatediv">
            <el-input class="updatediv" v-model="userName" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="密码">
          <div class="updatediv">
            <el-input class="updatediv"  v-model="passWord" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="身份">
          <div class="updatediv">
            <el-select v-model="identity" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group  v-model="sex">
              <el-radio  label="男"></el-radio>
              <el-radio  label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <div class="updatediv">
            <el-input class="updatediv" v-model="age" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="生日">
          <div class="updatediv">
            <el-date-picker
              v-model="birthdayDate"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="电话">
          <div class="updatediv">
            <el-input class="updatediv" v-model="phoneNo"></el-input>
          </div>
        </el-form-item>  
        <el-form-item label="地址">
          <div class="updatediv">
            <el-input class="updatediv" v-model="address" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="可借数量">
          <div class="updatediv">
            <el-input class="updatediv" v-model="borrowNum" ></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button v-on:click="reviseInfo" type="primary" style="float: left;">确定修改</el-button>
          <span style="margin-left: 60px">不想使用该账号?<router-link to="/logout">立即注销</router-link></span>
        </el-form-item>
      </el-form>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import {getuserInfo} from '../mixin'

export default {
    name:"UpdatePersonInfo",
    data() {
      return {
        options: [{
          value: '管理员',
        }, {
          value: '普通用户',
        }],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
      }
    },
    mixins:[getuserInfo],
    methods:{
      reviseInfo:function(){
        var userno=sessionStorage["userNo"]
        axios.put(`http://localhost:5188/Login/${userno}`,
        {
          userNo:this.userNo,
          userName:this.userName,
          password:this.passWord,
          userLevel:this.identity === '管理员' ? 0 : 1,
          age:this.age,
          sex:this.sex,
          birthday:this.birthdayDate,
          phoneNo:this.phoneNo,
          address:this.address,
          borrowNum:this.borrowNum,
          
        }).then(function(res){
          console.log(res)
        }),
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
      }

    }
}
</script>

<style>
.revise{
  margin-top: 20px;
  width: 600px;
 }
 

</style>