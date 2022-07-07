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
import Loading from './pages/Loading'
import EmailPage from './pages/EmailPage'
import FinisherPage from './pages/FinisherPage'
import PaymentPlanPage from './pages/PaymentPlanPage'
import PaymentPage from './pages/PaymentPage'
import AddonsPage from './pages/AddonsPage'
import TrialSkipPage from './pages/TrialSkipPage'
import PremiumBundleSuccess from './pages/PremiumBundleSuccess'
import AccessPage from './pages/AccessPage'

const App = () => {  
  return (
    <Container maxWidth="xs">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/transition" element={<TransitionPage />} /> */}
        <Route path="/profile-hyperpersonalized" element={<HyperPersonalized />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/finisher" element={<FinisherPage />} />
        <Route path="/trial-pay" element={<PaymentPlanPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/addons" element={<AddonsPage />} />
        <Route path="/trial-skip" element={<TrialSkipPage />} />
        <Route path="/premiumbundle-success" element={<PremiumBundleSuccess />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="/:questionPath" element={<QuizContainer />} />
      </Routes>
    </Container>
  )
}

export default App;
