<template>
  <div class="node-tracing" :class="spacing ? 'node-tracing_spacing' : null">
    <div v-if="showChain" class="node-tracing__full">
      <h3>{{$t('relayedData')}}</h3>
      <Button type="button" theme="ghost" @click.native="toggleChain">
        <span v-if="fullChain">{{$t('overview')}}</span>
        <span v-else>{{$t('showChain')}}</span>
      </Button>
    </div>
    <div class="node-tracing__item node-tracing__item_type_send">
      <div class="node-tracing__header">
        <div class="node-tracing__title">
          <Client class="node-tracing__icon"/>
          <span class="node-tracing__heading">{{$t('client')}}</span>
        </div>
        <div class="node-tracing__label">{{$t('sentData')}}</div>
      </div>
      <div class="node-tracing__pk">{{sigchain.srcPubkey}}</div>
    </div>
    <div v-if="!fullChain" class="node-tracing__item node-tracing__item_type_relay">
      <div class="node-tracing__header">
        <div class="node-tracing__title">
          <Relay class="node-tracing__icon"/>
          <span class="node-tracing__heading">{{$t('relayNodes')}}</span>
        </div>
        <div class="node-tracing__label">{{miners.length}} {{$t('relayingData')}}</div>
      </div>
    </div>
    <template v-else>
      <div
        v-for="miner in miners"
        :key="miner.signature"
        class="node-tracing__item node-tracing__item_type_relay"
      >
        <div class="node-tracing__header">
          <div class="node-tracing__title">
            <Relay class="node-tracing__icon"/>
            <div class="node-tracing__heading">
              {{$t('node')}}
              <CountryFlag
                v-if="miner.country_code2 != null"
                class="node-tracing__flag"
                :country="miner.country_code2"
                size="normal"
              />
            </div>
          </div>
          <div class="node-tracing__label">{{$t('relayData')}}</div>
        </div>
        <div class="node-tracing__addr">{{$t('nodePublicKey')}}: {{miner.pubkey}}</div>
        <div class="node-tracing__addr">
          {{$t('nodeWalletAddress')}}:
          <nuxt-link
            class="node-tracing__addr text_link"
            :to="`/addresses/${miner.wallet}`"
          >{{miner.wallet}}</nuxt-link>
        </div>
      </div>
    </template>
    <div class="node-tracing__item node-tracing__item_type_recieve">
      <div class="node-tracing__header">
        <div class="node-tracing__title">
          <Client class="node-tracing__icon"/>
          <span class="node-tracing__heading">{{$t('client')}}</span>
        </div>
        <div class="node-tracing__label">{{$t('recievedData')}}</div>
      </div>
      <div class="node-tracing__pk">{{sigchain.destPubkey}}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './NodeTracing.scss';
</style>

<script>
import Button from '~/components/Button/Button'

import Client from '~/assets/icons/Client.svg'
import Relay from '~/assets/icons/Relay.svg'

import CountryFlag from 'vue-country-flag'

export default {
  components: {
    Client,
    Relay,
    Button,
    CountryFlag
  },
  props: {
    sigchain: {
      type: Object,
      default: function() {
        return []
      }
    },
    spacing: {
      type: Boolean,
      default: false
    },
    showChain: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      miners: 0,
      fullChain: false,
      senderWallet: '',
      recieverWallet: ''
    }
  },
  mounted: function() {
    const { sigchain } = this
    const sigchainElemns = sigchain.sigchain_elems

    this.senderWallet = sigchain.srcPubkey
    this.recieverWallet = sigchain.destPubkey
    this.miners = sigchainElemns.filter(i => i.mining != false)
  },
  methods: {
    toggleChain() {
      this.fullChain = !this.fullChain
    }
  }
}
</script>
