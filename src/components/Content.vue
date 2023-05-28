<script>
import store from '../store'
import Chart from './Chart.vue'
import Change from './Change.vue'
import { BookmarkIcon } from '@heroicons/vue/24/solid'

export default {

    components: {
        Chart,
        Change,
        BookmarkIcon,
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
            return store.state.ticker
        },
        formattedTicker() {
            return this.ticker.toUpperCase()
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
        isBookmarked() {
            // Check if current ticker is in favorites aray from store
            return store.state.user.favorites.includes(this.ticker)
        }
    }
}
</script>

<template>
    <div class="content">
        <header role="banner" class="header">
            <div class="header-icon">
                <img :src="iconPath" :alt="name">
                <div class="bookmark" v-if="isBookmarked">
                    <BookmarkIcon class="bookmark-icon" />
                </div>
            </div>
            <h2 class="header-name">{{ name }}</h2>
            <h3 class="header-ticker">{{ formattedTicker }}</h3>

            <h2 class="header-price">{{ price }} {{ currency }}</h2>
            <h3 class="header-change">
                <Change />
            </h3>
        </header>
        <Chart />
        <main>
            <div class="market-data">
                <div class="item">
                    <h5>Market Cap.</h5>
                    <p>{{ marketData.capitalization }} {{ currency }}</p>
                </div>
                <div class="item">
                    <h5>Max. Supply</h5>
                    <p>{{ marketData.maxSupply }} {{ formattedTicker }}</p>
                </div>
                <div class="item">
                    <h5>Current Supply</h5>
                    <p>{{ marketData.currentSupply }} {{ formattedTicker }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
.content {
    display: grid;
    gap: 24px;
}

.header {
    display: grid;
    grid-template-rows: repeat(2, 32px);
    grid-template-columns: 64px 1fr 1fr;
    column-gap: 16px;
    padding: 24px 16px 0px 16px;
}

.header-icon {
    grid-row: 1/3;
    grid-column: 1;
    display: flex;
    align-items: center;
    position: relative;

    img {
        width: 64px;
        height: 64px;
        z-index: 1;
    }

    .bookmark {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #ffffff;
        z-index: 2;
        position: absolute;
        right: 0;
        bottom: 0;

        .bookmark-icon {
            width: 16px;
            height: 16px;
            color: #2b2b2b
        }
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

.market-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    row-gap: 8px;
    column-gap: 16px;
}
</style>