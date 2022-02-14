<template>
  <div class="card">
    <div class="cards cards--three">
      <div class="card__img">
        <img
          :src="src"
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
        <li v-for="(item, i) in dataLanguages" :key="i">
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
export default {
  components: {
    TooltipButton,
  },
  data() {
    return {};
  },
  props: {
    src: {
      type: String,
      required: true,
    },
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
  asyncComputed: {
    dataLanguages: {
      get() {
        return new Promise((resolve, reject) => {
          const arr =
            this.data.languages != undefined
              ? Object.entries(this.data.languages).map(([key, value]) => {
                  key = key.toString().toLowerCase();
                  value = ((value * 100) / 395735).toFixed(2);

                  return [key, value];
                  // console.log(key +':' + value)
                })
              : "";
          const obj = Object.fromEntries(arr);
          resolve(obj);
        });
      },
      default: "No Changes!",
    },
  },
  computed: {
    dataIcons() {
      return this.icons;
    },
  },
  methods: {},

  created() {
    this.dataLanguages;
    this.dataIcons;
    console.log(this.dataLanguages);
  },
  filters: {
    lowerCased: function (data) {
      if (!data) return "";
      data = data.toString();
      return data.toLowerCase();
    },
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style></style>
