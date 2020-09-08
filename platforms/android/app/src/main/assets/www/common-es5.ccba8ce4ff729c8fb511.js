!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return e}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}function c(t,n,e,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void e(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){c(o,r,i,a,s,"next",t)}function s(t){c(o,r,i,a,s,"throw",t)}a(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return c}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},c=function(){r.selectionEnd()},s=function(t){r.impact(t)}},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=s(regeneratorRuntime.mark((function t(n,e,r,i,o){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return a.classList.add(t)})),o&&Object.assign(a,o),e.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(n,e,r,i,o){return t.apply(this,arguments)}}(),i=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},"U/uv":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("sxy2"),i=e("ItpF"),o=e("2c9M"),a=function(t,n){var e,a,c=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(u(),s(o,i)):u()}},s=function(t,n){e=t,a||(a=e);var i=e;Object(r.g)((function(){return i.classList.add("ion-activated")})),n()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;Object(r.g)((function(){return n.classList.remove("ion-activated")})),t&&a!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return c(t.currentX,t.currentY,o.a)},onMove:function(t){return c(t.currentX,t.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),a=void 0}})}},"X5X/":function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var o=r("2Vo4"),c=r("lGQG"),s=r("24R0"),u=r("tudd"),l=r("ndxW"),f=r("fXoL"),d=r("xgBC"),h=function(){var t=function(){function t(n,e,r,a,c){var s=this;i(this,t),this.storage=n,this.courier=e,this.auth=r,this.sys=a,this.state$=c,this.orders=new o.a([]),n.ready().then((function(t){s.storage.get("orders").then((function(t){s.ordersMap=s.getOrdersMap(t),null==t&&s.getApiData(),s.orders.next(t),console.log("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438\u0437 \u0441\u0442\u043e\u0440\u0430\u0436\u0430",t),s.getInitialData(),s.orders.subscribe((function(t){console.trace("sys:: \u041f\u0440\u0438\u0448\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u044b \u0432 \u0441\u0442\u0440\u0438\u043c data.orders"),s.saveOrders(t).then((function(){console.log("sys:: \u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d \u0432 \u0441\u0442\u043e\u0440\u043e\u0436: ",t)}))}))}))})),this.state$.g_state.subscribe((function(t){"unLogin"==t&&s.ordersMap.clear()}))}return a(t,[{key:"getInitialData",value:function(){var t=this;this.storage.ready().then((function(){t.storage.keys().then((function(t){return console.log("\u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0441\u0442\u043e\u0440\u0430\u0436\u0435: ",t)})),t.storage.get("orders").then((function(t){console.log("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438\u0437 \u0441\u0442\u043e\u0440\u0430\u0436\u0430",t)})).catch((function(t){console.log(t)}))}))}},{key:"getApiData",value:function(){var t=this;return this.courier.getBalance(this.auth.userId,1).subscribe((function(n){t.sys.getOrders(n.res_more.map((function(t){return t.id.toString()}))).subscribe((function(n){t.saveOrders(n.orders).then((function(){t.storage.get("orders").then((function(n){t.orders.next(n)}))}))}))}))}},{key:"getOrders",value:function(t){var n=this;this.sys.getOrders(t).subscribe((function(t){n.orders.next(t.orders),n.saveOrders(t.orders)}))}},{key:"saveOrders",value:function(t){var e=this,r=this.getOrdersMap(t),i=new Map([].concat(n(this.ordersMap),n(r)));return this.ordersMap.forEach((function(t,n){r.has(n)||(e.ordersMap.delete(n),console.log("sys:: \u0417\u0430\u043a\u0430\u0437 ".concat(n," \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 \u0441\u0442\u043e\u0440\u043e\u0436\u0430")))})),this.storage.set("orders",Array.from(i.values()))}},{key:"getOrdersMap",value:function(t){var n=new Map;return t&&t.forEach((function(t){n.set(Number(t.id),t)})),n}},{key:"rewriteOrders",value:function(t){this.ordersMap=this.getOrdersMap(t),this.orders.next(t)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(f.Pb(d.b),f.Pb(s.a),f.Pb(c.a),f.Pb(u.a),f.Pb(l.a))},t.\u0275prov=f.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},sPtc:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return c}));var r=function(t,n){return null!==n.closest(t)},i=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((i=!0,(r="ion-color-"+t)in(e={"ion-color":!0})?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),n):n;var e,r,i},o=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=s(regeneratorRuntime.mark((function t(n,e,r,i){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||a.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(n,e,r,i){return t.apply(this,arguments)}}()},selK:function(n,e,r){"use strict";r.d(e,"a",(function(){return d}));var o=r("fXoL"),c=r("sZkV"),s=r("iInd"),u=r("SVse"),l=["myCanvas"];function f(t,n){1&t&&(o.Lb(0,"div",7),o.qc(1,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044c"),o.Kb())}var d=function(){var t=function(){function t(n,e,r,o,a){i(this,t),this.platform=n,this.router=e,this.renderer=r,this.location=o,this.modal=a,this.isClear=!0,this.error_mes=!1,this.currentColour="#000000",this.brushSize=10,this.save_process=!1}return a(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){this.canvasElement=this.canvas.nativeElement,h(this.renderer,this.canvasElement,"width",this.platform.width()+""),h(this.renderer,this.canvasElement,"height",this.platform.height()+"")}},{key:"handleStart",value:function(t){this.lastX=t.touches[0].pageX,this.lastY=t.touches[0].pageY}},{key:"clearCanvas",value:function(){this.isClear=!0,this.canvasElement.getContext("2d").clearRect(0,0,this.canvasElement.width,this.canvasElement.height)}},{key:"handleMove",value:function(t){this.isClear=!1,this.error_mes=!1;var n=this.canvasElement.getContext("2d"),e=t.touches[0].pageX,r=t.touches[0].pageY;n.beginPath(),n.lineJoin="round",n.moveTo(this.lastX,this.lastY),n.lineTo(e,r),n.closePath(),n.strokeStyle=this.currentColour,n.lineWidth=this.brushSize,n.stroke(),this.lastX=e,this.lastY=r}},{key:"saveImage",value:function(){if(this.isClear)return this.error_mes=!0,!1;var t=this.canvasElement.toDataURL();t=t.split(",")[1],localStorage.setItem("drawImg",t),this.back()}},{key:"back",value:function(){this.modal.dismiss()}}]),t}();return t.\u0275fac=function(n){return new(n||t)(o.Ib(c.J),o.Ib(s.g),o.Ib(o.D),o.Ib(u.h),o.Ib(c.H))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-draw"]],viewQuery:function(t,n){var e;1&t&&o.nc(l,!0),2&t&&o.ic(e=o.Ub())&&(n.canvas=e.first)},decls:15,vars:1,consts:[[3,"touchstart","touchmove"],["myCanvas",""],["class","error",4,"ngIf"],[1,"btns"],[1,"save-btn",3,"click"],[1,"save-btn","clear-btn",3,"click"],[1,"save-btn","back",3,"click"],[1,"error"]],template:function(t,n){1&t&&(o.Lb(0,"ion-header"),o.Lb(1,"ion-toolbar"),o.Lb(2,"ion-title"),o.qc(3,"\u041f\u043e\u0434\u043f\u0438\u0441\u044c"),o.Kb(),o.Kb(),o.Kb(),o.Lb(4,"ion-content"),o.Lb(5,"canvas",0,1),o.Tb("touchstart",(function(t){return n.handleStart(t)}))("touchmove",(function(t){return n.handleMove(t)})),o.Kb(),o.pc(7,f,2,0,"div",2),o.Lb(8,"div",3),o.Lb(9,"button",4),o.Tb("click",(function(){return n.saveImage()})),o.qc(10,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),o.Kb(),o.Lb(11,"button",5),o.Tb("click",(function(){return n.clearCanvas()})),o.qc(12,"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"),o.Kb(),o.Lb(13,"button",6),o.Tb("click",(function(){return n.back()})),o.qc(14,"\u041d\u0430\u0437\u0430\u0434"),o.Kb(),o.Kb(),o.Kb()),2&t&&(o.yb(7),o.cc("ngIf",n.error_mes))},directives:[c.l,c.E,c.C,c.j,u.l],styles:["canvas[_ngcontent-%COMP%]{display:block;border:1px solid #bbb2b2;height:75%;width:100%}#wrp[_ngcontent-%COMP%]{height:100%;overflow:hidden}.btns[_ngcontent-%COMP%]{position:absolute;margin:0 auto;bottom:10px;left:0;right:0;height:100px;display:flex;justify-content:center;align-items:center;z-index:9999999}.save-btn[_ngcontent-%COMP%]{height:50px;width:300px;background:#474fc8;color:#fff;width:30%;margin:0 4px}.clear-btn[_ngcontent-%COMP%], .save-btn[_ngcontent-%COMP%]{outline:none}.mi-table[_ngcontent-%COMP%]{display:grid;grid-template-rows:40px auto;border:1px solid #e4e4e4}.m-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:120px 180px 180px 120px 100px 100px 100px 100px 150px 150px;min-height:40px}.m-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.scroll-row[_ngcontent-%COMP%]{box-shadow:-2px 0 .5px .5px #e4e4e4}.m-row-h[_ngcontent-%COMP%]{border-bottom:1px solid #e4e4e4}.m-col[_ngcontent-%COMP%]{border-left:1px solid #e4e4e4}.m-col[_ngcontent-%COMP%]:first-child{border-left:none}.ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.error[_ngcontent-%COMP%]{color:red;width:100%;text-align:center}"]}),t}();function h(n,e,r,i){var o=t(function(t){if(":"===t[0]){var n=t.match(/^:([^:]+):(.+)$/);return[n[1],n[2]]}return["",t]}(r),2),a=o[0],c=o[1];null!=i?n.setAttribute(e,c,i,a):n.removeAttribute(e,c,a)}}}])}();