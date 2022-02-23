<template>
  <div class="contact">
    <div class="contact__box contact__head text__content">
      <div class="title">
        <span class="small">Ponte en contacto</span>
        <h3 class="">
          <span class="square__position-about">C</span>
          <span class="text-red-fluor">onectate conmigo</span>,
        </h3>
        <!-- <span class="subtitle">Alias Verastian y creo ser</span> -->
        <h3>con Confianza</h3>
      </div>
    </div>

    <div class="contact__box .contact__inner">
      <ul>
        <li>
          <div
            class="list_inner"
            v-html="
              msg +
              ` <div class='list_text'><span>Email</span><h3><a class='line__anim text-red-fluor' href='mailto:verastian0908@gmail.com'>verastian0908@gmail.com</a></h3> </div>`
            "
          ></div>
        </li>
        <li>
          <div
            class="list_inner"
            v-html="
             git +
              ` <div class='list_text'><span>GitHub</span><h3><a class='line__anim text-red-fluor' href='https://github.com/Verastian'>github.com/Verastian</a></h3> </div>`
            "
          ></div>
        </li>
        <li>
          <div
            class="list_inner"
            v-html="
              link +
              ` <div class='list_text'><span>Linkedin</span><h3><a class='line__anim text-red-fluor' href='https://www.linkedin.com/in/sebastian-vera-0908'>linkedin.com/sebastian-vera-0908</a></h3> </div>`
            "
          ></div>
        </li>
      </ul>
    </div>

    <div class="contact__box contact__block">
      <div class="block"></div>
    </div>
    <div class="contact__box contact__block">
      <div class="border"></div>
    </div>

    <div class="contact__box"><FormContact /></div>
  </div>
</template>

<script>
import FormContact from "../components/contact/FormContact.vue";
import { msg,git,link} from "../assets/img/svg/icons/iconsSvg";
export default {
  components: {
    FormContact,
  },
  data() {
    return {
      msg,git,link
    };
  },
};
</script>

<style></style>
