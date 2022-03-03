import Vue from "vue";

// lowercase
Vue.filter("lowerCased", (data) => {
  if (!data) return "";
  data = data.toString();
  return data.toLowerCase();
});
// capitalize
Vue.filter("capitalize", (value) => {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
// uppercase
Vue.filter("uppercase", (value) => {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});
//digits
Vue.filter("two_digits", (value) => {
  if (value < 0) {
    return "00";
  }
  if (value.toString().length <= 1) {
    return `0${value}`;
  }
  return value;
});

// https://github.com/freearhey/vue2-filters
// uppercase
// placeholder
// truncate
// repeat
// reverse
// wrap
// number
// bytes
// percent
// currency
// pluralize
// ordinal
// limitBy
// filterBy
// find
// orderBy
