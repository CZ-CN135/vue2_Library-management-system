<template>
  <div>
    <div>个人信息</div>
    <div class="detail">
      <el-form ref="form"  label-width="80px" >
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
        <el-form-item label="密码">
          <div class="inputname">
            <el-input class="inputname"  v-model="passWord" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="身份">
          <div class="inputname">
            <el-input class="inputname" v-model="identity" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="性别">
          <div class="inputname">
            <el-input class="inputname" v-model="sex" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="年龄">
          <div class="inputname">
            <el-input class="inputname" v-model="age" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="生日">
          <div class="inputname">
            <el-input class="inputname" v-model="birthdayDate" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="电话">
          <div class="inputname">
            <el-input class="inputname" v-model="phoneNo" readonly="true" ></el-input>
          </div>
        </el-form-item>  
        <el-form-item label="地址">
          <div class="inputname">
            <el-input class="inputname" v-model="address" readonly="true" ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="可借数量">
          <div class="inputname">
            <el-input class="inputname" v-model="borrowNum" readonly="true" ></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {getuserInfo} from '../mixin'

export default {
    name:"PersonInfoDetails",
    mixins:[getuserInfo],

}
</script>

<style>
 .detail{
  width: 800px;
 }
 .inputname{
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
 }

</style>