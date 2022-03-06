<template>
  <div id="app">
    <Navbar />
    <transition name="fade-routes" mode="out-in">
      <router-view />
    </transition>
    <Footer v-if="!$route.meta.hideFooter" />
    <BtnGoUp />
  </div>
</template>
<script>
import BtnGoUp from "./components/buttons/BtnGoUP.vue";
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
    BtnGoUp,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" src="./assets/sass/main.scss"></style>
