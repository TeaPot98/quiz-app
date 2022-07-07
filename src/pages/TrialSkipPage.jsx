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
import TrialSkipOffer from '../components/TrialSkipOffer'

const TrialSkipPage = () => {
  const theme = useTheme()
  const styles = {
    container: {
      py: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
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
      gap: '1rem',
      py: '1rem'
    },
    heading: {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    text: {
      fontSize: '1.1rem'
    },
    textBlue: {
      color: theme.palette.primary.main,
      fontWeight: 500
    },
    offerContainer: {
      display: 'flex',
      width: '100%',
      gap: '0.5rem',
      alignItems: 'end'
    }
  }
  
  return (
    <Box sx={styles.container}>
      <img src={logo} alt="logo" />
      <Divider sx={styles.divider} />
      <Box sx={styles.content}>
        <Typography sx={styles.heading}>Not planning on looking back?</Typography>
        <Typography sx={styles.text}>Get a head and take <span style={styles.textBlue}>33% off your first 1-week plan</span> by skipping the trial and starting today!</Typography>
        <Box sx={styles.offerContainer}>
          <TrialSkipOffer
            price="$19"
            totalSavings="$0"
            buttonContent="Start trial"
            trial
          />
          <TrialSkipOffer 
            price="$12.73"
            totalSavings="$6.27"
            buttonContent="Pay now and skip trial"
            savingPercent={30}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default TrialSkipPage