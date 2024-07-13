const getRandomInteger = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const roll = (sides: number): number => getRandomInteger(1, sides)

const sample = <T extends string>(x: T[] = []): T | null => {
  if (!x || !x.length) {
    return null;
  }

  const l = x.length
  const i = roll(l)
  return x[i - 1]
}

export default sample