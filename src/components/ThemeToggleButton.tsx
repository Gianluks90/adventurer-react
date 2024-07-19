import { HalfMoon, SunLight } from "iconoir-react";
import { useTheme } from "../providers/ThemeProvider";

export default function ThemeToggleButton() {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <button style={{'width': 'min-content'}} id="toggle-theme-btn" className="as-glass-effect as-mini-btn" onClick={toggleTheme}>
            {isDarkTheme ? <SunLight /> : <HalfMoon />}
        </button>
    )
}