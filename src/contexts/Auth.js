import React, { useContext, useState, useEffect } from 'react';
import { altogic } from '../helpers/altogic';

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [session, setSession] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user and session
    const session = altogic.auth.getSession();
    const user = altogic.auth.getUser();
    setUser(user ?? null);
    setSession(session ?? null);
    setLoading(false);
  }, []);

  // Will be passed down to Signup, Login and Home components
  const value = {
    user,
    session,
    setUser,
    setSession,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
