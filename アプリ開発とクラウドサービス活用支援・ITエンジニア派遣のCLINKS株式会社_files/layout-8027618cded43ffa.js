(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{51116:function(e,t,n){Promise.resolve().then(n.bind(n,64404)),Promise.resolve().then(n.bind(n,27640)),Promise.resolve().then(n.bind(n,90239)),Promise.resolve().then(n.t.bind(n,84080,23)),Promise.resolve().then(n.t.bind(n,20713,23)),Promise.resolve().then(n.t.bind(n,60526,23)),Promise.resolve().then(n.t.bind(n,64671,23)),Promise.resolve().then(n.t.bind(n,77448,23)),Promise.resolve().then(n.t.bind(n,99694,23))},90239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(57437),a=n(2265);t.default=function(e){let{html:t,height:n=null,width:o=null,children:l,dataNtpc:i=""}=e;return(0,a.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(i)}})},[i]),(0,r.jsxs)(r.Fragment,{children:[l,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:t}}):null]})}},64404:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=n(57437),l=n(2265),i=(r=n(31877))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===a&&(a=n),(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,o.jsx)(i.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))}},27640:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=n(57437),l=n(2265),i=(r=n(31877))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:s,dataLayer:u}=e;void 0===a&&(a=n);let c="dataLayer"!==n?"&l=".concat(n):"";return(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(u?"w[l].push(".concat(JSON.stringify(u),")"):"","\n      })(window,'").concat(n,"');")}}),(0,o.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(c).concat(r?"&gtm_auth=".concat(r):"").concat(s?"&gtm_preview=".concat(s,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===a){console.warn("@next/third-parties: GTM has not been initialized");return}window[a]?window[a].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(a," does not exist"))}},31877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a.a}});var r=n(84080),a=n.n(r),o={};for(var l in r)"default"!==l&&(o[l]=(function(e){return r[e]}).bind(0,l));n.d(t,o)},40905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return l},isEqualNode:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:l}=n;return l?a.innerHTML=l.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let u=t.map(a).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(o(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(l-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},49189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},84080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return g}});let r=n(99920),a=n(41452),o=n(57437),l=r._(n(54887)),i=a._(n(2265)),s=n(36590),u=n(40905),c=n(49189),d=new Map,f=new Set,_=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:l="",strategy:i="afterInteractive",onError:s,stylesheets:c}=e,m=n||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(r,s);return}let y=()=>{a&&a(),f.add(m)},g=document.createElement("script"),h=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(o?(g.innerHTML=o.__html||"",y()):l?(g.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",y()):t&&(g.src=t,d.set(t,h)),Object.entries(e))){if(void 0===r||_.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===i&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",i),c&&p(c),document.body.appendChild(g)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function g(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function h(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:d,stylesheets:_,...p}=e,{updateScripts:y,scripts:g,getIsSsr:h,appDir:b,nonce:v}=(0,i.useContext)(s.HeadManagerContext),w=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;w.current||(a&&e&&f.has(e)&&a(),w.current=!0)},[a,t,n]);let x=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!x.current&&("afterInteractive"===u?m(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),x.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(g[u]=(g[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...p}]),y(g)):h&&h()?f.add(t||n):h&&!h()&&m(e)),b){if(_&&_.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:v}:{as:"script",nonce:v}),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===u&&n&&l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:v}:{as:"script",nonce:v})}return null}Object.defineProperty(h,"__nextScript",{value:!0});let b=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},99694:function(){},77448:function(){},64671:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},60526:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_48ea4f', '__Noto_Sans_Fallback_48ea4f'",fontStyle:"normal"},className:"__className_48ea4f",variable:"__variable_48ea4f"}},20713:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_JP_bd1808', '__Noto_Sans_JP_Fallback_bd1808'",fontStyle:"normal"},className:"__className_bd1808",variable:"__variable_bd1808"}}},function(e){e.O(0,[759,564,971,23,744],function(){return e(e.s=51116)}),_N_E=e.O()}]);