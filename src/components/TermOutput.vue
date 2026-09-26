<script setup>
import TermLinePs1 from './TermLinePs1.vue'
import TermLineInput from './TermLineInput.vue'

const props = defineProps({
  output: String,
})
</script>

<template>
  <div>
    <div id="termOutput" v-html="output"></div>
  </div>
</template>

<style scoped>
#termOutput {
  display: inline-block;
  margin: 0.5rem 0;
  color: var(--white);
  white-space: pre;
}
</style>
