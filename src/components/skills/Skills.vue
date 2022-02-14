<template>
  <div class="skills">
    <!-- LEFT -->
    <div class="box skills__column-left">
      <div class="subBox-left indicators-left">
        <h1 class="skills__title">Habilidades Duras</h1>
        <div
          class="subBox-left-indicators indicators__img-left"
          v-for="(logo, i) in listLogos"
          :key="i"
        >
          <span class="indicators__icon box-subBox" v-html="logo.logo"></span>
          <div class="skill__text-light box-subBox">
            <span v-html="logo.skill"></span><span>%</span>
          </div>
        </div>
      </div>
      <div class="subBox-left brain-left-image"></div>
    </div>
    <!-- RIGHT -->
    <div class="box skills__column-right">
      <div class="subBox-right brain-right-image"></div>
      <div class="subBox-right indicators-right">
        <h1>Habilidades Blandas</h1>
        <div
          class="subBox-right-indicators indicators__img-right"
          v-for="(icon, i) in listIcons"
          :key="i"
        >
          <div class="skill__text-dark box-subBox">
            <span v-html="icon.skill"></span><span>%</span>
          </div>
          <span class="indicators__icon box-subBox" v-html="icon.icon"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { logos, icons } from "../../assets/img/svg/logos/logos";
export default {
  data() {
    return {};
  },
  computed: {
    listLogos() {
      return logos.map((name) => name);
    },
    listIcons() {
      return icons.map((name) => name);
    },
  },
  created() {
    console.log(this.listLogos[0]);
  },
};
</script>

<style></style>
