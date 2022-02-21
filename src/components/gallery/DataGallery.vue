<template>
  <ul class="gallery">
    <li class="box text-white" v-for="(item, i) in filterByCategory" :key="i">
      <slot :items="item"></slot>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
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
    ...mapState("getDataRepos", ["repos"]),
    ...mapGetters("getDataRepos", ["filterByCategory"]),
  },
  methods: {
    ...mapActions("getDataRepos", ["getDataRepos"]),
    principalRepos() {
      this.listRepos.forEach((ele) => {
        this.getDataRepos(ele);
      });
    },
  },
  created() {
    if (this.repos.length === 0) {
      this.principalRepos();
      this.repos;
      this.filterByCategory;
      //console.log(this.filterByCategory)
    }
    // this.getListFinal;
    // console.log(this.repos.img);
  },
};
</script>

<style></style>
