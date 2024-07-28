import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext<any>(null);

const UserProvider = UserContext.Provider;

// export const CurrentUserContext = () => useContext(UserContext);

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
