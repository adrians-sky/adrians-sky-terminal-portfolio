<script setup>
import TermLinePs1 from './TermLinePs1.vue'
import commandInputOutputList from '../models/commandInputOutputList.js'
</script>

<template>
  <div id="termWelcomeLine">
    <TermLinePs1 />
    <span id="termWelcomeFakeCommand">welcome</span>
  </div>
  <div v-html="commandInputOutputList.get('welcome')" id="termWelcomeOutput"></div>
</template>

<style scoped>
#termWelcomeLine {
  display: flex;
  flex-direction: row;
}

#termWelcomeFakeCommand {
  display: inline-block;
  padding-left: 0.5rem;
  color: var(--white);
}

#termWelcomeOutput {
  display: inline-block;
  margin: 0.5rem 0;
  color: var(--white);
  white-space: pre;
}
</style>
