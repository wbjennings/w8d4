import Item from './Item';

class Shop {
  private _items: Item[];

  constructor() {
    this._items = [
      new Item('Item 1', 10, 'Description 1'),
      new Item('Item 2', 20, 'Description 2'),
      new Item('Item 3', 30, 'Description 3'),
    ];
  }

  public get items(): Item[] {
    return this._items;
  }
}

export default Shop;
