import {
  Box,
  Typography,
  Divider,
  IconButton,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useNavigate } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const QuestionHeader = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const styles = {
    progressBars: {
      display: 'flex',
      my: '1.2rem',
      px: '1rem'
    },
    header: {
      position: 'relative',
    },
    backButton: {
      position: 'absolute',
      left: 0,
      top: -10,
      cursor: 'default'
    },
    buttonIcon: {
      fontSize: '1rem',
    },
    sectionTitle: {
      color: theme => theme.palette.primary.main,
      fontSize: '0.9rem',
      fontWeight: 500
    },
    divider: {
      height: '0.5rem',
      borderColor: '#dee5f9'
    },
  }

  return (
    <>
      <Box sx={styles.progressBars}>
        <ProgressBar color={theme.palette.primary.main} completed={Math.abs(100)} index={1} isFirst/>
        <ProgressBar color={theme.palette.secondary.orange} completed={Math.abs(100)} index={2} />
        <ProgressBar color={theme.palette.secondary.green} completed={Math.abs(50)} index={3} />
      </Box>
      <Box sx={styles.header}>
        <IconButton sx={styles.backButton} onClick={() => navigate(-1)} disableRipple>
          <ArrowBackIosNewIcon sx={styles.buttonIcon} />
        </IconButton>
        <Typography sx={styles.sectionTitle}>Your Profile</Typography>
        <Divider sx={styles.divider} />
      </Box>
    </>
  )
}

export default QuestionHeader