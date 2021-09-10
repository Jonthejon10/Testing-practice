const capitalize = require('../code/capitalize')

test('capitalizes first letter(1)', () => {
    expect(capitalize('test')).toBe('Test')
})

test('capitalizes first letter(2)', () => {
    expect(capitalize('tesT')).toBe('TesT')
})

test('capitalizes first letter(3)', () => {
    expect(capitalize('tEST')).toBe('TEST')
})