import {
  Container,
} from '@mui/material'

import {
  Route,
  Routes,
} from 'react-router-dom'

import Home from './components/Home'
import HyperPersonalized from './components/HyperPersonalized'
import Question from './components/Question'
import QuizContainer from './components/QuizContainer'
import TransitionPage from './components/TransitionPage'

const App = () => {
  
  
  return (
    <Container maxWidth="xs">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/profile-hyperpersonalized" element={<HyperPersonalized />} />
        <Route path="/:questionPath" element={<QuizContainer />} />
      </Routes>
    </Container>
  )
}

export default App;
