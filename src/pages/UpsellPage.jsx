import {
  Box,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../components/buttons/Button'

const UpsellPage = () => {
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
      <Typography sx={styles.text}>Your upsell page</Typography>
      <Button onClick={() => navigate('/payment')} >Continue</Button>
    </Box>
  )
}

export default UpsellPage