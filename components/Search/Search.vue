<template>
  <div class="search" :class="`search_type_${type}`">
    <input type="text" class="search__control" :placeholder="text">
    <span class="search__icon fe fe-search"></span>
  </div>
</template>

<style lang="scss">
@import './Search';
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {}
  },

  mounted: function() {},
  methods: {}
}
</script>
