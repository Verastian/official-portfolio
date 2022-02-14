<template>
  <div class="header">
    <div class="">
      <div class="header__content">
        <div class="box header__text">
          <span class="hello">Hola, Yo Soy</span>
          <h1 class="name"><span class="square square__position-header">S</span>ebastían</h1>
          <h1 class="name"><span class="square square__position-header">V</span>era</h1>
          <h4 class="">
            <span class="typewriter">{{ typewriter }}</span>
          </h4>
          <div class="header__btn">
            <button class="btn__contact">
              <span>&lt;</span> Di Hola! <span>&frasl;&gt;</span>
            </button>
            <button class="btn__contact">
              <span>&lt;</span> Acerca de Mí <span>&frasl;&gt;</span>
            </button>
          </div>
        </div>
        <div class="box header__avatar">
          <span class="two"><span class="in layer" data-depth="0.18"></span ></span>
          <div class="img__main">
          
            <img
              src="../../assets/img/hero/1.png"
              loading="lazy"
              decoding="async"
              lazyalt="imagen"
              alt=""
              width="400"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "{ Fullstack:Developer };        ",
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
  },
  mounted() {
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

<style>
</style>