'use strict';

describe('Sulfuras', function () {
  describe('#tomorrowItem', function () {
    let testSulfuras = new Sulfuras('sulfuras', 1, 80);

    it('does not reduce sellIn value', function () {
      expect(testSulfuras.tomorrowItem().sellIn).toEqual(1);
    });
    it("does not change quality value", function () {
      expect(testSulfuras.tomorrowItem().quality).toEqual(80);
    });
  });
});