import axios from "axios";
// import {client_id,client_secret} from '../../config.json'
/* ?client_id=${client_id}&client_secret=${client_secret} */
export default {
  namespaced: true,
  state: {
    repos: [],
    filter: {
      category: "",
    },
  },
  mutations: {
    GET_DATA_REPOS(state, data) {
      state.repos.push(data);
      //console.log(data.img);
      //https://ourcodeworld.co/articulos/leer/1425/como-corregir-el-error-de-eslint-do-not-access-objectprototype-method-hasownproperty-from-target-object-no-prototype-builtins
      // console.log(Object.prototype.hasOwnProperty.call(data,'img'));
    },
    SET_FILTER(state, filter) {
      state.filter.category = filter;
    },
  },
  actions: {
    async getDataRepos({ commit }, repoName) {
      await axios
        .get(`repos/Verastian/${repoName}`)
        .then((repo) => {
          const finalres = JSON.parse(JSON.stringify(repo.data));
          axios
            .get(`repos/Verastian/${repoName}/languages`)
            .then((language) => {
              const lowerLanguage = Object.entries(language.data).map(
                ([key, value]) => {
                  key = key.toString().toLowerCase();
                  value = ((value * 100) / 395735).toFixed(2);

                  return [key, value];
                }
              );
              finalres.languages = Object.fromEntries(lowerLanguage);
              axios
                .get(`repos/Verastian/${repoName}/contents/readme`)
                .then((img) => {
                  let image = img.data[0].download_url;

                  Object.defineProperty(finalres, "img", {
                    get: () => {
                      return image;
                    },
                    set: (newValue) => {
                      image = newValue;
                    },
                    enumerable: true,
                    configurable: true,
                  });
                  // finalres.image = image;
                  console.log(finalres);
                  commit("GET_DATA_REPOS", finalres);
                });
            });
        })
        .catch((error) => console.log(error));
    },

    setFilter({ commit }, filter) {
      console.log(filter);
      commit("SET_FILTER", filter);
    },
  },
  getters: {
    filterByCategory(state) {
      return state.repos.filter((ele) => {
        if (state.filter.category) {
          return ele.language.toLowerCase() === state.filter.category.toLowerCase();
        } else {
          return ele;
        }
      });
    },
  },
};
