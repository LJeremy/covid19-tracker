(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{116:function(e,t,a){e.exports=a(137)},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a(14),o=a.n(c),i=a(22),m=a(39),s=a(196),u=a(103),E=a(241),p=a(27),d=a(52),h=a(193),g=a(192),b=a(187),f=a(246),v=a(245),y=a(195),w=a(188),x=a(189),O=a(190),j=a(191),N=a(98),k=a.n(N),C=a(96),D=a.n(C),S=a(95),_=a.n(S),T=a(97),z=a.n(T),A=a(198),I=a(99),W=a.n(I),L=a(194),R=a(76),P=a(184),U=a(17),B=Object(P.a)((function(e){return{root:{display:"flex"},drawer:Object(d.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(d.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(d.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}}));var F=function(e){var t=e.container,a=e.children,n=B(),l=Object(U.a)(),c=r.a.useState(!1),o=Object(p.a)(c,2),m=o[0],s=o[1],u=function(){s(!m)},E=r.a.createElement("div",null,r.a.createElement("div",{className:n.toolbar}),r.a.createElement(b.a,null),r.a.createElement(w.a,null,r.a.createElement(i.b,{style:{textDecoration:"inherit",color:"white"},to:"/"},r.a.createElement(x.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(_.a,null)),r.a.createElement(j.a,{primary:"Home"})))),r.a.createElement(b.a,null),r.a.createElement(w.a,null,r.a.createElement(i.b,{style:{textDecoration:"inherit",color:"white"},to:"/worldwide"},r.a.createElement(x.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(D.a,null)),r.a.createElement(j.a,{primary:"Worldwide"})))),r.a.createElement(b.a,null),r.a.createElement(w.a,null,r.a.createElement(i.b,{style:{textDecoration:"inherit",color:"white"},to:"/countries"},r.a.createElement(x.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(z.a,null)),r.a.createElement(j.a,{primary:"Country List"})))),r.a.createElement(b.a,null),r.a.createElement(w.a,null,r.a.createElement(i.b,{style:{textDecoration:"inherit",color:"white"},to:"/news"},r.a.createElement(x.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(k.a,null)),r.a.createElement(j.a,{primary:"News"})))),r.a.createElement(b.a,null));return r.a.createElement("div",{className:n.root},r.a.createElement(g.a,null),r.a.createElement(h.a,{position:"fixed",className:n.appBar},r.a.createElement(L.a,null,r.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:n.menuButton},r.a.createElement(W.a,null)),r.a.createElement(i.b,{style:{textDecoration:"inherit",color:"white"},to:"/"},r.a.createElement(R.a,{variant:"h6",className:n.title},"\ud83e\udda0 COVID-19")))),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(v.a,{smUp:!0,implementation:"css"},r.a.createElement(f.a,{container:t,variant:"temporary",anchor:"rtl"===l.direction?"right":"left",open:m,onClose:u,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},E)),r.a.createElement(v.a,{xsDown:!0,implementation:"css"},r.a.createElement(f.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},E))),r.a.createElement("div",{className:n.toolbar}),r.a.createElement(A.a,{maxWidth:"lg"},a))},M=a(139),V=a(199),H=a(248),q=a(201);function G(e){try{return new Intl.NumberFormat("en-US").format(e)}catch(t){return 0}}var J=Object(P.a)((function(e){return{root:{flexGrow:1},paper:{display:"grid",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function K(e){var t=e.data,a=J();return r.a.createElement("div",{className:a.root},t?r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(H.a,{title:"Confirmed"},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(M.a,{className:a.paper},r.a.createElement("span",{role:"img"}," \ud83e\udd12")," ",G(t.latest.confirmed)))),r.a.createElement(H.a,{title:"Deaths"},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(M.a,{className:a.paper},r.a.createElement("span",{role:"img"}," \ud83d\udc80")," ",G(t.latest.deaths)))),r.a.createElement(H.a,{title:"Recovered"},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(M.a,{className:a.paper},r.a.createElement("span",{role:"img"}," \u2705")," ",G(t.latest.recovered))))):r.a.createElement(q.a,null))}var Y=a(203),$=a(207),Q=a(206),X=a(202),Z=a(204),ee=a(205),te=Object(P.a)({container:{marginTop:32},table:{minWidth:650}});function ae(e){var t=te(),a=e.data;return a?r.a.createElement(X.a,{component:M.a,className:t.container},r.a.createElement(Y.a,{className:t.table,size:"small","aria-label":"simple table"},r.a.createElement(Z.a,null,r.a.createElement(ee.a,null,r.a.createElement(Q.a,null,"Country"),r.a.createElement(Q.a,null,"Province"),r.a.createElement(Q.a,null,"Confirmed"),r.a.createElement(Q.a,null,"Deaths"),r.a.createElement(Q.a,null,"Recovered"))),r.a.createElement($.a,null,a.confirmed.locations.map((function(e,t){return r.a.createElement(ee.a,Object(d.a)({key:e.name},"key",t),r.a.createElement(Q.a,{component:"th",scope:"row"},r.a.createElement(i.b,{style:{color:"white",textDecoration:"inherit"},to:"/country/".concat(e.country)},e.country)),r.a.createElement(Q.a,null,e.province),r.a.createElement(Q.a,null,e.latest),r.a.createElement(Q.a,null,a.deaths.locations[t].latest),r.a.createElement(Q.a,null,a.recovered.locations[t].latest))}))))):r.a.createElement(q.a,null)}var ne=a(208),re=a(249),le=a(75),ce=Object(P.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"},link:{color:"inherit",textDecoration:"none",cursor:"pointer","&:hover":{transform:"translate(14px, 17px) scale(1.2)"}}}}));function oe(e){var t=ce(),a=(e.country,Object(le.a)("https://newsapi.org/v2/everything?language=en&q=covid19&sortBy=publishedAt&pageSize=10&apiKey=a91facb09c9444c4a2797a5ac993dc57","news"));return console.log("NEWS",a),r.a.createElement(w.a,{className:t.root},a&&a.articles.map((function(e,a){return r.a.createElement("a",{href:e.url,target:"_blank",className:t.link},r.a.createElement(x.a,{key:a,alignItems:"flex-start"},r.a.createElement(ne.a,null,r.a.createElement(re.a,{alt:"Remy Sharp",src:e.urlToImage})),r.a.createElement(j.a,{primary:e.title,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},e.source.name,", ",e.author," ",""),e.description)})),9!==a&&r.a.createElement(b.a,{variant:"inset",component:"li"}))})))}var ie=a(46),me=a(47),se=a(50),ue=a(48),Ee=a(51),pe=a(209),de=a(210),he=a(211),ge=a(212),be=a(213),fe=a(214),ve=a(215),ye=a(216),we=a(217),xe=a(218),Oe=a(219),je=a(220),Ne=a(221),ke=a(222),Ce=a(223),De=a(224),Se=a(225),_e=a(226),Te=a(227),ze=a(228),Ae=a(229),Ie=a(230),We=a(231),Le=a(232),Re=a(233),Pe=a(234),Ue=a(235),Be=a(236),Fe=a(237),Me=a(238),Ve=a(239),He=a(240),qe=function(e){function t(){return Object(ie.a)(this,t),Object(se.a)(this,Object(ue.a)(t).apply(this,arguments))}return Object(Ee.a)(t,e),Object(me.a)(t,[{key:"render",value:function(){var e=document.URL,t=document.title;return console.log("DOCUMENT URL",e),console.log("DOCUMENT TITLE",t),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Share this page"),r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(pe.a,{url:e,quote:t},r.a.createElement(de.a,{size:32,round:!0})),r.a.createElement(he.a,{url:e,className:"Demo__some-network__share-count"},(function(e){return e}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(ge.a,{url:e,appId:"521270401588372"},r.a.createElement(be.a,{size:32,round:!0}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(fe.a,{url:e,title:t},r.a.createElement(ve.a,{size:32,round:!0})),r.a.createElement("div",{className:"Demo__some-network__share-count"},"\xa0")),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(ye.a,{url:e,title:t},r.a.createElement(we.a,{size:32,round:!0})),r.a.createElement("div",{className:"Demo__some-network__share-count"},"\xa0")),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(xe.a,{url:e,title:t,separator:":: "},r.a.createElement(Oe.a,{size:32,round:!0})),r.a.createElement("div",{className:"Demo__some-network__share-count"},"\xa0")),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(je.a,{url:e},r.a.createElement(Ne.a,{size:32,round:!0}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(ke.a,{url:e,title:t,windowWidth:660,windowHeight:460},r.a.createElement(Ce.a,{size:32,round:!0})),r.a.createElement("div",null,r.a.createElement(De.a,{url:e,className:"Demo__some-network__share-count"}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(Se.a,{url:e,title:t,description:e},r.a.createElement(_e.a,{size:32,round:!0}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(Te.a,{url:e,title:t},r.a.createElement(ze.a,{size:32,round:!0}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(Ae.a,{url:e,subject:t,body:"body"},r.a.createElement(Ie.a,{size:32,round:!0}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(We.a,{url:e,title:t},r.a.createElement(Le.a,{size:32,round:!0}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(Re.a,{url:e,quote:t},r.a.createElement(Pe.a,{size:32,round:!0}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(Ue.a,{url:e,title:t},r.a.createElement(Be.a,{size:32,round:!0}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(Fe.a,{url:e,title:t},r.a.createElement(Me.a,{size:32,round:!0}))),r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(Ve.a,{url:e,title:t},r.a.createElement(He.a,{size:32,round:!0})))))}}]),t}(n.Component);function Ge(e){var t=e.data;return l.a.pageview("/"),r.a.createElement(F,null,r.a.createElement("h1",null,"Worldwide Cases"),r.a.createElement(K,{data:t}),r.a.createElement("h1",null,"Latest Worldwide News"),r.a.createElement(oe,null),r.a.createElement(qe,null),r.a.createElement("h1",null,"Latest Worldwide Data"),r.a.createElement(ae,{data:t}))}var Je=a(247),Ke=a(244),Ye=a(80),$e=a.n(Ye),Qe=a(101),Xe=a.n(Qe);function Ze(e){console.log("mapLocationToChart value",e);var t=Object.entries(e.history).map((function(e){return function(e){console.log("toDateValuePair value",Object.entries(e)[0][0]);var t=Object.entries(e)[0][1].split("/"),a=Number.parseInt("20"+t[2],10),n=Number.parseInt(t[0],10)-1,r=Number.parseInt(t[1],10);return{date:new Date(a,n,r),value:Number.parseInt(e[1],10)}}(e)})).sort((function(e,t){return e+t})),a=t[0].date;return console.log("CHART FIRST DATA",a),{name:e.country,data:t.map((function(e){return e.value})),pointStart:Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()),pointInterval:864e5}}var et=function(e){function t(e){var a;return Object(ie.a)(this,t),(a=Object(se.a)(this,Object(ue.a)(t).call(this,e))).componentDidMount=function(){console.log("CHART MOUNT",a.props.data);var e={chart:{height:400,type:"line",zoomType:"x"},title:{text:"Coronavirus confirmed cases in ".concat(a.props.country)},xAxis:{type:"datetime"},yAxis:{title:{text:"Confirmed cases"}},legend:{layout:"vertical",align:"left",verticalAlign:"middle"},series:[Ze(a.props.data.confirmed.locations.find((function(e){return e.country===a.props.country})))]};a.setState({options:e}),a.setState({loading:!1})},a.state={loading:!0},a}return Object(Ee.a)(t,e),Object(me.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){e!==t&&this.setState({loading:!1}),console.log("CHART NEW PROPS",e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.options;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(q.a,null):r.a.createElement("div",{style:{marginTop:"32px"}},r.a.createElement(Xe.a,{highcharts:$e.a,options:a})))}}]),t}(n.Component),tt=Object(P.a)((function(e){return{root:{flexGrow:1,marginBottom:32},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function at(e){var t=Object(m.f)().country,a=e.data;l.a.pageview("/country/".concat(t));var c=Object(n.useState)(),o=Object(p.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)(),E=Object(p.a)(u,2),d=E[0],h=E[1],g=Object(n.useState)(),b=Object(p.a)(g,2),f=b[0],v=b[1],y=Object(n.useState)(),w=Object(p.a)(y,2),x=w[0],O=w[1];Object(n.useEffect)((function(){void 0!==a?(s(a.confirmed.locations.find((function(e){return e.country===t}))),h(a.deaths.locations.find((function(e){return e.country===t}))),v(a.recovered.locations.find((function(e){return e.country===t}))),O(new Date(Date.parse(a.confirmed.last_updated)).toString())):console.log("NO DATA")}));var j=tt();return r.a.createElement(F,null,r.a.createElement("div",{className:j.root},r.a.createElement("h1",null,t),a&&i&&d&&f?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("b",null,"Lastest update:")," ",x),r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(H.a,{title:"Confirmed"},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(M.a,{className:j.paper},"\ud83e\udd12 ",G(i.latest)))),r.a.createElement(H.a,{title:"Deaths"},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(M.a,{className:j.paper},"\ud83d\udc80 ",G(d.latest)))),r.a.createElement(H.a,{title:"Recovered"},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(M.a,{className:j.paper},"\u2705 ",G(f.latest))))),r.a.createElement(et,{data:a,country:t}),r.a.createElement(qe,null),r.a.createElement(Je.a,{style:{height:"600px",marginTop:"32px"},center:[i.coordinates.lat,i.coordinates.long],zoom:7},r.a.createElement(Ke.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}))):r.a.createElement(q.a,null)))}var nt=a(242);function rt(e){var t=e.data;l.a.pageview("/countries");var a=Object(n.useState)(""),c=Object(p.a)(a,2),o=c[0],m=c[1],s=Object(n.useState)(),u=Object(p.a)(s,2),E=u[0],d=u[1];return Object(n.useEffect)((function(){if(t){var e=t.confirmed.locations.filter((function(e){return e.country.toLowerCase().includes(o.toLowerCase())}));d(e),console.log("RESULTS",e)}}),[o]),r.a.createElement(F,null,r.a.createElement("h1",null,"Country List"),r.a.createElement(nt.a,{label:"Search",value:o,onChange:function(e){m(e.target.value)}}),r.a.createElement(V.a,{container:!0,spacing:3},E&&E.map((function(e,t){return r.a.createElement(V.a,{item:!0,xs:!0,key:t,style:{textAlign:"center"}},r.a.createElement(i.b,{to:"/country/".concat(e.country),style:{color:"white",textDecoration:"none"}},r.a.createElement("span",{role:"img",style:{display:"inline-block",fontSize:"3em",lineHeight:"1em",verticalAlign:"middle"}},e.country_code.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)}))),r.a.createElement("h3",null,e.province?e.province:e.country)))}))))}function lt(e){var t=e.data;return l.a.pageview("/worldwide"),r.a.createElement(F,null,r.a.createElement("h1",null,"Worldwide Cases"),r.a.createElement("h3",null,"Click on a Country to open a detailed view."),r.a.createElement(ae,{data:t}))}function ct(){return l.a.pageview("/news"),r.a.createElement(F,null,r.a.createElement("h1",null,"Worldwide News"),r.a.createElement(oe,null))}function ot(){return r.a.createElement(F,null,r.a.createElement("h1",null,"NotFOuNBNDDD"))}var it=a(102),mt=a(84),st=a.n(mt),ut=function(e){function t(e){return Object(ie.a)(this,t),Object(se.a)(this,Object(ue.a)(t).call(this,e))}return Object(Ee.a)(t,e),Object(me.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(it.Helmet,null,r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"https://lars.coffee/covid19-tracker/"}),r.a.createElement("meta",{property:"og:title",content:"Corona Virus Tracker | COVID-19"}),r.a.createElement("meta",{property:"og:description",content:"Worldwide COVID-19 Tracker | Live updates | 24/7"}),r.a.createElement("meta",{property:"og:image",content:st.a}),r.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"twitter:url",content:"https://lars.coffee/covid19-tracker/"}),r.a.createElement("meta",{property:"twitter:title",content:"Corona Virus Tracker | COVID-19"}),r.a.createElement("meta",{property:"twitter:description",content:"Worldwide COVID-19 Tracker | Live updates | 24/7"}),r.a.createElement("meta",{property:"twitter:image",content:st.a})))}}]),t}(n.Component),Et=a(21),pt=Object(Et.a)();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.initialize("UA-37850527-11"),o.a.render(r.a.createElement((function(){var e=Object(s.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(u.a)({palette:{type:e?"dark":"light"}})}),[e]),a=Object(le.a)("https://coronavirus-tracker-api.herokuapp.com/all","items");return r.a.createElement(E.a,{theme:t},r.a.createElement(ut,null),r.a.createElement(i.a,{basename:"/covid19-tracker",history:pt},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(Ge,{data:a})),r.a.createElement(m.a,{exact:!0,path:"/worldwide"},r.a.createElement(lt,{data:a})),r.a.createElement(m.a,{exact:!0,path:"/countries"},r.a.createElement(rt,{data:a})),r.a.createElement(m.a,{exact:!0,path:"/news"},r.a.createElement(ct,null)),r.a.createElement(m.a,{exact:!0,path:"/country/:country"},r.a.createElement(at,{data:a})),r.a.createElement(m.a,null,r.a.createElement(ot,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){e.exports=a.p+"static/media/banner.2d30a510.png"}},[[116,1,2]]]);
//# sourceMappingURL=main.f6247203.chunk.js.map