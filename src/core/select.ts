import { wonLoadEvent } from "../fixload";

export const select = (selector: any, func: Function) => {
	wonLoadEvent(() => {
		let all = document.querySelectorAll(selector);
		all.forEach((x) => {
			func(x);
		});
	});
};
