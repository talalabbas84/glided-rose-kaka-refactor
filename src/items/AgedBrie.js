import StandardItem from "./StandardItem";

class AgedBrie extends StandardItem {
  _calculateDepreciation() {
    return this.sellIn <= 0 ? -2 : -1;
  }

}

export default AgedBrie;