<template>
  <div>
    <button v-if="type=='button'" class="button" :class="theme ? `button_theme_${theme}` : null">
      <slot/>
    </button>
    <a
      v-if="type=='link'"
      :href="url"
      target="_blank"
      class="button"
      :class="theme ? `button_theme_${theme}` : null"
    >
      <slot/>
    </a>
  </div>
</template>

<style lang="scss">
@import './Button';
</style>

<script>
export default {
  components: {},
  props: {
    theme: {
      type: String,
      default: 'primary'
    },
    type: {
      type: String,
      default: 'button'
    },
    url: {
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
