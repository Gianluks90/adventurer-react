export class Character {
    id: string = '';
    info: Info = new Info();
    experience: Experience = new Experience();
    background: Background = new Background();
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
        char.background.name = info.background;
        char.background.detail = info.dettaglioBackground;
        char.background.history = data.storiaPersonaggio;

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