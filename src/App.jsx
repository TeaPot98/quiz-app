import {
  Container,
} from '@mui/material'

import {
  Route,
  Routes,
} from 'react-router-dom'

import Home from './components/Home'
import Question from './components/Question'

const App = () => {
  
  
  return (
    <Container maxWidth="xs">
      <Routes>
        <Route path="/relationship-status" element={<Question />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  )
}

export default App;
