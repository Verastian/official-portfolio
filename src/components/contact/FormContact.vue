<template>
  <form class="contact_form" id="contact_form" @submit.prevent="handleSubmit">
    <div class="input_list">
      <input
        id="name"
        type="text"
        v-model="fromData.name"
        placeholder="Your Name"
      />
      <input
        id="email"
        type="text"
        v-model="fromData.email"
        placeholder="Your Email"
      />
      <div class="message_area">
        <textarea
          id="message"
          placeholder="Your message here"
          v-model="fromData.msg"
        ></textarea>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fromData: {
        name: "",
        email: "",
        phone: "",
        msg: "",
      },
    };
  },
};
</script>

<style></style>
