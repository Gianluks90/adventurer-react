import { createContext, useState, useContext, ReactNode, useEffect } from "react";

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('as-theme')) {
            if (localStorage.getItem('as-theme') === 'dark') {
                setIsDarkTheme(true);
            }
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDarkTheme(true);
            }
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
        localStorage.setItem('as-theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
