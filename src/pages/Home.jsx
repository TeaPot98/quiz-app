import {
  Typography,
  Box,
} from '@mui/material'

import { useNavigate, useSearchParams } from 'react-router-dom'

import startImage from '../assets/home.svg'
import Button from '../components/buttons/Button'
import MovingArrow from '../components/MovingArrow'

const Home = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const pixelId = searchParams.get('pixelid')
  localStorage.setItem('fbPixelId', pixelId)
  const styles = {
    container: {
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: '250px'
    },
    subtitle: {
      color: 'gray',
      lineHeight: '3rem',
      fontWeight: 500
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 500,
      mx: '3rem'
    },
  }
  
  return (
    <Box sx={styles.container}>
      <img style={styles.image} src={startImage} alt="horoscope" />
      <Typography sx={styles.subtitle}>1-Minute Personal Assessment</Typography>
      <Typography sx={styles.title}>Understand Yourself and Improve Relationships With Astrology</Typography>
      <MovingArrow />
      <Button onClick={() => navigate('/relationship-status')} fullWidth >Take test</Button>
    </Box>
  )
}

export default Home