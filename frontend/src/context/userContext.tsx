import { createContext, useContext, useState } from "react";

interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  club: string;
  role: "user" | "admin";
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const userContext = createContext<UserContextType | undefined>(undefined);
export const useUser = () => {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
