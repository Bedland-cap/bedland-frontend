import { createContext, PropsWithChildren } from "react";
import { initialTheme } from "./initialTheme";
import { Theme } from "../utils/types/theme.types";

export const ThemeContext = createContext({} as Theme);

const ThemeProvider = ({children} : PropsWithChildren) => {

    return <ThemeContext.Provider value={initialTheme}>{children}</ThemeContext.Provider>
};

export default ThemeProvider;