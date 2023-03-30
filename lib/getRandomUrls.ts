/**
 * Generates an array of random image URLs.
 * @param count - The number of items in the array. Defaults to 3.
 * @param max - The maximum number of images to choose from. Defaults to 15.
 * @returns An array of unique image URLs.
 */
export default function getRandomUrls(
  count: number = 3,
  max: number = 15
): string[] {
  if (typeof window !== "undefined" && window.innerWidth >= 1600) {
    count = 4;
  }

  const arr: string[] = [];
  const used: Set<number> = new Set();
  while (arr.length < count * 2) {
    const random = Math.floor(Math.random() * max);
    if (!used.has(random)) {
      used.add(random);
      arr.push(`/images/AI${random}.jpg`);
    }
  }
  return arr;
}
