import React, { createContext,  useState } from "react";

export const UserContext = createContext<any>(null);

const UserProvider = UserContext.Provider;

 

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{
    id: string;
    name: string;

    conversations?: any[];
  }>({
    id: "",
    name: "",

    conversations: [],
  });

  return <UserProvider value={{ user, setUser }}>{children}</UserProvider>;
};

export default UserContextProvider;
