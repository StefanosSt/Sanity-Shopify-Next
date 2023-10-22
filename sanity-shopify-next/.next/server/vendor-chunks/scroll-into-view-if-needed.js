"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/scroll-into-view-if-needed";
exports.ids = ["vendor-chunks/scroll-into-view-if-needed"];
exports.modules = {

/***/ "(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.cjs":
/*!****************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/dist/index.cjs ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var e=__webpack_require__(/*! compute-scroll-into-view */ \"(ssr)/./node_modules/compute-scroll-into-view/dist/index.cjs\");const o=e=>!1===e?{block:\"end\",inline:\"nearest\"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:\"start\",inline:\"nearest\"};module.exports=function(t,n){if(!t.isConnected||!(e=>{let o=e;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(t))return;if((e=>\"object\"==typeof e&&\"function\"==typeof e.behavior)(n))return n.behavior(e.compute(t,n));const r=\"boolean\"==typeof n||null==n?void 0:n.behavior;for(const{el:i,top:c,left:l}of e.compute(t,o(n)))i.scroll({top:c,left:l,behavior:r})};//# sourceMappingURL=index.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5janMiLCJtYXBwaW5ncyI6IkFBQWEsTUFBTSxtQkFBTyxDQUFDLDhGQUEwQixFQUFFLG1CQUFtQiw2QkFBNkIscURBQXFELGdDQUFnQyw2QkFBNkIseUJBQXlCLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRSxvQ0FBb0Msb0VBQW9FLFNBQVMsWUFBWSwrRkFBK0YsdURBQXVELFVBQVUsa0JBQWtCLCtCQUErQix3QkFBd0IsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5janM/N2QxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjt2YXIgZT1yZXF1aXJlKFwiY29tcHV0ZS1zY3JvbGwtaW50by12aWV3XCIpO2NvbnN0IG89ZT0+ITE9PT1lP3tibG9jazpcImVuZFwiLGlubGluZTpcIm5lYXJlc3RcIn06KGU9PmU9PT1PYmplY3QoZSkmJjAhPT1PYmplY3Qua2V5cyhlKS5sZW5ndGgpKGUpP2U6e2Jsb2NrOlwic3RhcnRcIixpbmxpbmU6XCJuZWFyZXN0XCJ9O21vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQsbil7aWYoIXQuaXNDb25uZWN0ZWR8fCEoZT0+e2xldCBvPWU7Zm9yKDtvJiZvLnBhcmVudE5vZGU7KXtpZihvLnBhcmVudE5vZGU9PT1kb2N1bWVudClyZXR1cm4hMDtvPW8ucGFyZW50Tm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/by5wYXJlbnROb2RlLmhvc3Q6by5wYXJlbnROb2RlfXJldHVybiExfSkodCkpcmV0dXJuO2lmKChlPT5cIm9iamVjdFwiPT10eXBlb2YgZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5iZWhhdmlvcikobikpcmV0dXJuIG4uYmVoYXZpb3IoZS5jb21wdXRlKHQsbikpO2NvbnN0IHI9XCJib29sZWFuXCI9PXR5cGVvZiBufHxudWxsPT1uP3ZvaWQgMDpuLmJlaGF2aW9yO2Zvcihjb25zdHtlbDppLHRvcDpjLGxlZnQ6bH1vZiBlLmNvbXB1dGUodCxvKG4pKSlpLnNjcm9sbCh7dG9wOmMsbGVmdDpsLGJlaGF2aW9yOnJ9KX07Ly8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguY2pzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.cjs\n");

/***/ })

};
;