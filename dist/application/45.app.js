(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./src/modules/treatments/components/page.treatments.tsx":
/*!***************************************************************!*\
  !*** ./src/modules/treatments/components/page.treatments.tsx ***!
  \***************************************************************/
/*! exports provided: Treatments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Treatments\", function() { return Treatments; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nlet Treatments = class Treatments extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.selectedID = _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].currentLocation.split(\"/\")[1];\n        this.inputElement = null;\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canEditTreatments;\n    }\n    get selectedIndex() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list.findIndex(x => x._id === this.selectedID);\n    }\n    get selectedTreatment() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list[this.selectedIndex];\n    }\n    onChange(e) {\n        console.log(\" Files: \" + e.target.files[0].name);\n        Object(papaparse__WEBPACK_IMPORTED_MODULE_6__[\"parse\"])(e.target.files[0], {\n            complete: (result) => {\n                let datax = result.data;\n                const found = datax.some((e) => e.id !== undefined && e.name !== undefined && e.birth !== undefined && e.gender !== undefined && e.tags !== undefined && e.address !== undefined && e.email !== undefined\n                    && e.phone !== undefined && e.labels !== undefined && e.history !== undefined && e.gallery !== undefined && e.diagnosis !== undefined);\n                if (found) {\n                    //alert('Working!')\n                    console.log(\"Found val: \" + JSON.stringify(datax));\n                    for (let val of datax) {\n                        if (val.id !== \"\") {\n                            var treat = new _modules__WEBPACK_IMPORTED_MODULE_3__[\"Treatment\"]();\n                            var foundItem = _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list.find(treatment => treatment._id === val.id);\n                            if (foundItem) {\n                                break;\n                            }\n                            treat._id = val.id;\n                            treat.c_date = val.cdate;\n                            treat.item = val.item;\n                            treat.desc = val.desc;\n                            treat.lab_name = val.lab;\n                            treat.patient_name = val.patient;\n                            treat.fees = val.fees;\n                            treat.status = val.status;\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list.push(treat);\n                            alert(\"Added data into Lab Order Database\");\n                        }\n                    }\n                }\n                else {\n                    alert('Sorry, this CSV file does not match the required Format. Please get the proper format before Uploading.');\n                }\n                //console.log(\"CSV results:\"+ JSON.stringify(result.data)); \n            },\n            header: true\n        });\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"tc-pg p-15 p-l-10 p-r-10\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"input\", { type: \"file\", name: \"import\", onChange: this.onChange, ref: input => this.inputElement = input, accept: \".csv\", style: { opacity: 0 } }),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"DataTableComponent\"], { onDelete: this.canEdit\n                    ? id => {\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].deleteModal(id);\n                    }\n                    : undefined, commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add Order\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Add Order\"),\n                            onClick: () => {\n                                const treatment = new _modules__WEBPACK_IMPORTED_MODULE_3__[\"Treatment\"]();\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list.push(treatment);\n                                this.selectedID = treatment._id;\n                            },\n                            iconProps: {\n                                iconName: \"Add Order\"\n                            }\n                        },\n                        {\n                            key: \"addImport\",\n                            title: \"Import Lab Order\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Import Lab Order\"),\n                            onClick: () => {\n                                this.inputElement.click();\n                            },\n                            iconProps: {\n                                iconName: \"Edit\"\n                            }\n                        },\n                        {\n                            key: \"addExport\",\n                            title: \"Export Lab Order\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Export Lab Order\"),\n                            onClick: () => {\n                                var d = confirm('Are you sure you want to export this Lab Order data?');\n                                if (d) {\n                                    let treat = _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list;\n                                    let newpat = treat.map(t => {\n                                        return {\n                                            \"Id\": t._id,\n                                            \"Creation Date\": t.c_date,\n                                            \"Item Title\": t.item,\n                                            \"Description\": t.desc,\n                                            \"Lab Name\": t.lab_name,\n                                            \"Patient Name\": t.patient_name,\n                                            \"Fees\": t.fees,\n                                            \"Status\": t.status\n                                        };\n                                    });\n                                    var csv = Object(papaparse__WEBPACK_IMPORTED_MODULE_6__[\"unparse\"])(newpat);\n                                    var blob = new Blob([csv]);\n                                    var a = window.document.createElement(\"a\");\n                                    a.href = window.URL.createObjectURL(blob);\n                                    a.download = \"labs.csv\";\n                                    document.body.appendChild(a);\n                                    a.click(); // IE: \"Access is denied\"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access\n                                    document.body.removeChild(a);\n                                }\n                            },\n                            iconProps: {\n                                iconName: \"Edit\"\n                            }\n                        }\n                    ]\n                    : [], heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Lab Order ID\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Date of Creation\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Item Title\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Description\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Lab Name\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Patient Name\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Fees\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Status\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Edit\")\n                ], rows: _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list.map(treatment => {\n                    /*\tconst now = new Date().getTime();\n                        let done = 0;\n                        let upcoming = 0;\n\n                        const appointmentsArr = appointments.list;\n\n                        for (\n                            let index = 0;\n                            index < appointmentsArr.length;\n                            index++\n                        ) {\n                            const appointment = appointmentsArr[index];\n                            if (appointment.treatmentID !== treatment._id) {\n                                continue;\n                            }\n                            if (appointment.date > now) {\n                                upcoming++;\n                            }\n                            if (appointment.isDone) {\n                                done++;\n                            }\n                        }*/\n                    return {\n                        id: treatment._id,\n                        searchableString: treatment.searchableString,\n                        cells: [\n                            {\n                                dataValue: treatment._id,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"b\", null,\n                                        \" \",\n                                        treatment._id,\n                                        \" \"))),\n                                onClick: () => {\n                                    this.selectedID = treatment._id;\n                                },\n                                className: \"no-label\"\n                            },\n                            {\n                                dataValue: treatment.c_date,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, treatment.c_date)),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: treatment.item,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, treatment.item)),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: treatment.desc,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, treatment.desc)),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: treatment.lab_name,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, treatment.lab_name)),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: treatment.patient_name,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, treatment.patient_name)),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: treatment.fees,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                    _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"currencySymbol\"),\n                                    \" \",\n                                    treatment.fees)),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: treatment.status,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, treatment.status)),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: treatment._id,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: { iconName: \"Edit\" } })),\n                                onClick: () => {\n                                    this.selectedID = treatment._id;\n                                },\n                                className: \"no-label\"\n                            },\n                        ]\n                    };\n                }), maxItemsOnLoad: 20 }),\n            this.selectedTreatment ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { isOpen: !!this.selectedTreatment, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    this.selectedID = \"\";\n                }, onRenderNavigation: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], { className: \"panel-heading\" },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 20 }, this.selectedTreatment ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: this.selectedTreatment.item, subText: `${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Expenses\")}: ${_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"currencySymbol\")}${this.selectedTreatment.fees} ${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\" charge\")}` })) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"p\", null))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 4, className: \"close\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: { iconName: \"cancel\" }, onClick: () => {\n                                this.selectedID = \"\";\n                            } })))) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"AsyncComponent\"], { key: \"\", loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](this, void 0, void 0, function* () {\n                        const TreatmentDetailsPanel = (yield __webpack_require__.e(/*! import() */ 46).then(__webpack_require__.bind(null, /*! ./treatment-details */ \"./src/modules/treatments/components/treatment-details.tsx\")))\n                            .TreatmentDetailsPanel;\n                        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](TreatmentDetailsPanel, { treat: this.selectedTreatment, selected: this.selectedIndex }));\n                    }) }))) : (\"\")));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], Treatments.prototype, \"selectedID\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], Treatments.prototype, \"canEdit\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], Treatments.prototype, \"selectedIndex\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], Treatments.prototype, \"selectedTreatment\", null);\nTreatments = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], Treatments);\n\n\n\n//# sourceURL=webpack:///./src/modules/treatments/components/page.treatments.tsx?");

/***/ })

}]);