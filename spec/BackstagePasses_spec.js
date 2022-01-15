'use strict';


describe('BackStagePass', function () {
  it('increases quality value to a maximum of 50', function () {
    let testPass = new BackStagePasses('pass', 11, 50);
    expect(testPass.tomorrowItem().quality).toEqual(50);
  });
  describe('given that the sellIn value is greater than 10', function () {
    it('increases quality value by 1', function () {
      let testPass = new BackStagePasses('pass', 11, 20);
      expect(testPass.tomorrowItem().quality).toEqual(21);
    });
  });
  describe('given that the sellIn value is 10 or less', function () {
    it('increases quality value by 2', function () {
      let testPass = new BackStagePasses('pass', 10, 20);
      expect(testPass.tomorrowItem().quality).toEqual(22);
    });
  });
  describe('given that the sellIn value is 5 or less', function () {
    it('increases quality value by 3', function () {
      let testPass = new BackStagePasses('pass', 5, 20);
      expect(testPass.tomorrowItem().quality).toEqual(23);
    });
  });
  describe('given that the sellIn value is 0', function () {
    it('sets quality value to 0', function () {
      let testPass = new BackStagePasses('pass', 0, 20);
      expect(testPass.tomorrowItem().quality).toEqual(0);
    });
  });
  describe('given that the sellIn value is less than 0', function () {
    it('sets quality value to 0', function () {
      let testPass = new BackStagePasses('pass', -1, 20);
      expect(testPass.tomorrowItem().quality).toEqual(0);
    });
  });
});