const assert = require('assert')
const Room = require('../models/room.js')

describe ('Room', function () {

    let room1
    let room2

    beforeEach(function () {
        room1 = new Room (25, false)
        room2 = new Room (30, true)
        
    })

    it('should have an area', function () {
        const actual = room1.area
        assert.strictEqual(actual, 25)
    })

    it('should start not painted', function () {
        const actual = room1.painted
        assert.strictEqual(actual, false)
    })

    it('should be able to be painted', function () {
        const actual = room2.painted
        assert.strictEqual(actual, true)
    })

})