// create Media class

class Media {
  constructor(tittle) {
    this.tittle = tittle;
    this._isCheckedOut = false;
    this._rating = [];
  }

  get title () {
    return this._title;
  }

  get isCheckedOut () {
    return this._isCheckedOut;
  }
  
  get rating () {
    return this._rating;
  }

  set isCheckedOut (isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let total = this.rating.reduce ((acc, curr) => {
       return acc += curr
    }, 0)
    let avg = total / this.rating.length;

   console.log(`avg: ${avg}`)

    }

  addRating (item) {
    if (item > 0 && item < 6) {
    this.rating.push(item)
    } else {
      console.log ('Error input. Please input number between 1 to 5')
    }
  }
}
// end of class Media

// create book class
class Book extends Media {
  constructor (tittle, author, pages) {
    super(tittle);
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
// end of book class

// create movie class
class Movie extends Media {
  constructor (tittle, director, runTime) {
    super(tittle);
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
// end of movie class

// create CD class
class CD extends Media {
  constructor (tittle, artist) {
    super(tittle);
    this._artist = artist;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  shuffle() {
    this.songs.sort((item) => {
      return Math.floor(Math.random() * this.songs.length)

    })
  }
}
// end of CD class


// create book instance
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
// end of book instance

// editing historyOfEverything of book instance

console.log('original key value pair:~~~~~~~~~')
console.log(Object.entries(historyOfEverything))

console.log('edited key value pair:~~~~~~~~~')

historyOfEverything.toggleCheckOutStatus()

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())

console.log(Object.entries(historyOfEverything))

// end of editing historyOfEverything of book instance

// create Movie instance
const speed = new Movie('Speed', 'Jan de Bont', 116)
// end of Movie instance

// editing speed of Movie instance

console.log('original key value pair:~~~~~~~~~')
console.log(Object.entries(speed))

console.log('edited key value pair:~~~~~~~~~')

speed.toggleCheckOutStatus()

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating())

console.log(Object.entries(speed))

// end of editing speed of Movie instance





// testing 
console.log('testing below~~~~~~~~~~~~~~~~~~~~~~~')
const test = new Media ('testTittle')
//
test.toggleCheckOutStatus()
//
test.rating[0] = 1;
test.rating[0] = 10;
test.rating[0] = 11;
test.getAverageRating()
//
test.addRating(6)

console.log(Object.entries(test))

console.log('CD testing below~~~~~~~~~~~~~~~~~~~~~~~')
const testcd = new CD ('testcdtittle', 'testcdartist')


// end of testing





