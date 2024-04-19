/**
 * Safely parses a value as a float, handling both numbers and strings.
 * @returns The parsed float value, or the original number if it's already a float.
 * @throws Error if the input string cannot be parsed as a number.
 */

export function safeParseFloat(value: number | string): number {
    if (typeof value === 'string') {
        const parsed = parseFloat(value);
        if (isNaN(parsed)) {
            throw new Error(`Value '${value}' could not be parsed as a number.`);
        }
        return parsed;
    } else {
        return value;
    }
}