<script>
import store from '../store'
import Chart from './Chart.vue'
import Change from './Change.vue'

export default {
    components: {
        Chart,
        Change
    },
    methods: {
        formatNumber(number) {
            return new Intl.NumberFormat('es-ES', { maximumFractionDigits: 2 }).format(number)
        }
    },
    computed: {
        // Computed are re-evaluated on change => store
        iconPath() {
            const part = this.ticker.toLowerCase();
            return `src/assets/icons/coins/${part}.svg`
        },
        icon() {
            return store.state.icon
        },
        currency() {
            return store.state.user.currency
        },
        ticker() {
            return store.state.ticker.toUpperCase()
        },
        name() {
            return store.state.data.name
        },
        price() {
            return this.formatNumber(store.state.data.price)
        },
        change() {
            return this.formatNumber(store.state.data.change)
        },
        marketData() {
            return {
                capitalization: this.formatNumber(store.state.data.market.capitalization),
                maxSupply: this.formatNumber(store.state.data.market.maxSupply),
                currentSupply: this.formatNumber(store.state.data.market.currentSupply),
            }
        },
        color() {
            return store.state.color
        },

    }
}
</script>

<template>
    <div>
        <img :src="iconPath" :alt="name">
        <h1>{{ name }}</h1>
        <h2>{{ ticker }}</h2>

        <ul>
            <li>Price: {{ price }} {{ currency }}</li>
            <li>Change:
                <Change />
            </li>
        </ul>

        <ul>
            <li>Capitalization: {{ marketData.capitalization }} {{ currency }}</li>
            <li>Max. supply: {{ marketData.maxSupply }} {{ ticker }}</li>
            <li>Current supply: {{ marketData.curentSupply }} {{ ticker }}</li>
        </ul>
        <Chart />
    </div>
</template>

<style scoped lang="scss">
h1 {
    color: red;
}
</style>