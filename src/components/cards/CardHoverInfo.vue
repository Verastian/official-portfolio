<template>
  <div class="card">
    <div class="cards cards--three">
     <!--  <div class="card__img" v-if="src === undefined">
        <img  src="../../assets/img/mssg/images.png" alt="">
      </div> -->
      <div class="card__img" >
        <img
        
          :src="image"
          class="img-responsive"
          alt="Cards Image"
          loading="lazy"
          decoding="async"
          lazyalt="imagen"
        />
      </div>
      <a :href="data.html_url">
        <span class="cards--three__rect-1">
          <TooltipButton :transition="'fade'" :text="'ir a GitHub'">
            <span class="shadow-1">
              <p>{{ data.name }}</p>
            </span>
          </TooltipButton>
        </span>
      </a>
      <span class="cards--three__rect-2">
        <span class="shadow-2"></span>
      </span>
      <span class="cards--three__circle"></span>
      <ul class="cards--three__list">
        <li v-for="(item, i) in data.languages" :key="i">
          <span v-for="(icon, j) in dataIcons" :key="j">
            <TooltipButton :transition="'bounce'" :text="i | capitalize">
              <span v-if="j === i" v-html="icon"></span>
            </TooltipButton>
          </span>
          {{ item }}%
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import TooltipButton from "../tooltip/TooltipButton.vue";
import axios from "axios";
export default {
  components: {
    TooltipButton,
  },
  data() {
    return {};
  },
  props: {
    /* src: {
      type: String,
      required: false,
    }, */
    data: {
      type: Object,
      required: true,
    },
    icons: {
      type: Object,
      required: true,
    },
  },
  /* https://www.digitalocean.com/community/tutorials/vuejs-async-computed-properties */
  /* asyncComputed: {
    getImg: {
      get() {
        return new Promise((resolve, reject) => {
         axios.get(this.data.img.download_url)
         .then(res =>{
           
           console.log(res);
          resolve(res);
         });
         
        });
      },
      default: "../../assets/img/mssg/images.png",
    },
  }, */
  computed: {
    dataIcons() {
      return this.icons;
    },
    image(){
      const {img} = this.data;
      return img
    }
  },
  methods: {},
  beforeMount(){
    this.data;
    this.image;

  },
  created() {
    this.dataIcons;
    // console.log(this.data.img);
  },
};
</script>

<style></style>
