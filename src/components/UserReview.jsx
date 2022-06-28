import {
  Box,
  Typography,
} from '@mui/material'

const UserReview = ({ children, userName }) => {
  const styles = {
    container: {
      boxSizing: 'border-box',
      backgroundColor: theme => theme.palette.button.secondary,
      py: '1rem',
      px: '3rem',
      mx: 'auto',
      width: '90%',
    },
    reviewText: {
      fontSize: '0.9rem',
      lineHeight: '1.1rem'
    },
    name: {
      color: 'gray',
      mt: '0.5rem',
      fontSize: '0.9rem'
    }
  }
  
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.reviewText}>{children}</Typography>
      <Typography sx={styles.name}>{userName}</Typography>
    </Box>
  )
}

export default UserReview