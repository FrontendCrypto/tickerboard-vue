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
    }
  },

  mounted() {
    console.log(`KeyBoard mounted`)
  }
}
</script>

<template>
  <div class="wrapper">
    <button @click="onCoinPressed" v-for="coin in market" :key="coin.ticker">
      <img :src="`src/assets/icons/coins/${coin.ticker.toLowerCase()}.svg`" alt="">
      <span>{{coin.name}}</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.wrapper{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 48px);
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