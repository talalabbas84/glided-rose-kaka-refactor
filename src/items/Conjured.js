'use strict';

; (function (exports) {
  class Conjured extends StandardItem {
    _calculateDepreciation() {
      return this.sellIn <= 0 ? 4 : 2;
    }
  }
  exports.Conjured = ConjuredItem;
}(this))