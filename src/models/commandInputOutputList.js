// Commands and Outputs
import dedent from 'dedent'

const commandInputOutputList = new Map([
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
    welcome         - View Welcome Message
    about           - About me and this website
    clear           - Clear the terminal screen
    source          - View this website's source code on GitHub
    nvim            - View Neovim config repository
    themes          - Change colour themes
    pwd             - Where Are We?
    help            - View available commands

    Up/Down Arrows  - Cycle previous commands
    `,
  ],
  ['pwd', window.location.hostname],
  [
    'themes',
    dedent`
    iceberg   tokyonight-night    catppuccin-macchiato    rose-pine

    Usage: themes [THEME]
    `,
  ],
  [
    'about',
    dedent`
    Hey, I'm Adrian Curammeng.

    I'm a student of Seneca Polytechnic's BSD program, based in
    Toronto, Canada. I enjoy creating weird, unique web applications.

    This website was built using Vue.js and deployed on Netlify.
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

export default commandInputOutputList
