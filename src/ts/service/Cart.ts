import Buyable from "../domain/Buyable";
export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    if (!this._items.find((el) => el.id === item.id)) {
      this._items.push(item);
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  countTotal(): number {
    let sum: number = 0;
    this._items.forEach((item: Buyable) => {
      sum += item.price * item.count;
    });
    return sum;
  }

  countTotalWithDiscount(discount: number): number {
    return this.countTotal() * (1 - discount / 100);
  }

  removeCart(id: number): void {
    this._items = this._items.filter((item: Buyable) => item.id !== id);
  }
}
