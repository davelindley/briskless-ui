(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)r=s[u],i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);v&&v(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var v=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("1356"),i=n.n(a);i.a},"055f":function(t,e,n){},"0ccd":function(t,e,n){},1356:function(t,e,n){},"148d":function(t,e,n){},"15af":function(t,e,n){"use strict";var a=n("0ccd"),i=n.n(a);i.a},"27bd":function(t,e,n){},3148:function(t,e,n){"use strict";var a=n("86f5"),i=n.n(a);i.a},"355c":function(t,e,n){},"40df":function(t,e,n){},"46dc":function(t,e,n){},"46eb":function(t,e,n){"use strict";var a=n("c626"),i=n.n(a);i.a},"47ea":function(t,e,n){"use strict";var a=n("27bd"),i=n.n(a);i.a},"4b4f":function(t,e,n){"use strict";var a=n("eafb"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=n("bb71");n("da64");a["a"].use(i["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navbar",{attrs:{app:""}}),n("v-content",[n("v-container",{attrs:{fluid:"","px-0":"","ma-0":""}},[n("router-view")],1)],1),n("bottom-nav",{attrs:{fixed:""}})],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-sm-and-down",on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Briskless")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"})],1),n("v-navigation-drawer",{staticClass:"hidden-sm-and-down",attrs:{slot:"activator",app:"",temporary:""},slot:"activator",model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("v-flex",{staticClass:"mt-5"},[n("v-avatar",{attrs:{size:"100"}},[n("img",{attrs:{src:"/avatar-2.png",alt:""}})]),n("p",{staticClass:"grey--text subheading mt-1 text-center"},[t._v("\n          Username\n        ")])],1),n("v-btn",{staticClass:"success",attrs:{to:"/live"}},[t._v("\n        Go to Live Cook\n      ")])],1),n("v-list",[n("v-list-group",{attrs:{"prepend-icon":"whatshot"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v("\n            Cook\n          ")])],1),n("v-list-tile",{attrs:{to:"/live","prepend-icon":"archive"}},[n("v-list-tile-title",[t._v("\n            Current Cook\n          ")])],1),n("v-list-tile",{attrs:{to:"/cook_settings"}},[n("v-list-tile-title",[t._v("\n            Cook Settings\n          ")])],1),n("v-list-tile",{attrs:{"prepend-icon":"archive",to:"/start"}},[n("v-list-tile-title",[t._v("\n            Start New Cook\n          ")])],1),n("v-list-tile",{attrs:{"prepend-icon":"archive",to:"/archive"}},[n("v-list-tile-title",[t._v("\n            Archives\n          ")])],1)],1),n("v-list-group",{attrs:{"prepend-icon":"settings"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v("\n            Settings\n          ")])],1),n("v-list-tile",{attrs:{to:"/smoker_profiles"}},[n("v-list-tile-title",[t._v("\n            Smoker Profiles\n          ")])],1),n("v-list-tile",{attrs:{to:"/preferences"}},[n("v-list-tile-title",[t._v("\n            Preferences\n          ")])],1)],1),n("v-list-group",{attrs:{"prepend-icon":"people"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v("\n            Community\n          ")])],1),n("v-list-tile",{attrs:{to:"/send_receive_profiles"}},[n("v-list-tile-title",[t._v("\n            Send/Receive Profiles\n          ")])],1),n("v-list-tile",{attrs:{to:"/social"}},[n("v-list-tile-title",[t._v("\n            Social Media\n          ")])],1)],1),n("v-list-group",{attrs:{"prepend-icon":"info"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v("\n            BBQ Info\n          ")])],1),n("v-list-tile",{attrs:{to:"/articles"}},[n("v-list-tile-title",[t._v("\n            Briskless Articles\n          ")])],1),n("v-list-tile",{attrs:{to:"/notes"}},[n("v-list-tile-title",[t._v("\n            Notes\n          ")])],1)],1)],1)],1)],1)},l=[],c={name:"NavBar",data:function(){return{drawer:!1}}},v=c,u=(n("46eb"),n("2877")),p=n("6544"),f=n.n(p),d=n("8212"),m=n("8336"),h=n("0e8f"),_=n("a722"),b=n("8860"),g=n("56b0"),x=n("ba95"),k=n("5d23"),y=n("f774"),V=n("9910"),w=n("71d9"),C=n("2a7f"),T=n("706c"),S=Object(u["a"])(v,s,l,!1,null,"29531c2c",null);S.options.__file="Navbar.vue";var O=S.exports;f()(S,{VAvatar:d["a"],VBtn:m["a"],VFlex:h["a"],VLayout:_["a"],VList:b["a"],VListGroup:g["a"],VListTile:x["a"],VListTileTitle:k["a"],VNavigationDrawer:y["a"],VSpacer:V["a"],VToolbar:w["a"],VToolbarItems:C["a"],VToolbarSideIcon:T["a"],VToolbarTitle:C["b"]});var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-container",[n("v-card",{staticClass:"hide-overflow hidden-md-and-up",attrs:{absolute:""}},[n("v-bottom-nav",{attrs:{active:t.activeBtn,value:t.showNav,fixed:"",color:"transparent"},on:{"update:active":function(e){t.activeBtn=e}}},[n("v-btn",{attrs:{flat:"",color:"teal",to:"/favorites"}},[n("span",[t._v("Favorites")]),n("v-icon",[t._v("favorite")])],1),n("v-btn",{attrs:{flat:"",color:"teal",to:"/live"}},[n("span",[t._v("Cook")]),n("v-icon",[t._v("whatshot")])],1),n("v-bottom-sheet",{model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[n("v-btn",{attrs:{slot:"activator",flat:"",color:"teal"},slot:"activator"},[n("span",[t._v("More")]),n("v-icon",[t._v("unfold_more")])],1),n("v-list",{attrs:{temporary:""}},[n("v-list-group",{attrs:{"prepend-icon":"whatshot"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v("\n                          Cook\n                      ")])],1),n("v-list-tile",{attrs:{to:"/live"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Current Cook\n                      ")])],1),n("v-list-tile",{attrs:{to:"/start"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Start New Cook\n                      ")])],1),n("v-list-tile",{attrs:{to:"/archive"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Archives\n                      ")])],1)],1),n("v-list-group",{attrs:{"prepend-icon":"settings"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v("\n                          Settings\n                      ")])],1),n("v-list-tile",{attrs:{to:"/smoker_profiles"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Smoker Profiles\n                      ")])],1),n("v-list-tile",{attrs:{to:"/preferences"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Preferences\n                      ")])],1),n("v-list-tile",{attrs:{to:"/location_settings"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Location Settings\n                      ")])],1)],1),n("v-list-group",{attrs:{"prepend-icon":"people"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v("\n                          Community\n                      ")])],1),n("v-list-tile",{attrs:{to:"/send_receive_profiles"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Send/Receive Profiles\n                      ")])],1),n("v-list-tile",{attrs:{to:"/social"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Social Media\n                      ")])],1)],1),n("v-list-group",{attrs:{"prepend-icon":"info"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v("\n                          BBQ Info\n                      ")])],1),n("v-list-tile",{attrs:{to:"/articles"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Briskless Articles\n                      ")])],1),n("v-list-tile",{attrs:{to:"/notes"},on:{click:function(e){t.sheet=!1}}},[n("v-list-tile-title",[t._v("\n                          Notes\n                      ")])],1)],1)],1)],1)],1)],1)],1)],1)},A=[],P={name:"bottomNav",data:function(){return{activeBtn:1,showNav:!0,sheet:!1}},methods:{}},E=P,L=(n("15af"),n("887a")),N=n("288c"),B=n("b0af"),M=n("a523"),$=n("132d"),F=Object(u["a"])(E,j,A,!1,null,"23cc2eeb",null);F.options.__file="bottomNav.vue";var z=F.exports;f()(F,{VBottomNav:L["a"],VBottomSheet:N["a"],VBtn:m["a"],VCard:B["a"],VContainer:M["a"],VIcon:$["a"],VList:b["a"],VListGroup:g["a"],VListTile:x["a"],VListTileTitle:k["a"]});var I={name:"App",components:{Navbar:O,bottomNav:z},data:function(){return{}}},R=I,D=(n("034f"),n("7496")),G=n("549c"),H=Object(u["a"])(R,o,r,!1,null,null,null);H.options.__file="App.vue";var U=H.exports;f()(H,{VApp:D["a"],VContainer:M["a"],VContent:G["a"]});var J=n("8c4f"),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("This is the Homepage")])])])},Q=[],X={name:"Home"},q=X,W=(n("dd9b"),Object(u["a"])(q,K,Q,!1,null,"2b90070a",null));W.options.__file="Home.vue";var Y=W.exports;f()(W,{VContainer:M["a"]});var Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg4:"",md6:"",xs12:""}},[n("main-chart",{staticClass:"mx-1",attrs:{cook_data:t.cook}})],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:""}},[n("h1",[t._v("TIME REMAINING: "+t._s(this.timeRemaining))]),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs6:""}},[n("gauge",{attrs:{title:"Internal Temp",value:180,min:0,max:220,subtitle:"Deg F"}})],1),n("v-flex",{attrs:{xs6:""}},[n("gauge",{attrs:{title:"Velocity",value:2.3,min:0,max:5,subtitle:"Chews"}})],1),n("v-layout")],1)],1)],1)],1)],1)},tt=[],et=(n("c5f6"),n("c23d")),nt=(n("e89a"),et["firebase"].initializeApp({apiKey:"AIzaSyBVcXM4ko75est9JzHnKah1biGzFmNA0XE",authDomain:"briskless.firebaseapp.com",databaseURL:"https://briskless.firebaseio.com",projectId:"briskless",storageBucket:"briskless.appspot.com",messagingSenderId:"756951969529"})),at=nt.firestore(),it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("highcharts",{attrs:{options:t.chartOptions,"update-args":t.chartOptions.updateArgs}})},ot=[],rt=n("2b5b"),st={name:"MainChart",components:{highcharts:rt["Chart"]},props:["cookData"],computed:{chartOptions:function(){return{chart:{type:"area",zoomType:"x"},subtitle:{text:void 0===document.ontouchstart?"Click and drag in the plot area to zoom in":"Pinch the chart to zoom in"},title:{text:"Monitor Cook"},series:[{name:"Live Cook Temp",data:this.cook_data,color:"#6fcd98",turboThreshold:0}],yAxis:{labels:{enabled:!1,padding:"0px"},visible:!1},xAxis:{type:"datetime"},updateArgs:[!0,!0,{duration:500}]}}}},lt=st,ct=(n("d439"),Object(u["a"])(lt,it,ot,!1,null,"d2810ae0",null));ct.options.__file="MainChart.vue";var vt=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",height:"100px"}},[n("highcharts",{attrs:{options:t.chartOptions,"update-args":t.chartOptions.updateArgs}})],1)},pt=[],ft={components:{highcharts:rt["Chart"]},props:["title","value","max","min","subtitle"],computed:{chartOptions:function(){return{chart:{type:"solidgauge",height:150},title:null,pane:{center:["50%","90%"],size:"140%",startAngle:-90,endAngle:90,background:{backgroundColor:"#EEE",innerRadius:"60%",outerRadius:"100%",shape:"arc"}},tooltip:{enabled:!1},plotOptions:{solidgauge:{dataLabels:{y:3,borderWidth:0,useHTML:!0}}},yAxis:{min:this.min,max:this.max,title:{text:this.title,align:"high",textAlign:"center",style:{"font-size":"18px"},y:-10}},credits:{enabled:!1},series:[{name:"Temp",data:[this.value],dataLabels:{format:'<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/><span style="font-size:12px;color:silver">'+this.subtitle+"</span></div>"},tooltip:{valueSuffix:"<h1>Deg<h1>"}}]}}}},dt=ft,mt=(n("57f0"),Object(u["a"])(dt,ut,pt,!1,null,"2d829213",null));mt.options.__file="Gauge.vue";var ht=mt.exports;f()(mt,{VFlex:h["a"]});var _t={name:"Live",firestore:function(){return{cook:at.collection("Dave - 2.17.2019 - Pork Butt").doc("jxsRAobevpxe4dIV8KlE").collection("data").orderBy("x")}},components:{MainChart:vt,Gauge:ht},data:function(){return{temp:185,goalTemp:203,goalVelocity:5,time:14}},computed:{velocity:function(){return Number(7.048e-17*Math.pow(this.temp,7.29007299056)).toPrecision(4)},timeRemaining:function(){return"1:40M"}}},bt=_t,gt=(n("bca8"),Object(u["a"])(bt,Z,tt,!1,null,"f5548064",null));gt.options.__file="Live.vue";var xt=gt.exports;f()(gt,{VContainer:M["a"],VFlex:h["a"],VLayout:_["a"]});var kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("\n            This is the page where you start a cook\n        ")])])])},yt=[],Vt={name:"Start"},wt=Vt,Ct=(n("5b95"),Object(u["a"])(wt,kt,yt,!1,null,"3b9c1086",null));Ct.options.__file="Start.vue";var Tt=Ct.exports;f()(Ct,{VContainer:M["a"]});var St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("\n            This is the archives\n        ")])])])},Ot=[],jt={name:"Archive"},At=jt,Pt=(n("3148"),Object(u["a"])(At,St,Ot,!1,null,"fc4efb6c",null));Pt.options.__file="Archive.vue";var Et=Pt.exports;f()(Pt,{VContainer:M["a"]});var Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("\n            This is the Smoker Profiles Page\n        ")])])])},Nt=[],Bt={name:"SmokerProfiles"},Mt=Bt,$t=(n("4b4f"),Object(u["a"])(Mt,Lt,Nt,!1,null,"18432717",null));$t.options.__file="SmokerProfiles.vue";var Ft=$t.exports;f()($t,{VContainer:M["a"]});var zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("\n            This is the Preferences Page\n        ")])])])},It=[],Rt={name:"Preferences"},Dt=Rt,Gt=(n("ecf7"),Object(u["a"])(Dt,zt,It,!1,null,"57083c70",null));Gt.options.__file="Preferences.vue";var Ht=Gt.exports;f()(Gt,{VContainer:M["a"]});var Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{md3:"",xs10:""}},[n("v-slider",{attrs:{max:215,min:140,"prepend-icon":"whatshot"},model:{value:t.goalTemp,callback:function(e){t.goalTemp=e},expression:"goalTemp"}})],1),n("v-flex",{attrs:{md1:"",xs2:""}},[n("v-text-field",{staticClass:"mt-0",attrs:{"full-width":"",label:"Temp",left:"",type:"number"},model:{value:t.goalTemp,callback:function(e){t.goalTemp=e},expression:"goalTemp"}})],1),n("v-flex",{attrs:{md3:"",xs10:""}},[n("v-slider",{attrs:{max:16,min:1,"prepend-icon":"timer"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),n("v-flex",{attrs:{md1:"",xs2:""}},[n("v-text-field",{staticClass:"mt-0 mx-2",attrs:{"full-width":"",label:"Hours","px-0":"",right:"",type:"number"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),n("v-layout",[n("v-flex",{attrs:{md:""}},[n("v-slider",{attrs:{"tick-labels":t.doneness,"tick-size":3,value:2,max:"3",min:"0","thumb-label":"","thumb-size":"80"},scopedSlots:t._u([{key:"thumb-label",fn:function(e){return[n("span",[t._v("\n              "+t._s(t.getDoneness(e.value))+"\n            ")])]}}])})],1)],1)],1)],1)},Jt=[],Kt={name:"LocationSettings",data:function(){return{temp:185,goalTemp:203,goalVelocity:5,time:14,doneness:["Firm","Firmer","Tender","Tenderer"]}},methods:{getDoneness:function(t){return this.doneness[t]}}},Qt=Kt,Xt=(n("69c2"),n("ba0d")),qt=n("2677"),Wt=Object(u["a"])(Qt,Ut,Jt,!1,null,"61bbb3f3",null);Wt.options.__file="Settings.vue";var Yt=Wt.exports;f()(Wt,{VContainer:M["a"],VFlex:h["a"],VLayout:_["a"],VSlider:Xt["a"],VTextField:qt["a"]});var Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("\n            This is the send/recieve profiles page\n        ")])])])},te=[],ee={name:"SendRecieveProfiles"},ne=ee,ae=(n("e016"),Object(u["a"])(ne,Zt,te,!1,null,"812fff90",null));ae.options.__file="SendRecieveProfiles.vue";var ie=ae.exports;f()(ae,{VContainer:M["a"]});var oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("\n            This is the Social Media Page\n        ")])])])},re=[],se={name:"SocialMedia"},le=se,ce=(n("fd3f"),Object(u["a"])(le,oe,re,!1,null,"03a0006f",null));ce.options.__file="SocialMedia.vue";var ve=ce.exports;f()(ce,{VContainer:M["a"]});var ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("\n            This is the articles page\n        ")])])])},pe=[],fe={name:"Articles"},de=fe,me=(n("5c52"),Object(u["a"])(de,ue,pe,!1,null,"13fd082d",null));me.options.__file="Articles.vue";var he=me.exports;f()(me,{VContainer:M["a"]});var _e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("\n            This is the Notes Page\n        ")])])])},be=[],ge={name:"Notes"},xe=ge,ke=(n("f9e6"),Object(u["a"])(xe,_e,be,!1,null,"4ec1edea",null));ke.options.__file="Notes.vue";var ye=ke.exports;f()(ke,{VContainer:M["a"]});var Ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h1",[t._v("\n            This is the Favorites Page\n        ")])])])},we=[],Ce={name:"Favorites"},Te=Ce,Se=(n("47ea"),Object(u["a"])(Te,Ve,we,!1,null,"8cc11396",null));Se.options.__file="Favorites.vue";var Oe=Se.exports;f()(Se,{VContainer:M["a"]});var je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"align-center":"",row:"",wrap:""}},[n("v-flex",[n("h3",[t._v("Sign In")]),n("input",{attrs:{placeholder:"email",type:"text"}}),n("br"),n("input",{attrs:{placeholder:"password",type:"password"}}),n("br"),n("v-btn",[t._v("Connection")]),n("p",[t._v("Don't have an account? Create One")])],1)],1)],1)},Ae=[],Pe={name:"Login",data:function(){return{}},methods:{}},Ee=Pe,Le=(n("c21e"),Object(u["a"])(Ee,je,Ae,!1,null,"554165fc",null));Le.options.__file="Login.vue";var Ne=Le.exports;f()(Le,{VBtn:m["a"],VContainer:M["a"],VFlex:h["a"],VLayout:_["a"]});var Be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",[n("v-flex",[n("p",[t._v("Create an account!")]),n("input",{attrs:{placeholder:"email",type:"text"}}),n("input",{attrs:{placeholder:"password",type:"password"}}),n("v-btn",[t._v("Sign Up")]),n("span",[t._v("or go back to Login")])],1)],1)],1)},Me=[],$e={name:"SignUp"},Fe=$e,ze=(n("e20d"),Object(u["a"])(Fe,Be,Me,!1,null,"19d2cbe6",null));ze.options.__file="SignUp.vue";var Ie=ze.exports;f()(ze,{VBtn:m["a"],VContainer:M["a"],VFlex:h["a"],VLayout:_["a"]}),a["a"].use(J["a"]);var Re=new J["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Y},{path:"/live",name:"live",component:xt},{path:"/start",name:"start",component:Tt},{path:"/archive",name:"archive",component:Et},{path:"/smoker_profiles",name:"smoker_profiles",component:Ft},{path:"/preferences",name:"preferences",component:Ht},{path:"/cook_settings",name:"cook_settings",component:Yt},{path:"/send_receive_profiles",name:"send_receive_profiles",component:ie},{path:"/social",name:"social",component:ve},{path:"/articles",name:"articles",component:he},{path:"/notes",name:"notes",component:ye},{path:"/favorites",name:"favorites",component:Oe},{path:"/login",name:"login",component:Ne},{path:"/signup",name:"signup",component:Ie}]}),De=n("9483");Object(De["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Ge=n("73c3"),He=n.n(Ge),Ue=n("ea7f"),Je=n.n(Ue),Ke=n("33c6"),Qe=n.n(Ke),Xe=n("db68"),qe=n.n(Xe);Qe()(Je.a),qe()(Je.a),a["a"].use(He.a),a["a"].config.productionTip=!1,new a["a"]({router:Re,render:function(t){return t(U)}}).$mount("#app")},"57f0":function(t,e,n){"use strict";var a=n("e102"),i=n.n(a);i.a},"5b95":function(t,e,n){"use strict";var a=n("148d"),i=n.n(a);i.a},"5c52":function(t,e,n){"use strict";var a=n("055f"),i=n.n(a);i.a},"68f2":function(t,e,n){},"69c2":function(t,e,n){"use strict";var a=n("69d1"),i=n.n(a);i.a},"69d1":function(t,e,n){},7201:function(t,e,n){},7929:function(t,e,n){},"80c9":function(t,e,n){},"86f5":function(t,e,n){},bca8:function(t,e,n){"use strict";var a=n("d322"),i=n.n(a);i.a},c21e:function(t,e,n){"use strict";var a=n("c97f"),i=n.n(a);i.a},c626:function(t,e,n){},c97f:function(t,e,n){},d322:function(t,e,n){},d439:function(t,e,n){"use strict";var a=n("68f2"),i=n.n(a);i.a},dd9b:function(t,e,n){"use strict";var a=n("7929"),i=n.n(a);i.a},e016:function(t,e,n){"use strict";var a=n("46dc"),i=n.n(a);i.a},e102:function(t,e,n){},e20d:function(t,e,n){"use strict";var a=n("40df"),i=n.n(a);i.a},eafb:function(t,e,n){},ecf7:function(t,e,n){"use strict";var a=n("7201"),i=n.n(a);i.a},f9e6:function(t,e,n){"use strict";var a=n("355c"),i=n.n(a);i.a},fd3f:function(t,e,n){"use strict";var a=n("80c9"),i=n.n(a);i.a}});
//# sourceMappingURL=app.2ef67474.js.map