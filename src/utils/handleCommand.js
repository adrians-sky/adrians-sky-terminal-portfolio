// Processes and Adds Commands to History

import commandList from '../models/commandList.js'
import commandHistory from '../models/commandHistory.js'

const handleCommand = (command) => {
  if (command === 'clear' || command === 'cls') {
    commandHistory.clear()
  } else if (command === 'source') {
    window.open('https://github.com/adrians-sky/adrians-sky-terminal-portfolio', '_blank')
    commandHistory.addCommand(command, 'Opening source code...')
  } else if (command === 'nvim') {
    window.open('https://github.com/adrians-sky/nvim-setup', '_blank')
    commandHistory.addCommand(command, 'Opening nvim config...')
  } else if (command.split(' ')[0] === 'echo') {
    commandHistory.addCommand(command, command.split(' ').slice(1).join(' '))
  } else if (commandList.has(command)) {
    commandHistory.addCommand(command, commandList.get(command))
  } else {
    commandHistory.addCommand(command, `${command}: command not found`)
  }
}

export default handleCommand
