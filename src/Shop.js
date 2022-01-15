class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateStock() {
    return this.items.map(function (item) {
      return item.itemTomorrow();
    });
  }
}

export default Shop;