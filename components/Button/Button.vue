<template>
  <button
    v-if="type=='button'"
    class="button"
    :class="[theme ? `button_theme_${theme}` : null, full ? `button_full` : null]"
  >
    <slot/>
  </button>
  <a
    v-else
    :href="url"
    target="_blank"
    class="button"
    :class="[theme ? `button_theme_${theme}` : null, full ? `button_full` : null]"
  >
    <slot/>
  </a>
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
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {}
  },
  mounted: function() {},
  methods: {}
}
</script>
