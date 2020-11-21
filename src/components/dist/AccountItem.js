"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var ListItem_1 = require("@material-ui/core/ListItem");
var react_1 = require("react");
var AccountListItem = function (_a) {
    var account = _a.account, deleteAccount = _a.deleteAccount;
    return (react_1["default"].createElement(ListItem_1["default"], { "data-test": "account-list-item-" + account.id },
        react_1["default"].createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "flex-start" },
            react_1["default"].createElement(core_1.Grid, { item: true },
                react_1["default"].createElement(core_1.Typography, { variant: "body1", color: "primary", gutterBottom: true },
                    account.accountName,
                    " ",
                    account.isDeleted ? "(Deleted)" : undefined)),
            !account.isDeleted && (react_1["default"].createElement(core_1.Grid, { item: true },
                react_1["default"].createElement(core_1.Button, { variant: "contained", color: "secondary", size: "large", "data-test": "account-delete", onClick: function () {
                        deleteAccount({ id: account.id });
                    } }, "Delete"))))));
};
exports["default"] = AccountListItem;
