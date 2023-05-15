const Decorator = function (name) {
    this.name = name
    this.paintStock = [ ]
}

Decorator.prototype.addPaint = function (PaintCan) {
    this.paintStock.push(PaintCan)
}


Decorator.prototype.totalPaint = function () {
    let totalLitres = 0
    for (const paint of this.paintStock) {
        totalLitres += paint.paintLitres
    }
    return totalLitres
}

Decorator.prototype.canPaintRoom = function (room) {
    const totalPaint = this.totalPaint(this.paintStock)
    if (totalPaint >= room.area) {
        return true
    }
    return false
}

Decorator.prototype.paintRoom = function (room) {
    if (this.canPaintRoom(room) === true) {
        room.painted = true
    }
}

module.exports = Decorator
