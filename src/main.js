import Vue from 'vue'
import App from './App.vue'
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false

const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

new Vue({
  created() {
    AOS.init({
      })
    },
  render: h => h(App),
}).$mount('#app')
