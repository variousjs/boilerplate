define(["react","react-router-dom"],(function(e,n){return function(){"use strict";var t={233:function(e,n,t){var r=t(537),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,".container_Lng5c {\n  margin-top: 30px;\n}\n","",{version:3,sources:["webpack://./src/components/card.less"],names:[],mappings:"AAAA;EACE,gBAAA;AACF",sourcesContent:[".container {\n  margin-top: 30px;\n}\n"],sourceRoot:""}]),c.locals={container:"container_Lng5c"},n.Z=c},645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},537:function(e){e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),c=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([a]).join("\n")}return[n].join("\n")}},379:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var p=t(f),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var v=o(d,r);r.byIndex=i,n.splice(i,0,{identifier:f,updater:v,references:1})}c.push(f)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:function(e){e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},650:function(n){n.exports=e},814:function(e){e.exports=n}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var a={};return function(){o.r(a),o.d(a,{default:function(){return A}});var e=o(650),n=o.n(e),t=o(814),r=o(379),c=o.n(r),i=o(795),s=o.n(i),u=o(569),l=o.n(u),f=o(565),p=o.n(f),d=o(216),v=o.n(d),m=o(589),h=o.n(m),y=o(233),g={};g.styleTagTransform=h(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=v(),c()(y.Z,g);var b=y.Z&&y.Z.locals?y.Z.locals:void 0;const x=e=>{const{id:r}=(0,t.useParams)();return n().createElement("div",{className:b.container},n().createElement("button",{key:"next",onClick:()=>e.$dispatch("next","setValue",1)},"Next"),n().createElement("button",{key:"locale",onClick:()=>e.$dispatch("store","setLocale","zh"===e.$store.locale?"en":"zh")},"locale"),n().createElement("button",{key:"store",onClick:async()=>{const n=`${Math.random().toFixed(2)}`;await e.$dispatch("store","setName",n)}},"Store"),n().createElement("p",null,r||"none"))};x.getName=e=>alert(e);var A=x}(),a}()}));
//# sourceMappingURL=card.js.map