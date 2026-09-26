// Stores Command History

const history = reactive({
  commands: [],
  cleared: false,

  getCommands() {
    return this.commands
  },

  addCommand(command, output) {
    this.commands.push({
      command: command,
      output: output,
    })
  },

  isCleared() {
    return this.cleared
  },

  clear() {
    this.commands = []
    this.cleared = true
  },
})

export default history
