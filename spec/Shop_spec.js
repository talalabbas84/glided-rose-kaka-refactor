'use strict';

describe("Shop", function () {
  describe('#updateStock', function () {
    let mockTomorrowItem, mockItem, shop;

    beforeEach(function () {
      mockTomorrowItem = {};
      mockItem = { tomorrowItem: () => { return mockTomorrowItem; } };
      shop = new Shop([mockItem]);
    });

    it("should call #tomorrowItem on each item", function () {
      spyOn(mockItem, "tomorrowItem");
      shop.updateStock();
      expect(mockItem.tomorrowItem).toHaveBeenCalled();
    });
    it("should return a list of updated items", function () {
      expect(shop.updateStock()).toEqual([mockTomorrowItem]);
    });
  });
});