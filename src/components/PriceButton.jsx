import {
  Button
} from '@mui/material'

const PriceButton = ({ children, isActive = false, onClick, value }) => {
  const styles = {
    button: {
      height: '70px',
      width: '70px',
      borderRadius: '10px',
      backgroundColor: theme => isActive ? theme.palette.primary.main : theme.palette.button.light,
      color: isActive ? 'white' : 'black',
      fontWeight: 500,
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
      onClick={() => onClick(value)}
      disableElevation
      disableRipple
    >
        {children}
    </Button>
  )
}

export default PriceButton
