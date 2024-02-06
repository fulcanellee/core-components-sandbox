"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[8658,4622,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/pattern-lock/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},pattern_lock:function(){return pattern_lock}});var _pattern_lock$paramet,_pattern_lock$paramet2,_pattern_lock$paramet3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_pattern_lock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/pattern-lock/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/PatternLock",component:_alfalab_core_components_pattern_lock__WEBPACK_IMPORTED_MODULE_3__.PatternLock,id:"PatternLock"},pattern_lock={name:"PatternLock",render:function render(){var previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.Ph)("wrapperStyles")),isPreview=Object.keys(previewStyles).length>0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:previewStyles,children:[isPreview&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("style",{children:"\n                    :root {\n                        --color-light-bg-primary: var(--color-light-bg-secondary);\n                    }"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pattern_lock__WEBPACK_IMPORTED_MODULE_3__.PatternLock,{observeTokens:!0,themeState:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.radios)("themeState",{initial:"initial",success:"success",failure:"failure"},"initial"),justifyNodes:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.radios)("justifyNodes",{"space-around":"space-around","space-between":"space-between"},"space-between"),message:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("message",""),error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("error",""),showForgotCodeBtn:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("showForgotCodeBtn",!1)})]})}};__webpack_exports__.default=meta,pattern_lock.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},pattern_lock.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_pattern_lock$paramet=pattern_lock.parameters)||void 0===_pattern_lock$paramet?void 0:_pattern_lock$paramet.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'PatternLock',\n  render: () => {\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    const isPreview = Object.keys(previewStyles).length > 0;\n    return <div style={previewStyles}>\n                {isPreview && <style>\n                        {`\n                    :root {\n                        --color-light-bg-primary: var(--color-light-bg-secondary);\n                    }`}\n                    </style>}\n                <PatternLock observeTokens={true} themeState={radios('themeState', {\n        initial: 'initial',\n        success: 'success',\n        failure: 'failure'\n      }, 'initial')} justifyNodes={radios('justifyNodes', {\n        'space-around': 'space-around',\n        'space-between': 'space-between'\n      }, 'space-between')} message={text('message', '')} error={text('error', '')} showForgotCodeBtn={(boolean('showForgotCodeBtn', false) as false)} />\n            </div>;\n  }\n}"},null===(_pattern_lock$paramet2=pattern_lock.parameters)||void 0===_pattern_lock$paramet2?void 0:null===(_pattern_lock$paramet3=_pattern_lock$paramet2.docs)||void 0===_pattern_lock$paramet3?void 0:_pattern_lock$paramet3.source)})});let __namedExportsOrder=["pattern_lock"]},"./packages/pattern-lock/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/pattern-lock/src/docs/Component.stories.tsx"),Component=__webpack_require__("./packages/pattern-lock/src/Component.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",br:"br"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { PatternLock } from '@alfalab/core-components/pattern-lock';\n\n// Также можно импортировать объект с состояниями темы\nimport { THEME_STATE } from '@alfalab/core-components/pattern-lock';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-datatestid",children:"Использование dataTestId"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["В компоненте используются модификаторы для ",(0,jsx_runtime.jsx)(_components.code,{children:"dataTestId"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Для удобного поиска элементов можно воспользоваться функцией ",(0,jsx_runtime.jsx)(_components.code,{children:"getPatternLockTestIds"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Импорт из ",(0,jsx_runtime.jsx)(_components.code,{children:"@alfalab/core-components/pattern-lock/shared"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Функция возвращает объект:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"{\n    patternLock: dataTestId,\n    forgotCodeBtn: `${dataTestId}-forgot-code-btn`,\n    error: `${dataTestId}-error`,\n    message: `${dataTestId}-message`,\n};\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.H}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:":root {\n    --pattern-lock-max-width: 500px;\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function description_createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"пример",children:"Пример"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Компонент не знает сколько символов в ключе пользователя,\nпоэтому ждет пока пользователь отпустит палец и только после этого проверяет ключ.\nПосле валидации компонент может отобразить состоянии ошибки с еррор месседжем или состояние успеха.\nКорректная комбинация для примера ",(0,jsx_runtime.jsx)(_components.code,{children:"698751"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:640,mobileOnly:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const shouldBeCode = [6, 9, 8, 7, 5, 1];\n    const [currentState, setCurrentState] = React.useState(THEME_STATE.INITIAL);\n    const patternLockInstance = React.useRef();\n    const timerId = React.useRef();\n\n    const handleComplete = (code) => {\n        if (shouldBeCode.join() === code.join()) {\n            setCurrentState(THEME_STATE.SUCCESS);\n        } else {\n            setCurrentState(THEME_STATE.FAILURE);\n        }\n    };\n\n    const handleDragStart = () => {\n        setCurrentState(THEME_STATE.INITIAL);\n    };\n\n    React.useEffect(() => {\n        if (currentState !== THEME_STATE.INITIAL) {\n            // Сбрасываем стейт через сек.\n            timerId.current = setTimeout(() => {\n                setCurrentState(THEME_STATE.INITIAL);\n                patternLockInstance.current.setInitialState();\n            }, 1000);\n        }\n\n        return () => clearTimeout(timerId.current);\n    }, [currentState]);\n\n    return (\n        <PatternLock\n            ref={patternLockInstance}\n            onComplete={handleComplete}\n            themeState={currentState}\n            onDragStart={handleDragStart}\n            observeTokens={true}\n            error={currentState === THEME_STATE.FAILURE && 'Error message'}\n        />\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"адаптивность",children:"Адаптивность"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Размер контролов компонента подстраивается под ширину мобильного экрана.\nКомпонент не предназначен для использования на десктопных устройствах и не имеет соответствующих состояний."})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(description_createMdxContent,props)})):description_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/PatternLock",of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"PatternLock",children:"Компонент для авторизации пользователя с помощью графического ключа."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),development:(0,jsx_runtime.jsx)(development,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:'# @alfalab/core-components-pattern-lock\n\n## 1.5.0\n\n### Minor Changes\n\n### [#1049](https://github.com/core-ds/core-components/pull/1049)\n\n-   Добавлена функция get{ComponentName}TestIds для поиска элементов. Подробное описание смотрите во вкладке Разработчику -> Использование dataTestId\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.2.0\n\n## 1.4.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.9.1\n    -   button@11.1.1\n\n## 1.4.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.1.0\n    -   shared@0.9.0\n\n## 1.4.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.0.0\n\n## 1.4.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@10.0.2\n\n## 1.4.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@10.0.1\n\n## 1.4.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@10.0.0\n    -   shared@0.8.0\n\n## 1.4.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.1.0\n    -   shared@0.7.0\n\n## 1.4.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.6\n    -   shared@0.6.0\n\n## 1.4.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.5.0\n    -   button@9.0.5\n\n## 1.4.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.4.0\n    -   button@9.0.4\n\n## 1.4.0\n\n### Minor Changes\n\n### [#830](https://github.com/core-ds/core-components/pull/830)\n\n-   Добавлен message prop\n\n## 1.3.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.3.0\n    -   button@9.0.3\n\n## 1.3.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.2\n\n## 1.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.2.0\n    -   button@9.0.1\n\n## 1.3.0\n\n### Minor Changes\n\n### [#687](https://github.com/core-ds/core-components/pull/687)\n\n-   Компонент Button заменен на mobile/desktop версии для мобильных и десктопных версий компонентов\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.1.0\n    -   button@9.0.0\n    -   gap@1.2.0\n\n## 1.2.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.5.1\n    -   gap@1.1.3\n\n## 1.2.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.5.0\n\n## 1.2.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.4.0\n\n## 1.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.3.0\n\n## 1.2.0\n\n### Minor Changes\n\n### [#643](https://github.com/core-ds/core-components/pull/643)\n\n-   Добавлен новый проп extraBounds, за счет которого можно увеличить площадь прослушивания события touchMove\n\n### Patch Changes\n\n### [#654](https://github.com/core-ds/core-components/pull/654)\n\n-   Удалены лишние dependencies, добавлены отсутствующие\n\n-   Обновлены зависимости\n    -   button@8.2.0\n\n## 1.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.1.0\n\n## 1.1.2\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   button@8.0.0\n    -   gap@1.1.2\n\n## 1.1.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.1.1\n\n## 1.1.0\n\n### Minor Changes\n\n### [#516](https://github.com/core-ds/core-components/pull/516)\n\n-   Добавлена кнопка "Забыли код?"\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   button@7.1.0\n    -   gap@1.1.1\n\n## 1.0.3\n\n### Patch Changes\n\n### [#466](https://github.com/core-ds/core-components/pull/466)\n\n-   Обновлена версия библиотеки react-canvas-pattern-lock до 1.0.2\n\n## 1.0.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   gap@1.1.0\n\n## 1.0.1\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   gap@1.0.1\n\n## 1.0.0\n\n### Major Changes\n\n### [#377](https://github.com/core-ds/core-components/pull/377)\n\n-   Добавлен новый компонент PatternLock\n'})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/pattern-lock/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{H:function(){return PatternLock}});var cachedSize,COMMON_SIZES,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/react-canvas-pattern-lock/dist/esm/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mobile=__webpack_require__("./dist/button/modern/mobile/index.js"),modern=__webpack_require__("./dist/gap/modern/index.js"),shared_modern=__webpack_require__("./dist/shared/modern/index.js"),consts=__webpack_require__("./packages/pattern-lock/src/consts.ts");function getDefaultObserveTarget(){return document.head}function getColorByToken(token){return getComputedStyle(document.documentElement).getPropertyValue(token)}var getSizes=(COMMON_SIZES={lineWidth:6,nodeRing:0,nodeCore:12},function(){return cachedSize||(cachedSize=window.matchMedia("(min-width: 390px)").matches?{elementSizes:(0,objectSpread2.Z)((0,objectSpread2.Z)({},COMMON_SIZES),{},{nodeRadius:43}),width:322,height:322}:window.matchMedia("(min-width: 360px)").matches?{elementSizes:(0,objectSpread2.Z)((0,objectSpread2.Z)({},COMMON_SIZES),{},{nodeRadius:38}),width:292,height:292}:{elementSizes:(0,objectSpread2.Z)((0,objectSpread2.Z)({},COMMON_SIZES),{},{nodeRadius:32}),width:240,height:240})});function getTheme(dimens){var baseColors={primary:getColorByToken(consts.yi.PRIMARY),bg:getColorByToken(consts.yi.BG),ringBg:getColorByToken(consts.yi.RING_BG_INITIAL)};return(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},consts.u8.INITIAL,{colors:(0,objectSpread2.Z)((0,objectSpread2.Z)({},baseColors),{},{accent:getColorByToken(consts.yi.ACCENT_INITIAL),selectedRingBg:getColorByToken(consts.yi.SELECTED_RING_BG_INITIAL)}),dimens:dimens}),consts.u8.SUCCESS,{colors:(0,objectSpread2.Z)((0,objectSpread2.Z)({},baseColors),{},{accent:getColorByToken(consts.yi.ACCENT_SUCCESS),selectedRingBg:getColorByToken(consts.yi.SELECTED_RING_BG_SUCCESS)}),dimens:dimens}),consts.u8.FAILURE,{colors:(0,objectSpread2.Z)((0,objectSpread2.Z)({},baseColors),{},{accent:getColorByToken(consts.yi.ACCENT_FAILURE),selectedRingBg:getColorByToken(consts.yi.SELECTED_RING_BG_FAILURE)}),dimens:dimens})}var index_module={component:"component_ztYMj",hidden:"hidden_HQPS_",message:"message_bKGTa",error:"error_y55uz",forgotBtn:"forgotBtn_hfJnP"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["observeTokens","observerParams","justifyNodes","className","error","dataTestId","forgotCodeBtnText","showForgotCodeBtn","onForgotBtnClick","extraBounds","message"],PatternLock=(0,react.forwardRef)(function(_ref,ref){var _ref$observeTokens=_ref.observeTokens,observeTokens=void 0!==_ref$observeTokens&&_ref$observeTokens,_ref$observerParams=_ref.observerParams,observerParams=void 0===_ref$observerParams?{}:_ref$observerParams,_ref$justifyNodes=_ref.justifyNodes,className=_ref.className,error=_ref.error,dataTestId=_ref.dataTestId,_ref$forgotCodeBtnTex=_ref.forgotCodeBtnText,_ref$showForgotCodeBt=_ref.showForgotCodeBtn,onForgotBtnClick=_ref.onForgotBtnClick,_ref$extraBounds=_ref.extraBounds,extraBounds=void 0===_ref$extraBounds?consts.xY:_ref$extraBounds,message=_ref.message,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,react.useState)(),_useState2=(0,slicedToArray.Z)(_useState,2),params=_useState2[0],setParams=_useState2[1];return(0,react.useEffect)(function(){var _getSizes=getSizes(),elementSizes=_getSizes.elementSizes,width=_getSizes.width,height=_getSizes.height;setParams({theme:getTheme(elementSizes),width:width,height:height})},[]),(0,react.useEffect)(function(){var styleObserver=null;if(observeTokens){var _observerParams$optio=observerParams.options,options=void 0===_observerParams$optio?consts.XM:_observerParams$optio,_observerParams$getTa=observerParams.getTarget;(styleObserver=new MutationObserver(function(){return setParams(function(prevState){var _getSizes2=getSizes(),width=_getSizes2.width,height=_getSizes2.height,elementSizes=_getSizes2.elementSizes;return prevState?prevState.theme[consts.u8.INITIAL].colors.bg!==getColorByToken(consts.yi.BG)?(0,objectSpread2.Z)((0,objectSpread2.Z)({},prevState),{},{theme:getTheme(elementSizes)}):prevState:{theme:getTheme(elementSizes),width:width,height:height}})})).observe((void 0===_observerParams$getTa?getDefaultObserveTarget:_observerParams$getTa)(),options)}return function(){var _styleObserver;return null===(_styleObserver=styleObserver)||void 0===_styleObserver?void 0:_styleObserver.disconnect()}},[observeTokens]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()(index_module.component,className,(0,defineProperty.Z)({},index_module.hidden,!params)),"data-test-id":dataTestId,children:[(0,jsx_runtime.jsx)(modern.Gap,{size:"xs"}),error?(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.message,index_module.error),"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"error"),children:error}):(0,jsx_runtime.jsx)("div",{className:index_module.message,"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"message"),children:message}),(0,jsx_runtime.jsx)(modern.Gap,{size:"3xl"}),(0,jsx_runtime.jsx)(esm.V,(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),params),{},{ref:ref,rows:3,cols:3,justifyNodes:void 0===_ref$justifyNodes?"space-between":_ref$justifyNodes,extraBounds:extraBounds})),void 0!==_ref$showForgotCodeBt&&_ref$showForgotCodeBt?(0,jsx_runtime.jsx)(mobile.ButtonMobile,{view:"link",className:index_module.forgotBtn,onClick:onForgotBtnClick,dataTestId:(0,shared_modern.getDataTestId)(dataTestId,"forgot-code-btn"),children:void 0===_ref$forgotCodeBtnTex?"Забыли код?":_ref$forgotCodeBtnTex}):(0,jsx_runtime.jsx)("div",{className:index_module.forgotBtn})]})});try{PatternLock.displayName="PatternLock",PatternLock.__docgenInfo={description:"",displayName:"PatternLock",props:{className:{defaultValue:null,description:"Дополнительный класс.",name:"className",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Сообщение об ошибке",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"Сообщение над графическим ключом",name:"message",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:'Идентификатор для систем автоматизированного тестирования.\nДля сообщения используется модификатор -message, ошибки -error,\nкнопки "забыли код" -forgot-code-btn',name:"dataTestId",required:!1,type:{name:"string"}},observeTokens:{defaultValue:{value:"false"},description:"Следить ли за изменениями значений цветовых токенов.",name:"observeTokens",required:!1,type:{name:"boolean"}},observerParams:{defaultValue:{value:"{}"},description:"Параметры MutationObserver для наблюдения за изменениями режима(css custom properties).",name:"observerParams",required:!1,type:{name:"{ getTarget?: (() => Node); options?: MutationObserverInit; } | undefined"}},onDragStart:{defaultValue:null,description:"Коллбек, вызываемый при начале ввода кода.",name:"onDragStart",required:!1,type:{name:"(() => void)"}},onComplete:{defaultValue:null,description:"Коллбек, вызываемый после завершения ввода кода.",name:"onComplete",required:!1,type:{name:"((code: number[], nodes: TNodes) => void)"}},autoHide:{defaultValue:{value:"false"},description:"При включенном параметре выбранные узлы и линия, соединияющая их,\nбудут исчезать по истечении autoHideTimeout.",name:"autoHide",required:!1,type:{name:"boolean"}},autoHideTimeout:{defaultValue:{value:"400"},description:"Таймаут автоматического исчезнование выбранных узлов и линии в миллисекундах.",name:"autoHideTimeout",required:!1,type:{name:"number"}},justifyNodes:{defaultValue:{value:"space-between"},description:"Метод выравнивания узлов.",name:"justifyNodes",required:!1,type:{name:"enum",value:[{value:'"space-around"'},{value:'"space-between"'}]}},themeState:{defaultValue:null,description:"Состояние темы.",name:"themeState",required:!1,type:{name:"string"}},extraBounds:{defaultValue:{value:"[75, 50, 75, 50]"},description:"Дополнительные границы в пикселях.\nСвойство позволяет расширить область прослушивания touch события.\nПо-умолчанию область ограничена размерами canvas.",name:"extraBounds",required:!1,type:{name:"[number, number, number, number]"}},showForgotCodeBtn:{defaultValue:{value:"false"},description:'Текст кнопки "забыли код"',name:"showForgotCodeBtn",required:!1,type:{name:"boolean"}},forgotCodeBtnText:{defaultValue:{value:"Забыли код?"},description:'Текст кнопки "забыли код"',name:"forgotCodeBtnText",required:!1,type:{name:"string"}},onForgotBtnClick:{defaultValue:null,description:'Коллбэк, вызываемый при клике на кнопку "Забыли код"',name:"onForgotBtnClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pattern-lock/src/Component.tsx#PatternLock"]={docgenInfo:PatternLock.__docgenInfo,name:"PatternLock",path:"packages/pattern-lock/src/Component.tsx#PatternLock"})}catch(__react_docgen_typescript_loader_error){}},"./packages/pattern-lock/src/consts.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XM:function(){return OBSERVE_OPTIONS},u8:function(){return THEME_STATE},xY:function(){return DEFAULT_EXTRA_BOUNDS},yi:function(){return OBSERVABLE_TOKENS}});var OBSERVE_OPTIONS={childList:!0,attributes:!1,characterData:!1,subtree:!0},DEFAULT_EXTRA_BOUNDS=[75,50,75,50],OBSERVABLE_TOKENS={ACCENT_INITIAL:"--color-light-graphic-primary",ACCENT_SUCCESS:"--color-light-graphic-positive",ACCENT_FAILURE:"--color-light-graphic-negative",PRIMARY:"--color-light-graphic-tertiary",BG:"--color-light-bg-primary",RING_BG_INITIAL:"--color-light-specialbg-secondary-transparent",SELECTED_RING_BG_INITIAL:"--color-light-specialbg-tertiary-transparent",SELECTED_RING_BG_SUCCESS:"--color-light-graphic-positive-alpha-10",SELECTED_RING_BG_FAILURE:"--color-light-graphic-negative-alpha-10"},THEME_STATE={INITIAL:"initial",SUCCESS:"success",FAILURE:"failure"}},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);