
'use strict';

; (function (exports) {
  class BackStagePasses extends StandardItem {
    _calculateDepreciation() {
      switch (true) {
        case this.sellIn <= 0:
          return this.quality;
        case this.sellIn <= 5:
          return -3;
        case this.sellIn <= 10:
          return -2;
        default:
          return -1;
      }
    }
  }
  exports.BackStagePasses = BackStagePasses;
}(this));