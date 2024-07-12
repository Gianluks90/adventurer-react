import { useAuth } from "../components/AuthProvider";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { Link } from "react-router-dom";

export default function Home() {
    // const { user, setUser } = useAuth();
    const { logout } = useAuth();

    return (
        <>
            <p>Home</p>
            <ThemeToggleButton />
            <button onClick={logout}>Logout</button>
            <Link to="/chars">Chars</Link>
        </>
    )
}