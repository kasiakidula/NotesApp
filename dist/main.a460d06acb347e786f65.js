!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);var o=0,r=[];!function(){var t=localStorage.getItem("notesArr");if(null!==t){r=JSON.parse(t);for(var e=0;e<r.length;e++)u(r[e]);o=r[r.length-1].noteId+1,localStorage.removeItem("notesArr")}}(),document.querySelector("form").addEventListener("submit",l),document.getElementById("board-notes").addEventListener("click",i);var a=function(){var t=new Date;return"".concat(t.getDate(),".").concat(t.getMonth()+1,".").concat(t.getFullYear())},c=function(t){return/<[^>]*>/g.test(t)};function l(t){t.preventDefault();var e=document.querySelector("input"),n=document.querySelector("textarea");if(""!==e.value&&""!=n.value)if(c(e.value)||c(n.value))alert("Change the content");else{var l=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a(),c={noteId:"".concat(n),noteTitle:"".concat(t),noteText:"".concat(e),noteData:"".concat(r)};return c}(e.value,n.value);u(l),function(t){r.push(t)}(l),e.value="",n.value="",o+=1}else alert("Complete the fields")}function u(t){var e=document.getElementById("board-notes"),n=document.createElement("div"),o=t.noteId,r=t.noteTitle,a=t.noteText,c=t.noteData;n.classList.add("note"),n.innerHTML='<h3 class="note-title">'.concat(r,'</h3>\n\t\t\t\t\t<p class="data">').concat(c,'</p>\n\t\t\t\t\t<p class="note-text">').concat(a,'</p>\n\t\t\t\t\t<div id="').concat(o,'" class="buttons">\n\t\t\t\t\t\t<button class="edit">Edit</button><button class="delete">Delete</button>\n\t\t\t\t\t</div>'),e.appendChild(n)}function i(t){"edit"===t.target.className?function(t){var e=document.querySelector("form"),n=t.target.parentNode.parentNode;e[0].value=n.childNodes[0].innerText,e[1].value=n.childNodes[4].innerText,d(t)}(t):"delete"===t.target.className&&d(t)}function d(t){var e=t.target.parentNode.parentNode;e.parentNode.removeChild(e),function(t){for(var e=0;e<r.length;e++)r[e].noteId==t&&r.splice(e,1);console.log(r)}(t.target.parentNode.id)}window.addEventListener("beforeunload",(function(t){(function(){var t="test"+(new Date).valueOf();try{return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(t){return!1}})()&&0!==r.length&&localStorage.setItem("notesArr",JSON.stringify(r))}))},function(t,e,n){}]);