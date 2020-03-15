(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{134:function(e,t,a){e.exports=a(155)},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a(11),l=a.n(c),i=a(26),s=a(55),m=a(213),u=a(121),p=a(255),d=a(18),E=a(65),h=a(210),f=a(209),y=a(204),g=a(258),v=a(257),b=a(212),O=a(205),w=a(206),C=a(207),x=a(208),j=a(114),k=a.n(j),D=a(112),N=a.n(D),S=a(111),T=a.n(S),I=a(113),V=a.n(I),_=a(215),A=a(115),R=a.n(A),W=a(211),z=a(92),L=a(201),P=a(17),H=Object(L.a)((function(e){return{root:{display:"flex",marginTop:e.spacing(8)},drawer:Object(E.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(E.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(E.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},link:{color:e.palette.text.primary,textDecoration:"inherit"},title:{color:e.palette.text.primary,textDecoration:"inherit"}}}));var M=function(e){var t=e.container,a=e.children,n=H(),o=Object(P.a)(),c=r.a.useState(!1),l=Object(d.a)(c,2),s=l[0],m=l[1],u=function(){m(!s)},p=r.a.createElement("div",{className:n.drawer},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(y.a,null),r.a.createElement(O.a,null,r.a.createElement(i.b,{className:n.link,to:"/"},r.a.createElement(w.a,{button:!0},r.a.createElement(C.a,null,r.a.createElement(T.a,null)),r.a.createElement(x.a,{primary:"Home"})))),r.a.createElement(y.a,null),r.a.createElement(O.a,null,r.a.createElement(i.b,{className:n.link,to:"/worldwide"},r.a.createElement(w.a,{button:!0},r.a.createElement(C.a,null,r.a.createElement(N.a,null)),r.a.createElement(x.a,{primary:"Worldwide"})))),r.a.createElement(y.a,null),r.a.createElement(O.a,null,r.a.createElement(i.b,{className:n.link,to:"/countries"},r.a.createElement(w.a,{button:!0},r.a.createElement(C.a,null,r.a.createElement(V.a,null)),r.a.createElement(x.a,{primary:"Country List"})))),r.a.createElement(y.a,null),r.a.createElement(O.a,null,r.a.createElement(i.b,{className:n.link,to:"/news"},r.a.createElement(w.a,{button:!0},r.a.createElement(C.a,null,r.a.createElement(k.a,null)),r.a.createElement(x.a,{primary:"News"})))),r.a.createElement(y.a,null));return r.a.createElement("div",{className:n.root},r.a.createElement(f.a,null),r.a.createElement(h.a,{position:"fixed",className:n.appBar},r.a.createElement(W.a,null,r.a.createElement(b.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:n.menuButton},r.a.createElement(R.a,null)),r.a.createElement(i.b,{className:n.title,to:"/"},r.a.createElement(z.a,{variant:"h6"},"\ud83e\udda0 COVID-19")))),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(v.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{container:t,variant:"temporary",anchor:"rtl"===o.direction?"right":"left",open:s,onClose:u,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},p)),r.a.createElement(v.a,{xsDown:!0,implementation:"css"},r.a.createElement(g.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},p))),r.a.createElement("div",{className:n.toolbar}),r.a.createElement(_.a,{maxWidth:"lg"},a,r.a.createElement(y.a,{style:{marginTop:32}}),r.a.createElement("h4",{style:{marginTop:32}},"Sources:"," ",r.a.createElement("a",{className:n.link,href:"https://github.com/CSSEGISandData/COVID-19"},"2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns Hopkins CSSE"," "))))},F=a(157),B=a(216),U=a(261),Y=a(218),G=a(45),J=a.n(G),X=a(44),q=a.n(X),K=a(46),Z=a.n(K);function Q(e){try{return new Intl.NumberFormat("en-US").format(e)}catch(t){return 0}}var $=Object(L.a)((function(e){return{root:{flexGrow:1},paper:{display:"grid",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},cases:{color:q.a[700]},death:{color:J.a[700]},recovered:{color:Z.a[700]}}}));function ee(e){var t=e.data,a=$();return r.a.createElement("div",{className:a.root},t?r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(U.a,{title:"Confirmed"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:a.paper},r.a.createElement("h3",{className:a.cases},r.a.createElement("span",{role:"img"}," \ud83e\udd12")," ",Q(t.latest.confirmed))))),r.a.createElement(U.a,{title:"Deaths"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:a.paper},r.a.createElement("h3",{className:a.death},r.a.createElement("span",{role:"img"}," \ud83d\udc80")," ",Q(t.latest.deaths))))),r.a.createElement(U.a,{title:"Recovered"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:a.paper},r.a.createElement("h3",{className:a.recovered},r.a.createElement("span",{role:"img"}," \u2705")," ",Q(t.latest.recovered)))))):r.a.createElement(Y.a,null))}var te=a(220),ae=a(224),ne=a(223),re=a(219),oe=a(221),ce=a(222),le=Object(L.a)((function(e){return{container:{marginTop:32},table:{minWidth:650},link:{color:e.palette.text.primary,textDecoration:"inherit"}}}));function ie(e){var t=le(),a=e.data;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Click on a Country to open a detailed view."),r.a.createElement(re.a,{component:F.a,className:t.container},r.a.createElement(te.a,{className:t.table,size:"small","aria-label":"simple table"},r.a.createElement(oe.a,null,r.a.createElement(ce.a,null,r.a.createElement(ne.a,null,"Country"),r.a.createElement(ne.a,null,"Province"),r.a.createElement(ne.a,null,"Confirmed"),r.a.createElement(ne.a,null,"Deaths"),r.a.createElement(ne.a,null,"Recovered"))),r.a.createElement(ae.a,null,a.confirmed.locations.map((function(e,n){return r.a.createElement(ce.a,Object(E.a)({key:e.name},"key",n),r.a.createElement(ne.a,{component:"th",scope:"row"},r.a.createElement(i.b,{className:t.link,to:"/country/".concat(e.province?"".concat(e.country,"/").concat(e.province):e.country)},e.country)),r.a.createElement(ne.a,null,e.province),r.a.createElement(ne.a,null,e.latest),r.a.createElement(ne.a,null,a.deaths.locations[n].latest),r.a.createElement(ne.a,null,a.recovered.locations[n].latest))})))))):r.a.createElement(Y.a,null)}var se=a(225),me=a(265),ue=a(91),pe=Object(L.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"},link:{color:"inherit",textDecoration:"none",cursor:"pointer","&:hover":{transform:"translate(14px, 17px) scale(1.2)"}}}}));function de(e){var t=pe(),a=e.country,n=Object(ue.a)("https://newsapi.org/v2/top-headlines?q=corona&country=".concat(a?a.toLowerCase():"us","&pageSize=10&apiKey=a91facb09c9444c4a2797a5ac993dc57"),"news".concat(a?a.toLowerCase():""));return console.log("NEWS",n),console.log("NEWS COUNTRY CODE",a),r.a.createElement(O.a,{className:t.root},n&&n.articles&&n.articles.map((function(e,a){return r.a.createElement("a",{key:a,href:e.url,target:"_blank",className:t.link},r.a.createElement("article",null,r.a.createElement(w.a,{key:a,alignItems:"flex-start"},r.a.createElement(se.a,null,r.a.createElement(me.a,{alt:"Remy Sharp",src:e.urlToImage})),r.a.createElement(x.a,{primary:e.title,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},e.source.name,", ",e.author," ",""),e.description)}))),9!==a&&r.a.createElement(y.a,{variant:"inset",component:"li"}))})))}var Ee=a(48),he=a(49),fe=a(52),ye=a(50),ge=a(53),ve=a(226),be=a(227),Oe=a(228),we=a(229),Ce=a(230),xe=a(231),je=a(232),ke=a(233),De=a(234),Ne=a(235),Se=a(236),Te=a(237),Ie=a(238),Ve=a(239),_e=a(240),Ae=a(241),Re=a(242),We=a(243),ze=a(244),Le=a(245),Pe=a(246),He=a(247),Me=a(248),Fe=a(249),Be=a(250),Ue=a(251),Ye=a(252),Ge=a(253),Je=function(e){function t(){return Object(Ee.a)(this,t),Object(fe.a)(this,Object(ye.a)(t).apply(this,arguments))}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){var e=document.URL,t=document.title;return console.log("DOCUMENT URL",e),console.log("DOCUMENT TITLE",t),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Share this page"),r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(ve.a,{url:e,quote:t},r.a.createElement(be.a,{size:32,round:!0})),r.a.createElement(Oe.a,{url:e,className:"Demo__some-network__share-count"},(function(e){return e}))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(we.a,{url:e,title:t},r.a.createElement(Ce.a,{size:32,round:!0})),r.a.createElement("div",{className:"Demo__some-network__share-count"},"\xa0")),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(xe.a,{url:e,title:t},r.a.createElement(je.a,{size:32,round:!0})),r.a.createElement("div",{className:"Demo__some-network__share-count"},"\xa0")),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(ke.a,{url:e,title:t,separator:":: "},r.a.createElement(De.a,{size:32,round:!0})),r.a.createElement("div",{className:"Demo__some-network__share-count"},"\xa0")),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(Ne.a,{url:e},r.a.createElement(Se.a,{size:32,round:!0}))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(Te.a,{url:e,title:t,windowWidth:660,windowHeight:460},r.a.createElement(Ie.a,{size:32,round:!0})),r.a.createElement("div",null,r.a.createElement(Ve.a,{url:e,className:"Demo__some-network__share-count"}))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(_e.a,{url:e,title:t},r.a.createElement(Ae.a,{size:32,round:!0}))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(Re.a,{url:e,subject:t,body:"body"},r.a.createElement(We.a,{size:32,round:!0}))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(ze.a,{url:e,title:t},r.a.createElement(Le.a,{size:32,round:!0}))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(Pe.a,{url:e,quote:t},r.a.createElement(He.a,{size:32,round:!0}))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(Me.a,{url:e,title:t},r.a.createElement(Fe.a,{size:32,round:!0}))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(Be.a,{url:e,title:t},r.a.createElement(Ue.a,{size:32,round:!0}))),r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(Ye.a,{url:e,title:t},r.a.createElement(Ge.a,{size:32,round:!0})))))}}]),t}(n.Component),Xe=a(23),qe=a(262),Ke=a(263),Ze=a(260),Qe=a(264),$e=function(e,t,a,n){var r=e*t;return r<a?a:r>n?n:r},et=(Object(Xe.b)(),function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(qe.a,{style:{height:"600px",marginTop:"32px"},center:[51.505,-.09],zoom:3.5,maxZoom:12,minZoom:3,attributionControl:!1,zoomControl:!1,maxBoundsViscosity:.7,useFlyTo:!0},r.a.createElement(Ke.a,{url:"https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"}),t.confirmed.locations.map((function(e,t){return r.a.createElement(Ze.a,{key:t,center:[e.coordinates.lat,e.coordinates.long],radius:$e(e.latest,25,15e3,5e5),color:"red",fillColor:"#f03",fillOpacity:.5},r.a.createElement(Qe.a,null,r.a.createElement("h4",null,r.a.createElement("b",null,e.province||e.country),r.a.createElement("br",null),r.a.createElement("b",null,"Confirmed cases: ",e.latest))))}))))}),tt=Object(L.a)((function(e){return{root:{flexGrow:1},paper:{display:"grid",padding:e.spacing(2),marginBottom:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),at=function(e){var t=tt(),a=e.data;return r.a.createElement(B.a,{container:!0,spacing:0},r.a.createElement(U.a,{title:"How the Mortality rate is calculated: \n (deaths / confirmed) * 100)"},r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(F.a,{className:t.paper},r.a.createElement("h1",null,"Mortality rate: ",a?"".concat((a.latest.deaths/a.latest.confirmed*100).toFixed(2)):"-","%")))))};function nt(e){var t=e.data;return o.a.pageview("/"),r.a.createElement(M,null,r.a.createElement("h1",null,"Worldwide Cases"),r.a.createElement(at,{data:t}),r.a.createElement(ee,{data:t}),r.a.createElement("h4",null,"* Note: Some countries are running out of test kits and/or are not reporting all cases. Numbers may be inaccurate."),r.a.createElement(et,{data:t}),r.a.createElement(Je,null),r.a.createElement("h1",null,"Latest Worldwide Data"),r.a.createElement(ie,{data:t}),r.a.createElement("h1",null,"Latest Worldwide News"),r.a.createElement(de,null))}var rt=a(51),ot=a(69),ct=a.n(ot),lt=a(89),it=a.n(lt);function st(e){console.log("mapLocationToChart value",e);var t=Object.entries(e.history).map((function(e){return function(e){console.log("toDateValuePair value",Object.entries(e)[0][0]);var t=Object.entries(e)[0][1].split("/"),a=Number.parseInt("20"+t[2],10),n=Number.parseInt(t[0],10)-1,r=Number.parseInt(t[1],10);return{date:new Date(a,n,r),value:Number.parseInt(e[1],10)}}(e)})).sort((function(e,t){return e.date-t.date})),a=t[0].date;return console.log("CHART FIRST DATA",t),{name:e.country,data:t.map((function(e){return e.value})),pointStart:Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()),pointInterval:864e5}}var mt=function(e){function t(e){var a;return Object(Ee.a)(this,t),(a=Object(fe.a)(this,Object(ye.a)(t).call(this,e))).componentDidMount=function(){if(console.log("CHART MOUNT",a.props.data),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){var e={chart:{height:400,type:"line",zoomType:"x",backgroundColor:"#303030"},title:{text:"Coronavirus confirmed cases in ".concat(a.props.country),style:{color:"#fff"}},xAxis:{type:"datetime"},yAxis:{title:{text:"Confirmed cases"}},plotOptions:{series:{dataLabels:{enabled:!0,formatter:function(){return this.y>0?this.y:null}}}},series:[st(a.props.data.confirmed.locations.find((function(e){return e.country===a.props.country})))]};a.setState({options:e}),a.setState({loading:!1})}else{var t={chart:{height:400,type:"line",zoomType:"x"},title:{text:"Coronavirus confirmed cases in ".concat(a.props.country)},xAxis:{type:"datetime"},yAxis:{title:{text:"Confirmed cases"}},plotOptions:{series:{dataLabels:{enabled:!0,formatter:function(){return this.y>0?this.y:null}}}},series:[st(a.props.data.confirmed.locations.find((function(e){return e.country===a.props.country})))]};a.setState({options:t}),a.setState({loading:!1})}},a.state={loading:!0},a}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){e!==t&&this.setState({loading:!1}),console.log("CHART NEW PROPS",e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.options;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(Y.a,null):r.a.createElement("div",{style:{marginTop:"32px"}},r.a.createElement(it.a,{highcharts:ct.a,options:a})))}}]),t}(n.Component),ut=Object(L.a)((function(e){return{root:{flexGrow:1,marginBottom:32},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},cases:{color:q.a[700]},death:{color:J.a[700]},recovered:{color:Z.a[700]}}})),pt=function(e,t,a,n){var r=e*t;return r<a?a:r>n?n:r};function dt(e){var t=Object(s.f)(),a=t.country,c=t.province,l=e.data;o.a.pageview("/country/".concat(a));var i=Object(n.useState)(),m=Object(d.a)(i,2),u=m[0],p=m[1],E=Object(n.useState)(),h=Object(d.a)(E,2),f=h[0],y=h[1],g=Object(n.useState)(),v=Object(d.a)(g,2),b=v[0],O=v[1],w=Object(n.useState)(),C=Object(d.a)(w,2),x=C[0],j=C[1];Object(n.useEffect)((function(){void 0!==l?(p(l.confirmed.locations.find((function(e){return c?c&&e.province===c:e.country===a}))),y(l.deaths.locations.find((function(e){return c?c&&e.province===c:e.country===a}))),O(l.recovered.locations.find((function(e){return c?c&&e.province===c:e.country===a}))),j(new Date(Date.parse(l.confirmed.last_updated)).toString()),console.log("Province",c)):console.log("NO DATA")}));var k=ut();return r.a.createElement(M,null,l&&u&&f&&b&&r.a.createElement(rt.Helmet,null,r.a.createElement("title",null,"".concat(c?"".concat(a," - ").concat(c):a," | COVID-19")),r.a.createElement("meta",{name:"title",content:"".concat(c?"".concat(a," - ").concat(c):a," | COVID-19")}),r.a.createElement("meta",{name:"description",content:"".concat(c?"".concat(a," - ").concat(c):a,": Confirmed ").concat(Q(u.latest),", Deaths: ").concat(Q(f.latest),", Recovered: ").concat(Q(b.latest),"| COVID-19")}),r.a.createElement("meta",{name:"keywords",content:"\n            corona, coronavirus, coronavirus in ".concat(a,", coronavirus in ").concat(c,", covid19, corona in ").concat(a,", corona in ").concat(c,", covid19 in ").concat(a,", covid19 in ").concat(c,", corona ").concat(a,", corona ").concat(c,", coronavirus ").concat(a,", coronavirus ").concat(c,", coronavirus tracker, coronavirus numbers, corona numbers, corona tracker, corona map, coronavirus map\n            ")})),r.a.createElement("div",{className:k.root},r.a.createElement("h1",null,c?"".concat(a," - ").concat(c):a),l&&u&&f&&b?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("b",null,"Lastest update:")," ",x),r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(U.a,{title:"Confirmed"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:k.paper},r.a.createElement("h3",{className:k.cases},r.a.createElement("span",{role:"img"}," \ud83e\udd12")," ",Q(u.latest))))),r.a.createElement(U.a,{title:"Deaths"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:k.paper},r.a.createElement("h3",{className:k.deaths},r.a.createElement("span",{role:"img"}," \ud83d\udc80")," ",Q(f.latest))))),r.a.createElement(U.a,{title:"Recovered"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:k.paper},r.a.createElement("h3",{className:k.recovered},r.a.createElement("span",{role:"img"}," \u2705")," ",Q(b.latest)))))),r.a.createElement(mt,{data:l,country:a}),r.a.createElement(qe.a,{style:{height:"600px",marginTop:"32px"},center:[u.coordinates.lat,u.coordinates.long],zoom:6,maxZoom:12,minZoom:3,attributionControl:!1,zoomControl:!1,maxBoundsViscosity:.7,useFlyTo:!0},r.a.createElement(Ke.a,{url:"https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"}),r.a.createElement(Ze.a,{center:[u.coordinates.lat,u.coordinates.long],radius:pt(u.latest,25,15e3,5e5),color:"red",fillColor:"#f03",fillOpacity:.5},r.a.createElement(Qe.a,null,r.a.createElement("h4",null,r.a.createElement("b",null,u.province||u.country),r.a.createElement("br",null),r.a.createElement("b",null,"Confirmed cases: ",u.latest))))),r.a.createElement(Je,null),r.a.createElement("h1",null,"Country Specific News:"),r.a.createElement(de,{country:u.country_code})):r.a.createElement(Y.a,null)))}var Et=a(256),ht=Object(L.a)((function(e){return{country:{color:e.palette.text.primary}}}));function ft(e){var t=e.data;o.a.pageview("/countries");var a=ht(),c=Object(n.useState)(""),l=Object(d.a)(c,2),s=l[0],m=l[1],u=Object(n.useState)(),p=Object(d.a)(u,2),E=p[0],h=p[1];return Object(n.useEffect)((function(){if(t){var e=t.confirmed.locations.filter((function(e){return e.country.toLowerCase().includes(s.toLowerCase())}));h(e),console.log("RESULTS",e)}}),[s]),r.a.createElement(M,null,r.a.createElement("h1",null,"Country List"),r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(Et.a,{style:{marginBottom:32},fullWidth:!0,label:"Search",value:s,onChange:function(e){m(e.target.value)}})),E&&E.map((function(e,t){return r.a.createElement(B.a,{item:!0,xs:!0,key:t,style:{textAlign:"center"}},r.a.createElement(i.b,{to:"/country/".concat(e.province?"".concat(e.country,"/").concat(e.province):e.country),style:{color:"white",textDecoration:"none"}},r.a.createElement("span",{role:"img",style:{display:"inline-block",fontSize:"3em",lineHeight:"1em",verticalAlign:"middle"}},e.country_code.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)}))),r.a.createElement("h3",{className:a.country},e.province?e.province:e.country)))}))))}function yt(e){var t=e.data;return o.a.pageview("/worldwide"),r.a.createElement(M,null,r.a.createElement("h1",null,"Worldwide Cases"),r.a.createElement(ie,{data:t}))}var gt=a(122);function vt(){return o.a.pageview("/news"),r.a.createElement(M,null,r.a.createElement("h1",null,"Worldwide News"),r.a.createElement(gt.a,{sourceType:"profile",screenName:"bnodesk",theme:"dark",options:{height:800}}),r.a.createElement(de,null))}var bt=a(254),Ot=a(119),wt=a.n(Ot),Ct=a(120),xt=a.n(Ct),jt=a(118),kt=a.n(jt),Dt=Object(L.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}}));function Nt(e){var t=e.title,a=e.content;o.a.pageview("/faq");var n=Dt(),c=r.a.useState(!1),l=Object(d.a)(c,2),i=l[0],s=l[1];return r.a.createElement(M,null,r.a.createElement(O.a,{component:"nav",className:n.root},r.a.createElement(w.a,{button:!0,onClick:function(){s(!i)}},r.a.createElement(C.a,null,r.a.createElement(kt.a,null)),r.a.createElement(x.a,{primary:t}),i?r.a.createElement(wt.a,null):r.a.createElement(xt.a,null)),r.a.createElement(bt.a,{in:i,timeout:"auto",unmountOnExit:!0},r.a.createElement(O.a,{component:"div",disablePadding:!0},r.a.createElement(w.a,{button:!0},r.a.createElement("p",null,a))))))}function St(){return o.a.pageview("/faq"),r.a.createElement(M,null,r.a.createElement("h1",null,"Q&A on coronaviruses (COVID-19)"),r.a.createElement(Nt,{title:"What is a coronavirus?",content:"Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19."}),r.a.createElement(Nt,{title:"What is COVID-19?",content:"COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. "}),r.a.createElement(Nt,{title:"What are the symptoms of COVID-19?",content:"The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don\u2019t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention."}),r.a.createElement(Nt,{title:"How does COVID-19 spread?",content:"People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick. WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share updated findings. Can the virus that causes COVID-19 be transmitted through the air? Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air.  See previous answer on \u201cHow does COVID-19 spread?\u201d Can CoVID-19 be caught from a person who has no symptoms? The main way the disease spreads is through respiratory droplets expelled by someone who is coughing. The risk of catching COVID-19 from someone with no symptoms at all is very low. However, many people with COVID-19 experience only mild symptoms. This is particularly true at the early stages of the disease. It is therefore possible to catch COVID-19 from someone who has, for example, just a mild cough and does not feel ill.  WHO is assessing ongoing research on the period of transmission of COVID-19 and will continue to share updated findings. Can I catch COVID-19 from the feces of someone with the disease? The risk of catching COVID-19 from the feces of an infected person appears to be low. While initial investigations suggest the virus may be present in feces in some cases, spread through this route is not a main feature of the outbreak. WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share new findings. Because this is a risk, however, it is another reason to clean hands regularly, after using the bathroom and before eating. "}))}var Tt=Object(Xe.a)();function It(){return Object(n.useEffect)((function(){setTimeout((function(){Tt.goBack()}),5e3)})),r.a.createElement(M,null,r.a.createElement("h1",null,"Error: Not found."),r.a.createElement("h3",null,"Redirecting you back to previous page in 5 sec..."))}var Vt=Object(L.a)((function(e){return{root:{flexGrow:1,marginBottom:32},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},cases:{color:q.a[700]},death:{color:J.a[700]},recovered:{color:Z.a[700]}}}));function _t(e){e.data;o.a.pageview("/compare");var t=Vt();return r.a.createElement(M,null,r.a.createElement(rt.Helmet,null,r.a.createElement("title",null,"Compare Countries | COVID-19"),r.a.createElement("meta",{name:"title",content:"Compare Countries| COVID-19"})),r.a.createElement("div",{className:t.root},r.a.createElement("h1",null,"Compare Countries"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"JJJJJ"))))}var At=function(e){function t(e){var a;return Object(Ee.a)(this,t),(a=Object(fe.a)(this,Object(ye.a)(t).call(this,e))).configureOptions=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){var e={chart:{height:400,type:"line",zoomType:"x",backgroundColor:"#303030"},title:{text:"Comparing cases from countries: ".concat(a.props.countryX," & ").concat(a.props.countryY),style:{color:"#fff"}},xAxis:{type:"datetime"},yAxis:{title:{text:"Confirmed cases"}},plotOptions:{series:{dataLabels:{enabled:!0,formatter:function(){return this.y>0?this.y:null}}}},series:[st(a.props.data.confirmed.locations.find((function(e){return e.country===a.props.countryX}))),st(a.props.data.confirmed.locations.find((function(e){return e.country===a.props.countryY})))]};a.setState({options:e}),a.setState({loading:!1})}else{var t={chart:{height:400,type:"line",zoomType:"x"},title:{text:"Comparing cases from countries: ".concat(a.props.countryX," & ").concat(a.props.countryY)},xAxis:{type:"datetime"},yAxis:{title:{text:"Confirmed cases"}},plotOptions:{series:{dataLabels:{enabled:!0,formatter:function(){return this.y>0?this.y:null}}}},series:[st(a.props.data.confirmed.locations.find((function(e){return e.country===a.props.countryX}))),st(a.props.data.confirmed.locations.find((function(e){return e.country===a.props.countryY})))]};a.setState({options:t}),a.setState({loading:!1})}},a.componentDidMount=function(){console.log("CHART MOUNT",a.props.data),a.configureOptions()},a.state={loading:!0},a}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){e!==t&&this.configureOptions(),console.log("CHART NEW PROPS",e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.options;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(Y.a,null):r.a.createElement("div",{style:{marginTop:"32px"}},r.a.createElement(it.a,{highcharts:ct.a,options:a})))}}]),t}(n.Component),Rt=Object(L.a)((function(e){return{root:{flexGrow:1,marginBottom:32},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},cases:{color:q.a[700]},death:{color:J.a[700]},recovered:{color:Z.a[700]}}})),Wt=function(e){return e.map((function(t,a){var n=e[a-1]-e[a];return Math.abs((n/e[a-1]*100).toFixed(0))||0}))[e.length-1]};function zt(e){var t=Object(s.f)(),a=t.countryX,c=t.countryY,l=e.data;o.a.pageview("/compare/".concat(a,"/").concat(c));var i=Object(n.useState)(),m=Object(d.a)(i,2),u=m[0],p=m[1],E=Object(n.useState)(),h=Object(d.a)(E,2),f=h[0],y=h[1],g=Object(n.useState)(),v=Object(d.a)(g,2),b=v[0],O=v[1],w=Object(n.useState)(),C=Object(d.a)(w,2),x=C[0],j=C[1],k=Object(n.useState)(),D=Object(d.a)(k,2),N=D[0],S=D[1],T=Object(n.useState)(),I=Object(d.a)(T,2),V=I[0],_=I[1],A=Object(n.useState)(),R=Object(d.a)(A,2),W=R[0],z=R[1];Object(n.useEffect)((function(){void 0!==l?(p(l.confirmed.locations.find((function(e){return e.country===a}))),y(l.deaths.locations.find((function(e){return e.country===a}))),O(l.recovered.locations.find((function(e){return e.country===a}))),j(l.confirmed.locations.find((function(e){return e.country===c}))),S(l.deaths.locations.find((function(e){return e.country===c}))),_(l.recovered.locations.find((function(e){return e.country===c}))),z(new Date(Date.parse(l.confirmed.last_updated)).toString()),a&&console.log()):console.log("NO DATA")}));var L=Rt();return r.a.createElement(M,null,l&&u&&f&&b&&r.a.createElement(rt.Helmet,null,r.a.createElement("title",null,"Compare Countries| COVID-19"),r.a.createElement("meta",{name:"title",content:"Compare Countries| COVID-19"})),r.a.createElement("div",{className:L.root},r.a.createElement("h1",null,"Compare Countries"),l&&u&&f&&b?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("b",null,"Lastest update:")," ",W),r.a.createElement("h2",null,a),r.a.createElement("h4",null,"Increase since yesterday:"," ",Wt(Object.values(u.history).sort((function(e,t){return e-t}))),"%"),r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(U.a,{title:"Confirmed"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:L.paper},r.a.createElement("h3",{className:L.cases},r.a.createElement("span",{role:"img"}," \ud83e\udd12")," ",Q(u.latest))))),r.a.createElement(U.a,{title:"Deaths"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:L.paper},r.a.createElement("h3",{className:L.deaths},r.a.createElement("span",{role:"img"}," \ud83d\udc80")," ",Q(f.latest))))),r.a.createElement(U.a,{title:"Recovered"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:L.paper},r.a.createElement("h3",{className:L.recovered},r.a.createElement("span",{role:"img"}," \u2705")," ",Q(b.latest)))))),r.a.createElement("h2",null,c),r.a.createElement("h4",null,"Increase since yesterday:"," ",Wt(Object.values(x.history).sort((function(e,t){return e-t}))),"%"),r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(U.a,{title:"Confirmed"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:L.paper},r.a.createElement("h3",{className:L.cases},r.a.createElement("span",{role:"img"}," \ud83e\udd12")," ",Q(x.latest))))),r.a.createElement(U.a,{title:"Deaths"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:L.paper},r.a.createElement("h3",{className:L.deaths},r.a.createElement("span",{role:"img"}," \ud83d\udc80")," ",Q(N.latest))))),r.a.createElement(U.a,{title:"Recovered"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(F.a,{className:L.paper},r.a.createElement("h3",{className:L.recovered},r.a.createElement("span",{role:"img"}," \u2705")," ",Q(V.latest)))))),r.a.createElement(At,{data:l,countryX:a,countryY:c}),r.a.createElement(Je,null)):r.a.createElement(Y.a,null)))}var Lt=a(99),Pt=a.n(Lt),Ht=function(e){function t(e){return Object(Ee.a)(this,t),Object(fe.a)(this,Object(ye.a)(t).call(this,e))}return Object(ge.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(rt.Helmet,null,r.a.createElement("meta",{name:"description",content:"Live statistics and coronavirus news tracking the number of confirmed cases, recovered patients, and death toll by country due to the COVID 19 coronavirus from Wuhan, China. Coronavirus counter with new cases, historical data, and info. Daily charts, graphs, news and updates"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"https://lars.coffee/covid19-tracker/"}),r.a.createElement("meta",{property:"og:title",content:"Corona Virus Tracker | COVID-19"}),r.a.createElement("meta",{property:"og:description",content:"Worldwide COVID-19 Tracker | Live updates | 24/7"}),r.a.createElement("meta",{property:"og:image",content:Pt.a}),r.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"twitter:url",content:"https://lars.coffee/covid19-tracker/"}),r.a.createElement("meta",{property:"twitter:title",content:"Corona Virus Tracker | COVID-19"}),r.a.createElement("meta",{property:"twitter:description",content:"Worldwide COVID-19 Tracker | Live updates | 24/7"}),r.a.createElement("meta",{property:"twitter:image",content:Pt.a}),r.a.createElement("meta",{name:"keywords",content:"\n            corona, coronavirus, coronavirus in nederland, covid19, corona in, covid19 in , covid19 in, corona, corona, coronavirus, coronavirus, coronavirus tracker, coronavirus numbers, corona numbers, corona tracker, corona map, coronavirus map\n            "})))}}]),t}(n.Component),Mt=Object(Xe.a)();var Ft=function(){return window.scrollTo(0,0),null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.initialize("UA-37850527-11"),l.a.render(r.a.createElement((function(){var e=Object(m.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(u.a)({palette:{type:e?"dark":"light"}})}),[e]),a=Object(ue.a)("https://coronavirus-tracker-api.herokuapp.com/all","items");return"PROD"===Object({NODE_ENV:"production",PUBLIC_URL:"/covid19-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STAGE&&(console.log=function(){}),r.a.createElement(p.a,{theme:t},r.a.createElement(Ht,null),r.a.createElement(i.a,{basename:"/",history:Mt},r.a.createElement(s.a,{component:Ft}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(nt,{data:a})),r.a.createElement(s.a,{exact:!0,path:"/worldwide"},r.a.createElement(yt,{data:a})),r.a.createElement(s.a,{exact:!0,path:"/countries"},r.a.createElement(ft,{data:a})),r.a.createElement(s.a,{exact:!0,path:"/news"},r.a.createElement(vt,null)),r.a.createElement(s.a,{exact:!0,path:"/faq"},r.a.createElement(St,null)),r.a.createElement(s.a,{exact:!0,path:"/country/:country"},r.a.createElement(dt,{data:a})),r.a.createElement(s.a,{exact:!0,path:"/country/:country/:province"},r.a.createElement(dt,{data:a})),r.a.createElement(s.a,{exact:!0,path:"/compare"},r.a.createElement(_t,{data:a})),r.a.createElement(s.a,{exact:!0,path:"/compare/:countryX/:countryY"},r.a.createElement(zt,{data:a})),r.a.createElement(s.a,null,r.a.createElement(It,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a.p+"static/media/banner.2d30a510.png"}},[[134,1,2]]]);
//# sourceMappingURL=main.f2da69bf.chunk.js.map