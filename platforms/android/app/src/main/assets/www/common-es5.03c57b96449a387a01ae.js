!function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,e,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void e(s)}u.done?n(c):Promise.resolve(c).then(r,i)}function e(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function u(t){n(a,i,o,u,c,"next",t)}function c(t){n(a,i,o,u,c,"throw",t)}u(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return u}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},u=function(){r.selectionEnd()},c=function(t){r.impact(t)}},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},NqGI:function(t,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return o}));var i=function(){var t=e(regeneratorRuntime.mark((function t(n,e,r,i,o){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return a.classList.add(t)})),o&&Object.assign(a,o),e.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(n,e,r,i,o){return t.apply(this,arguments)}}(),o=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},PYW1:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("ePDZ"),i=e("ItpF"),o=e("2c9M"),a=function(t,n){var e,a,u=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(s(),c(o,i)):s()}},c=function(t,n){e=t,a||(a=e);var i=e;Object(r.g)((function(){return i.classList.add("ion-activated")})),n()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;Object(r.g)((function(){return n.classList.remove("ion-activated")})),t&&a!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return u(t.currentX,t.currentY,o.a)},onMove:function(t){return u(t.currentX,t.currentY,o.b)},onEnd:function(){s(!0),Object(o.e)(),a=void 0}})}},"X5X/":function(n,e,r){"use strict";r.d(e,"a",(function(){return f}));var i=r("2Vo4"),o=r("lGQG"),a=r("24R0"),u=r("tudd"),c=r("8Y7J"),s=r("xgBC"),f=function(){var n=function(){function n(t,e,r,o){var a=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.storage=t,this.courier=e,this.auth=r,this.sys=o,this.orders=new i.a([]),t.ready().then((function(t){a.storage.get("orders").then((function(t){a.ordersMap=a.getOrdersMap(t),null==t&&a.getApiData(),a.orders.next(t),console.log("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438\u0437 \u0441\u0442\u043e\u0440\u0430\u0436\u0430",t),a.getInitialData(),a.orders.subscribe((function(t){a.saveOrders(t).then((function(){console.log("sys:: \u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d \u0432 \u0441\u0442\u043e\u0440\u043e\u0436: ",t)}))}))}))}))}var e,r,o;return e=n,(r=[{key:"getInitialData",value:function(){var t=this;this.storage.ready().then((function(){t.storage.keys().then((function(t){return console.log("\u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0441\u0442\u043e\u0440\u0430\u0436\u0435: ",t)})),t.storage.get("orders").then((function(t){console.log("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438\u0437 \u0441\u0442\u043e\u0440\u0430\u0436\u0430",t)})).catch((function(t){console.log(t)}))}))}},{key:"getApiData",value:function(){var t=this;return this.courier.getBalance(this.auth.userId,1).subscribe((function(n){t.sys.getOrders(n.res_more.map((function(t){return t.id.toString()}))).subscribe((function(n){t.saveOrders(n.orders).then((function(){t.storage.get("orders").then((function(n){t.orders.next(n)}))}))}))}))}},{key:"getOrders",value:function(t){var n=this;this.sys.getOrders(t).subscribe((function(t){n.orders.next(t.orders),n.saveOrders(t.orders)}))}},{key:"saveOrders",value:function(t){var n=this;return t&&t.forEach((function(t){n.ordersMap.set(Number(t.id),t)})),this.storage.set("orders",Array.from(this.ordersMap.values()))}},{key:"getOrdersMap",value:function(t){var n=new Map;return t&&t.forEach((function(t){n.set(Number(t.id),t)})),n}},{key:"rewriteOrders",value:function(t){this.ordersMap=this.getOrdersMap(t),this.orders.next(t)}}])&&t(e.prototype,r),o&&t(e,o),n}();return n.\u0275fac=function(t){return new(t||n)(c.Pb(s.b),c.Pb(a.a),c.Pb(o.a),c.Pb(u.a))},n.\u0275prov=c.Eb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},hcCc:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"d",(function(){return c}));var i=function(t,n){return null!==n.closest(t)},o=function(t){return"string"==typeof t&&t.length>0?(r=!0,(e="ion-color-"+t)in(n={"ion-color":!0})?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n):void 0;var n,e,r},a=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},u=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=e(regeneratorRuntime.mark((function t(n,e,r,i){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||u.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(n,e,r,i){return t.apply(this,arguments)}}()}}])}();