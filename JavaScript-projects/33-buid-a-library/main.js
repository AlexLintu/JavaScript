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

  // toggleCheckOutStatus() {
  //   if (this._isCheckedOut) {
  //     return this._isCheckedOut = false;
  //   } else {
  //     return this._isCheckedOut = true;
  //   }
  // }

  toggleCheckOutStatus() {
    return this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const result = (this._ratings.reduce((currentSum, rating) => currentSum + rating, 0)) / this._ratings.length;
    return result;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  // Arguments that do not have default values:
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = 0;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}