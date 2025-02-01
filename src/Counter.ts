export class Counter {
  #value = 0;

  constructor(initialValue: number = 0) {
    this.#value = initialValue;
  }

  get value(): number {
    return this.#value;
  }

  increment(): void {
    this.#value = this.#value + 1;
  }

  decrement(): void {
    this.#value = this.#value - 1;
  }
}
