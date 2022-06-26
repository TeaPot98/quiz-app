import { useContext } from 'react'
import { UserDataContext } from '../state/UserDataContext'

const useUserData = () => {
  const context = useContext(UserDataContext)

  if (context === undefined) {
    throw new Error('useUserData must be used within UserDataContext')
  }

  return context
}

export default useUserData