<template>
  <section class="section">
    <div class="page-header">
      <div class="page-header__wrapper">
        <div class="page-header__left">
          <h1 class="page-header__title text_color_white">{{$t('ip_check')}}</h1>
          <div class="page-header__stats page-header__stats_justify_center">
            <div class="page-header__stats-item">
              <h6
                class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
              >{{$t('your_node_status')}}</h6>
              <h4 v-if="!response" class="page-header__stats-value text_color_white">INPUT A IP</h4>
              <h4
                v-else-if="response.syncState == 'OFFLINE'"
                class="page-header__stats-value text_color_white"
              >OFFLINE</h4>
              <h4 v-else class="page-header__stats-value text_color_white">ONLINE</h4>
            </div>
          </div>
        </div>
        <div class="page-header__right"></div>
      </div>
    </div>

    <mq-layout mq="lg">
      <div>
        <h2>How does it work?</h2>
        <p>
          Checking your node is pretty easy: just put your node-ip into the corresponding input fields and click on "check my node!".
          <br />You will see the results instantly on the right side.
        </p>
        <div class="main-header__search-bar">
          <div class="search main-header__search search_type_">
            <input
              type="text"
              placeholder="Your node IP"
              class="search__control"
              v-model="ip"
              @keyup.enter="checkNode()"
            />
            <span class="search__icon fe fe-search"></span>
          </div>
          <button
            class="button main-header__search-button button_theme_primary button_full"
            @click="checkNode()"
          >{{$t('check_my_node')}}</button>
        </div>
      </div>
      <div>
        <vue-code-highlight>{{response}}</vue-code-highlight>
      </div>
    </mq-layout>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { component as vueCodeHighlight } from 'vue-code-highlight'

export default {
  transition: 'expand',
  components: { vueCodeHighlight },
  data: () => {
    return {
      ip: '',
      response: ''
    }
  },
  computed: mapGetters({}),
  mounted: function() {},
  methods: {
    checkNode() {
      if (this.ip) {
        console.log('hello')
        let self = this
        this.$axios.$get(`nodes/check/${this.ip}`).then(function(response) {
          console.log(response)
          self.response = response
        })
      }
    }
  }
}
</script>
