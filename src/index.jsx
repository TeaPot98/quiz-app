import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import QuizContext from './state/QuizContext'
import { ThemeProvider } from '@mui/material/styles'
import { UserDataProvider } from './state/UserDataContext'

import App from './App'
import { questions } from './data'
import light from './themes/light'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <Router>
    <QuizContext.Provider value={questions}>
      <ThemeProvider theme={light}>
        <UserDataProvider>
          <App />
        </UserDataProvider>
      </ThemeProvider>
    </QuizContext.Provider>
  </Router>
)
