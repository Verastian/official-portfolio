<template>
  <transition :name="transition">
    <div
      v-if="show"
      class="tooltip"
      
      role="alert"
    >
      <div class="tooltiptext">
        <div>
          <p class="" v-html="text"></p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    transition: {
      type: String,
      default: "bounce",
      required: true,
    },
    text:{
        type:String,
        default:'Tooltip',
        required:false,
    }
  },
};
</script>

<style></style>
