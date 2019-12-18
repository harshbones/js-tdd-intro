// test/Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {

    it('isSquare() renvoie TRUE si les deux côtés sont les mêmes', () => {
        const rectangle = new Rectangle(10, 10);
        assert.strictEqual(rectangle.isSquare(), true);
    });
    
    it('isSquare() renvoie FALSE si les deux côtés sont différents', () => {
        const rectangle = new Rectangle(10, 11);
        assert.strictEqual(rectangle.isSquare(), false);
    });

    it('getArea() renvoie bien la surface du rectangle', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getArea(), 91 );
    });

    it('getPerimeter() renvoie bien la superficie du rectangle', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getPerimeter(), 40 );
    });

});