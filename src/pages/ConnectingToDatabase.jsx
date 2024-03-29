import { useState, useEffect } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import spinner from '../assets/spinner.svg'
import LoadingBar from '../components/LoadingBar'
import useUserData from '../hooks/useUserData'

const ConnectingToDatabase = () => {
  const theme = useTheme()
  const { userData } = useUserData()
  const navigate = useNavigate()
  const [completed, setCompleted] = useState(0)
  const nextPath = userData.get('inRelationship') ? '/profile-problem-relationship' : '/profile-problem'
  useEffect(() => {
    if (completed < 100) {
      const timer = setTimeout(() => {
        setCompleted(prevState => {
          return completed < 90 ? prevState + (Math.random() * 5) + 5 : 100
        })
      }, Math.random() * 1000)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        navigate(nextPath)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [completed])

  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      textAlign: 'center'
    },
    text: {
      fontWeight: 500
    },
    image: {
      width: '300px'
    },
    loadingBarText: {
      color: theme => theme.palette.primary.main
    },
    textBlue: {
      color: theme.palette.primary.main
    }
  }
  
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>{`We've helped 4,453,504 other ${userData.get('inRelationship') ? '' : 'single'} ${userData.get('gender') === 'Male' ? 'men' : 'women'} with their Sun in`} <span style={styles.textBlue}>{userData.get('userZodiacSign')}</span> {`to ${userData.get('inRelationship') ? userData.get('goal') !== 'Both' ? userData.get('goal') === 'Fix relationship problems' ? 'fix their relationship problems' : 'increase relationship satisfaction' : 'fix their relationship problems and increase relationship satisfaction' : userData.get('goal') !== 'Both' ? userData.get('goal') === 'Find my perfect partner' ? 'find their perfect partner' : 'understand themselves better' : 'find their perfect partner and understand themselves better'} and we can't wait to help you too!`}</Typography>
      <object type="image/svg+xml" data={spinner}>svg-animation</object>
      <Typography sx={styles.loadingBarText}>Connecting to database...</Typography>
      <LoadingBar completed={completed} />
    </Box>
  )
}

 export default ConnectingToDatabase