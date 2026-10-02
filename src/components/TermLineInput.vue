<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import handleCommand from '../utils/handleCommand.js'
import commandHistory from '../models/commandHistory.js'
import autocompleteCommand from '../utils/autocompleteCommand.js'

const command = ref('')
const disabled = ref(false)
const termLineInputRef = ref(null)

// Focus on command input
const focusInput = () => {
  termLineInputRef.value?.focus()
}

// Focus on command input on page load
// and make any click focus on the command input
onMounted(() => {
  focusInput()
  document.addEventListener('click', focusInput)
})

// Send command
const sendCommand = () => {
  handleCommand(command.value.trim())
  if (command.value === 'clear') {
    command.value = ''
  } else {
    disabled.value = true
  }
}

// Get previous command
const getPreviousCommand = () => {
  const termLineValue = termLineInputRef.value
  const previousCommand = commandHistory.getPreviousCommand()

  if (previousCommand) {
    termLineValue.value = previousCommand.command
    command.value = previousCommand.command

    // Move cursor to the end of input
    const inputEnd = termLineValue.value.length
    termLineValue.setSelectionRange(inputEnd, inputEnd)
  }
}

// Get next command
const getNextCommand = () => {
  const termLineValue = termLineInputRef.value
  const nextCommand = commandHistory.getNextCommand()

  if (nextCommand) {
    termLineValue.value = nextCommand.command
    command.value = nextCommand.command

    // Move cursor to the end of input
    const inputEnd = termLineValue.value.length
    termLineValue.setSelectionRange(inputEnd, inputEnd)
  }
}

// Autocomplete current command
const autocompleteCommandInput = () => {
  const termLineValue = termLineInputRef.value
  const autocompletedCommand = autocompleteCommand(command.value.trim())

  termLineValue.value = autocompletedCommand
  command.value = autocompletedCommand

  // Move cursor to the end of input
  const inputEnd = termLineValue.value.length
  termLineValue.setSelectionRange(inputEnd, inputEnd)
}

// Re-focus on input when commands are cleared
watch(
  () => commandHistory.getCommands().length,
  async (length) => {
    if (length === 0) {
      command.value = ''
      disabled.value = false

      // Re-focus on command input
      await nextTick()
      focusInput()
    }
  },
)
</script>

<template>
  <input
    ref="termLineInputRef"
    id="termLineInput"
    type="text"
    v-model="command"
    @keyup.enter="sendCommand"
    @keydown.up.prevent="getPreviousCommand"
    @keydown.down.prevent="getNextCommand"
    @keydown.tab.prevent="autocompleteCommandInput"
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
