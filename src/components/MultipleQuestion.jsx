import { useState } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'
import Button from './Button'

import { useNavigate } from 'react-router-dom'
import useUserData from '../hooks/useUserData'

import QuestionHeader from './QuestionHeader'
import CheckboxButton from './ChekboxButton'

const MultipleQuestion = ({ question }) => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const [checkedButtons, setCheckedButtons] = useState(answers.has(question.path) ? answers.get(question.path) : [])
  const styles = {
    container: {
      textAlign: 'center',
    },
    text: {
      fontWeight: 500,
      my: '2rem',
      mx: '3rem'
    },
  }

  const handleButtonCheck = (answer) => {
    setCheckedButtons(prevState => {
      if (prevState.some(a => answer.id === a.id)) {
        return prevState.filter(a => a.id !== answer.id)
      }
      if (prevState.some(a => a.text === 'None of these')) {
        return [answer]
      }
      if (answer.text === 'None of these') {
        return [answer]
      }
      return [...prevState, answer]
    })
  }

  const handleNextButton = () => {
    addAnswer({
      name: question.path,
      value: checkedButtons
    })
    navigate(`/${question.nextPath}`)
  }
  
  return (
    <Box sx={styles.container}>
      <QuestionHeader />
      {question.text.map(t =>
        <Typography key={t} sx={styles.text}>{t}</Typography>
      )}
      {question.answers.map(a =>
        <CheckboxButton isChecked={checkedButtons.some(ans => ans.id === a.id)} onClick={() => handleButtonCheck(a)} key={a.id}>{a.text}</CheckboxButton>
      )}
      <Button disabled={checkedButtons.length < 1} onClick={handleNextButton}>Next</Button>
    </Box>
  )
}

export default MultipleQuestion