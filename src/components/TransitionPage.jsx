import {
  Box, 
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import startImage from '../assets/start-logo.png'
import Button from './Button'

const TransitionPage = ({ content }) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const styles = {
    container: {
      textAlign: 'center',
    },
    image: {
      width: '300px'
    },
    title: {
      fontWeight: 500,
      my: '0.5rem'
    },
    text: {
      my: '0.5rem'
    },
    orangeText: {
      color: theme.palette.secondary.orange,
      fontWeight: 500
    }
  }

  const renderTransitionText = () => {
    switch (content.path) {
      case 'traits-started-unhappy':
      case 'traits-started-happens':
      case 'traits-started-compatible':
        return (
          <Typography sx={styles.text}>Now, we need some information about your <span style={styles.orangeText}>Personality Traits</span> to dig deeper!</Typography>
        )
      case 'relationship-covered':
      case 'relationship-better':
      case 'relationship-wonder':
        return (
          <Typography sx={styles.text}>Now, we need some information about <span style={styles.orangeText}>Your Partner's Profile</span> to craft the astrological synastry blueprint between you and your partner.</Typography>
        )
      default:
        return content.text.map((t, i) => 
          i > 0 && <Typography key={t} sx={styles.text} >{t}</Typography>
        )
    }
  }

  return (
    <Box sx={styles.container}>
      <img style={styles.image} src={startImage} alt="horoscope" />
      <Typography sx={styles.title} >{content.text[0]}</Typography>
      {renderTransitionText()}
      <Button secondaryColor onClick={() => navigate(-1)}>Back</Button>
      <Button onClick={() => navigate(`/${content.nextPath}`)}>Next</Button>
    </Box>
  )
}

export default TransitionPage