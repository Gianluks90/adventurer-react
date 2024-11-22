import { Character } from "../../models/Character"
import { useAuth } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";
import { getCharacterByIdSnapshot } from "../../services/characterService";
import { Home, MultiplePages } from "iconoir-react";
import { useNavigate } from "react-router-dom";
import CharHeader from "../../components/characterView/charHeader";

export default function CharacterView() {

    const navigate = useNavigate();
    const { user } = useAuth();
    const [character, setCharacters] = useState<Character | null>(null);

    useEffect(() => {
        if (!user) return;
        const characterId: string = window.location.href.split('character/')[1];
        getCharacterByIdSnapshot(characterId).then(result => {
            setCharacters(result);
        })
    }, []);

    return (
        <>
            <div className="backdrop-container">
                <CharHeader character={character} />
            </div>
            <div className="as-bottom-btns-container">
                <div className="left-btns">
                    <button className="as-glass-effect as-mini-btn" onClick={() => navigate('/home')}>
                        <Home />
                    </button>
                    <button className="as-glass-effect as-mini-btn" onClick={() => navigate('/characters')}>
                        <MultiplePages />
                    </button>
                </div>
            </div>
        </>
    )
}