<template>
  <ResumeData class="resume">
    <template v-slot:education="{ items, id }">
      <div class="box__head">
        <div class="box__icons">
          <span class="icon" v-html="edu"></span>
          <h3>{{ items.institution }}</h3>
        </div>
        <span>{{ items.date | extract_text('-')}}</span>
      </div>
      <div class="box__body">
        <h4>{{ items.career | uppercase }}</h4>
        <span>{{ items.description }}</span>
        <span class="highlighted-text">{{ items.extra }}</span>
        <div v-if="items.documentation !== ''" class="box__body__actions">
          <div
            class="box__icons"
            @mouseover="(hover = true) && (currentId = id + 1 * 100)"
            @mouseleave="hover = false"
          >
            <span class="icon icon__btn" v-html="clip"></span>
            <a
              :href="`${srcDownload}${items.documentation.url}`"
              :download="`${items.documentation.file}`"
            >
              <transition name="bounce">
                <span
                  v-if="hover && currentId === id + 1 * 100"
                  class="icon icon__hover"
                  v-html="download"
                ></span>
              </transition>
            </a>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:experience="{ items, id }">
      <div class="box__head">
        <div class="box__icons">
          <span class="icon" v-html="exp"></span>
          <h3>{{ items.institution }}</h3>
        </div>
        <span>{{ items.date }}</span>
      </div>
      <div class="box__body">
        <h4>{{ items.job | uppercase }}</h4>
        <span>{{ items.description }}</span>
        <div v-if="items.documentation !== ''" class="box__body__actions">
          <div
            class="box__icons"
            @mouseover="(hover = true) && (currentId = id)"
            @mouseleave="hover = false"
          >
            <span class="icon icon__btn" v-html="clip"></span>
            <a
              :href="`${srcDownload}${items.documentation.url}`"
              :download="`${items.documentation.file}`"
            >
              <transition name="bounce">
                <span
                  v-if="hover && currentId === id"
                  class="icon icon__hover"
                  v-html="download"
                ></span>
              </transition>
            </a>
          </div>
        </div>
        
      </div>
    </template>
    <div class="squareRed"></div>
  </ResumeData>
</template>

<script>
import ResumeData from "../skills/ResumeData.vue";
import { edu, exp, text, download,clip } from "../../assets/img/svg/icons/iconsSvg";
export default {
  components: {
    ResumeData,
  },
  data() {
    return {
      edu,
      exp,
      text,
      download,
      clip,
      hover: false,
      currentId: null,
      srcDownload: `${process.env.BASE_URL}`,
    };
  },
  computed: {
    /*  hoverIcons() {
      return this.hover ? this.download : this.text;
    }, */
  },
  methods: {
    /*  scroll(){
          window.onscroll = ()=>{
              console.log('scroll')
          }
      } */
  },
  created() {
    /*  this.scroll(); */
  },
};
</script>

<style></style>
