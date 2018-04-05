const getRandomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const roll = sides => getRandomInteger(1, sides)

const sample = (x = []) => {
  if (!x || !x.length) {
    return
  }

  const l = x.length
  const i = roll(l)
  return x[i - 1]
}

module.exports = sample
