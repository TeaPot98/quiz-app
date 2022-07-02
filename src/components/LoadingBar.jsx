import { Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const LoadingBar = ({ completed = 0, height = 50, label = '', color, backgroundColor, isSlim }) => {
  const theme = useTheme()
  
  const styles = {
    wrapper: {
      mx: 'auto',
      width: '90%',
    },
    container: {
      backgroundColor: backgroundColor ? backgroundColor : theme.palette.button.outline,
      borderRadius: '10px',
      position: 'relative',
      height: `${height}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    filler: {
      left: 0,
      position: 'absolute',
      width: `${completed}%`,
      height: 'inherit',
      backgroundColor: color ? color : theme.palette.primary.main,
      borderRadius: 'inherit',
      transition: isSlim ? 'width 0.15s ease-in-out' : 'width 0.01s ease-in-out'
    },
    labelContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      my: '0.5rem'
    },
    text: {
      color: 'white',
      zIndex: 5
    },
    label: {
      color: color ? color : theme.palette.primary.main,
      fontWeight: completed > 0 && completed < 100 ? 500 : 'inherit'
    }
  }
  
  return (
    <div style={styles.wrapper}>
    {isSlim && 
      <Box sx={styles.labelContainer}>
        <Typography sx={styles.label}>{label}</Typography>
        <Typography sx={styles.label}>{Math.floor(completed)} %</Typography>
      </Box>
    }
    <div style={styles.container}>
      <div style={styles.filler}></div>
      {!isSlim && <Typography sx={styles.text}>{Math.floor(completed)} %</Typography>}
    </div>
    </div>
  )
}

export default LoadingBar