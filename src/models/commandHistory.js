// Stores Command History

import { reactive } from 'vue'

const commandHistory = reactive({
  commands: [],
  cleared: false,
  current: 0,

  getCommands() {
    return this.commands
  },

  getPreviousCommand() {
    if (this.current <= 0) {
      return null
    }
    return this.commands[--this.current]
  },

  getNextCommand() {
    if (this.current === this.commands.length - 1) {
      return null
    }

    return this.commands[++this.current]
  },

  addCommand(command, output) {
    this.commands.push({
      command: command,
      output: output,
    })
    this.current = this.commands.length
  },

  isCleared() {
    return this.cleared
  },

  clear() {
    this.commands = []
    this.cleared = true
  },
})

export default commandHistory
