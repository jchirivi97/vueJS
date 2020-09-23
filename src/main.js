// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router' // importa librerias para realizar en rutamiento
Vue.use(VueRouter); // indicamos a vue utilizar las liberias


////importar componentes para implementación y enrutamiento 
import login from './components/login'
import principal from './components/principal'

//Configuración del router de Vue
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/login', //ruta del componente
      component: login // nombre del componente
    },
    {
      path: '/welcome',
      component: principal
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

