<template>
  <div
    v-on:mouseover="showToolTip = true"
    v-on:mouseleave="showToolTip = false"
    class=""
  >
    <slot></slot>
    <Tooltip :transition="transition" :show="showToolTip" :text="text"></Tooltip>
  </div>
</template>

<script>
import Tooltip from './Tooltip.vue'
export default {
  props: {
    transition: {
      type: String,
      default: "bounce",
      required: false,
    },
    text:{
        type:String,
        default:'Tooltip',
        required:false,
    }
  },
  components: {
    Tooltip,
  },
  data() {
    return {
      showToolTip: false,
    };
  },
};
</script>

<style></style>
