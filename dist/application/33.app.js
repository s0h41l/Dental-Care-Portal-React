(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./src/modules/endodontic/components/ortho-gallery.tsx":
/*!*************************************************************!*\
  !*** ./src/modules/endodontic/components/ortho-gallery.tsx ***!
  \*************************************************************/
/*! exports provided: OrthoGalleryPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OrthoGalleryPanel\", function() { return OrthoGalleryPanel; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nlet OrthoGalleryPanel = class OrthoGalleryPanel extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.openCephalometricItem = undefined;\n        this.cephalometricToViewIndex = -1;\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canEditOrtho;\n    }\n    get cephalometricToView() {\n        return this.props.orthoCase.cephalometricHistory[this.cephalometricToViewIndex];\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n            this.props.orthoCase.patient ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"PatientGalleryPanel\"], { patient: this.props.orthoCase.patient })) : (\"\"),\n            this.openCephalometricItem ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"AsyncComponent\"], { key: \"ortho-records\", loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](this, void 0, void 0, function* () {\n                    const Component = (yield __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./cephalometric */ \"./src/modules/endodontic/components/cephalometric.tsx\")))\n                        .CephalometricEditorPanel;\n                    return this.openCephalometricItem ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](Component, { onDismiss: () => {\n                            this.openCephalometricItem = undefined;\n                            this.props.orthoCase.triggerUpdate++;\n                        }, item: this.openCephalometricItem })) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null));\n                }) })) : (\"\"),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Cephalometric Analysis`) }, _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].online ? (_core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].dropboxActive ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                this.props.orthoCase.cephalometricHistory.map((c, i) => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], { key: c.imgPath, style: {\n                        borderBottom: \"1px solid #e3e3e3\",\n                        marginBottom: \"25px\"\n                    } },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { xs: 20 },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { style: {\n                                marginBottom: 10,\n                                cursor: \"pointer\"\n                            }, onClick: () => {\n                                this.cephalometricToViewIndex = i;\n                            }, key: i },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: `${i + 1}: ${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Analysis\")} #${i + 1}`, secondaryElement: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(c.date, _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"date_format\"), _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"month_format\"))), size: 3, onClick: () => {\n                                    this.openCephalometricItem = this.props.orthoCase.cephalometricHistory[i];\n                                } }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { xs: 4, style: {\n                            textAlign: \"right\"\n                        } },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: {\n                                iconName: \"trash\"\n                            }, onClick: () => this.props.orthoCase.cephalometricHistory.splice(i, 1) }))))),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PickAndUploadComponent\"], { allowMultiple: false, accept: _common_components__WEBPACK_IMPORTED_MODULE_1__[\"fileTypes\"].image, onFinish: (res) => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](this, void 0, void 0, function* () {\n                        this.props.orthoCase.cephalometricHistory.push({\n                            date: new Date().getTime(),\n                            imgPath: res[0],\n                            pointCoordinates: \"{}\"\n                        });\n                        this.openCephalometricItem = this.props.orthoCase.cephalometricHistory[this.props.orthoCase\n                            .cephalometricHistory.length - 1];\n                    }), targetDir: `${_core__WEBPACK_IMPORTED_MODULE_2__[\"CEPHALOMETRIC_DIR\"]}/${this.props.orthoCase._id}` },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DefaultButton\"], { iconProps: { iconName: \"Add\" }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"New analysis\") })))) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"A valid DropBox access token is required for this section\")))) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"You can not access cephalometric data while offline\"))))));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], OrthoGalleryPanel.prototype, \"openCephalometricItem\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], OrthoGalleryPanel.prototype, \"cephalometricToViewIndex\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], OrthoGalleryPanel.prototype, \"canEdit\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], OrthoGalleryPanel.prototype, \"cephalometricToView\", null);\nOrthoGalleryPanel = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], OrthoGalleryPanel);\n\n\n\n//# sourceURL=webpack:///./src/modules/endodontic/components/ortho-gallery.tsx?");

/***/ })

}]);