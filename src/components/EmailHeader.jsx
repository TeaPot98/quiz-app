import {
  Box,
} from '@mui/material'

import EmailChip from './EmailChip'
import useUserData from '../hooks/useUserData'

const EmailHeader = () => {
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  const styles = {
    header: {
      backgroundColor: theme => theme.palette.divider,
      position: 'sticky',
      width: '100vw',
      top: 0,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      height: '3.5rem'
    },
  }
  
  return (
    <Box sx={styles.header}>
      <EmailChip email={userData.get('email') ? userData.get('email') : 'no email'} />
    </Box>
  )
}

export default EmailHeader