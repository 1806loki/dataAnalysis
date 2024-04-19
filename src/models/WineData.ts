/**
 * Represents the structure of the wine data.
 */


export interface WineData {
    Alcohol: number;
    "Malic Acid": number;
    Ash: number | string;
    "Alcalinity of ash": number;
    Magnesium: number;
    "Total phenols": number;
    Flavanoids: number | string;
    "Nonflavanoid phenols": number | string;
    Proanthocyanins: string;
    "Color intensity": number | string;
    Hue: number;
    "OD280/OD315 of diluted wines": string | number;
    Unknown: number;
}

export interface NewWineData extends WineData {
    Gamma: number;
}
