import { useParams } from 'react-router-dom'
import { useContext } from 'react'

import QuizContext from '../state/QuizContext'
import Question from './Question'
import TransitionPage from './TransitionPage'
import DateQuestion from './DateQuestion'
import PlaceQuestion from './PlaceQuestion'
import TimeQuestion from './TimeQuestion'
import ConnectingToDatabase from './ConnectingToDatabase'
import MultipleQuestion from './MultipleQuestion'
import QuestionHeader from './QuestionHeader'

const QuizContainer = () => {
  const { questionPath } = useParams()
  const questionMap = useContext(QuizContext)
  const question = questionMap[questionPath]

  const renderContent = () => {
    switch (question.type) {
      case 'quiz-simple':
        return <Question question={question} />
      case 'quiz-multiple':
        return <MultipleQuestion question={question} />
      case 'quiz-date':
        return <DateQuestion question={question} />
      case 'quiz-place': 
        return <PlaceQuestion question={question} />
      case 'quiz-time': 
        return <TimeQuestion question={question} />
      case 'transition-simple':
        return <TransitionPage content={question} />
      case 'transition-loading':
        return <ConnectingToDatabase />
      default:
        break;
    }
  }

  const renderHeader = () => {
    switch (question.type) {
      case 'quiz-simple':
      case 'quiz-multiple':
      case 'quiz-date':
      case 'quiz-place': 
      case 'quiz-time': 
        return <QuestionHeader question={question} />
      default:
        break
    }
  }

  return (
    <>
      {renderHeader()}
      {renderContent()}
    </>
  )
}

export default QuizContainer