!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2)},function(e,t){var n=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",n+"px"),window.addEventListener("resize",function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")});var o,r,c=document.querySelector(".content-popular"),l=document.querySelector(".content-popular"),u=document.querySelector(".link-on-form"),i=document.querySelector(".cc");null!=i&&(o=[(r=i.getBoundingClientRect()).top+window.pageYOffset,(r.right,window.pageXOffset),(r.bottom,window.pageYOffset),(r.left,window.pageXOffset)][0],window.addEventListener("scroll",function(){window.scrollY,window.scrollY<o-800&&c.classList.add("content-popular__show"),window.scrollY>o-800&&c.classList.remove("content-popular__show"),window.scrollY>o+1100&&c.classList.add("content-popular__show")}),l.addEventListener("click",function(){i.scrollIntoView(top)}),u.addEventListener("click",function(){i.scrollIntoView(top)})),document.addEventListener("DOMContentLoaded",function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),o=e.getDate();n=10<=n?n:"0"+n,o=10<=o?o:"0"+o,document.querySelectorAll("#yearNow").forEach(function(e){e.innerHTML=t}),document.querySelectorAll("#monthNow").forEach(function(e){e.innerHTML=n}),document.querySelectorAll("#dayNow").forEach(function(e){e.innerHTML=o});var r=new Date((new Date).getFullYear(),(new Date).getMonth()+1,1),c=null;function l(e,t){return t[4<e%100&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}function u(){var e=r-new Date;e<=0&&clearInterval(c);var t=0<e?Math.floor(e/1e3/60/60)%24:0,n=0<e?Math.floor(e/1e3/60)%60:0,o=0<e?Math.floor(e/1e3)%60:0;i.textContent=t<10?"0"+t:t,a.textContent=n<10?"0"+n:n,d.textContent=o<10?"0"+o:o,a.dataset.title=l(n,["минута","минуты","минут"]),d.dataset.title=l(o,["секунда","секунды","секунд"])}var i=document.querySelector(".timer__hours"),a=document.querySelector(".timer__minutes"),d=document.querySelector(".timer__seconds");u(),c=setInterval(u,1e3)})},function(e,t,n){}]);