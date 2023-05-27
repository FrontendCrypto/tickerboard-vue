<script>
import store from '../store'
import Chart from './Chart.vue'
export default {
    components: {
        Chart
    },
    data() {
        return {

        }
    },
    mounted() {
    },
    methods: {

    },
    computed: {
        // Computed are re-evaluated on change => store
        getTicker() {
            return store.state.ticker
        },
        getName() {
            return store.state.data.name
        },
        getPrice() {
            return store.state.data.price
        },
        getChange() {
            return store.state.data.change
        },
        getMarketData() {
            return store.state.data.market
        },
        getColor() {
            return store.state.color
        }

    }
}
</script>

<template>
    <div>
        <h1>{{ getTicker }}</h1>

        <ul>
            <li>Name: {{ getName }}</li>
            <li>Price: {{ getPrice }}</li>
            <li>Change: {{ getChange }}</li>
        </ul>

        <ul>
            <li>Capitalization: {{ getMarketData.capitalization }}</li>
            <li>Max. supply: {{ getMarketData.maxSupply }}</li>
            <li>Current supply: {{ getMarketData.curentSupply }}</li>
        </ul>
        <Chart />
    </div>
</template>

<style scoped lang="scss">
h1 {
    color: red;
}
</style>