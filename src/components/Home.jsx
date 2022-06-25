import {
  Typography,
  Box,
} from '@mui/material'

import {
  Link
} from 'react-router-dom'

import startImage from '../assets/start-logo.png'
import Button from './Button'

const Home = () => {
  const styles = {
    container: {
      textAlign: 'center',
    },
    image: {
      width: '300px'
    },
    subtitle: {
      color: 'gray',
      lineHeight: '3rem',
    },
    title: {
      fontSize: '1.5rem',
    },
  }
  
  return (
    <Box sx={styles.container}>
      <img style={styles.image} src={startImage} alt="horoscope" />
      <Typography sx={styles.subtitle}>1-Minute Personal Assessment</Typography>
      <Typography sx={styles.title}>Understand Yourself and Improve Relationships With Astrology</Typography>
      <Button href="/relationship-status" fullWidth >Take test</Button>
    </Box>
  )
}

export default Home