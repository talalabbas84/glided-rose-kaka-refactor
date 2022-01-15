import StandardItem from "./StandardItem";

class Conjured extends StandardItem {
  _calculateDepreciation() {
    return this.sellIn <= 0 ? 4 : 2;
  }
}

export default Conjured;