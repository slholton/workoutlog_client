(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],{22:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(11),o=n.n(s),r=(n(22),n(7)),j=n(35),i=n(36),u=n(37),l=n(48),d=n(38),h=n(39),b=n(40),O=n(1),x=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],s=n[1];return Object(O.jsxs)(j.a,{color:"faded",light:!0,expand:"md",children:[Object(O.jsx)(i.a,{href:"/",children:"Workout Log"}),Object(O.jsx)(u.a,{onClick:function(){s(!a)}}),Object(O.jsx)(l.a,{isOpen:a,navbar:!0,children:Object(O.jsx)(d.a,{className:"ml-auto",navbar:!0,children:Object(O.jsx)(h.a,{children:Object(O.jsx)(b.a,{onClick:e.clickLogout,children:"Logout"})})})})]})},f=n(45),m=n(46),p=n(47),g=n(41),v=n(42),k=n(43),S=n(44),T=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(""),j=Object(r.a)(o,2),i=j[0],u=j[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Sign Up"}),Object(O.jsxs)(g.a,{onSubmit:function(t){t.preventDefault(),fetch("http://localhost:3000/user/register",{method:"POST",body:JSON.stringify({user:{username:a,password:i}}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.updateToken(t.sessionToken)}))},children:[Object(O.jsxs)(v.a,{children:[Object(O.jsx)(k.a,{htmlFor:"username",children:"Username"}),Object(O.jsx)(S.a,{onChange:function(e){return s(e.target.value)},name:"username",value:a})]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(k.a,{htmlFor:"password",children:"Password"}),Object(O.jsx)(S.a,{onChange:function(e){return u(e.target.value)},name:"password",value:i})]}),Object(O.jsx)(b.a,{type:"submit",children:"Sign Up"})]})]})},w=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(""),j=Object(r.a)(o,2),i=j[0],u=j[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)(g.a,{onSubmit:function(t){t.preventDefault(),fetch("http://localhost:3000/user/login",{method:"POST",body:JSON.stringify({user:{username:a,password:i}}),headers:new Headers({"Content-Type":"application/json/"})}).then((function(e){return e.json()})).then((function(t){e.updateToken(t.sessionToken)}))},children:[Object(O.jsxs)(v.a,{children:[Object(O.jsx)(k.a,{htmlFor:"username",children:"Username"}),Object(O.jsx)(S.a,{onChange:function(e){return s(e.target.value)},name:"username",value:a})]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(k.a,{htmlFor:"password",children:"Password"}),Object(O.jsx)(S.a,{onChange:function(e){return u(e.target.value)},name:"password",value:i})]}),Object(O.jsx)(b.a,{type:"submit",children:"Login"})]})]})},y=function(e){return Object(O.jsx)(f.a,{className:"auth-container",children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(p.a,{md:"6",children:Object(O.jsx)(T,{updateToken:e.updateToken})}),Object(O.jsx)(p.a,{md:"6",children:Object(O.jsx)(w,{updateToken:e.updateToken})})]})})},C=function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),a=(n[0],n[1]);return Object(c.useEffect)((function(){fetch("http://localhost:3000/log",{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)})}).then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),Object(O.jsx)(f.a,{children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(p.a,{md:"3"}),Object(O.jsx)(p.a,{md:"9",children:Object(O.jsx)("h2",{children:"Log a workout to see a table. This will be added in later pages."})})]})})};var F=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){localStorage.getItem("token")&&a(localStorage.getItem("token"))}),[]);var s=function(e){localStorage.setItem("token",e),a(e),console.log(n)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{clearToken:function(){localStorage.clear(),a("")}}),n===localStorage.getItem("token")?Object(O.jsx)(C,{token:n}):Object(O.jsx)(y,{updateToken:s})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};n(33);o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),L()}},[[34,1,2]]]);
//# sourceMappingURL=main.8d33c062.chunk.js.map