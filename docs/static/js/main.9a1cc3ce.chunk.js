(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),c=n(2),i=n(1),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(i.useState)(""),a=Object(c.a)(n,2),r=a[0],u=a[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),void 0!==r&&r.length>0&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:Object(o.jsx)("input",{type:"text",placeholder:"Hola Mundo",value:r,onChange:function(e){return u(e.target.value)}})})},j=n(10),d=function(e){var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__delay-2s animate__fadeInDown",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},l=n(6),f=n.n(l),p=n(8),b=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=tkooo1XohTfrRAoonSFrM8xLKFsboDcw"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.category,n=function(e){var t=Object(i.useState)({data:[],loading:!0}),n=Object(c.a)(t,2),a=n[0],r=n[1];return Object(i.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(t),a=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__fadeInDown animate__delay-1s",children:t}),r&&Object(o.jsx)("p",{className:"animate__animated animate_flash",children:"Loading..."}),Object(o.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(o.jsx)(d,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(i.useState)(["Samurai X"]),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:a}),Object(o.jsx)("hr",{}),Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsx)(m,{category:e},e)}))})]})};n(17);r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9a1cc3ce.chunk.js.map