export default (str = '') => {
  const smallWords = ['the']
  let words = str.split(' ')

  words = words.map((word, i) => {
    word = word.toLowerCase()
    if (i === 0) {
      return wordToTitleCase(word)
    }
    if (smallWords.indexOf(word) >= 0) {
      return word
    }
    return wordToTitleCase(word)
  })

  return words.join(' ')
}

const wordToTitleCase = word => word.replace(/(^|\s|-|\/)[a-z]/g, (f) => f.toUpperCase())
