import { wineData } from "../config/data";
import { safeParseFloat } from "../helpers/safeParseFloat";
import { NewWineData, WineData } from "../models/WineData";

/**
 * Calculates the gamma for the given values and adds the Gamma value to the array 
 * @returns a New Array with Gamma Value. 
 */
function addGamma(data: WineData[]): NewWineData[] {
    return data.map(({ Ash, Hue, Magnesium, ...rest }: WineData) => {
        const ashValue = safeParseFloat(Ash);
        const hueValue = safeParseFloat(Hue);
        const magnesiumValue = safeParseFloat(Magnesium);
        if (magnesiumValue === 0) {
            throw new Error('Cannot divide by zero.');
        }
        const gamma = (ashValue * hueValue) / magnesiumValue;
        return { ...rest, Ash, Hue, Magnesium, Gamma: gamma };
    });
}


export const newWineData = addGamma(wineData)