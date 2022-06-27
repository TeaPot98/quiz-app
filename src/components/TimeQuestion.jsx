import { useState } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import Button from './Button'
import useUserData from '../hooks/useUserData'
import QuestionHeader from './QuestionHeader'
import TimeInputField from './TimeInputField'

const TimeQuestion = ({ question }) => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const isSaved = answers.has(question.path)
  const [time, setTime] = useState(isSaved ? answers.get(question.path)[0].time : {
    hour: '',
    minutes: '',
    am: false,
    pm: false
  })
  const styles = {
    container: {
      textAlign: 'center',
    },
    question: {
      my: '2rem'
    },
  }

  const handleTimeChange = (time) => {
    setTime(time)
  }
  
  const handleTimeSet = () => {
    addAnswer({
      name: question.path,
      value: [{
        time: time
      }]
    })

    switch (question.path) {
      case 'time-of-birth':
        addUserData({
          name: 'userTimeOfBirth',
          value: time
        })
        break
      case 'partner-time-of-birth-true':
        addUserData({
          name: 'partnerTimeOfBirth',
          value: time
        })
      break
      default:
        break
    }
    
    navigate(`/${question.nextPath}`)
  }
  
  return (
    <Box sx={styles.container}>
      <QuestionHeader />
      {question.text.map(t => 
        <Typography key={t} sx={styles.question}>{t}</Typography>
      )}
      <TimeInputField onChange={handleTimeChange} value={time} />
      <Button disabled={false} onClick={handleTimeSet}>Next</Button>
    </Box>
  )
}

export default TimeQuestion