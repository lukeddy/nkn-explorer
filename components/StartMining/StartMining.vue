<template>
  <div class="start-mining">
    <div class="start-mining__icon">
      <Mining/>
    </div>
    <h4 class="start-mining__nodes">{{networkNodes}} {{$t('currentNodes')}}</h4>
    <div class="start-mining__text">{{$t('wantToJoinNKN')}}</div>
    <Button
      class="start-mining__button"
      theme="dark-blue"
      url="https://nknx.org/"
      type="link"
    >{{$t('startMining')}}</Button>
  </div>
</template>

<style lang="scss">
@import './StartMining';
</style>

<script>
import Button from '~/components/Button/Button'

import Mining from '~/assets/icons/mining.svg'

export default {
  components: { Button, Mining },
  data: () => {
    return {
      networkNodes: 10000
    }
  },
  mounted: function() {},
  methods: {}
}
</script>
