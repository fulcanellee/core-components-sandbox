"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[5709,2281],{"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/international-phone-input/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/international-phone-input/src/docs/Component.stories.tsx"),package_namespaceObject={i8:"1.0.0"};function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Стандартный вид компонента — поле с пикером страны и предопределённым кодом страны.\nДля упрощения ввода номера можно включить режим автокомплита."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:640,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const OPTIONS = [\n    { key: '+7 921 681-53-98' },\n    { key: '+7 921 681-52-97' },\n    { key: '+7 921 681-52-96' },\n    { key: '+7 921 681-52-95' },\n    { key: '8 921 681-52-94' },\n];\n\nrender(() => {\n    const [value, setValue] = React.useState('');\n    const [selectedCountry, setSelectedCountry] = React.useState();\n    const [clearableCountryCode, setClearableCountryCode] = React.useState(false);\n    const [autocomplete, setAutocomplete] = React.useState(false);\n\n    const handleChange = (e, { value: phone }) => {\n        setValue(phone);\n    };\n\n    return (\n        <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n            <InternationalPhoneInput\n                label='Номер телефона'\n                placeholder='Введите номер телефона'\n                value={value}\n                onChange={handleChange}\n                onCountryChange={setSelectedCountry}\n                options={autocomplete ? OPTIONS : undefined}\n                block={true}\n                clearableCountryCode={clearableCountryCode}\n            />\n            <Gap size='m' />\n            <Typography.Text color='secondary'>\n                Код выбранной страны: {selectedCountry && selectedCountry.iso2}\n            </Typography.Text>\n            <Gap size='xl' />\n            <Switch\n                checked={clearableCountryCode}\n                label='Разрешить удаление кода страны'\n                onChange={() => setClearableCountryCode((prevState) => !prevState)}\n            />\n            <Gap size='m' />\n            <Switch\n                checked={autocomplete}\n                label='Режим автокомплита'\n                onChange={() => {\n                    setAutocomplete((prevState) => !prevState);\n                }}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"инпут-без-пикера-страны",children:"Инпут без пикера страны"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"При необходимости можно отключить возможность явно выбирать код страны через селект. Инпут сам определит страну после ввода её кода."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:640,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [value, setValue] = React.useState('');\n    const [selectedCountry, setSelectedCountry] = React.useState();\n\n    const handleChange = (e, { value: phone }) => {\n        setValue(phone);\n    };\n\n    return (\n        <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n            <InternationalPhoneInput\n                label='Номер телефона'\n                placeholder='Введите номер телефона'\n                value={value}\n                onChange={handleChange}\n                onCountryChange={setSelectedCountry}\n                block={true}\n                countrySelectProps={{ hideCountrySelect: true }}\n            />\n            <Gap size='m' />\n            <Typography.Text color='secondary'>\n                Код выбранной страны: {selectedCountry && selectedCountry.iso2}\n            </Typography.Text>\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"морфология",children:"Морфология"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Поле ввода является оберткой над ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/formcontrol--docs",children:"FormControl"}),",\nпоэтому наследует все доступные для него настройки."]})]})}var description=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},desktop=__webpack_require__("./packages/international-phone-input/src/desktop.ts"),mobile=__webpack_require__("./packages/international-phone-input/src/mobile.ts");function development_createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"// responsive версия\nimport { InternationalPhoneInput } from '@alfalab/core-components/phone-input-international';\n\n// desktop версия\nimport { InternationalPhoneInputDesktop } from '@alfalab/core-components/phone-input-international/desktop';\n\n// mobile версия\nimport { InternationalPhoneInputMobile } from '@alfalab/core-components/phone-input-international/mobile';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{components:{InternationalPhoneInputDesktop:desktop.InternationalPhoneInputDesktop,InternationalPhoneInputMobile:mobile.InternationalPhoneInputMobile}})]})}var development=function development_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)},CHANGELOGraw_namespaceObject="# @alfalab/core-components-international-phone-input\n\n## 1.0.0\n\n### Major Changes\n\n### [#825](https://github.com/core-ds/core-components/pull/825)\n\n-   Добавлен новый компонент InternationalPhoneInput\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input-autocomplete@10.1.6\n    -   shared@0.5.0\n    -   input@12.1.4\n    -   select@15.1.6\n";function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories,title:"Components/InternationalPhoneInput"}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"InternationalPhoneInput",version:package_namespaceObject.i8,package:"@alfalab/core-components/international-phone-input",children:"Используется для ввода телефонного номера в международном формате."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function Component_docs_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent()}},"./.storybook/blocks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ft:function(){return ArgsTabs},Eg:function(){return Changelog},yt:function(){return ComponentHeader},ZV:function(){return CssVars},mQ:function(){return Tabs}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={changelog:"changelog_UmYwo"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Changelog=function Changelog(_ref){var content=_ref.content,_ref$root=_ref.root,root=void 0!==_ref$root&&_ref$root;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.changelog,root&&index_module.root,"sb-unstyled"),children:content})};try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},root:{defaultValue:{value:"false"},description:"",name:"root",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/changelog/changelog.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:".storybook/blocks/changelog/changelog.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),modern=__webpack_require__("./dist/link/modern/index.js"),esm=__webpack_require__("./node_modules/storybook-addon-live-examples/dist/esm/index.js"),css_vars_module_cssVars="cssVars_OsBA8",rootBlockRegexp=/:root {([^}]*)}/g,mixinRegexp=/(?:@define-mixin)(.*{[^}]*})/g,CssVars=function CssVars(_ref){var css=_ref.css,title=_ref.title,expandable=_ref.expandable,_ref$type=_ref.type,type=void 0===_ref$type?"vars":_ref$type,_useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),vars=_useState2[0],setVars=_useState2[1],_useState3=(0,react.useState)(!expandable),_useState4=(0,slicedToArray.Z)(_useState3,2),open=_useState4[0],setOpen=_useState4[1],isVars="vars"===type,regexp=isVars?rootBlockRegexp:mixinRegexp;return(0,react.useEffect)((function(){for(var rootBlockMatch=regexp.exec(css),rootBlocks=[];rootBlockMatch;)rootBlocks.push(rootBlockMatch[1]),rootBlockMatch=regexp.exec(css);var result=rootBlocks.reduce((function(acc,item,index){var divider=index===rootBlocks.length-1?"":"\n";return"".concat(acc).concat(item).concat(divider)}),isVars?":root {":"");isVars&&(result+="}"),setVars(result)}),[]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled",css_vars_module_cssVars),children:[title&&(0,jsx_runtime.jsx)("h2",{className:classnames_default()("sbdocs","sbdocs-h2"),children:title}),vars&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[expandable&&(0,jsx_runtime.jsx)(modern.Link,{view:"default",onClick:function onClick(){return setOpen(!open)},pseudo:!0,children:open?"Скрыть":"Показать"}),open&&(0,jsx_runtime.jsx)(esm.en,{language:"css",code:vars,live:!1})]})]})};try{CssVars.displayName="CssVars",CssVars.__docgenInfo={description:"",displayName:"CssVars",props:{css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},expandable:{defaultValue:null,description:"",name:"expandable",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"vars"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"vars"'},{value:'"mixins"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/css-vars/css-vars.tsx#CssVars"]={docgenInfo:CssVars.__docgenInfo,name:"CssVars",path:".storybook/blocks/css-vars/css-vars.tsx#CssVars"})}catch(__react_docgen_typescript_loader_error){}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),space_modern=__webpack_require__("./dist/space/modern/index.js"),dist_esm=__webpack_require__("./node_modules/@alfalab/utils/dist/esm/index.js"),GithubIcon=__webpack_require__("./.storybook/components/icons/GithubIcon.jsx"),usages_namespaceObject=JSON.parse('{"updatedAt":1671683530526,"withSuffix":{"projects":0,"imports":0,"search":"withSuffix"},"Typography":{"projects":149,"imports":3111,"search":"Typography"},"Tooltip":{"projects":106,"imports":288,"search":"Tooltip*"},"ToastPlate":{"projects":1,"imports":1,"search":"ToastPlate"},"Toast":{"projects":14,"imports":27,"search":"Toast"},"TimeInput":{"projects":0,"imports":0,"search":"TimeInput"},"Textarea":{"projects":45,"imports":74,"search":"Textarea"},"Tag":{"projects":77,"imports":211,"search":"Tag"},"Tabs":{"projects":60,"imports":89,"search":"Tabs*"},"Table":{"projects":34,"imports":134,"search":"Table"},"Switch":{"projects":40,"imports":87,"search":"Switch"},"Steps":{"projects":1,"imports":2,"search":"Steps"},"SteppedProgressBar":{"projects":2,"imports":2,"search":"SteppedProgressBar"},"Status":{"projects":39,"imports":84,"search":"Status"},"Stack":{"projects":1,"imports":1,"search":"Stack"},"Spinner":{"projects":87,"imports":227,"search":"Spinner"},"Space":{"projects":69,"imports":315,"search":"Space"},"SliderInput":{"projects":15,"imports":19,"search":"SliderInput"},"Slider":{"projects":1,"imports":1,"search":"Slider"},"Skeleton":{"projects":68,"imports":354,"search":"Skeleton"},"SidePanel":{"projects":7,"imports":17,"search":"SidePanel*"},"SelectWithTags":{"projects":10,"imports":12,"search":"SelectWithTags"},"Select":{"projects":97,"imports":263,"search":"Select*"},"Scrollbar":{"projects":2,"imports":5,"search":"Scrollbar"},"Radio":{"projects":47,"imports":105,"search":"Radio"},"RadioGroup":{"projects":64,"imports":191,"search":"RadioGroup"},"PureInput":{"projects":0,"imports":0,"search":"PureInput"},"PureCell":{"projects":12,"imports":65,"search":"PureCell"},"ProgressBar":{"projects":11,"imports":12,"search":"ProgressBar"},"Portal":{"projects":4,"imports":5,"search":"Portal"},"Popover":{"projects":20,"imports":45,"search":"Popover"},"Plate":{"projects":63,"imports":214,"search":"Plate"},"PickerButton":{"projects":20,"imports":24,"search":"PickerButton*"},"PhoneInput":{"projects":30,"imports":50,"search":"PhoneInput"},"PasswordInput":{"projects":5,"imports":9,"search":"PasswordInput"},"PatternLock":{"projects":0,"imports":0,"search":"PatternLock"},"PassCode":{"projects":0,"imports":0,"search":"PassCode"},"Pagination":{"projects":7,"imports":8,"search":"Pagination"},"NotificationManager":{"projects":22,"imports":22,"search":"NotificationManager"},"Notification":{"projects":36,"imports":48,"search":"Notification"},"Mq":{"projects":9,"imports":21,"search":"Mq"},"Modal":{"projects":123,"imports":346,"search":"Modal*"},"MaskedInput":{"projects":39,"imports":106,"search":"MaskedInput"},"Loader":{"projects":34,"imports":63,"search":"Loader"},"ListHeader":{"projects":7,"imports":8,"search":"ListHeader"},"List":{"projects":51,"imports":140,"search":"List"},"Link":{"projects":113,"imports":535,"search":"Link"},"KeyboardFocusable":{"projects":3,"imports":3,"search":"KeyboardFocusable"},"IntlPhoneInput":{"projects":1,"imports":1,"search":"IntlPhoneInput"},"InputAutocomplete":{"projects":62,"imports":126,"search":"InputAutocomplete*"},"Input":{"projects":89,"imports":361,"search":"Input"},"IconView":{"projects":0,"imports":0,"search":"IconView"},"IconButton":{"projects":76,"imports":227,"search":"IconButton"},"HatchingProgressBar":{"projects":1,"imports":1,"search":"HatchingProgressBar"},"Grid":{"projects":61,"imports":445,"search":"Grid"},"Gap":{"projects":0,"imports":0,"search":"Gap"},"Gallery":{"projects":2,"imports":4,"search":"Gallery"},"FormControl":{"projects":3,"imports":3,"search":"FormControl"},"FilterTag":{"projects":4,"imports":16,"search":"FilterTag"},"FileUploadItem":{"projects":17,"imports":20,"search":"FileUploadItem"},"Dropzone":{"projects":9,"imports":11,"search":"Dropzone"},"Drawer":{"projects":18,"imports":25,"search":"Drawer"},"Divider":{"projects":48,"imports":131,"search":"Divider"},"DateTimeInput":{"projects":0,"imports":0,"search":"DateTimeInput"},"DateRangeInput":{"projects":0,"imports":0,"search":"DateRangeInput"},"DateInput":{"projects":5,"imports":5,"search":"DateInput"},"CustomButton":{"projects":1,"imports":2,"search":"CustomButton"},"ConfirmationV1":{"projects":1,"imports":1,"search":"ConfirmationV1"},"Confirmation":{"projects":17,"imports":29,"search":"Confirmation*"},"Comment":{"projects":1,"imports":3,"search":"Comment"},"Collapse":{"projects":44,"imports":66,"search":"Collapse"},"CodeInput":{"projects":1,"imports":1,"search":"CodeInput"},"CircularProgressBar":{"projects":11,"imports":16,"search":"CircularProgressBar"},"CheckboxGroup":{"projects":21,"imports":37,"search":"CheckboxGroup"},"Checkbox":{"projects":74,"imports":197,"search":"Checkbox"},"Chart":{"projects":1,"imports":1,"search":"Chart"},"CDNIcon":{"projects":13,"imports":55,"search":"CDNIcon"},"CardImage":{"projects":4,"imports":4,"search":"CardImage"},"CalendarWithSkeleton":{"projects":1,"imports":1,"search":"CalendarWithSkeleton"},"CalendarRange":{"projects":10,"imports":17,"search":"CalendarRange"},"CalendarInput":{"projects":40,"imports":92,"search":"CalendarInput*"},"Calendar":{"projects":9,"imports":19,"search":"Calendar*"},"Button":{"projects":155,"imports":1690,"search":"Button"},"BottomSheet":{"projects":22,"imports":43,"search":"BottomSheet"},"BaseModal":{"projects":2,"imports":2,"search":"BaseModal"},"BankCard":{"projects":1,"imports":1,"search":"BankCard"},"Badge":{"projects":66,"imports":168,"search":"Badge"},"AmountInput":{"projects":36,"imports":63,"search":"AmountInput"},"Backdrop":{"projects":4,"imports":4,"search":"Backdrop"},"Amount":{"projects":40,"imports":143,"search":"Amount"},"Alert":{"projects":60,"imports":182,"search":"Alert"},"Attach":{"projects":12,"imports":13,"search":"Attach"},"ActionButton":{"projects":1,"imports":1,"search":"ActionButton"}}'),ComponentHeader_module_component="component_qx5zQ",ComponentHeader_module_title="title_vmrmp",ComponentHeader_module_titleMobile="titleMobile_RhdZ4",ComponentHeader_module_text="text_TIocB",ComponentHeader_module_info="info_iGRHP",ComponentHeader_module_commonLink="commonLink_WJRCZ",ComponentHeader_module_links="links_kuMT8",ComponentHeader_module_usageLink="usageLink_ilI5I",ComponentHeader_module_github="github_ks4z8",ComponentHeader_module_design="design_NpKuj",mq_modern=__webpack_require__("./dist/mq/modern/index.js"),ComponentHeader=function ComponentHeader(_ref){var _usages$name,_usages$name2,_usages$name3,_usages$name4,_usages$name5,_usages$name6,name=_ref.name,design=_ref.design,children=_ref.children,_useMatchMedia=(0,mq_modern.useMatchMedia)("--tablet-m"),isDesktop=(0,slicedToArray.Z)(_useMatchMedia,1)[0],packageName=name.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase(),githubLink="https://github.com/core-ds/core-components/tree/master/packages/".concat(packageName),Title=isDesktop?typography_modern.Typography.Title:typography_modern.Typography.TitleMobile;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled",ComponentHeader_module_component),children:[(0,jsx_runtime.jsx)(Title,{tag:"h1",view:"xlarge",className:classnames_default()(ComponentHeader_module_title,(0,defineProperty.Z)({},ComponentHeader_module_titleMobile,!isDesktop)),children:name}),children&&(0,jsx_runtime.jsx)(typography_modern.Typography.Text,{tag:"p",view:"primary-medium",className:ComponentHeader_module_text,children:children}),(0,jsx_runtime.jsxs)("div",{className:ComponentHeader_module_links,children:[(0,jsx_runtime.jsx)("a",{className:classnames_default()(ComponentHeader_module_design,(0,defineProperty.Z)({},ComponentHeader_module_commonLink,!design)),href:design||"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components",target:"_blank",children:"Figma"}),(0,jsx_runtime.jsxs)("a",{className:ComponentHeader_module_github,href:githubLink,target:"_blank",children:[(0,jsx_runtime.jsx)(GithubIcon.E,{fill:"var(--color-light-graphic-primary)"}),"Github"]})]}),(0,jsx_runtime.jsx)(space_modern.Space,{direction:"horizontal",align:"center",className:ComponentHeader_module_info,children:(null===(_usages$name=usages_namespaceObject[name])||void 0===_usages$name?void 0:_usages$name.projects)>0&&(0,jsx_runtime.jsxs)(typography_modern.Typography.Text,{view:"primary-small",color:"secondary",children:["Используется в"," ",(0,jsx_runtime.jsxs)(modern.Link,{href:"http://design/design-system-usage/usage-chart?component=".concat(null===(_usages$name2=usages_namespaceObject[name])||void 0===_usages$name2?void 0:_usages$name2.search),target:"_blank",view:"secondary",underline:!1,title:"Необходимо подключение к VPN",className:ComponentHeader_module_usageLink,children:[null===(_usages$name3=usages_namespaceObject[name])||void 0===_usages$name3?void 0:_usages$name3.projects," ",(0,dist_esm._6)(null===(_usages$name4=usages_namespaceObject[name])||void 0===_usages$name4?void 0:_usages$name4.projects,"проекте","проектах","проектах")]})," и ","~",null===(_usages$name5=usages_namespaceObject[name])||void 0===_usages$name5?void 0:_usages$name5.imports," ",(0,dist_esm._6)(null===(_usages$name6=usages_namespaceObject[name])||void 0===_usages$name6?void 0:_usages$name6.imports,"файле","файлах","файлах")]})})]})};try{ComponentHeader.displayName="ComponentHeader",ComponentHeader.__docgenInfo={description:"",displayName:"ComponentHeader",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"",name:"design",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/component-header/ComponentHeader.tsx#ComponentHeader"]={docgenInfo:ComponentHeader.__docgenInfo,name:"ComponentHeader",path:".storybook/blocks/component-header/ComponentHeader.tsx#ComponentHeader"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./.storybook/blocks/grid/index.ts");var _TabTitle,tabs_modern=__webpack_require__("./dist/tabs/modern/index.js"),tabs_index_module_tabs="tabs_BRA6G",TabName=function(TabName){return TabName.DESCRIPTION="DESCRIPTION",TabName.PROPS="PROPS",TabName.CSS_VARS="CSS_VARS",TabName.CHANGELOG="CHANGELOG",TabName.DEVELOPMENT="DEVELOPMENT",TabName}(TabName||{}),TabTitle=(_TabTitle={},(0,defineProperty.Z)(_TabTitle,TabName.DESCRIPTION,"Описание"),(0,defineProperty.Z)(_TabTitle,TabName.PROPS,"Свойства"),(0,defineProperty.Z)(_TabTitle,TabName.CSS_VARS,"CSS-переменные"),(0,defineProperty.Z)(_TabTitle,TabName.CHANGELOG,"Обновления"),(0,defineProperty.Z)(_TabTitle,TabName.DEVELOPMENT,"Разработчику"),_TabTitle),Tabs=function Tabs(_ref){var description=_ref.description,props=_ref.props,cssVars=_ref.cssVars,changelog=_ref.changelog,_ref$defaultSelected=_ref.defaultSelected,defaultSelected=void 0===_ref$defaultSelected?TabName.DESCRIPTION:_ref$defaultSelected,development=_ref.development,_useState=(0,react.useState)(defaultSelected),_useState2=(0,slicedToArray.Z)(_useState,2),selected=_useState2[0],setSelected=_useState2[1],handleChange=(0,react.useCallback)((function(_,_ref2){var selectedId=_ref2.selectedId;setSelected(selectedId)}),[]),tabs=(0,react.useMemo)((function(){return function renderTabs(){return[(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.DESCRIPTION],id:TabName.DESCRIPTION,children:description},"description"),props?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.PROPS],id:TabName.PROPS,children:props},"props"):null,cssVars?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.CSS_VARS],id:TabName.CSS_VARS,children:cssVars},"css-vars"):null,development?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.DEVELOPMENT],id:TabName.DEVELOPMENT,children:development},"development"):null,changelog?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.CHANGELOG],id:TabName.CHANGELOG,children:(0,jsx_runtime.jsx)("div",{style:{marginTop:"32px"},children:(0,jsx_runtime.jsx)(Changelog,{content:changelog})})},"changelog"):null].filter(react.isValidElement)}()}),[description,props,cssVars]);return(0,jsx_runtime.jsx)(tabs_modern.Tabs,{className:"sb-unstyled",selectedId:selected,onChange:handleChange,containerClassName:tabs_index_module_tabs,children:tabs})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"ReactNode"}},props:{defaultValue:null,description:"",name:"props",required:!0,type:{name:"ReactNode"}},cssVars:{defaultValue:null,description:"",name:"cssVars",required:!1,type:{name:"ReactNode"}},changelog:{defaultValue:null,description:"",name:"changelog",required:!1,type:{name:"string"}},defaultSelected:{defaultValue:{value:"TabName.DESCRIPTION"},description:"",name:"defaultSelected",required:!1,type:{name:"enum",value:[{value:'"DESCRIPTION"'},{value:'"PROPS"'},{value:'"CSS_VARS"'},{value:'"CHANGELOG"'},{value:'"DEVELOPMENT"'}]}},development:{defaultValue:null,description:"",name:"development",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/tabs/component.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:".storybook/blocks/tabs/component.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),args_tabs_index_module_tabsTypes="tabsTypes_QEaxU",args_tabs_index_module_error="error_EECcc",ArgsTabs=function ArgsTabs(_ref){var components=_ref.components,_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),selected=_useState2[0],setSelected=_useState2[1],keys=Object.keys(components);return(0,jsx_runtime.jsx)(tabs_modern.Tabs,{className:"sb-unstyled",selectedId:selected,onChange:function handleChange(_,_ref2){var selectedId=_ref2.selectedId;setSelected(selectedId)},containerClassName:args_tabs_index_module_tabsTypes,view:"secondary",size:"xxs",scrollable:!0,children:keys.map((function(key,index){return(0,jsx_runtime.jsx)(tabs_modern.Tab,{id:index,title:key,children:components[key]?(0,jsx_runtime.jsx)(dist.Ed,{of:components[key]}):(0,jsx_runtime.jsx)("div",{className:args_tabs_index_module_error,children:"Что-то пошло не так "})},key)}))})};try{ArgsTabs.displayName="ArgsTabs",ArgsTabs.__docgenInfo={description:"",displayName:"ArgsTabs",props:{components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Record<string, ReactNode>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/args-tabs/component.tsx#ArgsTabs"]={docgenInfo:ArgsTabs.__docgenInfo,name:"ArgsTabs",path:".storybook/blocks/args-tabs/component.tsx#ArgsTabs"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/icons/GithubIcon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return GithubIcon}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),GithubIcon=function GithubIcon(_ref){var _ref$fill=_ref.fill,fill=void 0===_ref$fill?"#24292E":_ref$fill,_ref$width=_ref.width,width=void 0===_ref$width?32:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?32:_ref$height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 32 32",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:fill})})};GithubIcon.__docgenInfo={description:"",methods:[],displayName:"GithubIcon",props:{fill:{defaultValue:{value:"'#24292E'",computed:!1},required:!1},width:{defaultValue:{value:"32",computed:!1},required:!1},height:{defaultValue:{value:"32",computed:!1},required:!1}}}},"./packages/international-phone-input/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},international_phone_input:function(){return international_phone_input}});var _international_phone_,_international_phone_2,_international_phone_3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_alfalab_core_components_international_phone_input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/international-phone-input/modern/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/InternationalPhoneInput",component:_alfalab_core_components_international_phone_input__WEBPACK_IMPORTED_MODULE_1__.InternationalPhoneInput,id:"InternationalPhoneInput"},OPTIONS=[{key:"+7 921 681-53-98"},{key:"+7 921 681-52-97"},{key:"+7 921 681-52-96"},{key:"+7 921 681-52-95"},{key:"8 921 681-52-94"}],international_phone_input={name:"InternationalPhoneInput",render:function render(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:"320px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_international_phone_input__WEBPACK_IMPORTED_MODULE_1__.InternationalPhoneInput,{label:"Номер телефона",placeholder:"Введите номер телефона",value:value,onChange:function handleChange(e,_ref){var phone=_ref.value;setValue(phone)},defaultIso2:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("defaultIso2","ru"),options:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("options",!1)?OPTIONS:void 0,block:!0,clearableCountryCode:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("clearableCountryCode",!0),clear:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("clear",!1)})})}};__webpack_exports__.default=meta,international_phone_input.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},international_phone_input.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_international_phone_=international_phone_input.parameters)||void 0===_international_phone_?void 0:_international_phone_.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'InternationalPhoneInput',\n  render: () => {\n    const [value, setValue] = useState('');\n    const handleChange: InternationalPhoneInputProps['onChange'] = (e, {\n      value: phone\n    }) => {\n      setValue(phone);\n    };\n    return <div style={{\n      width: '320px'\n    }}>\n                <InternationalPhoneInput label='Номер телефона' placeholder='Введите номер телефона' value={value} onChange={handleChange} defaultIso2={text('defaultIso2', 'ru')} options={boolean('options', false) ? OPTIONS : undefined} block={true} clearableCountryCode={boolean('clearableCountryCode', true)} clear={boolean('clear', false)} />\n            </div>;\n  }\n}"},null===(_international_phone_2=international_phone_input.parameters)||void 0===_international_phone_2||null===(_international_phone_3=_international_phone_2.docs)||void 0===_international_phone_3?void 0:_international_phone_3.source)})});var __namedExportsOrder=["international_phone_input"]}}]);