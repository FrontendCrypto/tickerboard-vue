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
        <div class="header">
            <div class="header-icon">
                <img :src="iconPath" :alt="name">
            </div>
            <h2 class="header-name">{{ name }}</h2>
            <h3 class="header-ticker">{{ ticker }}</h3>

            <h2 class="header-price">{{ price }} {{ currency }}</h2>
            <h3 class="header-change">
                <Change />
            </h3>
        </div>

        <div>
            <ul>
                <li>Capitalization: {{ marketData.capitalization }} {{ currency }}</li>
                <li>Max. supply: {{ marketData.maxSupply }} {{ ticker }}</li>
                <li>Current supply: {{ marketData.curentSupply }} {{ ticker }}</li>
            </ul>
        </div>
        <Chart />
    </div>
</template>

<style scoped lang="scss">
.header {
    display: grid;
    grid-template-rows: repeat(2, 32px);
    grid-template-columns: 64px 1fr 1fr;
    column-gap: 16px;
}

.header-icon {
    grid-row: 1/3;
    grid-column: 1;
    display: flex;
    align-items: center;

    img {
        width: 64px;
        height: 64px;
    }
}

.header-name {
    grid-row: 1;
    grid-column: 2;
}

.header-ticker {
    grid-row: 2;
    grid-column: 2;
}

.header-price {
    grid-row: 1;
    grid-column: 3;
    text-align: right;
}

.header-change {
    grid-row: 2;
    grid-column: 3;
    text-align: right;
}
</style>