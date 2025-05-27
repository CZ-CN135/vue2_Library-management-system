<template>
  <dvi>
    <div class="logout">注销账号</div>
    <div>
        <el-form ref="form"  label-width="120px">
            <el-form-item label="请输入注销原因">
                <div class="input">
                    <el-input
                    type="textarea"
                    :rows="7"
                    placeholder="请输入内容"
                    v-model="textarea">
                    </el-input>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button v-on:click="islogout" type="primary" style="float: left;">确定注销</el-button>
            </el-form-item>
        </el-form>
    </div>
  </dvi>
</template>

<script>
import axios from 'axios';

export default {
    name:"Logout",
    data(){
        return{
            userNo:sessionStorage["userNo"]
        }
    },
    methods:{
        islogout:function(){
            var userno=sessionStorage["userNo"];
            axios.delete(`http://localhost:5188/Login/${userno}`).then(function(res){
                console.log(res)
                alert(res.data)
            })
        }
 
        
    }

}
</script>

<style>
.logout{
    margin-bottom: 10px;
   
}

</style>