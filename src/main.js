import Vue from 'vue'
import App from './App.vue'
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.config.productionTip = false

/*ScrollTo */
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

new Vue({
  created() {
    AOS.init({
      })
    },
  render: h => h(App),
}).$mount('#app')
