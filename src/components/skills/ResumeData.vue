<template>
  <div>
    <div class="resume__box">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <ul class="resume__box">
      <h2>Aprendizaje</h2>
      <li v-for="(item, i) in sortEdu" :key="i">
        <slot name="education" :items="item" :id="i"></slot>
      </li>
    </ul>
    <ul class="resume__box">
      <h2>Experiencia</h2>
      <li v-for="(item, i) in sortExp" :key="i">
        <slot name="experience" :items="item" :id="i"></slot>
      </li>
    </ul>
    <div class="resume__box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Mi Resumen",
      description:
        "Disfruto cada paso del proceso de diseño, desde la discusión y la colaboración hasta el concepto y la ejecución.",
      education: [
        {
          institution: "Inacap",
          career: "Tecnico Superior en Electronica Industrial",
          description:
            "lorem ipsum loremp ayala la tratef sodo jjarabe de tuyeta",
          date: "2015-2017",
          documentation:{
            url:'documents/tituloElectIndustrial.pdf',
            file:'tituloElectIndustrial.pdf',
          },
        },
        {
          institution: "Inacap",
          career: "Analista Programador",
          description:
            "lorem ipsum loremp ayala la tratef sodo jjarabe de tuyeta",
          date: "2018-2019",
          documentation: "",
        },
        {
          institution: "Talento Digital",
          career: "DESARROLLO DE APLICACIONES FULLSTACK JAVA TRAINEE",
          description:
            "Implementar páginas web básicas responsivas utilizando HTML, CSS y JavaScript  - Operar una base de datos relacional utilizando el lenguaje SQL - Programación de baja/mediana complejidad en Java - Aplicaciones web dinámicas aplicando el patrón MVC y utilizando tecnología JEE - Desarrollo con Spring Framework  - Total: 480 Horas",
          date: "2021-2021",
          documentation:{
            url:'documents/cert-back.pdf',
            file:'cert-back.pdf',
          },
        },
        {
          institution: "Talento Digital",
          career: "BOOTCAMP DESARROLLO APLICACIONES FRONT- END TRAINEE",
          description:
            "Fundamentos del desarrollo web - CCS avanzado, buenas prácticas en el manejo de estilos  - Programación de baja/mediana complejidad con JavaScript - Fundamentos del desarrollo de componente web con Vue JS - Desarrollo de componentes avanzados con Vue JS  - Total: 438 Horas",
          date: "2020-2020",
          documentation:{
            url:'documents/cert-front.pdf',
            file:'cert-front.pdf',
          },
        },
      ],
      experience: [
        {
          institution: "Desarrollador Freelance",
          job: "Independiente",
          description:
            "Desarrollo de proyectos a nivel de programador frontend Junior",
          date: "2020-2022",
          documentation: "",
        },
        {
          institution: "Desarrollador Freelance",
          job: "Independiente",
          description:
            "Desarrollo de proyectos a nivel de programador frontend Junior",
          date: "2021-2019",
          documentation: "",
        },
        {
          institution: "Desarrollador Freelance",
          job: "Independiente",
          description:
            "Desarrollo de proyectos a nivel de programador frontend Junior",
          date: "2021-2020",
          documentation: "",
        },
      ],
    };
  },
  computed: {
    sortEdu(){
      return this.sortByDate(this.education)
    
    },
    sortExp(){
      return this.sortByDate(this.experience)
    
    },
  },
  methods: {
 sortByDate :(arr)=>{
   return arr.sort((a, b) => {
     const valA =parseInt(a.date.slice(a.date.indexOf("-")+ 1));
        const valB =parseInt(b.date.slice(b.date.indexOf("-")+ 1));
        return valB - valA;
      });
 }
  },
  created() {
  /*   this.sortEdu;
    console.log(this.sortEdu); */
  },
};
</script>

<style></style>
