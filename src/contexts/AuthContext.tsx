
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  avatarUrl?: string;
  department?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      // TODO: Replace with actual Supabase session check
      // const { data: { session } } = await supabase.auth.getSession();
      // if (session) {
      //   setUser(session.user);
      // }
      
      // Temporary: Check localStorage for demo purposes
      const storedUser = localStorage.getItem('ans_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Session check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual Supabase auth
      // const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      // if (error) throw error;
      // setUser(data.user);
      
      // Temporary demo implementation
      const demoUser: User = {
        id: '1',
        email,
        username: email.split('@')[0],
        fullName: 'Demo User',
      };
      setUser(demoUser);
      localStorage.setItem('ans_user', JSON.stringify(demoUser));
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual Supabase auth
      // const { data, error } = await supabase.auth.signUp({ email, password });
      // if (error) throw error;
      
      // Temporary demo implementation
      console.log('Sign up:', email, password);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      // TODO: Replace with actual Supabase auth
      // await supabase.auth.signOut();
      
      setUser(null);
      localStorage.removeItem('ans_user');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}