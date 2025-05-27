const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  // //开启服务代理(方式一)
  // devServer:{
  //   proxy:'http://localhost:5188'
  // }
  devServer:{
    proxy:{
      //紧跟5188后的api名称
      '/api':{
        target:'http://localhost:5188',
        pathRewrite:{'^/api':''},
        ws:true,//用于支持websocket
        changeOrigin:true,//用于控制请求头中的host值
      }
    }
  }

})
