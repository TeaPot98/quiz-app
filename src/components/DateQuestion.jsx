import { useState } from 'react'
import {
  Box,
  Typography,
  Divider,
  IconButton,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import { useNavigate } from 'react-router-dom'

import ProgressBar from './ProgressBar'
import SelectInputField from './SelectInputField'
import { months, years, days } from '../data'
import Button from './Button'
import useUserData from '../hooks/useUserData'
import QuestionHeader from './QuestionHeader'

const DateQuestion = ({ question }) => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const isSaved = answers.has(question.path)
  const [month, setMonth] = useState(isSaved ? answers.get(question.path)[0].month : '')
  const [day, setDay] = useState(isSaved ? answers.get(question.path)[0].day : '')
  const [year, setYear] = useState(isSaved ? answers.get(question.path)[0].year : '')
  console.log(days)
  const styles = {
    container: {
      textAlign: 'center',
    },
    question: {
      my: '2rem'
    },
  }

  const handleMonthChange = (event) => {
    setMonth(event.target.value)
  }

  const handleDayChange = (event) => {
    setDay(event.target.value)
  }

  const handleYearChange = (event) => {
    setYear(event.target.value)
  }

  const handleDateSet = () => {
    addAnswer({
      name: question.path,
      value: [{
        day: day,
        month: month,
        year: year
      }]
    })

    switch (question.path) {
      case 'date-of-birth':
        addUserData({
          name: 'userDateOfBirth',
          value: {
            day: day, 
            month: month,
            year: year
          }
        })
        break
      case 'partner-date-of-birth':
        addUserData({
          name: 'partnerDateOfBirth',
          value: {
            day: day,
            month: month,
            year: year
          }
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
      <SelectInputField value={month} label={'Month'} onChange={handleMonthChange} dataList={months} />
      <SelectInputField value={day} label={'Day'} onChange={handleDayChange} dataList={days} />
      <SelectInputField value={year} label={'Year'} onChange={handleYearChange} dataList={years} />
      <Button disabled={!day || !month || !year} onClick={handleDateSet}>Next</Button>
    </Box>
  )
}

export default DateQuestion