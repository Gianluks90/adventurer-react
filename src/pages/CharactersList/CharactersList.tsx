import { Home, Plus } from "iconoir-react";
import { useNavigate } from "react-router-dom";

export default function CharactersList() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h1>Char</h1>
            </div>
            <div className="as-clear-btn as-mini-btn left-button" onClick={() => navigate('/home')}>
                <Home />
            </div>
            <div className="as-clear-btn as-mini-btn right-button">
                <Plus />
            </div>
        </>

    )
}