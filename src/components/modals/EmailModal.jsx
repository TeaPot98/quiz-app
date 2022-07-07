import { useState } from 'react'
import {
  Modal,
  Box,
  Typography,
  TextField,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'
import Button from '../buttons/Button'

const EmailModal = ({ open, onClose }) => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const [emailError, setEmailError] = useState('')
  const [email, setEmail] = useState(userData.get('email') ? userData.get('email') : '')
  const styles = {
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 350,
      bgcolor: 'background.paper',
      borderRadius: '15px',
      boxShadow: 24,
      p: '1rem 1rem 0 1rem',
      outline: 'none',
      textAlign: 'center'
    },
    modalTitle: {
      fontWeight: 500
    },
    emailInputField: {
      height: '50px',
      width: '90%',
      mt: '1rem',
      '& .MuiInputBase-root': {
        borderRadius: '10px',
        height: '50px',
        // width: '90%',
        mx: 'auto',
      }
    },
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
    onClose()
  }
  
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modal}>
        <Typography sx={styles.modalTitle} id="modal-modal-title">
          Update your email address
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          We'll send you a copy of your plan and login details.
        </Typography>
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
        <Button onClick={handleClick} >Update</Button>
      </Box>
    </Modal>
  )
}

export default EmailModal