import { createContext } from "react";
import { User } from "../Interfaces/types";

interface AuthContextProps {
    user: User | null;
    isLoggedIn: boolean;
    isTenant: boolean;
    isManager: boolean;
    login: (userData: User) => void;
    logout: () => void;
  }

  const AuthContext = createContext<AuthContextProps | null>(null);

  export default AuthContext;