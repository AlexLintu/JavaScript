class Media {
  constructor(title, isCheckedOut, rating) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  getAverageRating(rating) {

  }

  toggleCheckOutStatus(isCheckedOut) {

  }

  addRating() {

  }
}