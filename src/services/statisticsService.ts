import { safeParseFloat } from "../helpers/safeParseFloat";
import { WineData } from "../models/WineData";


/**
 * Calculates the mean of a property for a specific alcohol class in the wine data. 
   * @returns mean of the specific property

 */
export function calculateMean(
    data: WineData[],
    property: keyof WineData | string,
    alcoholClass: number
): number {
    const filteredData = data.filter((entry) => entry.Alcohol === alcoholClass);



    const sum = filteredData.reduce(
        (acc, curr) => acc + safeParseFloat(curr[property as keyof WineData]),
        0
    );
    return parseFloat((sum / filteredData.length).toFixed(3));
}


/**
 * Calculates the median of a property for a specific alcohol class in the wine data. 
 * @returns median of the specific property
 */
export function calculateMedian(
    data: WineData[],
    property: keyof WineData | string,
    alcoholClass: number
): number {
    const filteredData = data.filter((entry) => entry.Alcohol === alcoholClass);


    const sorted = filteredData
        .map((entry) => safeParseFloat(entry[property as keyof WineData]))
        .sort((a, b) => a - b);

    const mid = Math.floor(sorted.length / 2);
    return parseFloat(
        (sorted.length % 2 !== 0
            ? safeParseFloat(sorted[mid])
            : (safeParseFloat(sorted[mid - 1]) + safeParseFloat(sorted[mid])) / 2
        ).toFixed(3)
    );
}


/**
 * Calculates the mode of a property for a specific alcohol class in the wine data. 
 * @returns mode of the specific property
 */
export function calculateMode(data: WineData[], property: keyof WineData | string, alcoholClass: number) {
    let filteredData = data.filter((entry) => entry.Alcohol === alcoholClass)

    const frequencyMap: Record<string | number, number> = {};
    filteredData.forEach((item) => {
        const value = safeParseFloat((item[property as keyof WineData]));
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    let maxFrequency = 0;
    let modes: (string | number)[] = [];
    for (const [value, frequency] of Object.entries(frequencyMap)) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            modes = [value];
        } else if (frequency === maxFrequency) {
            modes.push(value);
        }
    }

    const sum = safeParseFloat(modes.reduce((acc, curr) => safeParseFloat(acc) + safeParseFloat(curr), 0))
    const length = modes.length

    const multiMode = sum / length;

    return parseFloat(multiMode.toFixed(3));
}



