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
  color: #c0ca8e;
}

#ps1-suffix {
  color: #91acd1;
}
</style>
