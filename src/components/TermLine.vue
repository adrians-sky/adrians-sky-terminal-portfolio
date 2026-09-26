<script setup>
import TermLinePs1 from './TermLinePs1.vue'
import TermLineInput from './TermLineInput.vue'
</script>

<template>
  <div id="termLine">
    <Ps1 />
    <Input />
  </div>
</template>

<style scoped>
#termLine {
  display: flex;
  flex-direction: row;
}
</style>
