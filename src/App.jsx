import {
  Container,
  Typography,
  Button,
  Box,
} from '@mui/material';

import startImage from './assets/start-logo.png';

const App = () => {
  const styles = {
    container: {
      textAlign: 'center',
    },
    image: {
      width: '300px'
    },
    subtitle: {
      color: 'gray',
      lineHeight: '3rem',
    },
    title: {
      fontSize: '1.5rem',
    },
    button: {
      borderRadius: '2rem',
      height: '50px',
      textTransform: 'none',
      backgroundColor: '#066FDE',
      my: '1rem',
      elevation: 0,
      "&:hover": {
        backgroundColor: '#066FDE'
      }
    }
  };
  
  return (
    <Container maxWidth="xs">
      <Box sx={styles.container}>
        <img style={styles.image} src={startImage} alt="horoscope" />
        <Typography sx={styles.subtitle}>1-Minute Personal Assessment</Typography>
        <Typography sx={styles.title}>Understand Yourself and Improve Relationships With Astrology</Typography>
        <Button variant="contained" sx={styles.button} elevation={0} fullWidth disableRipple>Take test</Button>
      </Box>
    </Container>
  );
}

export default App;
