try{
(()=>{var c=__REACT__,{Children:k,Component:w,Fragment:M,Profiler:L,PureComponent:R,StrictMode:P,Suspense:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:I,cloneElement:B,createContext:H,createElement:F,createFactory:U,createRef:V,forwardRef:q,isValidElement:G,lazy:Y,memo:K,useCallback:W,useContext:j,useDebugValue:z,useEffect:u,useImperativeHandle:Z,useLayoutEffect:$,useMemo:J,useReducer:Q,useRef:X,useState:m,version:ee}=__REACT__;var ae=__STORYBOOK_API__,{ActiveTabs:se,Consumer:ce,ManagerContext:ie,Provider:le,addons:l,combineParameters:ue,controlOrMetaKey:me,controlOrMetaSymbol:pe,eventMatchesShortcut:de,eventToShortcut:Se,isMacLike:ge,isShortcutTaken:ye,keyToSymbol:fe,merge:Te,mockChannel:be,optionOrAltSymbol:Ce,shortcutMatchesShortcut:Ee,shortcutToHumanString:he,types:p,useAddonState:Oe,useArgTypes:_e,useArgs:ve,useChannel:Ae,useGlobalTypes:xe,useGlobals:Ne,useParameter:ke,useSharedState:we,useStoryPrepared:Me,useStorybookApi:Le,useStorybookState:Re}=__STORYBOOK_API__;var He=__STORYBOOK_COMPONENTS__,{A:Fe,ActionBar:Ue,AddonPanel:Ve,Badge:qe,Bar:Ge,Blockquote:Ye,Button:Ke,ClipboardCode:We,Code:je,DL:ze,Div:Ze,DocumentWrapper:$e,ErrorFormatter:Je,FlexBar:Qe,Form:d,H1:Xe,H2:et,H3:tt,H4:ot,H5:rt,H6:nt,HR:at,IconButton:st,IconButtonSkeleton:ct,Icons:it,Img:lt,LI:ut,Link:mt,ListItem:pt,Loader:dt,OL:St,P:gt,Placeholder:yt,Pre:ft,ResetWrapper:Tt,ScrollArea:bt,Separator:Ct,Spaced:Et,Span:ht,StorybookIcon:Ot,StorybookLogo:_t,Symbols:vt,SyntaxHighlighter:At,TT:xt,TabBar:Nt,TabButton:kt,TabWrapper:wt,Table:Mt,Tabs:Lt,TabsState:Rt,TooltipLinkList:Pt,TooltipMessage:Dt,TooltipNote:It,UL:Bt,WithTooltip:Ht,WithTooltipPure:Ft,Zoom:Ut,codeCommon:Vt,components:qt,createCopyToClipboardFunction:Gt,getStoryHref:Yt,icons:Kt,interleaveSeparators:Wt,nameSpaceClassNames:jt,resetComponents:zt,withReset:Zt}=__STORYBOOK_COMPONENTS__;var S=()=>document.querySelector("iframe").contentDocument;var g=async()=>{let n=document.querySelector("iframe");if(!n)throw new Error("iframe not found");return await new Promise(i=>{n.addEventListener("load",i)}),n.contentDocument};var y="theme-switcher",E=["default","click","corp","mobile","site","intranet"],f=n=>new CustomEvent("theme-change",{bubbles:!0,detail:{theme:n}}),h=()=>{let[n,i]=m("default");u(()=>{let r=localStorage.getItem("selectedTheme"),a=f(r||"default");i(r||"default"),g().then(s=>{s.body.dispatchEvent(a),document.body.dispatchEvent(a)}).catch(s=>{console.error("Error:",s)})},[]);let T=r=>{let a=r.target.value,s=f(a);i(a),document.body.dispatchEvent(s),S().body.dispatchEvent(s),localStorage.setItem("selectedTheme",a)};return c.createElement("div",{className:"tool"},c.createElement("span",{className:"label"},"\u0412\u044B\u0431\u043E\u0440 \u0442\u0435\u043C\u044B: "),c.createElement(d.Select,{id:"storybook-theme-switcher",size:1,onChange:T,className:"select",value:n},E.map(r=>c.createElement("option",{value:r,key:r},r))))};l.register(y,()=>{l.add(y,{type:p.TOOL,match:()=>!0,render:()=>c.createElement(h,null)})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
