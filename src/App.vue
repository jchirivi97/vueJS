<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>LOGIN</h1>

    <nav>
      <router-link to='/login'>Login</router-link>
      <router-link to='/welcome'>Bienvenida</router-link>
    </nav>

    
    <router-view></router-view>
  </div>
</template>

<script>

import login from "./components/login"
import principal from "./components/principal"

export default {
  name: 'App',
  components: {
    login,
    principal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
