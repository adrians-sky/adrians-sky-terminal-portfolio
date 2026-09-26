// Commands and Outputs
import dedent from 'dedent'

const commandList = new Map([
  [
    'welcome',
    `
            _      _                           _
   __ _  __| |_ __(_) __ _ _ __  ___       ___| | ___   _
  / _\` |/ _\` | '__| |/ _\` | '_ \\/ __|_____/ __| |/ / | | |
 | (_| | (_| | |  | | (_| | | | \\__ \\_____\\__ \\   <| |_| |
  \\__,_|\\__,_|_|  |_|\\__,_|_| |_|___/     |___/_|\\_\\\\__, |
                                                    |___/

  A terminal portfolio website designed by Adrian Curammeng.

  +----------------------------------------------------------+
  This website's source code can be found on GitHub <a href="https://github.com/adrians-sky/adrians-sky-terminal-portfolio">here</a>.
  +----------------------------------------------------------+

  For a list of available commands, type \`<span style="color:#91acd1">help</span>\`.
    `,
  ],
  [
    'help',
    dedent`
    welcome         - view welcome message
    `,
  ],

  // TODO:
  // - about
  // - education
  // - contactme
  // - project
  // - blogs
  // - pwd
  // - theme
])

export default commandList
