(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],u=o[s]||0,l="".concat(s," ").concat(u);o[s]=u+1;var p=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var u=n(o[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=document.querySelector("#content"),t=document.createElement("button"),r=document.createElement("button"),a=document.createElement("button");var o=n(379),i=n.n(o),c=n(795),d=n.n(c),s=n(569),u=n.n(s),l=n(565),p=n.n(l),m=n(216),f=n.n(m),v=n(589),h=n.n(v),g=n(426),b={};b.styleTagTransform=h(),b.setAttributes=p(),b.insert=u().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=f(),i()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals,function(){const n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("img");t.classList.add("btn-current"),n.classList.add("header-div"),o.classList.add("header-logo-div"),c.classList.add("header-img"),o.appendChild(c),i.classList.add("nav-btns"),e.appendChild(n),n.appendChild(o),n.appendChild(i),t.classList.add("nav-button"),r.classList.add("nav-button"),a.classList.add("nav-button"),t.textContent="Home",r.textContent="Menu",a.textContent="Contact",i.appendChild(t),i.appendChild(r),i.appendChild(a)}(),function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("img"),c=document.createElement("img");i.classList.add("hero-img"),t.classList.add("hero-div"),n.classList.add("main-img-div"),n.appendChild(i),r.classList.add("main-text-div"),a.classList.add("hero-logo"),c.classList.add("big-logo"),a.appendChild(c),o.classList.add("hero-text"),o.textContent="Get ready to burger out at burgerburgerburgers! Our patties are a cut above the rest, and we've got buns of steel to match. Come see why our burgers are flippin' amazing!",e.appendChild(t),t.appendChild(n),t.appendChild(r),r.appendChild(a),r.appendChild(o)}()})()})();