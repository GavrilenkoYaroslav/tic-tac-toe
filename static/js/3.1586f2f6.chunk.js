(this["webpackJsonpsmall-game"]=this["webpackJsonpsmall-game"]||[]).push([[3],{37:function(e,n,r){e.exports={container:"Header_container__25M9o",scoreBox:"Header_scoreBox__34b8V",score:"Header_score__1BSR4"}},38:function(e,n,r){e.exports={box:"Box_box__2LKQ5"}},39:function(e,n,r){e.exports={container:"PlayOneMore_container__1HmSK",controls:"PlayOneMore_controls__1_VYM",confirm:"PlayOneMore_confirm__3Zh3O",decline:"PlayOneMore_decline__-RDIu"}},40:function(e,n,r){e.exports={exit:"GamePage_exit__3usvM"}},43:function(e,n,r){"use strict";r.r(n);var t=r(18),c=r(9),a=r(0),i=r(2),o=r(37),l=r.n(o),s=r(1),u=function(e){var n=e.score,r=e.turn,t=e.counter;return Object(s.jsxs)("div",{className:l.a.container,children:[Object(s.jsxs)("span",{children:["Move: ",t]}),Object(s.jsxs)("div",{className:l.a.scoreBox,children:[Object(s.jsx)("span",{children:"Player 1 / Player 2"}),Object(s.jsx)("span",{className:l.a.score,children:n})]}),Object(s.jsxs)("span",{children:["Turn: ",r]})]})},f=r(14);var j=r(19);function b(e){return function(e){if(Array.isArray(e))return Object(f.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(j.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=r(17),O=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e},p=r(38),h=r.n(p),y=function(e){var n=e.value,r=e.index,t=e.markBox;return Object(s.jsx)("div",{onClick:function(){t&&t(r)},className:h.a.box,children:n})},_=Object(a.forwardRef)((function(e,n){var r,i=e.AI,o=e.players,l=e.onComplete,u=e.sync,f={counter:0,field:new Array(9).fill(null),finished:!1},j=Object(a.useState)(f),p=Object(c.a)(j,2),h=p[0],_=p[1];Object(a.useImperativeHandle)(n,(function(){return{init:function(){_(f)}}})),r="X"===o[0].figure?h.counter%2===0?o[0]:o[1]:h.counter%2===0?o[1]:o[0];var m=Object(a.useCallback)((function(e){h.field[e]||_((function(n){var c=Object(t.a)(Object(t.a)({},n),{},{counter:n.counter+1,field:b(n.field)});return c.field[e]=r.figure,c}))}),[r,h,_]);return Object(a.useEffect)((function(){u&&u(r,h.counter)}),[u,r,h.counter]),Object(a.useEffect)((function(){if(i&&r===o[1]&&!h.finished){var e=function(e,n,r){var t,a=function(n){for(var r=[],t=0;t<d.a.length;t++){var a=Object(c.a)(d.a[t],3),i=a[0],o=a[1],l=a[2];if((e[i]||e[o]||e[l])&&(e[i]===n&&e[o]===n||e[o]===n&&e[l]===n||e[i]===n&&e[l]===n)){var s=[i,o,l].filter((function(n){return null===e[n]}));s.length&&r.push(s[0])}}return r},i=a(r),o=[];if(!i.length&&!(t=a(n)).length)for(var l=0;l<e.length;l++)null===e[l]&&o.push(l);return i.length?i:t.length?t:o}(h.field,o[0].figure,o[1].figure),n=O(0,e.length-1),t=setTimeout((function(){return m(e[n])}),O(300,2e3));return function(){return clearTimeout(t)}}}),[h,r,i,m,o]),Object(a.useEffect)((function(){if(!h.finished){var e=function(e){for(var n=0;n<d.a.length;n++){var r=Object(c.a)(d.a[n],3),t=r[0],a=r[1],i=r[2];if(e[t]&&e[t]===e[a]&&e[t]===e[i])return d.a[n]}return null}(h.field);if(e){var n=h.field[e[0]];return _(Object(t.a)(Object(t.a)({},h),{},{finished:!0})),l&&l(n)}return h.field.includes(null)?void 0:(_(Object(t.a)(Object(t.a)({},h),{},{finished:!0})),l&&l())}}),[h,_,l]),Object(s.jsx)("div",{className:"field",children:h.field.map((function(e,n){return Object(s.jsx)(y,{value:e,index:n,markBox:i&&r===o[1]?null:m},n)}))})})),m=r(39),x=r.n(m),v=function(e){var n=e.winner,r=e.finish,t=e.initNewGame,c=e.AI;return Object(s.jsxs)("div",{className:x.a.container,children:[Object(s.jsxs)("span",{children:["Winner: ",c&&"Player 2"===n?"Computer":n]}),Object(s.jsx)("p",{children:"Would you like to play one more time ?"}),Object(s.jsxs)("div",{className:x.a.controls,children:[Object(s.jsx)("span",{className:x.a.confirm,onClick:t,children:"Yes"}),Object(s.jsx)("span",{className:x.a.decline,onClick:r,children:"No"})]})]})},g=r(40),N=r.n(g);n.default=function(e){var n=e.config,r=e.setConfig,o=Object(a.useRef)(),l=Object(i.g)(),f=Object(a.useState)(null),j=Object(c.a)(f,2),b=j[0],O=j[1],p=Object(a.useState)(0),h=Object(c.a)(p,2),y=h[0],m=h[1],x=Object(a.useState)(null),g=Object(c.a)(x,2),k=g[0],P=g[1],C="".concat(n.player_1.score," / ").concat(n.player_2.score),M=Object(a.useCallback)((function(){r(d.b),l.push("/")}),[r,l]),w=Object(a.useCallback)((function(){O(null),m(0),o.current.init()}),[O]),A=Object(a.useCallback)((function(e){var c="Nobody won";e&&(c=n.player_1.figure===e?"Player 1":"Player 2"),O(c),r(Object(t.a)(Object(t.a)({},n),{},{player_1:Object(t.a)(Object(t.a)({},n.player_1),{},{score:"Player 1"===c?n.player_1.score+1:n.player_1.score}),player_2:Object(t.a)(Object(t.a)({},n.player_2),{},{score:"Player 2"===c?n.player_2.score+1:n.player_2.score})}))}),[r,n]),I=Object(a.useCallback)((function(e,r){m(r),P(e===n.player_1?"Player 1":"Player 2")}),[n,m,P]);return n.init?Object(s.jsxs)("div",{className:"page",children:[Object(s.jsx)(u,{score:C,counter:y,turn:k}),Object(s.jsx)(_,{ref:o,AI:n.AI_mode,players:[n.player_1,n.player_2],onComplete:A,sync:I}),b&&Object(s.jsx)(v,{finish:M,AI:n.AI_mode,winner:b,initNewGame:w}),Object(s.jsx)("span",{className:N.a.exit,onClick:M,children:"Exit"})]}):Object(s.jsx)(i.a,{to:"/"})}}}]);
//# sourceMappingURL=3.1586f2f6.chunk.js.map