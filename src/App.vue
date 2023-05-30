<script setup>
import Keyboard from './components/keyboard/Keyboard.vue'
import Content from './components/content/Content.vue'
// import { Cog6ToothIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="device">
    <Content />
    <Keyboard />
  </div>
</template>

<style>
.device {
  width: 100%;
}
</style>
