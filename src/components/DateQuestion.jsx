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

const DateQuestion = ({ question }) => {
  const navigate = useNavigate()
  const {data, setAnswer} = useUserData()
  const isSaved = data.has(question.path)
  const [month, setMonth] = useState(isSaved ? data.get(question.path)[0].month : '')
  const [day, setDay] = useState(isSaved ? data.get(question.path)[0].day : '')
  const [year, setYear] = useState(isSaved ? data.get(question.path)[0].year : '')
  console.log(days)
  const styles = {
    container: {
      textAlign: 'center',
    },
    progressBars: {
      display: 'flex',
      my: '1.2rem',
      px: '1rem'
    },
    header: {
      position: 'relative',
    },
    backButton: {
      position: 'absolute',
      left: 0,
      top: -10,
      cursor: 'default'
    },
    buttonIcon: {
      fontSize: '1rem',
    },
    sectionTitle: {
      color: '#066FDE',
      fontSize: '0.9rem',
      fontWeight: 'bold'
    },
    divider: {
      height: '0.5rem',
      borderColor: '#dee5f9'
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
    setAnswer({
      name: question.path,
      value: [{
        day: day,
        month: month,
        year: year
      }]
    })
    navigate(`/${question.nextPath}`)
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.progressBars}>
        <ProgressBar color="#066FDE" completed={Math.abs(100)} index={1} isFirst/>
        <ProgressBar color="#f75c03" completed={Math.abs(100)} index={2} />
        <ProgressBar color="#04a777" completed={Math.abs(50)} index={3} />
      </Box>
      <Box sx={styles.header}>
        <IconButton sx={styles.backButton} onClick={() => navigate(-1)} disableRipple>
          <ArrowBackIosNewIcon sx={styles.buttonIcon} />
        </IconButton>
        <Typography sx={styles.sectionTitle}>Your Profile</Typography>
        <Divider sx={styles.divider} />
      </Box>
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