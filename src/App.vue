<script setup>
import Keyboard from './components/Keyboard.vue'
import Content from './components/Content.vue'
</script>

<template>
  <main>
    <div class="device">
      <Content />
      <Keyboard />
    </div>
  </main>
</template>

<style>
#app {
  display: flex;
  justify-content: center;
}

.device {
  width: 360px;
  height: 800px;
}
</style>
