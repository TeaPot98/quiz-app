import {
  Box, 
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import startImage from '../assets/start-logo.png'
import Button from './Button'

const TransitionPage = ({ content }) => {
  const navigate = useNavigate()
  const styles = {
    container: {
      textAlign: 'center',
    },
    image: {
      width: '300px'
    },
    title: {
      fontWeight: 'Bold',
      my: '0.5rem'
    },
    text: {
      my: '0.5rem'
    }
  }

  return (
    <Box sx={styles.container}>
      <img style={styles.image} src={startImage} alt="horoscope" />
      <Typography sx={styles.title} >{content.text[0]}</Typography>
      {content.text.map((t, i) => 
        i > 0 && <Typography key={t} sx={styles.text} >{t}</Typography>
      )}
      <Button secondaryColor onClick={() => navigate(-1)}>Back</Button>
      <Button href={`/${content.nextPath}`}>Next</Button>
    </Box>
  )
}

export default TransitionPage