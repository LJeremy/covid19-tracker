(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{134:function(e,t,a){e.exports=a(155)},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a(11),c=a.n(o),i=a(28),s=a(46),m=a(212),u=a(121),p=a(254),d=a(26),E=a(60),h=a(209),f=a(208),g=a(203),y=a(257),v=a(256),b=a(211),w=a(204),O=a(205),x=a(206),C=a(207),k=a(112),D=a.n(k),N=a(110),j=a.n(N),I=a(109),T=a.n(I),S=a(111),V=a.n(S),_=a(214),W=a(113),z=a.n(W),A=a(210),R=a(88),L=a(200),P=a(17),M=Object(L.a)((function(e){return{root:{display:"flex",marginTop:e.spacing(8)},drawer:Object(E.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(E.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(E.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},title:{color:e.palette.text.primary},content:{flexGrow:1,padding:e.spacing(3)},link:{color:e.palette.text.primary,textDecoration:"inherit"}}}));var B=function(e){var t=e.container,a=e.children,n=M(),l=Object(P.a)(),o=r.a.useState(!1),c=Object(d.a)(o,2),s=c[0],m=c[1],u=function(){m(!s)},p=r.a.createElement("div",null,r.a.createElement("div",{className:n.toolbar}),r.a.createElement(g.a,null),r.a.createElement(w.a,null,r.a.createElement(i.b,{className:n.link,to:"/"},r.a.createElement(O.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(T.a,null)),r.a.createElement(C.a,{primary:"Home"})))),r.a.createElement(g.a,null),r.a.createElement(w.a,null,r.a.createElement(i.b,{className:n.link,to:"/worldwide"},r.a.createElement(O.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(j.a,null)),r.a.createElement(C.a,{primary:"Worldwide"})))),r.a.createElement(g.a,null),r.a.createElement(w.a,null,r.a.createElement(i.b,{className:n.link,to:"/countries"},r.a.createElement(O.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(V.a,null)),r.a.createElement(C.a,{primary:"Country List"})))),r.a.createElement(g.a,null),r.a.createElement(w.a,null,r.a.createElement(i.b,{className:n.link,to:"/news"},r.a.createElement(O.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(D.a,null)),r.a.createElement(C.a,{primary:"News"})))),r.a.createElement(g.a,null));return r.a.createElement("div",{className:n.root},r.a.createElement(f.a,null),r.a.createElement(h.a,{position:"fixed",className:n.appBar},r.a.createElement(A.a,null,r.a.createElement(b.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:n.menuButton},r.a.createElement(z.a,null)),r.a.createElement(i.b,{className:n.link,to:"/"},r.a.createElement(R.a,{variant:"h6",className:n.title},"\ud83e\udda0 COVID-19")))),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(v.a,{smUp:!0,implementation:"css"},r.a.createElement(y.a,{container:t,variant:"temporary",anchor:"rtl"===l.direction?"right":"left",open:s,onClose:u,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},p)),r.a.createElement(v.a,{xsDown:!0,implementation:"css"},r.a.createElement(y.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},p))),r.a.createElement("div",{className:n.toolbar}),r.a.createElement(_.a,{maxWidth:"lg"},a))},F=a(157),H=a(215),U=a(260),q=a(217),G=a(74),Z=a.n(G),J=a(73),Y=a.n(J),K=a(75),Q=a.n(K);function $(e){try{return new Intl.NumberFormat("en-US").format(e)}catch(t){return 0}}var X=Object(L.a)((function(e){return{root:{flexGrow:1},paper:{display:"grid",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},cases:{color:Y.a[700]},death:{color:Z.a[700]},recovered:{color:Q.a[700]}}}));function ee(e){var t=e.data,a=X();return r.a.createElement("div",{className:a.root},t?r.a.createElement(H.a,{container:!0,spacing:3},r.a.createElement(U.a,{title:"Confirmed"},r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:a.paper},r.a.createElement("h3",{className:a.cases},r.a.createElement("span",{role:"img"}," \ud83e\udd12")," ",$(t.latest.confirmed))))),r.a.createElement(U.a,{title:"Deaths"},r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:a.paper},r.a.createElement("h3",{className:a.death},r.a.createElement("span",{role:"img"}," \ud83d\udc80")," ",$(t.latest.deaths))))),r.a.createElement(U.a,{title:"Recovered"},r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:a.paper},r.a.createElement("h3",{className:a.recovered},r.a.createElement("span",{role:"img"}," \u2705")," ",$(t.latest.recovered)))))):r.a.createElement(q.a,null))}var te=a(219),ae=a(223),ne=a(222),re=a(218),le=a(220),oe=a(221),ce=Object(L.a)((function(e){return{container:{marginTop:32},table:{minWidth:650},link:{color:e.palette.text.primary,textDecoration:"inherit"}}}));function ie(e){var t=ce(),a=e.data;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Click on a Country to open a detailed view."),r.a.createElement(re.a,{component:F.a,className:t.container},r.a.createElement(te.a,{className:t.table,size:"small","aria-label":"simple table"},r.a.createElement(le.a,null,r.a.createElement(oe.a,null,r.a.createElement(ne.a,null,"Country"),r.a.createElement(ne.a,null,"Province"),r.a.createElement(ne.a,null,"Confirmed"),r.a.createElement(ne.a,null,"Deaths"),r.a.createElement(ne.a,null,"Recovered"))),r.a.createElement(ae.a,null,a.confirmed.locations.map((function(e,t){return r.a.createElement(oe.a,Object(E.a)({key:e.name},"key",t),r.a.createElement(ne.a,{component:"th",scope:"row"},r.a.createElement(i.b,{style:{color:"white"},to:"/country/".concat(e.province?"".concat(e.country,"/").concat(e.province):e.country)},e.country)),r.a.createElement(ne.a,null,e.province),r.a.createElement(ne.a,null,e.latest),r.a.createElement(ne.a,null,a.deaths.locations[t].latest),r.a.createElement(ne.a,null,a.recovered.locations[t].latest))})))))):r.a.createElement(q.a,null)}var se=a(224),me=a(264),ue=a(87),pe=Object(L.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"},link:{color:"inherit",textDecoration:"none",cursor:"pointer","&:hover":{transform:"translate(14px, 17px) scale(1.2)"}}}}));function de(e){var t=pe(),a=e.country,n=Object(ue.a)("https://newsapi.org/v2/everything?language=".concat(a?a.toLowerCase():"en","&q=covid19&sortBy=publishedAt&pageSize=10&apiKey=a91facb09c9444c4a2797a5ac993dc57"),"news".concat(a?a.toLowerCase():""));return console.log("NEWS",n),console.log("NEWS COUNTRY CODE",a),r.a.createElement(w.a,{className:t.root},n&&n.articles.map((function(e,a){return r.a.createElement("a",{key:a,href:e.url,target:"_blank",className:t.link},r.a.createElement("article",null,r.a.createElement(O.a,{key:a,alignItems:"flex-start"},r.a.createElement(se.a,null,r.a.createElement(me.a,{alt:"Remy Sharp",src:e.urlToImage})),r.a.createElement(C.a,{primary:e.title,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},e.source.name,", ",e.author," ",""),e.description)}))),9!==a&&r.a.createElement(g.a,{variant:"inset",component:"li"}))})))}var Ee=a(55),he=a(56),fe=a(58),ge=a(57),ye=a(59),ve=a(225),be=a(226),we=a(227),Oe=a(228),xe=a(229),Ce=a(230),ke=a(231),De=a(232),Ne=a(233),je=a(234),Ie=a(235),Te=a(236),Se=a(237),Ve=a(238),_e=a(239),We=a(240),ze=a(241),Ae=a(242),Re=a(243),Le=a(244),Pe=a(245),Me=a(246),Be=a(247),Fe=a(248),He=a(249),Ue=a(250),qe=a(251),Ge=a(252),Ze=function(e){function t(){return Object(Ee.a)(this,t),Object(fe.a)(this,Object(ge.a)(t).apply(this,arguments))}return Object(ye.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){var e=document.URL,t=document.title;return console.log("DOCUMENT URL",e),console.log("DOCUMENT TITLE",t),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Share this page"),r.a.createElement(H.a,{container:!0,spacing:3},r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(ve.a,{url:e,quote:t},r.a.createElement(be.a,{size:32,round:!0})),r.a.createElement(we.a,{url:e,className:"Demo__some-network__share-count"},(function(e){return e}))),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(Oe.a,{url:e,title:t},r.a.createElement(xe.a,{size:32,round:!0})),r.a.createElement("div",{className:"Demo__some-network__share-count"},"\xa0")),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(Ce.a,{url:e,title:t},r.a.createElement(ke.a,{size:32,round:!0})),r.a.createElement("div",{className:"Demo__some-network__share-count"},"\xa0")),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(De.a,{url:e,title:t,separator:":: "},r.a.createElement(Ne.a,{size:32,round:!0})),r.a.createElement("div",{className:"Demo__some-network__share-count"},"\xa0")),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(je.a,{url:e},r.a.createElement(Ie.a,{size:32,round:!0}))),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(Te.a,{url:e,title:t,windowWidth:660,windowHeight:460},r.a.createElement(Se.a,{size:32,round:!0})),r.a.createElement("div",null,r.a.createElement(Ve.a,{url:e,className:"Demo__some-network__share-count"}))),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(_e.a,{url:e,title:t},r.a.createElement(We.a,{size:32,round:!0}))),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(ze.a,{url:e,subject:t,body:"body"},r.a.createElement(Ae.a,{size:32,round:!0}))),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(Re.a,{url:e,title:t},r.a.createElement(Le.a,{size:32,round:!0}))),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(Pe.a,{url:e,quote:t},r.a.createElement(Me.a,{size:32,round:!0}))),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(Be.a,{url:e,title:t},r.a.createElement(Fe.a,{size:32,round:!0}))),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(He.a,{url:e,title:t},r.a.createElement(Ue.a,{size:32,round:!0}))),r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(qe.a,{url:e,title:t},r.a.createElement(Ge.a,{size:32,round:!0})))))}}]),t}(n.Component),Je=a(22),Ye=a(261),Ke=a(262),Qe=a(259),$e=a(263),Xe=function(e,t,a,n){var r=e*t;return r<a?a:r>n?n:r},et=(Object(Je.b)(),function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(Ye.a,{style:{height:"600px",marginTop:"32px"},center:[51.505,-.09],zoom:3.5,maxZoom:12,minZoom:3,attributionControl:!1,zoomControl:!1,maxBoundsViscosity:.7,useFlyTo:!0},r.a.createElement(Ke.a,{url:"https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"}),t.confirmed.locations.map((function(e,t){return r.a.createElement(Qe.a,{key:t,center:[e.coordinates.lat,e.coordinates.long],radius:Xe(e.latest,25,15e3,5e5),color:"red",fillColor:"#f03",fillOpacity:.5},r.a.createElement($e.a,null,r.a.createElement("h4",null,r.a.createElement("b",null,e.province||e.country),r.a.createElement("br",null),r.a.createElement("b",null,"Confirmed cases: ",e.latest))))}))))}),tt=Object(L.a)((function(e){return{root:{flexGrow:1},paper:{display:"grid",padding:e.spacing(2),marginBottom:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),at=function(e){var t=tt(),a=e.data;return r.a.createElement(H.a,{container:!0,spacing:0},r.a.createElement(U.a,{title:"How the Mortality rate is calculated: \n (deaths / confirmed) * 100)"},r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(F.a,{className:t.paper},r.a.createElement("h1",null,"Mortality rate: ",a?"".concat((a.latest.deaths/a.latest.confirmed*100).toFixed(2)):"-","%")))))};function nt(e){var t=e.data;return l.a.pageview("/"),r.a.createElement(B,null,r.a.createElement("h1",null,"Worldwide Cases"),r.a.createElement(at,{data:t}),r.a.createElement(ee,{data:t}),r.a.createElement(et,{data:t}),r.a.createElement(Ze,null),r.a.createElement("h1",null,"Latest Worldwide Data"),r.a.createElement(ie,{data:t}),r.a.createElement("h1",null,"Latest Worldwide News"),r.a.createElement(de,null))}var rt=a(92),lt=a.n(rt),ot=a(116),ct=a.n(ot);function it(e){console.log("mapLocationToChart value",e);var t=Object.entries(e.history).map((function(e){return function(e){console.log("toDateValuePair value",Object.entries(e)[0][0]);var t=Object.entries(e)[0][1].split("/"),a=Number.parseInt("20"+t[2],10),n=Number.parseInt(t[0],10)-1,r=Number.parseInt(t[1],10);return{date:new Date(a,n,r),value:Number.parseInt(e[1],10)}}(e)})).sort((function(e,t){return e.date-t.date})),a=t[0].date;return console.log("CHART FIRST DATA",t),{name:e.country,data:t.map((function(e){return e.value})),pointStart:Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()),pointInterval:864e5}}var st=function(e){function t(e){var a;return Object(Ee.a)(this,t),(a=Object(fe.a)(this,Object(ge.a)(t).call(this,e))).componentDidMount=function(){if(console.log("CHART MOUNT",a.props.data),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){var e={chart:{height:400,type:"line",zoomType:"x",backgroundColor:"#303030"},title:{text:"Coronavirus confirmed cases in ".concat(a.props.country),style:{color:"#fff"}},xAxis:{type:"datetime"},yAxis:{title:{text:"Confirmed cases"}},series:[it(a.props.data.confirmed.locations.find((function(e){return e.country===a.props.country})))]};a.setState({options:e}),a.setState({loading:!1})}else{var t={chart:{height:400,type:"line",zoomType:"x"},title:{text:"Coronavirus confirmed cases in ".concat(a.props.country)},xAxis:{type:"datetime"},yAxis:{title:{text:"Confirmed cases"}},series:[it(a.props.data.confirmed.locations.find((function(e){return e.country===a.props.country})))]};a.setState({options:t}),a.setState({loading:!1})}},a.state={loading:!0},a}return Object(ye.a)(t,e),Object(he.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){e!==t&&this.setState({loading:!1}),console.log("CHART NEW PROPS",e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.options;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(q.a,null):r.a.createElement("div",{style:{marginTop:"32px"}},r.a.createElement(ct.a,{highcharts:lt.a,options:a})))}}]),t}(n.Component),mt=Object(L.a)((function(e){return{root:{flexGrow:1,marginBottom:32},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},cases:{color:Y.a[700]},death:{color:Z.a[700]},recovered:{color:Q.a[700]}}})),ut=function(e,t,a,n){var r=e*t;return r<a?a:r>n?n:r};function pt(e){var t=Object(s.f)(),a=t.country,o=t.province,c=e.data;l.a.pageview("/country/".concat(a));var i=Object(n.useState)(),m=Object(d.a)(i,2),u=m[0],p=m[1],E=Object(n.useState)(),h=Object(d.a)(E,2),f=h[0],g=h[1],y=Object(n.useState)(),v=Object(d.a)(y,2),b=v[0],w=v[1],O=Object(n.useState)(),x=Object(d.a)(O,2),C=x[0],k=x[1];Object(n.useEffect)((function(){void 0!==c?(p(c.confirmed.locations.find((function(e){return o?o&&e.province===o:e.country===a}))),g(c.deaths.locations.find((function(e){return o?o&&e.province===o:e.country===a}))),w(c.recovered.locations.find((function(e){return o?o&&e.province===o:e.country===a}))),k(new Date(Date.parse(c.confirmed.last_updated)).toString()),console.log("Province",o)):console.log("NO DATA")}));var D=mt();return r.a.createElement(B,null,r.a.createElement("div",{className:D.root},r.a.createElement("h1",null,a),c&&u&&f&&b?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("b",null,"Lastest update:")," ",C),r.a.createElement(H.a,{container:!0,spacing:3},r.a.createElement(U.a,{title:"Confirmed"},r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:D.paper},r.a.createElement("h3",{className:D.cases},r.a.createElement("span",{role:"img"}," \ud83e\udd12")," ",$(u.latest))))),r.a.createElement(U.a,{title:"Deaths"},r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:D.paper},r.a.createElement("h3",{className:D.deaths},r.a.createElement("span",{role:"img"}," \ud83d\udc80")," ",$(f.latest))))),r.a.createElement(U.a,{title:"Recovered"},r.a.createElement(H.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:D.paper},r.a.createElement("h3",{className:D.recovered},r.a.createElement("span",{role:"img"}," \u2705")," ",$(b.latest)))))),r.a.createElement(st,{data:c,country:a}),r.a.createElement(Ye.a,{style:{height:"600px",marginTop:"32px"},center:[u.coordinates.lat,u.coordinates.long],zoom:6,maxZoom:12,minZoom:3,attributionControl:!1,zoomControl:!1,maxBoundsViscosity:.7,useFlyTo:!0},r.a.createElement(Ke.a,{url:"https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"}),r.a.createElement(Qe.a,{center:[u.coordinates.lat,u.coordinates.long],radius:ut(u.latest,25,15e3,5e5),color:"red",fillColor:"#f03",fillOpacity:.5},r.a.createElement($e.a,null,r.a.createElement("h4",null,r.a.createElement("b",null,u.province||u.country),r.a.createElement("br",null),r.a.createElement("b",null,"Confirmed cases: ",u.latest))))),r.a.createElement(Ze,null),r.a.createElement("h1",null,"Country Specific News:"),r.a.createElement(de,{country:u.country_code})):r.a.createElement(q.a,null)))}var dt=a(255),Et=Object(L.a)((function(e){return{country:{color:e.palette.text.primary}}}));function ht(e){var t=e.data;l.a.pageview("/countries");var a=Et(),o=Object(n.useState)(""),c=Object(d.a)(o,2),s=c[0],m=c[1],u=Object(n.useState)(),p=Object(d.a)(u,2),E=p[0],h=p[1];return Object(n.useEffect)((function(){if(t){var e=t.confirmed.locations.filter((function(e){return e.country.toLowerCase().includes(s.toLowerCase())}));h(e),console.log("RESULTS",e)}}),[s]),r.a.createElement(B,null,r.a.createElement("h1",null,"Country List"),r.a.createElement(H.a,{container:!0,spacing:3},r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(dt.a,{style:{marginBottom:32},fullWidth:!0,label:"Search",value:s,onChange:function(e){m(e.target.value)}})),E&&E.map((function(e,t){return r.a.createElement(H.a,{item:!0,xs:!0,key:t,style:{textAlign:"center"}},r.a.createElement(i.b,{to:"/country/".concat(e.province?"".concat(e.country,"/").concat(e.province):e.country),style:{color:"white",textDecoration:"none"}},r.a.createElement("span",{role:"img",style:{display:"inline-block",fontSize:"3em",lineHeight:"1em",verticalAlign:"middle"}},e.country_code.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)}))),r.a.createElement("h3",{className:a.country},e.province?e.province:e.country)))}))))}function ft(e){var t=e.data;return l.a.pageview("/worldwide"),r.a.createElement(B,null,r.a.createElement("h1",null,"Worldwide Cases"),r.a.createElement(ie,{data:t}))}var gt=a(122);function yt(){return l.a.pageview("/news"),r.a.createElement(B,null,r.a.createElement("h1",null,"Worldwide News"),r.a.createElement(gt.a,{sourceType:"profile",screenName:"bnodesk",theme:"dark",options:{height:800}}),r.a.createElement(de,null))}var vt=a(253),bt=a(118),wt=a.n(bt),Ot=a(119),xt=a.n(Ot),Ct=a(117),kt=a.n(Ct),Dt=Object(L.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}}));function Nt(e){var t=e.title,a=e.content;l.a.pageview("/faq");var n=Dt(),o=r.a.useState(!1),c=Object(d.a)(o,2),i=c[0],s=c[1];return r.a.createElement(B,null,r.a.createElement(w.a,{component:"nav",className:n.root},r.a.createElement(O.a,{button:!0,onClick:function(){s(!i)}},r.a.createElement(x.a,null,r.a.createElement(kt.a,null)),r.a.createElement(C.a,{primary:t}),i?r.a.createElement(wt.a,null):r.a.createElement(xt.a,null)),r.a.createElement(vt.a,{in:i,timeout:"auto",unmountOnExit:!0},r.a.createElement(w.a,{component:"div",disablePadding:!0},r.a.createElement(O.a,{button:!0},r.a.createElement("p",null,a))))))}function jt(){return l.a.pageview("/faq"),r.a.createElement(B,null,r.a.createElement("h1",null,"Q&A on coronaviruses (COVID-19)"),r.a.createElement(Nt,{title:"What is a coronavirus?",content:"Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19."}),r.a.createElement(Nt,{title:"What is COVID-19?",content:"COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. "}),r.a.createElement(Nt,{title:"What are the symptoms of COVID-19?",content:"The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don\u2019t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention."}),r.a.createElement(Nt,{title:"How does COVID-19 spread?",content:"People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick. WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share updated findings. Can the virus that causes COVID-19 be transmitted through the air? Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air.  See previous answer on \u201cHow does COVID-19 spread?\u201d Can CoVID-19 be caught from a person who has no symptoms? The main way the disease spreads is through respiratory droplets expelled by someone who is coughing. The risk of catching COVID-19 from someone with no symptoms at all is very low. However, many people with COVID-19 experience only mild symptoms. This is particularly true at the early stages of the disease. It is therefore possible to catch COVID-19 from someone who has, for example, just a mild cough and does not feel ill.  WHO is assessing ongoing research on the period of transmission of COVID-19 and will continue to share updated findings. Can I catch COVID-19 from the feces of someone with the disease? The risk of catching COVID-19 from the feces of an infected person appears to be low. While initial investigations suggest the virus may be present in feces in some cases, spread through this route is not a main feature of the outbreak. WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share new findings. Because this is a risk, however, it is another reason to clean hands regularly, after using the bathroom and before eating. "}))}function It(){return r.a.createElement(B,null,r.a.createElement("h1",null,"NotFOuNBNDDD"))}var Tt=a(120),St=a(96),Vt=a.n(St),_t=function(e){function t(e){return Object(Ee.a)(this,t),Object(fe.a)(this,Object(ge.a)(t).call(this,e))}return Object(ye.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Tt.Helmet,null,r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"https://lars.coffee/covid19-tracker/"}),r.a.createElement("meta",{property:"og:title",content:"Corona Virus Tracker | COVID-19"}),r.a.createElement("meta",{property:"og:description",content:"Worldwide COVID-19 Tracker | Live updates | 24/7"}),r.a.createElement("meta",{property:"og:image",content:Vt.a}),r.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"twitter:url",content:"https://lars.coffee/covid19-tracker/"}),r.a.createElement("meta",{property:"twitter:title",content:"Corona Virus Tracker | COVID-19"}),r.a.createElement("meta",{property:"twitter:description",content:"Worldwide COVID-19 Tracker | Live updates | 24/7"}),r.a.createElement("meta",{property:"twitter:image",content:Vt.a})))}}]),t}(n.Component),Wt=Object(Je.a)();var zt=function(){return window.scrollTo(0,0),null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.initialize("UA-37850527-11"),c.a.render(r.a.createElement((function(){var e=Object(m.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(u.a)({palette:{type:e?"dark":"light"}})}),[e]),a=Object(ue.a)("https://coronavirus-tracker-api.herokuapp.com/all","items");return r.a.createElement(p.a,{theme:t},r.a.createElement(_t,null),r.a.createElement(i.a,{basename:"/",history:Wt},r.a.createElement(s.a,{component:zt}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(nt,{data:a})),r.a.createElement(s.a,{exact:!0,path:"/worldwide"},r.a.createElement(ft,{data:a})),r.a.createElement(s.a,{exact:!0,path:"/countries"},r.a.createElement(ht,{data:a})),r.a.createElement(s.a,{exact:!0,path:"/news"},r.a.createElement(yt,null)),r.a.createElement(s.a,{exact:!0,path:"/faq"},r.a.createElement(jt,null)),r.a.createElement(s.a,{exact:!0,path:"/country/:country"},r.a.createElement(pt,{data:a}))," ",r.a.createElement(s.a,{exact:!0,path:"/country/:country/:province"},r.a.createElement(pt,{data:a})),r.a.createElement(s.a,null,r.a.createElement(It,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a.p+"static/media/banner.2d30a510.png"}},[[134,1,2]]]);
//# sourceMappingURL=main.9bdb0de2.chunk.js.map