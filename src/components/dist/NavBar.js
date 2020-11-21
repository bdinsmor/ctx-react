"use strict";
exports.__esModule = true;
var layout_1 = require("antd/lib/layout/layout");
var react_1 = require("react");
var NavBar = function () {
    return (react_1["default"].createElement(layout_1.Header, { style: { position: "fixed", zIndex: 1, width: "100%" } },
        react_1["default"].createElement("div", { className: "logo" })));
};
exports["default"] = NavBar;
