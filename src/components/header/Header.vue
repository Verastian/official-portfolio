<template>
  <div class="header" >
    <!-- @mousemove="mouseMove" -->
    <div class="header__box header__text" >
      <span class="hello">Hola ! , <span class="text-red-fluor">Yo Soy</span></span>
      <h1 class="name">
        <span class="square square__position-header">S</span>ebastían
      </h1>
      <h1 class="name">
        <span class="square square__position-header">V</span>era
      </h1>
    </div>

    <div class="header__box header__actions">
      <h4 class="">
        <span class="typewriter">{{ typewriter }}</span>
      </h4>
      <div class="btns" >
        <button class="btns__contact" @click="goContact()">
          <span>&lt;</span> Di Hola! <span>&frasl;&gt;</span>
        </button>
        <button class="btns__contact" @click="goAbout()">
          <span >&lt;</span> Acerca de Mí <span>&frasl;&gt;</span>
        </button>
      </div>
    </div>

   <!--  <div class="header__box header__square">
    </div> -->

    <div class="header__box header__avatar parallax" data-relative-input="true">
      <div class="img__main">
        <img
          src="../../assets/img/hero/1.2.png"
          loading="lazy"
          decoding="async"
          lazyalt="imagen"
          alt=""
          class="layer"
          data-depth="0.15"
        />
      </div>

      <!-- <span v-for="item,i in 3" :key="i" :class="`box-square-${i+1} layer` " :data-depth="`0.${i}`"></span> -->
      <span class="box-square-1 layer" data-depth="0.3"></span>
      <span class="box-square-2 layer" data-depth="0.13"></span>
      <span class="box-square-3 layer" data-depth="0.2"></span>
    </div>
  </div>
</template>

<script>
import {parallax} from "../../utils/effects";
export default {
  data() {
    return {
      message: "{ Developer: Fullstack }         ",
      typewriter: "",
      timer: null,
    };
  },
  methods: {
    vprinter() {
      this.stoper();
      let i = -1;
      this.timer = setInterval(() => {
        i++;
        const x = i % this.message.length;
        this.typewriter += this.message[x];
      }, 250 - Math.random() * 50);
    },
    stoper() {
      clearInterval(this.timer);
      this.typewriter = "";
    },
    goAbout(){
      this.$router.push('/about')
    },
    goContact(){
      this.$router.push('/contact')
    }
    /* mouseMove(event){
      console.log(event.clientX, event.clientY);
    } */

  },
  created(){
    
    },
  mounted() {
    parallax();
    this.vprinter();
  },
  watch: {
    typewriter: function () {
      if (this.typewriter.length === this.message.length) {
        this.typewriter = "";
      }
    },
  },
};
</script>

<style></style>
