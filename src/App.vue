<template>
  <div id="app">
    <Navbar />
    <transition name="fade-routes" mode="out-in">
    <router-view />
    </transition>
    <Footer v-if="!$route.meta.hideFooter"/>
  </div>
</template>
<script>
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  data(){
    return{}
  },
  
};
</script>
<style lang="scss" src="./assets/sass/main.scss">


</style>
