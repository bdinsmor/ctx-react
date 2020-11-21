"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer_1 = require("./Footer");
var NavBar_1 = require("./NavBar");
var MainLayout = function (_a) {
    var children = _a.children, authService = _a.authService;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement("main", { "data-test": "main" },
            react_1["default"].createElement("div", null),
            react_1["default"].createElement("footer", null,
                react_1["default"].createElement(Footer_1["default"], null)))));
};
exports["default"] = MainLayout;
