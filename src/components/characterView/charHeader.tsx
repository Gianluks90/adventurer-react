import { Character } from "../../models/Character";

interface CharHeaderProps {
    character: Character | null;
}

export default function CharHeader(props: CharHeaderProps) {
    const { character } = props;
    if (!character) return null;

    return (
        <>
            <div className="char-header-container">{character.info.name}</div>
        </>
    )
}