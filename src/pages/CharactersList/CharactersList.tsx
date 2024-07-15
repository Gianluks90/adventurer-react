import { Edit, Eye, FastArrowUp, Home, Plus } from "iconoir-react";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getCharactersByUserId } from "../../services/characterService";
import { useAuth } from "../../components/AuthProvider";
import './charactersList.scss';
import { Character } from "../../models/Character";

export default function CharactersList() {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState<Character[]>([]);
    const { user } = useAuth();

    useEffect(() => {
        if (!user) return;
        getCharactersByUserId(user.uid).then(result => {
            setCharacters(result);
        })
    }, []);

    // useEffect(() => {
    //     console.log(characters);
    // }, [characters])

    return (
        <>
            <div className="backdrop-container">
                <div className="chars-container">
                    {characters.map((char) =>
                        <div className="as-glass-effect char-card" key={char.id} style={{ 'backgroundColor': char.status.options.sheetColor }}>
                            <img src={char.info.imgUrl} alt="imgUrl" />
                            <div className="char-card-info-container">
                                <div className="montserrat-font char-name">{char.info.nameExtended !== '' ? char.info.nameExtended : char.info.name}</div>
                                <div className="char-class">{char.experience.list[0].className} di {char.experience.list[0].classLevel}° livello {char.experience.list[0].subclassName !== '' ? '(' + char.experience.list[0].subclassName + ')' : ''} {char.experience.list.length > 1 ? '+ ' + (char.experience.list.length - 1) + ' classe/i' : ''}</div>
                            </div>
                            <div className="char-card-actions">
                                {char.status.statusCode === 'complete' ?  <button className="as-mini-icon-btn">
                                    <FastArrowUp />
                                </button> :  <button className="as-mini-icon-btn">
                                    <Edit />
                                </button>}
                                {char.status.statusCode === 'complete' ? <button className="as-mini-icon-btn">
                                    <Eye />
                                </button> : ''}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="bottom-left-container">
                <div className="as-glass-effect as-mini-btn left-button" onClick={() => navigate('/home')}>
                    <Home />
                </div>
            </div>

            <div className="as-glass-effect as-mini-btn right-button">
                <Plus />
            </div>
        </>
    )
}