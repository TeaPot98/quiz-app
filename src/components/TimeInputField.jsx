import { useState } from 'react'
import {
  Box,
  TextField,
} from '@mui/material'
import TimeSwitchButton from './buttons/TimeSwitchButton'

const TimeInputField = ({ value, onChange }) => {
  const [hourErrorMessage, setHourErrorMessage] = useState('')
  const [minuteErrorMessage, setMinuteErrorMessage] = useState('')
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
    const onlyNums = event.target.value.replace(/[^0-9]/g, '')
    if (onlyNums.length < 2) {
      setHourErrorMessage('')
      onChange({
        ...value,
        hour: onlyNums,
        valid: true
      })
    } else if (onlyNums.length === 2) {
      const number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
      if (Number(number) > 12) {
        setHourErrorMessage('Incorrect time')
      } else {
        setHourErrorMessage('')
      }
      onChange({
        ...value,
        hour: number,
        valid: !(Number(number) > 12)
      })
    }
    // console.log('The value of time is >>> ', value)
  }

  const handleMinuteChange = (event) => {
    const onlyNums = event.target.value.replace(/[^0-9]/g, '')
    if (onlyNums.length < 2) {
      setMinuteErrorMessage('')
      onChange({
        ...value,
        minutes: onlyNums,
        valid: true
      })
    } else if (onlyNums.length === 2) {
      const number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
      if (Number(number) > 59) {
        setMinuteErrorMessage('Incorrect time')
      } else {
        setMinuteErrorMessage('')
      }
      onChange({
        ...value,
        minutes: number,
        valid: !(Number(number) > 59)
      })
    }
  }

  const handleAMClick = () => {
    onChange({
      ...value,
      am: !value.am,
      pm: false
    })
  }

  const handlePMClick = () => {
    onChange({
      ...value,
      am: false,
      pm: !value.pm
    })
  }
  
  return (
    <Box sx={styles.container}>
      <TextField 
        placeholder="HH" 
        onChange={handleHourChange} 
        value={value.hour} 
        sx={styles.timeInput} 
        helperText={hourErrorMessage}
        error={hourErrorMessage !== ''}
      />
      <TextField 
        placeholder="MM" 
        onChange={handleMinuteChange} 
        value={value.minutes} 
        sx={styles.timeInput}
        helperText={minuteErrorMessage}
        error={minuteErrorMessage !== ''}
      />
      <TimeSwitchButton onClick={handleAMClick} isActive={value.am}>AM</TimeSwitchButton>
      <TimeSwitchButton onClick={handlePMClick} isActive={value.pm}>PM</TimeSwitchButton>
    </Box>
  )
}

export default TimeInputField