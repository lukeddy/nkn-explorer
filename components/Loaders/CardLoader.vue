<template>
  <CardContainer>
    <ContentLoader
      v-for="i in count"
      :key="i"
      class="card_width_full"
      primaryColor="#fff"
      secondaryColor="#BDBDBD"
      :speed="1"
      :height="112"
      :width="1400"
    >
      <rect x="83" y="22" rx="4" ry="4" width="117" height="6"/>
      <rect x="83" y="41" rx="3" ry="3" width="85" height="6"/>
      <rect x="19" y="78.67" rx="3" ry="3" width="1288" height="6.3"/>
      <rect x="19" y="95.67" rx="3" ry="3" width="1136.2" height="6.3"/>
      <rect x="0" y="120" rx="3" ry="3" width="201" height="6"/>
      <rect x="17.84" y="19.67" rx="0" ry="0" width="51.81" height="47"/>
      <rect x="218" y="21" rx="3" ry="3" width="85" height="6"/>
    </ContentLoader>
  </CardContainer>
</template>

</template>

<script>
import CardContainer from '~/components/CardContainer/CardContainer'

import { ContentLoader } from 'vue-content-loader'

export default {
  components: { ContentLoader, CardContainer },
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  data: () => {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
