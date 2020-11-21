"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var TextField_1 = require("@material-ui/core/TextField");
var formik_1 = require("formik");
var react_1 = require("react");
var react_router_1 = require("react-router");
var yup_1 = require("yup");
var validationSchema = yup_1.object({
    accountName: yup_1.string().min(5, "Must contain at least 5 characters").required("Enter an account name")
});
var AccountForm = function (_a) {
    var createAccount = _a.createAccount, onboarding = _a.onboarding;
    var history = react_router_1.useHistory();
    var initialValues = {
        accountName: ""
    };
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
            setSubmitting(true);
            createAccount(__assign({}, values));
            if (!onboarding) {
                history.push("/accounts");
            }
        } }, function (_a) {
        var isValid = _a.isValid, isSubmitting = _a.isSubmitting;
        return (react_1["default"].createElement(formik_1.Form, { "data-test": "account-form" },
            react_1["default"].createElement(formik_1.Field, { name: "accountName" }, function (_a) {
                var field = _a.field, _b = _a.meta, error = _b.error, value = _b.value, initialValue = _b.initialValue, touched = _b.touched;
                return (react_1["default"].createElement(TextField_1["default"], __assign({ variant: "outlined", margin: "dense", fullWidth: true, required: true, id: "account-name-input", type: "text", placeholder: "Account Name", "data-test": "account-name-input", error: (touched || value !== initialValue) && Boolean(error), helperText: touched || value !== initialValue ? error : "" }, field)));
            }),
            react_1["default"].createElement(core_1.Grid, { container: true, spacing: 2, direction: "row", justify: "flex-start", alignItems: "flex-start" },
                react_1["default"].createElement(core_1.Grid, { item: true },
                    react_1["default"].createElement(core_1.Button, { type: "submit", fullWidth: true, variant: "contained", color: "primary", "data-test": "account-submit", disabled: !isValid || isSubmitting }, "Save")))));
    }));
};
exports["default"] = AccountForm;
