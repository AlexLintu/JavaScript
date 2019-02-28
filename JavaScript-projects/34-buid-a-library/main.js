// -- 1. SUPER CLASS `Media` --:
class Media {
  // `title` argument sets the one property that is in all three subclasses of Media, and does not have a default value:
  constructor(title) {
    // `this` is going to be the subclass or instance name:
    this._title = title;
    // Properties below have starting/default values:
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // Getters return the value of the property:
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  // Setters change the value of the property:
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    return this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const ratingsLength = this._ratings.length;
    const result = ratingsSum / ratingsLength;
    return result;
  }

  addRating(rating) {
    return this._ratings.push(rating);
  }
}

// -- 2. SUBCLASSES --:
class Book extends Media {
  // Arguments that do not have default values:
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  // ?
  shuffle() {
    const randomNumber = Math.floor(Math.random() * (songs.length + 1));
    return this._songs.push(this._songs[randomNumber]);
  }
}

// -- 3. INSTANCES --:
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// Changing checkout status:
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

// Adding ratings:
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Getting an average rating value:
console.log(historyOfEverything.getAverageRating());


// MOVIE Instance:
const speed = new Movie('Jan de Bont', 'Speed', 116);

// Changing checkout status:
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

// Adding ratings:
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// Getting an average rating value:
console.log(speed.getAverageRating());