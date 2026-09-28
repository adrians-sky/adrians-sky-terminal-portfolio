<script setup>
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
