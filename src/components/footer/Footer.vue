<template>
  <div class="footer">
    <div class="footer__box footer__logo">
      <span v-html="logoPrimary"></span>
      <div class="square1"></div>
    </div>
    <div class="footer__box"><Social /></div>
    <div class="footer__box footer__square2">
      <div class="square2"></div>
    </div>
    <div class="footer__box footer__data">
      <div class="left">
        <p>
          Creado con amor por
          <a class="line__anim" href="" target="_blank">Verastian</a>
          &copy; {{ new Date().getFullYear() }}
        </p>
      </div>
      <div class="right">
        <ul>
          <li><a class="line__anim" href="#">Terms &amp; Condition</a></li>
          <li><a class="line__anim" href="#">Privacy Policy</a></li>
          <li><a class="line__anim" href="#">Support</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Social from "../social/Social.vue";
import { logoPrimary } from "../../assets/img/svg/logos/logos";
export default {
  components: {
    Social,
  },
  data() {
    return {
      logoPrimary,
    };
  },
};
</script>

<style></style>
