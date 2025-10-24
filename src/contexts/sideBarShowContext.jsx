import { useState, createContext } from "react";

export const ShowSideBarContext = createContext({});

export function ShowSideBarProvider({ children }) {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <ShowSideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </ShowSideBarContext.Provider>
  );
}
