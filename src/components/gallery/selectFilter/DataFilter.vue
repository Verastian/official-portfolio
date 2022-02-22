<template>
  <div class="dataFilter">
      <ul class="dataFilter__box">
        <li
          class="dataFilter__container"
          v-for="(item, i) in listLogos"
          :key="i"
        >
          <slot :items="item"></slot>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { iconLogos } from "../../../assets/img/svg/logos/logos";
export default {
  props: {
    text: { type: String, default: "All" },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("getDataRepos", ["repos"]),
    listLogos() {
      let listLogos = [];
      let logo = null;
      this.existingLogos.forEach((ele) => {
        logo = iconLogos.find((logo) => {
          return logo.name.toLowerCase() === ele.toLowerCase();
        });
        listLogos.push(logo);
      });
      return listLogos;
    },
    existingLogos() {
      const listLogos = ['all'];
      this.repos.forEach((ele) => {
        return listLogos.push(ele.language);
      });
      return this.notRepeated(listLogos);
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
    notRepeated(arr) {
      const filteredArray = arr.filter(function (ele, pos) {
        return arr.indexOf(ele) == pos;
      });
      return filteredArray;
    },
  },
  created() {
    this.repos;
    this.existingLogos;
  },
};
</script>

<style></style>
