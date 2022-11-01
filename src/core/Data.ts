import { wonLoadEvent } from "../fixload";

export class Data {
	constructor(name: string, value: any) {
		wonLoadEvent(() => {
			let allt = document.body.querySelectorAll("*");
			allt.forEach((x) => {
				let text: any | string = x.textContent;
				var rep = /{.*}/;
				x.setAttribute("vare-org-inner", text);
				let gr = rep.exec(text);
				if (gr) {
					let thi = gr[0];
					let dname = thi.slice(1, -1);
					dname === name ? (x.textContent = value) : null;
				}
			});
		});
	}
}
