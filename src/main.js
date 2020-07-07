import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'


Vue.use(VueParticles)
export const bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
