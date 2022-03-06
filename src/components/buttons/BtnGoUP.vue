<template>
  <div class="go-up">
    <transition name="bounce">
      <button v-if="showBtn" @click="goUp">
        <span v-html="arrowUp"></span>
      </button>
    </transition>
  </div>
</template>

<script>
import { arrowUp } from "../../assets/img/svg/icons/iconsSvg";
export default {
  data() {
    return {
      arrowUp,
      showBtn: false,
    };
  },
  computed: {},
  methods: {
    goUp() {
      // console.log(window.scrollY);
      let scrollY = window.scrollY;
      //   console.log(scrollY);
      const id = setInterval(frame, 10);
      function frame() {
        if (scrollY < 0) {
          clearInterval(id);
        } else if (scrollY < 200) {
          window.scrollTo(0, (scrollY -= 6));
        } else {
          window.scrollTo(0, (scrollY -= 100));
        }
      }
    },
    handleScroll() {
      // console.log(window.scrollY);
      if (window.scrollY > 200) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
      //   console.log(document.body.scrollHeight);
      //   console.log(event);
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
