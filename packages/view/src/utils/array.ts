/**
 * Unique an Array.
 *
 * @param array the array to remove duplicate values
 * @returns the array without duplicate values
 * @cateegory Array
 */
export function unique<T>(array: Array<T>): Array<T> {
  return Array.from(new Set(array));
}

export type GroupedResult<T> = {
  [key: string]: Array<T>;
};

export type CountResult = {
  [key: string]: number;
};

/**
 * Count the number of each item in the array.
 *
 * @category Array
 */
export function count(
  array: Array<string>,
  filter?: (value: string) => boolean
): CountResult {
  return array.reduce((acc, item) => {
    if (filter && !filter(item)) {
      return acc;
    }
    if (!acc[item]) {
      acc[item] = 0;
    }
    acc[item]++;
    return acc;
  }, {} as CountResult);
}
