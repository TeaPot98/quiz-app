import { useState } from 'react'

import {
  Box,
  Divider,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CreditCardIcon from '@mui/icons-material/CreditCard'

import logo from '../assets/logo.svg'
import Button from '../components/buttons/Button'
import CreditCardModal from '../components/modals/CreditCardModal'

const PaymentPage = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const styles = {
    container: {
      py: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    divider: {
      height: '0.7rem',
      borderColor: '#dee5f9',
      width: '100%'
    },
    content: {
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    grayDivider: {
      height: '0.7rem',
      borderColor: 'lightGray',
      width: '100%',
      mb: '0.7rem'
    },
    specialOffer: {
      border: `1px solid ${theme.palette.secondary.green}`,
      color: theme.palette.secondary.green,
      padding: '8px 10px',
      borderRadius: '10px',
      fontSize: '0.9rem',
      fontWeight: 500,
      display: 'block',
      boxSizing: 'border-box',
      lineHeight: '18px',
      verticalAlign: 'baseline'
    },
    text: {
      fontSize: '0.9rem'
    },
    textBold: {
     fontWeight: 500
    },
    textGreen: {
      color: theme.palette.secondary.green
    },
    textGray: {
      fontSize: '0.9rem',
      color: 'gray'
    },
    textBlue: {
      color: theme.palette.primary.main
    },
    smallText: {
      fontSize: '0.75rem',
    },
    button: {
      borderRadius: '10px',
      height: '30px'
    },
    buttonContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    }
  }

  const openCreditCardModal = () => {
    setOpen(true)
  }

  const closeCreditCardModal = () => {
    setOpen(false)
  }
  
  return (
    <Box sx={styles.container}>
      <img src={logo} alt="logo" />
      <Divider sx={styles.divider} />
      <Box sx={styles.content}>
        <p style={styles.specialOffer}>Special Offer</p>
        <Typography sx={{ fontSize: '1.1rem', fontWeight: 500, mb: '1rem', mt: '0.5rem' }}>Start your 7-day trial</Typography>
        <Typography sx={{ ...styles.text, ...styles.textBold }}>No commitment. Cancel anytime.</Typography>
        <Divider sx={styles.grayDivider} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography sx={{ ...styles.text, ...styles.textBold }}>Total today</Typography>
          <Typography sx={{ ...styles.textBold, ...styles.textBlue, ...styles.text }}>$5</Typography>
        </Box>
        <Divider sx={styles.grayDivider} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <Box>
            <Typography sx={{ ...styles.text, ...styles.textBold, ...styles.textGreen }}>Code applied!</Typography>
            <Typography sx={styles.text}>Your cost perweek after trial</Typography>
            <Typography sx={{ ...styles.text, ...styles.textGray }}>Save $10 every week</Typography>
          </Box>
          <Typography sx={{ ...styles.text, textDecoration: 'line-through', ...styles.textGray }}>$29</Typography>
          <Typography sx={{ ...styles.textBold, ...styles.text }}>$19</Typography>
        </Box>
        <Divider sx={styles.grayDivider} />
        <Box sx={{ alignSelf: 'start' }}>
          <Typography sx={styles.smallText}>You will be charged only <span style={styles.textBold}>5$ for your 7-day trial.</span></Typography>
          <Typography sx={styles.smallText}>We'll <span style={styles.textBold}>email you a reminder</span> before your trial period ends. Cancel anytime.</Typography>
        </Box>
        <Button onClick={openCreditCardModal} sx={styles.button} fullWidth>
          <Box sx={styles.buttonContent}>
            <CreditCardIcon /><span>Credit / Debit Card</span>
          </Box>
        </Button>
        <CreditCardModal nextPath="/trial-skip" open={open} onClose={closeCreditCardModal} />
      </Box>
    </Box>
  )
}

export default PaymentPage