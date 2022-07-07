import {
  Box,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../components/buttons/Button'

const ThankYouPage = () => {
  const navigate = useNavigate()
  const styles = {
    container: {
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: '2rem'
    },
    text: {
      fontSize: '2rem',
    }
  }
  
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>Thank you page</Typography>
      <Button onClick={() => navigate('/')} >Back to Start</Button>
    </Box>
  )
}

export default ThankYouPage