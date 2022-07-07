import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Modal,
  Box,
  Typography
} from '@mui/material'
import EmailModal from './modals/EmailModal'

const EmailChip = ({ email }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const styles = {
    container: {
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '2px 16px 2px 2px',
      borderRadius: '50px',
      fontSize: '0.9rem',
      gap: '8px',
      fontWeight: 500,
    },
    initial: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.button.secondary,
      borderRadius: 'inherit',
      height: '32px',
      width: '32px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1rem',
      
    },
  }

  const openEmailModal = () => {
    setOpen(true)
  }

  const closeEmailModal = () => {
    setOpen(false)
  }
  
  return (
    <>
      <div onClick={openEmailModal} style={styles.container}>
        <div style={styles.initial}>{email[0].toUpperCase()}</div>
        <span>{email}</span>
      </div>
      <EmailModal open={open} onClose={closeEmailModal} />
    </>
  )
}

export default EmailChip