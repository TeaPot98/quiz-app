import { useEffect, useState } from 'react'
import {
  Box, 
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const FinisherPage = () => {
  const navigate = useNavigate()
  const textArray = [
    'Welcome',
    'Based on your answers,',
    'we\'ve created your astrological blueprint and guidance plan',
    'to help you better understand yourserlf and your partner',
    'and to improve your relationship - for good.',
    'Let\'s get started.'
  ]
  const [textIndex, setTextIndex] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const styles = {
    container: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // textAlign: 'center',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      background: 'rgb(36,45,124)',
      background: 'radial-gradient(at bottom left, rgba(36,45,124,1) 0%, rgba(0,174,239,1) 100%)',
      backgroundPosition: 'left 20% bottom 10%',
    },
    text: {
      color: 'white',
      maxWidth: '350px',
      fontWeight: 700,
      fontSize: '2.2rem',
      opacity: opacity,
      transition: 'opacity 0.5s ease-in-out'
    }
  }

  useEffect(() => {
    setOpacity(1)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textIndex < textArray.length - 1) {
        setOpacity(1)
        setTextIndex(prevState => prevState + 1)
      }
    }, 3500)

    const removeOpacity = setTimeout(() => {
      if (textIndex < textArray.length - 1) {
        setOpacity(0)
      } else {
        navigate('/trial-pay')
      }
    }, 3000)
    return () => {
      clearTimeout(timer)
      clearTimeout(removeOpacity)
    }
  }, [textIndex])
  
  return (
    <Box sx={styles.container}>
        <Typography sx={styles.text}>{textArray[textIndex]}</Typography>
    </Box>
  )
}

export default FinisherPage

// #242d7c
// #00aeef
