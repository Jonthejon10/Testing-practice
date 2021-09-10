const cipher = require('../code/caesar-cipher')

test('ciphers correctly', () => {
    expect(cipher('abc', 1)).toBe('bcd')
})

test('works with capital letters', () => {
    expect(cipher('Meme', 1)).toBe('mfnf')
})

test('ciphers commas or dots', () => {
    expect(cipher('this, test', 1)).toBe('uijt, uftu')
})

test('key shifts cipher more than once', () => {
    expect(cipher('noice', 2)).toBe('pqkeg')
})

test('works with no shift', () => {
    expect(cipher('great', 0)).toBe('great')
})