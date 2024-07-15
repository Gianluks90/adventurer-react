import { HalfMoon, SunLight } from "iconoir-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggleButton() {
    // const [isDarkTheme, setIsDarkTheme] = useState(document.body.classList.contains('dark'));
    const { isDarkTheme, toggleTheme } = useTheme();

    // const handleClick = () => {
    //     setIsDarkTheme(!isDarkTheme);
    //     document.body.classList.toggle('dark');
    //     document.body.classList.toggle('light');
    //     let doc = document.getElementById('toggle-theme-btn');
    //     if (doc) {
            
    //     }
    // };

    return (
        <button style={{'width': 'min-content'}} id="toggle-theme-btn" className="as-clear-btn as-mini-btn" onClick={toggleTheme}>
            {isDarkTheme ? <HalfMoon /> : <SunLight />}
        </button>
    )
}