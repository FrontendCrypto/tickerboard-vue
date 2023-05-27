<template>
  <div>
    {{ getSeries.toString() }}
  </div>
</template>

<script>
import store from '../store'

export default {
  components: {

  },
  props: {
    ticker: String,
  },
  mounted() {
  },
  computed: {
    getSeries() {
      return store.state.series
    }
  }

};
</script>

<style scoped lang="scss">
@import '../assets/button.scss';
</style>
