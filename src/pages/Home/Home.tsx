import { useAuth } from "../../components/AuthProvider";
import ThemeToggleButton from "../../components/ThemeToggleButton";
import { Box, Group, LogOut, Map, Page } from "iconoir-react";
import './home.scss';
import { useNavigate } from "react-router-dom";

export default function Home() {
    // const { user, setUser } = useAuth();
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <div className="backdrop-container">
                <h1 className="cinzel-font app-title">A<span>dventure</span>R</h1>
                <h2 className="montserrat-font app-subtitle">studio</h2>
                <h3 className="montserrat-font app-caption">Crea i tuoi personaggi per il gioco di ruolo più famoso del mondo!</h3>
                <div className="buttons-container">
                    <div className="as-clear-btn" onClick={() => navigate('/characters')}>
                        <div>
                            <Page /> Personaggi
                        </div>
                    </div>
                    <div className="as-clear-btn">
                        <div>
                            <Box /> Risorse
                        </div>
                    </div>
                    <div className="as-clear-btn">
                        <div>
                            <Group /> Campagne
                        </div>
                    </div>
                    <div className="as-clear-btn">
                        <div>
                            <Map /> Avventure
                        </div>
                    </div>
                </div>
                <div className="version-label">
                    Ver. 0.15072024
                </div>
            </div>

            <div className="as-clear-btn as-mini-btn left-button" onClick={logout}>
                <LogOut />
            </div>
            <div className="right-button">
                <ThemeToggleButton />
            </div>
        </>
    )
}