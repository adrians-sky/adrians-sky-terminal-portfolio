<script setup>
import { onMounted } from 'vue'
import TermLine from './components/TermLine.vue'
import TermOutput from './components/TermOutput.vue'
import TermWelcome from './components/TermWelcome.vue'
import commandHistory from './models/commandHistory.js'
import './colourSchemes.css'

// Load saved color scheme
onMounted(() => {
  const currentTheme = localStorage.getItem('colour-theme')
  if (currentTheme) {
    document.documentElement.setAttribute('colour-theme', currentTheme)
  }
})
</script>

<template>
  <TermWelcome v-if="!commandHistory.isCleared()" />
  <TermLine />
  <div v-for="command in commandHistory.getCommands()" :key="command.command">
    <TermOutput :output="command.output" />
    <TermLine />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cascadia+Mono');

*::selection {
  color: var(--black);
  background: var(--white);
}

html {
  padding: 1rem;
  font-family: 'Cascadia Mono', sans-serif;
}

body {
  background-color: var(--background-color);
}

a {
  color: var(--blue);
}

a:hover {
  color: var(--black);
}
</style>
