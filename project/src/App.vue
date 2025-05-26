<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
import About from "./components/About.vue";
import News from "./components/News.vue";
</script>

<template>
  <header>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=
    Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet">

  </header>
  <main>
    <NavBar/>
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
