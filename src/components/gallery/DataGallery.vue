<template>
  <ul
    class="gallery"
    :class="filterByCategory.length === 1 ? 'flex' : ''"
  >
    <li
      class="box text-white"
      v-for="(item, i) in filterByCategory"
      :key="i"
      :style="filterByCategory.length === 1 ? sizeOneCards.li : ''"
    >
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
      sizeOneCards: {
        li: {
          maxWidth: "600px",
        },
        /* flex: {
          display: "flex",
          justifyontent: "center",
        }, */
      },
    };
  },
  computed: {
    ...mapState("getDataRepos", ["repos"]),
    ...mapGetters("getDataRepos", ["filterByCategory"]),
    /* sizeOneCards(){
      return [ ]
    } */
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
