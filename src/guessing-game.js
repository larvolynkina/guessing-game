class GuessingGame {
  constructor() {
    this.minNumber = 0;
    this.maxNumber = 0;
    this.guessNumber = 0;
  }

  setRange(min, max) {
    this.minNumber = min;
    this.maxNumber = max;
  }

  guess() {
    this.guessNumber = Math.round((this.minNumber + this.maxNumber) / 2);
    return this.guessNumber;
  }

  lower() {
    this.maxNumber = Math.round((this.minNumber + this.maxNumber) / 2);
  }

  greater() {
    this.minNumber = Math.round((this.minNumber + this.maxNumber) / 2);
  }
}

module.exports = GuessingGame;
