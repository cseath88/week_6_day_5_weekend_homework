const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase()
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const uniqueLetters = this.alphabet.filter((letter) => {
    return phrase.includes(letter)
  })
  return uniqueLetters.length === this.alphabet.length
}

module.exports = PangramFinder;




