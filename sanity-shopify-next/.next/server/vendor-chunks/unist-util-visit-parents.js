/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit-parents";
exports.ids = ["vendor-chunks/unist-util-visit-parents"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-visit-parents/color.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/color.js ***!
  \********************************************************/
/***/ ((module) => {

eval("module.exports = color\nfunction color(d) {\n  return '\\u001B[33m' + d + '\\u001B[39m'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2NvbG9yLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcHJvamVjdC8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29sb3IuanM/ODY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGNvbG9yXG5mdW5jdGlvbiBjb2xvcihkKSB7XG4gIHJldHVybiAnXFx1MDAxQlszM20nICsgZCArICdcXHUwMDFCWzM5bSdcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/color.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = visitParents\n\nvar convert = __webpack_require__(/*! unist-util-is/convert */ \"(ssr)/./node_modules/unist-util-is/convert.js\")\nvar color = __webpack_require__(/*! ./color */ \"(ssr)/./node_modules/unist-util-visit-parents/color.js\")\n\nvar CONTINUE = true\nvar SKIP = 'skip'\nvar EXIT = false\n\nvisitParents.CONTINUE = CONTINUE\nvisitParents.SKIP = SKIP\nvisitParents.EXIT = EXIT\n\nfunction visitParents(tree, test, visitor, reverse) {\n  var step\n  var is\n\n  if (typeof test === 'function' && typeof visitor !== 'function') {\n    reverse = visitor\n    visitor = test\n    test = null\n  }\n\n  is = convert(test)\n  step = reverse ? -1 : 1\n\n  factory(tree, null, [])()\n\n  function factory(node, index, parents) {\n    var value = typeof node === 'object' && node !== null ? node : {}\n    var name\n\n    if (typeof value.type === 'string') {\n      name =\n        typeof value.tagName === 'string'\n          ? value.tagName\n          : typeof value.name === 'string'\n          ? value.name\n          : undefined\n\n      visit.displayName =\n        'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'\n    }\n\n    return visit\n\n    function visit() {\n      var grandparents = parents.concat(node)\n      var result = []\n      var subresult\n      var offset\n\n      if (!test || is(node, index, parents[parents.length - 1] || null)) {\n        result = toResult(visitor(node, parents))\n\n        if (result[0] === EXIT) {\n          return result\n        }\n      }\n\n      if (node.children && result[0] !== SKIP) {\n        offset = (reverse ? node.children.length : -1) + step\n\n        while (offset > -1 && offset < node.children.length) {\n          subresult = factory(node.children[offset], offset, grandparents)()\n\n          if (subresult[0] === EXIT) {\n            return subresult\n          }\n\n          offset =\n            typeof subresult[1] === 'number' ? subresult[1] : offset + step\n        }\n      }\n\n      return result\n    }\n  }\n}\n\nfunction toResult(value) {\n  if (value !== null && typeof value === 'object' && 'length' in value) {\n    return value\n  }\n\n  if (typeof value === 'number') {\n    return [CONTINUE, value]\n  }\n\n  return [value]\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyw0RUFBdUI7QUFDN0MsWUFBWSxtQkFBTyxDQUFDLHVFQUFTOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXByb2plY3QvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzPzVmM2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRQYXJlbnRzXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKVxuXG52YXIgQ09OVElOVUUgPSB0cnVlXG52YXIgU0tJUCA9ICdza2lwJ1xudmFyIEVYSVQgPSBmYWxzZVxuXG52aXNpdFBhcmVudHMuQ09OVElOVUUgPSBDT05USU5VRVxudmlzaXRQYXJlbnRzLlNLSVAgPSBTS0lQXG52aXNpdFBhcmVudHMuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgdmFyIHN0ZXBcbiAgdmFyIGlzXG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICB2aXNpdG9yID0gdGVzdFxuICAgIHRlc3QgPSBudWxsXG4gIH1cblxuICBpcyA9IGNvbnZlcnQodGVzdClcbiAgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcblxuICBmYWN0b3J5KHRyZWUsIG51bGwsIFtdKSgpXG5cbiAgZnVuY3Rpb24gZmFjdG9yeShub2RlLCBpbmRleCwgcGFyZW50cykge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiBub2RlICE9PSBudWxsID8gbm9kZSA6IHt9XG4gICAgdmFyIG5hbWVcblxuICAgIGlmICh0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPVxuICAgICAgICB0eXBlb2YgdmFsdWUudGFnTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHZhbHVlLnRhZ05hbWVcbiAgICAgICAgICA6IHR5cGVvZiB2YWx1ZS5uYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gdmFsdWUubmFtZVxuICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgIHZpc2l0LmRpc3BsYXlOYW1lID1cbiAgICAgICAgJ25vZGUgKCcgKyBjb2xvcih2YWx1ZS50eXBlICsgKG5hbWUgPyAnPCcgKyBuYW1lICsgJz4nIDogJycpKSArICcpJ1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdFxuXG4gICAgZnVuY3Rpb24gdmlzaXQoKSB7XG4gICAgICB2YXIgZ3JhbmRwYXJlbnRzID0gcGFyZW50cy5jb25jYXQobm9kZSlcbiAgICAgIHZhciByZXN1bHQgPSBbXVxuICAgICAgdmFyIHN1YnJlc3VsdFxuICAgICAgdmFyIG9mZnNldFxuXG4gICAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgICByZXN1bHQgPSB0b1Jlc3VsdCh2aXNpdG9yKG5vZGUsIHBhcmVudHMpKVxuXG4gICAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICAgIG9mZnNldCA9IChyZXZlcnNlID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggOiAtMSkgKyBzdGVwXG5cbiAgICAgICAgd2hpbGUgKG9mZnNldCA+IC0xICYmIG9mZnNldCA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgc3VicmVzdWx0ID0gZmFjdG9yeShub2RlLmNoaWxkcmVuW29mZnNldF0sIG9mZnNldCwgZ3JhbmRwYXJlbnRzKSgpXG5cbiAgICAgICAgICBpZiAoc3VicmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VicmVzdWx0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2Zmc2V0ID1cbiAgICAgICAgICAgIHR5cGVvZiBzdWJyZXN1bHRbMV0gPT09ICdudW1iZXInID8gc3VicmVzdWx0WzFdIDogb2Zmc2V0ICsgc3RlcFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/index.js\n");

/***/ })

};
;