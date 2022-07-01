import {
  Box,
  Typography,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import useUserData from '../hooks/useUserData'

import QuestionButton from './QestionButton'

const Question = ({ question }) => {
  const navigate = useNavigate()
  const {userData, answers, addAnswer, addUserData, setAnswers, setUserData} = useUserData()
  console.log('The data from question >>>', answers)
  console.log('User data >>> ', userData)
  
  const styles = {
    container: {
      textAlign: 'center',
      mb: '2rem'
    },
    question: {
      my: '2rem',
      fontWeight: 500
    },
  }

  const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
  let userAge

  if ((question.path === 'profile-problem' || 'profile-problem-relationship') && (userData.get('userDateOfBirth'))) {
    userAge = getAge(`${userData.get('userDateOfBirth').year}-${userData.get('userDateOfBirth').month}-${userData.get('userDateOfBirth').day}`)
  }
  
  const renderQuestionText = () => {
    switch (question.path) {
      case 'profile-problem':
        return (
          <Typography sx={styles.question}>
            {`Single ${userData.get('gender') === 'Male' ? 'men' : 'women'} ${userAge > 20 ? `in their ${userAge.toString()[0]}0s` : 'under 20s'} ${userData.get('hasChildren') ? 'who have children' : ''} need a slightly different approach to ${userData.get('goal') !== 'Both' ? userData.get('goal') === 'Find my perfect partner' ? 'find their perfect partner' : 'understand themselves better' : 'find their perfect partner and understand themselves better'}. But first, how did you feel in your last relationship?`}
          </Typography>
        )
      case 'profile-problem-relationship':
        return (
          <Typography sx={styles.question}>
            {`${userData.get('gender') === 'Male' ? 'Men' : 'Women'} ${userAge > 20 ? `in their ${userAge.toString()[0]}0s` : 'under 20s'} ${userData.get('hasChildren') ? 'who have children' : ''} need a slightly different approach to ${userData.get('goal') !== 'Both' ? userData.get('goal') === 'Fix relationship problems' ? 'fix their relationship problems' : 'increase relationship satisfaction' : 'fix their relationship problems and increase relationship satisfaction'}. Which statement best describes you?`}
          </Typography>
        )
      default:
        return question.text.map(t => 
          <Typography key={t} sx={styles.question}>{t}</Typography>
        )
    }
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
      case 'goal-single':
        addUserData({
          name: 'goal',
          value: answer.text
        })
        break
      case 'goal-inrelationship':
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
    
    setTimeout(() => {
      navigate(`/${answer.nextPath}`)
    }, 300);
  }
  
  return (
    <Box sx={styles.container}>
      {renderQuestionText()}
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