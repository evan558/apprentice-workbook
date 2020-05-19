const func = require('./func.js');

test('Expect button', () => {
    expect(func('bu', ['button', 'breakfast', 'border'])).toEqual(['button']);
});
test('Expect []', () => {
    expect(func('beau', ['pastry', 'delicious', 'name', 'boring'])).toEqual([]);
});
test('Expect true, 0 characters is always palindrom', () => {
    expect(func('cre', ['creating', 'creature', 'creed', 'increasing'])).toEqual(['creating', 'creature', 'creed']);
});
test('Expect false, 2 different characters is never palindrome', () => {
    expect(func('sno', ['snow', 'paper', 'ghost'])).toEqual(['snow']);
});
