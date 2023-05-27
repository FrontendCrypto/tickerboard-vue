<template>
  <div class="tab">
    <input type="search" placeholder="Search coins">
    <button>
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

  },
  mounted() {
  },
  computed: {

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
