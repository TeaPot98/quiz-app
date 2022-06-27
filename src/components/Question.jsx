import {
  Box,
  Typography,
  Divider,
  IconButton,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import { useNavigate } from 'react-router-dom'
import useUserData from '../hooks/useUserData'

import ProgressBar from './ProgressBar'
import QuestionButton from './QestionButton'

const Question = ({ question }) => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  console.log('The data from question >>>', answers)
  // if (data.has(question.path)) {
  //   console.log('The data first .>', data[0])
  // }
  
  const styles = {
    container: {
      textAlign: 'center',
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
      color: theme => theme.palette.primary.main,
      fontSize: '0.9rem',
      fontWeight: 500
    },
    divider: {
      height: '0.5rem',
      borderColor: '#dee5f9'
    },
    question: {
      my: '2rem'
    },
  }

  const handleAnswerSelect = (event, answer) => {
    event.preventDefault()
    addAnswer({
      name: question.path, 
      value: [{id: answer.id, text: answer.text}]
    })

    // inRelationship, gender, age, hasChildren, goal, dateOfBirth, timeOfBirth
    switch (question.path) {
      case 'relationship-status':
        addUserData({
          name: 'inRelationship',
          value: answer.text === 'Single' ? false : true
        })
        break
      case 'goal-single' || 'goal-inrelationship':
        addUserData({
          name: 'goal',
          value: answer.text
        })
        break
      case 'gender':
        addUserData({
          name: 'gender',
          value: answer.text
        })
        break
      case 'profile-parent': 
        addUserData({
          name: 'hasChildren',
          value: answer.text === 'Yes' ? true : false
        })
        break
      default:
        break
    }
    
    navigate(`/${answer.nextPath}`)
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.progressBars}>
        <ProgressBar color="#066FDE" completed={Math.abs(100)} index={1} isFirst/>
        <ProgressBar color="#f75c03" completed={Math.abs(100)} index={2} />
        <ProgressBar color="#04a777" completed={Math.abs(50)} index={3} />
      </Box>
      <Box sx={styles.header}>
        <IconButton sx={styles.backButton} onClick={() => navigate(-1)} disableRipple>
          <ArrowBackIosNewIcon sx={styles.buttonIcon} />
        </IconButton>
        <Typography sx={styles.sectionTitle}>Your Profile</Typography>
        <Divider sx={styles.divider} />
      </Box>
      {question.text.map(t => 
        <Typography key={t} sx={styles.question}>{t}</Typography>
      )}
      {question.answers.map(a => 
        <QuestionButton 
          key={a.id} 
          href={`/${a.nextPath}`}
          onClick={(event) => handleAnswerSelect(event, a)}
          isSelected={(() => {
            if (answers.has(question.path) && answers.get(question.path)[0].id === a.id) {
              return true
            }
            return false
          })()}
        >
          {a.text}
        </QuestionButton>
      )}
    </Box>
  )
}

export default Question