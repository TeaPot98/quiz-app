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

const QuestionHeader = ({ question }) => {
  const navigate = useNavigate()
  const theme = useTheme()
  let completionFirst = 0
  let completionSecond = 0
  let completionThird = 0
  let textColor = theme.palette.primary.main
  switch (question.group) {
    case 'Personal Profile':
      completionFirst = question.order * 100
      textColor = theme.palette.primary.main
      break
    case 'Personality Traits':
    case 'Partner Profile':
      completionFirst = 100
      completionSecond = question.order * 100
      textColor = theme.palette.secondary.orange
      break
    default:
      completionFirst = 100
      completionSecond = 100
      completionThird = question.order * 100
      textColor = theme.palette.secondary.green
      break
  }
  const styles = {
    container: {
      textAlign: 'center'
    },
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
      color: textColor,
      fontSize: '0.9rem',
      fontWeight: 500
    },
    divider: {
      height: '0.5rem',
      borderColor: '#dee5f9'
    },
  }
  // console.log('Question group', question.group)

  return (
    <Box sx={styles.container}>
      <Box sx={styles.progressBars}>
        <ProgressBar color={theme.palette.primary.main} completed={Math.abs(completionFirst)} index={1} isFirst/>
        <ProgressBar color={theme.palette.secondary.orange} completed={Math.abs(completionSecond)} index={2} />
        <ProgressBar color={theme.palette.secondary.green} completed={Math.abs(completionThird)} index={3} />
      </Box>
      <Box sx={styles.header}>
        <IconButton sx={styles.backButton} onClick={() => navigate(-1)} disableRipple>
          <ArrowBackIosNewIcon sx={styles.buttonIcon} />
        </IconButton>
        <Typography sx={styles.sectionTitle}>{question.group}</Typography>
        <Divider sx={styles.divider} />
      </Box>
    </Box>
  )
}

export default QuestionHeader