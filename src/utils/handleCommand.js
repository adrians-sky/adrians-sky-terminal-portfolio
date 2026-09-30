// Processes and Adds Commands to History

import commandList from '../models/commandList.js'
import commandHistory from '../models/commandHistory.js'
import changeTheme from './changeTheme.js'

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
  const splitCommand = command.trim().split(/\s+/)

  if (commandHandler) {
    commandHandler(command)
  } else if (splitCommand[0] === 'echo') {
    commandHistory.addCommand(command, splitCommand.slice(1).join(' '))
  } else if (splitCommand[0] === 'themes' && splitCommand.length == 2) {
    if (changeTheme(splitCommand[1])) {
      commandHistory.addCommand(command, `Changing theme to ${splitCommand[1]}...`)
    } else {
      commandHistory.addCommand(command, `${command}: command not found`)
    }
  } else if (commandList.has(command)) {
    commandHistory.addCommand(command, commandList.get(splitCommand.join(' ')))
  } else {
    commandHistory.addCommand(command, `${splitCommand.join(' ')}: command not found`)
  }
}

export default handleCommand
