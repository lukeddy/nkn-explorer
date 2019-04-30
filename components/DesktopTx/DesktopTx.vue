<template>
  <Fragment>
    <tr class="table__row desktop-tx" @click="toggle()">
      <td class="table__item">
        <TransactionTypeTitle :type="tx.txType"/>
      </td>
      <td class="table__item">{{ $moment(tx.created_at +"Z").fromNow() }}</td>
      <td class="table__item">
        <nuxt-link
          class="card__link text_wrap_none"
          :to="localePath({ name: 'transactions-id', params: { id: tx.hash} })"
        >{{tx.hash}}</nuxt-link>
      </td>
      <td class="table__item">
        <span
          class="fe fe-chevron-down desktop-tx__toggle"
          :class="isOpen ? 'desktop-tx__toggle_active' : null"
        />
      </td>
    </tr>
    <tr
      class="table__row desktop-tx__body"
      :class="isOpen && txPayload ? 'desktop-tx__body_open' : null"
    >
      <td colspan="4" class="desktop-tx__wrapper">
        <!-- Mining Reward -->
        <template v-if="tx.txType ==='CoinbaseType' && txPayload">
          <div class="desktop-tx__content">
            <div class="desktop-tx__item text_align_right">
              <h4>+ {{txPayload.amount | nknValue | commaNumber}} NKN</h4>
            </div>
            <div class="desktop-tx__item text_align_center">
              <ArrowRight class="desktop-tx__icon"/>
            </div>
            <div class="desktop-tx__item text_align_left">
              <nuxt-link
                class="text_link text_size_md"
                :to="localePath({ name: 'addresses-id', params: { id: txPayload.recipientWallet} })"
              >{{txPayload.recipientWallet}}</nuxt-link>
            </div>
          </div>
        </template>

        <!-- Transfer -->
        <template v-if="tx.txType ==='TransferAssetType' && txPayload">
          <div class="desktop-tx__content">
            <div class="desktop-tx__item text_align_center">
              <div class="desktop-tx__title">{{$t('from')}}</div>
              <nuxt-link
                class="text_link text_size_md"
                :to="localePath({ name: 'addresses-id', params: { id: txPayload.senderWallet} })"
              >{{txPayload.senderWallet}}</nuxt-link>
            </div>
            <div class="desktop-tx__item text_align_center">
              <div class="desktop-tx__title">
                <ArrowRight class="desktop-tx__icon"/>
              </div>
              <h4>+ {{txPayload.amount | nknValue | commaNumber}} NKN</h4>
              <div
                class="desktop-tx__price"
              >${{(this.$options.filters.nknValue(txPayload.amount) * currentPrice).toFixed(2) | commaNumber}}</div>
            </div>
            <div class="desktop-tx__item text_align_left">
              <div class="desktop-tx__title">{{$t('to_send')}}</div>
              <nuxt-link
                class="text_link text_size_md"
                :to="localePath({ name: 'addresses-id', params: { id: txPayload.recipientWallet} })"
              >{{txPayload.recipientWallet}}</nuxt-link>
            </div>
          </div>
        </template>

        <!-- Sigchain -->
        <template v-if="tx.txType ==='CommitType' && txPayload">
          <div class="desktop-tx__content">
            <NodeTracing
              class="desktop-tx__sigchain"
              :sigchain="txPayload.sigchain"
              :showChain="true"
            />
          </div>
        </template>

        <!-- Name Registration -->
        <template v-if="tx.txType ==='RegisterNameType' && txPayload">
          <div class="desktop-tx__content">
            <div class="desktop-tx__item text_align_center">
              <div class="desktop-tx__title">{{$t('registrant')}}</div>
              <nuxt-link
                class="text_link text_wrap_none"
                :to="localePath({ name: 'addresses-id', params: { id: txPayload.registrantWallet } })"
              >{{txPayload.registrantWallet}}</nuxt-link>
            </div>
            <div class="desktop-tx__item text_align_center">
              <div class="desktop-tx__title">{{$t('registeredName')}}</div>
              {{txPayload.name | walletName}}
            </div>
          </div>
        </template>

        <!-- Name Deletion -->
        <template v-if="tx.txType ==='DeleteNameType' && txPayload">
          <div class="desktop-tx__content">
            <div class="desktop-tx__item text_align_center">
              <div class="desktop-tx__title">{{$t('registrant')}}</div>
              <nuxt-link
                class="text_link text_wrap_none"
                :to="localePath({ name: 'addresses-id', params: { id: txPayload.registrantWallet } })"
              >{{txPayload.registrantWallet}}</nuxt-link>
            </div>
            <div class="desktop-tx__item text_align_center">
              <div class="desktop-tx__title">{{$t('deletedName')}}</div>
              {{txPayload.name | walletName}}
            </div>
          </div>
        </template>
      </td>
    </tr>
  </Fragment>
</template>

<style lang="scss">
@import './DesktopTx.scss';
</style>

<script>
import TransactionTypeTitle from '~/components/TransactionTypeTitle/TransactionTypeTitle'
import NodeTracing from '~/components/NodeTracing/NodeTracing'
import { Fragment } from 'vue-fragment'

import ArrowRight from '@/assets/icons/ArrowRight.svg'

import { mapGetters } from 'vuex'

export default {
  components: { TransactionTypeTitle, Fragment, ArrowRight, NodeTracing },
  props: {
    tx: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: () => {
    return {
      isOpen: false,
      txPayload: null
    }
  },
  computed: mapGetters({
    currentPrice: 'price/getCurrentPrice'
  }),
  mounted: function() {},
  methods: {
    toggle: function() {
      if (this.txPayload === null) {
        this.getTxPayload()
      }
      this.isOpen = !this.isOpen
    },
    getTxPayload: function() {
      const self = this

      this.$axios
        .$get(`transactions/${this.tx.id}/payload`)
        .then(function(response) {
          self.txPayload = response
        })
    }
  }
}
</script>
