<template>
  <div class="gallery">
      <DataGallery>
        <template v-slot:default="{ items }">
              <CardHoverInfo :src="items.img != undefined?items.img.download_url:''" :data="items" :icons="listiconLogos"/>
        </template>
      </DataGallery>
  </div>
</template>

<script>
import CardHoverInfo from "../cards/CardHoverInfo.vue";
import DataGallery from "../gallery/DataGallery.vue";
import {logoImg} from '../../assets/img/svg/logos/logos'
export default {
  components: {
    DataGallery,
    CardHoverInfo,
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
