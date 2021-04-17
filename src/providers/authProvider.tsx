import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../services/api";


interface UserLogged {
  user: {
    email: string;
    id: string;
    isActive: boolean;
  }
  token: string;
}

interface ProviderProp {
  children: ReactNode;
}

interface LoginInputs {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserLogged,
  errorMsg: string,
  userLogin: (userInputs: LoginInputs) => Promise<void>,
  userLogout: () => void
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: ProviderProp) {
  const history = useHistory()
  const [errorMsg, setErrorMsg] = useState('')
  const [user, setUser] = useState<UserLogged>(() => {
    const user = localStorage.getItem('@ecommerce:user');
    if (user) {
      return JSON.parse(user)
    } else {
      return {}
    }
  });


  useEffect(() => {
    if (user.token) {
      history.push('/')
    } else {
      if (history.location.pathname !== '/register') {
        history.push('/login')
      }
    }
  }, [user, history])


  async function userLogin(userInputs: LoginInputs) {
    try {
      const response = await api.post('/sessions', userInputs)
      const user = response.data
      setUser(user)
      setErrorMsg('')
      localStorage.setItem('@ecommerce:user', JSON.stringify(user))
    }
    catch (err) {
      setErrorMsg(err.response.data.message)
    }
  }

  function userLogout() {
    setUser({} as UserLogged)
    localStorage.setItem('@ecommerce:user', '')
  }

  return (
    <AuthContext.Provider value={{ user, userLogin, userLogout, errorMsg }}>
      {children}
    </AuthContext.Provider>
  )

}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}