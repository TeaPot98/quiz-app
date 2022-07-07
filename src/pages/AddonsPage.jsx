import {
  Box,
  Divider,
  Typography,
  Button as MuiButton,
} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'

import { useNavigate } from 'react-router-dom'

import star from '../assets/star.svg'
import calendar from '../assets/calendar.svg'
import EmailHeader from '../components/EmailHeader'
import Button from '../components/buttons/Button'

const AddonsPage = () => {
  const navigate = useNavigate()
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem',
      px: '1rem',
      '& > p': {
        fontSize: '0.9rem'
      }
    },
    grayDivider: {
      height: '0.7rem',
      borderColor: 'lightGray',
      width: '100%',
      mb: '0.7rem'
    },
    buttonContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    skipButton: {
      color: theme => theme.palette.primary.main,
      backgroundColor: theme => theme.palette.button.secondary,
      borderRadius: '30px',
      maxHeight: '30px',
      textTransform: 'none',
      alignSelf: 'end',
      '&:hover': {
        backgroundColor: theme => theme.palette.button.secondary,
      }
    },
    heading: {
      fontSize: '1.3rem !important', 
      fontWeight: 500, 
    },
    outlinedBox: {
      borderRadius: '10px',
      boxShadow: '0 0 15px lightGray',
      p: '1rem',
      '& > p': {
        fontSize: '0.9rem'
      }
    },
    text: {
      fontSize: '0.9rem'
    },
    subtitle: {
      fontSize: '1rem !important',
      fontWeight: 500,
    },
    listItem: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      mt: '1rem',
      '& > p': {
        fontSize: '0.9rem'
      }
    },
    textBold: {
      fontWeight: 500
    },
    textBlue: {
      fontWeight: 500,
      color: theme => theme.palette.primary.main
    },
    button: {
      width: '80%',
      my: 0,
    },
    disclaimer: {
      color: 'gray',
      fontSize: '0.8rem !important'
    }
  }
  
  return (
    <Box sx={styles.container}>
      <EmailHeader />
      <MuiButton 
        sx={styles.skipButton} 
        onClick={() => navigate('/access')}
        variant="contained"
        disableElevation
        disableRipple
      >
        Skip {'>'}
      </MuiButton>
      <Typography sx={styles.heading}>Get extra insights with our Premium Bundle</Typography>
      <Typography>Exclusive offer: recommended for get more insights about what future holds for you</Typography>
      <Box sx={styles.outlinedBox}>
        <Typography sx={styles.subtitle}>What your Premium Bundle will include:</Typography>
        <Box sx={styles.listItem}>
          <img src={star} alt="star icon" />
          <Typography>Guide to Modern Astrology</Typography>
        </Box>
        <Box sx={styles.listItem}>
          <img src={calendar} alt="star icon" />
          <Typography>Annual Forecast for 2022</Typography>
        </Box>
        <Divider sx={styles.grayDivider} />
        <Typography sx={styles.textBlue}>One-time price of $19!</Typography>
        <Typography>Original price is $45. Save 58%!</Typography>
        <Divider sx={styles.grayDivider} />
        <Typography>These plans are <span style={styles.textBold}>yours to keep</span> even if you decide Hint isn't right for you.</Typography>
      </Box>
      <Button onClick={() => navigate('/access')} sx={styles.button}>
        <Box sx={styles.buttonContent}>
          <LockIcon />
          <Typography>Buy Now</Typography>
        </Box>
      </Button>
      <Typography sx={styles.disclaimer}>*When you click, your account will be charged one payment of $19 for your Premium Bundle</Typography>
    </Box>
  )
}

export default AddonsPage