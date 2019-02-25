class Media {
  // `title` argument sets the one property that is in all three subclasses of Media, and does not have a default value:
  constructor(title) {
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

  set isCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  getAverageRating(rating) {

  }

  toggleCheckOutStatus(isCheckedOut) {
    if (this._isCheckedOut) {
      return this._isCheckedOut = false;
    } else {
      return this._isCheckedOut = true;
    }
  }

  addRating() {

  }
}

class Book extends Media {
  constructor(title) {
    super(title);
  }
}