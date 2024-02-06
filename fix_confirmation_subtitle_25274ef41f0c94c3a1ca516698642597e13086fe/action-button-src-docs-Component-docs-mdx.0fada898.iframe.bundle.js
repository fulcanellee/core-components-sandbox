"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[7298,4034,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/action-button/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},action_button:function(){return action_button}});var _action_button$parame,_action_button$parame2,_action_button$parame3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_icons_glyph_StarLineMIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@alfalab/icons-glyph/StarLineMIcon.js"),_alfalab_icons_glyph_DiamondsMIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@alfalab/icons-glyph/DiamondsMIcon.js"),_alfalab_core_components_action_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/action-button/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/ActionButton",component:_alfalab_core_components_action_button__WEBPACK_IMPORTED_MODULE_4__.ActionButton,id:"ActionButton"},action_button={name:"ActionButton",render:function render(){var iconsMap={StarLineMIcon:_alfalab_icons_glyph_StarLineMIcon__WEBPACK_IMPORTED_MODULE_2__.StarLineMIcon,DiamondsMIcon:_alfalab_icons_glyph_DiamondsMIcon__WEBPACK_IMPORTED_MODULE_3__.DiamondsMIcon},colors=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("colors",["default","inverted","static"],"default"),Icon=iconsMap[(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("icon",["StarLineMIcon","DiamondsMIcon"],"StarLineMIcon")];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({backgroundColor:"inverted"===colors?"var(--color-light-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_5__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_5__.Ph)("wrapperStyles"))),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_alfalab_core_components_action_button__WEBPACK_IMPORTED_MODULE_4__.ActionButton,{colors:colors,view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["primary","secondary"],"primary"),href:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("href",""),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Icon,{}),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",["s"],"s"),disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),loading:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("loading",!1),children:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("children","Пополнить карту")})})}};__webpack_exports__.default=meta,action_button.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},action_button.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_action_button$parame=action_button.parameters)||void 0===_action_button$parame?void 0:_action_button$parame.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'ActionButton',\n  render: () => {\n    const iconsMap = {\n      StarLineMIcon: StarLineMIcon,\n      DiamondsMIcon: DiamondsMIcon\n    };\n    const colors = select('colors', ['default', 'inverted', 'static'], 'default');\n    const icon = select('icon', ['StarLineMIcon', 'DiamondsMIcon'], 'StarLineMIcon');\n    const Icon = iconsMap[icon];\n    return <div style={{\n      backgroundColor: colors === 'inverted' ? 'var(--color-light-bg-primary-inverted)' : 'transparent',\n      padding: '8px',\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0,\n      ...stylesStringToObj(getQueryParam('wrapperStyles'))\n    }}>\n                <ActionButton colors={colors} view={select('view', ['primary', 'secondary'], 'primary')} href={text('href', '')} icon={<Icon />} size={select('size', ['s'], 's')} disabled={boolean('disabled', false)} loading={boolean('loading', false)}>\n                    {text('children', 'Пополнить карту')}\n                </ActionButton>\n            </div>;\n  }\n}"},null===(_action_button$parame2=action_button.parameters)||void 0===_action_button$parame2?void 0:null===(_action_button$parame3=_action_button$parame2.docs)||void 0===_action_button$parame3?void 0:_action_button$parame3.source)})});let __namedExportsOrder=["action_button"]},"./packages/action-button/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/action-button/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"виды-кнопок",children:"Виды кнопок"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [disabled, setDisabled] = React.useState(false);\n\n    return (\n        <>\n            <ActionButton disabled={disabled} icon={<DiamondsMIcon />} view='primary'>\n                Primary\n            </ActionButton>\n            <Gap direction='horizontal' size='xl' />\n            <ActionButton disabled={disabled} icon={<DiamondsMIcon />} view='secondary'>\n                Secondary\n            </ActionButton>\n            <Gap size='xl' />\n            <Switch\n                checked={disabled}\n                onChange={() => setDisabled((prevState) => !prevState)}\n                label='Недоступна'\n            />\n        </>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"перенос-текста-внутри-кнопки",children:"Перенос текста внутри кнопки"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Лейбл кнопки ограничен двумя строками."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"    <ActionButton nowrap={true} icon={<DiamondsMIcon />} view='primary'>\n        Пример переноса текста\n    </ActionButton>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"обработка-событий",children:"Обработка событий"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["С помощью свойства ",(0,jsx_runtime.jsx)(_components.code,{children:"loading"})," можно отобразить состояние загрузки.\nМинимальное время отображения лоадера — 500мс, чтобы при быстрых ответах от сервера кнопка не \xabморгала\xbb."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [loading, setLoading] = React.useState({\n        primary: false,\n        secondary: false,\n    });\n\n    const handleClick = (buttonName, timeout) => {\n        setLoading({ ...loading, [buttonName]: true });\n        setTimeout(() => {\n            setLoading({ ...loading, [buttonName]: false });\n        }, timeout);\n    };\n\n    return (\n        <>\n            <ActionButton \n                icon={<DiamondsMIcon />} \n                loading={loading.primary}\n                onClick={() => handleClick('primary', 30)}\n            >\n                Быстрый запрос\n            </ActionButton>\n            <Gap direction='horizontal' size='xl' />\n            <ActionButton \n                icon={<DiamondsMIcon />} \n                loading={loading.secondary}\n                onClick={() => handleClick('secondary', 1500)}\n                view='secondary'\n            >\n                Долгий запрос\n            </ActionButton>\n        </>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"кнопка-ссылка",children:"Кнопка-ссылка"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Любую кнопку можно превратить в ссылку, передав компоненту пропс ",(0,jsx_runtime.jsx)(_components.code,{children:"href"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    return (\n        <ActionButton icon={<DiamondsMIcon />} href='http://www.alfabank.ru'>\n            {'Переход\xa0 по ссылке'}\n        </ActionButton>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/action-button/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",br:"br"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ActionButton } from '@alfalab/core-components/action-button';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-datatestid",children:"Использование dataTestId"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["В компоненте используется модификатор для ",(0,jsx_runtime.jsx)(_components.code,{children:"dataTestId"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Для удобного поиска элементов можно воспользоваться функцией ",(0,jsx_runtime.jsx)(_components.code,{children:"getActionButtonTestIds"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Импорт из ",(0,jsx_runtime.jsx)(_components.code,{children:"@alfalab/core-components/action-button/shared"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Функция возвращает объект:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"{\n    actionButton: dataTestId, \n    spinner: `${dataTestId}-loader`,\n};\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:src.ActionButton}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:`
        @import '../../themes/src/default.css';

:root {
    /* primary */
    --action-button-primary-base-color: var(--color-light-text-primary);
    --action-button-primary-base-icon-color: var(--color-light-neutral-1500-inverted);
    --action-button-primary-base-bg-color: var(--color-light-accent-secondary);
    --action-button-primary-hover-color: var(--color-light-accent-secondary-hover);
    --action-button-primary-active-color: var(--color-light-accent-secondary-press);

    /* secondary */
    --action-button-secondary-base-color: var(--color-light-text-primary);
    --action-button-secondary-base-icon-color: var(--color-light-neutral-1500);
    --action-button-secondary-base-bg-color: var(--color-light-neutral-100);
    --action-button-secondary-hover-color: var(--color-light-neutral-100-hover);
    --action-button-secondary-active-color: var(--color-light-neutral-100-press);

    /* spinner */
    --action-button-spinner-primary-color: var(--color-light-neutral-1500-inverted);
    --action-button-spinner-default-color: var(--color-light-neutral-1500);

    /* disabled */
    --action-button-disabled-color: var(--color-light-text-tertiary);
    --action-button-disabled-icon-color: var(--color-light-neutral-500);
    --action-button-disabled-bg-color: var(--color-light-neutral-100);
}

.primary {
    color: var(--action-button-primary-base-color);

    & .iconWrapper {
        color: var(--action-button-primary-base-icon-color);
        background-color: var(--action-button-primary-base-bg-color);
    }

    &:hover .iconWrapper {
        background-color: var(--action-button-primary-hover-color);
    }

    &:active .iconWrapper {
        background-color: var(--action-button-primary-active-color);
    }

    & .loader {
        color: var(--action-button-spinner-primary-color);
    }
}

.secondary {
    color: var(--action-button-secondary-base-color);

    & .iconWrapper {
        color: var(--action-button-secondary-base-icon-color);
        background-color: var(--action-button-secondary-base-bg-color);
    }

    &:hover .iconWrapper {
        background-color: var(--action-button-secondary-hover-color);
    }

    &:active .iconWrapper {
        background-color: var(--action-button-secondary-active-color);
    }

    & .loader {
        color: var(--action-button-spinner-default-color);
    }
}

.disabled {
    color: var(--action-button-disabled-color);

    & .iconWrapper {
        color: var(--action-button-disabled-icon-color);
        background-color: var(--action-button-disabled-bg-color);
    }
}
@import '../../themes/src/default.css';

:root {
    /* primary */
    --action-button-inverted-primary-base-color: var(--color-light-text-primary-inverted);
    --action-button-inverted-primary-base-icon-color: var(--color-light-neutral-1500);
    --action-button-inverted-primary-base-bg-color: var(--color-light-accent-secondary-inverted);
    --action-button-inverted-primary-hover-color: var(
        --color-light-accent-secondary-inverted-hover
    );
    --action-button-inverted-primary-active-color: var(
        --color-light-accent-secondary-inverted-press
    );

    /* secondary */
    --action-button-inverted-secondary-base-color: var(--color-light-text-primary-inverted);
    --action-button-inverted-secondary-base-icon-color: var(--color-light-neutral-1500-inverted);
    --action-button-inverted-secondary-base-bg-color: var(--color-light-neutral-100-inverted);
    --action-button-inverted-secondary-hover-color: var(--color-light-neutral-100-inverted-hover);
    --action-button-inverted-secondary-active-color: var(--color-light-neutral-100-inverted-press);

    /* spinner */
    --action-button-spinner-inverted-default-color: var(--color-light-neutral-1500);
    --action-button-spinner-inverted-primary-color: var(--color-light-neutral-1500-inverted);

    /* disabled */
    --action-button-inverted-disabled-color: var(--color-light-text-tertiary-inverted);
    --action-button-inverted-disabled-icon-color: var(--color-light-neutral-500-inverted);
    --action-button-inverted-disabled-bg-color: var(--color-light-neutral-100-inverted);
}

.primary {
    color: var(--action-button-inverted-primary-base-color);

    & .iconWrapper {
        color: var(--action-button-inverted-primary-base-icon-color);
        background-color: var(--action-button-inverted-primary-base-bg-color);
    }

    &:hover .iconWrapper {
        background-color: var(--action-button-inverted-primary-hover-color);
    }

    &:active .iconWrapper {
        background-color: var(--action-button-inverted-primary-active-color);
    }

    & .loader {
        color: var(--action-button-spinner-inverted-primary-color);
    }
}

.secondary {
    color: var(--action-button-inverted-secondary-base-color);

    & .iconWrapper {
        color: var(--action-button-inverted-secondary-base-icon-color);
        background-color: var(--action-button-inverted-secondary-base-bg-color);
    }

    &:hover .iconWrapper {
        background-color: var(--action-button-inverted-secondary-hover-color);
    }

    &:active .iconWrapper {
        background-color: var(--action-button-inverted-secondary-active-color);
    }

    & .loader {
        color: var(--action-button-spinner-inverted-default-color);
    }
}

.disabled {
    color: var(--action-button-inverted-disabled-color);

    & .iconWrapper {
        color: var(--action-button-inverted-disabled-icon-color);
        background-color: var(--action-button-inverted-disabled-bg-color);
    }
}

    `})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"ActionButton",children:"Используется как триггер для выполнения определённого действия. Лейбл кнопки должен однозначно сообщать пользователю, что произойдёт после нажатия на неё."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 1.5.0\n\n### Minor Changes\n\n### [#1049](https://github.com/core-ds/core-components/pull/1049)\n\n-   Добавлена функция get{ComponentName}TestIds для поиска элементов. Подробное описание смотрите во вкладке Разработчику -> Использование dataTestId\n\n## 1.4.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.9.1\n\n## 1.4.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.9.0\n\n## 1.4.0\n\n### Minor Changes\n\n### [#931](https://github.com/core-ds/core-components/pull/931)\n\n-   В компонентах ActionButton, Badge, IconButton, InternationalPhoneInput, PickerButton, Spinner, StepperInput, UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   spinner@3.2.0\n    -   shared@0.8.0\n\n## 1.3.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.7.0\n\n## 1.3.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.6.0\n\n## 1.3.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.5.0\n\n## 1.3.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.4.0\n\n## 1.3.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.3.0\n\n## 1.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.2.0\n\n## 1.3.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.1.0\n    -   spinner@3.1.0\n\n## 1.2.1\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   spinner@3.0.7\n\n## 1.2.0\n\n### Minor Changes\n\n### [#684](https://github.com/core-ds/core-components/pull/684)\n\n-   Компонент Loader заменен на Spinner\n\n### Patch Changes\n\n### [#676](https://github.com/core-ds/core-components/pull/676)\n\n-   Обновлена зависимость @alfalab/hooks\n\n-   Обновлены зависимости\n    -   spinner@3.0.6\n\n## 1.1.5\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   loader@3.0.6\n\n## 1.1.4\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   loader@3.0.5\n\n## 1.1.3\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   loader@3.0.4\n\n## 1.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   loader@3.0.3\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-action-button@1.1.0...@alfalab/core-components-action-button@1.1.1) (2022-09-13)\n\n### Bug Fixes\n\n-   **base-modal:** fixed scroll to top issues ([#224](https://github.com/core-ds/core-components/issues/224)) ([2e3fdd2](https://github.com/core-ds/core-components/commit/2e3fdd22a4af2b043c428a3ad800b82ac4166d5d))\n\n# 1.1.0 (2022-09-09)\n\n### Bug Fixes\n\n-   **action-button:** review fixes ([8c4b419](https://github.com/core-ds/core-components/commit/8c4b4193b2959e99f2b0f6de836f3f3d63ca0b18))\n\n### Features\n\n-   new component action-button ([b8b009c](https://github.com/core-ds/core-components/commit/b8b009cc63071b9766c8a23884eac95fdbf6d658))\n-   updated colors prop & added tests ([08170e6](https://github.com/core-ds/core-components/commit/08170e6fa6e33e7785477ff41b833f75809e9f60))\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/action-button/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionButton:function(){return ActionButton}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/shared/modern/index.js"),spinner_modern=__webpack_require__("./dist/spinner/modern/index.js"),esm=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/index.js"),useLoader=function(loading,timeout){var timerId=(0,react.useRef)(0),_useState=(0,react.useState)(!0),_useState2=(0,slicedToArray.Z)(_useState,2),loaderTimePassed=_useState2[0],setLoaderTimePassed=_useState2[1],showLoader=loading||!loaderTimePassed;return(0,react.useEffect)(function(){loading&&(setLoaderTimePassed(!1),timerId.current&&window.clearTimeout(timerId.current),timerId.current=window.setTimeout(function(){setLoaderTimePassed(!0)},timeout))},[loading,timeout]),(0,react.useEffect)(function(){timerId.current&&window.clearTimeout(timerId.current)},[]),{showLoader:showLoader}},index_module={component:"component_v4bM2",s:"s_ZhcKD",disabled:"disabled_xdJ8j",loading:"loading_nbY4J",iconWrapper:"iconWrapper_F90SD",label:"label_hb_Tg",loader:"loader_nexXH",focused:"focused_P4sbI"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","icon","children","href","size","view","type","iconWrapperClassName","disabled","loading","dataTestId","colors"],colorStyles={default:{primary:"primary_xjzHE",iconWrapper:"iconWrapper_cThcS",loader:"loader_jZjaj",secondary:"secondary_CCKCs",disabled:"disabled_A9Lyz"},inverted:{primary:"primary_NIflk",iconWrapper:"iconWrapper_J6KRM",loader:"loader_SeE9K",secondary:"secondary_qHTA9",disabled:"disabled_GdHHN"},static:{primary:"primary_BA75F",iconWrapper:"iconWrapper_LDHDj",loader:"loader_mKVBI",secondary:"secondary_P_g7p",disabled:"disabled_RemkD"}},ActionButton=(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,icon=_ref.icon,children=_ref.children,href=_ref.href,_ref$size=_ref.size,size=void 0===_ref$size?"s":_ref$size,_ref$view=_ref.view,_ref$type=_ref.type,iconWrapperClassName=_ref.iconWrapperClassName,disabled=_ref.disabled,loading=_ref.loading,dataTestId=_ref.dataTestId,_ref$colors=_ref.colors,colors=void 0===_ref$colors?"default":_ref$colors,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),componentRef=(0,react.useRef)(null),_useFocus=(0,esm.KK)(componentRef,"keyboard"),focused=(0,slicedToArray.Z)(_useFocus,1)[0],showLoader=useLoader(!!loading,500).showLoader,componentProps={className:classnames_default()(index_module.component,colorStyles[colors][void 0===_ref$view?"primary":_ref$view],index_module[size],(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},index_module.focused,focused),index_module.disabled,disabled),colorStyles[colors].disabled,disabled),index_module.loading,showLoader),className),"data-test-id":dataTestId},buttonChildren=(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{role:"img",className:classnames_default()(index_module.iconWrapper,colorStyles[colors].iconWrapper,index_module[size],iconWrapperClassName),children:showLoader?(0,jsx_runtime.jsx)(spinner_modern.Spinner,{dataTestId:(0,modern.getDataTestId)(dataTestId,"loader"),visible:!0,className:classnames_default()(index_module.loader,colorStyles[colors].loader)}):icon}),(0,jsx_runtime.jsx)("span",{className:index_module.label,children:children})]});return href?(0,jsx_runtime.jsx)("a",(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({role:"button",ref:(0,react_merge_refs_esm.Z)([componentRef,ref]),href:href,"aria-disabled":disabled||loading},componentProps),rest),{},{children:buttonChildren})):(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({ref:(0,react_merge_refs_esm.Z)([componentRef,ref]),type:void 0===_ref$type?"button":_ref$type,disabled:disabled||loading},componentProps),rest),{},{children:buttonChildren}))});try{ActionButton.displayName="ActionButton",ActionButton.__docgenInfo={description:"",displayName:"ActionButton",props:{icon:{defaultValue:null,description:"Иконка кнопки",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"s"},description:"Размер кнопки",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'}]}},view:{defaultValue:{value:"primary"},description:"Тип кнопки",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},iconWrapperClassName:{defaultValue:null,description:"Дополнительный класс для обертки иконки",name:"iconWrapperClassName",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"Значение href для ссылки",name:"href",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Заблокировать кнопку",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Показать лоадер",name:"loading",required:!1,type:{name:"boolean"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.\nДля спиннера используется модификатор -loader",name:"dataTestId",required:!1,type:{name:"string"}},colors:{defaultValue:{value:"default"},description:"Палитра, в контексте которой используется кнопка",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'},{value:'"static"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/action-button/src/Component.tsx#ActionButton"]={docgenInfo:ActionButton.__docgenInfo,name:"ActionButton",path:"packages/action-button/src/Component.tsx#ActionButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);