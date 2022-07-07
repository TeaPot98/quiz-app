import {
  Container,
} from '@mui/material'
import {
  Route,
  Routes,
} from 'react-router-dom'

import Home from './pages/Home'
import HyperPersonalized from './pages/HyperPersonalized'
import QuizContainer from './pages/QuizContainer'
import TransitionPage from './pages/TransitionPage'
import Loading from './pages/Loading'
import EmailPage from './pages/EmailPage'
import FinisherPage from './pages/FinisherPage'
import PaymentPlanPage from './pages/PaymentPlanPage'
import UpsellPage from './pages/UpsellPage'
import PaymentPage from './pages/PaymentPage'
import ThankYouPage from './pages/ThankYouPage'

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
        <Route path="/trial-pay" element={<PaymentPlanPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/subscribe" element={<UpsellPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/:questionPath" element={<QuizContainer />} />
      </Routes>
    </Container>
  )
}

export default App;
