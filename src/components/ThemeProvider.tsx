import React, { ReactNode, createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../utils/colors';

// Define the type for the theme context
interface ThemeContextType {
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
}

// Create the theme context
const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

type ThemeType = ThemeContextType & {
  children: ReactNode;
};

// Theme provider component
export const ThemeProvider: React.FC<ThemeType> = ({ children }) => {
  const [theme, setTheme] = useState<typeof lightTheme | typeof darkTheme>(
    lightTheme,
  );

  // Function to toggle between light and dark themes
  const changeTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme
export const useTheme = () => useContext(ThemeContext);
