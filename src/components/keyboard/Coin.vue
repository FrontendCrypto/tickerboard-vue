<template>
  <button @click="onCoinPressed" :class="active">
    <img :src="iconPath" size="20" :alt="getTicker" />
    <span>{{ ticker }}</span>
  </button>
</template>

<script>
import store from '../../store'
export default {
  props: {
    ticker: String,
  },
  methods: {
    onCoinPressed() {
      this.$store.commit('selectCoin', this.formattedTicker) // @test lorcase
    }
  },
  computed: {
    formattedTicker: {
      get() {
        return this.ticker.toLowerCase()
      }
    },
    getTicker: {
      get() {
        return store.state.ticker
      }
    },
    active: {
      get() {
        return this.formattedTicker === this.getTicker ? 'active' : ''
      }
    },
    iconPath: {
      get() {
        const path = `src/assets/icons/coins/${this.formattedTicker}.svg`
        return path;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/button.scss';

span {
  font-size: 10px;
}
</style>
