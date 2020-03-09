(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{50:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=a(20),i=a(19),m=a(86),s=a(89),u=a(90),E=a(91),p=a(88),h=a(92),d=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),f=function(e){var t=e.children,a=d();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(s.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(o.b,{style:{textDecoration:"inherit",color:"white"},to:"/"},r.a.createElement(E.a,{variant:"h6",className:a.title},"COVID-19")))),r.a.createElement(h.a,{maxWidth:"lg"},t))},g=a(61),b=a(93),v=a(100),O=a(25),y=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function x(){var e=Object(O.a)("https://coronavirus-tracker-api.herokuapp.com/all","items"),t=y();return r.a.createElement("div",{className:t.root},e?r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(v.a,{title:"Confirmed"},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(g.a,{className:t.paper},"\ud83e\udd12 ",JSON.stringify(e.latest.confirmed)))),r.a.createElement(v.a,{title:"Deaths"},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(g.a,{className:t.paper},"\ud83d\udc80 ",JSON.stringify(e.latest.deaths)))),r.a.createElement(v.a,{title:"Recovered"},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(g.a,{className:t.paper},"\u2705 ",JSON.stringify(e.latest.recovered))))):r.a.createElement("h1",null,"Loading..."))}var N=a(95),j=a(99),w=a(98),k=a(94),D=a(96),S=a(97),C=Object(m.a)({container:{marginTop:32},table:{minWidth:650}});function A(){var e=C(),t=Object(O.a)("https://coronavirus-tracker-api.herokuapp.com/all","items");return console.log("DATA",t),t?r.a.createElement(k.a,{component:g.a,className:e.container},r.a.createElement(N.a,{className:e.table,size:"small","aria-label":"simple table"},r.a.createElement(D.a,null,r.a.createElement(S.a,null,r.a.createElement(w.a,null,"Country"),r.a.createElement(w.a,null,"Province"),r.a.createElement(w.a,null,"Confirmed"),r.a.createElement(w.a,null,"Deaths"),r.a.createElement(w.a,null,"Recovered"))),r.a.createElement(j.a,null,t.confirmed.locations.map((function(e,a){return r.a.createElement(S.a,{key:e.name},r.a.createElement(w.a,{component:"th",scope:"row"},r.a.createElement(o.b,{style:{textDecoration:"inherit"},to:"/country/".concat(e.country)},e.country)),r.a.createElement(w.a,null,e.province),r.a.createElement(w.a,null,e.latest),r.a.createElement(w.a,null,t.deaths.locations[a].latest),r.a.createElement(w.a,null,t.recovered.locations[a].latest))}))))):r.a.createElement("h1",null,"Loading...")}function J(){return r.a.createElement(f,null,r.a.createElement("h1",null,"Cases"),r.a.createElement(x,null),r.a.createElement(A,null))}var R=a(21),B=a(102),F=a(101),G=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function T(){var e=Object(i.f)().country,t=Object(n.useState)(),a=Object(R.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(),m=Object(R.a)(o,2),s=m[0],u=m[1],E=Object(n.useState)(),p=Object(R.a)(E,2),h=p[0],d=p[1],y=Object(n.useState)(),x=Object(R.a)(y,2),N=(x[0],x[1],Object(O.a)("https://coronavirus-tracker-api.herokuapp.com/all","country"));Object(n.useEffect)((function(){void 0!==N?(c(N.confirmed.locations.find((function(t){return t.country===e}))),u(N.deaths.locations.find((function(t){return t.country===e}))),d(N.recovered.locations.find((function(t){return t.country===e}))),console.log("CONFIRMED",l)):console.log("NO DATA")}));var j=G();return r.a.createElement(f,null,r.a.createElement("div",{className:j.root},r.a.createElement("h1",null,e),N&&l&&s&&h?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(v.a,{title:"Confirmed"},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(g.a,{className:j.paper},"\ud83e\udd12 ",l.latest))),r.a.createElement(v.a,{title:"Deaths"},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(g.a,{className:j.paper},"\ud83d\udc80 ",s.latest))),r.a.createElement(v.a,{title:"Recovered"},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(g.a,{className:j.paper},"\u2705 ",h.latest)))),r.a.createElement(B.a,{style:{height:"600px",marginTop:"32px"},center:[l.coordinates.lat,l.coordinates.long],zoom:7},r.a.createElement(F.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}))):r.a.createElement("h1",null,"Loading...")))}function W(){return r.a.createElement(f,null,r.a.createElement("h1",null,"NotFOuNBNDDD"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(o.a,{basename:"/covid19-tracker"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(J,null)),r.a.createElement(i.a,{exact:!0,path:"/country/:country"},r.a.createElement(T,null)),r.a.createElement(i.a,null,r.a.createElement(W,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.6187f0c1.chunk.js.map