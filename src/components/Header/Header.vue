<template>
  <div id="header-content">
    <h1 id="header-text">Przelicznik walut</h1>
    <div id="header-background"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0);
    return { count };
  },
})
</script>

<style scoped>
  #header-content {
    position: relative;
    text-align: center;
  }
  /*#header-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
    font-size: 25px;
    text-shadow: 0 0 0.2em #333;
  }
  #header-background {
    height: 300px;
    background-image: linear-gradient(rgb(255, 122, 122) -20%, rgb(255, 237, 134) 120%);
  } */
</style>