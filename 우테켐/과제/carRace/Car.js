export default class {
  #name;
  #count;

  constructor(name, count) {
    this.#name = name;
    this.#count = count;
  }

  getName() {
    return this.#name;
  }

  getCount() {
    return this.#count;
  }

  increaseCount() {
    this.#count++;
  }
}
