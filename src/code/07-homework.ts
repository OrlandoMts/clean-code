(() => {
	//* Aplicar el principio de responsabilidad única
	//* Priorizar la composición frente a la herencia

	type HtmlType = "input" | "select" | "textarea" | "radio";

	interface HtmlElementProps {
		id: string;
		placeholder: string;
		value: string;
		type?: HtmlType;
	}

	class HtmlElement {
		constructor(public id: string, public type: HtmlType) {}
	}

	class InputAttributes {
		constructor(public value: string, public placeholder: string) {}
	}

	class InputEvents {
		constructor() {}

		setFocus() {}
		getValue() {}
		isActive() {}
		removeValue() {}
	}

	//? Idea para la nueva clase InputElement
	class InputElement {
		private _htmlElement: HtmlElement;
		private _inputAttributes: InputAttributes;
		private _inputEvents: InputEvents;

		constructor({ value, placeholder, id }: HtmlElementProps) {
			this._htmlElement = new HtmlElement(id, "input");
			this._inputAttributes = new InputAttributes(value, placeholder);
			this._inputEvents = new InputEvents();
		}
	}

	const nameField = new InputElement({
		id: "txtName",
		placeholder: "Enter first name",
		value: "Orlando",
	});

	/* class InputElement {
		private _htmlElement: HtmlElement;
		private _inputAttributes: InputAttributes;
		private _inputEvents: InputEvents;

		constructor(value: string, placeholder: string, id: string) {
			this._htmlElement = new HtmlElement(id, "input");
			this._inputAttributes = new InputAttributes(value, placeholder);
			this._inputEvents = new InputEvents();
		}
	}

	const nameField = new InputElement("Orlando", "Enter first name", "txtName"); */

	console.log({ nameField });
})();
