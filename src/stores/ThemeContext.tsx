import React, {
  createContext,
  ReactNode,
  useState,
  ReactElement,
  Dispatch,
} from "react";

import { func } from "../constants";
import PrimaryTheme, { Theme } from "../theme/Themes/Theme";

interface ThemeContextType {
  theme: Theme;
  setTheme: Dispatch<any>;
}
interface Props {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: PrimaryTheme,
  setTheme: func.noop,
});

export const ThemeContextProvider = ({ children }: Props): ReactElement => {
  const [theme, setTheme] = useState<Theme>(PrimaryTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
