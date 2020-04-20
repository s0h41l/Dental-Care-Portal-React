(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./src/modules/consents/components/page.tsx":
/*!**************************************************!*\
  !*** ./src/modules/consents/components/page.tsx ***!
  \**************************************************/
/*! exports provided: Consents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Consents\", function() { return Consents; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n\n\n\n\n\n\n\n\nlet Consents = class Consents extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.selectedID = _core__WEBPACK_IMPORTED_MODULE_4__[\"router\"].currentLocation.split(\"/\")[1];\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_4__[\"user\"].currentUser.canEditTreatments;\n    }\n    get selectedIndex() {\n        return _modules__WEBPACK_IMPORTED_MODULE_6__[\"consents\"].list.findIndex(x => x._id === this.selectedID);\n    }\n    get selectedConsent() {\n        return _modules__WEBPACK_IMPORTED_MODULE_6__[\"consents\"].list[this.selectedIndex];\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: \"tc-pg p-15 p-l-10 p-r-10\" },\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_5__[\"DataTableComponent\"], { onDelete: this.canEdit\n                    ? id => {\n                        _modules__WEBPACK_IMPORTED_MODULE_6__[\"consents\"].deleteModal(id);\n                    }\n                    : undefined, commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add new\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_4__[\"text\"])(\"Add new\"),\n                            onClick: () => {\n                                const c = new _modules__WEBPACK_IMPORTED_MODULE_6__[\"Consent\"]();\n                                _modules__WEBPACK_IMPORTED_MODULE_6__[\"consents\"].list.push(c);\n                                this.selectedID =\n                                    c._id;\n                            },\n                            iconProps: {\n                                iconName: \"Add\"\n                            }\n                        }\n                    ]\n                    : [], heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_4__[\"text\"])(\"Consent ID\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_4__[\"text\"])(\"Title\"),\n                ], rows: _modules__WEBPACK_IMPORTED_MODULE_6__[\"consents\"].list.map(consent => {\n                    /*\tconst now = new Date().getTime();\n                        let done = 0;\n                        let upcoming = 0;\n    \n                        const appointmentsArr = appointments.list;\n    \n                        for (\n                            let index = 0;\n                            index < appointmentsArr.length;\n                            index++\n                        ) {\n                            const appointment = appointmentsArr[index];\n                            if (appointment.treatmentID !== treatment._id) {\n                                continue;\n                            }\n                            if (appointment.date > now) {\n                                upcoming++;\n                            }\n                            if (appointment.isDone) {\n                                done++;\n                            }\n                        }*/\n                    return {\n                        id: consent._id,\n                        searchableString: consent.title,\n                        cells: [\n                            {\n                                dataValue: consent._id,\n                                component: (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", null,\n                                    react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"b\", null,\n                                        \" \",\n                                        consent._id,\n                                        \" \"))),\n                                onClick: () => {\n                                    this.selectedID = consent._id;\n                                },\n                                className: \"no-label\"\n                            },\n                            {\n                                dataValue: consent._id,\n                                component: (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", null, consent.title ? JSON.parse(consent.title).blocks[0].text : \"\")),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: consent._id,\n                                component: (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: { iconName: \"Edit\" } })),\n                                onClick: () => {\n                                    this.selectedID = consent._id;\n                                },\n                                className: \"no-label\"\n                            },\n                        ]\n                    };\n                }), maxItemsOnLoad: 20 }),\n            this.selectedConsent ? (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { isOpen: !!this.selectedConsent, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    this.selectedID = \"\";\n                }, onRenderNavigation: () => (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], { className: \"panel-heading\" },\n                    react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], { span: 20 }),\n                    react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], { span: 4, className: \"close\" },\n                        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: { iconName: \"cancel\" }, onClick: () => {\n                                this.selectedID = \"\";\n                            } })))) },\n                react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_5__[\"AsyncComponent\"], { key: \"\", loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](this, void 0, void 0, function* () {\n                        const ConsentsDetailsPanel = (yield Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! ./consents-details */ \"./src/modules/consents/components/consents-details.tsx\")))\n                            .ConsentsDetailsPanel;\n                        return (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](ConsentsDetailsPanel, { consent: this.selectedConsent, selected: this.selectedIndex }));\n                    }) }))) : (\"\")));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_2__[\"observable\"]\n], Consents.prototype, \"selectedID\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_2__[\"computed\"]\n], Consents.prototype, \"canEdit\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_2__[\"computed\"]\n], Consents.prototype, \"selectedIndex\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_2__[\"computed\"]\n], Consents.prototype, \"selectedConsent\", null);\nConsents = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_3__[\"observer\"]\n], Consents);\n\n\n\n//# sourceURL=webpack:///./src/modules/consents/components/page.tsx?");

/***/ })

}]);