import { useTheme } from '@mui/material/styles'

const LoadingBar = ({ completed = 0, height = 50 }) => {
  const theme = useTheme()
  
  const styles = {
    container: {
      backgroundColor: theme.palette.button.outline,
      width: '90%',
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
      backgroundColor: theme.palette.primary.main,
      borderRadius: 'inherit',
      transition: 'width 0.15s ease-in-out'
    },
    text: {
      color: 'white',
      zIndex: 5
    }
  }
  
  return (
    <div style={styles.container}>
      <div style={styles.filler}></div>
      <div style={styles.text}>{Math.floor(completed)} %</div>
    </div>
  )
}

export default LoadingBar