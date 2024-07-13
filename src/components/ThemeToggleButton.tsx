import { HalfMoon, SunLight } from "iconoir-react";
import { useState } from "react";

export default function ThemeToggleButton() {
    const [isDarkTheme, setIsDarkTheme] = useState(document.body.classList.contains('dark'));

    const handleClick = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    };

    return (
        <button style={{'width': 'min-content'}} className="as-clear-btn as-mini-btn" onClick={handleClick}>
            {isDarkTheme ? <SunLight /> : <HalfMoon />}
        </button>
    )
}