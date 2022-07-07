import { useState } from 'react'
import {
  Modal,
  Box,
  Typography,
  TextField,
  Divider,
  IconButton,
} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import CloseIcon from '@mui/icons-material/Close'
import CreditCardIcon from '@mui/icons-material/CreditCard'

import { useNavigate } from 'react-router-dom'
import { checkCreditCard } from '../../utils'

import visa from '../../assets/visa.svg'
import mastercard from '../../assets/mastercard.svg'
import amex from '../../assets/amex.svg'
import diners from '../../assets/diners.svg'
import discover from '../../assets/discover.svg'
import Button from '../buttons/Button'

const CreditCardModal = ({ nextPath, open, onClose }) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState({
    month: '',
    year: ''
  })
  const [cvv, setCvv] = useState('')
  const [cardCompany, setCardCompany] = useState(null)
  const [cardError, setCardError] = useState(null)
  const [monthError, setMonthError] = useState(null)
  const [yearError, setYearError] = useState(null)
  const [cvvError, setCvvError] = useState(null)  
  const formIsValid = name !== '' && name.length > 3 && cardNumber.length > 0 && cardError === null && expiryDate.month.length > 0 && expiryDate.year.length > 0 && yearError === null && monthError === null && cvv.length > 0 && cvvError === null
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
      p: '2rem',
      outline: 'none',
      // textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    closeButton: {
      position: 'absolute',
      right: '1rem',
      top: '1rem'
    },
    modalTitle: {
      fontWeight: 500
    },
    creditCardIcons: {
      display: 'flex',
      justifyContent: 'center',
      mt: '1rem',
      gap: '5px'
    },
    divider: {
      height: '1rem',
      borderColor: 'lightGray',
      width: '100%',
    },
    inputField: {
      height: '50px',
      // width: '90%',
      mt: '1rem',
      mb: '1rem',
      '& .MuiInputBase-root': {
        borderRadius: '10px',
        height: '50px',
        // width: '90%',
        mx: 'auto',
      }
    },
    button: {
      borderRadius: '10px',
      padding: 0,
      // width: '90%',
    },
    buttonContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    inlineInputField: {
      display: 'flex',
      mb: '1rem',
      gap: '1rem'
    },
    textBold: {
     fontWeight: 500
    },
    smallText: {
      fontSize: '0.75rem',
    },
    adornmentIcon: {
      color: 'lightGrey',
      fontSize: '1.8rem'
    }
  }
  
  const handleMonthChange = (event) => {
    const onlyNums = event.target.value.replace(/[^0-9]/g, '')
    if (onlyNums.length < 2) {
      setMonthError(null)
      setExpiryDate(prevState => {
        return {
          ...prevState,
          month: onlyNums,
        }
      })
    } else if (onlyNums.length === 2) {
      const number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
      if (Number(number) > 12) {
        setMonthError('Incorrect month')
      } else {
        setMonthError(null)
      }
      setExpiryDate(prevState => {
        return {
          ...prevState,
          month: number,
        }
      })
    }
    console.log('The value of time is >>> ', expiryDate.month)  
  }

  const handleYearChange = (event) => {
    const onlyNums = event.target.value.replace(/[^0-9]/g, '')
    if (onlyNums.length < 2) {
      setYearError(null)
      setExpiryDate(prevState => {
        return {
          ...prevState,
          year: onlyNums,
        }
      })
    } else if (onlyNums.length === 2) {
      const number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
      if (Number(number) < 22) {
        setYearError('Incorrect year')
      } else {
        setYearError(null)
      }
      setExpiryDate(prevState => {
        return {
          ...prevState,
          year: number,
        }
      })
    }
    console.log('The value of time is >>> ', expiryDate.month)
  }

  const handleCvvChange = (event) => {
    const onlyNums = event.target.value.replace(/[^0-9]/g, '')
    if (onlyNums.length < 3) {
      setCvvError('Too short CVV')
      if (onlyNums.length === 0) {
        setCvvError(null)
      }
      setCvv(onlyNums)
    } else if (onlyNums.length === 3) {
      setCvvError(null)
      const number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
      setCvv(number)
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setCardNumber(event.target.value)
    const { message, success, type } = checkCreditCard(event.target.value)
    let companyLogo = null
    switch (type) {
      case 'Visa':
      case 'VisaElectron':
        companyLogo = visa
        break
      case 'MasterCard':
      case 'Maestro':
        companyLogo = mastercard
        break
      case 'DinersClub':
        companyLogo = diners
        break
      case 'AmEx':
        companyLogo = amex
        break
      case 'Discover':
        companyLogo = discover
        break
      default:
        break
    }
    setCardCompany(companyLogo)
    setCardError(message)
    console.log(event.target.value, message, success, type)
  }

  const handleClick = () => {
    navigate(nextPath)
  }
  
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
    >
      <Box sx={styles.modal}>
        <IconButton sx={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography sx={styles.modalTitle} id="modal-modal-title">
          Credit / Debit Card
        </Typography>
        <Box sx={styles.creditCardIcons}>
          <img src={visa} alt="visa icon" />
          <img src={mastercard} alt="mastercard icon" />
          <img src={amex} alt="amex icon" />
          <img src={diners} alt="diners icon" />
          <img src={discover} alt="discover icon" />
        </Box>
        <Divider sx={styles.divider} />
        <TextField 
          sx={styles.inputField} 
          size="medium"
          label="Name on Card" 
          onChange={handleNameChange}
          value={name}
          helperText={name !== '' && name.length < 3 ? 'Please enter you name' : ''}
          error={name !== '' && name.length < 3}
          fullWidth
          />
        <TextField 
          sx={styles.inputField} 
          size="medium"
          label="Card Number" 
          onChange={handleNumberChange}
          value={cardNumber}
          InputProps={{
            endAdornment: (
              cardCompany === null ?
              <CreditCardIcon sx={styles.adornmentIcon} /> :
              <img src={cardCompany} alt="card logo" />
            )
          }}
          helperText={cardError}
          error={cardError !== null}
          fullWidth
        />
        <Box sx={styles.inlineInputField}>
          <TextField 
            label="MM" 
            onChange={handleMonthChange} 
            value={expiryDate.month} 
            sx={styles.inputField} 
            helperText={monthError}
            error={monthError !== null}
          />
          <TextField 
            label="YY" 
            onChange={handleYearChange} 
            value={expiryDate.year} 
            sx={styles.inputField}
            helperText={yearError}
            error={yearError !== null}
          />
          <TextField 
            sx={styles.inputField} 
            size="medium"
            label="CVV" 
            onChange={handleCvvChange}
            value={cvv}
            helperText={cvvError}
            error={cvvError !== null}
          />
        </Box>
        <Typography sx={{ ...styles.smallText, alignSelf: 'start' }}>You will be charged only <span style={styles.textBold}>5$ for your 7-day trial.</span></Typography>
        <Typography sx={styles.smallText}>We'll <span style={styles.textBold}>email you a reminder</span> before your trial period ends. Cancel anytime.</Typography>
        <Button disabled={!formIsValid} sx={styles.button} onClick={handleClick} fullWidth>
          <Box sx={styles.buttonContent}>
            <LockIcon />
            <Typography>Start 7-Day Trial</Typography>
          </Box>
        </Button>
      </Box>
    </Modal>
  )
}

export default CreditCardModal