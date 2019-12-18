const assert = require('assert');

// CODE A TESTER ENTRE CES LIGNES


// CODE A TESTER ENTRE CES LIGNES

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirst.length, 1);
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
assert.strictEqual(capitalizeFirst('a'), 'A');
assert.strictEqual(capitalizeFirst('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirst(''), '');
