import { useState,useEffect,useMemo } from "react";
import AuthContext from "./AuthContext";
import { User } from "../Interfaces/types";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
  
    const login = (userData: User) => {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem('user');
    };
  
    const isLoggedIn = useMemo(() => user !== null, [user]);
  
    const isTenant = useMemo(() => isLoggedIn && user?.role === 'tenant', [isLoggedIn, user]);
    const isManager = useMemo(() => isLoggedIn && user?.role === 'manager', [isLoggedIn, user]);
  
    return (
      <AuthContext.Provider
        value={{
          user,
          isLoggedIn,
          isTenant,
          isManager,
          login,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;