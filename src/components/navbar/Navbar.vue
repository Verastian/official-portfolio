<template>
  <nav class="navbar" style="background-color: #333333">
      
        <div class="navbar__box navbar__logo">
          <span v-html="logoPrimary"></span>
        </div>
        
        <div class="navbar__box navbar__items">
          <div class="nav__text">
            <router-link tag="span" class="line__anim" to="/">Home</router-link>
            <router-link tag="span" class="line__anim" to="/about">About</router-link>
            <router-link tag="span" class="line__anim" to="/portfolio">Portfolio</router-link>
            <router-link tag="span" class="line__anim" to="/contact">Contact</router-link>
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