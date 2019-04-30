<template>
  <div class="desktop-filter">
    <div
      class="desktop-filter__toggle"
      :class="[open ? 'desktop-filter__toggle_active' : null, activeFilter ? `desktop-filter__toggle_type_${activeFilter.title}` : null]"
      @click="toggleFilter()"
    >
      <FilterIcon class="desktop-filter__icon"/>
    </div>

    <div class="desktop-filter__wrapper filter__wrapper">
      <ul class="desktop-filter__list filter__list" :class="open ? 'filter__list_open' : null">
        <li
          v-for="filter in filters"
          :key="filter.title"
          class="filter__item"
          @click="setFilter(filter),toggleFilter()"
        >{{$t(filter.title)}}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import './DesktopTransactionFilter.scss';
</style>

<script>
import FilterIcon from '@/assets/icons/Filter.svg'

export default {
  components: { FilterIcon },
  props: {
    filters: {
      type: Array,
      default: function() {
        return []
      }
    },
    activeFilter: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: () => {
    return {
      open: false
    }
  },
  mounted: function() {},
  methods: {
    toggleFilter() {
      this.open = !this.open
    },
    setFilter(filter) {
      this.$emit('update', filter)
    }
  }
}
</script>
