define(["react","@variousjs/various","react-router-dom"],(function(e,t,r){return function(){"use strict";var n={597:function(e){e.exports=t},650:function(t){t.exports=e},814:function(e){e.exports=r}},o={};function u(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,u),r.exports}u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},u.d=function(e,t){for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){u.r(a);var e=u(650),t=u.n(e),r=u(597),n=u(814);a.default=e=>{const o=(0,r.getConfig)(),u=(0,n.useHistory)();return t().createElement(t().Fragment,null,o.links.map((({path:e,name:r})=>t().createElement("button",{key:e,value:e,onClick:()=>{return t=e,void u.push(t);var t}},r))),t().createElement("div",null,"Store:",t().createElement("p",null,e.$store.user.name),t().createElement("button",{style:{marginLeft:10},onClick:()=>e.$dispatch("card","getName","Card")},"Card Name")))}}(),a}()}));
//# sourceMappingURL=top.js.map