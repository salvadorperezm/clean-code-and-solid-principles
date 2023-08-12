(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Product: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Storing product in the Database: ", product);
    }
  }

  class Mailer {
    notifyClients() {
      console.log("Sending an email to the clients.");
    }
  }

  class ProductBloc {
    private mailer: Mailer;
    private productService: ProductService;

    constructor(mailer: Mailer, productService: ProductService) {
      this.mailer = mailer;
      this.productService = productService;
    }

    loadProducts(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyUsers() {
      this.mailer.notifyClients();
    }
  }

  class CartBloc {
    public itemsInCart: Object[] = [];

    static addToCart(productId: number) {
      console.log("Adding to cart: ", productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();
  const productBloc = new ProductBloc(mailer, productService);

  productBloc.loadProducts(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyUsers();
  CartBloc.addToCart(10);
})();
