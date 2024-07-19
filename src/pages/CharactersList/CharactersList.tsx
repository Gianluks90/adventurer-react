import { Home, Plus } from "iconoir-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCharactersByUserId } from "../../services/characterService";
import { useAuth } from "../../providers/AuthProvider";
import './charactersList.scss';
import { Character } from "../../models/Character";
import CharacterCard from "../../components/characterCard/CharacterCard";
import NewCharacterDialog from "../../components/dialogs_charListPage/newCharacterDialog/NewCharacterDialog";

export default function CharactersList() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        if (!user) return;
        getCharactersByUserId(user.uid).then(result => {
            setCharacters(result);
        })
    }, []);

    // useEffect(() => {
    //     console.log(characters);
    // }, [characters])

    const closeDialog = () => {
        dialogRef.current?.close();
    }

    const dialogRef = useRef<HTMLDialogElement>(null);
    return (
        <>
            <div className="backdrop-container">
                <div className="chars-container">
                    {characters.map((char) =>
                        <CharacterCard character={char} key={char.id} />
                    )}
                </div>
            </div>
            <div className="bottom-left-container">
                <div className="as-glass-effect as-mini-btn left-button" onClick={() => navigate('/home')}>
                    <Home />
                </div>
            </div>

            <div className="as-glass-effect as-mini-btn right-button" onClick={() => dialogRef.current?.showModal()}>
                <Plus />
            </div>
            <dialog ref={dialogRef} className="as-dialog">
                <NewCharacterDialog onClose={closeDialog}/>
            </dialog>
        </>
    )
}