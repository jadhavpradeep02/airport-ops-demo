import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// In-memory demo access only; replace with real authentication when required.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const signIn = (role) => setUser({ name: 'Demo User', initials: 'DU', role });
  const signOut = () => setUser(null);

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
