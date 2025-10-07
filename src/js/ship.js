export default class Ship {
  constructor(length, hits, isSunk = false) {
    this.length = length;
    this.hits = hits;
    this.isSunk = isSunk;
  }
}
