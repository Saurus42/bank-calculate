<template>
  <div v-for="( item, index ) in items" :key="index" id="calculator-content">
    <div><p>1 {{ item.code }} to </p></div>
    <div v-for="( out, index ) in output" :key="index">
      <p v-if="out.code === 'PLN'">{{ Math.floor(item.mid * 100) * 0.01 }} {{ out.code }}</p>
      <p v-else>{{ Math.floor( (item.mid / out.mid ) * 100) * 0.01 }} {{ out.code }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { Rate } from '../../class/NBP/result';
export default defineComponent({
  setup() {
    const count = ref(0);
    return { count };
  },
  props: {
    items: {
      type: Object as PropType<Rate[]>,
      required: true
    },
    output: {
      type: Object as PropType<Rate[]>,
      required: true
    }
  }
})
</script>

<style scoped>
  #calculator-content {
    display: flex;
  }
  #calculator-content div {
    width: 50%;
  }
  #calculator-content:nth-child(2n) {
    background-color: rgb(133, 136, 136);
  }
</style>