import { createContext, useContext, useState, useEffect } from "react"
import { api } from '../services/api'


export const AuthContext = createContext({})

export function AuthProvider({children}) {
  const [user, setUser] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const userStorage = localStorage.getItem('User');
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser('')
    }

    const userToken = localStorage.getItem('Token');
    if (userToken) {
      api.defaults.headers.Authorization = `Bearer ${userToken}`;
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }
  }, []);
  return (
    <AuthContext.Provider value={{user, setUser, authenticated, setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);