<script setup>
import TermLinePs1 from './TermLinePs1.vue'
import TermLineInput from './TermLineInput.vue'
</script>

<template>
  <div id="termLine">
    <TermLinePs1 />
    <TermLineInput />
  </div>
</template>

<style scoped>
#termLine {
  display: flex;
  flex-direction: row;
}
</style>
