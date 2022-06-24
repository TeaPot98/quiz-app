import {
  Typography,
  Button,
  Box,
} from '@mui/material'

import {
  Link
} from 'react-router-dom'

import startImage from '../assets/start-logo.png'

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
    button: {
      borderRadius: '2rem',
      height: '60px',
      textTransform: 'none',
      backgroundColor: '#066FDE',
      my: '1rem',
      elevation: 0,
      "&:hover": {
        backgroundColor: '#066FDE'
      }
    }
  }
  
  return (
    <Box sx={styles.container}>
      <img style={styles.image} src={startImage} alt="horoscope" />
      <Typography sx={styles.subtitle}>1-Minute Personal Assessment</Typography>
      <Typography sx={styles.title}>Understand Yourself and Improve Relationships With Astrology</Typography>
      <Button component={Link} to="/relationship-status" variant="contained" sx={styles.button} elevation={0} fullWidth disableRipple disableElevation>Take test</Button>
    </Box>
  )
}

export default Home