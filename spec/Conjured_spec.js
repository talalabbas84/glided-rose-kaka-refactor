
'use strict';

describe('Conjured', function () {
  describe('given that the sellIn value is greater than 0', function () {
    it('reduces quality value by 2', function () {
      let testConjured = new Conjured('conjured apple', 3, 10);
      expect(testConjured.tomorrowItem().quality).toEqual(8);
    });
  });
  describe('given that the sellIn value is 0', function () {
    it('increases quality value by 4', function () {
      let testConjured = new Conjured('conjured apple', 0, 10);
      expect(testConjured.tomorrowItem().quality).toEqual(6);
    });
  });
  describe('given that the sellIn value is less than 0', function () {
    it('increases quality value by 4', function () {
      let testConjured = new Conjured('conjured apple', -1, 10);
      expect(testConjured.tomorrowItem().quality).toEqual(6);
    });
  });
});