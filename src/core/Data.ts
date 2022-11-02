export class Data {
	public name: string;
	public value: any;
	constructor(name: string, value: any) {
		this.name = name;
		this.setData(value);
	}
	setData(value) {
		let name = this.name;
		let allt = document.body.querySelectorAll("*");
		allt.forEach((x) => {
			if (x.hasAttribute("vare-org-text")) {
				let text: any | string = x.getAttribute("vare-org-text");
				var rep = /{.*}/;
				let gr = rep.exec(text);
				if (gr) {
					let thi = gr[0];
					let dname = thi.slice(1, -1);
					dname === name ? (x.textContent = value) : null;
				}
			} else {
				let text: any | string = x.textContent;
				var rep = /{.*}/;
				let gr = rep.exec(text);
				if (gr) {
					x.setAttribute("vare-org-text", text);
					let thi = gr[0];
					let dname = thi.slice(1, -1);
					dname === name ? (x.textContent = value) : null;
				}
			}
		});
		this.value = value;
	}
	getData() {
		return this.value;
	}
}
