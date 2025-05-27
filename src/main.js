import Vue from 'vue'
import App from './App.vue'//残缺vue
import VueRouter from 'vue-router';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './store';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);



new Vue({
  //render:(createElement){return createElement(App)}
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  router:router
}).$mount('#app')
