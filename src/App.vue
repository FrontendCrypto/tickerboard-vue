<script setup>
import Keyboard from './components/Keyboard.vue'
import Content from './components/Content.vue'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="device">
  <!-- <v-system-bar>
        <v-icon icon="mdi-wifi-strength-4"></v-icon>
        <v-icon icon="mdi-signal" class="ms-2"></v-icon>
        <v-icon icon="mdi-battery" class="ms-2"></v-icon>

        <span class="ms-2">3:13PM</span>
      </v-system-bar> -->
    <!-- <v-toolbar title="TickerBoard" density="comfortable">
      <v-btn icon>
        <Cog6ToothIcon />
      </v-btn>
    </v-toolbar> -->
    <Content />
    <Keyboard />
  </div>
</template>

<style>
#app {
  display: flex;
  justify-content: center;
}

.device {
  width: 360px;
  height: 800px;
  position: relative;
  overflow: hidden;
}
</style>
