<template>
  <div class="portfolio">
    <div class="portfolio__box portfolio__header"></div>
    <div class="portfolio__box portfolio__header-content">
     <div class="text__content">
       <div class="title">
            <span class="small text-white">Trabajos destacados, </span>
            <h3>Revisa mi</h3>
            <h3 class=""><span class="square__position-about">P</span>ortafolio</h3>
          </div>
           </div>
     </div>
    <div class="portfolio__box portfolio__section moving_effect" data-direction="y"
        data-reverse="no"></div>
    <div class="portfolio__box portfolio__gallery">
    <div class="portfolio__box portfolio__section-2"></div>
      <Gallery />
    </div>
  </div>
</template>

<script>
/* import { mapActions } from "vuex"; */
// import Gallery from "../components/gallery/Gallery.vue";
import { movingEffect } from "../utils/effects";
export default {
  components: {
    Gallery: () =>import(/* webpackChunkName: "Gallery" */ "../components/gallery/Gallery.vue"),
  },
  data() {
    return {};
  },
  computed: { 
  },
  methods: {
   /*  ...mapActions("getDataRepos", ["getDataRepos"]), */
  },
  created() {
    /* this.getDataRepos(); */
  },
   mounted() {
    movingEffect();
  },
};
</script>

<style></style>