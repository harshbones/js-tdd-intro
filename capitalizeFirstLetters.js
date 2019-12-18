const assert = require('assert');

// CODE A TESTER ENTRE CES LIGNES

function capitalizeFirstLetters(input) {
    if (input.length != 0) {
        return input.split(' ').map(x => x[0].toUpperCase()+x.slice(1)).join(' ')
    } else {
    return input;
    }
}

// CODE A TESTER ENTRE CES LIGNES

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
assert.strictEqual(capitalizeFirstLetters('a'), 'A');
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters(''), '');
