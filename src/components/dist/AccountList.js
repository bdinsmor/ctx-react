"use strict";
exports.__esModule = true;
var List_1 = require("@material-ui/core/List");
var react_1 = require("react");
var AccountItem_1 = require("./AccountItem");
var EmptyList_1 = require("./EmptyList");
var AccountList = function (_a) {
    var accounts = _a.accounts, deleteAccount = _a.deleteAccount;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, (accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0 ? (react_1["default"].createElement(List_1["default"], { "data-test": "account-list" }, accounts.map(function (account) { return (react_1["default"].createElement(AccountItem_1["default"], { key: account.id, account: account, deleteAccount: deleteAccount })); }))) : (react_1["default"].createElement(EmptyList_1["default"], { entity: "Accounts" }))));
};
exports["default"] = AccountList;
