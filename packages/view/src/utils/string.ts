/**
 * Capitalize the first letter of each word in a string.
 * 
 * @param text - The string to capitalize.
 * @returns The capitalized string.
 * @category String
 */
export function capitalize(text: string): string {
  return text.replace(/\b\w/g, (l) => l.toUpperCase());
}
