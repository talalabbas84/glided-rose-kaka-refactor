'use strict';

; (function (exports) {
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
  exports.Item = Item;
}(this));