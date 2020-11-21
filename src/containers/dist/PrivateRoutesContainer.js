"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
var MainLayout_1 = require("../components/MainLayout");
var PrivateRoute_1 = require("../components/PrivateRoute");
var AccountsContainer_1 = require("./AccountsContainer");
var PrivateRoutesContainer = function (_a) {
    var isLoggedIn = _a.isLoggedIn, authService = _a.authService, snackbarService = _a.snackbarService, accountsService = _a.accountsService;
    return (react_1["default"].createElement(MainLayout_1["default"], { authService: authService },
        react_1["default"].createElement(react_router_1.Switch, null,
            react_1["default"].createElement(PrivateRoute_1["default"], { isLoggedIn: isLoggedIn, path: "/accounts" },
                react_1["default"].createElement(AccountsContainer_1["default"], { accountsService: accountsService, authService: authService })))));
};
exports["default"] = PrivateRoutesContainer;
