<template>
    <div>
     <div style="margin-bottom: 25px;">功能概况</div>
     <div>
      <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
           <div class="header">首页</div>
           <div class="detail">
            <p>首页：概括导航栏基本信息</p>
            <p></p>
           </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="header">图书管理</div>
           <div class="detail">
            <p>图书列表：显示已经上架的图书信息，可对上架图书进行搜索、修改、删除操作</p>
            <p>图书上架：录入图书信息，输入图书名称、作者、图书分类，页数，定价等数据进行图书录入</p>
           </div>
        </div>
      </el-col>
     </el-row>
      <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="header">借阅管理</div>
           <div class="detail">
            <p>借阅图书：显示已经上架的图书信息，可对上架图书进行搜索、修改、删除操作</p>
            <p>图书上架：录入图书信息，输入图书名称、作者、图书分类，页数，定价等数据进行图书录入</p>
           </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="header">用户管理</div>
           <div class="detail">
            <p>用户列表：显示已经注册的用户，可以对已经注册的用户进行修改、删除操作</p>
            <p>用户添加：录入用户的昵称、用户名、密码、生日、电话、邮箱等信息添加新用户</p>
           </div>
        </div>
      </el-col>
     </el-row>

     <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="header">公告管理</div>
           <div class="detail">
            <p>公告列表：可以对已经发布的公告进行修改、删除等操作</p>
            <p>公告发布：输入公告标题，发布时间，发布内容等要素发布公告</p>
           </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="header">个人信息</div>
           <div class="detail">
            <p>个人信息详情：查看个人信息详情</p>
            <p>个人信息修改：修改个人信息</p>
           </div>
        </div>
      </el-col>
      </el-row>
    </div>
    </div>
</template>

<script>
export default {
    name:'FirstPage',
}
</script>

<style scoped>
 .el-row {
    margin-bottom: 20px;
  }
  .header{
    width: auto;
    background-color:rgb(0, 191, 255);
    padding-left: 10px;
    text-align: left;
    color: white;
    font-size: 15px;
    line-height: 40px;
  }
  p{
    padding-bottom: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
   
  }
  
  .detail{
    width: auto;
    padding-top: 10px;
    background-color: white;
    padding-bottom: 10px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>