<template>
  <div class="select-filter__container">
    <h3 class="text-white">Puedes buscar por la tecnología que prefieras</h3>
    <DataFilter @click="setFilter('')" :text="text">
      <template v-slot:default="{ items }">
          <div class="box-icons" v-if="items.name === 'all'">
              <button  @click.prevent="setFilter('')"> <span v-html="items.logo"> </span></button>
              <span class="icons-text">{{items.name | capitalize}}</span>
              
              </div>
          <div class="box-icons" v-else>
              <button  @click.prevent="setFilter(items.name)"><span v-html="items.logo"></span></button>
              <span class="icons-text" >{{items.name | capitalize}}</span>
          </div>
      </template>
    </DataFilter>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DataFilter from "./DataFilter.vue";
export default {
  components: {
    DataFilter,
  },
  data() {
    return {
        text:'Todos'
    };
  },
  computed: {
      ...mapState("getDataRepos",["filter"]),

  },
  methods: {
      ...mapActions("getDataRepos",["setFilter"]),
  },
  created() {
      this.filter
      console.log(this.filter.category)
  },
};
</script>

<style></style>
