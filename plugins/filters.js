import Vue from 'vue'

Vue.filter('commaNumber', function(x) {
  return x
    .toString()
    .replace(/(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d*)$/g, function(m, s1, s2) {
      return s2 || s1 + ','
    })
})

Vue.filter('nknValue', function(x) {
  return x / 100000000
})
