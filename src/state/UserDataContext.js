import { createContext, useReducer } from 'react'
import userDataReducer, { initialState } from './userDataReducer'

export const UserDataContext = createContext(initialState)

export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userDataReducer, initialState)

  const setAnswer = ({name, value}) => {
    dispatch({
      type: 'SET_ANSWER',
      payload: {
        name,
        value
      }
    })
  }

  const value = {
    data: state,
    setAnswer
  }

  return <UserDataContext.Provider
    value={value}
  >
    {children}
  </UserDataContext.Provider>
}

