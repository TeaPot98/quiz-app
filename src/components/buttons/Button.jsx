import { Typography } from '@mui/material'
import MuiButton from '@mui/material/Button'

const Button = ({ 
  children, 
  onClick = () => {}, 
  secondaryColor = false, 
  fullWidth = false, 
  disabled = false, 
  sx 
}) => {
  const styles = {
    button: {
      color: secondaryColor ? 'black' : 'white',
      backgroundColor: theme => secondaryColor ? theme.palette.button.secondary : theme.palette.button.main,
      fontSize: '0.9rem',
      width: fullWidth ? '100%' : '150px',
      borderRadius: '30px',
      minHeight: '60px',
      textTransform: 'none',
      my: '1rem',
      mx: '0.2rem',
      "&:hover": {
        color: secondaryColor ? 'black' : 'white',
        backgroundColor: theme => secondaryColor ? theme.palette.button.secondary : theme.palette.button.main
      },
      ...sx,
    }
  }

  // let hrefProps = href ? {
  //   component: Link,
  //   to: href
  // } : null
  
  return (
    <MuiButton 
      sx={styles.button} 
      className="my-button"
      variant="contained" 
      onClick={onClick}
      disabled={disabled}
      // {...hrefProps}
      disableRipple 
      disableElevation
    >
      <Typography component="div">
        {children}
      </Typography>
    </MuiButton>
  )
}

export default Button