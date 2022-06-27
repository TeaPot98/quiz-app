import { createContext, useReducer } from 'react'
import userDataReducer, { initialState } from './userDataReducer'

export const UserDataContext = createContext(initialState)

export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userDataReducer, initialState)

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

