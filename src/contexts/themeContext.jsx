import { createContext, useContext, useState } from "react";
export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, SetTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "true";
  });
  return (
    <ThemeContext.Provider value={{ theme, SetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
