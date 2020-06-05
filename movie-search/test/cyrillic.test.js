import cyrillic from './cyrillic';

describe('isCyrillic', () => {
  test('result to equal false', () => {
    const wordEng = ['love', 'dgs', 'true', 'false', 'cat', 'dgdf']
    for (let i = 0; i < wordEng.length; i += 1) {
      expect(cyrillic(wordEng[i])).toBe(false)
    }
  })

  test('result to equal true', () => {
    const wordRus = ['любовь', 'дождь', 'сон', 'дорога', 'лужайка', 'авпаап']
    for (let i = 0; i < wordRus.length; i += 1) {
      expect(cyrillic(wordRus[i])).toBe(true)
    }
  })

  test('result to equal different', () => {
    const word = ['сон', 'love', 'лужайка', 'dgs', 'любовь', 'true', 'false', 'cat', 'dgdf', 'дождь', 'дорога', 'авпаап']
    for (let i = 0; i < word.length; i += 1) {
      if (!cyrillic(word[i])) {
        expect(cyrillic(word[i])).toBe(false)
      } else {
        expect(cyrillic(word[i])).toBe(true)
      }
    }
  })
})
