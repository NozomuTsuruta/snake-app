(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],{18:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e(2),i=e.n(a),s=e(12),r=e.n(s),o=(e(18),function(t,n){for(var e=[],c=0;c<t;c++){var a=new Array(t).fill("");e.push(a)}e[n.y][n.x]="snake";var i=u(t,[n]);return e[i.y][i.x]="food",e}),u=function(t,n){for(var e=function(){var e=Math.floor(Math.random()*(t-1-1))+1,c=Math.floor(Math.random()*(t-1-1))+1;if(!n.some((function(t){return t.x===e&&t.y===c})))return{v:{x:e,y:c}}};;){var c=e();if("object"===typeof c)return c.v}},l={x:17,y:17},b=o(35,l);b[9][9]="food";var d=[1e3,500,100,50,10],f="init",j="playing",h="suspended",m="gameover",O="up",v="right",x="left",y="down",p={up:"down",right:"left",left:"right",down:"up"},g={up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}},N={37:x,38:O,39:v,40:y},k=function(t){var n=t.length,e=t.difficulty,a=void 0===e?3:e,i=t.onChangeDifficulty,s=a<d.length?"":"is-hidden",r=a>1?"":"is-hidden";return Object(c.jsxs)("div",{className:"navigation",children:[Object(c.jsxs)("div",{className:"navigation-item",children:[Object(c.jsx)("span",{className:"navigation-label",children:"Length: "}),Object(c.jsx)("div",{className:"navigation-item-number-container",children:Object(c.jsx)("div",{className:"num-board",children:n})})]}),Object(c.jsxs)("div",{className:"navigation-item",children:[Object(c.jsx)("span",{className:"navigation-label",children:"Difficulty: "}),Object(c.jsxs)("div",{className:"navigation-item-number-container",children:[Object(c.jsx)("span",{className:"num-board",children:a}),Object(c.jsxs)("div",{className:"difficulty-button-container",children:[Object(c.jsx)("div",{className:"difficulty-button difficulty-up ".concat(s),onClick:function(){return i(a+1)}}),Object(c.jsx)("div",{className:"difficulty-button difficulty-down ".concat(r),onClick:function(){return i(a-1)}})]})]})]})]})},C=function(t){var n=t.fields;return Object(c.jsx)("div",{className:"field",children:n.map((function(t){return t.map((function(t){return Object(c.jsx)("div",{className:"dots ".concat(t)})}))}))})},S=function(t){var n=t.status,e=t.onRestart,a=t.onStart,i=t.onStop;return Object(c.jsxs)("div",{className:"button",children:[n===m&&Object(c.jsx)("button",{className:"btn btn-gameover",onClick:e,children:"gameover"}),n===f&&Object(c.jsx)("button",{className:"btn btn-init",onClick:a,children:"start"}),n===h&&Object(c.jsx)("button",{className:"btn btn-suspended",onClick:a,children:"start"}),n===j&&Object(c.jsx)("button",{className:"btn btn-playing",onClick:i,children:"stop"})]})},w=e(5),D=e(6),E=function(t){var n=t.onChange;return Object(c.jsxs)("div",{className:"manipulation-panel",children:[Object(c.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return n(x)},children:Object(c.jsx)(w.a,{icon:D.b})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return n(O)},children:Object(c.jsx)(w.a,{icon:D.d})}),Object(c.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return n(y)},children:Object(c.jsx)(w.a,{icon:D.a})})]}),Object(c.jsx)("button",{className:"manipulation-btn btn btn-right",onClick:function(){return n(v)},children:Object(c.jsx)(w.a,{icon:D.c})})]})},I=e(11),L=e(3),M=function(){var t=Object(a.useRef)(),n=function(){t&&clearInterval(t.current)},e=Object(a.useState)(b),c=Object(L.a)(e,2),i=c[0],s=c[1],r=Object(a.useState)(0),v=Object(L.a)(r,2),x=v[0],y=v[1],k=Object(a.useState)(O),C=Object(L.a)(k,2),S=C[0],w=C[1],D=Object(a.useState)([]),E=Object(L.a)(D,2),M=E[0],F=E[1],R=Object(a.useState)(f),A=Object(L.a)(R,2),B=A[0],J=A[1],P=Object(a.useState)(3),T=Object(L.a)(P,2),G=T[0],q=T[1];Object(a.useEffect)((function(){F([l]);var e=d[G-1];return t.current=setInterval((function(){y((function(t){return t+1}))}),e),n}),[G]),Object(a.useEffect)((function(){0!==M.length&&B===j&&(K()||(n(),J(m)))}),[x]);var z=Object(a.useCallback)((function(t){B===j&&p[S]!==t&&w(t)}),[S,B]),H=Object(a.useCallback)((function(t){B===f&&(t<1||t>d.length||q(t))}),[B]);Object(a.useEffect)((function(){var t=function(t){var n=N[t.keyCode];n&&z(n)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[z]);var K=function(){var t=M[0],n=t.x,e=t.y,c=g[S],a={x:n+c.x,y:e+c.y};if(function(t,n){return n.y<0||n.x<0||n.y>t-1||n.x>t-1}(i.length,a)||function(t,n){return"snake"===t[n.y][n.x]}(i,a))return!1;var r=Object(I.a)(M);if("food"!==i[a.y][a.x]){var o=r.pop();i[o.y][o.x]=""}else{var l=u(i.length,[].concat(Object(I.a)(r),[a]));i[l.y][l.x]="food"}return i[a.y][a.x]="snake",r.unshift(a),F(r),s(i),!0};return{body:M,difficulty:G,fields:i,status:B,start:function(){return J(j)},stop:function(){return J(h)},reload:function(){t.current=setInterval((function(){y((function(t){return t+1}))}),100),J(f),F([l]),w(O),s(o(i.length,l)),q(3)},updateDirection:z,updateDifficulty:H}};var F=function(){var t=M(),n=t.body,e=t.difficulty,a=t.fields,i=t.start,s=t.stop,r=t.reload,o=t.status,u=t.updateDirection,l=t.updateDifficulty;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("div",{className:"title-container",children:Object(c.jsx)("h1",{className:"title",children:"Snake Game"})}),Object(c.jsx)(k,{length:n.length,difficulty:e,onChangeDifficulty:l})]}),Object(c.jsx)("main",{className:"main",children:Object(c.jsx)(C,{fields:a})}),Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsx)(S,{status:o,onStop:s,onStart:i,onRestart:r}),Object(c.jsx)(E,{onChange:u})]})]})},R=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;e(t),c(t),a(t),i(t),s(t)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),R()}},[[24,1,2]]]);
//# sourceMappingURL=main.d92f8a35.chunk.js.map