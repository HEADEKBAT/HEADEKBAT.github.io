!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=3)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),o=n(1),a=n.n(o);function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",s+"px"),window.addEventListener("resize",function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")});var u,c=document.querySelectorAll(".link"),f=document.querySelector(".ccc"),d=i(c);try{for(d.s();!(u=d.n()).done;){u.value.addEventListener("click",function(){f.scrollIntoView(top)})}}catch(e){d.e(e)}finally{d.f()}var v=function(){function i(e,t,n,r,o,a){l()(this,i),this.commentForm=document.querySelector(e),this.inputCommentName=document.querySelector(t),this.inputCommentText=document.querySelector(n),this.formImage=document.querySelector(r),this.formAvatar=document.querySelector(o),this.commentPushBlock=document.querySelector(a),this.commArrAll=[],this.formImageUrl,this.formImageChange(),this.pushComBlock(),this.domOnloader()}return a()(i,[{key:"uploadFile",value:function(e){var t,n=this;if(!["image/jpeg","image/png","image/gif"].includes(e.type))return alert("Solo se permiten imágenes."),void(formImage.value="");1048576<e.size?alert("El archivo debe tener menos de 1 MB."):((t=new FileReader).onload=function(e){n.formAvatar.innerHTML='<img src="'.concat(e.target.result,'" alt="Фото">'),n.formAvatar.classList.add("form__avatar--loaded"),n.formImageUrl=e.target.result},t.onerror=function(e){alert("Error")},t.readAsDataURL(e))}},{key:"formImageChange",value:function(){var e=this;this.formImage.addEventListener("change",function(){e.uploadFile(e.formImage.files[0])})}},{key:"pushComm",value:function(){}},{key:"removeInputClass",value:function(){this.inputCommentName&&(this.inputCommentName.value="",this.inputCommentName.classList.remove("error")),this.inputCommentText.value="",this.inputCommentText.classList.remove("error")}},{key:"pushComBlock",value:function(){var t=this;this.commentForm.addEventListener("submit",function(e){if(e.preventDefault(),t.inputCommentName){if(t.inputCommentName.value&&inputCommentText.value)return t.formAvatar.innerHTML="",t.formAvatar.classList.remove("form__avatar--loaded"),t.pushComm();t.inputCommentName.classList.add("error"),t.inputCommentText.classList.add("error")}else{if(t.inputCommentText.value)return t.formAvatar.innerHTML="",t.formAvatar.classList.remove("form__avatar--loaded"),t.pushComm();t.inputCommentText.classList.add("error")}})}},{key:"domOnloader",value:function(){var e=this;document.addEventListener("DOMContentLoaded",function(){localStorage.commArr&&(e.commArrAll=JSON.parse(localStorage.getItem("commArr")),commentPushBlock.innerHTML=e.commArrAll.join(""))})}}]),i}();new v("#commentForm","#inputCommentName","#inputCommentText","#formImage","#formAvatar","#commentPushBlock");v.prototype.pushComm=function(){var e="",e=this.formImageUrl?this.formImageUrl:"./img/user-0.jpg",t='\n    <li class="answers__item answer-item">\n                    <div class="answer-item__user answer-user">\n                        <div class="answer-user__info-wrapper">\n                            <div class="answer-user__logo link">\n                            <img src="'.concat(e,'" alt="">\n                            </div>\n                            <div class="answer-user__info">\n                                <div class="answer-user__name link">\n                                ').concat(this.inputCommentName.value,'\n                                </div>\n                                <div class="answer-user__date">\n                                ').concat((new Date).toLocaleDateString(),'\n                                </div>\n                            </div>\n                        </div>\n                        <div class="answer-user__text">\n                        ').concat(this.inputCommentText.value,"\n                        </div>\n                    </div>\n    </li>\n");this.removeInputClass(),this.commArrAll.push(t),this.commentPushBlock.innerHTML=this.commArrAll.join(""),localStorage.setItem("commArr",JSON.stringify(this.commArrAll)),this.formAvatar.innerHTML="",e=this.formImageUrl=""};var p=document.querySelectorAll(".btn"),h=document.querySelector(".modal-overlay "),y=document.querySelectorAll(".modal"),g=document.querySelectorAll(".closeBtn");p.forEach(function(e){e.addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-path");y.forEach(function(e){e.classList.remove("modal--visible")}),document.querySelector('[data-target="'.concat(t,'"]')).classList.add("modal--visible"),h.classList.add("modal-overlay--visible")})}),h.addEventListener("click",function(e){console.log(e.target),e.target==h&&(h.classList.remove("modal-overlay--visible"),y.forEach(function(e){e.classList.remove("modal--visible")}))});var b,A=i(g);try{for(A.s();!(b=A.n()).done;){b.value.addEventListener("click",function(){h.classList.remove("modal-overlay--visible"),y.forEach(function(e){e.classList.remove("modal--visible")})})}}catch(e){A.e(e)}finally{A.f()}n(2)}]);