import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);
<h1>hii</h1>
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const signIn = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  const value = useMemo(() => ({ token, isAuthed: !!token, signIn, signOut }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
