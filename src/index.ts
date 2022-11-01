import { Component } from "./core/component";
import { Data } from "./core/Data";
import { select } from "./core/select";

(function () {
	window["Vare"] = {
		Component: Component,
		Data: Data,
		select: select,
	};
})();
