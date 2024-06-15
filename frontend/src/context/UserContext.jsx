import { createContext, useState } from "react";

// Create the User Context
export const UserContext = createContext();

// Create the User Provider component
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
