<template>
  <div class="search" :class="`search_type_${type}`">
    <input
      v-model="searchContext"
      type="text"
      class="search__control"
      :placeholder="text"
      @keyup.enter="onEnterPressed"
    >
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
    return { searchContext: '' }
  },

  mounted: function() {},
  methods: {
    onEnterPressed() {
      this.$emit('sent', '')
    }
  }
}
</script>
