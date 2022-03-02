<template>
  <div class="social">
    <span class="social__title">Connect</span>
    <ul>
      <li>
        <a href="#" class="box__icons"><span class="icon icon__btn" v-html="git2"></span></a>
      </li>
      <li>
        <a href="#" class="box__icons"><span class="icon icon__btn" v-html="link2"></span></a>
      </li>
      <li>
        <a href="#" class="box__icons"><span class="icon icon__btn" v-html="gmail"></span></a>
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
