(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{SdKL:function(t,n,e){"use strict";e.r(n),e.d(n,"CourierPageModule",(function(){return gt}));var o=e("ltgo"),i=e("7KAL"),s=e("SVse"),c=e("wq8c"),r=e.n(c),a=e("8Y7J"),b=e("s7LF"),l=e("iInd"),d=e("sZkV"),u=e("sbs8"),h=e("mrSG"),g=e("GS7A"),p=e("zA0m"),f=e("hnS/"),m=e("xoVG"),_=e("/hfl"),C=e("XNiG"),O=e("1G5W"),M=e("lJxs"),w=e("D279"),P=e("dKCF");let L=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Cb({type:t,selectors:[["app-help"]],decls:16,vars:0,consts:[[1,"body"],[1,"title"],["lines","none"],["name","ellipsis-vertical","slot","start"],["src","../../../assets/show-actions-helper.svg","slot","start"],["name","search","slot","start"]],template:function(t,n){1&t&&(a.Lb(0,"div",0),a.Lb(1,"h5",1),a.pc(2,"\u041f\u043e\u043c\u043e\u0449\u044c"),a.Kb(),a.Lb(3,"ion-list"),a.Lb(4,"ion-item",2),a.Jb(5,"ion-icon",3),a.Lb(6,"ion-label"),a.pc(7,"\u0414\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0437\u0430\u0436\u043c\u0438\u0442\u0435 \u0437\u0430\u043a\u0430\u0437 \u0438 \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435"),a.Kb(),a.Kb(),a.Lb(8,"ion-item",2),a.Jb(9,"ion-icon",4),a.Lb(10,"ion-label"),a.pc(11,"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0434\u043e\u043f.\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437 \u0434\u0432\u0430\u0436\u0434\u044b \u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0433\u043e\u043b\u0443\u0431\u0443\u044e \u043a\u043d\u043e\u043f\u043a\u0443"),a.Kb(),a.Kb(),a.Lb(12,"ion-item",2),a.Jb(13,"ion-icon",5),a.Lb(14,"ion-label"),a.pc(15,"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0439\u0442\u0438 \u0437\u0430\u043a\u0430\u0437 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443,\u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u0438\u043b\u0438 \u0430\u0434\u0440\u0435\u0441\u0443, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0443\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u043f\u043e \u0437\u0430\u043a\u0430\u0437\u0430\u043c"),a.Kb(),a.Kb(),a.Kb(),a.Kb())},directives:[d.q,d.o,d.l,d.p],styles:[".body[_ngcontent-%COMP%]{padding:8px 10px 10px 13px}.body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#2b637e;font-size:14px;font-weight:700}.body[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0}.body[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0 5px 0 0;font-size:3em}.body[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px;white-space:normal}"]}),t})();var k=e("1tbR");let v=(()=>{class t{constructor(t,n){this.sysMap=t,this.viewCtrl=n}ngOnInit(){this.note=localStorage.getItem(this.orderId)}saveNote(){localStorage.setItem(this.orderId,this.note),this.sysMap.infoUpdated.next(),this.viewCtrl.dismiss()}}return t.\u0275fac=function(n){return new(n||t)(a.Ib(w.a),a.Ib(d.J))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-note"]],inputs:{orderId:"orderId"},decls:4,vars:1,consts:[["placeholder","\u0412\u0430\u0448\u0430 \u0437\u0430\u043c\u0435\u0442\u043a\u0430 \u043e \u0437\u0430\u043a\u0430\u0437\u0435",3,"ngModel","ngModelChange"],[3,"click"],["name","save"]],template:function(t,n){1&t&&(a.Lb(0,"ion-item"),a.Lb(1,"ion-textarea",0),a.Sb("ngModelChange",(function(t){return n.note=t})),a.Kb(),a.Kb(),a.Lb(2,"ion-button",1),a.Sb("click",(function(){return n.saveNote()})),a.Jb(3,"i-feather",2),a.Kb()),2&t&&(a.yb(1),a.bc("ngModel",n.note))},directives:[d.o,d.A,d.M,b.f,b.g,d.f,k.a],styles:[""],changeDetection:0}),t})();var y=e("lGQG"),I=e("24R0"),K=e("6nr9"),x=e("ndxW"),S=e("tudd"),j=e("X5X/");const U=["sInput"];function D(t,n){1&t&&(a.Lb(0,"ion-button"),a.Lb(1,"i"),a.pc(2,"G"),a.Kb(),a.Kb())}function $(t,n){if(1&t){const t=a.Mb();a.Lb(0,"ion-button",2),a.Sb("click",(function(){return a.jc(t),a.Ub().submitOrder()})),a.Jb(1,"i-feather",25),a.Kb()}}function R(t,n){if(1&t){const t=a.Mb();a.Lb(0,"ion-button",2),a.Sb("click",(function(){return a.jc(t),a.Ub().endWork()})),a.Jb(1,"i-feather",26),a.Kb()}}function V(t,n){if(1&t&&(a.Lb(0,"span"),a.pc(1),a.Vb(2,"date"),a.Kb()),2&t){const t=a.Ub().$implicit;a.yb(1),a.rc("c ",a.Yb(2,1,t.datetime_from,"H:mm","ru")," ")}}function J(t,n){if(1&t&&(a.Lb(0,"span"),a.pc(1),a.Vb(2,"date"),a.Kb()),2&t){const t=a.Ub().$implicit;a.yb(1),a.rc("\u0434\u043e ",a.Yb(2,1,t.datetime_to,"H:mm","ru"),"")}}function z(t,n){if(1&t){const t=a.Mb();a.Lb(0,"div",40),a.Lb(1,"ion-button",41),a.Sb("click",(function(n){a.jc(t);const e=a.Ub().$implicit;return a.Ub(2).note(n,e.id),n.stopPropagation()})),a.Jb(2,"ion-icon",42),a.pc(3," \u0417\u0430\u043c\u0435\u0442\u043a\u0438 "),a.Kb(),a.Lb(4,"ion-button",43),a.Sb("click",(function(n){a.jc(t);const e=a.Ub().$implicit;return a.Ub(2).showRoute(e),n.stopPropagation()})),a.Jb(5,"ion-icon",44),a.pc(6," \u041c\u0430\u0440\u0448\u0440\u0443\u0442 "),a.Kb(),a.Lb(7,"ion-button",45),a.Sb("click",(function(n){a.jc(t);const e=a.Ub().$implicit;return a.Ub(2).phoneClick("init",e),n.stopPropagation()})),a.Jb(8,"ion-icon",46),a.pc(9," \u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c "),a.Kb(),a.Kb()}}const W=function(t){return{overdue:t}},E=function(t){return{turned:t}};function T(t,n){if(1&t){const t=a.Mb();a.Lb(0,"ion-item",31),a.Sb("click",(function(){a.jc(t);const e=n.$implicit;return a.Ub(2).selectOrder(e.id)}))("longPress",(function(){return a.jc(t),a.Ub(2).vibr()}))("hold",(function(){return a.jc(t),a.Ub(2).vibr()}))("cdkDragStarted",(function(){return a.jc(t),a.Ub(2).vibr()})),a.Lb(1,"ion-label"),a.Lb(2,"div",32),a.Lb(3,"span"),a.Lb(4,"span",33),a.pc(5),a.Kb(),a.Lb(6,"span"),a.pc(7),a.Kb(),a.Kb(),a.Lb(8,"span",33),a.oc(9,V,3,5,"span",4),a.oc(10,J,3,5,"span",4),a.Kb(),a.Kb(),a.Lb(11,"div",34),a.pc(12),a.Kb(),a.Lb(13,"div",35),a.pc(14),a.Kb(),a.oc(15,z,10,0,"div",36),a.Kb(),a.Jb(16,"ion-icon",37),a.Lb(17,"div",38),a.Sb("click",(function(e){a.jc(t);const o=n.$implicit;return o.show=!o.show,e.stopPropagation()})),a.Jb(18,"ion-icon",39),a.Kb(),a.Kb()}if(2&t){const t=n.$implicit,e=a.Ub(2);a.bc("ngClass",a.ec(12,W,("1"==t.overdue||1==t.required)&&1==t.status_id))("cdkDragStartDelay",500)("cdkDragDisabled",e.noDrag),a.yb(1),a.bc("@openClose",t.show?"open":"closed"),a.yb(4),a.rc(" ",t.client_id,""),a.yb(2),a.rc(" (",t.company,")"),a.yb(2),a.bc("ngIf",t.datetime_from),a.yb(1),a.bc("ngIf",t.datetime_to),a.yb(2),a.qc(t.client_fio),a.yb(2),a.qc(t.client_address),a.yb(1),a.bc("ngIf",t.show),a.yb(3),a.bc("ngClass",a.ec(14,E,1==t.show))}}function A(t,n){if(1&t){const t=a.Mb();a.Lb(0,"div",27),a.Lb(1,"ion-searchbar",28),a.Sb("ionChange",(function(n){return a.jc(t),a.Ub().onSearchChange(n)}))("ngModelChange",(function(n){return a.jc(t),a.Ub().searchString=n})),a.Kb(),a.Lb(2,"cdk-virtual-scroll-viewport",29),a.Sb("cdkDropListDropped",(function(n){return a.jc(t),a.Ub().drop(n)})),a.oc(3,T,19,16,"ion-item",30),a.Vb(4,"async"),a.Kb(),a.Kb()}if(2&t){const t=a.Ub();a.yb(1),a.bc("debounce",250)("ngModel",t.searchString),a.yb(2),a.bc("ngForOf",a.Wb(4,3,t.orders_c))}}function N(t,n){if(1&t&&(a.Lb(0,"div",47),a.Lb(1,"span"),a.pc(2,"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435:"),a.Kb(),a.pc(3),a.Kb()),2&t){const t=a.Ub();a.yb(3),a.rc(" ",null==t.courier.sortOrders?null:t.courier.sortOrders.g_process," ")}}function q(t,n){if(1&t&&(a.Lb(0,"div",47),a.Lb(1,"span"),a.pc(2,"\u041d\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e:"),a.Kb(),a.Lb(3,"span",48),a.pc(4),a.Kb(),a.Kb()),2&t){const t=a.Ub();a.yb(4),a.qc(t.courier.sortOrders.g_fail)}}function G(t,n){if(1&t&&(a.Lb(0,"div",47),a.Lb(1,"span"),a.pc(2,"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e:"),a.Kb(),a.pc(3),a.Kb()),2&t){const t=a.Ub();a.yb(3),a.rc(" ",t.courier.sortOrders.g_done," ")}}function F(t,n){if(1&t){const t=a.Mb();a.Lb(0,"ion-button",51),a.Sb("click",(function(){return a.jc(t),a.Ub(2).auth.check("In")})),a.pc(1," \u041f\u0440\u0438\u0435\u0445\u0430\u043b \u043d\u0430 \u0441\u043a\u043b\u0430\u0434 "),a.Kb()}}function B(t,n){if(1&t){const t=a.Mb();a.Lb(0,"ion-button",51),a.Sb("click",(function(){return a.jc(t),a.Ub(2).auth.check("Out")})),a.pc(1," \u0423\u0435\u0445\u0430\u043b \u0441\u043e \u0441\u043a\u043b\u0430\u0434\u0430 "),a.Kb()}}function H(t,n){if(1&t&&(a.Lb(0,"div",49),a.oc(1,F,2,0,"ion-button",50),a.oc(2,B,2,0,"ion-button",50),a.Kb()),2&t){const t=a.Ub();a.yb(1),a.bc("ngIf","checkedundefined"==t.auth.checkState),a.yb(1),a.bc("ngIf","checkedIn"==t.auth.checkState)}}function X(t,n){if(1&t){const t=a.Mb();a.Lb(0,"button",56),a.Sb("click",(function(){return a.jc(t),a.Ub(2).startRoute()})),a.pc(1," \u041d\u0430\u0447\u0430\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442 "),a.Kb()}}function Y(t,n){if(1&t){const t=a.Mb();a.Lb(0,"button",57),a.Sb("click",(function(){return a.jc(t),a.Ub(2).stopRoute()})),a.pc(1," \u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442 "),a.Kb()}}function Q(t,n){1&t&&(a.Lb(0,"span"),a.pc(1,"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u0436\u0438\u043c"),a.Kb())}function Z(t,n){1&t&&(a.Lb(0,"span"),a.pc(1,"\u0420\u0443\u0447\u043d\u043e\u0439 \u0440\u0435\u0436\u0438\u043c"),a.Kb())}const tt=function(t){return{manual_btn:t}};function nt(t,n){if(1&t){const t=a.Mb();a.Lb(0,"button",58),a.Sb("click",(function(){return a.jc(t),a.Ub(2).manualRoute()})),a.oc(1,Q,2,0,"span",4),a.oc(2,Z,2,0,"span",4),a.Kb()}if(2&t){const t=a.Ub(2);a.bc("ngClass",a.ec(3,tt,t.state$.manual_route)),a.yb(1),a.bc("ngIf",t.state$.manual_route),a.yb(1),a.bc("ngIf",!t.state$.manual_route)}}function et(t,n){if(1&t&&(a.Lb(0,"div",52),a.oc(1,X,2,0,"button",53),a.oc(2,Y,2,0,"button",54),a.oc(3,nt,3,5,"button",55),a.Kb()),2&t){const t=a.Ub();a.yb(1),a.bc("ngIf",!t.btn_go&&!t.state$.manual_route&&t.auth.routingModeAuto),a.yb(1),a.bc("ngIf",t.btn_go&&!t.state$.manual_route),a.yb(1),a.bc("ngIf","auto"==t.auth.getMode()||"auto_wo"==t.auth.getMode())}}function ot(t,n){if(1&t){const t=a.Mb();a.Lb(0,"div",59),a.Lb(1,"div",60),a.Lb(2,"div",61),a.pc(3,"\u041f\u0440\u043e\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0448\u0442\u0440\u0438\u0445\u043a\u043e\u0434"),a.Kb(),a.Lb(4,"input",62,63),a.Sb("change",(function(){return a.jc(t),a.Ub().scanInputChange()}))("ngModelChange",(function(n){return a.jc(t),a.Ub().scanInput=n})),a.Kb(),a.Kb(),a.Kb()}if(2&t){const t=a.Ub();a.yb(4),a.bc("ngModel",t.scanInput)}}function it(t,n){1&t&&(a.Lb(0,"div",64),a.Jb(1,"ion-spinner",65),a.Kb())}function st(t,n){if(1&t&&(a.Lb(0,"ion-item"),a.Jb(1,"ion-radio",71),a.Lb(2,"ion-label"),a.pc(3),a.Kb(),a.Kb()),2&t){const t=n.$implicit;a.yb(1),a.cc("value",t),a.yb(2),a.qc(t)}}function ct(t,n){if(1&t){const t=a.Mb();a.Lb(0,"ion-list"),a.Lb(1,"ion-radio-group",69),a.Sb("ngModelChange",(function(n){return a.jc(t),a.Ub(2).selectedPhone=n})),a.Lb(2,"ion-list-header"),a.Lb(3,"ion-label"),a.pc(4,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440"),a.Kb(),a.Kb(),a.oc(5,st,4,2,"ion-item",70),a.Kb(),a.Kb()}if(2&t){const t=a.Ub(2);a.yb(1),a.bc("ngModel",t.selectedPhone),a.yb(4),a.bc("ngForOf",t.orderPhones)}}function rt(t,n){if(1&t){const t=a.Mb();a.Lb(0,"button",2),a.Sb("click",(function(){a.jc(t);const n=a.Ub(2);return n.phoneClick("phone",n.order)})),a.pc(1," \u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c \u0441\u043e \u0441\u0432\u043e\u0435\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 "),a.Kb()}}function at(t,n){if(1&t){const t=a.Mb();a.Lb(0,"button",2),a.Sb("click",(function(){a.jc(t);const n=a.Ub(2);return n.phoneClick("operator",n.order)})),a.pc(1," \u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ip-\u0448\u043b\u044e\u0437 "),a.Kb()}}function bt(t,n){if(1&t){const t=a.Mb();a.Lb(0,"div",66),a.Lb(1,"div",67),a.Lb(2,"i-feather",68),a.Sb("click",(function(){a.jc(t);const n=a.Ub();return n.callWindow=!n.callWindow})),a.Kb(),a.oc(3,ct,6,2,"ion-list",4),a.oc(4,rt,2,0,"button",8),a.oc(5,at,2,0,"button",8),a.Kb(),a.Kb()}if(2&t){const t=a.Ub();a.yb(3),a.bc("ngIf",t.orderPhones.length>1),a.yb(1),a.bc("ngIf","robotPhone"==t.settings.rules.phoneMode||"phone"==t.settings.rules.phoneMode),a.yb(1),a.bc("ngIf","robotPhone"==t.settings.rules.phoneMode||"robot"==t.settings.rules.phoneMode)}}const lt=function(t){return{m_wrp:t}},dt=function(){return[]};let ut=(()=>{class t{constructor(t,n,e,o,i,s,c,r,a,b,l,d,u,h){this.courier=t,this.router=n,this.state$=e,this.auth=o,this.bs=i,this.vbr=s,this.settings=c,this.sys=r,this.data=a,this.popoverController=b,this.map=l,this.orderService=d,this.CL=u,this.network=h,this.orders=null,this.statuses=null,this.selectedTab=1,this.ordersInit=!1,this.loader=!1,this.local_stop$=new C.a,this.localcheck=!1,this.g_done=0,this.g_process=0,this.g_fail=0,this.lvl_ind={width:"0%"},this.btn_go=!1,this.notification=null,this.subBtnCond=!0,this.scanView=!1,this.scan_process=!1,this.find_order=!1,this.isWorkEnded=!1,this.searchString="",this.slicer=this.howSlice(),this.callWindow=!1,this.noDrag=!1,this.segment=[1];let g=this;this.initContent(),null!=this.state$.position.getValue()&&this.startRoute(!1),this.state$.state.pipe(Object(O.a)(this.local_stop$)).subscribe(t=>{"orders_init"==t&&g.initContent()}),this.initConditions(),this.ord=this.data.orders.asObservable(),this.prepareOrdersList()}initConditions(){switch(this.auth.getMode()){case"fullAuto":this.state$.confirmed||(this.subBtnCond=!0);break;case"auto":this.subBtnCond=!1;break;case"fullHand":this.state$.confirmed||(this.subBtnCond=!0);break;case"hand":this.subBtnCond=!1}}ngAfterViewChecked(){this.Drop_L.autoScrollDisabled=!1,this.DragItems.changes.subscribe(t=>{this.DragItems.forEach(t=>{t.dragStartDelay={touch:500,mouse:100}})})}ngOnInit(){this.settings.checkout=!!(this.settings.rules.storeCheckMode-0),this.auth.checkState=this.settings.checkout?"checked"+localStorage.check:"checkedOut","hand"==this.settings.rules.appMode&&(this.state$.manual_route=!0),this.settings.rules.appMode.toLowerCase().includes("auto")&&(this.noDrag=!0),this.data.orders.subscribe(t=>{this.courier.count_orders(t)})}scanInputStart(){let t=this;this.scanView=!this.scanView,this.loader=!0,"scan"==this.auth.getScanMode()?t.courier.findOrder(this.scanInput).subscribe(n=>{t.scanInput=null,"true"==n.success?t.courier.sumbitOrder(n.order_id).subscribe(n=>{console.log("courier_page sbo resp",n),n?t.submitOrder():t.scanView=!1,t.loader=!1}):(t.auth.showError(2),t.loader=!1,t.scanView=!1),t.state$.confirmed=!0,t.orders.forEach(n=>{"0"==n.confirm&&(t.state$.confirmed=!1)})}):t.loader=!1,this.scan_process=!1}scanInputChange(){console.log("inputData",this.scanInput);let t=this;if(this.scan_process)return!1;this.scan_process=!0,this.find_order?setTimeout((function(){t.scanSearch()}),1500):setTimeout((function(){t.scanInputStart()}),1500)}submitOrder(){var t=this;if(console.log("SUBMIT_ORDER_CALL"),"scan"==this.auth.getScanMode())return this.scanView=!this.scanView,setTimeout((function(){t.sInput.nativeElement.focus()}),500),!1;this.bs.scan().then(n=>{console.log("SCAN_RETURN_DATA",n),""!=n.text?(t.loader=!0,t.courier.findOrder(n.text).subscribe(n=>{"true"==n.success?t.courier.sumbitOrder(n.order_id).subscribe(n=>{n&&t.submitOrder(),t.loader=!1}):(t.auth.showError(2),t.loader=!1),t.state$.confirmed=!0,t.orders.forEach(n=>{"0"==n.confirm&&(t.state$.confirmed=!1)})})):t.loader=!1})}ordersListChanged(t){this.orders=t;let n=new Array;t.forEach(t=>{1==Number(t.status_id)&&n.push(t.id)}),this.state$.old_way=n}ngOnDestroy(){this.local_stop$.next(),this.state$.orders_page_check=!1}manualRoute(){this.courier.changeRouteMode(this.state$.manual_route?"auto":"fullHand"),this.vbr.vibrate(300)}initContent(){var t=this;this.state$.orders.subscribe(()=>{this.orders=this.state$.orders_data,console.log("sys::init\u0421ontent orders",this.orders),this.statuses=[{id:4,status:"\u041d\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e"},{id:5,status:"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e"},{id:6,status:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e"}],this.ordersInit=!0,t.count_orders()})}getStatus(t){return this.courier.getStatus(t)}selectOrder(t){this.router.navigate(["/order",t])}tabSelect(t){this.selectedTab=t}customTrackBy(t,n){return t}getCondition(t){switch(this.selectedTab){case 1:if(1==t)return!0;break;case 2:if(5==t||6==t)return!0;break;case 3:if(4==t)return!0}return!1}count_orders(t=this.courier.ordersInfo){let n=0,e=0,o=0;for(let i=0;i<t.length;i++)switch(String(t[i].status_id)){case"4":o++;break;case"5":case"6":n++;break;case"1":e++}this.g_done=n,this.g_process=e,this.g_fail=o}startRoute(t=!0,n=!1){let e=this;this.auth.checkAuth().subscribe(o=>{"true"==o.success&&e.sendStartRoute(o.sync_id,t,n)})}stopRoute(){this.startRoute(!1,!0)}sendStartRoute(t,n,e){let o={cid:t,lt:this.state$.position.getValue().lt,lg:this.state$.position.getValue().lg};n&&(o.start="1"),e&&(o.stop="1");let i=this;this.auth.sendPost("geo/route_start.php",o).subscribe(t=>{1==t.success&&(i.btn_go=!0,"stop"==t.result&&(i.btn_go=!1))})}scanSearch(){let t=this;this.scanView=!this.scanView,this.loader=!0,"scan"==this.auth.getScanMode()?t.courier.findOrder(this.scanInput).subscribe(n=>{t.scanInput=null,"true"==n.success?t.selectOrder(n.order_id):t.auth.showError(2),t.loader=!1,t.scanView=!1}):t.loader=!1,this.scan_process=!1,this.find_order=!1}findOrder(){let t=this;if("scan"==this.auth.getScanMode())return this.scanView=!this.scanView,this.find_order=!0,setTimeout((function(){t.sInput.nativeElement.focus()}),500),!1;this.bs.scan().then(n=>{t.courier.findOrder(n.text).subscribe(n=>{"true"==n.success?t.selectOrder(n.order_id):t.auth.showError(2)})})}endWork(){this.courier.endWork().subscribe(t=>{t.success&&(this.isWorkEnded=!0,this.sys.presentToast("\u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0434\u0435\u043d\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d","success"))},t=>{this.sys.presentToast("\u041e\u0448\u0438\u0431\u043a\u0430: "+t.message,"danger")})}doRefresh(){this.data.getApiData()}segmentChanged(t){let n=[Number(t.target.value)];"5"==t.target.value&&n.push(6),this.segment=n,this.prepareOrdersList(n)}onSearchChange(t){this.searchString=t.target.value,this.prepareOrdersList(this.segment)}prepareOrdersList(t=this.segment){this.orders_c=this.ord.pipe(Object(M.a)(n=>n&&n.filter(n=>t.includes(Number(n.status_id))).filter(t=>t.client_address.toLowerCase().includes(this.searchString.toLowerCase())||t.client_fio.toLowerCase().includes(this.searchString.toLowerCase())||t.client_id.toLowerCase().includes(this.searchString.toLowerCase())).slice(this.slicer)),Object(M.a)(t=>(t.forEach(t=>{t.show=!1}),this.orders=t,t)))}howSlice(){return"standart"===this.settings.rules.typeRoute?0:1}popoverHelp(t){return Object(h.a)(this,void 0,void 0,(function*(){return yield this.popoverController.create({component:L,event:t,translucent:!0,cssClass:"help"})}))}showHelp(t){return Object(h.a)(this,void 0,void 0,(function*(){(yield this.popoverHelp(t)).present()}))}showRoute(t){this.map.showRoute(t)}drop(t){Object(o.d)(this.orders,t.previousIndex,t.currentIndex),this.data.rewriteOrders(this.orders),console.log("sys:: \u043c\u0430\u0441\u0441\u0438\u0432 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f: ",this.orders)}popoverNote(t,n){return Object(h.a)(this,void 0,void 0,(function*(){return yield this.popoverController.create({component:v,event:t,translucent:!0,cssClass:"help",componentProps:{orderId:n}})}))}note(t,n){return Object(h.a)(this,void 0,void 0,(function*(){(yield this.popoverNote(t,n)).present()}))}phoneClick(t,n){this.order=n,this.orderPhones=this.parsePhone(n.client_phone);let e=this.parsePhone(n.courier_phone)[0];switch(1==this.orderPhones.length&&(this.selectedPhone=this.orderPhones[0]),t){case"init":this.callWindow=!this.callWindow;break;case"phone":this.CL.callNumber(this.selectedPhone,!1).then(()=>{}),this.callWindow=!1,this.order=void 0;break;case"operator":if("none"==this.network.type)return this.phoneClick("phone",n),!1;this.selectedPhone&&e&&(this.auth.sendPost("orders",{action:"send_phone",client_number:this.selectedPhone,cur_number:e}).subscribe(t=>{console.log("call_subs",t)}),this.auth.showError(9),this.callWindow=!1),this.order=void 0}}parsePhone(t){let n=[];for(t=t.replace(/\D+/g,"");t.length>7;)t=this.normalizePhoneNumber(t),n.push(t.slice("",11)),t=t.slice(11);return n}normalizePhoneNumber(t){return"8"!==t[0]&&"7"!==t[0]&&11!==t.length&&(t="8"+t),7!=t.length&&10!=t.length||(t="8"+t),"8"!==t[0]&&11==t.length&&(t="8"+t.slice(1)),t}vibr(t){this.vbr.vibrate(10),console.log("sys:: *\u0412\u0438\u0431\u0438\u0440\u0430\u0446\u0438\u044f*")}}return t.\u0275fac=function(n){return new(n||t)(a.Ib(I.a),a.Ib(l.g),a.Ib(x.a),a.Ib(y.a),a.Ib(p.a),a.Ib(_.a),a.Ib(K.a),a.Ib(S.a),a.Ib(j.a),a.Ib(d.J),a.Ib(w.a),a.Ib(P.a),a.Ib(f.a),a.Ib(m.a))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-courier"]],viewQuery:function(t,n){var e;1&t&&(a.tc(U,!0),a.tc(o.b,!0),a.tc(o.a,!0)),2&t&&(a.hc(e=a.Tb())&&(n.sInput=e.first),a.hc(e=a.Tb())&&(n.Drop_L=e.first),a.hc(e=a.Tb())&&(n.DragItems=e))},decls:44,vars:18,consts:[[1,"toolbar"],["slot","start"],[3,"click"],["name","search","slot","start"],[4,"ngIf"],["size","small","color","dark"],["slot","primary"],["slot","icon-only","name","refresh-circle-sharp"],[3,"click",4,"ngIf"],["slot","icon-only","name","help-circle-outline"],[1,"c-wrp",3,"ngClass"],["value","1",3,"ionChange"],["value","1"],["value","5"],["value","4"],["class","c-body",4,"ngIf"],[1,"ion-padding","sub-footer"],[1,"orders-lable","ion-justify-content-between"],[1,"ion-margin-vertical"],["class","ion-margin",4,"ngIf"],["class","checking",4,"ngIf"],["class","start-route",4,"ngIf"],["class","scanWindow",4,"ngIf"],["class","shirm",4,"ngIf"],["class","call-window",4,"ngIf"],["name","box"],["name","check-square"],[1,"c-body"],["placeholder","\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043a\u0430\u0437\u0430\u043c","inputmode","text","animated","",3,"debounce","ngModel","ionChange","ngModelChange"],["cdkDropList","","itemSize","50",2,"height","100%","width","100%","min-height","50vh",3,"cdkDropListDropped"],["appLongPress","","cdkDrag","",3,"ngClass","cdkDragStartDelay","cdkDragDisabled","click","longPress","hold","cdkDragStarted",4,"ngFor","ngForOf"],["appLongPress","","cdkDrag","",3,"ngClass","cdkDragStartDelay","cdkDragDisabled","click","longPress","hold","cdkDragStarted"],[1,"title"],[1,"client-id"],[1,"name"],[1,"addr"],["class","actions",4,"ngIf"],["name","ellipsis-vertical","slot","start",1,"points"],[1,"actions-button",3,"click"],["src","../../../assets/actions-arrows.svg",3,"ngClass"],[1,"actions"],["fill","solid","size","default","id","light-blue-button",3,"click"],["slot","start","name","document"],["fill","solid","size","default","id","light-purple-button",3,"click"],["slot","start","name","location-outline"],["fill","solid","size","default","id","light-green-button",3,"click"],["slot","start","name","call-outline"],[1,"ion-margin"],[2,"color","red"],[1,"checking"],["expand","full","fill","solid",3,"click",4,"ngIf"],["expand","full","fill","solid",3,"click"],[1,"start-route"],["class","satrt-r-btn",3,"click",4,"ngIf"],["class","satrt-r-btn sr-stop",3,"click",4,"ngIf"],["class","satrt-r-btn find-o-btn",3,"ngClass","click",4,"ngIf"],[1,"satrt-r-btn",3,"click"],[1,"satrt-r-btn","sr-stop",3,"click"],[1,"satrt-r-btn","find-o-btn",3,"ngClass","click"],[1,"scanWindow"],[1,"sw-wrp"],[1,"sw-title"],["autofocus","",1,"ionInp",3,"ngModel","change","ngModelChange"],["sInput",""],[1,"shirm"],["name","lines-small"],[1,"call-window"],[1,"cw-body"],["name","x-square","size","large",3,"click"],["name","selectedPhone",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){1&t&&(a.Lb(0,"ion-header"),a.Lb(1,"ion-toolbar",0),a.Lb(2,"ion-buttons",1),a.Lb(3,"ion-button",2),a.Sb("click",(function(){return n.findOrder()})),a.Jb(4,"i-feather",3),a.Kb(),a.oc(5,D,3,0,"ion-button",4),a.Kb(),a.Lb(6,"ion-title"),a.pc(7,"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"),a.Kb(),a.Lb(8,"ion-title",5),a.pc(9),a.Kb(),a.Lb(10,"ion-buttons",6),a.Lb(11,"ion-button",2),a.Sb("click",(function(){return n.doRefresh()})),a.Jb(12,"ion-icon",7),a.Kb(),a.oc(13,$,2,0,"ion-button",8),a.oc(14,R,2,0,"ion-button",8),a.Lb(15,"ion-button",2),a.Sb("click",(function(t){return n.showHelp(t)})),a.Jb(16,"ion-icon",9),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Lb(17,"ion-content"),a.Lb(18,"div",10),a.Lb(19,"ion-segment",11),a.Sb("ionChange",(function(t){return n.segmentChanged(t)})),a.Lb(20,"ion-segment-button",12),a.Lb(21,"ion-label"),a.pc(22,"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"),a.Kb(),a.Kb(),a.Lb(23,"ion-segment-button",13),a.Lb(24,"ion-label"),a.pc(25,"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e"),a.Kb(),a.Kb(),a.Lb(26,"ion-segment-button",14),a.Lb(27,"ion-label"),a.pc(28,"\u041d\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e"),a.Kb(),a.Kb(),a.Kb(),a.oc(29,A,5,5,"div",15),a.Lb(30,"div",16),a.Lb(31,"div",17),a.Lb(32,"div",18),a.Lb(33,"span"),a.pc(34,"\u0412\u0441\u0435\u0433\u043e:"),a.Kb(),a.pc(35),a.Kb(),a.oc(36,N,4,1,"div",19),a.oc(37,q,5,1,"div",19),a.oc(38,G,4,1,"div",19),a.Kb(),a.oc(39,H,3,2,"div",20),a.Kb(),a.oc(40,et,4,3,"div",21),a.oc(41,ot,6,1,"div",22),a.Kb(),a.oc(42,it,2,0,"div",23),a.oc(43,bt,6,3,"div",24),a.Kb()),2&t&&(a.yb(5),a.bc("ngIf",n.auth.getGuessMode()),a.yb(4),a.qc(n.state$.filial),a.yb(4),a.bc("ngIf",n.subBtnCond),a.yb(1),a.bc("ngIf",0==(null==n.courier.sortOrders?null:n.courier.sortOrders.g_process)&&!n.isWorkEnded),a.yb(4),a.bc("ngClass",a.ec(15,lt,"fullHand"==n.auth.getMode()||"hand"==n.auth.getMode())),a.yb(11),a.bc("ngIf",n.ordersInit&&!n.auth.getGuessMode()),a.yb(6),a.rc(" ",n.courier.sortOrders.all," "),a.yb(1),a.bc("ngIf",0!=n.courier.sortOrders.g_process),a.yb(1),a.bc("ngIf",0!=n.courier.sortOrders.g_fail),a.yb(1),a.bc("ngIf",0!=n.courier.sortOrders.g_done),a.yb(1),a.bc("ngIf","checkedOut"!==n.auth.checkState),a.yb(1),a.bc("ngIf",n.ordersInit&&n.state$.orders_data!=a.dc(17,dt)&&null!==n.state$.orders_data&&"checkedOut"==n.auth.checkState),a.yb(1),a.bc("ngIf",n.scanView),a.yb(1),a.bc("ngIf",n.loader),a.yb(1),a.bc("ngIf",n.callWindow))},directives:[d.k,d.D,d.g,d.f,k.a,s.l,d.B,d.l,d.i,s.j,d.w,d.L,d.x,d.p,d.v,d.M,b.f,b.g,i.c,i.a,o.b,s.k,d.o,o.a,b.a,d.y,d.q,d.t,d.r,d.s,d.K],pipes:[s.b,s.e],styles:["ion-chip[_ngcontent-%COMP%]{white-space:nowrap}.headbar-right-buttons[_ngcontent-%COMP%]{position:fixed;right:0;z-index:999999;top:0;display:flex}ion-toolbar[_ngcontent-%COMP%]{--min-height:30px}.toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:16px}ion-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:30px}ion-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px}.fether[_ngcontent-%COMP%]{height:16px}ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--background:#e5f0f4;--border-style:solid;--border-width:0.5px;--color:#585454;--color-checked:#2b637e;--indicator-height:0}ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-transform:none}ion-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]{border-bottom:#fff}ion-searchbar[_ngcontent-%COMP%]{--box-shadow:0 0 01px #000;padding-left:2px;padding-right:2px}ion-item[_ngcontent-%COMP%]{--border-color:#d6cfcf;--border-width:1px;--border-radius:2px;--padding-start:0;margin:0 2px 5px;--inner-border-width:0}ion-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-weight:700;font-size:14px}ion-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%]{color:#2b637e}ion-item[_ngcontent-%COMP%]   .addr[_ngcontent-%COMP%]{color:#585454;font-size:13px;white-space:pre-wrap;padding:5px 0}ion-item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#333;font-size:13px;font-weight:700}ion-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{bottom:0}ion-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:#2b637e;--border-radius:2px;font-size:12px;text-transform:none;--padding-bottom:7px;--padding-top:7px;--padding-start:7px;--padding-end:7px;font-family:Roboto;--box-shadow:none;margin-right:13px;margin-left:0}ion-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:0}ion-item[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%]{margin-right:10px}ion-item[_ngcontent-%COMP%]:nth-child(odd){--background:#f6fdff}ion-reorder[_ngcontent-%COMP%]{margin:0}ion-item.overdue[_ngcontent-%COMP%]{--border-color:red;--inner-border-width:0}ion-item.overdue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%]{color:red}.c-body[_ngcontent-%COMP%], .c-wrp[_ngcontent-%COMP%]{height:100%}.call-window[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6)}.call-window[_ngcontent-%COMP%], .call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%]{width:85%;flex-direction:column;background:#fff;border-radius:5px;position:relative}.call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;height:44px;width:80%;box-shadow:0 0 .5px .5px #7cd5ff;border-radius:3px;margin:5px 0;text-transform:uppercase}.c-wrp[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:calc(100% - 40px)}.c-wrp[_ngcontent-%COMP%]   .c-body[_ngcontent-%COMP%]{overflow:scroll}.c-wrp[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]{box-shadow:0 -2px 3px hsla(0,0%,45.9%,.1)}.c-wrp[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .orders-lable[_ngcontent-%COMP%]{font-weight:bolder;display:flex}.c-wrp[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .orders-lable[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#585454}.c-wrp[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .checking[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:var(--corporate);border-radius:2px}"],data:{animation:[Object(g.j)("openClose",[Object(g.g)("open",Object(g.h)({height:"auto"})),Object(g.g)("closed",Object(g.h)({height:"max-content"})),Object(g.i)("open => closed",[Object(g.e)("0.5s")]),Object(g.i)("closed => open",[Object(g.e)("0.5s")])])]}}),t})();Object(s.r)(r.a,"ru");const ht=[{path:"",component:ut}];let gt=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},providers:[{provide:a.u,useFactory:()=>"ru"}],imports:[[u.a,s.c,b.b,o.c,d.E,i.e,l.i.forChild(ht)]]}),t})()}}]);