const aVsAn = (word: string): 'a' | 'an' => {
  if (!word) return 'a'
  return ['a', 'e', 'i', 'o', 'u'].indexOf(word[0].toLowerCase()) >= 0 ? 'an' : 'a'
}

export default aVsAn;