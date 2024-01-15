"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[3101],{"./packages/table/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Table:function(){return component_Table}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),DEFAULT_TABLE_CONTEXT={columnsConfiguration:[],compactView:!1,stickyHeader:!1,compactHorizontal:!1,wrapperRef:{current:null}},TableContext=react.createContext(DEFAULT_TABLE_CONTEXT);var index_module_component="component_vs83Z",index_module_row="row_O9oH1",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","rowClassName","children","dataTestId"],THead=function THead(_ref){var className=_ref.className,rowClassName=_ref.rowClassName,children=_ref.children,dataTestId=_ref.dataTestId,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)("thead",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()(index_module_component,className),"data-test-id":dataTestId},restProps),{},{children:(0,jsx_runtime.jsx)("tr",{className:classnames_default()(index_module_row,rowClassName),children:children})}))};try{THead.displayName="THead",THead.__docgenInfo={description:"",displayName:"THead",props:{rowClassName:{defaultValue:null,description:"Дополнительный класс для tr",name:"rowClassName",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/thead/Component.tsx#THead"]={docgenInfo:THead.__docgenInfo,name:"THead",path:"packages/table/src/components/thead/Component.tsx#THead"})}catch(__react_docgen_typescript_loader_error){}function findAllHeadCellsProps(children){var result=[];return react.Children.forEach(children,(function(child){(function isChildInstanceOf(child,Component){return child.type===react.createElement(Component).type})(child,THead)&&react.Children.forEach(child.props.children,(function(headChild){result.push(headChild.props)}))})),result}var table_index_module_component="component_kaY_4",table_index_module_wrapper="wrapper_MViIA",table_index_module_stickyHeader="stickyHeader_DwFZd",table_index_module_hasPagination="hasPagination_a0rW6",table_index_module_table="table_kSy1r",Component_excluded=["className","children","compactView","compactHorizontal","wrapper","pagination","dataTestId","stickyHeader"],Table=(0,react.forwardRef)((function(_ref,ref){var className=_ref.className,children=_ref.children,_ref$compactView=_ref.compactView,compactView=void 0!==_ref$compactView&&_ref$compactView,_ref$compactHorizonta=_ref.compactHorizontal,compactHorizontal=void 0!==_ref$compactHorizonta&&_ref$compactHorizonta,_ref$wrapper=_ref.wrapper,wrapper=void 0===_ref$wrapper||_ref$wrapper,pagination=_ref.pagination,dataTestId=_ref.dataTestId,_ref$stickyHeader=_ref.stickyHeader,stickyHeader=void 0!==_ref$stickyHeader&&_ref$stickyHeader,restProps=(0,objectWithoutProperties.Z)(_ref,Component_excluded),wrapperRef=(0,react.useRef)(null),columnsConfiguration=(0,react.useMemo)((function(){return findAllHeadCellsProps(children).map((function(columnProps,index){return{width:columnProps.width,textAlign:columnProps.textAlign,hidden:columnProps.hidden,index:index}}))}),[children]);return(0,jsx_runtime.jsx)(TableContext.Provider,{value:{stickyHeader:stickyHeader,columnsConfiguration:columnsConfiguration,compactView:compactView,compactHorizontal:compactHorizontal,wrapperRef:wrapperRef},children:(0,jsx_runtime.jsxs)("div",{ref:wrapperRef,className:classnames_default()(table_index_module_component,className,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},table_index_module_wrapper,wrapper),table_index_module_hasPagination,!!pagination),table_index_module_stickyHeader,stickyHeader)),"data-test-id":dataTestId,children:[(0,jsx_runtime.jsx)("table",(0,objectSpread2.Z)((0,objectSpread2.Z)({ref:ref,className:table_index_module_table},restProps),{},{children:children})),pagination]})})}));try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{compactView:{defaultValue:{value:"false"},description:"Компактный вид",name:"compactView",required:!1,type:{name:"boolean"}},compactHorizontal:{defaultValue:{value:"false"},description:"Уменьшение горизонтальных паддингов",name:"compactHorizontal",required:!1,type:{name:"boolean"}},wrapper:{defaultValue:{value:"true"},description:"Оборачивает таблицу в стилизованный контейнер",name:"wrapper",required:!1,type:{name:"boolean"}},pagination:{defaultValue:null,description:"Слот для пагинации",name:"pagination",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},stickyHeader:{defaultValue:{value:"false"},description:"Если true то заголовок будет фиксироваться при скроле",name:"stickyHeader",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/table/Component.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"packages/table/src/components/table/Component.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}var modern=__webpack_require__("./dist/pagination/modern/index.js"),desktop=__webpack_require__("./dist/select/modern/desktop/index.js"),button_modern=__webpack_require__("./dist/button/modern/index.js"),select_field_index_module_field="field_cvJt_",select_field_index_module_open="open_hNdlJ",select_field_excluded=["ref"],CustomSelectField=function CustomSelectField(_ref){var selected=_ref.selected,innerProps=_ref.innerProps,Arrow=_ref.Arrow,open=_ref.open,ref=innerProps.ref,restInnerProps=(0,objectWithoutProperties.Z)(innerProps,select_field_excluded);return(0,jsx_runtime.jsx)("div",{ref:ref,children:(0,jsx_runtime.jsx)(button_modern.Button,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restInnerProps),{},{size:"xxs",view:"link",className:classnames_default()(select_field_index_module_field,(0,defineProperty.Z)({},select_field_index_module_open,open)),rightAddons:Arrow,children:null==selected?void 0:selected.content}))})},pagination_index_module={component:"component_QO6Gn",pagesWrapper:"pagesWrapper_QCT7k",tag:"tag_LKsKn",tagActive:"tagActive_MQHia",pagination:"pagination_NL6zv",menu:"menu_jPrF8",option:"option_CnkZJ"},pagination_Component_excluded=["perPage","possiblePerPage","onPerPageChange","hidePerPageSelect","pagesCount","onPageChange","className","dataTestId"],Pagination=function Pagination(_ref){var _ref$perPage=_ref.perPage,perPage=void 0===_ref$perPage?25:_ref$perPage,_ref$possiblePerPage=_ref.possiblePerPage,possiblePerPage=void 0===_ref$possiblePerPage?[25,50,100]:_ref$possiblePerPage,_ref$onPerPageChange=_ref.onPerPageChange,onPerPageChange=void 0===_ref$onPerPageChange?function(){return null}:_ref$onPerPageChange,_ref$hidePerPageSelec=_ref.hidePerPageSelect,hidePerPageSelect=void 0!==_ref$hidePerPageSelec&&_ref$hidePerPageSelec,pagesCount=_ref.pagesCount,_ref$onPageChange=_ref.onPageChange,onPageChange=void 0===_ref$onPageChange?function(){return null}:_ref$onPageChange,className=_ref.className,dataTestId=_ref.dataTestId,restPaginationProps=(0,objectWithoutProperties.Z)(_ref,pagination_Component_excluded),wrapperRef=(0,react.useContext)(TableContext).wrapperRef,options=(0,react.useMemo)((function(){return Array.from(new Set(possiblePerPage.concat(perPage))).sort((function(a,b){return a-b})).map((function(value){return{key:value.toString(),content:"Показывать по ".concat(value)}}))}),[perPage,possiblePerPage]),handlePerPageChange=(0,react.useCallback)((function(_ref2){var selected=_ref2.selected;onPerPageChange(Number(null==selected?void 0:selected.key))}),[onPerPageChange]),handlePageChange=(0,react.useCallback)((function(pageIndex){onPageChange(pageIndex),setTimeout((function(){wrapperRef.current&&wrapperRef.current.scrollIntoView()}),0)}),[onPageChange,wrapperRef]);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(pagination_index_module.component,className),"data-test-id":dataTestId,children:[!1===hidePerPageSelect&&(0,jsx_runtime.jsx)(desktop.SelectDesktop,{options:options,selected:perPage.toString(),onChange:handlePerPageChange,preventFlip:!1,size:"s",className:pagination_index_module.select,optionsListClassName:pagination_index_module.menu,optionClassName:pagination_index_module.option,Field:CustomSelectField}),pagesCount>1&&(0,jsx_runtime.jsx)(modern.Pagination,(0,objectSpread2.Z)({pagesCount:pagesCount,onPageChange:handlePageChange,className:pagination_index_module.pagination},restPaginationProps))]})};try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{currentPageIndex:{defaultValue:null,description:"Текущая страница (с нуля)",name:"currentPageIndex",required:!0,type:{name:"number"}},pagesCount:{defaultValue:null,description:"Количество страниц",name:"pagesCount",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},hideArrows:{defaultValue:null,description:"Скрывает стрелки, если выбрана первая или последняя страница",name:"hideArrows",required:!1,type:{name:"boolean"}},sidePadding:{defaultValue:null,description:"Количество видимых страниц по бокам",name:"sidePadding",required:!1,type:{name:"number"}},activePadding:{defaultValue:null,description:"Количество видимых страниц вокруг выбранной",name:"activePadding",required:!1,type:{name:"number"}},view:{defaultValue:null,description:"Режим пагинации",name:"view",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"per-page"'}]}},onPageChange:{defaultValue:{value:"() => null"},description:"Обработчик переключения страницы",name:"onPageChange",required:!1,type:{name:"((pageIndex: number) => void)"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},perPage:{defaultValue:{value:"25"},description:"Количество строк на страницу",name:"perPage",required:!1,type:{name:"number"}},possiblePerPage:{defaultValue:{value:"[25, 50, 100]"},description:"Возможные варианты разбивки",name:"possiblePerPage",required:!1,type:{name:"number[]"}},onPerPageChange:{defaultValue:{value:"() => null"},description:"Обработчик переключения perPage",name:"onPerPageChange",required:!1,type:{name:"((perPage: number) => void)"}},hidePerPageSelect:{defaultValue:{value:"false"},description:"Скрывает переключатель количества строк на страницу",name:"hidePerPageSelect",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/pagination/Component.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"packages/table/src/components/pagination/Component.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}var thead_cell_index_module_component="component_fNV98",thead_cell_index_module_stickyHeader="stickyHeader_hQfP_",thead_cell_index_module_compactHorizontal="compactHorizontal_HE6Ga",thead_cell_Component_excluded=["children","className","dataTestId","style","width","textAlign","hidden"],THeadCell=function THeadCell(_ref){var children=_ref.children,className=_ref.className,dataTestId=_ref.dataTestId,style=_ref.style,width=_ref.width,textAlign=_ref.textAlign,hidden=_ref.hidden,restProps=(0,objectWithoutProperties.Z)(_ref,thead_cell_Component_excluded),_useContext=(0,react.useContext)(TableContext),compactHorizontal=_useContext.compactHorizontal,stickyHeader=_useContext.stickyHeader;return hidden?null:(0,jsx_runtime.jsx)("th",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()(thead_cell_index_module_component,className,compactHorizontal&&thead_cell_index_module_compactHorizontal,(0,defineProperty.Z)({},thead_cell_index_module_stickyHeader,stickyHeader)),style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{width:width,textAlign:textAlign}),"data-test-id":dataTestId},restProps),{},{children:children}))};try{THeadCell.displayName="THeadCell",THeadCell.__docgenInfo={description:"",displayName:"THeadCell",props:{width:{defaultValue:null,description:"Ширина колонки",name:"width",required:!1,type:{name:"string | number"}},textAlign:{defaultValue:null,description:"Выравнивание текста в колонке",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'},{value:'"end"'},{value:'"justify"'},{value:'"match-parent"'},{value:'"start"'}]}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/thead-cell/Component.tsx#THeadCell"]={docgenInfo:THeadCell.__docgenInfo,name:"THeadCell",path:"packages/table/src/components/thead-cell/Component.tsx#THeadCell"})}catch(__react_docgen_typescript_loader_error){}var SortIconAsc=function SortIconAsc(props){return(0,jsx_runtime.jsx)("svg",(0,objectSpread2.Z)((0,objectSpread2.Z)({width:"18",height:"18",viewBox:"0 0 18 18",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img"},props),{},{children:(0,jsx_runtime.jsx)("path",{d:"M3.00004 10C3.00004 10 11.4477 10 12 10C12 9.33333 12.0001 8.16667 12.0001 7.5H3.0001C3.00006 8 3.0001 9.5 3.00004 10ZM3.0001 3.5C3.00003 4.16667 3 5.33333 3 6H9C9 5.33333 9 4.16667 9 3.5C9 3.5 3.55238 3.5 3.0001 3.5ZM3.00009 14C3.21041 14 15 14 15 14C15 13.5 15 12 15 11.5C15 11.5 3.55238 11.5 3.00009 11.5C3 12 3 13.5 3.00009 14Z"})}))};try{SortIconAsc.displayName="SortIconAsc",SortIconAsc.__docgenInfo={description:"",displayName:"SortIconAsc",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/tsortable-head-cell/sort-icon-asc.tsx#SortIconAsc"]={docgenInfo:SortIconAsc.__docgenInfo,name:"SortIconAsc",path:"packages/table/src/components/tsortable-head-cell/sort-icon-asc.tsx#SortIconAsc"})}catch(__react_docgen_typescript_loader_error){}var SortIconDesc=function SortIconDesc(props){return(0,jsx_runtime.jsx)("svg",(0,objectSpread2.Z)((0,objectSpread2.Z)({width:"18",height:"18",viewBox:"0 0 18 18",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img"},props),{},{children:(0,jsx_runtime.jsx)("path",{d:"M3.00004 10C3.00004 10 11.4477 10 12 10C12 9.33333 12.0001 8.16667 12.0001 7.5H3.0001C3.00006 8 3.0001 9.5 3.00004 10ZM3.0001 3.5C3.00003 4.16667 3 5.33333 3 6H15C15 5.33333 15 4.16667 15 3.5C15 3.5 3.55238 3.5 3.0001 3.5ZM3.00009 14C3.21041 14 9 14 9 14C9 13.5 9 12 9 11.5C9 11.5 3.55238 11.5 3.00009 11.5C3 12 3 13.5 3.00009 14Z"})}))};try{SortIconDesc.displayName="SortIconDesc",SortIconDesc.__docgenInfo={description:"",displayName:"SortIconDesc",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/tsortable-head-cell/sort-icon-desc.tsx#SortIconDesc"]={docgenInfo:SortIconDesc.__docgenInfo,name:"SortIconDesc",path:"packages/table/src/components/tsortable-head-cell/sort-icon-desc.tsx#SortIconDesc"})}catch(__react_docgen_typescript_loader_error){}var SortIconUnset=function SortIconUnset(props){return(0,jsx_runtime.jsx)("svg",(0,objectSpread2.Z)((0,objectSpread2.Z)({width:"18",height:"18",viewBox:"0 0 18 18",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img"},props),{},{children:(0,jsx_runtime.jsx)("path",{d:"M3 10C3 10 10.4477 10 11 10C11 9.33333 11.0001 8.16667 11.0001 7.5H3.00006C3.00002 8 3.00006 9.5 3 10ZM3.0001 3.5C3.00003 4.16667 3 5.33333 3 6H15C15 5.33333 15 4.16667 15 3.5C15 3.5 3.55238 3.5 3.0001 3.5ZM3 14C3.21032 14 14 14 14 14C14 13.5 14 12 14 11.5C14 11.5 3.55228 11.5 3 11.5C2.99991 12 2.99991 13.5 3 14Z"})}))};try{SortIconUnset.displayName="SortIconUnset",SortIconUnset.__docgenInfo={description:"",displayName:"SortIconUnset",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/tsortable-head-cell/sort-icon-unset.tsx#SortIconUnset"]={docgenInfo:SortIconUnset.__docgenInfo,name:"SortIconUnset",path:"packages/table/src/components/tsortable-head-cell/sort-icon-unset.tsx#SortIconUnset"})}catch(__react_docgen_typescript_loader_error){}var tsortable_head_cell_index_module_content="content_XVBBr",tsortable_head_cell_index_module_icon="icon_IkNjy",tsortable_head_cell_index_module_reverse="reverse_zQaYI",tsortable_head_cell_index_module_sorted="sorted_EQan_",tsortable_head_cell_Component_excluded=["children","className","defaultIsSortedDesc","isSortedDesc","textAlign","onSort"],TSortableHeadCell=function TSortableHeadCell(_ref){var children=_ref.children,className=_ref.className,defaultIsSortedDesc=_ref.defaultIsSortedDesc,isSortedDesc=_ref.isSortedDesc,textAlign=_ref.textAlign,onSort=_ref.onSort,restProps=(0,objectWithoutProperties.Z)(_ref,tsortable_head_cell_Component_excluded),SortIcon=(0,react.useMemo)((function(){var value=isSortedDesc;return void 0===value&&(value=defaultIsSortedDesc),"boolean"==typeof value?value?SortIconDesc:SortIconAsc:SortIconUnset}),[defaultIsSortedDesc,isSortedDesc]);return(0,jsx_runtime.jsx)(THeadCell,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:className},restProps),{},{children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()(tsortable_head_cell_index_module_content,(0,defineProperty.Z)({},tsortable_head_cell_index_module_reverse,"right"===textAlign)),children:[children,(0,jsx_runtime.jsx)(SortIcon,{onClick:onSort,className:classnames_default()(tsortable_head_cell_index_module_icon,(0,defineProperty.Z)({},tsortable_head_cell_index_module_sorted,void 0!==isSortedDesc))})]})}))};try{TSortableHeadCell.displayName="TSortableHeadCell",TSortableHeadCell.__docgenInfo={description:"",displayName:"TSortableHeadCell",props:{width:{defaultValue:null,description:"Ширина колонки",name:"width",required:!1,type:{name:"string | number"}},textAlign:{defaultValue:null,description:"Выравнивание текста в колонке",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'},{value:'"end"'},{value:'"justify"'},{value:'"match-parent"'},{value:'"start"'}]}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},isSortedDesc:{defaultValue:null,description:"",name:"isSortedDesc",required:!1,type:{name:"boolean"}},defaultIsSortedDesc:{defaultValue:null,description:"",name:"defaultIsSortedDesc",required:!1,type:{name:"boolean"}},onSort:{defaultValue:null,description:"",name:"onSort",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/tsortable-head-cell/Component.tsx#TSortableHeadCell"]={docgenInfo:TSortableHeadCell.__docgenInfo,name:"TSortableHeadCell",path:"packages/table/src/components/tsortable-head-cell/Component.tsx#TSortableHeadCell"})}catch(__react_docgen_typescript_loader_error){}var tbody_index_module_component="component_dTGCd",tbody_Component_excluded=["className","children","dataTestId"],TBody=function TBody(_ref){var className=_ref.className,children=_ref.children,dataTestId=_ref.dataTestId,restProps=(0,objectWithoutProperties.Z)(_ref,tbody_Component_excluded);return(0,jsx_runtime.jsx)("tbody",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()(tbody_index_module_component,className),"data-test-id":dataTestId},restProps),{},{children:children}))};try{TBody.displayName="TBody",TBody.__docgenInfo={description:"",displayName:"TBody",props:{dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/tbody/Component.tsx#TBody"]={docgenInfo:TBody.__docgenInfo,name:"TBody",path:"packages/table/src/components/tbody/Component.tsx#TBody"})}catch(__react_docgen_typescript_loader_error){}var tcell_index_module_component="component_cxly2",tcell_index_module_compactHorizontal="compactHorizontal_cOuYl",tcell_index_module_compact="compact_qwE97",tcell_Component_excluded=["className","style","dataTestId","children","index"],TCell=function TCell(_ref){var className=_ref.className,style=_ref.style,dataTestId=_ref.dataTestId,children=_ref.children,index=_ref.index,restProps=(0,objectWithoutProperties.Z)(_ref,tcell_Component_excluded),_useContext=(0,react.useContext)(TableContext),columnsConfiguration=_useContext.columnsConfiguration,compactView=_useContext.compactView,compactHorizontal=_useContext.compactHorizontal,column=void 0===index?null:columnsConfiguration[index],width=null==column?void 0:column.width,textAlign=null==column?void 0:column.textAlign;return(null==column?void 0:column.hidden)||!1?null:(0,jsx_runtime.jsx)("td",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()(tcell_index_module_component,className,compactView&&tcell_index_module_compact,compactHorizontal&&tcell_index_module_compactHorizontal),style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{width:width,textAlign:textAlign}),"data-test-id":dataTestId},restProps),{},{children:children}))};try{TCell.displayName="TCell",TCell.__docgenInfo={description:"",displayName:"TCell",props:{dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},index:{defaultValue:null,description:"Устанавливается автоматически и позволяет использовать конфиг для соответствующего индекса",name:"index",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/tcell/Component.tsx#TCell"]={docgenInfo:TCell.__docgenInfo,name:"TCell",path:"packages/table/src/components/tcell/Component.tsx#TCell"})}catch(__react_docgen_typescript_loader_error){}var trow_index_module_component="component_toLsp",trow_index_module_withoutBorder="withoutBorder_mO7ZF",trow_index_module_clickable="clickable_KdIfi",trow_index_module_selected="selected_A6zao",trow_Component_excluded=["children","className","selected","withoutBorder","dataTestId"],TRow=function TRow(_ref){var children=_ref.children,className=_ref.className,selected=_ref.selected,withoutBorder=_ref.withoutBorder,dataTestId=_ref.dataTestId,restProps=(0,objectWithoutProperties.Z)(_ref,trow_Component_excluded);return(0,jsx_runtime.jsx)("tr",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()(trow_index_module_component,className,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},trow_index_module_clickable,void 0!==restProps.onClick),trow_index_module_selected,selected),trow_index_module_withoutBorder,withoutBorder)),"data-test-id":dataTestId},restProps),{},{children:react.Children.map(children,(function(child,index){return react.cloneElement(child,{index:index})}))}))};try{TRow.displayName="TRow",TRow.__docgenInfo={description:"",displayName:"TRow",props:{selected:{defaultValue:null,description:"Стиль выбранной строки",name:"selected",required:!1,type:{name:"boolean"}},withoutBorder:{defaultValue:null,description:"Убирает нижнюю границу",name:"withoutBorder",required:!1,type:{name:"boolean"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/trow/Component.tsx#TRow"]={docgenInfo:TRow.__docgenInfo,name:"TRow",path:"packages/table/src/components/trow/Component.tsx#TRow"})}catch(__react_docgen_typescript_loader_error){}var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),texpandable_row_index_module_row="row_ZBKcT",texpandable_row_index_module_selected="selected_LFEVk",texpandable_row_index_module_expanded="expanded_Hdy7J",texpandable_row_index_module_expandable="expandable_QGzbx",texpandable_row_Component_excluded=["className","selected","expanded","defaultExpanded","onToggle","renderContent"],TExpandableRow=function TExpandableRow(_ref){var className=_ref.className,selected=_ref.selected,expanded=_ref.expanded,_ref$defaultExpanded=_ref.defaultExpanded,defaultExpanded=void 0!==_ref$defaultExpanded&&_ref$defaultExpanded,_ref$onToggle=_ref.onToggle,onToggle=void 0===_ref$onToggle?function(){return null}:_ref$onToggle,_ref$renderContent=_ref.renderContent,renderContent=void 0===_ref$renderContent?function(){return null}:_ref$renderContent,restProps=(0,objectWithoutProperties.Z)(_ref,texpandable_row_Component_excluded),_useState=(0,react.useState)(defaultExpanded),_useState2=(0,slicedToArray.Z)(_useState,2),expandedState=_useState2[0],setExpandedState=_useState2[1],uncontrolled=void 0===expanded,isExpanded=uncontrolled?expandedState:expanded;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(TRow,(0,objectSpread2.Z)({className:classnames_default()(texpandable_row_index_module_row,className,(0,defineProperty.Z)((0,defineProperty.Z)({},texpandable_row_index_module_selected,selected),texpandable_row_index_module_expanded,isExpanded)),selected:selected,onClick:function handleToggle(){uncontrolled&&setExpandedState(!isExpanded),onToggle(isExpanded)}},restProps)),(0,jsx_runtime.jsx)("tr",{className:classnames_default()(texpandable_row_index_module_expandable,(0,defineProperty.Z)({},texpandable_row_index_module_expanded,isExpanded)),children:renderContent(isExpanded)})]})};try{TExpandableRow.displayName="TExpandableRow",TExpandableRow.__docgenInfo={description:"",displayName:"TExpandableRow",props:{selected:{defaultValue:null,description:"Стиль выбранной строки",name:"selected",required:!1,type:{name:"boolean"}},withoutBorder:{defaultValue:null,description:"Убирает нижнюю границу",name:"withoutBorder",required:!1,type:{name:"boolean"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},defaultExpanded:{defaultValue:{value:"false"},description:"",name:"defaultExpanded",required:!1,type:{name:"boolean"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:{value:"() => null"},description:"",name:"onToggle",required:!1,type:{name:"((expanded: boolean) => void)"}},renderContent:{defaultValue:{value:"() => null"},description:"",name:"renderContent",required:!1,type:{name:"(expanded: boolean) => ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/components/texpandable-row/Component.tsx#TExpandableRow"]={docgenInfo:TExpandableRow.__docgenInfo,name:"TExpandableRow",path:"packages/table/src/components/texpandable-row/Component.tsx#TExpandableRow"})}catch(__react_docgen_typescript_loader_error){}var component_Table=Object.assign(Table,{TBody:TBody,THead:THead,THeadCell:THeadCell,TSortableHeadCell:TSortableHeadCell,TCell:TCell,TRow:TRow,TExpandableRow:TExpandableRow,Pagination:Pagination});try{component_Table.displayName="Table",component_Table.__docgenInfo={description:"",displayName:"Table",props:{compactView:{defaultValue:null,description:"Компактный вид",name:"compactView",required:!1,type:{name:"boolean"}},compactHorizontal:{defaultValue:null,description:"Уменьшение горизонтальных паддингов",name:"compactHorizontal",required:!1,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"Оборачивает таблицу в стилизованный контейнер",name:"wrapper",required:!1,type:{name:"boolean"}},pagination:{defaultValue:null,description:"Слот для пагинации",name:"pagination",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},stickyHeader:{defaultValue:null,description:"Если true то заголовок будет фиксироваться при скроле",name:"stickyHeader",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/table/src/component.tsx#Table"]={docgenInfo:component_Table.__docgenInfo,name:"Table",path:"packages/table/src/component.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}}}]);