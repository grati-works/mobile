import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from "../services/api";

interface User {
  id: string;
  email: string;
  name: string;
  profile_picture: string;
  token: string;
  refresh_token: string;
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

      const { token, refresh_token, user } = response.data.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const userInfo = { ...user, token, refresh_token };

      await AsyncStorage.setItem("@Grati:user", JSON.stringify(userInfo));
      await AsyncStorage.setItem("@Grati:token", token);
      await AsyncStorage.setItem("@Grati:refresh_token", refresh_token);

      setData(userInfo);

      return userInfo;
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      // TODO: Remove user from AsyncStorage
      await AsyncStorage.removeItem("@Grati:user");
      await AsyncStorage.removeItem("@Grati:token");
      await AsyncStorage.removeItem("@Grati:refresh_token");
      
      setData({} as User);
    } catch (error) {
      throw new Error(error);
    }
  }

  function updateUser(user: User) {
    try {
      setData(user);

      AsyncStorage.setItem("@Grati:user", JSON.stringify(user));
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
      async function loadUserData() {
        // TODO: Get user from AsyncStorage
        const user = await AsyncStorage.getItem("@Grati:user");
        const token = await AsyncStorage.getItem("@Grati:token");
        const refresh_token = await AsyncStorage.getItem("@Grati:refresh_token");

        if (user && token && refresh_token) {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          setData(JSON.parse(user));
        }
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
