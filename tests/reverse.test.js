const reverse = require('../code/reverse')

test('reverses string', () => {
    expect(reverse('hello')).toBe('olleh')
})

test('reverses string with capital letters', () => {
    expect(reverse('This')).toBe('sihT')

    expect(reverse('tEst')).toBe('tsEt')
})

test('reverses string with spaces', () => {
    expect(reverse('This is a test')).toBe('tset a si sihT')
})
