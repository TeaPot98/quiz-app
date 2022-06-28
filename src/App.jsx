import {
  Container,
} from '@mui/material'
import { useEffect, useState } from 'react'
import {
  Route,
  Routes,
} from 'react-router-dom'

import Home from './components/Home'
import HyperPersonalized from './components/HyperPersonalized'
import QuizContainer from './components/QuizContainer'
import TransitionPage from './components/TransitionPage'
import { UserDataContext } from './state/UserDataContext'
import useUserData from './hooks/useUserData'

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
