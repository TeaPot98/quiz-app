import { useState } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import useUserData from '../hooks/useUserData'

import Button from '../components/buttons/Button'
import EmailChip from '../components/EmailChip'
import PricePicker from '../components/buttons/PricePicker'
import EmailHeader from '../components/EmailHeader'

const PaymentPlanPage = () => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const [price, setPrice] = useState(userData.get('trialPrice') ? userData.get('trialPrice').value : null)
  console.log(userData)
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      px: '1rem'
    },
    header: {
      backgroundColor: theme => theme.palette.divider,
      position: 'sticky',
      width: '100vw',
      top: 0,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      height: '3.5rem'
    },
    boldText: {
      fontWeight: 500
    },
    blueText: {
      fontWeight: 500,
      color: theme => theme.palette.primary.main
    }
  }

  const handlePlanClick = () => {
    addUserData({
      name: 'trialPrice',
      value: {
        name: 'Trial Plan price',
        price: `$${price}`,
        currency: 'USD',
        value: price
      }
    })
    navigate('/payment')
  }

  const selectPrice = (p) => {
    setPrice(p)
  }
  
  return (
    <Box sx={styles.container}>
      <EmailHeader />
      <Typography>We've helped millions of people to have happier lives and better relationships, and we want to help you too.</Typography>
      <Typography sx={styles.boldText}>Money shouldn’t stand in the way of finding astrology guidance that finally works. So, choose an amount that you think is reasonable to try us out for one week.</Typography>
      <Typography sx={styles.blueText}>It costs us $13.21 to compensate our Hint employees for the trial, but please choose the amount you are comfortable with.</Typography>
      <PricePicker price={price} onChange={selectPrice} />
      <Button disabled={price === null} sx={{ mt: 0, mb: '2rem' }} onClick={handlePlanClick} fullWidth>See My Plan</Button>
    </Box>
  )
}

export default PaymentPlanPage