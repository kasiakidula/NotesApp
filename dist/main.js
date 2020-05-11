/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style */ \"./src/css/style.css\");\n/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style__WEBPACK_IMPORTED_MODULE_0__);\n\nvar notesIdCounter = 0;\nvar notesArr = [];\ncheckLocalStorage();\neventLoad();\n\nfunction eventLoad() {\n  document.querySelector('form').addEventListener('submit', submitNote);\n  document.getElementById('board-notes').addEventListener('click', deleteOrEdit);\n}\n/* check localStorage after open app*/\n\n\nfunction checkLocalStorage() {\n  var oldNotesArr = localStorage.getItem('notesArr');\n\n  if (oldNotesArr !== null) {\n    notesArr = JSON.parse(oldNotesArr);\n\n    for (var i = 0; i < notesArr.length; i++) {\n      addNoteToHTML(notesArr[i]);\n    }\n\n    setNotesCounter();\n    localStorage.removeItem('notesArr');\n  } else {\n    showMessage();\n  }\n}\n\n;\n\nfunction setNotesCounter() {\n  notesIdCounter = notesArr[notesArr.length - 1]['noteId'] + 1; //console.log(notesIdCounter);\n}\n\nvar getData = function getData() {\n  var now = new Date();\n  return \"\".concat(now.getDate(), \".\").concat(now.getMonth() + 1, \".\").concat(now.getFullYear());\n};\n\nvar createNoteObject = function createNoteObject(noteTitle, noteText) {\n  var noteId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notesIdCounter;\n  var noteData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getData();\n  var note = {\n    noteId: \"\".concat(noteId),\n    noteTitle: \"\".concat(noteTitle),\n    noteText: \"\".concat(noteText),\n    noteData: \"\".concat(noteData)\n  };\n  return note;\n};\n\nvar isHTML = function isHTML(inputValue) {\n  var regex = /<[^>]*>/g;\n  return regex.test(inputValue);\n};\n\nfunction submitNote(event) {\n  event.preventDefault();\n  var noteTitleValue = document.querySelector('input');\n  var noteTextValue = document.querySelector('textarea');\n\n  if (noteTitleValue.value !== '' && noteTextValue.value != '') {\n    if (!isHTML(noteTitleValue.value) && !isHTML(noteTextValue.value)) {\n      var noteObject = createNoteObject(noteTitleValue.value, noteTextValue.value);\n      addNoteToHTML(noteObject);\n      addNoteToNotesArr(noteObject);\n      noteTitleValue.value = '';\n      noteTextValue.value = '';\n      notesIdCounter += 1;\n    } else {\n      alert('Change the content');\n    }\n  } else {\n    alert('Complete the fields');\n  }\n}\n\nfunction addNoteToHTML(noteObject) {\n  var boardNotes = document.getElementById('board-notes');\n  var div = document.createElement('div');\n  var noteId = noteObject.noteId,\n      noteTitle = noteObject.noteTitle,\n      noteText = noteObject.noteText,\n      noteData = noteObject.noteData;\n  div.classList.add('note');\n  div.innerHTML = \"<h3 class=\\\"note-title\\\">\".concat(noteTitle, \"</h3>\\n\\t\\t\\t\\t\\t<p class=\\\"data\\\">\").concat(noteData, \"</p>\\n\\t\\t\\t\\t\\t<p class=\\\"note-text\\\">\").concat(noteText, \"</p>\\n\\t\\t\\t\\t\\t<div id=\\\"\").concat(noteId, \"\\\" class=\\\"buttons\\\">\\n\\t\\t\\t\\t\\t\\t<button class=\\\"edit\\\">Edit</button><button class=\\\"delete\\\">Delete</button>\\n\\t\\t\\t\\t\\t</div>\");\n  boardNotes.appendChild(div);\n}\n\nfunction deleteOrEdit(event) {\n  if (event.target.className === 'edit') {\n    editNote(event);\n  } else if (event.target.className === 'delete') {\n    deleteNote(event);\n  }\n}\n\nfunction deleteNote(event) {\n  //remove note from site\n  var note = event.target.parentNode.parentNode;\n  var notesBoard = note.parentNode;\n  notesBoard.removeChild(note); //remove note from arr\n\n  var noteId = event.target.parentNode.id;\n  deleteNoteFromArr(noteId);\n}\n\nfunction editNote(event) {\n  var form = document.querySelector('form');\n  var note = event.target.parentNode.parentNode; //note title\n\n  form[0].value = note.childNodes[0].innerText; //innerHTML\n  //note text\n\n  form[1].value = note.childNodes[4].innerText; //innerHTML\n\n  deleteNote(event);\n}\n\nfunction addNoteToNotesArr(noteObject) {\n  notesArr.push(noteObject);\n  showMessage();\n}\n\nfunction deleteNoteFromArr(noteId) {\n  for (var i = 0; i < notesArr.length; i++) {\n    if (notesArr[i]['noteId'] == noteId) {\n      notesArr.splice(i, 1);\n    }\n  }\n\n  showMessage();\n  console.log(notesArr);\n}\n\nfunction showMessage() {\n  if (notesArr.length) {\n    document.getElementById('no-notes').style.display = 'none';\n  } else {\n    document.getElementById('no-notes').style.display = 'block';\n  }\n}\n/* saves notesArr in localStorage when the window closes */\n\n\nwindow.addEventListener(\"beforeunload\", function (event) {\n  if (localStorageTest() && notesArr.length !== 0) {\n    localStorage.setItem('notesArr', JSON.stringify(notesArr));\n  }\n});\n\nfunction localStorageTest() {\n  var test = 'test' + new Date().valueOf();\n\n  try {\n    localStorage.setItem(test, test);\n    localStorage.removeItem(test);\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });