"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var Paper_1 = require("@material-ui/core/Paper");
var Typography_1 = require("@material-ui/core/Typography");
var react_1 = require("@xstate/react");
var AccountList_1 = require("components/AccountList");
var react_2 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AccountForm_1 = require("../components/AccountForm");
var AccountsContainer = function (_a) {
    var accountsService = _a.accountsService;
    var match = react_router_dom_1.useRouteMatch();
    var _b = react_1.useService(accountsService), accountsState = _b[0], sendAccounts = _b[1];
    var createAccount = function (payload) {
        sendAccounts("CREATE", payload);
    };
    var deleteAccount = function (payload) {
        sendAccounts("DELETE", payload);
    };
    react_2.useEffect(function () {
        sendAccounts("FETCH");
    }, [sendAccounts]);
    if (match.url === "/accounts/new") {
        return (react_2["default"].createElement(Paper_1["default"], null,
            react_2["default"].createElement(Typography_1["default"], { component: "h2", variant: "h6", color: "primary", gutterBottom: true }, "Create Account"),
            react_2["default"].createElement(AccountForm_1["default"], { createAccount: createAccount })));
    }
    return (react_2["default"].createElement(Paper_1["default"], null,
        react_2["default"].createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center" },
            react_2["default"].createElement(core_1.Grid, { item: true },
                react_2["default"].createElement(Typography_1["default"], { component: "h2", variant: "h6", color: "primary", gutterBottom: true }, "Accounts")),
            react_2["default"].createElement(core_1.Grid, { item: true },
                react_2["default"].createElement(core_1.Button, { variant: "contained", color: "primary", size: "large", component: react_router_dom_1.Link, to: "/accounts/new", "data-test": "account-new" }, "Create"))),
        react_2["default"].createElement(AccountList_1["default"], { accounts: accountsState === null || accountsState === void 0 ? void 0 : accountsState.context.results, deleteAccount: deleteAccount })));
};
exports["default"] = AccountsContainer;
