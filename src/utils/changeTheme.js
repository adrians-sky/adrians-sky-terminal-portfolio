// Processes `theme [THEME]` command

const availableThemes = ['iceberg', 'tokyonight-night', 'catppuccin-macchiato', 'rose-pine']

const changeTheme = (theme) => {
  if (!availableThemes.includes(theme)) {
    return false
  }

  document.documentElement.setAttribute('colour-theme', theme)
  localStorage.setItem('colour-theme', theme)
  return true
}

export default changeTheme
