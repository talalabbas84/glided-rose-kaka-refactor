'use strict';

describe('StandardItem', function () {
  describe('#tomorrowItem', function () {
    it('reduces sellIn value by 1', function () {
      let testItem = new StandardItem('apple', 3, 0);
      expect(testItem.tomorrowItem().sellIn).toEqual(2);
    });
    it('reduces quality value to a minimum of 0', function () {
      let testItem = new StandardItem('apple', 3, 0);
      expect(testItem.tomorrowItem().quality).toEqual(0);
    });
    describe('given that the sellIn value is greater than 0', function () {
      it('reduces quality value by 1', function () {
        let testItem = new StandardItem('apple', 3, 3);
        expect(testItem.tomorrowItem().sellIn).toEqual(2);
      });
    });
    describe('given that the sellIn value is 0', function () {
      it('increases quality value by 2', function () {
        let testItem = new StandardItem('apple', 0, 3);
        expect(testItem.tomorrowItem().quality).toEqual(1);
      });
    });
    describe('given that the sellIn value is less than 0', function () {
      it('increases quality value by 2', function () {
        let testItem = new StandardItem('apple', -1, 3);
        expect(testItem.tomorrowItem().quality).toEqual(1);
      });
    });
  });
});