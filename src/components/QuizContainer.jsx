import { useParams } from 'react-router-dom'
import { useContext } from 'react'

import QuizContext from '../state/QuizContext'
import Question from './Question'
import TransitionPage from './TransitionPage'
import DateQuestion from './DateQuestion'
import PlaceQuestion from './PlaceQuestion'
import TimeQuestion from './TimeQuestion'
import ConnectingToDatabase from './ConnectingToDatabase'

const QuizContainer = () => {
  const { questionPath } = useParams()
  const questionMap = useContext(QuizContext)
  const question = questionMap[questionPath]
  // console.log(question)
  // console.log(Object.keys(questionMap))
  // console.log(questionMap)

  const renderContent = () => {
    switch (question.type) {
      case 'quiz-simple':
        return <Question question={question} />
      case 'transition-simple':
        return <TransitionPage content={question} />
      case 'quiz-date':
        return <DateQuestion question={question} />
      case 'quiz-place': 
        return <PlaceQuestion question={question} />
      case 'quiz-time': 
        return <TimeQuestion question={question} />
      case 'transition-loading':
        return <ConnectingToDatabase />
      default:
        break;
    }
  }

  return (
    <>
      {renderContent()}
    </>
  )
}

export default QuizContainer