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
import PlaceInputField from './SearchInputField'
import Button from './Button'

const PlaceQuestion = ({ question }) => {
  const navigate = useNavigate()
  const [place, setPlace] = useState('')
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

  const handlePlaceChange = (event) => {
    setPlace(event.target.value)
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
      <PlaceInputField value={place} label='Your Place of Birth' onChange={handlePlaceChange} />
      <Button disabled={!place || place.length < 3} href={`/${question.nextPath}`}>Next</Button>
    </Box>
  )
}

export default PlaceQuestion