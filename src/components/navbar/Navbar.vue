<template>
  <nav class="navbar-app" style="background-color: #333333">
    <div class="container-app">
      <div class="nav__content">
        <div class="logo">
          <img
            src="../../assets/img/logo/logo-verastian.svg"
            alt="logo-verastian"
          />
        </div>
        <div class="">
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
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style >
</style>