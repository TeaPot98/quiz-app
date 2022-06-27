import {
  Button
} from '@mui/material'

const TimeSwitchButton = ({ children, isActive = false, onClick}) => {
  const styles = {
    button: {
      height: '50px',
      borderRadius: '10px',
      backgroundColor: theme => isActive ? theme.palette.primary.main : theme.palette.button.light,
      color: isActive ? 'white' : 'black',
      fontWeight: 'regular',
      fontSize: '1rem',
      transition: 'color, background-color 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: theme => isActive ? theme.palette.primary.main : theme.palette.button.light,
      }
    }
  }

  return (
    <Button 
      sx={styles.button} 
      variant="contained" 
      onClick={onClick}
      disableElevation
      disableRipple
    >
        {children}
    </Button>
  )
}

export default TimeSwitchButton