import { useState } from 'react'
import {
  Box,
  TextField,
} from '@mui/material'
import TimeSwitchButton from './TimeSwitchButton'

const TimeInputField = () => {
  const [isAM, setAM] = useState(false)
  const [isPM, setPM] = useState(false)
  const [hour, setHour] = useState('')
  const [minutes, setMinutes] = useState('')
  const styles = {
    container: {
      display: 'flex',
      gap: '3px',
      justifyContent: 'center',
    },
    timeInput: {
      maxWidth: '200px',
      borderRadius: '25px',
      '&.MuiTextField-root': {
        width: '120px',
        // height: '40px'
      },
      '& .MuiInputBase-root': {
        borderRadius: '10px',
        height: '50px'
      }
    },
  }

  const handleHourChange = (event) => {
    // const onlyNums = event.target.value.replace(/[^0-9]/g, '')
    // if (onlyNums.length ) {
    //   setHour()
    // }
  }
  
  return (
    <Box sx={styles.container}>
      <TextField placeholder="HH" onChange={handleHourChange} sx={styles.timeInput} />
      <TextField placeholder="MM"  sx={styles.timeInput} />
      <TimeSwitchButton onClick={() => {setAM(true); setPM(false)}} isActive={isAM}>AM</TimeSwitchButton>
      <TimeSwitchButton onClick={() => {setAM(false); setPM(true)}} isActive={isPM}>PM</TimeSwitchButton>
    </Box>
  )
}

export default TimeInputField