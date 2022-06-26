export const initialState = {}

const userDataReducer = (state, action) => {
  const { type, payload } = action
  
  switch (type) {
    case 'SET_ANSWER':
      return {
        ...state,
        [payload.name]: payload.value
      }
    default:
      throw new Error(`No case for type ${type} found in userDataReducer`);
  }
}

export default userDataReducer