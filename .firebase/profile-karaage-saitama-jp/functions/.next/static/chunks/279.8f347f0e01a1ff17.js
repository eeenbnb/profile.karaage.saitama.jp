"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{4279:function(a,b,c){c.r(b),c.d(b,{default:function(){return q}});var d=c(5893),e=c(7294),f=function(a){var b=a.children;return(0,d.jsx)("main",{className:"container",children:(0,d.jsx)("div",{className:"container__inner",children:b})})},g=c(4480),h=(0,g.cn)({key:"session/token",default:void 0}),i=function(){var a,b,c=(a=(0,g.sJ)(h),b=(0,g.Zl)(h),{sessionToken:a,setSessionToken:b}),f=c.sessionToken,i=c.setSessionToken,j=(0,e.useState)(f),k=j[0],l=j[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("input",{value:k,onChange:function(a){l(a.target.value)}}),(0,d.jsx)("button",{onClick:function(){i(k)},children:"setToken"})]})};function j(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}var k,l,m=c(4051),n=c.n(m),o=(0,g.nZ)({key:"html/text",get:(l=(k=n().mark(function a(b){var c,d;return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.get,a.next=3,fetch("/api/getProfile?".concat(new URLSearchParams({token:String(c(h))})));case 3:return d=a.sent,a.abrupt("return",d.json());case 5:case"end":return a.stop()}},a)}),function(){var a=this,b=arguments;return new Promise(function(c,d){var e=k.apply(a,b);function f(a){j(e,c,d,f,g,"next",a)}function g(a){j(e,c,d,f,g,"throw",a)}f(void 0)})}),function(a){return l.apply(this,arguments)})}),p=function(){var a={__html:(0,g.sJ)(o).__html}.__html;return(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})},q=function(){return(0,d.jsxs)(f,{children:[(0,d.jsx)(e.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(i,{})}),(0,d.jsx)(e.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(p,{})})]})}}}])