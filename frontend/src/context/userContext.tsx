import { createContext, useContext, useState } from "react";

interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  club: string;
  role: "user" | "admin";
}

interface Scores {
  id: number;
  userid: string;
  scores: {
    date: string;
    scores: number[];
  }[];
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  errorMsg: string | null;
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>;
  successMsg: string | null;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string | null>>;
  scores: Scores | null;
  setScores: React.Dispatch<React.SetStateAction<Scores | null>>;
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
  const [scores, setScores] = useState(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        errorMsg,
        setErrorMsg,
        successMsg,
        setSuccessMsg,
        scores,
        setScores,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
