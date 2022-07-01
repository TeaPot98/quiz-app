import { useState } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import PlaceInputField from './SearchInputField'
import Button from './Button'
import useUserData from '../hooks/useUserData'
import QuestionHeader from './QuestionHeader'

const PlaceQuestion = ({ question }) => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const isSaved = answers.has(question.path)
  const [place, setPlace] = useState(isSaved ? answers.get(question.path)[0].place : '')
  const styles = {
    container: {
      textAlign: 'center',
    },
    question: {
      my: '2rem'
    },
  }

  const handlePlaceChange = (event) => {
    setPlace(event.target.value)
  }
  
  const handlePlaceSet = () => {
    addAnswer({
      name: question.path,
      value: [{
        place: place
      }]
    })

    switch (question.path) {
      case 'place-of-birth':
        addUserData({
          name: 'userPlaceOfBirth',
          value: place
        })
        break
      case 'partner-place-of-birth':
        addUserData({
          name: 'partnerPlaceOfBirth',
          value: place
        })
      break
      default:
        break
    }
    
    navigate(`/${question.nextPath}`)
  }
  
  return (
    <Box sx={styles.container}>
      <QuestionHeader question={question} />
      {question.text.map(t => 
        <Typography key={t} sx={styles.question}>{t}</Typography>
      )}
      <PlaceInputField value={place} label='Your Place of Birth' onChange={handlePlaceChange} />
      <Button disabled={!place || place.length < 3} onClick={handlePlaceSet}>Next</Button>
    </Box>
  )
}

export default PlaceQuestion