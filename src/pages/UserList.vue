<template>
    <div>
        <div>用户列表</div>
        <div>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                prop="userNo"
                label="账号"
                width="130">
                </el-table-column>
                <el-table-column
                prop="userName"
                label="用户名"
                width="130">
                </el-table-column>
                <el-table-column
                prop="age"
                label="年龄"
                width="130">
                </el-table-column>
                <el-table-column
                prop="sex"
                label="性别"
                width="130">
                </el-table-column>
                <el-table-column
                prop="userLevel"
                label="身份"
                width="130">
                </el-table-column>
                <el-table-column
                prop="birthday"
                label="生日"
                width="130">
                </el-table-column>
                <el-table-column
                prop="phoneNo"
                label="手机号码"
                width="130">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                width="130">
                </el-table-column>
                <el-table-column
                prop="borrowNum"
                label="可借数量"
                width="130">
                </el-table-column>
            </el-table>
        </div>
    </div>
  
</template>

<script>
import axios from 'axios';
export default {
    name:'UserList',
    data(){
        return{
            tableData:[]
        }
    },
    mounted(){
        this.getuserlist();
    }, 
    methods:{
        getuserlist:function(){
            axios.get(`http://localhost:8080/api/Login/${sessionStorage["userNo"]}`)
            .then((res)=>{
                console.log(res.data),
                this.tableData=res.data;
            })
        }
    },
    beforeRouteEnter(to,from,next){
        if(to.meta.isAuth){
            if(sessionStorage['userLevel']==0){
                next()
            }else{
                alert("您不是管理员无法查看")
            }
        }else{
            next()
        }
    }
}
</script>

<style>

</style>