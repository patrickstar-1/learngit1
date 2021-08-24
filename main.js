import Vue from 'vue'
import App from './App'
import store  from "./store/index"
// main.js
import uView from "uview-ui";

Vue.use(uView);
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
