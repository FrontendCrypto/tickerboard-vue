<template>
  <div v-if="series.length > 0">
    <VueApexCharts width="500" type="area" :options="options" :series="series" />
  </div>
</template>

<script>
import store from '../store'
import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    VueApexCharts
  },
  props: {
    ticker: String,
  },
  data() {
    return {
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
        },
        yaxis: {
          show: false
        },
        grid: {
          show: false
        },
        tooltip: {
          enabled: false,
        }
      },
    }
  },
  computed: {
    series() {
      return store.state.series
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/button.scss';
</style>
