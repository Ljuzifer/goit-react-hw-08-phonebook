"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[651],{8617:function(t,e,n){n.d(e,{Vel:function(){return o}});var r=n(9983);function o(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",clipRule:"evenodd"}}]})(t)}},9983:function(t,e,n){n.d(e,{w_:function(){return l}});var r=n(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function c(t){return t&&t.map((function(t,e){return r.createElement(t.tag,i({key:e},t.attr),c(t.child))}))}function l(t){return function(e){return r.createElement(f,i({attr:i({},t.attr)},e),c(t.child))}}function f(t){var e=function(e){var n,o=t.attr,u=t.size,c=t.title,l=a(t,["attr","size","title"]),f=u||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:n,style:i(i({color:t.color||e.color},e.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==u?r.createElement(u.Consumer,null,(function(t){return e(t)})):e(o)}},6916:function(t,e,n){n.d(e,{P1:function(){return c}});var r="NOT_FOUND";var o=function(t,e){return t===e};function u(t,e){var n="object"===typeof e?e:{equalityCheck:e},u=n.equalityCheck,i=void 0===u?o:u,a=n.maxSize,c=void 0===a?1:a,l=n.resultEqualityCheck,f=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!t(e[o],n[o]))return!1;return!0}}(i),s=1===c?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:r},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(t,e){var n=[];function o(t){var o=n.findIndex((function(n){return e(t,n.key)}));if(o>-1){var u=n[o];return o>0&&(n.splice(o,1),n.unshift(u)),u.value}return r}return{get:o,put:function(e,u){o(e)===r&&(n.unshift({key:e,value:u}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,f);function p(){var e=s.get(arguments);if(e===r){if(e=t.apply(null,arguments),l){var n=s.getEntries(),o=n.find((function(t){return l(t.value,e)}));o&&(e=o.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function i(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var u,a=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=c,s=f.memoizeOptions,p=void 0===s?n:s,v=Array.isArray(p)?p:[p],y=i(r),h=t.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(v)),d=t((function(){for(var t=[],e=y.length,n=0;n<e;n++)t.push(y[n].apply(null,arguments));return u=h.apply(null,t)}));return Object.assign(d,{resultFunc:l,memoizedResultFunc:h,dependencies:y,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),d};return o}var c=a(u)}}]);
//# sourceMappingURL=651.bf1c4152.chunk.js.map