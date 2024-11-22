
import { Edit, Eye, FastArrowUp } from 'iconoir-react';
import { Character } from '../../models/Character';
import './characterCard.scss';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character }: { character: Character }) => {
    const navigate = useNavigate();
    
    function composeCharacterName(): string {
        return character.info.nameExtended !== '' ? character.info.nameExtended : character.info.name;
    }

    function composeCharacterClass(): string {
        return `${character.experience.list[0].className} di ${character.experience.list[0].classLevel}° livello ${character.experience.list[0].subclassName !== '' ? '(' + character.experience.list[0].subclassName + ')' : ''} ${character.experience.list.length > 1 ? '+ ' + (character.experience.list.length - 1) + ' classe/i' : ''}`;
    }

    return (
        <>
            <div className="as-glass-effect char-card" style={{ 'backgroundColor': character.status.options.sheetColor }}>
                <img src={character.info.imgUrl} alt="imgUrl" />
                <div className="char-card-info-container">
                    <div className="montserrat-font char-name">{composeCharacterName()}</div>
                    <div className="char-class">{composeCharacterClass()}</div>
                </div>
                <div className="char-card-actions">
                    {character.status.statusCode === 'complete' ? <button className="as-mini-icon-btn">
                        <FastArrowUp />
                    </button> : <button className="as-mini-icon-btn">
                        <Edit />
                    </button>}
                    {character.status.statusCode === 'complete' ? <button className="as-mini-icon-btn" onClick={() => navigate('/character/' + character.id)}>
                        <Eye />
                    </button> : ''}
                </div>
            </div>
        </>
    )
}

export default CharacterCard;