import React,{useState} from 'react' 
export const UserDataContext = React.createContext(null)
function UserContext({children}) {
    const API_URL = 'https://6486a3c8beba6297278efd7e.mockapi.io/users'
  return <UserDataContext.Provider value={{API_URL}}>
    {children}
  </UserDataContext.Provider>
}

export default UserContext