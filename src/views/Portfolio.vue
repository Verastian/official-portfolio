<template>
  <div class="portfolio__container">
    <div class="block__portfolio portfolio__header"></div>
    <div class="block__portfolio portfolio__header-content">
     <div class="text__content">
       <div class="title">
            <span class="small text-white">Trabajos destacados, </span>
            <h3>Revisa mi</h3>
            <h3 class=""><span class="square__position-about">P</span>ortafolio</h3>
          </div>
           </div>
     </div>
    <div class="block__portfolio portfolio__section"></div>
    <div class="block__portfolio portfolio__gallery">
      <Gallery />
    </div>
  </div>
</template>

<script>
/* import { mapActions } from "vuex"; */
// import Gallery from "../components/gallery/Gallery.vue";
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
};
</script>

<style></style>