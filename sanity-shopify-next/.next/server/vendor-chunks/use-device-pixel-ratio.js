/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-device-pixel-ratio";
exports.ids = ["vendor-chunks/use-device-pixel-ratio"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-device-pixel-ratio/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/use-device-pixel-ratio/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n/**\r\n * Get the device pixel ratio, potentially rounded and capped.\r\n * Will emit new values if it changes.\r\n *\r\n * @param options\r\n * @returns The current device pixel ratio, or the default if none can be resolved\r\n */\n\nfunction useDevicePixelRatio(options) {\n  const dpr = getDevicePixelRatio(options);\n  const [currentDpr, setCurrentDpr] = react.useState(dpr);\n  const {\n    defaultDpr,\n    maxDpr,\n    round\n  } = options || {};\n  react.useEffect(() => {\n    const canListen = typeof window !== 'undefined' && 'matchMedia' in window;\n\n    if (!canListen) {\n      return;\n    }\n\n    const updateDpr = () => setCurrentDpr(getDevicePixelRatio({\n      defaultDpr,\n      maxDpr,\n      round\n    }));\n\n    const mediaMatcher = window.matchMedia(`screen and (resolution: ${currentDpr}dppx)`); // Safari 13.1 does not have `addEventListener`, but does have `addListener`\n\n    if (mediaMatcher.addEventListener) {\n      mediaMatcher.addEventListener('change', updateDpr);\n    } else {\n      mediaMatcher.addListener(updateDpr);\n    }\n\n    return () => {\n      if (mediaMatcher.removeEventListener) {\n        mediaMatcher.removeEventListener('change', updateDpr);\n      } else {\n        mediaMatcher.removeListener(updateDpr);\n      }\n    };\n  }, [currentDpr, defaultDpr, maxDpr, round]);\n  return currentDpr;\n}\n/**\r\n * Returns the current device pixel ratio (DPR) given the passed options\r\n *\r\n * @param options\r\n * @returns current device pixel ratio\r\n */\n\nfunction getDevicePixelRatio(options) {\n  const {\n    defaultDpr = 1,\n    maxDpr = 3,\n    round = true\n  } = options || {};\n  const hasDprProp = typeof window !== 'undefined' && typeof window.devicePixelRatio === 'number';\n  const dpr = hasDprProp ? window.devicePixelRatio : defaultDpr;\n  const rounded = Math.min(Math.max(1, round ? Math.floor(dpr) : dpr), maxDpr);\n  return rounded;\n}\n\nexports.getDevicePixelRatio = getDevicePixelRatio;\nexports.useDevicePixelRatio = useDevicePixelRatio;\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWRldmljZS1waXhlbC1yYXRpby9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLFlBQVksbUJBQU8sQ0FBQyx3R0FBTzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHNFQUFzRSxXQUFXLFNBQVM7O0FBRTFGO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3VzZS1kZXZpY2UtcGl4ZWwtcmF0aW8vZGlzdC9pbmRleC5qcz81ODk0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxyXG4gKiBHZXQgdGhlIGRldmljZSBwaXhlbCByYXRpbywgcG90ZW50aWFsbHkgcm91bmRlZCBhbmQgY2FwcGVkLlxyXG4gKiBXaWxsIGVtaXQgbmV3IHZhbHVlcyBpZiBpdCBjaGFuZ2VzLlxyXG4gKlxyXG4gKiBAcGFyYW0gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyBUaGUgY3VycmVudCBkZXZpY2UgcGl4ZWwgcmF0aW8sIG9yIHRoZSBkZWZhdWx0IGlmIG5vbmUgY2FuIGJlIHJlc29sdmVkXHJcbiAqL1xuXG5mdW5jdGlvbiB1c2VEZXZpY2VQaXhlbFJhdGlvKG9wdGlvbnMpIHtcbiAgY29uc3QgZHByID0gZ2V0RGV2aWNlUGl4ZWxSYXRpbyhvcHRpb25zKTtcbiAgY29uc3QgW2N1cnJlbnREcHIsIHNldEN1cnJlbnREcHJdID0gcmVhY3QudXNlU3RhdGUoZHByKTtcbiAgY29uc3Qge1xuICAgIGRlZmF1bHREcHIsXG4gICAgbWF4RHByLFxuICAgIHJvdW5kXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICByZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbkxpc3RlbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdtYXRjaE1lZGlhJyBpbiB3aW5kb3c7XG5cbiAgICBpZiAoIWNhbkxpc3Rlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZURwciA9ICgpID0+IHNldEN1cnJlbnREcHIoZ2V0RGV2aWNlUGl4ZWxSYXRpbyh7XG4gICAgICBkZWZhdWx0RHByLFxuICAgICAgbWF4RHByLFxuICAgICAgcm91bmRcbiAgICB9KSk7XG5cbiAgICBjb25zdCBtZWRpYU1hdGNoZXIgPSB3aW5kb3cubWF0Y2hNZWRpYShgc2NyZWVuIGFuZCAocmVzb2x1dGlvbjogJHtjdXJyZW50RHByfWRwcHgpYCk7IC8vIFNhZmFyaSAxMy4xIGRvZXMgbm90IGhhdmUgYGFkZEV2ZW50TGlzdGVuZXJgLCBidXQgZG9lcyBoYXZlIGBhZGRMaXN0ZW5lcmBcblxuICAgIGlmIChtZWRpYU1hdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgbWVkaWFNYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZURwcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lZGlhTWF0Y2hlci5hZGRMaXN0ZW5lcih1cGRhdGVEcHIpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAobWVkaWFNYXRjaGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgbWVkaWFNYXRjaGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZURwcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYU1hdGNoZXIucmVtb3ZlTGlzdGVuZXIodXBkYXRlRHByKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbY3VycmVudERwciwgZGVmYXVsdERwciwgbWF4RHByLCByb3VuZF0pO1xuICByZXR1cm4gY3VycmVudERwcjtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IGRldmljZSBwaXhlbCByYXRpbyAoRFBSKSBnaXZlbiB0aGUgcGFzc2VkIG9wdGlvbnNcclxuICpcclxuICogQHBhcmFtIG9wdGlvbnNcclxuICogQHJldHVybnMgY3VycmVudCBkZXZpY2UgcGl4ZWwgcmF0aW9cclxuICovXG5cbmZ1bmN0aW9uIGdldERldmljZVBpeGVsUmF0aW8ob3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZGVmYXVsdERwciA9IDEsXG4gICAgbWF4RHByID0gMyxcbiAgICByb3VuZCA9IHRydWVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IGhhc0RwclByb3AgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRldmljZVBpeGVsUmF0aW8gPT09ICdudW1iZXInO1xuICBjb25zdCBkcHIgPSBoYXNEcHJQcm9wID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiBkZWZhdWx0RHByO1xuICBjb25zdCByb3VuZGVkID0gTWF0aC5taW4oTWF0aC5tYXgoMSwgcm91bmQgPyBNYXRoLmZsb29yKGRwcikgOiBkcHIpLCBtYXhEcHIpO1xuICByZXR1cm4gcm91bmRlZDtcbn1cblxuZXhwb3J0cy5nZXREZXZpY2VQaXhlbFJhdGlvID0gZ2V0RGV2aWNlUGl4ZWxSYXRpbztcbmV4cG9ydHMudXNlRGV2aWNlUGl4ZWxSYXRpbyA9IHVzZURldmljZVBpeGVsUmF0aW87XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-device-pixel-ratio/dist/index.js\n");

/***/ })

};
;