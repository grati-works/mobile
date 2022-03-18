import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

import { api } from "../services/api";

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  updateUser: (user: User) => void;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(true);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      const { token, user } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // TODO: Save user on AsyncStorage
      setData({ ...user, token });
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      // TODO: Remove user from AsyncStorage
      setData({} as User);
    } catch (error) {
      throw new Error(error);
    }
  }

  function updateUser(user: User) {
    try {
      // TODO: Update user on AsyncStorage
      setData(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    
      async function loadUserData() {
        // TODO: Get user from AsyncStorage
      }
  
      loadUserData();
      
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        signOut,
        updateUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
