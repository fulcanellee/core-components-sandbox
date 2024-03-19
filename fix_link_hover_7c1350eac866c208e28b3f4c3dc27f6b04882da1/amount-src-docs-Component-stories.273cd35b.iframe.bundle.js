"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[4725],{"./packages/amount/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},amount:function(){return amount}});var _amount$parameters,_amount$parameters2,_amount$parameters2$d,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@alfalab/utils/dist/esm/index.js"),storybook_blocks_grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/blocks/grid/index.ts"),_alfalab_core_components_amount__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/amount/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Amount",component:_alfalab_core_components_amount__WEBPACK_IMPORTED_MODULE_3__.Amount,id:"Amount"},amount={name:"Amount",render:function render(){var currencyCodes=(0,_alfalab_utils__WEBPACK_IMPORTED_MODULE_5__.vr)(),value=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("value",10099),currency=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("currency",currencyCodes,"RUR"),minority=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("minority",100),showPlus=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("showPlus",!1),view=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["default","withZeroMinorPart"],"default"),codeFormat=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("codeFormat",["symbolic","letter"],"symbolic"),bold=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("bold",["full","major","none"],"bold"),transparentMinor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("transparentMinor",!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(storybook_blocks_grid__WEBPACK_IMPORTED_MODULE_2__.Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(storybook_blocks_grid__WEBPACK_IMPORTED_MODULE_2__.Row,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(storybook_blocks_grid__WEBPACK_IMPORTED_MODULE_2__.Col,{children:"Amount"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(storybook_blocks_grid__WEBPACK_IMPORTED_MODULE_2__.Col,{children:"Amount.Pure (Без стилей)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(storybook_blocks_grid__WEBPACK_IMPORTED_MODULE_2__.Row,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(storybook_blocks_grid__WEBPACK_IMPORTED_MODULE_2__.Col,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_amount__WEBPACK_IMPORTED_MODULE_3__.Amount,{value:value,currency:currency,minority:minority,showPlus:showPlus,view:view,codeFormat:codeFormat,bold:bold,transparentMinor:transparentMinor})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(storybook_blocks_grid__WEBPACK_IMPORTED_MODULE_2__.Col,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_amount__WEBPACK_IMPORTED_MODULE_3__.Amount.Pure,{value:value,currency:currency,minority:minority,showPlus:showPlus,view:view})})]})]})}};__webpack_exports__.default=meta,amount.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},amount.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_amount$parameters=amount.parameters)||void 0===_amount$parameters?void 0:_amount$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'Amount',\n  render: () => {\n    const currencyCodes = getAllCurrencyCodes();\n    const value = number('value', 10099);\n    const currency = select('currency', currencyCodes, 'RUR');\n    const minority = number('minority', 100);\n    const showPlus = boolean('showPlus', false);\n    const view = select('view', ['default', 'withZeroMinorPart'], 'default');\n    const codeFormat = select('codeFormat', ['symbolic', 'letter'], 'symbolic');\n    const bold = select('bold', ['full', 'major', 'none'], 'bold');\n    const transparentMinor = boolean('transparentMinor', true);\n    return <Container>\n                <Row>\n                    <Col>Amount</Col>\n                    <Col>Amount.Pure (Без стилей)</Col>\n                </Row>\n                <Row>\n                    <Col>\n                        <Amount value={value} currency={currency} minority={minority} showPlus={showPlus} view={view} codeFormat={codeFormat} bold={bold} transparentMinor={transparentMinor} />\n                    </Col>\n                    <Col>\n                        <Amount.Pure value={value} currency={currency} minority={minority} showPlus={showPlus} view={view} />\n                    </Col>\n                </Row>\n            </Container>;\n  }\n}"},null===(_amount$parameters2=amount.parameters)||void 0===_amount$parameters2?void 0:null===(_amount$parameters2$d=_amount$parameters2.docs)||void 0===_amount$parameters2$d?void 0:_amount$parameters2$d.source)})});let __namedExportsOrder=["amount"]}}]);