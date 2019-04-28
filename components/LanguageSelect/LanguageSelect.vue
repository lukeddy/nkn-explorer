<template>
  <div class="language-select">
    <div class="language-select__wrapper">
      <div
        class="language-select__button"
        :class="open ? 'language-select__button_active' : null"
        @click="toggleLanguage()"
      >
        {{$i18n.locale}}
        <span
          class="language-select__icon fe fe-chevron-down"
          :class="open ? 'language-select__icon_open' : null"
        />
      </div>

      <ul class="language-select__list" :class="open ? 'language-select__list_open' : null">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          <li class="language-select__item">{{ locale.code }}</li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import './LanguageSelect';
</style>

<script>
export default {
  components: {},
  data: () => {
    return {
      open: false
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted: function() {},
  methods: {
    toggleLanguage() {
      this.open = !this.open
    }
  }
}
</script>
