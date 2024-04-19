import { wineData } from "./data";

export const ALCOHOL_CLASSES = Array.from(new Set(wineData.map((data) => data.Alcohol)));

// ALCOHOL_CLASSES contains an array of unique Alcohol values from wineData
