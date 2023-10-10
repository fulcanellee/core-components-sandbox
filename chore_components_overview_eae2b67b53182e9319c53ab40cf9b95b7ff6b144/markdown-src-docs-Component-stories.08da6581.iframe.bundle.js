"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[5373],{"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/markdown/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},markdown:function(){return markdown}});var _markdown$parameters,_markdown$parameters2,_markdown$parameters3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js")),_alfalab_core_components_markdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/markdown/modern/index.js"),_alfalab_core_components_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/typography/modern/index.js"),_alfalab_core_components_gap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/gap/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Markdown",component:_alfalab_core_components_markdown__WEBPACK_IMPORTED_MODULE_3__.Markdown,id:"Markdown"},markdown={name:"Markdown",render:function render(){var previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_6__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_6__.Ph)("wrapperStyles"));return Object.keys(previewStyles).length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{style:previewStyles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{style:{width:250},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_alfalab_core_components_typography__WEBPACK_IMPORTED_MODULE_4__.Typography.Title,{view:"xsmall",tag:"div",font:"system",children:"### Markdown"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_alfalab_core_components_gap__WEBPACK_IMPORTED_MODULE_5__.Gap,{size:"m"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_alfalab_core_components_typography__WEBPACK_IMPORTED_MODULE_4__.Typography.Text,{view:"primary-medium",children:"Облегчённый язык разметки, созданный с целью обозначения форматирования в простом тексте."})]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_alfalab_core_components_markdown__WEBPACK_IMPORTED_MODULE_3__.Markdown,{font:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.radios)("font",{system:"system",styrene:"styrene"},"system"),children:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("children","")||"\n# Заголовок первого уровня\n\n## Заголовок второго уровня\n\n### Заголовок третьего уровня\n\nНеупорядоченный список:\n\n-   Элемент списка\n\n-   Элемент списка с абзацами\n\n    Второй абзац в элементе списка\n\n-   Элемент списка с пояснением\n\n    > Текст пояснения к элементу списка\n\nНумерованный список:\n\n1. Первый нумерованный элемент списка\n\n2. Второй нумерованный элемент списка\n\n3. Третий нумерованный элемент списка\n\n    > Текст пояснения к элементу списка\n\n`Мелкий текст`\n\n> Мелкий текст 2\n\nОбычный текст\n\n**Жирный текст**\n\n_Курсивный текст_\n\nТекст с [ссылкой](https://alfabank.ru/get-money/credit-cards/100-days/)\n   "})}};__webpack_exports__.default=meta,markdown.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)({},markdown.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)({},null===(_markdown$parameters=markdown.parameters)||void 0===_markdown$parameters?void 0:_markdown$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)({originalSource:"{\n  name: 'Markdown',\n  render: () => {\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    const isPreview = Object.keys(previewStyles).length > 0;\n    return isPreview ? <div style={previewStyles}>\n                <div style={{\n        width: 250\n      }}>\n                    <Typography.Title view='xsmall' tag='div' font='system'>\n                        ### Markdown\n                    </Typography.Title>\n                    <Gap size='m' />\n                    <Typography.Text view='primary-medium'>\n                        Облегчённый язык разметки, созданный с целью обозначения форматирования\n                        в простом тексте.\n                    </Typography.Text>\n                </div>\n            </div> : <Markdown font={radios('font', {\n      system: 'system',\n      styrene: 'styrene'\n    }, 'system')}>\n                {text('children', '') || `\n# Заголовок первого уровня\n\n## Заголовок второго уровня\n\n### Заголовок третьего уровня\n\nНеупорядоченный список:\n\n-   Элемент списка\n\n-   Элемент списка с абзацами\n\n    Второй абзац в элементе списка\n\n-   Элемент списка с пояснением\n\n    > Текст пояснения к элементу списка\n\nНумерованный список:\n\n1. Первый нумерованный элемент списка\n\n2. Второй нумерованный элемент списка\n\n3. Третий нумерованный элемент списка\n\n    > Текст пояснения к элементу списка\n\n\\`Мелкий текст\\`\n\n> Мелкий текст 2\n\nОбычный текст\n\n**Жирный текст**\n\n_Курсивный текст_\n\nТекст с [ссылкой](https://alfabank.ru/get-money/credit-cards/100-days/)\n   `}\n            </Markdown>;\n  }\n}"},null===(_markdown$parameters2=markdown.parameters)||void 0===_markdown$parameters2||null===(_markdown$parameters3=_markdown$parameters2.docs)||void 0===_markdown$parameters3?void 0:_markdown$parameters3.source)})});var __namedExportsOrder=["markdown"]},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function getQueryParam(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function parseKnobs(){return Object.entries(queryParams).reduce((function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc}),{})};function parseValue(value){if(value){if(function isBoolean(){return["true","false"].includes(value)}())return"true"===value;if(function isNumeric(){return!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value))}())return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map((function(v){return v.trim()})),obj={};return properties.forEach((function(property){var _property$split$map=property.split(":").map((function(v){return v.trim()})),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val})),obj}function isJsonObj(str){try{return"object"==typeof JSON.parse(str)}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj?Object.keys(obj).map((function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map((function(v){return ks+encodeURIComponent(stringifyPrimitive(v))})).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))})).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);