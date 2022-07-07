import { useState } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import useUserData from '../hooks/useUserData'

import premiumBundle from '../assets/premium-bundle.svg'
import Button from '../components/buttons/Button'
import EmailChip from '../components/EmailChip'
import PricePicker from '../components/buttons/PricePicker'
import EmailHeader from '../components/EmailHeader'

const PremiumBundleSuccess = () => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const [price, setPrice] = useState(userData.get('pricePlan') ? userData.get('pricePlan').value : null)
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem',
      px: '1rem',
    },
    image: {
      marginTop: '3rem',
      marginBottom: '1rem'
    },
    heading: {
      fontWeight: 500,
      fontSize: '1.3rem'
    },
    boldText: {
      fontWeight: 500
    },
    button: {
      my: 0
    }
  }
  
  return (
    <Box sx={styles.container}>
      <EmailHeader />
      <img style={styles.image} src={premiumBundle} slt="a man running at a mailbox with a letter in hand" />
      <Typography sx={styles.heading}>Sit tight!</Typography>
      <Typography>We are wrapping up your Premium Bundle to deliver it <span style={styles.boldText}>to your email within the next 30 minutes or less.</span> After all, good things (and Premium Bundles!) come to those who wait.</Typography>
      <Button sx={styles.button} onClick={() => navigate('/addons')} fullWidth>Got it!</Button>
    </Box>
  )
}

export default PremiumBundleSuccess