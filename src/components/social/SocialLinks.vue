<template>
  <div class="social-links">
    <ul>
      <li>
        <a href="https://github.com/Verastian" target="blank" class="box__icons"><span class="icon icon__btn" v-html="git2"></span></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sebastian-vera-0908" target="blank" class="box__icons"><span class="icon icon__btn" v-html="link2"></span></a>
      </li>
      <li>
        <a href="mailto:verastian0908@gmail.com" class="box__icons"><span class="icon icon__btn" v-html="gmail"></span></a>
      </li>
    </ul>
  </div>
</template>

<script>
import { git2,link2, gmail } from "../../assets/img/svg/icons/iconsSvg";
export default {
data(){
    return{
        git2,link2, gmail
    }
}
};
</script>

<style></style>
