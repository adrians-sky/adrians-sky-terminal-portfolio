// Autocompletes Commands

import commandInputList from '../models/commandInputList.js'

const autocompleteCommand = (command) => {
  const matchingCommands = []
  commandInputList.forEach((cmd) => {
    if (cmd.startsWith(command)) {
      matchingCommands.push(cmd)
    }
  })

  // Check if only one command can be autocompleted
  if (matchingCommands.length === 1) {
    return matchingCommands[0]
  }

  return command
}

export default autocompleteCommand
