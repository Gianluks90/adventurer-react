import { useAuth } from "../../providers/AuthProvider";
import ThemeToggleButton from "../../components/ThemeToggleButton";
import { Box, FireFlame, Group, LogOut, Map, Page } from "iconoir-react";
import { useNavigate } from "react-router-dom";
import './home.scss';
import { ROLE } from "../../models/AdventurerUser";

export default function Home() {
    // const { user, setUser } = useAuth();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <div className="backdrop-container">
                <h1 className="cinzel-font app-title">A<span>dventure</span>R</h1>
                <h2 className="montserrat-font app-subtitle">studio</h2>
                <h3 className="montserrat-font app-caption">Crea i tuoi personaggi per il gioco di ruolo più famoso del mondo!</h3>
                <div className="buttons-container">
                    {/* <div className="as-glass-effect" > */}
                    <button className="as-glass-effect as-standard-btn home-btn" onClick={() => navigate('/characters')}>
                        <Page /> Personaggi
                    </button>
                    {/* </div> */}
                    {/* <div className="as-glass-effect"> */}
                    <button className="as-glass-effect as-standard-btn home-btn">
                        <Box /> Risorse
                    </button>
                    {/* </div> */}
                    {/* <div className=""> */}
                    <button className="as-glass-effect as-standard-btn home-btn">
                        <Group /> Campagne
                    </button>
                    {/* </div> */}
                    {/* <div className=""> */}
                    <button className="as-glass-effect as-standard-btn home-btn">
                        <Map /> Avventure
                    </button>
                    {/* </div> */}
                </div>
                <div className="version-label">
                    Ver. 0.16072024
                </div>
            </div>

            <div className="as-bottom-btns-container">
                <div className="left-btns">
                    <button className="as-glass-effect as-mini-btn" onClick={logout}>
                        <LogOut />
                    </button>
                    {user && user.role === ROLE.ADMIN ?
                        <a href="https://console.firebase.google.com/u/1/project/dnd-character-sheet-2023/overview" target="_blank">
                            <button className="as-glass-effect as-mini-btn">
                                <FireFlame />
                            </button>
                        </a>
                        : <span></span>}
                </div>
                <div className="right-btns">
                    <ThemeToggleButton />
                </div>
            </div>
        </>
    )
}