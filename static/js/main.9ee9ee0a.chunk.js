(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(4),c=e.n(o),r=e(3),i=e(1),a=e.n(i),s=(e(9),e(0)),u=a.a.memo((function(t){var n=t.goods;return Object(s.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.name,o=t.color;return Object(s.jsx)("li",{"data-cy":"good",style:{color:o},children:e},n)}))})}));function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.ok?t.json():Promise.reject(new Error(t.statusText))}))}var l=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(i.useState)(""),a=Object(r.a)(c,2),l=a[0],f=a[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){d().then((function(t){o(t)})).catch((function(){return f("Something went wrong")}))},children:"Load all goods"}),Object(s.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){d().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){o(t)})).catch((function(){return f("Something went wrong")}))},children:"Load 5 first goods"}),Object(s.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){d().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){o(t)})).catch((function(){return f("Something went wrong")}))},children:"Load red goods"}),l&&Object(s.jsx)("p",{className:"error-message",children:l}),Object(s.jsx)(u,{goods:e})]})};c.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.9ee9ee0a.chunk.js.map