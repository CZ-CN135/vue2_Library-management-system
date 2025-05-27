<template>
  <el-aside width="200px" style="background-color:  rgb(238, 241, 246);">
        <el-menu :router="true">
                      <el-menu-item index="/firstpage"><i class="el-icon-s-home"></i>首页</el-menu-item>
                      <el-submenu v-if="isManagement" index="2">
                        <template  slot="title">图书管理</template>
                        <el-menu-item  index="/booklist">图书列表</el-menu-item>
                        <el-menu-item index="/addbook" >图书上架</el-menu-item>
                      </el-submenu>
                      <el-submenu  index="3">
                        <template slot="title">借阅管理</template>
                        <el-menu-item index="/borrowbook">借阅图书</el-menu-item>
                        <el-menu-item index="/returnbook">归还图书</el-menu-item>
                      </el-submenu>
                      <el-submenu   index="4">
                        <template slot="title">用户管理</template>
                        <el-menu-item index="/userlist">用户列表</el-menu-item>
                        <el-menu-item index="4-2">用户添加</el-menu-item>
                      </el-submenu>
                      <el-submenu  index="5">
                        <template slot="title">公告管理</template>
                        <el-menu-item index="5-1">公告列表</el-menu-item>
                        <el-menu-item index="5-2">公告发布</el-menu-item>
                      </el-submenu>
                      <el-submenu  index="6">
                        <template slot="title">个人中心</template>
                        <el-menu-item index="/personInfo">个人信息详情</el-menu-item>
                        <el-menu-item index="/updatepersonInfo">个人信息修改</el-menu-item>
                      </el-submenu> 
        </el-menu>
        <el-button @click="band" >触发绑定自定义事件子传父</el-button>
    </el-aside>
</template>

<script>
export default {
  name:"Menu",
  data(){
    return{
      isManagement:false
    }
  },
  mounted(){
    this.$bus.$on('getuserLevel',(res)=>{
      if(res==0)
        {
          this.isManagement=true;
        };
        if(res==1)
        {
          this.isManagement=false;
        };

    })
    
  },
  methods:{
    band(){
      this.$emit('send',this.isManagement)
    }
  }

}
</script>

<style>
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
   }

</style>