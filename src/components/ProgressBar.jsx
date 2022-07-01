import {
  Typography
} from '@mui/material'

import CheckIcon from '@mui/icons-material/Check';

const ProgressBar = ({ color, completed, index, isFirst = false}) => {
  const styles = {
    container: {
      height: 6,
      width: '100%',
      backgroundColor: "#e5eafa",
      position: 'relative',
    },
    fillBar: {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: color,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 0.2s ease-in-out'
    },
    label: {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    },
    endCircle: {
      backgroundColor: completed !== 100 ? '#e5eafa' : color,
      width: 16,
      height: 16,
      borderRadius: 10,
      position: 'absolute',
      right: 0,
      top: -5,
      transition: 'background-color 0.15s ease-in-out'
    },
    startCircle: {
      backgroundColor: color,
      width: 16,
      height: 16,
      borderRadius: 10,
      position: 'absolute',
      left: -8,
      top: -5,
    },
    index: {
      fontSize: '0.7rem'
    },
    icon: {
      color: 'white',
      fontSize: '0.75rem',
    }
  }
  
  return (
    <div style={styles.container}>
      {isFirst && <div style={styles.startCircle}></div>}
      <div style={styles.fillBar}></div>
      <div style={styles.endCircle}>
        {completed !== 100 ?
          <Typography sx={styles.index} >{index}</Typography> :
          <CheckIcon sx={styles.icon} />
        }
      </div>
    </div>
  )
}

export default ProgressBar