export const initialState = new Map()

const userDataReducer = (state, action) => {
  const { type, payload } = action
  
  switch (type) {
    case 'SET_ANSWER':
      let newState = new Map(state)
      newState.set(payload.name, payload.value)
      return newState
    default:
      throw new Error(`No case for type ${type} found in userDataReducer`);
  }
}

export default userDataReducer