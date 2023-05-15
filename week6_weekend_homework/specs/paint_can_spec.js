const assert = require('assert')
const PaintCan = require('../models/paint_can.js')

describe ('PaintCan', function () {

    let paint1
    let paint2
    let paint3

    beforeEach(function () {
        paint1 = new PaintCan (0)
        paint2 = new PaintCan (3)
        paint3 = new PaintCan (5)
        
    })

    it('should have paint', function () {
        const actual = paint2.paintLitres
        assert.strictEqual(actual, 3)
    })

    it('should be able to check if it is empty', function () {
        paint1.checkIfEmpty()
        const actual = paint1.paintLitres
        assert.strictEqual(actual, 0)
    })

    it('should be able to empty itself', function () {
        paint2.emptyItself()
        const actual = paint2.paintLitres
        assert.strictEqual(actual, 0)
    })


})