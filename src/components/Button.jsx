import MuiButton from '@mui/material/Button'

import { Link } from 'react-router-dom'

const Button = ({ children, onClick = () => {}, secondaryColor = false, fullWidth = false, href = null, disabled = false, sx }) => {
  const styles = {
    button: {
      color: secondaryColor ? 'black' : 'white',
      backgroundColor: theme => secondaryColor ? theme.palette.button.secondary : theme.palette.button.main,
      fontSize: '0.9rem',
      width: fullWidth ? '100%' : '150px',
      borderRadius: '30px',
      height: '60px',
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
      variant="contained" 
      onClick={onClick}
      disabled={disabled}
      // {...hrefProps}
      disableRipple 
      disableElevation
    >
      {children}
    </MuiButton>
  )
}

export default Button