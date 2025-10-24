import { createContext, useState } from "react";

export const HomeContext = createContext({});
export const HomeContextProvider = ({ children }) => {
  const [Home, showHome] = useState(true);
  return (
    <HomeContext.Provider value={{ Home, showHome }}>
      {children}
    </HomeContext.Provider>
  );
};
