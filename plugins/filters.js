import Vue from 'vue'

Vue.filter('commaNumber', function(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})
