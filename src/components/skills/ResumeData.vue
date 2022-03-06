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
            "Titulo obtenido el al 2017 y que me permitio profesionalizar mis capacidades como técnico en mantenimieto industrial ejercido por casi 10 años de manera formal ",
          date: "2015-2017",
          documentation:{
            url:'documents/tituloElectIndustrial.pdf',
            file:'tituloElectIndustrial.pdf',
          },
          extra:""
        },
        {
          institution: "Inacap",
          career: "Analista Programador",
          description:
            "Estudios cursados por un año y congelado a la espera de poder retomar",
          date: "2019-2019",
          documentation: "",
           extra:""
        },
        {
          institution: "Talento Digital",
          career: "DESARROLLO DE APLICACIONES FULLSTACK JAVA TRAINEE",
          description:
            "Implementar páginas web básicas responsivas utilizando HTML, CSS y JavaScript  - Operar una base de datos relacional utilizando el lenguaje SQL - Programación de baja/mediana complejidad en Java - Aplicaciones web dinámicas aplicando el patrón MVC y utilizando tecnología JEE - Desarrollo con Spring Framework ",
          date: "2021-2021",
          documentation:{
            url:'documents/cert-back.pdf',
            file:'cert-back.pdf',
          },
           extra:"Horas cursadas: 480"
        },
        {
          institution: "Talento Digital",
          career: "BOOTCAMP DESARROLLO APLICACIONES FRONT- END TRAINEE",
          description:
            "Fundamentos del desarrollo web - CCS avanzado, buenas prácticas en el manejo de estilos  - Programación de baja/mediana complejidad con JavaScript - Fundamentos del desarrollo de componente web con Vue JS - Desarrollo de componentes avanzados con Vue JS  ",
          date: "2020-2020",
          documentation:{
            url:'documents/cert-front.pdf',
            file:'cert-front.pdf',
          },
           extra:"Horas cursadas: 438"
        },
      ],
      experience: [
        {
          institution: "Desarrollador Freelance",
          job: "Independiente",
          description:
            "Desarrollo de proyectos a nivel de programador Frontend Trainee - Creacion de proyectos, principalmente con el Framework VueJs - Consumo de APIs y Librerias de terceros - Aplicacion y uso de framework de estilos CSS como Bootstrap v4 y v5, Uso de Vuetify y el preprocesador de estilos SASS",
          date: "2020-2022",
          documentation: "",
           extra:""
        },
        {
          institution: "Desarrollador Freelance",
          job: "Independiente",
          description:
            "Desarrollo de proyectos a nivel de programador Backend Trainee - Uso del Lenguaje Java y el framework Spring para la creacion de proyectos - Uso de base de datos Oracle y MySql ",
          date: "2021-2020",
          documentation: "",
           extra:""
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
