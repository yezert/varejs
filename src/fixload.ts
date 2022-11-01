export function wonLoadEvent(func: Function | any) {
	var old_onload: Function | any = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = () => {
			old_onload();
			func();
		};
	}
}
