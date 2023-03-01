import Buyable from './Buyable';

export default class Device implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number | string,
    public count = 1,
  ) {}

  add(): void {
    this.count += 1
  }

  delete(): void {
    this.count -= 1;
  }
}
