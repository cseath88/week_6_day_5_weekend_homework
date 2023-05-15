const PaintCan = function (paintLitres) {
    this.paintLitres = paintLitres
}

PaintCan.prototype.checkIfEmpty = function () {
    if (this.paintLitres === 0)
    return "Empty"
}

PaintCan.prototype.emptyItself = function () {
    if (this.paintLitres >= 1)
    this.paintLitres = 0
}







module.exports = PaintCan