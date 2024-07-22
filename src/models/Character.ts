import { AbilityScores } from "./abilityScores";
import { Bonus, Feat } from "./Feat";
import { Skill } from "./Skill";

export class Character {
    id: string = '';
    info: Info = new Info();
    appearance: Appearance = new Appearance();
    experience: Experience = new Experience();
    abilityScores: AbilityScores = new AbilityScores();
    skills: Skill[] = [];
    background: Background = new Background();
    feats: Feat[] = [];
    status: Status = new Status();

    constructor() {}

    public static fromDataOld(data: any): Character {
        const char = new Character;
        char.id = data.id;
        const info = data.informazioniBase;
        char.info.playerName = info.nomeGiocatore;
        char.info.name = info.nomePersonaggio;
        char.info.nameExtended = info.nomePersonaggioEsteso;
        char.info.imgUrl = info.urlImmaginePersonaggio;
        char.info.genre = info.genere;
        char.info.pronouns = info.pronomi;
        char.info.species = info.razza;
        char.info.customSpecies = info.razzaPersonalizzata;
        char.info.subspecies = info.sottorazza;
        char.info.customSubspecies = info.sottorazzaPersonalizzata;
        char.info.alignment = info.allineamento;

        const fisico = data.caratteristicheFisiche;
        char.appearance.height = fisico.altezza;
        char.appearance.weigth = fisico.peso;
        char.appearance.age = fisico.eta;
        char.appearance.eyes = fisico.occhi;
        char.appearance.skin = fisico.carnagione;
        char.appearance.hair = fisico.capelli;

        char.experience.level = info.livello;
        char.experience.list = info.classi.map((c: any) => {
            const charClass = new CharClass();
            charClass.classLevel = c.livello;
            charClass.className = c.nome;
            charClass.customClassName = c.classePersonalizzata;
            charClass.subclassName = c.sottoclasse;
            charClass.customSubclassName = c.sottoclassePersonalizzata;
            return charClass;
        });

        char.abilityScores.strength = data.caratteristiche.forza;
        char.abilityScores.dexterity = data.caratteristiche.destrezza;
        char.abilityScores.constitution = data.caratteristiche.costituzione;
        char.abilityScores.intelligence = data.caratteristiche.intelligenza;
        char.abilityScores.wisdom = data.caratteristiche.saggezza;
        char.abilityScores.charisma = data.caratteristiche.carisma;

        char.skills = Skill.newBasicSkills();
        char.skills = this.fromSkillData(char.skills, data.competenzaAbilita);

        char.background.name = info.background;
        char.background.detail = info.dettaglioBackground;
        char.background.history = data.storiaPersonaggio;

        const privilegiTratti = data.privilegiTratti;
        char.feats = privilegiTratti.map((f: any) => {
            const feat = new Feat();
            feat.id = f.id || Feat.randomId();
            feat.name = f.nome;
            feat.description = f.descrizione;
            feat.type = f.tipologia;
            feat.tag = f.tag;
            if (f.bonuses && f.bonuses.length > 0) {
                feat.bonuses = f.bonuses.map((b: any) => {
                    const bonus = new Bonus();
                    bonus.value = b.value;
                    bonus.element = b.element;
                    return bonus;
                });
            } else {
                f.bonuses = [];
            }
            feat.ref = f.riferimento;
            return feat;
        });

        const status = data.status;
        char.status.userId = status.userId;
        char.status.creationDate = status.creationDate;
        char.status.lastUpdateDate = status.lastUpdateDate;
        char.status.statusCode = status.statusCode === 0 ? STATUSCODE.NEW : status.statusCode === 1 ? STATUSCODE.DRAFT : STATUSCODE.COMPLETE;
        char.status.options.sheetColor = status.sheetColor;
        char.status.options.sheetTitleColor = status.sheetTitleColor;
        char.status.options.prideFlag = status.prideFlag;
        return char;
    }

    static fromSkillData(skills: Skill[], data: any): Skill[] {
        skills.forEach((s: Skill) => {
            
        });
        return [];
    }
}

// Subclasses

class Info {
    playerName: string = '';
    name: string = '';
    nameExtended: string = '';
    imgUrl: string = '';
    genre: string = '';
    pronouns: string = '';
    species: string = '';
    customSpecies: string = '';
    subspecies: string = '';
    customSubspecies: string = '';
    alignment: string = '';

    constructor() {}
}

class Appearance {
    height: string = '';
    weigth: string = '';
    age: string = '';
    eyes: string = '';
    skin: string = '';
    hair: string = '';

    constructor() {}
}

class Experience {
    level: number = 0;
    cumulatedExperience: number = 0;
    list: CharClass[] = [];
}

class CharClass {
    classLevel: number = 0;
    className: string = '';
    customClassName: string = '';
    subclassName: string = '';
    customSubclassName: string = '';
}

class Background {
    name: string = '';
    detail: string = '';
    history: string = '';
}

class Status {
    userId: string = '';
    creationDate: Date | null = null;
    lastUpdateDate: Date | null = null;
    statusCode: STATUSCODE = STATUSCODE.NEW;
    options: Option = new Option();

    constructor() {}
}

enum STATUSCODE {
    NEW = 'new',	
    DRAFT = 'draft',
    COMPLETE = 'complete'
}

class Option {
    sheetColor: string = '';
    sheetTitleColor: string = '';
    prideFlag: string = '';
    usePrideRule: boolean = false;
    useOpacityInventoryRule: boolean = false;
    useWeightRule: boolean = false;
}