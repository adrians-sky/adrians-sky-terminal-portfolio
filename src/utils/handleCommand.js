// Processes and Adds Commands to History

import commandList from '../models/commandList.js'
import commandHistory from '../models/commandHistory.js'

// Lookup table for commands and behaviour
const commandTable = {
  clear: () => commandHistory.clear(),
  source: (command) => {
    window.open('https://github.com/adrians-sky/adrians-sky-terminal-portfolio', '_blank')
    commandHistory.addCommand(command, 'Opening source code...')
  },
  nvim: (command) => {
    window.open('https://github.com/adrians-sky/nvim-setup', '_blank')
    commandHistory.addCommand(command, 'Opening nvim config...')
  },
}

const handleCommand = (command) => {
  const commandHandler = commandTable[command]

  if (commandHandler) {
    commandHandler(command)
  } else if (command.split(' ')[0] === 'echo') {
    commandHistory.addCommand(command, command.split(' ').slice(1).join(' '))
  } else if (commandList.has(command)) {
    commandHistory.addCommand(command, commandList.get(command))
  } else {
    commandHistory.addCommand(command, `${command}: command not found`)
  }
}

export default handleCommand
