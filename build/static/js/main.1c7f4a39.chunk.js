(this.webpackJsonptododoro=this.webpackJsonptododoro||[]).push([[0],{155:function(e,t,n){},176:function(e,t,n){},233:function(e,t,n){},242:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),i=n(50),o=n.n(i),s=n(158),u=n(19),l=n(322),d=n(307),j=n(308),b=n(180),h=n(328),O=n(323),p=n(183),f=n(20),x=n.n(f),v=n(4),m=n(24),g=n(6),k=n(64),w=n.n(k),y="/api/auth",C="/api/task",S=function(){var e=Object(m.a)(x.a.mark((function e(t,n,r,a,c){var i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(y,"/register"),{email:t,firstName:n,lastName:r,username:a,password:c});case 2:return i=e.sent,e.abrupt("return",{status:i.status,data:i.data});case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(y,"/check"),null,{headers:{Authorization:t}});case 2:return n=e.sent,e.abrupt("return",{status:n.status,data:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(x.a.mark((function e(t,n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(y,"/verify"),{code:n},{headers:{Authorization:t}});case 2:return r=e.sent,e.abrupt("return",{status:r.status,data:r.data});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(x.a.mark((function e(t,n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(y,"/login"),{username:t,password:n});case 2:return r=e.sent,e.abrupt("return",{status:r.status,data:r.data});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(C),{headers:{Authorization:t}});case 2:return n=e.sent,e.abrupt("return",{status:n.status,data:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(x.a.mark((function e(t,n,r){var a,c,i,o=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>3&&void 0!==o[3]?o[3]:void 0,c=o.length>4&&void 0!==o[4]?o[4]:void 0,e.next=4,w.a.post("".concat(C),{title:n,description:r,priority:c,due:a},{headers:{Authorization:t}});case 4:return i=e.sent,e.abrupt("return",{status:i.status,data:i.data});case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),W=function(){var e=Object(m.a)(x.a.mark((function e(t,n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("".concat(C),{headers:{Authorization:t},data:{id:n}});case 2:return r=e.sent,e.abrupt("return",{status:r.status,data:r.data});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=n(1);try{r=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{token:null,verified:null,username:null}}catch(xe){r={token:null,verified:null,username:null}}var N=Object(a.createContext)({register:function(){},verify:function(){},login:function(){},logout:function(){},check:function(){},token:function(){return!1},verified:function(){return!1},username:function(){return!1}}),L=function(e){var t=e.children,n=Object(a.useState)(r),c=Object(g.a)(n,2),i=c[0],o=c[1];Object(a.useEffect)((function(){localStorage.setItem("auth",JSON.stringify(i))}),[i]);var s=function(){var e=Object(m.a)(x.a.mark((function e(t,n,r,a,c,s){var u;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c===s){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,S(t,n,r,a,c);case 4:201===(u=e.sent).status&&o(Object(v.a)(Object(v.a)({},i),{},{token:u.data.token,verified:!1,username:a}));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c,i){return e.apply(this,arguments)}}(),u=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.token){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,T(i.token,t);case 4:200===e.sent.status&&o(Object(v.a)(Object(v.a)({},i),{},{verified:!0}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(m.a)(x.a.mark((function e(t,n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&n){e.next=2;break}throw{response:{status:401}};case 2:return e.next=4,E(t,n);case 4:200===(r=e.sent).status&&o(Object(v.a)(Object(v.a)({},i),{},{token:r.data.token,verified:r.data.verified,username:t}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(G.jsx)(N.Provider,{value:{register:s,verify:u,login:l,logout:function(){o({token:null,verified:null,username:null})},check:function(){i.token&&I(i.token).then((function(){})).catch((function(){o({token:null,verified:null,username:null})}))},token:i.token,verified:i.verified,username:i.username},children:t})},q=N,B=(n(233),function(){var e=Object(a.useContext)(q);return Object(G.jsx)(l.a,{bg:"light",expand:"md",id:"navbar",children:Object(G.jsxs)(d.a,{children:[Object(G.jsx)(l.a.Brand,{href:"/",id:"brand",children:"TodoDoro"}),Object(G.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(G.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(G.jsx)(d.a,{children:Object(G.jsxs)(j.a,{children:[Object(G.jsx)(b.a,{md:"auto",children:Object(G.jsx)(h.a.Link,{href:"/",children:"Home"})}),Object(G.jsx)(b.a,{md:"auto",children:Object(G.jsx)(h.a.Link,{href:"/tasks",children:"Tasks"})}),e.token&&e.username&&Object(G.jsx)(b.a,{md:"auto",children:Object(G.jsxs)(O.a,{title:"Account",children:[Object(G.jsxs)(O.a.Item,{children:["Hello, ",e.username]}),e.verified||Object(G.jsx)(O.a.Item,{children:"Verify"}),Object(G.jsx)(O.a.Item,{children:"Settings"})]})})]})}),e.token?"":Object(G.jsx)(h.a.Link,{href:"/register",children:"Register"}),Object(G.jsx)(p.a,{id:"button",variant:"outline-danger",href:e.token?"":"/login",onClick:e.token?e.logout:function(){},children:e.token?"Logout":"Login"})]})]})})}),R=n(335),A=n(324),P=(n(155),n(338)),z=n(326),J=n(184),F={error:"",info:"",warn:""},M=Object(a.createContext)({error:"",info:"",warn:"",setError:function(){},setInfo:function(){},setWarn:function(){}}),U=function(e){var t=e.children,n=Object(a.useState)(F),r=Object(g.a)(n,2),c=r[0],i=r[1];return Object(G.jsx)(M.Provider,{value:{error:c.error,info:c.info,warn:c.warn,setError:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;i(Object(v.a)(Object(v.a)({},c),{},{error:e})),setTimeout((function(){i(Object(v.a)(Object(v.a)({},c),{},{error:""}))}),t)},setInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;i(Object(v.a)(Object(v.a)({},c),{},{info:e})),setTimeout((function(){i(Object(v.a)(Object(v.a)({},c),{},{info:""}))}),t)},setWarn:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;i(Object(v.a)(Object(v.a)({},c),{},{warn:e})),setTimeout((function(){i(Object(v.a)(Object(v.a)({},c),{},{warn:""}))}),t)}},children:t})},Y=M,V=function(){var e=Object(a.useContext)(q),t=Object(a.useContext)(Y),n=Object(J.useStateIfMounted)(!1),r=Object(g.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(null),s=Object(g.a)(o,2),l=s[0],h=s[1],O=Object(a.useState)(null),f=Object(g.a)(O,2),v=f[0],k=f[1],w=function(){var n=Object(m.a)(x.a.mark((function n(r){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),!c){n.next=3;break}return n.abrupt("return");case 3:return i(!0),n.prev=4,n.next=7,e.login(l,v);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(4),401===n.t0.response.status?t.setError("Invalid username or password"):t.setError("Something went wrong when connecting to our servers. We have been notified and are currently working on it. Hang thight!");case 12:i(!1);case 13:case"end":return n.stop()}}),n,null,[[4,9]])})));return function(e){return n.apply(this,arguments)}}();return e.token&&!e.verified?Object(G.jsx)(u.a,{to:"/verify"}):e.token&&e.verified?Object(G.jsx)(u.a,{to:"/tasks"}):Object(G.jsxs)(j.a,{children:[Object(G.jsx)(b.a,{}),Object(G.jsxs)(b.a,{xs:"auto",children:[Object(G.jsx)(R.a,{id:"card",children:Object(G.jsx)(d.a,{id:"container",children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)("h3",{children:"Welcome back!"}),Object(G.jsx)(A.a.Group,{controlId:"username",id:"in",children:Object(G.jsx)(A.a.Control,{placeholder:"Enter username",onChange:function(e){return h(e.target.value)},required:!0})}),Object(G.jsx)(A.a.Group,{className:"mb-3",controlId:"password",id:"in",children:Object(G.jsx)(A.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return k(e.target.value)},required:!0})}),Object(G.jsxs)("div",{id:"buttonHolder",children:[Object(G.jsx)(p.a,{id:"button",variant:"danger",type:"submit",onClick:function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Login"}),c&&Object(G.jsx)(P.a,{color:"inherit"})]})]})})}),Object(G.jsx)("div",{id:"alertDiv",children:t.error&&Object(G.jsx)(z.a,{id:"alert",open:t.error&&!0,onClose:function(){return t.setError("")},severity:"error",sx:{borderRadius:"1rem",marginTop:"15px",maxWidth:"100%"},children:t.error})})]}),Object(G.jsx)(b.a,{})]})},Z=function(){var e=Object(a.useContext)(q),t=Object(a.useState)(!1),n=Object(g.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(g.a)(i,2),s=o[0],l=o[1],h=Object(a.useState)(null),O=Object(g.a)(h,2),f=O[0],v=O[1],k=Object(a.useState)(null),w=Object(g.a)(k,2),y=w[0],C=w[1],S=Object(a.useState)(null),I=Object(g.a)(S,2),T=I[0],E=I[1],D=Object(a.useState)(null),H=Object(g.a)(D,2),W=H[0],N=H[1],L=Object(a.useState)(null),B=Object(g.a)(L,2),J=B[0],F=B[1],M=Object(a.useState)(null),U=Object(g.a)(M,2),Y=U[0],V=U[1],Z=function(){var t=Object(m.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!r){t.next=3;break}return t.abrupt("return");case 3:if(J===Y){t.next=7;break}return l("Passwords don't match"),setTimeout((function(){l("")}),5e3),t.abrupt("return");case 7:if(!(J.length<8)){t.next=11;break}return l("Password should be at least 8 characters long"),setTimeout((function(){l("")}),5e3),t.abrupt("return");case 11:if(String(W).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){t.next=15;break}return l("Invalid email"),setTimeout((function(){l("")}),5e3),t.abrupt("return");case 15:return c(!0),t.prev=16,t.next=19,e.register(W,y,T,f,J,Y);case 19:t.next=25;break;case 21:t.prev=21,t.t0=t.catch(16),400===t.t0.response.status?t.t0.response.data.includes("email: Error")&&t.t0.response.data.includes("username: Error")?l("Both the username and email have to be unique"):t.t0.response.data.includes("email: Error")?l("This email is already taken"):t.t0.response.data.includes("username: Error")?l("This username is already taken"):l("Invalid email"):l("Something went wrong when connecting to our servers. We have been notified and are currently working on it. Hang thight!"),setTimeout((function(){l("")}),5e3);case 25:c(!1);case 26:case"end":return t.stop()}}),t,null,[[16,21]])})));return function(e){return t.apply(this,arguments)}}();return e.token&&!e.verified?Object(G.jsx)(u.a,{to:"/verify"}):e.token&&e.verified?Object(G.jsx)(u.a,{to:"/tasks"}):Object(G.jsxs)(j.a,{children:[Object(G.jsx)(b.a,{}),Object(G.jsxs)(b.a,{xs:"auto",children:[Object(G.jsx)(R.a,{id:"card",children:Object(G.jsx)(d.a,{id:"container",children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)("h3",{children:"Welcome to TodoDoro!"}),Object(G.jsx)("p",{children:"We can't wait to have you with us! Fill out with your information and we'll be done in no time."}),Object(G.jsxs)(A.a.Group,{controlId:"email",id:"in",children:[Object(G.jsx)(A.a.Control,{placeholder:"Email",onChange:function(e){return N(e.target.value)},type:"email",required:!0}),Object(G.jsx)(A.a.Text,{children:"Please enter a valid email. We will send you a verification code. We will never share your information."})]}),Object(G.jsx)(A.a.Group,{controlId:"firstName",id:"in",children:Object(G.jsx)(A.a.Control,{placeholder:"First name",onChange:function(e){return C(e.target.value)},required:!0})}),Object(G.jsx)(A.a.Group,{controlId:"lastName",id:"in",children:Object(G.jsx)(A.a.Control,{placeholder:"Last name",onChange:function(e){return E(e.target.value)},required:!0})}),Object(G.jsx)(A.a.Group,{controlId:"username",id:"in",children:Object(G.jsx)(A.a.Control,{placeholder:"Username",onChange:function(e){return v(e.target.value)},required:!0})}),Object(G.jsx)(A.a.Group,{className:"mb-3",controlId:"password",id:"in",children:Object(G.jsx)(A.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return F(e.target.value)},required:!0})}),Object(G.jsx)(A.a.Group,{className:"mb-3",controlId:"passwordConfirm",id:"in",children:Object(G.jsx)(A.a.Control,{type:"password",placeholder:"Retype password",onChange:function(e){return V(e.target.value)},required:!0})}),Object(G.jsxs)("div",{id:"buttonHolder",children:[Object(G.jsx)(p.a,{id:"button",variant:"danger",type:"submit",onClick:function(e){return Z(e)},children:"Register"}),r&&Object(G.jsx)(P.a,{color:"inherit"})]})]})})}),Object(G.jsx)("div",{id:"alertDiv",children:s&&Object(G.jsx)(z.a,{id:"alert",open:s&&!0,onClose:function(){return l("")},severity:"error",sx:{borderRadius:"1rem",marginTop:"5px",maxWidth:"100%"},children:s})})]}),Object(G.jsx)(b.a,{})]})},K=function(){var e=Object(a.useContext)(q),t=Object(a.useState)(!1),n=Object(g.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(g.a)(i,2),s=o[0],l=o[1],h=Object(a.useState)(""),O=Object(g.a)(h,2),f=O[0],v=O[1],k=function(){var t=Object(m.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),8===f.length){t.next=4;break}return l("Invalid code!"),t.abrupt("return");case 4:return c(!0),t.prev=5,t.next=8,e.verify(f);case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(5),403===t.t0.response.status&&(t.t0.response.data.includes("code expired")?l("Code expired"):t.t0.response.data.includes("invalid code")?l("Invalid code"):l("Something went wrong when connecting to our servers. We have been notified and are currently working on it. Hang thight!")),setTimeout((function(){l("")}),5e3);case 14:c(!1);case 15:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(e){return t.apply(this,arguments)}}();return e.token&&e.verified?Object(G.jsx)(u.a,{to:"/tasks"}):Object(G.jsxs)(j.a,{children:[Object(G.jsx)(b.a,{}),Object(G.jsxs)(b.a,{xs:"auto",children:[Object(G.jsx)(R.a,{id:"card",children:Object(G.jsx)(d.a,{id:"container",children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)("h3",{children:"One last step!"}),Object(G.jsx)("p",{children:"Enter the code sent to your email to verify your account and get started."}),Object(G.jsx)(A.a.Group,{className:"mb-3",controlId:"password",id:"in",children:Object(G.jsx)(A.a.Control,{placeholder:"Code",onChange:function(e){return v(e.target.value)},required:!0})}),Object(G.jsxs)("div",{id:"buttonHolder",children:[Object(G.jsx)(p.a,{id:"button",variant:"danger",type:"submit",onClick:function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Verify"}),r&&Object(G.jsx)(P.a,{color:"inherit"})]})]})})}),Object(G.jsx)("div",{id:"alertDiv",children:s&&Object(G.jsx)(z.a,{id:"alert",open:s&&!0,onClose:function(){return l("")},severity:"error",sx:{borderRadius:"1rem",marginTop:"5px",maxWidth:"100%"},children:s})})]}),Object(G.jsx)(b.a,{})]})},X=n(78),$=(n(176),n(345)),Q=n(329),_=n(346),ee=n(344),te=n(331),ne=(n(242),function(e){var t=e.startHandler,n=e.deleteHandler,r=e.id,a=e.title,c=e.description,i=e.progress,o=e.due,s=e.priority,u=new Date(o),l=3==s?"URGENT":2===s?"HIGH":1===s?"NORMAL":0===s?"LOW":null;return Object(G.jsx)(R.a,{id:"task",children:Object(G.jsxs)(d.a,{id:"container",children:[Object(G.jsxs)("div",{id:"header",children:[Object(G.jsx)(p.a,{id:"titleButton",variant:"danger",onClick:function(){return t(r)},children:Object(G.jsxs)("div",{id:"titleContainer",children:[Object(G.jsx)(P.a,{color:"inherit",variant:"determinate",value:i,id:"bar",sx:{padding:".2rem"}}),Object(G.jsx)("h5",{children:a})]})}),Object(G.jsx)("button",{id:"delButton",onClick:function(){return n(r)},children:"X"})]}),c&&Object(G.jsx)("p",{children:c}),o&&Object(G.jsx)("p",{children:Object(G.jsxs)("small",{sytle:{},children:[Object(G.jsx)("b",{children:l||""})," Due: ",u.toLocaleDateString()," at ",u.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})})]})})}),re=n(186),ae=n.n(re),ce=n.p+"static/media/notification.d9cddb63.mp3",ie=n(332),oe=n(333),se=n(334),ue=n(325),le=n(330),de=n(320),je=n(188),be=n(321),he=function(e){var t=e.tasks,n=e.setTasks,r=Object(a.useContext)(q),c=Object(a.useContext)(Y),i=Object(a.useState)(""),o=Object(g.a)(i,2),s=o[0],u=o[1],l=Object(a.useState)(""),j=Object(g.a)(l,2),b=j[0],h=j[1],O=Object(a.useState)(null),f=Object(g.a)(O,2),k=f[0],w=f[1],y=Object(a.useState)(""),C=Object(g.a)(y,2),S=C[0],I=C[1],T=Object(a.useState)(!1),E=Object(g.a)(T,2),D=E[0],W=E[1],N=function(){var e=Object(m.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=3;break}return c.setError("Please enter a title"),e.abrupt("return");case 3:return W(!0),e.prev=4,e.next=7,H(r.token,s,b||null,k?new Date(k):null,S||null);case 7:a=e.sent,n(t.concat({id:a.data.id,title:a.data.title,description:a.data.description,due:a.data.due,priority:-1==a.data.priority?null:a.data.priority})),u(""),h(""),w(null),I(null),c.setInfo("Task created"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),c.setError("Something went wrong while creating a new task");case 19:W(!1);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}();return Object(G.jsx)(R.a,{id:"create",children:Object(G.jsx)(d.a,{id:"container",children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)("h4",{children:"Create a new task!"}),Object(G.jsx)(A.a.Group,{controlId:"title",id:"in",children:Object(G.jsx)(ie.a,{style:{width:"100%"},id:"outlined-password-input",label:"Title",autoComplete:"current-password",placeholder:"Enter a title",onChange:function(e){return u(e.target.value)},value:s,required:!0})}),Object(G.jsx)(A.a.Group,{controlId:"description",id:"in",children:Object(G.jsx)(ie.a,{style:{width:"100%"},id:"outlined-password-input",placeholder:"Enter a description (optional)",onChange:function(e){return h(e.target.value)},label:"Description",value:b,multiline:!0})}),Object(G.jsx)(A.a.Group,{controlId:"description",id:"in",children:Object(G.jsxs)(oe.a,{fullWidth:!0,children:[Object(G.jsx)(se.a,{children:"Priority"}),Object(G.jsxs)(ue.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:S,label:"Priority",onChange:function(e){return I(e.target.value)},children:[Object(G.jsx)(le.a,{value:-1,children:"None"}),Object(G.jsx)(le.a,{value:0,children:"Low"}),Object(G.jsx)(le.a,{value:1,children:"Normal"}),Object(G.jsx)(le.a,{value:2,children:"High"}),Object(G.jsx)(le.a,{value:3,children:"Urgent"})]})]})}),Object(G.jsx)(A.a.Group,{controlId:"date",id:"in",style:{width:"100%"},children:Object(G.jsx)(je.a,{dateAdapter:de.a,children:Object(G.jsx)(be.a,{id:"indate",renderInput:function(e){return Object(G.jsx)(ie.a,Object(v.a)(Object(v.a)({},e),{},{style:{width:"100%"}}))},label:"Due",value:k,onChange:function(e){w(e)}})})}),Object(G.jsxs)("div",{id:"buttonHolder",children:[Object(G.jsx)(p.a,{id:"button",variant:"danger",onClick:N,children:"Create"}),D&&Object(G.jsx)(P.a,{color:"inherit"})]})]})})})},Oe=function(){var e=Object(a.useContext)(q),t=Object(a.useContext)(Y),n=Object(a.useState)([]),r=Object(g.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(!1),s=Object(g.a)(o,2),u=s[0],l=s[1],d=Object(a.useState)(null),h=Object(g.a)(d,2),O=h[0],f=h[1],v=Object(a.useState)(0),k=Object(g.a)(v,2),w=k[0],y=k[1],C=Object(a.useState)(null),S=Object(g.a)(C,2),I=S[0],T=S[1],E=Object(a.useState)(0),H=Object(g.a)(E,2),N=H[0],L=H[1],B=Object(a.useState)(null),R=Object(g.a)(B,2),A=R[0],P=R[1],J=Object(a.useState)(1),F=Object(g.a)(J,2),M=F[0],U=F[1],V=Object(a.useState)(!1),Z=Object(g.a)(V,2),K=Z[0],re=Z[1];Object(a.useEffect)((function(){l(!0),D(e.token).then((function(e){i(e.data),l(!1)})).catch((function(e){console.log(e),t.setError("Something went wrong while fetching your tasks"),l(!1)}))}),[]),O&&!A&&setTimeout((function(){100!==w?y(w+1):oe(O)}),15e3),I&&setTimeout((function(){100!==N?L(N+1):se(I)}),M%4?3e3:9e3);var ie=function(e){O?O===e?oe(O):(P(O),f(e)):(y(0),f(e))},oe=function(){y(100),re(!0),f(null),I&&se(I),L(0),T(O)},se=function(e){re(!0),U(M%4?M+1:1),L(100),T(null),P(e)},ue=function(){var n=Object(m.a)(x.a.mark((function n(r){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,W(e.token,r);case 4:i(c.filter((function(e){return e.id!==r}))),t.setInfo("Task removed"),l(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),t.setError("Something went wrong while deleting the task"),l(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(G.jsxs)(j.a,{id:"main",children:[u?Object(G.jsx)($.a,{id:"lp",color:"inherit"}):Object(G.jsx)("span",{id:"lp"}),Object(G.jsx)(b.a,{}),Object(G.jsxs)(b.a,{xs:"auto",children:[c.map((function(e,t){return Object(G.jsx)(ne,{startHandler:ie,deleteHandler:ue,id:e.id,title:e.title,description:e.description,progress:O&&e.id===O?w:100,due:e.due,priority:e.priority},t)})),Object(G.jsx)(he,{tasks:c,setTasks:i}),Object(G.jsx)("div",{id:"alertDiv",children:t.error&&Object(G.jsx)(z.a,{id:"alert",open:!!t.error,severity:"error",sx:{borderRadius:"1rem",marginTop:"5px",maxWidth:"100%"},children:t.error})})]}),Object(G.jsx)(b.a,{}),Object(G.jsx)(Q.a,{open:!!I,onClose:function(){return function(){return se(I)}},children:Object(G.jsxs)(_.a,{sx:{borderRadius:"1rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"none",boxShadow:24,p:4},children:[Object(G.jsx)(ee.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Time to take a break!"}),Object(G.jsx)(ee.a,{id:"modal-modal-description",sx:{mt:2},children:"You have been working hard; take some to chill and recharge. We will notify you when it's time to get back to work."}),Object(G.jsx)("br",{}),Object(G.jsx)("div",{id:"breakBar",children:Object(G.jsx)($.a,{variant:"determinate",color:"inherit",value:N})}),Object(G.jsx)("br",{}),Object(G.jsx)("div",{children:Object(G.jsx)(p.a,{variant:"danger",id:"genButton",onClick:function(){return se(I)},children:"Skip Break"})})]})}),Object(G.jsx)(Q.a,{open:!!A,onClose:function(){return function(){return P(null)}},children:Object(G.jsxs)(_.a,{sx:{borderRadius:"1rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"none",boxShadow:24,p:4},children:[Object(G.jsx)(ee.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Did you complete the task?"}),Object(G.jsx)(ee.a,{id:"modal-modal-description",sx:{mt:2},children:"Did you complete the task you have been working on".concat(function(e){var t,n=Object(X.a)(c);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id===e)return" (".concat(r.title,")")}}catch(a){n.e(a)}finally{n.f()}}(A),"?")}),Object(G.jsx)("br",{}),Object(G.jsx)(p.a,{style:{marginBottom:".5rem"},variant:"danger",id:"genButton",onClick:function(){ue(A).then((function(){P(null)}))},children:"Yes! Go ahead and remove it."}),Object(G.jsx)(p.a,{variant:"danger",id:"genButton",onClick:function(){P(null)},children:"No! Keep it there."})]})}),Object(G.jsx)(te.a,{open:!!t.info,autoHideDuration:5e3,message:t.info}),Object(G.jsx)(ae.a,{preload:!0,playing:K,onEnd:function(){return re(!1)},src:ce})]})},pe=function(e){var t=e.children,n=Object(a.useContext)(q),r=Object(a.useContext)(Y);return Object(a.useEffect)((function(){n.token||r.setError("You must be logged in to view this page.")}),[]),n.token?t:Object(G.jsx)(u.a,{to:"/login"})},fe=function(){var e=Object(a.useContext)(q);return Object(a.useEffect)((function(){e.check()}),[e.token]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(B,{}),Object(G.jsx)(s.a,{children:Object(G.jsxs)(u.d,{children:[Object(G.jsx)(u.b,{path:"/login",element:Object(G.jsx)(V,{})}),Object(G.jsx)(u.b,{path:"/register",element:Object(G.jsx)(Z,{})}),Object(G.jsx)(u.b,{path:"/verify",element:Object(G.jsx)(pe,{children:Object(G.jsx)(K,{})})}),Object(G.jsx)(u.b,{path:"/tasks",element:Object(G.jsx)(pe,{children:Object(G.jsx)(Oe,{})})})]})})]})};n(248),n(249);o.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(L,{children:Object(G.jsx)(U,{children:Object(G.jsx)(fe,{})})})}),document.getElementById("root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.1c7f4a39.chunk.js.map