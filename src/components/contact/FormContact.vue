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
    <div>
          <a
            class="btn-2 btn"
            href=""
            download="sebastian-vera.jpg"
          >
            <span class="icon" v-html="download"> </span>
          </a>
        </div>
  </form>
</template>

<script>
import { msgSent} from "../../assets/img/svg/icons/iconsSvg";
export default {
  data() {
    return {
      fromData: {
        name: "",
        email: "",
        phone: "",
        msg: "",
      },
      msgSent,
      download: `Enviar Mensaje ${msgSent}`,
    };
  },
};
</script>

<style></style>
