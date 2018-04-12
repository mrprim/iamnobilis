export const getRandomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const roll = sides => getRandomInteger(1, sides)

export const roll1dF = () => getRandomInteger(-1, 1)

export const rollNdF = n => {
  const results = []
  for (let i = 0; i < n; i++) {
    results.push(roll1dF())
  }
  return results
}

export const roll4dF = () => rollNdF(4)

export const countFateDieResults = (rollArray = []) => {
  const results = {
    plus: 0,
    minus: 0,
    zero: 0
  }
  return rollArray.reduce(function (rslt, roll) {
    rslt.plus += roll === 1 ? 1 : 0
    rslt.minus += roll === -1 ? 1 : 0
    rslt.zero += roll === 0 ? 1 : 0

    return rslt
  }, results)
}

export default {
  roll,
  roll1dF,
  roll4dF,
  rollNdF,
  countFateDieResults
}
