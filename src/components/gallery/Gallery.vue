<template>
  <div class="">
        <SelectFilter/>
      <DataGallery>
        <template v-slot:default="{ items}">
              <CardHoverInfo :data="items" :icons="listiconLogos"/>
        </template>
      </DataGallery>
  </div>
</template>

<script>
import CardHoverInfo from "../cards/CardHoverInfo.vue";
import SelectFilter from "../gallery/selectFilter/SelectFilter.vue"
// import DataGallery from "../gallery/DataGallery.vue";
import {logoImg} from '../../assets/img/svg/logos/logos'
export default {
  components: {
    DataGallery : () =>import(/* webpackChunkName: "DataGallery" */ "../gallery/DataGallery.vue"),
    CardHoverInfo,
    SelectFilter,
  },
  data() {
    return {};
  },
  computed: {
     listiconLogos() {
      return logoImg;
    },
  },
  methods: {},
  created() {},
};
</script>

<style></style>
