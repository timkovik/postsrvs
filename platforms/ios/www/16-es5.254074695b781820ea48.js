!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{F4UR:function(n,o,i){"use strict";i.r(o),i.d(o,"LoginPageModule",(function(){return E}));var s=i("SVse"),r=i("s7LF"),c=i("iInd"),h=i("bOtU"),a=i("sZkV"),b=i("sbs8"),u=i("GS7A"),d=i("IheW"),p=i("4zgz"),l=i("XNiG"),g=i("1G5W"),f=i("D279"),y=i("lGQG"),_=i("24R0"),v=i("6nr9"),x=i("ndxW"),w=i("tudd"),k=i("8Y7J"),C=i("1tbR");function O(e,t){1&e&&(k.Lb(0,"span",15),k.pc(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"),k.Kb())}function m(e,t){1&e&&(k.Lb(0,"div",16),k.Jb(1,"i-feather",17),k.Kb())}function P(e,t){if(1&e){var n=k.Mb();k.Lb(0,"div",8),k.Lb(1,"div",9),k.pc(2,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440"),k.Kb(),k.Lb(3,"div",10),k.oc(4,O,2,0,"span",11),k.Lb(5,"input",12),k.Sb("ngModelChange",(function(e){return k.jc(n),k.Ub().phone=e}))("input",(function(){return k.jc(n),k.Ub().changePhone()})),k.Kb(),k.Lb(6,"button",13),k.Sb("click",(function(){return k.jc(n),k.Ub().enterPhone()})),k.pc(7,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),k.Kb(),k.Kb(),k.oc(8,m,2,0,"div",14),k.Kb()}if(2&e){var o=k.Ub();k.yb(4),k.bc("ngIf",o.error_phone),k.yb(1),k.bc("showMaskTyped",!0)("ngModel",o.phone),k.yb(3),k.bc("ngIf",o.loader)}}function M(e,t){1&e&&(k.Lb(0,"span",15),k.pc(1,"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0434"),k.Kb())}function j(e,t){1&e&&(k.Lb(0,"div",16),k.Jb(1,"i-feather",17),k.Kb())}var I=function(e){return{"btn-resend":e}};function L(e,t){if(1&e){var n=k.Mb();k.Lb(0,"div",18),k.Lb(1,"div",9),k.pc(2,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434"),k.Kb(),k.Lb(3,"div",10),k.oc(4,M,2,0,"span",11),k.Lb(5,"input",19),k.Sb("ngModelChange",(function(e){return k.jc(n),k.Ub().code=e}))("input",(function(){return k.jc(n),k.Ub().changePhone()})),k.Kb(),k.Lb(6,"button",13),k.Sb("click",(function(){return k.jc(n),k.Ub().enterCode()})),k.pc(7,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),k.Kb(),k.Lb(8,"button",20),k.Sb("click",(function(){return k.jc(n),k.Ub().reEnterPhone()})),k.pc(9),k.Kb(),k.Kb(),k.oc(10,j,2,0,"div",14),k.Kb()}if(2&e){var o=k.Ub();k.yb(4),k.bc("ngIf",o.error_phone),k.yb(1),k.bc("showMaskTyped",!0)("ngModel",o.code),k.yb(3),k.bc("ngClass",k.ec(6,I,o.resend_dis)),k.yb(1),k.rc(" \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e ",o.dis_timer," "),k.yb(1),k.bc("ngIf",o.loader)}}var K,S,A=function(e){return{"btn-open":e}},U=[{path:"",component:(K=function(){function n(t,o,i,s,r,c,h,a,b,u,d){var p=this;e(this,n),this.auth=t,this.router=o,this.alert=i,this.plt=s,this.http=r,this.state$=c,this.AP=h,this.courier=a,this.settings=b,this.sys=u,this.sysMap=d,this.pl_window=!1,this.error_phone=!1,this.phone="",this.loader=!1,this.auth_step=!1,this.code=null,this.resend_dis=!1,this.dis_timer=null,this.$stopTimer=new l.a;var g=this;this.plt.ready().then((function(e){console.log("sys:: \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0433\u043e\u0442\u043e\u0432\u0430:",e),"android"==e&&p.AP.requestPermission(p.AP.PERMISSION.ACCESS_FINE_LOCATION),p.auth.version=AppVersion.version,p.auth.checkAuth().subscribe((function(e){"true"==e.success&&(p.auth.setUser(e.sync_id),p.settings.getSettings(e.sync_id),g.router.navigate(["map"]),g.auth.initLogin())}))}))}var o,i,s;return o=n,(i=[{key:"ngOnInit",value:function(){var e=this;this.isCheckedToWork().subscribe((function(t){t.checked&&(e.courier.checkedOnWork=!0)})),this.auth.getUserId()||(this.courier.checkedOnWork=!0),"true"==localStorage.debug&&(this.auth.isDebug=!0)}},{key:"isCheckedToWork",value:function(){var e={token:"l;sdfjkhglsoapl[",cId:localStorage.userId};return this.http.post(this.sys.proxy+"https://mobile.postsrvs.ru/admin/ajax/is_checked_to_work.php",e,{headers:{"Content-type":"application/json"}})}},{key:"scanAuth",value:function(){var e=this,t=this;this.auth.scanData().then((function(n){var o=n.text.slice(0,-4);localStorage.setItem("cId",o),t.auth.login({action:"auth",barcode:n.text}).subscribe((function(n){"true"==n.success?(t.auth.initLogin(),e.auth.setUser(n.sync_id),e.settings.getSettings(n.sync_id),t.router.navigate(["map"])):t.auth.showError(1)}))}))}},{key:"phoneAuth",value:function(){this.auth_step||(this.pl_window=!this.pl_window)}},{key:"enterPhone",value:function(){this.phone&&this.phone.length>9?(this.loader=!0,this.sendPhone()):this.error_phone=!0}},{key:"changePhone",value:function(){this.error_phone=!1}},{key:"sendPhone",value:function(){var e=this,t=this;this.sendPost(this.sys.proxy+"https://mok.flexcore.ru/client/registerP/","action=registerP&phone=8"+this.phone+"&type=courier").subscribe((function(n){"true"==n.success?t.authStep():e.showLoginError(4)}),(function(t){e.showLoginError(3)})),this.startTimer()}},{key:"sendPost",value:function(e,t){console.log("send_data",t);var n={headers:new d.e({"Access-Control-Allow-Origin":"*","Content-type":"application/x-www-form-urlencoded","Access-Control-Allow-Headers":"*"})};return this.http.post(e,t,n)}},{key:"authStep",value:function(){this.auth_step=!0,this.loader=!1}},{key:"enterCode",value:function(){var e=this;this.sendPost(this.sys.proxy+"https://mok.flexcore.ru/courier/authP/","action=authP&phone=8"+this.phone+"&code="+this.code+"&type=courier").subscribe((function(t){console.log("sendCode",t),"true"==t.success?e.login(t.user):e.error_phone=!0}))}},{key:"login",value:function(e){var t=this,n="33dbcda2db5311e39760309e88d17f08,"+e;localStorage.setItem("cId",e);var o=this;this.auth.login({action:"auth",barcode:n}).subscribe((function(e){"true"==e.success?(t.auth.setUser(e.sync_id),t.settings.getSettings(e.sync_id),o.router.navigate(["map"]),o.auth.initLogin()):o.auth.showError(1)}))}},{key:"showLoginError",value:function(e){switch(e){case 3:case 4:this.loader=!1,this.phone=null,this.pl_window=!1,this.auth.showError(e)}}},{key:"startTimer",value:function(){if(this.resend_dis)return!1;this.resend_dis=!0,this.dis_timer=30;var e=this;this.state$.interval_1ss.pipe(Object(g.a)(this.$stopTimer)).subscribe((function(){e.dis_timer--,0==e.dis_timer&&(e.dis_timer=null,e.$stopTimer.next(),e.resend_dis=!1)}))}},{key:"reEnterPhone",value:function(){if(this.resend_dis)return!1;this.sendPhone()}},{key:"changeCode",value:function(){}}])&&t(o.prototype,i),s&&t(o,s),n}(),K.\u0275fac=function(e){return new(e||K)(k.Ib(y.a),k.Ib(c.g),k.Ib(a.a),k.Ib(a.I),k.Ib(d.b),k.Ib(x.a),k.Ib(p.a),k.Ib(_.a),k.Ib(v.a),k.Ib(w.a),k.Ib(f.a))},K.\u0275cmp=k.Cb({type:K,selectors:[["app-login"]],decls:11,vars:7,consts:[[1,"lg-wrp"],[1,"lg-btn"],[1,"lg-login",3,"click"],[1,"lg-login","login-phone",3,"ngClass"],[1,"btn-wrp"],[1,"btn-title",3,"click"],["class","btn-body phone-b",4,"ngIf"],["class","btn-body code-b",4,"ngIf"],[1,"btn-body","phone-b"],[1,"bi-title"],[1,"bi-inp"],["class","error-phone",4,"ngIf"],["type","tel","prefix","+7 ","mask","(000) 000 00 00",1,"phone-inp",3,"showMaskTyped","ngModel","ngModelChange","input"],[1,"enter-phone",3,"click"],["class","sh-icons",4,"ngIf"],[1,"error-phone"],[1,"sh-icons"],["name","loader"],[1,"btn-body","code-b"],["type","tel","mask","00-00",1,"phone-inp",3,"showMaskTyped","ngModel","ngModelChange","input"],[1,"enter-phone",3,"ngClass","click"]],template:function(e,t){1&e&&(k.Lb(0,"ion-content"),k.Lb(1,"div",0),k.Lb(2,"div",1),k.Lb(3,"button",2),k.Sb("click",(function(){return t.scanAuth()})),k.pc(4," \u0412\u043e\u0439\u0442\u0438 \u043f\u043e QR-\u043a\u043e\u0434\u0443 "),k.Kb(),k.Lb(5,"button",3),k.Lb(6,"div",4),k.Lb(7,"div",5),k.Sb("click",(function(){return t.phoneAuth()})),k.pc(8,"\u0412\u043e\u0439\u0442\u0438 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),k.Kb(),k.oc(9,P,9,4,"div",6),k.oc(10,L,11,8,"div",7),k.Kb(),k.Kb(),k.Kb(),k.Kb(),k.Kb()),2&e&&(k.yb(3),k.bc("@openClose1",t.auth_step?"closed":"open"),k.yb(2),k.bc("ngClass",k.ec(5,A,t.pl_window))("@openClose",t.pl_window?"open":"closed"),k.yb(4),k.bc("ngIf",!t.auth_step),k.yb(1),k.bc("ngIf",t.auth_step))},directives:[a.i,s.j,s.l,h.a,r.a,r.f,r.g,C.a],styles:[".lg-wrp[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0}.lg-btn[_ngcontent-%COMP%], .lg-wrp[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.lg-btn[_ngcontent-%COMP%]{min-height:22%;width:80%;flex-direction:column}.lg-login[_ngcontent-%COMP%]{outline:none;height:50px;width:100%;background:no-repeat;box-shadow:0 0 1px 1px #bdbdbd;border-radius:3px;color:#4a4a4a;font-size:19px;margin:5px 0}.login-phone[_ngcontent-%COMP%]{overflow:hidden;padding:0}.btn-title[_ngcontent-%COMP%]{color:#4a4a4a;font-size:19px}.btn-wrp[_ngcontent-%COMP%]{height:100%;display:grid;grid-template-rows:50px auto}.btn-title[_ngcontent-%COMP%]{height:50px;width:100%}.btn-body[_ngcontent-%COMP%], .btn-title[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.btn-body[_ngcontent-%COMP%]{flex-direction:column;position:relative}.error-phone[_ngcontent-%COMP%]{font-size:15px;color:#c50000}.phone-inp[_ngcontent-%COMP%]{margin:6px 0 0;height:45px;border:none;box-shadow:0 0 1px 1px #bdbdbd;border-radius:3px;text-align:center}.btn-open[_ngcontent-%COMP%]   .btn-title[_ngcontent-%COMP%]{border-bottom:1px solid #bdbdbd}.enter-phone[_ngcontent-%COMP%]{margin:8px 0 0;height:45px;border:none;background:none;box-shadow:0 0 1px 1px #bdbdbd;border-radius:3px;text-align:center;font-size:20px;width:100%;color:#2b637e;outline:none}.bi-inp[_ngcontent-%COMP%]{flex-direction:column;padding:12px 0 0}.bi-inp[_ngcontent-%COMP%], .sh-icons[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.sh-icons[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.1);font-size:35px;color:#2b637e}.btn-resend[_ngcontent-%COMP%]{color:#8d999e}.notification[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;background:rgba(192,26,26,.472);min-height:30px;color:#d21212;font-size:15px;z-index:99;display:flex;justify-content:center;align-items:center}"],data:{animation:[Object(u.j)("openClose",[Object(u.g)("open",Object(u.h)({height:"264px"})),Object(u.g)("closed",Object(u.h)({height:"50px"})),Object(u.i)("open => closed",[Object(u.e)("0.5s")]),Object(u.i)("closed => open",[Object(u.e)("0.5s")])]),Object(u.j)("openClose1",[Object(u.g)("open",Object(u.h)({height:"50px"})),Object(u.g)("closed",Object(u.h)({height:"0px",display:"none"})),Object(u.i)("open => closed",[Object(u.e)("0.5s")]),Object(u.i)("closed => open",[Object(u.e)("0.5s")])])]}}),K)}],E=((S=function t(){e(this,t)}).\u0275mod=k.Gb({type:S}),S.\u0275inj=k.Fb({factory:function(e){return new(e||S)},imports:[[b.a,s.c,r.b,a.E,h.b.forRoot(),c.i.forChild(U)]]}),S)}}])}();