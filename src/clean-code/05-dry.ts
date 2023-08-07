type Size = "" | "S" | "M" | "L";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductRead(): boolean {
    for (const key in this) {
      if (!this[key]) {
        throw Error(`${typeof this[key]} is not valid`);
      }
    }
    return true;
  }

  toString() {
    this.isProductRead();
  }
}

(() => {
  const bluePlants = new Product("Blue large pants", 10, "M");
  console.log(bluePlants.toString());
})();
