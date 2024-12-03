/*! For license information please see cd7d5f864fc9e15ed8adef086269b0aeff617554-16d3ccfcb9e96066e948.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1jzt":function(t,e,o){(function(o){var n,r;r=void 0!==o?o:"undefined"!=typeof window?window:this,void 0===(n=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},o=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var o in e){if(!e.hasOwnProperty(o))return;t[o]=e[o]}})),t},n=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,o=String(t),n=o.length,r=-1,a="",l=o.charCodeAt(0);++r<n;){if(0===(e=o.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===l?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?o.charAt(r):"\\"+o.charAt(r)}return"#"+a},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e,o,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,o))},l=function(e,o,n,r){if(o.emitEvents&&"function"==typeof t.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:r}});document.dispatchEvent(a)}};return function(i,c){var s,u,f,d,h={cancelScroll:function(t){cancelAnimationFrame(d),d=null,t||l("scrollCancel",s)},animateScroll:function(n,i,c){h.cancelScroll();var u=o(s||e,c||{}),m="[object Number]"===Object.prototype.toString.call(n),p=m||!n.tagName?null:n;if(m||p){var v=t.pageYOffset;u.header&&!f&&(f=document.querySelector(u.header));var y,g,b,E,S,w,O,I,L=function(e){return e?(o=e,parseInt(t.getComputedStyle(o).height,10)+e.offsetTop):0;var o}(f),M=m?n:function(e,o,n,a){var l=0;if(e.offsetParent)for(;l+=e.offsetTop,e=e.offsetParent;);return l=Math.max(l-o-n,0),a&&(l=Math.min(l,r()-t.innerHeight)),l}(p,L,parseInt("function"==typeof u.offset?u.offset(n,i):u.offset,10),u.clip),T=M-v,A=r(),C=0,N=(y=T,b=(g=u).speedAsDuration?g.speed:Math.abs(y/1e3*g.speed),g.durationMax&&b>g.durationMax?g.durationMax:g.durationMin&&b<g.durationMin?g.durationMin:parseInt(b,10)),Y=function(e){var o,r,c;E||(E=e),C+=e-E,w=v+T*(r=S=1<(S=0===N?0:C/N)?1:S,"easeInQuad"===(o=u).easing&&(c=r*r),"easeOutQuad"===o.easing&&(c=r*(2-r)),"easeInOutQuad"===o.easing&&(c=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===o.easing&&(c=r*r*r),"easeOutCubic"===o.easing&&(c=--r*r*r+1),"easeInOutCubic"===o.easing&&(c=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===o.easing&&(c=r*r*r*r),"easeOutQuart"===o.easing&&(c=1- --r*r*r*r),"easeInOutQuart"===o.easing&&(c=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===o.easing&&(c=r*r*r*r*r),"easeOutQuint"===o.easing&&(c=1+--r*r*r*r*r),"easeInOutQuint"===o.easing&&(c=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),o.customEasing&&(c=o.customEasing(r)),c||r),t.scrollTo(0,Math.floor(w)),function(e,o){var r=t.pageYOffset;if(e==o||r==o||(v<o&&t.innerHeight+r)>=A)return h.cancelScroll(!0),a(n,o,m),l("scrollStop",u,n,i),!(d=E=null)}(w,M)||(d=t.requestAnimationFrame(Y),E=e)};0===t.pageYOffset&&t.scrollTo(0,0),O=n,I=u,m||history.pushState&&I.updateURL&&history.pushState({smoothScroll:JSON.stringify(I),anchor:O.id},document.title,O===document.documentElement?"#top":"#"+O.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?a(n,Math.floor(M),!1):(l("scrollStart",u,n,i),h.cancelScroll(!0),t.requestAnimationFrame(Y))}}},m=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(u=e.target.closest(i))&&"a"===u.tagName.toLowerCase()&&!e.target.closest(s.ignore)&&u.hostname===t.location.hostname&&u.pathname===t.location.pathname&&/#/.test(u.href)){var o,r;try{o=n(decodeURIComponent(u.hash))}catch(e){o=n(u.hash)}if("#"===o){if(!s.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(o);(r=r||"#top"!==o?r:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var o=t.location.hash;o=o||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:o||t.pageYOffset},document.title,o||t.location.href)}}(s),h.animateScroll(r,u))}},p=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||h.animateScroll(e,null,{updateURL:!1})}};return h.destroy=function(){s&&(document.removeEventListener("click",m,!1),t.removeEventListener("popstate",p,!1),h.cancelScroll(),d=f=u=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),s=o(e,c||{}),f=s.header?document.querySelector(s.header):null,document.addEventListener("click",m,!1),s.updateURL&&s.popstate&&t.addEventListener("popstate",p,!1)}(),h}}(r)}.apply(e,[]))||(t.exports=n)}).call(this,o("yLpj"))},"9H8W":function(t,e,o){},C5sA:function(t,e,o){t.exports=o.p+"static/profile-778f798c3d6b664b3329495e78b0b2bc.png"},EXIE:function(t,e,o){"use strict";o.d(e,"c",(function(){return c})),o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return u}));var n=o("1jzt"),r=o.n(n),a=o("dwco"),l=o.n(a);let i;function c(){return l.a.polyfill(),i=new r.a('a[href*="#"]',{speed:500,speedAsDuration:!0}),i}function s(){if(!i)throw Error("Not founded SmoothScroll instance");return i.destroy(),i=null,i}function u(t){if(!i)throw Error("Not founded SmoothScroll instance");return i.animateScroll(t),i}},dwco:function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,n=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||i,scrollIntoView:n.prototype.scrollIntoView},a=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?m.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;m.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=d(this),n=o.getBoundingClientRect(),a=this.getBoundingClientRect();o!==e.body?(m.call(this,o,o.scrollLeft+a.left-n.left,o.scrollTop+a.top-n.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function u(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function f(t){var e=s(t,"Y")&&u(t,"Y"),o=s(t,"X")&&u(t,"X");return e||o}function d(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host;return t}function h(e){var o,n,r,l,i=(a()-e.startTime)/468;l=i=i>1?1:i,o=.5*(1-Math.cos(Math.PI*l)),n=e.startX+(e.x-e.startX)*o,r=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,n,r),n===e.x&&r===e.y||t.requestAnimationFrame(h.bind(t,e))}function m(o,n,l){var c,s,u,f,d=a();o===e.body?(c=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=r.scroll):(c=o,s=o.scrollLeft,u=o.scrollTop,f=i),h({scrollable:c,method:f,startTime:d,startX:s,startY:u,x:n,y:l})}}}}()},lbRd:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o("q1tI"),r=o.n(n),a=o("Wbzz"),l=(o("9H8W"),o("C5sA")),i=o.n(l);const c=Object(n.forwardRef)((t,e)=>r.a.createElement(a.StaticQuery,{query:s,render:t=>{const{author:o,social:n,introduction:l}=t.site.siteMetadata;return r.a.createElement("div",{ref:e,className:"bio"},r.a.createElement("div",{className:"author"},r.a.createElement("div",{className:"author-description"},r.a.createElement("img",{src:i.a,className:"author-image author-profile-image"}),r.a.createElement("div",{className:"author-name"},r.a.createElement("span",{className:"author-name-prefix"},"Written by"),r.a.createElement(a.Link,{to:"/about",className:"author-name-content"},r.a.createElement("span",null,"@",o)),r.a.createElement("div",{className:"author-introduction"},l),r.a.createElement("p",{className:"author-socials"},n.instagram&&r.a.createElement("a",{href:"https://www.instagram.com/"+n.instagram},"Instagram"),n.github&&r.a.createElement("a",{href:"https://github.com/"+n.github},"✦ Github"),n.medium&&r.a.createElement("a",{href:"https://medium.com/"+n.medium},"✦ Medium"),n.linkedin&&r.a.createElement("a",{href:`https://www.linkedin.com/in/${n.linkedin}/`},"✦ LinkedIn"))))))}})),s="2486386679"}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-16d3ccfcb9e96066e948.js.map