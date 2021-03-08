/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ingrediente.js":
/*!*******************************!*\
  !*** ./src/js/ingrediente.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ingrediente\": () => (/* binding */ ingrediente)\n/* harmony export */ });\nclass ingrediente {\r\n    constructor(nome, liquido, densidade){\r\n        if (typeof liquido !== \"boolean\") {\r\n            throw new Error('liquido must be true or false')\r\n        } \r\n        this.nome = nome;\r\n        this.liquido = liquido;\r\n        this.densidade = densidade; //em g/ml\r\n    }\r\n}\n\n//# sourceURL=webpack://coversor-medidas-culinarias/./src/js/ingrediente.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ingrediente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingrediente.js */ \"./src/js/ingrediente.js\");\n/* harmony import */ var _medida_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medida.js */ \"./src/js/medida.js\");\n\r\n\r\n\r\nconst ingredientes = new Array(); \r\nconst medidas = new Array();\r\n\r\ningredientes.push(new _ingrediente_js__WEBPACK_IMPORTED_MODULE_0__.ingrediente('arroz', false, 0.8));\r\ningredientes.push(new _ingrediente_js__WEBPACK_IMPORTED_MODULE_0__.ingrediente('farinha', false, 1));\r\ningredientes.push(new _ingrediente_js__WEBPACK_IMPORTED_MODULE_0__.ingrediente('açucar', false, 0.8))\r\n\r\nmedidas.push(new _medida_js__WEBPACK_IMPORTED_MODULE_1__.medida('Xícara', true, 240))\r\nmedidas.push(new _medida_js__WEBPACK_IMPORTED_MODULE_1__.medida('Colher de sopa', true, 15))\r\nmedidas.push(new _medida_js__WEBPACK_IMPORTED_MODULE_1__.medida('Colher de Chá', true, 5))\r\nmedidas.push(new _medida_js__WEBPACK_IMPORTED_MODULE_1__.medida('gramas', false))\r\n\r\nconst selectEntrada = document.querySelector('[data-seletor-entrada]');\r\nconst selectSaida = document.querySelector('[data-seletor-saida]');\r\nconst selectIngrediente = document.querySelector('[data-seletor-ingrediente]');\r\n\r\n\r\ningredientes.forEach(function(ingrediente){\r\n    let option = document.createElement(\"option\"); \r\n    option.text = ingrediente.nome;\r\n    selectIngrediente.add(option);\r\n});\r\n\r\n medidas.forEach(function(medida){\r\n     let optionEntrada = document.createElement(\"option\"); \r\n     let optionSaida = document.createElement(\"option\"); \r\n     optionEntrada.text = medida.nome;\r\n     optionSaida.text = medida.nome;\r\n     selectEntrada.add(optionEntrada);\r\n     selectSaida.add(optionSaida);\r\n})\r\n\r\nlet densidadeIngrediente, conversorEntrada, entradaEhVolume, conversorSaida, saidaEhVolume;\r\n\r\nselectIngrediente.onchange = capturaIngrediente;\r\nselectEntrada.onchange = capturaEntrada;\r\nselectSaida.onchange = capturaSaida;\r\n\r\nfunction capturaEntrada() {\r\n    let medidaEntrada = selectEntrada.value;\r\n    medidas.forEach(function(medida){\r\n    if (medidaEntrada === medida.nome){\r\n        conversorEntrada = medida.conversor;\r\n        entradaEhVolume = medida.ehVolume;\r\n        }    \r\n    })\r\n}\r\n\r\nfunction capturaIngrediente() {\r\n    let ingredienteSelecionado = selectIngrediente.value; \r\n    ingredientes.forEach(function(ingrediente){\r\n        if (ingredienteSelecionado === ingrediente.nome){\r\n            densidadeIngrediente = ingrediente.densidade;\r\n            }    \r\n        })\r\n}\r\n\r\nfunction capturaSaida() {\r\n    let medidaSaida = selectSaida.value;\r\n    medidas.forEach(function(medida){\r\n        if (medidaSaida === medida.nome){\r\n            conversorSaida = medida.conversor;\r\n            saidaEhVolume = medida.ehVolume;\r\n            }    \r\n        })\r\n}\r\n\r\nconst inputEntrada = document.querySelector('#entrada > input');\r\nconst inputSaida = document.querySelector('#saida > input');\r\n\r\n//evento que chama a funcao para converter valores\r\ninputEntrada.addEventListener('input', function(){\r\n    const entrada = parseFloat(inputEntrada.value);\r\n    inputSaida.value = converte(entrada, conversorEntrada, conversorSaida, densidadeIngrediente);\r\n})\r\n\r\ndocument.addEventListener('change', function(e){\r\n        if(e.target.tagName==\"SELECT\"){\r\n            const entrada = parseFloat(inputEntrada.value);\r\n            inputSaida.value = converte(entrada, conversorEntrada, conversorSaida, densidadeIngrediente);\r\n        }\r\n    }\r\n)\r\n\r\n\r\n\r\nfunction converte(entrada, coEntrada, coSaida, densidade) {\r\n    if (entradaEhVolume === false & saidaEhVolume === true){\r\n        const volume = entrada / densidade;\r\n        const resultado = volume / coSaida;\r\n        return resultado.toFixed(1);        \r\n    } else if (entradaEhVolume === true & saidaEhVolume === false){\r\n        const volume = entrada * coEntrada;\r\n        const resultado = volume * densidade;\r\n        return resultado.toFixed(1);\r\n    } else if (entradaEhVolume === true & saidaEhVolume === true) {\r\n        const volume = entrada * coEntrada;\r\n        const resultado = volume / coSaida;\r\n        return resultado.toFixed(1);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://coversor-medidas-culinarias/./src/js/main.js?");

/***/ }),

/***/ "./src/js/medida.js":
/*!**************************!*\
  !*** ./src/js/medida.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"medida\": () => (/* binding */ medida)\n/* harmony export */ });\nclass medida {\r\n    constructor(nome, ehVolume, conversor) {\r\n        if (typeof ehVolume !== \"boolean\") {\r\n            throw new Error('ehVolume must be true or false')\r\n        } \r\n        this.nome = nome;\r\n        this.ehVolume = ehVolume;\r\n        if (ehVolume === true){ \r\n         this.conversor = conversor; //volume total do recipiente em ml\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://coversor-medidas-culinarias/./src/js/medida.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;