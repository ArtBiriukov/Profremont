(()=>{"use strict";function e(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=/^[а-яёa-z]{2,}$/i,i=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;const r=function(e){var t=e.target,n=/^(\s*\-*)*/g,o=/[\s*\-*]*$/g,i=function(){t.value=t.value.replace(n,""),t.value=t.value.replace(o,"")};"fio"===t.name&&(i(),t.value=t.value.replace(/( |^)[а-яёa-z]/g,(function(e){return e.toUpperCase()}))),"phone"===t.name&&(i(),t.value=t.value.replace(/\++/g,"+"),t.value=t.value.replace(/\-+/g,"-"),t.value=t.value.replace(/\(+/g,"("),t.value=t.value.replace(/\)+/g,")"))};function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw r}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function o(e){var n=e.keyCode,o=t,i=o.replace(/\D/g,""),r=this.value.replace(/\D/g,""),s=0,a=o.replace(/[_\d]/g,(function(e){return s<r.length?r.charAt(s++)||i.charAt(s):e}));-1!=(s=a.indexOf("_"))&&(a=a.slice(0,s));var l=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=a),"blur"==e.type&&this.value.length<5&&(this.value="")}var i,r=s(n);try{for(r.s();!(i=r.n()).done;){var a=i.value;a.addEventListener("input",o),a.addEventListener("focus",o),a.addEventListener("blur",o)}}catch(e){r.e(e)}finally{r.f()}}const c=l;l("селектор элементов","маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__");var u,d,f,v,p,h,m,y,g,S,w,b,_,x,E,L,q,T,A,I,k,C,B,W,D,M;q=document.querySelector(".header-modal"),T=document.querySelector(".services-modal"),A=document.querySelector(".overlay"),I=document.querySelector(".photo-modal"),k=I.querySelector(".modal-content"),C=document.querySelector(".smooth-scroll"),B=function(){A.classList.toggle("active-menu"),C.classList.toggle("active-zindex")},W=function(){B(),q.classList.toggle("active-menu")},D=function(){B(),T.classList.toggle("active-menu")},M=function(){B(),I.classList.toggle("active-menu")},document.addEventListener("click",(function(e){var t=e.target;if((t.closest(".header-modal__close")||t.closest(".button"))&&(e.preventDefault(),W()),(t.closest(".services-modal__close")||t.closest(".service-button"))&&(e.preventDefault(),D()),t.closest(".document-overlay")){e.preventDefault();var n=t.closest(".sertificate-document").href;k.src="".concat(n),M()}t.classList.contains("overlay")&&(q.classList.contains("active-menu")&&W(),T.classList.contains("active-menu")&&D()),(t.classList.contains("close__photo")||t.classList.contains("active-menu"))&&M()})),function(){var e=document.querySelector(".smooth-scroll"),t=document.querySelector("#benefits");window.addEventListener("scroll",(function(){t.offsetTop<document.documentElement.scrollTop?(e.classList.add("show-btn"),e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))):e.classList.remove("show-btn")}))}(),g="23 September  2021",S=document.querySelectorAll(".count_1"),w=document.querySelectorAll(".count_2"),b=document.querySelectorAll(".count_3"),_=document.querySelectorAll(".count_4"),x=0,E=function(e){return e<10?"0".concat(e):e},(L=function(){var e=function(){var e=(new Date(g).getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),o=Math.floor(e/3600%24),i=Math.floor(e/3600/24);return e>0?{timeRemaining:e,days:i,hours:o,minutes:n,seconds:t}:{timeRemaining:0,days:0,hours:0,minutes:0,seconds:0}}(),t=e.days,n=e.hours,o=e.minutes,i=e.seconds,r=e.timeRemaining;S.forEach((function(e){e.querySelector("span").textContent=E(t)})),w.forEach((function(e){e.querySelector("span").textContent=E(n)})),b.forEach((function(e){e.querySelector("span").textContent=E(o)})),_.forEach((function(e){e.querySelector("span").textContent=E(i)})),r<0&&clearInterval(x)})(),x=setInterval(L,1e3),y=new(m=function(){function o(e){var t=e.main,n=e.wrap,i=e.nextBtn,r=e.prevBtn,s=e.position,a=void 0===s?0:s,l=e.slidersToShow,c=void 0===l?3:l,u=e.infinity,d=void 0===u||u,f=e.responsive,v=void 0===f?[]:f,p=e.sliderWidthValid,h=void 0!==p&&p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.main=document.querySelector(t),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.nextBtn=document.querySelector(i),this.prevBtn=document.querySelector(r),this.slidersToShow=c,this.sliderWidthValid=h,this.options={position:a,infinity:d,sliderWidth:parseInt(this.main.clientWidth/this.slidersToShow),maxPosition:this.slides.length-this.slidersToShow},this.responsive=v}var i,r;return i=o,(r=[{key:"init",value:function(){this.sliderWidthValid&&(this.addClass(),this.addStyle()),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addClass",value:function(){var t,n=function(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=e(t))){o&&(t=o);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var e=o.next();return a=e.done,e},e:function(e){l=!0,s=e},f:function(){try{a||null==o.return||o.return()}finally{if(l)throw s}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("vi__slider-item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("slidersCorusel-style");e||((e=document.createElement("style")).id="slidersCorusel-style"),e.textContent="\n        .vi__slider-item {\n          min-width: ".concat(this.options.sliderWidth,"px;\n        }\n      "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prevBtn.addEventListener("click",this.prevSlider.bind(this)),this.nextBtn.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.sliderWidth,"px)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.sliderWidth,"px)"))}},{key:"responseInit",value:function(){var n,o=this,i=this.slidersToShow,r=this.responsive.map((function(e){return e.breakpoint})),s=Math.max.apply(Math,function(e){if(Array.isArray(e))return t(e)}(n=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=function(){o.options.sliderWidth=parseInt(o.main.clientWidth/o.slidersToShow),o.addStyle()},l=function(){var e=document.documentElement.clientWidth;if(e<s)for(var t=0;t<r.length;t++)e<r[t]&&(o.slidersToShow=o.responsive[t].slidersToShow,a());else o.slidersToShow=i,a()};l(),window.addEventListener("resize",l)}}])&&n(i.prototype,r),o}())({main:".benefits-inner",wrap:".benefits-wrap",nextBtn:".benefits__arrow--right",prevBtn:".benefits__arrow--left",slidersToShow:3,infinity:!0,sliderWidthValid:!0,responsive:[{breakpoint:576,slidersToShow:1}]}),new m({main:".service__content",wrap:".service-wrap",nextBtn:".services__arrow--right",prevBtn:".services__arrow--left",slidersToShow:2,infinity:!0,responsive:[{breakpoint:768,slidersToShow:1}]}).init(),y.init(),u=document.getElementById("calc"),d=document.getElementById("calc-type"),f=document.getElementById("calc-input"),v=document.getElementById("calc-type-material"),p=document.getElementById("calc-total"),h=document.querySelector(".message-calc"),f&&(f.addEventListener("input",(function(){f.value=f.value.replace(/[а-яёa-z]/gi,"")})),u.addEventListener("change",(function(e){var t=e.target,n="";t!==d&&t!==f&&t!==v||function(){var e=d.options[d.selectedIndex].value,o=v.options[v.selectedIndex].value,i=f.value;"--"===e&&(p.value="",f.value="",v.value="--");var r,s,a=h.clientHeight,l=function(){h.style.top="calc(100vh + 30px)"};"--"===e&&t===f?(h.style.top="calc(100vh - ".concat(30+a,"px)"),setInterval(l,2500)):l(),i&&"--"!==e&&(n="--"===o?parseInt(i*e):parseInt(i*e*o)),n&&(r=n,s=null,window.requestAnimationFrame((function e(t){s||(s=t);var n=Math.min((t-s)/1e3,1);p.value=Math.floor(n*(r+0)+0),n<1&&window.requestAnimationFrame(e)})))}()}))),function(){var e=document.createElement("div");e.classList.add("animate__animated"),e.style.cssText="\n    font-size: 2rem;\n    background-color: steelblue;\n    width: 230px;\n    padding: 10px;\n    border: 2px solid burlywood;\n    border-radius: 25px;\n    margin: 10px auto;\n  ";var t=function(e){e.forEach((function(e){e.value="",e.classList.remove("success"),e.classList.remove("error")}))},n=function(){document.querySelector(".popup").style.display="none",e.remove()},s=function(s){var a=document.querySelector('form[name="'.concat(s,'"]'));a.querySelectorAll(".form-group input").forEach((function(e){e.addEventListener("input",(function(e){var t,n,r;t=e.target,n=function(){t.classList.add("success"),t.classList.remove("error")},r=function(){t.classList.add("error"),t.classList.remove("success")},"fio"===t.name&&(t.value=t.value.replace(/[\s\d!\@\#\$\%\^\&\*\(\)\_\-\=\+\?\>\<\.\|\\/\"№\;\:]*/gi,""),o.test(t.value)?n():r()),"phone"===t.name&&(t.value=t.value.replace(/[^\d\+\-\s\(\)]+/g,""),i.test(t.value)?n():r())})),e.addEventListener("blur",r)})),c('input[name="phone"]'),a.addEventListener("submit",(function(o){o.preventDefault();var i,r=o.target,s=r.querySelectorAll("input");if(i=!0,s.forEach((function(e){if(""===e.value)return e.classList.add("error"),void(i=!1);e.classList.contains("error")&&(i=!1)})),i){r.appendChild(e),e.classList.add("animate__backInRight"),e.textContent="Загрузка ...";var a=new FormData(r),l={};a.forEach((function(e,t){l[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"contant-Type":"application/json"},body:JSON.stringify(e)})}(l).then((function(o){if(200!==o.status)throw new Error("status not 200");e.style.display="block",e.textContent="Ваши данные у нас ))",t(s),setTimeout(n,3e3)})).catch((function(o){e.style.display="block",e.textContent="Что то не то",t(s),setTimeout(n,3e3),console.log(o)}))}}))};s("action-form"),s("action-form2"),s("callback-form"),s("application-form")}()})();