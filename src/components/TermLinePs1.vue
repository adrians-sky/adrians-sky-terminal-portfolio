<script setup>
  import { ref } from "vue";

  const hostname = ref(window.location.hostname);
</script>

<template>
  <span id="ps1-prefix">guest@{{ hostname }}</span>
  <span id="ps1-suffix">:~$</span>
</template>

<style scoped>
#ps1-prefix {
  color: var(--green);
}

#ps1-suffix {
  color: var(--blue);
}
</style>
