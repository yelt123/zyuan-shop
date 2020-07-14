import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'vant/lib/index.css';

import store from './Store/store.js'





import {
  Uploader,
  Cell,
  CellGroup,
  AddressEdit,
  AddressList,
  Tab,
  Tabs,
  NavBar,
  Loading,
  RadioGroup,
  Radio,
  Grid,
  GridItem,
} from 'vant';




Vue.use(Uploader);
Vue.use(AddressList);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(AddressEdit);
Vue.use(NavBar);
Vue.use(Loading);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Grid);
Vue.use(GridItem);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')