<template>
  <section class="section" style="margin-bottom:75px;">
    <div class="page-header">
      <div class="page-header__wrapper">
        <div class="page-header__left">
          <h1 class="page-header__title text_color_white">{{$t('node_check')}}</h1>
          <div class="page-header__stats page-header__stats_justify_center">
            <div class="page-header__stats-item">
              <h6
                class="page-header__stats-title text_color_white text_transform_uppercase text_opacity_75"
              >{{$t('your_node_status')}}</h6>
              <h4
                v-if="!response"
                class="page-header__stats-value text_color_white"
              >{{$t('input_ip')}}</h4>
              <h4
                v-else-if="response.syncState == 'OFFLINE'"
                class="page-header__stats-value text_color_white"
              >{{$t('offline')}}</h4>
              <h4
                v-else
                class="page-header__stats-value text_color_white"
              >{{$t('online')}} & {{$t(getNodeStatus(response.syncState))}}</h4>
            </div>
          </div>
        </div>
        <div class="page-header__right"></div>
      </div>
    </div>
    <DesktopWrapper :margin="false">
      <CardContainer>
        <Card :width="$mq === 'lg' && response !== false ? 'half' : 'full'">
          <h1 class="ip__title">{{$t('how_work')}}</h1>
          <p class="ip__desc">
            {{$t('node_check_desc')}}
            <br />
            <br />
            {{$t('node_results_desc')}}
          </p>
          <div class="main-header__search-bar" style="margin-bottom:25px;">
            <div class="search main-header__search ip__search">
              <input
                v-model="ip"
                type="text"
                placeholder="Your node IP"
                class="search__control"
                @keyup.enter="checkNode()"
              />
              <span class="search__icon fe fe-search"></span>
            </div>
            <Button
              theme="primary"
              type="button"
              :full="$mq === 'lg' ? false : true"
              @click.native="checkNode()"
            >{{$t('check_my_node')}}</Button>
          </div>
        </Card>
        <Card v-if="response !== false" :width="$mq === 'lg' ? 'half' : 'full'">
          <vue-code-highlight>{{response}}</vue-code-highlight>
        </Card>
      </CardContainer>
    </DesktopWrapper>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { component as vueCodeHighlight } from 'vue-code-highlight'
import CardContainer from '~/components/CardContainer/CardContainer'
import Card from '~/components/Card/Card'
import Button from '~/components/Button/Button'
import DesktopWrapper from '~/components/DesktopWrapper/DesktopWrapper'

export default {
  transition: 'expand',
  components: { vueCodeHighlight, CardContainer, Card, Button, DesktopWrapper },
  data: () => {
    return {
      ip: '',
      response: false
    }
  },
  computed: mapGetters({}),
  mounted: function() {},
  methods: {
    getNodeStatus(status) {
      switch (status) {
        case 'OFFLINE':
          return 'offline'

        case 'WAIT_FOR_SYNCING':
          return 'syncing'

        case 'SYNC_STARTED':
          return 'syncing'

        case 'SYNC_FINISHED':
          return 'syncing'

        case 'PERSIST_FINISHED':
          return 'mining'

        default:
          return false
      }
    },
    checkNode() {
      if (this.ip) {
        let self = this
        this.$axios.$get(`nodes/check/${this.ip}`).then(function(response) {
          self.response = response
        })
      }
    }
  }
}
</script>
