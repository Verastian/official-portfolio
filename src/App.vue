<template>
  <div id="app">
    <Navbar />
    <transition name="fade-routes" mode="out-in">
    <router-view />
    </transition>
  </div>
</template>
<script>
import Navbar from "./components/navbar/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data(){
    return{}
  },
  
};
</script>
<style lang="scss" src="./assets/sass/main.scss">

</style>
