import { wonLoadEvent } from "../fixload";
export class Component {
	constructor(name: string, template: any) {
		wonLoadEvent(() => {
			let all_name = document.querySelectorAll(`${name}`);
			console.log(all_name);
			all_name.forEach((x) => {
				x.innerHTML = template;
			});
		});
	}
}
