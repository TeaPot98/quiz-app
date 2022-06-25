import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import QuizContext from './state/QuizContext'
import { ThemeProvider } from '@mui/material/styles'

import App from './App'
import { yourProfile } from './data'
import light from './themes/light'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <Router>
    <QuizContext.Provider value={yourProfile}>
      <ThemeProvider theme={light}>
        <App />
      </ThemeProvider>
    </QuizContext.Provider>
  </Router>
)
