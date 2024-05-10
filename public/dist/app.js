define(["react","@variousjs/various","react-router-dom"],(function(e,n,t){return function(){"use strict";var r={691:function(e,n,t){var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,".container_DNuWK {\n  background: #fff;\n  padding: 30px;\n  max-width: 800px;\n}\n.top_plVtj {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n.com_B_w1z {\n  width: 300px;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 30px;\n  border: 3px solid #ddd;\n  border-radius: 4px;\n  padding: 20px;\n}\n.com_B_w1z p,\n.com_B_w1z li {\n  font-size: 14px;\n  color: #666;\n  margin: 20px 0 12px;\n}\n.com_B_w1z ul {\n  margin: 20px 0 12px 16px;\n}\n.com_B_w1z li {\n  margin: 5px 0;\n}\n.btn {\n  display: inline-block;\n  border-radius: 4px;\n  padding: 3px 8px;\n  font-size: 14px;\n  background: #eee;\n  margin-right: 10px;\n  cursor: pointer;\n}\n",""]),c.locals={container:"container_DNuWK",top:"top_plVtj",com:"com_B_w1z"},n.Z=c},645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:function(e){e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},597:function(e){e.exports=n},650:function(n){n.exports=e},814:function(e){e.exports=t}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,exports:{}};return r[e](t,t.exports,a),t.exports}a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,{a:n}),n},a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nc=void 0;var c={};return function(){a.r(c),a.d(c,{default:function(){return S}});var e={async setName({emit:e,getStore:n},t){await new Promise((e=>setTimeout(e,1e3)));const r=n("user");r.name=t,e({user:r})},async getName({getStore:e}){const{user:n}=e();return n.name},async setLocale({emit:e},n){e({locale:n})}},n=a(650),t=a.n(n),r=a(597),o=a(814),i=a(379),s=a.n(i),u=a(795),l=a.n(u),p=a(569),d=a.n(p),f=a(565),m=a.n(f),v=a(216),g=a.n(v),h=a(589),y=a.n(h),x=a(691),b={};b.styleTagTransform=y(),b.setAttributes=m(),b.insert=d().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g(),s()(x.Z,b);var E=x.Z&&x.Z.locals?x.Z.locals:void 0;const _=(0,r.createComponent)("top.H"),w=(0,r.createComponent)("top.S",["user"]);class C extends n.Component{config=(0,r.getConfig)();components=this.config.pages.reduce(((e,t)=>(t.components.forEach((t=>{e[t]=(0,n.memo)((0,r.createComponent)(t))})),e)),{});render(){const e=this.config;return t().createElement("div",{className:E.container},t().createElement(o.HashRouter,null,t().createElement("div",{className:E.top},t().createElement(_,null),t().createElement(w,null)),t().createElement(o.Routes,null,e.pages.map((({path:e,components:n})=>{const r=n.map((e=>{const n=this.components[e];return t().createElement("div",{className:E.com,key:e},t().createElement(n,null))}));return t().createElement(o.Route,{key:e,path:e,element:r})})))))}}var S={store:{user:{name:"various"},locale:"zh"},Container:C,Loader:function(){return t().createElement("p",null,"loading...")},Error:({$reload:e,$type:n,$message:r})=>t().createElement(t().Fragment,null,t().createElement("h3",null,`[${n}]: ${r||"组件错误"}`),e&&t().createElement("button",{onClick:e},"刷新")),actions:e}}(),c}()}));
//# sourceMappingURL=app.js.map