export const select = (selector: any, func: Function) => {
	let all = document.querySelectorAll(selector);
	all.forEach((x) => {
		func(x);
	});
};
