const func = require('./func.js');

test('Expect button', () => {
    expect(func('bu', ['button', 'breakfast', 'border'])).toBe(['button']);
});
test('Expect []', () => {
    expect(func('beau', ['pastry', 'delicious', 'name', 'boring'])).toBe([]);
});
test('Expect true, 0 characters is always palindrom', () => {
    expect(func('cre', ['creating', 'creature', 'creed', 'increasing'])).toBe(['creating', 'creature', 'creed']);
});
test('Expect false, 2 different characters is never palindrome', () => {
    expect(func('sno', ['snow', 'paper', 'ghost'])).toBe(['snow']);
});
