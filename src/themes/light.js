import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      // main: '#ffffff',
      main: '#066FDE'
    },
    secondary: {
      main: '#066FDE',

    },
    text: {
      primary: 'rgba(32, 33, 36, 1)',
    },
    error: {
      main: '#ff7777',
    },
    divider: '#dee5f9',
    button: {
      main: '#066FDE',
      secondary: '#EFF2FD',
      outline: '#dee5f9',
    }
  },
})

export default theme