import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CircleIcon from '@mui/icons-material/Circle'

import logo from '../assets/logo.svg'
import checkOrange from '../assets/check-orange.svg'
import checkGreen from '../assets/check-green.svg'
import checkBlue from '../assets/check-blue.svg'
import circle from '../assets/circle.svg'
import LoadingBar from './LoadingBar'
import useUserData from '../hooks/useUserData'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const [currentLoadingData, setCurrentLoadingData] = useState('Analyzing your profile...')
  const [completed, setCompleted] = useState({
    blue: 0,
    orange: 0,
    green: 0
  })
  const nextPath = '/email'
  const loadingData = {
    blue: [
      'Analyzing your profile...',
      'Identifying the planetary positions when you were born',
      'Creating your astrological blueprint...'
    ],
    orange: [
      'Assessing personality profile...',
      'Identifying your strenghts and weaknesses...',
      'Analyzing your compatibility...'
    ],
    green: [
      'Analyzing relationship needs...',
      'Charting best guidance plan...',
      'Predicting future results...'
    ]
  }

  useEffect(() => {
    if (completed.green < 100) {
      const timer = setTimeout(() => {
        setCompleted(prevState => {
          if (prevState.blue < 100) {
            return {
              ...prevState,
              blue: prevState.blue + 1
            } 
          } else if (prevState.orange < 100) {
            return {
              ...prevState,
              orange: prevState.orange + 1
            } 
          } else if (prevState.green < 100) {
            return {
              ...prevState,
              green: prevState.green + 1
            } 
          }
        })
      }, Math.random() * 100)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        console.log('Done !')
        // navigate(nextPath)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [completed])

  useEffect(() => {


    if (completed.blue < 100) {
      if (completed.blue < 33) {
        setCurrentLoadingData(loadingData.blue[0])
      } else if (completed.blue < 66) {
        setCurrentLoadingData(loadingData.blue[1])
      } else {
        setCurrentLoadingData(loadingData.blue[2])
      }
    }
  
    if (completed.orange < 100 && completed.orange > 0) {
      if (completed.orange < 33) {
        setCurrentLoadingData(loadingData.orange[0])
      } else if (completed.orange < 66) {
        setCurrentLoadingData(loadingData.orange[1])
      } else {
        setCurrentLoadingData(loadingData.orange[2])
      }
    }
  
    if (completed.green < 100 && completed.green > 0) {
      if (completed.green < 33) {
        setCurrentLoadingData(loadingData.green[0])
      } else if (completed.green < 66) {
        setCurrentLoadingData(loadingData.green[1])
      } else {
        setCurrentLoadingData(loadingData.green[2])
      }
    }
  }, [completed])
  

  const styles = {
    container: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5rem'
    },
    image: {
      width: '70px'
    },
    loadingInfo: {
      fontSize: '1.3rem',
      fontWeight: 500,
      height: '30px'
    },
    checkContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.7rem'
    },
    blueCheckIcon: {
      display: completed.blue === 100 ? 'block' : 'none',
    },
    blueCircle: {
      display: completed.blue === 100 ? 'none' : 'default'
    },
    orangeCheckIcon: {
      display: completed.orange === 100 ? 'block' : 'none',
    },
    orangeCircle: {
      display: completed.orange === 100 ? 'none' : 'default'
    },
    greenCheckIcon: {
      display: completed.green === 100 ? 'block' : 'none',
    },
    greenCircle: {
      display: completed.green === 100 ? 'none' : 'default'
    },
    smallText: {
      fontSize: '0.8rem',
      mx: '3rem'
    }
  }
  
  return (
    <Box sx={styles.container}>
      <img style={styles.image} src={logo} alt="logo" />
      <Typography sx={styles.loadingInfo}>{currentLoadingData}</Typography>
      <LoadingBar 
        completed={completed.blue} 
        label="Your Profile" 
        height={10} 
        backgroundColor={theme.palette.button.light}
        isSlim 
      />
      <LoadingBar 
        completed={completed.orange} 
        label={userData.get('inRelationship') ? 'Partner Profile' : 'Personality Traits'} 
        height={10} 
        color={theme.palette.secondary.orange}
        backgroundColor={theme.palette.button.light}
        isSlim 
      />
      <LoadingBar 
        completed={completed.green} 
        label="Relationship Pattern"
        height={10} 
        color={theme.palette.secondary.green}
        backgroundColor={theme.palette.button.light}
        isSlim 
      />
      <Box sx={styles.checkContainer}>
        <object style={styles.blueCheckIcon} type="image/svg+xml" data={checkBlue}>svg-animation</object>
        <object style={styles.blueCircle} type="image/svg+xml" data={circle}>svg-animation</object> 
        <object style={styles.orangeCheckIcon} type="image/svg+xml" data={checkOrange}>svg-animation</object>
        <object style={styles.orangeCircle} type="image/svg+xml" data={circle}>svg-animation</object>  
        <object style={styles.greenCheckIcon} type="image/svg+xml" data={checkGreen}>svg-animation</object> 
        <object style={styles.greenCircle} type="image/svg+xml" data={circle}>svg-animation</object> 
      </Box>
        <Typography sx={styles.smallText} >Sit tight! We’re building your perfect guidance plan based on your unique astrological blueprint and millions of data points from successful Hint users.</Typography>
    </Box>
  )
}

export default Loading