(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./src/main-components/header.tsx":
/*!****************************************!*\
  !*** ./src/main-components/header.tsx ***!
  \****************************************/
/*! exports provided: HeaderView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderView\", function() { return HeaderView; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nlet HeaderView = class HeaderView extends react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"] {\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"div\", { className: \"header-component\" },\n            react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null,\n                react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 8 },\n                    react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"section\", { className: \"menu-button\" },\n                        react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_4__[\"IconButton\"], { onClick: () => {\n                                _core__WEBPACK_IMPORTED_MODULE_2__[\"menu\"].show();\n                            }, disabled: false, iconProps: { iconName: \"GlobalNavButton\" }, title: \"GlobalNavButton\", ariaLabel: \"GlobalNavButton\" }))),\n                react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 8 },\n                    react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"section\", { className: \"title\" }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].currentNamespace || \"Home\"))),\n                react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 8 },\n                    react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"section\", { className: \"right-buttons\" },\n                        _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].online ? (react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_4__[\"TooltipHost\"], { content: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Sync with server\") },\n                            react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_4__[\"IconButton\"], { onClick: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](this, void 0, void 0, function* () {\n                                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].reSyncing = true;\n                                    yield _core__WEBPACK_IMPORTED_MODULE_2__[\"resync\"].resync();\n                                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].reSyncing = false;\n                                }), iconProps: { iconName: \"Sync\" }, className: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].reSyncing ? \"rotate\" : \"\", title: \"Re-Sync\" }))) : (react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"span\", { className: \"offline\" },\n                            react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], { iconName: \"WifiWarning4\" }))),\n                        react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_4__[\"TooltipHost\"], { content: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"User panel\") },\n                            react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_4__[\"IconButton\"], { onClick: () => (_core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].visible = true), disabled: false, iconProps: { iconName: \"Contact\" } })))))));\n    }\n};\nHeaderView = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_3__[\"observer\"]\n], HeaderView);\n\n\n\n//# sourceURL=webpack:///./src/main-components/header.tsx?");

/***/ })

}]);