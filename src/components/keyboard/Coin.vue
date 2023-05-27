<template>
  <button @click="onCoinPressed" :class="isActive">
    <img :src="iconPath" size="20" />
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
      this.$store.commit('selectCoin', this.getFormattedTicker) // @test lorcase
    }
  },
  mounted() {
    // console.log(store.state.ticker);
  },
  computed: {
    getFormattedTicker() {
      return this.ticker.toLowerCase()
    },
    getTicker() {
      return store.state.ticker
    },
    isActive() {
      return this.getFormattedTicker === this.getTicker ? 'active' : '';
    },
    iconPath() {
      const path = `src/assets/icons/coins/${this.getFormattedTicker}.svg`;
      return path;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/button.scss';

button {
  background-color: hsl(0, 0%, 97%);
  border-radius: 8px;
  border: 0;
  box-shadow: none;
  &:hover{
    background-color: hsl(0, 0%, 94%);
  }
  &.active {
    background-color: hsl(0, 0%, 90%);
  }
}
</style>
