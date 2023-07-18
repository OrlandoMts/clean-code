// Ejemplo de SRP
// gist.githubusercontent.com/Klerith/644f0dc4c898370308e029f15224f4f0/raw/5c655e152771f96f5347589cc8aa7058d823462e/01-srp.ts
https: (() => {
	interface Product {
		id: number;
		name: string;
	}

	class ProductService {
		getProduct(id: number) {
			console.log("Producto: ", { id, name: "OLED Tv" });
		}

		saveProduct(product: Product) {
			console.log("Guardando en base de datos", product);
		}
	}

	class CartBloc {
		onAddToCart(productId: number) {
			console.log("Agregando al carrito ", productId);
		}
	}

	class Mailer {
		private fromEmail: string = "udemy@udemy.com";

		sendNotification(template: "clients" | "admins", ...emailList: string[]) {
			// template === 'clients' ? this.sendEmailToClients(emailList) : this.sendEmailToAdmins(emailList);
			console.log("Enviando correo a los clientes");
		}
	}

	class ProductBloc {
		constructor(
			private productService: ProductService,
			private mailer: Mailer
		) {}

		loadProduct(id: number) {
			this.productService.getProduct(id);
		}

		saveProduct(product: Product) {
			this.productService.saveProduct(product);
		}

		notifyClients() {
			this.mailer.sendNotification(
				"clients",
				"123@indelpro.com",
				"456@indelpro.com"
			);
		}
	}

	const productServcie = new ProductService();
	const mailer = new Mailer();
	const cartBloc = new CartBloc();

	const productBloc = new ProductBloc(productServcie, mailer);

	productBloc.loadProduct(10);
	productBloc.saveProduct({ id: 10, name: "OLED TV" });
	mailer.sendNotification(
		"clients",
		"omontes@indelpro.com",
		"ejemplo@tests.com"
	);
	cartBloc.onAddToCart(10);
})();
