const userDataReducer = (state, action) => {
  const { type, payload } = action
  
  switch (type) {
    case 'ADD_ANSWER':
      let newState = {...state}
      newState.answers.set(payload.name, payload.value)
      // Converting map to array and adding it to localStorage
      // localStorage.setItem('userData', JSON.stringify(Array.from(newState.entries())))
      localStorage.setItem('quizAppAnswers', JSON.stringify(Array.from(newState.answers.entries())))
      return newState
    case 'ADD_USER_DATA':
      let newState2 = {...state}
      newState2.userData.set(payload.name, payload.value)
      // Converting map to array and adding it to localStorage
      // localStorage.setItem('userData', JSON.stringify(Array.from(newState.entries())))
      localStorage.setItem('quizAppUserData', JSON.stringify(Array.from(newState2.userData.entries())))
      return newState2
    case 'SET_ANSWERS':
      let newState3 = {...state}
      newState3.answers = payload.answers
      return newState3
    case 'SET_USER_DATA':
      let newState4 = {...state}
      newState4.userData = payload.userData
      return newState4
    default:
      throw new Error(`No case for type ${type} found in userDataReducer`);
  }
}

export default userDataReducer