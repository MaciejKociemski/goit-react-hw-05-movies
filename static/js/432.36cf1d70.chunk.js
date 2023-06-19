"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[432],{3225:function(n,t,e){e.d(t,{Fg:function(){return m},HC:function(){return x},NZ:function(){return d},PP:function(){return f},aV:function(){return l}});var r,a,o,c,u,i=e(168),s=e(6444),p=e(1087),f=s.ZP.section(r||(r=(0,i.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),d=s.ZP.h2(a||(a=(0,i.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding-left: 5px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n"]))),l=s.ZP.ul(o||(o=(0,i.Z)(["\n  list-style: disc;\n  color: #0d57aa;\n"]))),x=s.ZP.li(c||(c=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),m=(0,s.ZP)(p.rU)(u||(u=(0,i.Z)(["\n  font-size: 20px;\n  color: #0d57aa;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n    border-bottom: 2px solid #1c85ff;\n  }\n"])))},3432:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,o,c=e(5861),u=e(9439),i=e(7757),s=e.n(i),p=e(2791),f=e(1087),d=e(7689),l=e(9014),x=e(4390),m=e(168),g=e(6444),v=g.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),h=g.ZP.input(a||(a=(0,m.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 8px;\n  margin-right: 15px;\n  font-size: 16px;\n  &:hover,\n  &:focus {\n    border: 1px solid #0d57aa;\n  }\n"]))),b=g.ZP.button(o||(o=(0,m.Z)(["\n  background-color: #b5d1f2;\n  border: 1px solid #0d57aa;\n  border-radius: 4px;\n  padding: 8px 18px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n  }\n"]))),Z=e(184),k=function(n){var t=n.onSubmit;return(0,Z.jsxs)(v,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query.value;e?(t(e),n.target.reset()):l.Am.error("Please enter something")},children:[(0,Z.jsx)(h,{name:"query",type:"text",placeholder:"Search movies"}),(0,Z.jsx)(b,{type:"submit",children:"Search"})]})},y=e(3225),w=function(){var n=(0,p.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,f.lr)(),o=(0,u.Z)(a,2),i=o[0],m=o[1],g=(0,d.TH)();(0,p.useEffect)((function(){var n,t=null!==(n=i.get("query"))&&void 0!==n?n:"";if(t){var e=function(){var n=(0,c.Z)(s().mark((function n(){var e,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.E3)(t);case 3:e=n.sent,0===(a=e.results).length?(l.Am.dismiss(),l.Am.error("No movies found"),r([])):r(a),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),l.Am.error(n.t0.message),r([]);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();e()}}),[i]);return(0,Z.jsx)("main",{children:(0,Z.jsxs)(y.PP,{children:[(0,Z.jsx)(y.NZ,{children:"Movies Page"}),(0,Z.jsx)(k,{onSubmit:function(n){m({query:n})}}),(0,Z.jsx)(y.aV,{children:e.map((function(n){return(0,Z.jsx)(y.HC,{children:(0,Z.jsx)(y.Fg,{to:"/movies/".concat(n.id),state:{from:g},children:n.title})},n.id)}))})]})})}},4390:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return l},Mc:function(){return f},_k:function(){return s},uV:function(){return d}});var r=e(5861),a=e(7757),o=e.n(a),c=e(1243),u="https://api.themoviedb.org",i="3453ae595a5d53cbc877c6d05de8a002",s=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/movie/").concat(t,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=432.36cf1d70.chunk.js.map