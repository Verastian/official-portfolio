<template>
  <div class="footer">
    <div class="footer__box footer__logo">
      <div v-html="logoPrimary"></div>
      <div class="square1 moving_effect" data-direction="x" data-reverse="yes"></div>
    </div>
    <div class="footer__box footer__social"><Social /></div>
    <div class="footer__box footer__square2">
      <div class="square2 moving_effect" data-direction="x" data-reverse="no"></div>
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
import {movingEffect} from "../../utils/effects";
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
  mounted(){
movingEffect();
  },
};
</script>

<style></style>
