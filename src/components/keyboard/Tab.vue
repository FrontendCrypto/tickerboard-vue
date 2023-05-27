<template>
  <div class="tab">
    <input type="search" placeholder="Search coins">
    <button @click="toggleConfiguration">
      <Cog6ToothIcon class="icon" />
    </button>
  </div>
</template>

<script>
import store from '../../store'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    Cog6ToothIcon,
  },
  props: {
    ticker: String,
  },
  methods: {
    toggleConfiguration() {
      console.log('dentro');
      this.$store.commit('toggleConfiguration')
    }
  },
  computed: {
    configuration() {
      return store.state.configuration.show
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/button.scss';

.tab {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
}
</style>
