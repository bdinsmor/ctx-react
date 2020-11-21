"use strict";
exports.__esModule = true;
var react_1 = require("@xstate/react");
var react_2 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AlertBar_1 = require("../components/AlertBar");
var SignInForm_1 = require("../components/SignInForm");
var SignUpForm_1 = require("../components/SignUpForm");
var accountsMachine_1 = require("../machines/accountsMachine");
var authMachine_1 = require("../machines/authMachine");
var snackbarMachine_1 = require("../machines/snackbarMachine");
var PrivateRoutesContainer_1 = require("./PrivateRoutesContainer");
// @ts-ignore
if (window.Cypress) {
    // Expose authService on window for Cypress
    // @ts-ignore
    window.authService = authMachine_1.authService;
}
var App = function () {
    var authState = react_1.useService(authMachine_1.authService)[0];
    var _a = react_1.useMachine(snackbarMachine_1.snackbarMachine), snackbarService = _a[2];
    var _b = react_1.useMachine(accountsMachine_1.accountsMachine), accountsService = _b[2];
    var isLoggedIn = authState.matches("authorized") ||
        authState.matches("refreshing") ||
        authState.matches("updating");
    return (react_2["default"].createElement("div", null,
        isLoggedIn && (react_2["default"].createElement(PrivateRoutesContainer_1["default"], { isLoggedIn: isLoggedIn, authService: authMachine_1.authService, snackbarService: snackbarService, accountsService: accountsService })),
        authState.matches("unauthorized") && (react_2["default"].createElement(react_router_dom_1.Switch, null,
            react_2["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/signup" },
                react_2["default"].createElement(SignUpForm_1["default"], { authService: authMachine_1.authService })),
            react_2["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/signin" },
                react_2["default"].createElement(SignInForm_1["default"], { authService: authMachine_1.authService })),
            react_2["default"].createElement(react_router_dom_1.Route, { path: "/*" },
                react_2["default"].createElement(react_router_dom_1.Redirect, { to: {
                        pathname: "/signin"
                    } })))),
        react_2["default"].createElement(AlertBar_1["default"], { snackbarService: snackbarService })));
};
exports["default"] = App;
