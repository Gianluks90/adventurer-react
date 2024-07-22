export class AbilityScores {
    strength: number = 0;
    dexterity: number = 0;
    constitution: number = 0;
    intelligence: number = 0;
    wisdom: number = 0;
    charisma: number = 0;

    constructor() {}

    static calculateModifier(score: number): string {
        return Math.floor((score - 10) / 2) >= 0 ? `+${Math.floor((score - 10) / 2)}` : `${Math.floor((score - 10) / 2)}`;
    }
}