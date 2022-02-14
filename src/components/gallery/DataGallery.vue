<template>
    <ul class="">
      <li class="box text-white" v-for="(item, i) in getListFinal" :key="i">
        <slot :items="item"></slot>
      </li>
    </ul>
</template>

<script>
import {  mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {
      listRepos: [
        "player-music",
        "proyecto-MEVN-front-end",
        "-proyecto-MEVN-back-end",
        "0049-Otto-Klauss",
      ],
    };
  },
  computed: {
    ...mapGetters("getDataRepos", ["getListFinal"]),
  },
  methods: {
    ...mapActions("getDataRepos", ["getDataRepos","getdataImgReadme","getLanguages"]),
     principalRepos() {
       this.listRepos.forEach((ele) => {
         this.getdataImgReadme(ele);
         this.getDataRepos(ele)
         this.getLanguages(ele)
      });
    },
  },
  created() {
    this.principalRepos();
    this.getListFinal;
    console.log(this.getListFinal);
  },
};
</script>

<style></style>

