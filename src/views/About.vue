<template>
  <div class="about">
    <div class="about__content">
      <div class="box about__column-left">
        <span class="two"> <span class="three"></span><span class="four " 
            ></span></span>
      </div>
      <div class="box text__content">
        <div class="title">
          <span class="small ">Hola!, </span>
          <h3 class=""><span 
          class="square__position-about ">S</span>oy <span class="text-red-fluor">Sebastian</span>,</h3>
          <!-- <span class="subtitle">Alias Verastian y creo ser</span> -->
          <h3>Web <span class="text-red-fluor">Developer</span></h3>
          <span class="subtitle">Establecido en Santiago,Chile</span>
        </div>
        <div class="text">
          <p>
            Soy técnico Superior en Electrónica Industrial, Titulado de Inacap.
          </p>

          <p />
          <p>
            A mediados del año 2020 comencé a involucrarme en el desarrollo de
            aplicaciones web, al realizar mi primer bootcamp en el programa de
            Talento Digital de Sence donde adquirí conocimientos para el
            desarrollo Frontend con herramientas como Vuejs para Javascript,
            Bootstrap y tecnología para persistir información no relacional como
            firebase y MongoDB.
          </p>

          <p />
          <p>
            Posterior a esto realicé un segundo curso en el mismo organismo,
            esta vez centrado en el desarrollo Backend utilizando el lenguaje de
            programación Java, con el cual pude aprender y desarrollar
            habilidades de programación orientada a objetos, patrones de diseño
            y seguridad.
          </p>

          <p />
          <p>
            Utilice como herramienta fundamental Spring Framework y SpringBoot.
            Ejecute consultas a bases de dato de tipo relacional como MySql y
            Oracle aplicados en proyectos CRUD y APIRest.
          </p>

          <p />
          <p>
            Hasta la fecha he seguido perfeccionando el conocimiento adquirido
            construyendo algunos proyectos a nivel educacional y personal, con
            el fin de continuar acumulando experiencia en el área del Desarrollo
            y lograr en un futuro cercano mi anhelada reconversión Digital...
          </p>
        </div>
        <div>
          <a
            class="btn-2 btn"
            href="../assets/img/cv/sebastian-vera.jpg"
            download
          >
            <span class="icon" v-html="download"> </span>
          </a>
        </div>
      </div>
      <div class="box about__column-right">
        <div class="images">
          <img
            src="../assets/img/svg/illustrations/1.2.svg"
            loading="lazy"
            decoding="async"
            lazyalt="imagen"
            alt=""
          />
          <span class="two"> <span class="three">
            </span>
            <span class="four">
          </span>
          </span>
          
        </div>
        
      </div>
    </div>

    <Skills/>
    <!-- "Y-m-d H:i:s" -->
    <CountUp  date="2020-07-06 18:00:00"/>
    <Resume/>
  </div>
</template>
<script>
import { download } from "../assets/img/svg/icons/iconsSvg";
import Skills from '../components/skills/Skills.vue'
import CountUp from '../components/skills/CountUp.vue'
import Resume from '../components/skills/Resume.vue'
export default {
  name: "About",
  components:{
    Skills,
    CountUp,
    Resume
  },
  data() {
    return {
      download: `Download CV ${download}`,
    };
  },
};
</script>
