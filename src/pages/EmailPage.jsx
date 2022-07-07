import { useState } from 'react'
import {
  Box,
  TextField,
  Typography,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import useUserData from '../hooks/useUserData'
import Button from '../components/buttons/Button'

const EmailPage = () => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const [emailError, setEmailError] = useState('')
  const [email, setEmail] = useState(userData.get('email') ? userData.get('email') : '')
  const styles = {
    container: {
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem'
    },
    boldText: {
      fontWeight: 500
    },
    emailInputField: {
      height: '50px',
      width: '90%',
      '& .MuiInputBase-root': {
        borderRadius: '10px',
        height: '50px',
        // width: '90%',
        mx: 'auto'
      }
    },
    disclaimer: {
      fontSize: '0.9rem'
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    if (event.target.value === '') {
      setEmailError('')
      return
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(event.target.value)) {
      setEmailError('Incorrect email format')
    } else {
      setEmailError('')
    }
  }

  const handleClick = () => {
    addUserData({
      name: 'email',
      value: email
    })
    navigate('/finisher')
  }
  
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.boldText}>Enter your email to see how you can improve your relationship</Typography>
      <TextField 
        sx={styles.emailInputField} 
        size="medium" type="email" 
        label="Your email" 
        helperText={emailError}
        onChange={handleEmailChange}
        value={email}
        error={emailError !== ''}
        fullWidth
      />
      <Typography sx={styles.disclaimer}>*We do not share any personal information. We'll email you a copy of your program for convenient access.</Typography>
      <Button disabled={emailError !== '' || email === ''} onClick={handleClick}>Continue</Button>
    </Box>
  )
}

export default EmailPage