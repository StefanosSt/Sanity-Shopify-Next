/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hashlru";
exports.ids = ["vendor-chunks/hashlru"];
exports.modules = {

/***/ "(ssr)/./node_modules/hashlru/index.js":
/*!***************************************!*\
  !*** ./node_modules/hashlru/index.js ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = function (max) {\n\n  if (!max) throw Error('hashlru must have a max value, of type number, greater than 0')\n\n  var size = 0, cache = Object.create(null), _cache = Object.create(null)\n\n  function update (key, value) {\n    cache[key] = value\n    size ++\n    if(size >= max) {\n      size = 0\n      _cache = cache\n      cache = Object.create(null)\n    }\n  }\n\n  return {\n    has: function (key) {\n      return cache[key] !== undefined || _cache[key] !== undefined\n    },\n    remove: function (key) {\n      if(cache[key] !== undefined)\n        cache[key] = undefined\n      if(_cache[key] !== undefined)\n        _cache[key] = undefined\n    },\n    get: function (key) {\n      var v = cache[key]\n      if(v !== undefined) return v\n      if((v = _cache[key]) !== undefined) {\n        update(key, v)\n        return v\n      }\n    },\n    set: function (key, value) {\n      if(cache[key] !== undefined) cache[key] = value\n      else update(key, value)\n    },\n    clear: function () {\n      cache = Object.create(null)\n      _cache = Object.create(null)\n    }\n  }\n}\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzaGxydS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXByb2plY3QvLi9ub2RlX21vZHVsZXMvaGFzaGxydS9pbmRleC5qcz8wM2NiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1heCkge1xuXG4gIGlmICghbWF4KSB0aHJvdyBFcnJvcignaGFzaGxydSBtdXN0IGhhdmUgYSBtYXggdmFsdWUsIG9mIHR5cGUgbnVtYmVyLCBncmVhdGVyIHRoYW4gMCcpXG5cbiAgdmFyIHNpemUgPSAwLCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCksIF9jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBmdW5jdGlvbiB1cGRhdGUgKGtleSwgdmFsdWUpIHtcbiAgICBjYWNoZVtrZXldID0gdmFsdWVcbiAgICBzaXplICsrXG4gICAgaWYoc2l6ZSA+PSBtYXgpIHtcbiAgICAgIHNpemUgPSAwXG4gICAgICBfY2FjaGUgPSBjYWNoZVxuICAgICAgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYXM6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBjYWNoZVtrZXldICE9PSB1bmRlZmluZWQgfHwgX2NhY2hlW2tleV0gIT09IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZihjYWNoZVtrZXldICE9PSB1bmRlZmluZWQpXG4gICAgICAgIGNhY2hlW2tleV0gPSB1bmRlZmluZWRcbiAgICAgIGlmKF9jYWNoZVtrZXldICE9PSB1bmRlZmluZWQpXG4gICAgICAgIF9jYWNoZVtrZXldID0gdW5kZWZpbmVkXG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2ID0gY2FjaGVba2V5XVxuICAgICAgaWYodiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdlxuICAgICAgaWYoKHYgPSBfY2FjaGVba2V5XSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB1cGRhdGUoa2V5LCB2KVxuICAgICAgICByZXR1cm4gdlxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYoY2FjaGVba2V5XSAhPT0gdW5kZWZpbmVkKSBjYWNoZVtrZXldID0gdmFsdWVcbiAgICAgIGVsc2UgdXBkYXRlKGtleSwgdmFsdWUpXG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICBfY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hashlru/index.js\n");

/***/ })

};
;