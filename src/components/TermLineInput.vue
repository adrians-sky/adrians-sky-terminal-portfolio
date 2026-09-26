<script setup>
import { ref } from 'vue'

const command = ref('')
const disabled = ref(false)

const sendCommand = () => {}
</script>

<template>
  <input
    id="termLineInput"
    type="text"
    v-model="command"
    @keyup.enter="sendCommand"
    :disabled="disabled"
  />
</template>

<style scoped>
#termLineInput {
  width: 100%;
  padding-left: 0.5rem;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Cascadia Mono', sans-serif;
  font-size: 1rem;
  color: var(--white);
}
</style>
