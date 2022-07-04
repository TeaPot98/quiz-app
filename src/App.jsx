import {
  Container,
} from '@mui/material'
import {
  Route,
  Routes,
} from 'react-router-dom'

import Home from './components/Home'
import HyperPersonalized from './components/HyperPersonalized'
import QuizContainer from './components/QuizContainer'
import TransitionPage from './components/TransitionPage'
import Loading from './components/Loading'
import EmailPage from './components/EmailPage'
import FinisherPage from './components/FinisherPage'
import PaymentPage from './components/PaymentPage'

const App = () => {  
  return (
    <Container maxWidth="xs">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/profile-hyperpersonalized" element={<HyperPersonalized />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/finisher" element={<FinisherPage />} />
        <Route path="/trial-pay" element={<PaymentPage />} />
        <Route path="/:questionPath" element={<QuizContainer />} />
      </Routes>
    </Container>
  )
}

export default App;
