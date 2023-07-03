type Size = "" | "S" | "M" | "L" | "XL";

class Product {
	constructor(
		private pname: string = "",
		private price: number = 0,
		private size: Size = ""
	) {}

	// Funcion del profesor - CodeWhisperer
	isProductReady(): boolean {
		for (const key in this) {
			switch (typeof this[key]) {
				case "string":
					if ((<string>(<unknown>this[key])).length <= 0)
						throw new Error(`${key} is empty`);
					break;
				case "number":
					if (<number>(<unknown>this[key]) <= 0)
						throw new Error(`${key} is zero`);
					break;
				default:
					throw new Error(`${typeof this[key]} is not supported`);
			}
		}
		return true;
	}

	toString() {
		if (!this.isProductReady) return;
		this.isRequired(this.pname, "Product name is required");
		this.isRequired(this.price, "Price is required");
		this.isRequired(this.size, "Size is required");

		return `${this.pname} $(${this.price}), Talla: ${this.size}`;
	}

	// Aplicando DRY - Mi función
	isRequired(value: string | number, message: string) {
		if (typeof value === "number") {
			if (value <= 0) throw new Error(message);
		}
		if (typeof value === "string") {
			if (value.length <= 0 || value === undefined) throw new Error(message);
		}
	}
}
(() => {
	const bluePants = new Product("bluePants", 20);
	console.log(bluePants.toString());
})();
