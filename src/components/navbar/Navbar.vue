<template>
  <nav class="navbar" style="background-color: #333333">
      
        <div class="navbar__box navbar__logo">
          <!-- <img
            src="../../assets/img/logo/logo-verastian.svg"
            alt="logo-verastian"
          /> -->
          <span v-html="logoPrimary"></span>
        </div>
        <div class="navbar__box navbar__items">
          <div class="nav__text">
            <router-link tag="span" to="/">Home</router-link>
            <router-link tag="span" to="/about">About</router-link>
            <router-link tag="span" to="/portfolio">Portfolio</router-link>
            <router-link tag="span" to="/contact">Contact</router-link>
          </div>
          <!-- <button class="navbar-toggler d-md-none" type="button">
            <span class="navbar-toggler-icon"></span>
          </button> -->
        </div>
  </nav>
</template>

<script>
import {logoPrimary} from '../../assets/img/svg/logos/logos'
export default {

  data(){
    return{
      logoPrimary,
    }
  }
};
</script>

<style >
</style>