import {
  Box,
  Typography,
} from '@mui/material'

import ReactPixel from 'react-facebook-pixel'

import logo from '../assets/logo.svg'
import accessContinue from '../assets/access-continue.png'
import Button from '../components/buttons/Button'
import useUserData from '../hooks/useUserData'

const AccessPage = () => {
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const pixelId = localStorage.getItem('fbPixelId')
  // console.log('The pixel ID from the final page >>> ', pixelId)
  // console.log(userData)
  // ReactPixel.init('254180783380192')
  ReactPixel.init(pixelId)
  ReactPixel.track('Purchase', {
    value: userData.get('totalPrice').value,
    currency: 'USD',
    user: userData.get('email'),
    contents: [
      userData.get('trialPrice'),
      userData.get('perWeekPrice'),
      userData.get('addonsPrice')
    ],
    content_type: 'product'
  })
  const styles = {
    container: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
    },
    logo: {
      width: '70px'
    },
    heading: {
      fontSize: '1.2rem',
      fontWeight: 500
    },
    step: {
      textAlign: 'start',
      display: 'flex',
      alignItems: 'start',
      gap: '0.5rem',
      alignSelf: 'start'
    },
    stepNumber: {
      color: theme => theme.palette.primary.main,
      fontSize: '1.2rem',
      fontWeight: 500
    },
    image: {
      width: '100%',
    },
    textBold: {
      fontWeight: 500
    }
  }


  
  return (
    <Box sx={styles.container}>
      <img style={styles.logo} src={logo} alt="logo" />
      <Typography sx={styles.heading}>Simply follow these steps to access your account</Typography>
      <Box sx={styles.step}>
        <Typography sx={styles.stepNumber}>1</Typography>
        <Typography>Download Hint app by clicking on the button below</Typography>
      </Box>
      <Box sx={styles.step}>
        <Typography sx={styles.stepNumber}>2</Typography>
        <Typography>Open the app and tap “<span style={styles.textBold}>Continue with email</span>” (see image below).</Typography>
      </Box>
      <img style={styles.image} src={accessContinue} alt="hint to enter in your account from the app" />
      <Box sx={styles.step}>
        <Typography sx={styles.stepNumber}>3</Typography>
        <Typography>Enter your email "<span style={styles.textBold}>{userData.get('email')}</span>" and follow the instructions to create your password.</Typography>
      </Box>
      <Button fullWidth>Download Hint</Button>
    </Box>
  )
}

export default AccessPage