
import { Edit, Eye, FastArrowUp } from 'iconoir-react';
import { Character } from '../../models/Character';
import './characterCard.scss';

const CharacterCard = ({ character }: { character: Character }) => {
    return (
        <>
            <div className="as-glass-effect char-card" style={{ 'backgroundColor': character.status.options.sheetColor }}>
                <img src={character.info.imgUrl} alt="imgUrl" />
                <div className="char-card-info-container">
                    <div className="montserrat-font char-name">{character.info.nameExtended !== '' ? character.info.nameExtended : character.info.name}</div>
                    <div className="char-class">{character.experience.list[0].className} di {character.experience.list[0].classLevel}° livello {character.experience.list[0].subclassName !== '' ? '(' + character.experience.list[0].subclassName + ')' : ''} {character.experience.list.length > 1 ? '+ ' + (character.experience.list.length - 1) + ' classe/i' : ''}</div>
                </div>
                <div className="char-card-actions">
                    {character.status.statusCode === 'complete' ? <button className="as-mini-icon-btn">
                        <FastArrowUp />
                    </button> : <button className="as-mini-icon-btn">
                        <Edit />
                    </button>}
                    {character.status.statusCode === 'complete' ? <button className="as-mini-icon-btn">
                        <Eye />
                    </button> : ''}
                </div>
            </div>
        </>
    )
}

export default CharacterCard;