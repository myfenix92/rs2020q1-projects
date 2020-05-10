import itemSlideCount from './itemSlide'

describe('item slide count', () => {
  test('result - 3 item on last page', () => {
    const page = 3
    const resultCount = 23
    expect(itemSlideCount(page, resultCount)).toBe(3)
  })

  test('result - 8 item on last page', () => {
    const page = 19
    const resultCount = 188
    expect(itemSlideCount(page, resultCount)).toBe(8)
  })

  test('result - 10 item on last page', () => {
    const page = 9
    const resultCount = 90
    expect(itemSlideCount(page, resultCount)).toBe(10)
  })

  test('result - 10 item on last page', () => {
    const page = 1
    const resultCount = 10
    expect(itemSlideCount(page, resultCount)).toBe(10)
  })
})
