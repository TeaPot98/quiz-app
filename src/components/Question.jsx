import {
  Box,
  Typography,
  Button,
  Divider,
} from '@mui/material'

import ProgressBar from './ProgressBar'

const Question = () => {
  const styles = {
    container: {
      textAlign: 'center',
    },
    progressBars: {
      display: 'flex',

    },
    sectionTitle: {
      color: '#066FDE',
      fontSize: '0.9rem'
    },
    question: {
      my: '2rem'
    },
    button: {
      backgroundColor: '#066FDE',
      width: '90%',
      mx: 'auto',
      display: 'block',
      borderRadius: '10px',
      height: '60px',
      textTransform: 'none',
      my: '1rem',
      "&:hover": {
        backgroundColor: '#066FDE'
      }
    }
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.progressBars}>
        {[0, 1, 2].map(n =>
          <ProgressBar color="#066FDE" completed={Math.abs(50*-n)} index={n+1} />
        )}
      </Box>
      <Typography sx={styles.sectionTitle}>Your Profile</Typography>
      <Divider />
      <Typography sx={styles.question}>So we can get to know you better, tell us about your relationship status.</Typography>
      <Button sx={styles.button} variant="contained" disableRipple disableElevation>Single</Button>
      <Button sx={styles.button} variant="contained" disableRipple disableElevation>In a relationship</Button>
    </Box>
  )
}

export default Question