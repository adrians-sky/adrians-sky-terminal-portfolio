<script setup>
import TermLine from './components/TermLine.vue'
import TermOutput from './components/TermOutput.vue'
import TermWelcome from './components/TermWelcome.vue'
import commandHistory from './models/commandHistory.js'
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

:root {
  --background-color: #161821;
  --black: #6b7089;
  --blue: #91acd1;
  --cyan: #95c4ce;
  --green: #c0ca8e;
  --purple: #ada0d3;
  --red: #e98989;
  --white: #d2d4de;
  --yellow: #e9b189;
}

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
