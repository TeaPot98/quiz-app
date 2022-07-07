import {
  Box,
  Typography
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import Button from './buttons/Button'

const TrialSkipOffer = ({ price, totalSavings, savingPercent = 0, trial = false, buttonContent, onClick }) => {
  const navigate = useNavigate()
  const styles = {
    container: {
      // height: '300px',
      border: theme => `2px solid ${savingPercent !== 0 ? theme.palette.primary.main : 'lightGray'}`,
      borderTop: savingPercent !== 0 ? '0' : '2px solid lightGray',
      borderRadius: '10px',
      boxSizing: 'content-box',
    },
    content: {
      pt: '1rem',
      flex: 1,
    },
    feature: {
      fontSize: '1.1rem',
      fontWeight: 500,
      mx: '1rem'
    },
    featureName: {
      color: 'gray',
      mt: '1rem'
    },
    button: {
      borderRadius: '10px',
    },
    saving: {
      display: savingPercent !== 0 ? 'block' : 'none',
      boxSizing: 'content-box',
      backgroundColor: theme => theme.palette.primary.main,
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      p: '0.4rem',
      '& p': {
        fontSize: '0.9rem',
        color: 'white',
        fontWeight: 500
      }
    }
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.saving}>
        <Typography>SAVE {savingPercent}%</Typography>
      </Box>
      <Box sx={styles.content}>
        <Typography sx={styles.feature}>{price} for 1-week plan</Typography>
        <Typography sx={styles.featureName}>Total savings</Typography>
        <Typography sx={styles.feature}>{totalSavings}</Typography>
        <Typography sx={styles.featureName}>7-day trial</Typography>
        <Typography sx={styles.feature}>{trial ? 'yes' : 'no'}</Typography>
        <Button onClick={onClick} sx={styles.button}>{buttonContent}</Button>
      </Box>
    </Box>
  )
}

export default TrialSkipOffer