import Vue from 'vue'
import Element from 'element-ui'
import ExTableColumn from '@/components/ExTableColumn';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Element)
Vue.component(ExTableColumn.name, ExTableColumn);

new Vue({
  render: h => h(App),
}).$mount('#app')