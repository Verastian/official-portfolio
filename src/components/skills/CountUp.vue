<template>
  <div class="countUp">
    <div class="countUp__box countUp__head">
      <h1>Días Como Desarrollador</h1>
    </div>

    <div class="countUp__box countUp__content">
      <p class="digit">{{ days | two_digits }}</p>
      <p class="count__text">Days</p>
    </div>
    <div class="countUp__box countUp__content">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="count__text">Hours</p>
    </div>
    <div class="countUp__box countUp__content">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="count__text">Minutes</p>
    </div>
    <div class="countUp__box countUp__content">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="count__text">Seconds</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc((this.now - Date.parse(this.date)) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds + this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds + this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds + this.now) / 60 / 60) % 24;
    },
    days() {
      /*  console.log(this.dateInMilliseconds + this.now) */
      return (
        Math.trunc((this.dateInMilliseconds + this.now) / 60 / 60 / 24) - 19
      );
    },
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
    /*  console.log(this.dateInMilliseconds)
    console.log(this.now)
   
    console.log(Date.parse(this.date)/ 1000)
   
    console.log(this.days) */
  },
};
</script>

<style></style>
