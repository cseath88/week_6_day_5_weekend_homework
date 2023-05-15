const assert = require('assert')
const Decorator = require('../models/decorator.js')
const PaintCan = require('../models/paint_can.js')
const Room = require('../models/room.js')

describe ('Decorator', function () {
    let paint1
    let paint2
    let paint3

    let room1
    let room2

    let decorator

    beforeEach(function () {
        paint1 = new PaintCan (0)
        paint2 = new PaintCan (3)
        paint3 = new PaintCan (40)

        room1 = new Room (25, false)
        room2 = new Room (30, true)

        decorator = new Decorator ('Ralph')
    })

    it('should start with an empty paint stock', function () {
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, [ ])
    })

    it('should be able to add paint to paint stock', function () {
        decorator.addPaint(paint2)
        decorator.addPaint(paint3)
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, [paint2, paint3])
    })

    it('should be able to calculate total paint', function () {
        decorator.addPaint(paint2)
        decorator.addPaint(paint3)
        decorator.totalPaint()
        const actual = decorator.totalPaint()
        assert.deepStrictEqual(actual, 43)
    })

    it('should be able to calculate if it can paint a room', function () {
        decorator.addPaint(paint3)
        const actual = decorator.canPaintRoom(room2)
        assert.strictEqual(actual, true)
    })

    it('should be able to paint room', function () {
        decorator.addPaint(paint3)
        decorator.paintRoom(room1)
        const actual = room1.painted
        assert.strictEqual(actual, true)
    })





})