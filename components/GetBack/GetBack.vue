<template>
  <nuxt-link :to="route" class="get-back">
    <Back class="get-back__icon"/>
    {{text}}
  </nuxt-link>
</template>

<style lang="scss">
@import './GetBack';
</style>

<script>
import Back from '~/assets/icons/back.svg'

export default {
  components: { Back },
  props: {
    text: {
      type: String,
      default: 'Back'
    },
    route: {
      type: String,
      default: '/'
    }
  },
  data: () => {
    return {}
  },
  mounted: function() {},
  methods: {}
}
</script>
