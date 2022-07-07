import {
  Box, Typography
} from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Button from '../components/buttons/Button'

const HyperPersonalized = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const styles = {
    container: {
      textAlign: 'center',
    },
    title: {
      fontSize: '1.5rem',
      my: '1.5rem',
      "& > span": {
        color: theme.palette.secondary.main
      }
    },
    subtitle: {
      fontSize: '1.3rem',
      my: '1.5rem',
    }
  }
  
  return (
    <Box sx={styles.container}>
      <img src={logo} alt="logo" />
      
      <Typography sx={styles.title}>
        What is <span>hyper-personalized astrology</span>, anyway?
      </Typography>
      <Typography>Personalized astrology is based on the understanding that everyone has a unique astrological blueprint. The position of the stars in the sky on your date of birth, place of birth and time of birth are unique and only happen in one lifetime. You are more than just your zodiac sign!</Typography>
      <Typography sx={styles.subtitle}>So how does it work?</Typography>
      <Typography>We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.</Typography>
      <Button onClick={() => navigate('/date-of-birth')} fullWidth>Next</Button>
    </Box>
  )
}

export default HyperPersonalized