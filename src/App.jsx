import {
  Container,
} from '@mui/material'
import { useEffect } from 'react'
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
  const { userData, answers, addAnswer, addUserData, setAnswers, setUserData } = useUserData(UserDataContext)
  useEffect(() => {
    const storedUserData = localStorage.getItem('quizAppUserData')
    const storedAnswers = localStorage.getItem('quizAppAnswers')
    console.log(storedUserData)
    if (storedUserData) {
      // Convert data from localStorage into Map and saving it to state
      setUserData({
        userData: new Map(JSON.parse(storedUserData))
      })
    } 
    if (storedAnswers) {
      setAnswers({
        answers: new Map(JSON.parse(storedAnswers)),
      })
    }
  }, [])
  
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
