define(["react","@variousjs/various"],(function(e,t){return function(){"use strict";var n={597:function(e){e.exports=t},650:function(t){t.exports=e}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){o.r(a),o.d(a,{default:function(){return m}});var e=o(650),t=o.n(e),n=o(597),r=JSON.parse('{"title":"标题，{name}"}'),l=JSON.parse('{"title":"Title, {name}"}');const{createStore:u,connect:c,emit:i,getStore:s}=new n.Nycticorax;u({value:0});class f extends e.Component{static setValue=async e=>{const t=s();i({value:e+t.value},!0)};static $i18n=()=>({localeKey:"locale",resources:{zh:r,en:l}});render(){const{user:e}=this.props.$store,{value:n,$t:r,$dispatch:o}=this.props;return t().createElement(t().Fragment,null,t().createElement("h3",null,"Next"),t().createElement("div",null,t().createElement("ul",null,t().createElement("li",null,"Store: ",e.name),t().createElement("li",null,"Value: ",n),t().createElement("li",null,"Locale: ",r("title",{name:"various"}))),t().createElement("div",{className:"btn",onClick:()=>o("card","logName")},"Name")))}}var m=c("value")(f)}(),a}()}));
//# sourceMappingURL=next.js.map