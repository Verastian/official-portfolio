import axios from "axios";
// import {client_id,client_secret} from '../../config.json'
/* ?client_id=${client_id}&client_secret=${client_secret} */
export default {
  namespaced: true,
  state: {
    imgReadme: [],
    repos: [],
    languages:[],
    /* filter: {
      category: "",
    }, */
  },
  mutations: {
    GET_DATA_REPOS(state, data) {
      state.repos.push(data);
      //console.log(state.dataImgReadme);
    },
    GET_DATA_IMG(state, data) {
      state.imgReadme.push(data);
    },
    GET_DATA_LANGUAGE(state,data){
      state.languages.push(data);
    },
    /* SET_FILTER(state, filter) {
      state.filter.category = filter;
    }, */
  },
  actions: {
    async getdataImgReadme({ commit }, repoName) {
      await axios
        .get(`repos/Verastian/${repoName}/contents/readme`)
        .then((res) => {
          commit("GET_DATA_IMG", res.data[0]);
          // console.log(res.data[0]);
        })
        .catch((error) => console.log(error));
    },
    async getDataRepos({ commit }, repoName) {
      await axios
        .get(`repos/Verastian/${repoName}`)
        .then((res) => {
          commit("GET_DATA_REPOS", res.data);
          //console.log(res.data);
          //console.log(res.data.name);
        })
        .catch((error) => console.log(error));
    },
    async getLanguages({ commit }, repoName) {
      await axios
        .get(`repos/Verastian/${repoName}/languages`)
        .then((res) => {
          commit("GET_DATA_LANGUAGE", res.data);
        // console.log(res.data);
          //console.log(res.data.name);
        })
        .catch((error) => console.log(error));
    },
    /* setFilter({ commit }, filter) {
      console.log(filter);
      commit("SET_FILTER", filter);
    }, */
  },
  getters: {
    getListFinal(state) {
      
       state.repos.forEach((repo,i)=>{
          state.imgReadme.forEach(img => {
          let position = img.download_url.toLowerCase().indexOf(repo.name.toLowerCase());
          if (position !== -1){
            repo.img = img;
            repo.languages = state.languages[i];
        
          }
        });
      })
      return state.repos;
    },
    /* filterByCategory(state) {
    return state.dataImgReadme.filter(ele => {
            ele.category.toLowerCase().includes(state.filter.category.toLowerCase());
            console.log(ele.category.toLowerCase())
        });

    }, */
  },
};
