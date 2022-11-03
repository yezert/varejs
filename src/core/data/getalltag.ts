export function found_all_attrs(name, value) {
	const allt = document.body.querySelectorAll("*");
	allt.forEach((element) => {
		if (element.tagName !== "SCRIPT") {
			const attrs = element.getAttributeNames().reduce((acc, name) => {
				return { ...acc, [name]: element.getAttribute(name) };
			}, {});
			for (let key of Object.keys(attrs)) {
				// console.log(x);
				if (element.hasAttribute(`vare-org-${key}`)) {
					let text: any | string = element.getAttribute(`vare-org-${key}`);
					var rep = /{(.*)}/;
					let gr = rep.exec(text);
					if (gr && !/vare-org-(.*)/.exec(key)) {
						let thi = gr[0];
						let dname = thi.slice(1, -1);
						dname === name ? element.setAttribute(key, text.replace(rep, value)) : null;
					}
				} else {
					let text: any | string = element.getAttribute(key);
					var rep = /{(.*)}/;
					let gr = rep.exec(text);
					if (gr && !/vare-org-(.*)/.exec(key)) {
						element.setAttribute(`vare-org-${key}`, text);
						let thi = gr[0];
						let dname = thi.slice(1, -1);
						dname === name ? element.setAttribute(key, text.replace(rep, value)) : null;
					}
				}
			}
		}
	});
}
