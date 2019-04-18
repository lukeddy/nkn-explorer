<template>
  <div class="node-tracing">
    <div class="node-tracing__item node-tracing__item_type_send">
      <div class="node-tracing__header">
        <div class="node-tracing__title">
          <Client class="node-tracing__icon"/>
          <span class="node-tracing__heading">{{$t('client')}}</span>
        </div>
        <div class="node-tracing__label">{{$t('sentData')}}</div>
      </div>
      <div class="node-tracing__pk">{{nodeTracing[0].node_pk}}</div>
    </div>
    <div class="node-tracing__item node-tracing__item_type_relay">
      <div class="node-tracing__header">
        <div class="node-tracing__title">
          <Relay class="node-tracing__icon"/>
          <span class="node-tracing__heading">{{$t('relayNodes')}}</span>
        </div>
        <div class="node-tracing__label">{{nodeTracing.length - 2}} {{$t('relayingData')}}</div>
      </div>
    </div>
    <div class="node-tracing__item node-tracing__item_type_recieve">
      <div class="node-tracing__header">
        <div class="node-tracing__title">
          <Client class="node-tracing__icon"/>
          <span class="node-tracing__heading">{{$t('client')}}</span>
        </div>
        <div class="node-tracing__label">{{$t('recievedData')}}</div>
      </div>
      <div class="node-tracing__pk">{{nodeTracing[nodeTracing.length - 1].node_pk}}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './NodeTracing.scss';
</style>

<script>
import Client from '~/assets/icons/Client.svg'
import Relay from '~/assets/icons/Relay.svg'

export default {
  components: {
    Client,
    Relay
  },
  props: {
    nodeTracing: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data: () => {
    return {}
  },
  mounted: function() {},
  methods: {}
}
</script>
