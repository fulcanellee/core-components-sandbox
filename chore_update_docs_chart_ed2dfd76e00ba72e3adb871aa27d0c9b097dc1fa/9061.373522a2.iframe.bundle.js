"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[9061],{"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/simplebar/src/simplebar.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return SimpleBar}});var lodash_throttle=__webpack_require__("./node_modules/lodash.throttle/index.js"),lodash_throttle_default=__webpack_require__.n(lodash_throttle),lodash_debounce=__webpack_require__("./node_modules/lodash.debounce/index.js"),lodash_debounce_default=__webpack_require__.n(lodash_debounce),lodash_memoize=__webpack_require__("./node_modules/lodash.memoize/index.js"),lodash_memoize_default=__webpack_require__.n(lodash_memoize),resize_observer=__webpack_require__("./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js"),can_use_dom=__webpack_require__("./node_modules/can-use-dom/index.js"),can_use_dom_default=__webpack_require__.n(can_use_dom);function getElementWindow(element){return element&&element.ownerDocument&&element.ownerDocument.defaultView?element.ownerDocument.defaultView:window}function getElementDocument(element){return element&&element.ownerDocument?element.ownerDocument:document}let cachedScrollbarWidth=null,cachedDevicePixelRatio=null;function scrollbarWidth(el){if(null===cachedScrollbarWidth){const document=getElementDocument(el);if(void 0===document)return cachedScrollbarWidth=0,cachedScrollbarWidth;const body=document.body,box=document.createElement("div");box.classList.add("simplebar-hide-scrollbar"),body.appendChild(box);const width=box.getBoundingClientRect().right;body.removeChild(box),cachedScrollbarWidth=width}return cachedScrollbarWidth}can_use_dom_default()&&window.addEventListener("resize",(()=>{cachedDevicePixelRatio!==window.devicePixelRatio&&(cachedDevicePixelRatio=window.devicePixelRatio,cachedScrollbarWidth=null)}));class SimpleBar{constructor(element,options){this.el=element,this.minScrollbarWidth=20,this.options={...SimpleBar.defaultOptions,...options},this.classNames={...SimpleBar.defaultOptions.classNames,...this.options.classNames},this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,SimpleBar.instances.has(this.el)||(this.recalculate=lodash_throttle_default()(this.recalculate.bind(this),64),this.onMouseMove=lodash_throttle_default()(this.onMouseMove.bind(this),64),this.hideScrollbars=lodash_debounce_default()(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=lodash_debounce_default()(this.onWindowResize.bind(this),64,{leading:!0}),SimpleBar.getRtlHelpers=lodash_memoize_default()(SimpleBar.getRtlHelpers),this.init())}static getRtlHelpers(){const dummyDiv=document.createElement("div");dummyDiv.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';const scrollbarDummyEl=dummyDiv.firstElementChild;document.body.appendChild(scrollbarDummyEl);const dummyContainerChild=scrollbarDummyEl.firstElementChild;scrollbarDummyEl.scrollLeft=0;const dummyContainerOffset=SimpleBar.getOffset(scrollbarDummyEl),dummyContainerChildOffset=SimpleBar.getOffset(dummyContainerChild);scrollbarDummyEl.scrollLeft=999;const dummyContainerScrollOffsetAfterScroll=SimpleBar.getOffset(dummyContainerChild);return{isRtlScrollingInverted:dummyContainerOffset.left!==dummyContainerChildOffset.left&&dummyContainerChildOffset.left-dummyContainerScrollOffsetAfterScroll.left!=0,isRtlScrollbarInverted:dummyContainerOffset.left!==dummyContainerChildOffset.left}}static defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3};static getOffset(el){const rect=el.getBoundingClientRect(),elDocument=getElementDocument(el),elWindow=getElementWindow(el);return{top:rect.top+(elWindow.pageYOffset||elDocument.documentElement.scrollTop),left:rect.left+(elWindow.pageXOffset||elDocument.documentElement.scrollLeft)}}static instances=new WeakMap;init(){SimpleBar.instances.set(this.el,this),can_use_dom_default()&&(this.initDOM(),this.setAccessibilityAttributes(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())}initDOM(){if(Array.prototype.filter.call(this.el.children,(child=>child.classList.contains(this.classNames.wrapper))).length)this.wrapperEl=this.el.querySelector(`.${this.classNames.wrapper}`),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(`.${this.classNames.contentWrapper}`),this.contentEl=this.options.contentNode||this.el.querySelector(`.${this.classNames.contentEl}`),this.offsetEl=this.el.querySelector(`.${this.classNames.offset}`),this.maskEl=this.el.querySelector(`.${this.classNames.mask}`),this.placeholderEl=this.findChild(this.wrapperEl,`.${this.classNames.placeholder}`),this.heightAutoObserverWrapperEl=this.el.querySelector(`.${this.classNames.heightAutoObserverWrapperEl}`),this.heightAutoObserverEl=this.el.querySelector(`.${this.classNames.heightAutoObserverEl}`),this.axis.x.track.el=this.findChild(this.el,`.${this.classNames.track}.${this.classNames.horizontal}`),this.axis.y.track.el=this.findChild(this.el,`.${this.classNames.track}.${this.classNames.vertical}`);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){const track=document.createElement("div"),scrollbar=document.createElement("div");track.classList.add(this.classNames.track),scrollbar.classList.add(this.classNames.scrollbar),track.appendChild(scrollbar),this.axis.x.track.el=track.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=track.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector(`.${this.classNames.scrollbar}`),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector(`.${this.classNames.scrollbar}`),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")}setAccessibilityAttributes(){const ariaLabel=this.options.ariaLabel||"scrollable content";this.contentWrapperEl.setAttribute("tabindex","0"),this.contentWrapperEl.setAttribute("role","region"),this.contentWrapperEl.setAttribute("aria-label",ariaLabel)}initListeners(){const elWindow=getElementWindow(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((e=>{this.el.addEventListener(e,this.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((e=>{this.el.addEventListener(e,this.onPointerEvent,{capture:!0,passive:!0})})),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),elWindow.addEventListener("resize",this.onWindowResize);let resizeObserverStarted=!1;const resizeObserver=elWindow.ResizeObserver||resize_observer.do;this.resizeObserver=new resizeObserver((()=>{resizeObserverStarted&&this.recalculate()})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),elWindow.requestAnimationFrame((()=>{resizeObserverStarted=!0})),this.mutationObserver=new elWindow.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}recalculate(){const elWindow=getElementWindow(this.el);this.elStyles=elWindow.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;const isHeightAuto=this.heightAutoObserverEl.offsetHeight<=1,isWidthAuto=this.heightAutoObserverEl.offsetWidth<=1,contentElOffsetWidth=this.contentEl.offsetWidth,contentWrapperElOffsetWidth=this.contentWrapperEl.offsetWidth,elOverflowX=this.elStyles.overflowX,elOverflowY=this.elStyles.overflowY;this.contentEl.style.padding=`${this.elStyles.paddingTop} ${this.elStyles.paddingRight} ${this.elStyles.paddingBottom} ${this.elStyles.paddingLeft}`,this.wrapperEl.style.margin=`-${this.elStyles.paddingTop} -${this.elStyles.paddingRight} -${this.elStyles.paddingBottom} -${this.elStyles.paddingLeft}`;const contentElScrollHeight=this.contentEl.scrollHeight,contentElScrollWidth=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=isHeightAuto?"auto":"100%",this.placeholderEl.style.width=isWidthAuto?`${contentElOffsetWidth}px`:"auto",this.placeholderEl.style.height=`${contentElScrollHeight}px`;const contentWrapperElOffsetHeight=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=contentElScrollWidth>contentElOffsetWidth,this.axis.y.isOverflowing=contentElScrollHeight>contentWrapperElOffsetHeight,this.axis.x.isOverflowing="hidden"!==elOverflowX&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==elOverflowY&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();let offsetForXScrollbar=this.axis.x.isOverflowing?this.scrollbarWidth:0,offsetForYScrollbar=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&contentElScrollWidth>contentWrapperElOffsetWidth-offsetForYScrollbar,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&contentElScrollHeight>contentWrapperElOffsetHeight-offsetForXScrollbar,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=`${this.axis.x.scrollbar.size}px`,this.axis.y.scrollbar.el.style.height=`${this.axis.y.scrollbar.size}px`,this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}getScrollbarSize(axis="y"){if(!this.axis[axis].isOverflowing)return 0;const contentSize=this.contentEl[this.axis[axis].scrollSizeAttr],trackSize=this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];let scrollbarSize,scrollbarRatio=trackSize/contentSize;return scrollbarSize=Math.max(~~(scrollbarRatio*trackSize),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(scrollbarSize=Math.min(scrollbarSize,this.options.scrollbarMaxSize)),scrollbarSize}positionScrollbar(axis="y"){if(!this.axis[axis].isOverflowing)return;const contentSize=this.contentWrapperEl[this.axis[axis].scrollSizeAttr],trackSize=this.axis[axis].track.el[this.axis[axis].offsetSizeAttr],hostSize=parseInt(this.elStyles[this.axis[axis].sizeAttr],10),scrollbar=this.axis[axis].scrollbar;let scrollOffset=this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];scrollOffset="x"===axis&&this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollingInverted?-scrollOffset:scrollOffset;let scrollPourcent=scrollOffset/(contentSize-hostSize),handleOffset=~~((trackSize-scrollbar.size)*scrollPourcent);handleOffset="x"===axis&&this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollbarInverted?handleOffset+(trackSize-scrollbar.size):handleOffset,scrollbar.el.style.transform="x"===axis?`translate3d(${handleOffset}px, 0, 0)`:`translate3d(0, ${handleOffset}px, 0)`}toggleTrackVisibility(axis="y"){const track=this.axis[axis].track.el,scrollbar=this.axis[axis].scrollbar.el;this.axis[axis].isOverflowing||this.axis[axis].forceVisible?(track.style.visibility="visible",this.contentWrapperEl.style[this.axis[axis].overflowAttr]="scroll"):(track.style.visibility="hidden",this.contentWrapperEl.style[this.axis[axis].overflowAttr]="hidden"),this.axis[axis].isOverflowing?scrollbar.style.display="block":scrollbar.style.display="none"}hideNativeScrollbar(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?`-${this.scrollbarWidth}px`:0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?`-${this.scrollbarWidth}px`:0}onScroll=()=>{const elWindow=getElementWindow(this.el);this.scrollXTicking||(elWindow.requestAnimationFrame(this.scrollX),this.scrollXTicking=!0),this.scrollYTicking||(elWindow.requestAnimationFrame(this.scrollY),this.scrollYTicking=!0)};scrollX=()=>{this.axis.x.isOverflowing&&(this.showScrollbar("x"),this.positionScrollbar("x")),this.scrollXTicking=!1};scrollY=()=>{this.axis.y.isOverflowing&&(this.showScrollbar("y"),this.positionScrollbar("y")),this.scrollYTicking=!1};onMouseEnter=()=>{this.showScrollbar("x"),this.showScrollbar("y")};onMouseMove=e=>{this.mouseX=e.clientX,this.mouseY=e.clientY,(this.axis.x.isOverflowing||this.axis.x.forceVisible)&&this.onMouseMoveForAxis("x"),(this.axis.y.isOverflowing||this.axis.y.forceVisible)&&this.onMouseMoveForAxis("y")};onMouseMoveForAxis(axis="y"){this.axis[axis].track.rect=this.axis[axis].track.el.getBoundingClientRect(),this.axis[axis].scrollbar.rect=this.axis[axis].scrollbar.el.getBoundingClientRect();this.isWithinBounds(this.axis[axis].scrollbar.rect)?this.axis[axis].scrollbar.el.classList.add(this.classNames.hover):this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[axis].track.rect)?(this.showScrollbar(axis),this.axis[axis].track.el.classList.add(this.classNames.hover)):this.axis[axis].track.el.classList.remove(this.classNames.hover)}onMouseLeave=()=>{this.onMouseMove.cancel(),(this.axis.x.isOverflowing||this.axis.x.forceVisible)&&this.onMouseLeaveForAxis("x"),(this.axis.y.isOverflowing||this.axis.y.forceVisible)&&this.onMouseLeaveForAxis("y"),this.mouseX=-1,this.mouseY=-1};onMouseLeaveForAxis(axis="y"){this.axis[axis].track.el.classList.remove(this.classNames.hover),this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover)}onWindowResize=()=>{this.scrollbarWidth=this.getScrollbarWidth(),this.hideNativeScrollbar()};showScrollbar(axis="y"){let scrollbar=this.axis[axis].scrollbar.el;this.axis[axis].isVisible||(scrollbar.classList.add(this.classNames.visible),this.axis[axis].isVisible=!0),this.options.autoHide&&this.hideScrollbars()}hideScrollbars=()=>{this.axis.x.track.rect=this.axis.x.track.el.getBoundingClientRect(),this.axis.y.track.rect=this.axis.y.track.el.getBoundingClientRect(),this.isWithinBounds(this.axis.y.track.rect)||(this.axis.y.scrollbar.el.classList.remove(this.classNames.visible),this.axis.y.isVisible=!1),this.isWithinBounds(this.axis.x.track.rect)||(this.axis.x.scrollbar.el.classList.remove(this.classNames.visible),this.axis.x.isVisible=!1)};onPointerEvent=e=>{let isWithinTrackXBounds,isWithinTrackYBounds;this.axis.x.track.rect=this.axis.x.track.el.getBoundingClientRect(),this.axis.y.track.rect=this.axis.y.track.el.getBoundingClientRect(),(this.axis.x.isOverflowing||this.axis.x.forceVisible)&&(isWithinTrackXBounds=this.isWithinBounds(this.axis.x.track.rect)),(this.axis.y.isOverflowing||this.axis.y.forceVisible)&&(isWithinTrackYBounds=this.isWithinBounds(this.axis.y.track.rect)),(isWithinTrackXBounds||isWithinTrackYBounds)&&(e.preventDefault(),e.stopPropagation(),"mousedown"===e.type&&(isWithinTrackXBounds&&(this.axis.x.scrollbar.rect=this.axis.x.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis.x.scrollbar.rect)?this.onDragStart(e,"x"):this.onTrackClick(e,"x")),isWithinTrackYBounds&&(this.axis.y.scrollbar.rect=this.axis.y.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis.y.scrollbar.rect)?this.onDragStart(e,"y"):this.onTrackClick(e,"y"))))};onDragStart(e,axis="y"){const elDocument=getElementDocument(this.el),elWindow=getElementWindow(this.el),scrollbar=this.axis[axis].scrollbar,eventOffset="y"===axis?e.pageY:e.pageX;this.axis[axis].dragOffset=eventOffset-scrollbar.rect[this.axis[axis].offsetAttr],this.draggedAxis=axis,this.el.classList.add(this.classNames.dragging),elDocument.addEventListener("mousemove",this.drag,!0),elDocument.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(elDocument.addEventListener("click",this.preventClick,!0),elDocument.addEventListener("dblclick",this.preventClick,!0)):(elWindow.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)}drag=e=>{let eventOffset;const track=this.axis[this.draggedAxis].track,trackSize=track.rect[this.axis[this.draggedAxis].sizeAttr],scrollbar=this.axis[this.draggedAxis].scrollbar,contentSize=this.contentWrapperEl[this.axis[this.draggedAxis].scrollSizeAttr],hostSize=parseInt(this.elStyles[this.axis[this.draggedAxis].sizeAttr],10);e.preventDefault(),e.stopPropagation(),eventOffset="y"===this.draggedAxis?e.pageY:e.pageX;let scrollPos=(eventOffset-track.rect[this.axis[this.draggedAxis].offsetAttr]-this.axis[this.draggedAxis].dragOffset)/(trackSize-scrollbar.size)*(contentSize-hostSize);"x"===this.draggedAxis&&(scrollPos=this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollbarInverted?scrollPos-(trackSize+scrollbar.size):scrollPos,scrollPos=this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollingInverted?-scrollPos:scrollPos),this.contentWrapperEl[this.axis[this.draggedAxis].scrollOffsetAttr]=scrollPos};onEndDrag=e=>{const elDocument=getElementDocument(this.el),elWindow=getElementWindow(this.el);e.preventDefault(),e.stopPropagation(),this.el.classList.remove(this.classNames.dragging),elDocument.removeEventListener("mousemove",this.drag,!0),elDocument.removeEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId=elWindow.setTimeout((()=>{elDocument.removeEventListener("click",this.preventClick,!0),elDocument.removeEventListener("dblclick",this.preventClick,!0),this.removePreventClickId=null}))};preventClick=e=>{e.preventDefault(),e.stopPropagation()};onTrackClick(e,axis="y"){if(!this.options.clickOnTrack)return;const elWindow=getElementWindow(this.el);this.axis[axis].scrollbar.rect=this.axis[axis].scrollbar.el.getBoundingClientRect();const scrollbarOffset=this.axis[axis].scrollbar.rect[this.axis[axis].offsetAttr],hostSize=parseInt(this.elStyles[this.axis[axis].sizeAttr],10);let scrolled=this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];const dir=("y"===axis?this.mouseY-scrollbarOffset:this.mouseX-scrollbarOffset)<0?-1:1,scrollSize=-1===dir?scrolled-hostSize:scrolled+hostSize,scrollTo=()=>{-1===dir?scrolled>scrollSize&&(scrolled-=this.options.clickOnTrackSpeed,this.contentWrapperEl.scrollTo({[this.axis[axis].offsetAttr]:scrolled}),elWindow.requestAnimationFrame(scrollTo)):scrolled<scrollSize&&(scrolled+=this.options.clickOnTrackSpeed,this.contentWrapperEl.scrollTo({[this.axis[axis].offsetAttr]:scrolled}),elWindow.requestAnimationFrame(scrollTo))};scrollTo()}getContentElement(){return this.contentEl}getScrollElement(){return this.contentWrapperEl}getScrollbarWidth(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:scrollbarWidth(this.el)}catch(e){return scrollbarWidth(this.el)}}removeListeners(){const elWindow=getElementWindow(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((e=>{this.el.removeEventListener(e,this.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((e=>{this.el.removeEventListener(e,this.onPointerEvent,{capture:!0,passive:!0})})),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),elWindow.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()}unMount(){this.removeListeners(),SimpleBar.instances.delete(this.el)}isWithinBounds(bbox){return this.mouseX>=bbox.left&&this.mouseX<=bbox.left+bbox.width&&this.mouseY>=bbox.top&&this.mouseY<=bbox.top+bbox.height}findChild(el,query){const matches=el.matches||el.webkitMatchesSelector||el.mozMatchesSelector||el.msMatchesSelector;return Array.prototype.filter.call(el.children,(child=>matches.call(child,query)))[0]}}}}]);