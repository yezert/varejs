function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function wonLoadEvent(func) {
    var old_onload = window.onload;
    if (typeof window.onload != "function") window.onload = func;
    else window.onload = function() {
        old_onload();
        func();
    };
}
var Component = function Component(name, template) {
    "use strict";
    _classCallCheck(this, Component);
    wonLoadEvent(function() {
        var all_name = document.querySelectorAll("".concat(name));
        console.log(all_name);
        all_name.forEach(function(x) {
            x.innerHTML = template;
        });
    });
};
var Data = function Data(name, value) {
    "use strict";
    _classCallCheck(this, Data);
    wonLoadEvent(function() {
        var allt = document.body.querySelectorAll("*");
        allt.forEach(function(x) {
            var text = x.textContent;
            var rep = /{.*}/;
            x.setAttribute("vare-org-inner", text);
            var gr = rep.exec(text);
            if (gr) {
                var thi = gr[0];
                var dname = thi.slice(1, -1);
                dname === name && (x.textContent = value);
            }
        });
    });
};
var select = function(selector, func) {
    wonLoadEvent(function() {
        var all = document.querySelectorAll(selector);
        all.forEach(function(x) {
            func(x);
        });
    });
};
(function() {
    window["Vare"] = {
        Component: Component,
        Data: Data,
        select: select
    };
})();
