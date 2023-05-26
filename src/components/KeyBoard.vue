<script>
import {market} from './../data/market'
export default {
  data(){
    return {
      market: market
    }
  },

  methods: {
    onCoinPressed(event){
      console.log(event)
    },

    getIconPath(name){
      return `src/assets/icons/coins/${name.toLowerCase()}.svg`;
    }
  },

  mounted() {
    console.log(`KeyBoard mounted`)
  },

  computed(){
    
  }
}
</script>

<template>
  <div>
    <div class="coins">
      <button 
        v-for="coin in market" 
        @click="onCoinPressed"
        :key="coin.ticker">
        <img :src="getIconPath(coin.ticker)" :alt="coin.name">
        <span>{{coin.ticker}}</span>
      </button>
    </div>
    <div class="actions">

    </div>
  </div>
</template>

<style scoped lang="scss">
.coins{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 48px);
}

.actions {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

button{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img{
  width: 24px;
}

span{
  font-size: 12px;
}
</style>