'use strict';

; (function (exports) {
  class Shop {
    constructor(items = []) {
      this.items = items;
    }
    updateStock() {
      return this.items.map(function (item) {
        return item.tomorrowItem();
      });
    }
  }
  exports.Shop = Shop;
}(this));