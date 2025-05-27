<template>
    <el-main>
        <router-view></router-view>
        <div style="text-align: center;">
            <h1 style="font-size: 70px;" v-show="info.isLogining">登陆中</h1>
            <!-- 插值语法 -->
            <h1 :v-show="info.errMsg">{{errMsg}}</h1>
        </div>
    </el-main>
</template>

<script>
export default {
    name:'Main',
    data(){
        return{
            info:{
                isLogining:false,
                errMsg:'',
            }
        }
    },
    mounted(){
        this.$bus.$on('updateLogin',(infoObi)=>{
            this.info={...this.info,...infoObi}
            console.log(infoObi)
        })
    }

}
</script>

<style>
.el-main {
    background-color: white;
    color: #333;
  }
</style>