import { createContext, useReducer, useEffect } from 'react'
import userDataReducer from './userDataReducer'

const getInitialState = () => {
  const userData = localStorage.getItem('quizAppUserData')
  const answers = localStorage.getItem('quizAppAnswers')
  return {
    userData: userData ? new Map(JSON.parse(userData)) : new Map(),
    answers: answers ? new Map(JSON.parse(answers)) : new Map()
  }
}

export const UserDataContext = createContext(getInitialState())

export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userDataReducer, getInitialState())

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem('quizAppUserData')
  //   const storedAnswers = localStorage.getItem('quizAppAnswers')
  //   console.log(storedUserData)
  //   if (storedUserData) {
  //     // Convert data from localStorage into Map and saving it to state
  //     setUserData({
  //       userData: new Map(JSON.parse(storedUserData))
  //     })
  //   } 
  //   if (storedAnswers) {
  //     setAnswers({
  //       answers: new Map(JSON.parse(storedAnswers)),
  //     })
  //   }
  // }, [])

  const addAnswer = ({ name, value }) => {
    dispatch({
      type: 'ADD_ANSWER',
      payload: {
        name,
        value
      }
    })
  }

  const addUserData = ({ name, value }) => {
    dispatch({
      type: 'ADD_USER_DATA',
      payload: {
        name, 
        value
      }
    })
  }

  const setAnswers = (data) => {
    dispatch({
      type: 'SET_ANSWERS',
      payload: data
    })
  }

  const setUserData = (data) => {
    dispatch({
      type: 'SET_USER_DATA',
      payload: data
    })
  }

  const value = {
    userData: state.userData,
    answers: state.answers,
    addAnswer,
    addUserData,
    setAnswers,
    setUserData
  }

  return <UserDataContext.Provider
    value={value}
  >
    {children}
  </UserDataContext.Provider>
}

