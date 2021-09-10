const arrayAnalysis = require('../code/array-analysis')

test('analyzes correctly', () => {
    expect(arrayAnalysis([1, 1, 1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 3
    })
})

test('analyzes correctly(2)', () => {
    expect(arrayAnalysis([1, 2, 3, 4, 0])).toEqual({
        average: 2,
        min: 0,
        max: 4,
        length: 5
    })
})
