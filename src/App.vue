<template>
  <Header />
  <Calculate :items="input" :output="output" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header';
import Calculate from './components/Calculate';
import NBP from './class/NBP';
import { Rate } from './class/NBP/result';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Calculate
  },
  async created() {
    const nbp = new NBP( 'A' );
    this.input = await nbp.getTable( 3 );
    this.output = nbp.output;
  },
  data(): { input: Rate[], output: Rate[] } {
    return {
      input: [],
      output: []
    }
  },
})
</script>

<style>
#app {
  /**/
}
</style>
