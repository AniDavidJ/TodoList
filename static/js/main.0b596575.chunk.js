(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),o=n(32),a=n.n(o),i=(n(40),n(6)),r=n(12),u=n(3),l=n(22),d=function(){return sessionStorage.getItem("token")||null},j=function(e,t){sessionStorage.setItem("token",e),sessionStorage.setItem("user",JSON.stringify(t))},b=function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("user")},O=n(2);var m=function(e){var t=Object(s.useState)(e.edit?e.edit.value:""),n=Object(i.a)(t,2),c=n[0],o=n[1],a=Object(s.useRef)(null);Object(s.useEffect)((function(){a.current.focus()}));var r=function(e){o(e.target.value)};return Object(O.jsx)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),o("")},children:e.edit?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{type:"text",className:"todo-input",placeholder:"Add a todo",value:c,name:"text",onChange:r,ref:a}),Object(O.jsx)("button",{className:"todo-button",children:"Update"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{type:"text",className:"todo-input",placeholder:"Add a todo",value:c,name:"text",onChange:r,ref:a}),Object(O.jsx)("button",{className:"todo-button",children:"Add todo"})]})})},p=n(33),h=n(34);var x=function(e){var t=e.todos,n=e.completeTodo,c=e.removeTodo,o=e.updateTodo,a=Object(s.useState)({id:null,value:""}),r=Object(i.a)(a,2),u=r[0],l=r[1];return u.id?Object(O.jsx)(m,{edit:u,onSubmit:function(e){o(u.id,e),l({id:null,value:""})}}):t.map((function(e,t){return Object(O.jsxs)("div",{className:e.isComplete?"todo-row complete":"todo-row",children:[Object(O.jsx)("div",{onClick:function(){return n(e.id)},children:e.text},e.id),Object(O.jsxs)("div",{className:"icons",children:[Object(O.jsx)(p.a,{onClick:function(){return c(e.id)},className:"delete-icons"}),Object(O.jsx)(h.a,{onClick:function(){return l({id:e.id,value:e.text})},className:"edit-icons"})]})]},t)}))},f=(n(42),function(e){var t=function(){var e=sessionStorage.getItem("user");return e?JSON.parse(e):null}(),n=Object(s.useState)([]),c=Object(i.a)(n,2),o=c[0],a=c[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{className:"todo-button todo-login",type:"button",value:"Logout",onClick:function(){b(),e.history.push("/")}}),Object(O.jsxs)("div",{className:"todo-app",children:[Object(O.jsxs)("h1",{children:[t.username,"..Welcome to Todo List !! "]}),Object(O.jsx)(m,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(l.a)(o));a(t)}}}),Object(O.jsx)(x,{todos:o,completeTodo:function(e){var t=o.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));a(t)},removeTodo:function(e){var t=Object(l.a)(o).filter((function(t){return t.id!==e}));a(t)},updateTodo:function(e,t){t.text&&!/^\s*$/.test(t.text)&&a((function(n){return n.map((function(n){return n.id===e?t:n}))}))}})]})]})}),v=(n(43),n(16)),g=n.n(v),N=function(e){var t=Object(s.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],a=Object(s.useState)(""),r=Object(i.a)(a,2),u=r[0],l=r[1],d=Object(s.useState)(null),b=Object(i.a)(d,2),m=b[0],p=b[1],h=Object(s.useState)(!1),x=Object(i.a)(h,2),f=x[0],v=x[1];return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"login-wrap",children:Object(O.jsxs)("div",{className:"login-html",children:[Object(O.jsx)("label",{for:"tab-1",className:"tab",children:"Sign In"}),Object(O.jsx)("div",{className:"login-form",children:Object(O.jsxs)("div",{className:"sign-in-htm",children:[Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)("label",{for:"user",className:"label",children:"Username"}),Object(O.jsx)("input",{value:c,onChange:function(e){return o(e.target.value)},id:"user",type:"text",className:"input"})]}),Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)("label",{for:"pass",className:"label",children:"Password"}),Object(O.jsx)("input",{value:u,onChange:function(e){return l(e.target.value)},id:"pass",type:"password",className:"input","data-type":"password"})]}),m&&Object(O.jsx)("div",{className:"error",children:m}),Object(O.jsx)("div",{className:"group",children:Object(O.jsx)("input",{type:"button",className:"button",value:f?"loading..":"Login",disabled:f,onClick:function(){p(null),v(!0),g.a.post("http://localhost:4000/users/signin",{username:c,password:u}).then((function(t){v(!1),j(t.data.token,t.data.user),e.history.push("/todo"),console.log("response >> ",t)})).catch((function(e){v(!1),401===e.response.status||400===e.response.status?p(e.response.data.message):p("Something went wrong. Please try again later!!"),console.log("error >> ",e)}))}})})]})})]})})})},S=n(10),k=n(17),C=["component"],y=function(e){var t=e.component,n=Object(k.a)(e,C);return Object(O.jsx)(u.b,Object(S.a)(Object(S.a)({},n),{},{render:function(e){return d()?Object(O.jsx)(u.a,{to:{pathname:"/todo"}}):Object(O.jsx)(t,Object(S.a)({},e))}}))},w=["component"],T=function(e){var t=e.component,n=Object(k.a)(e,w);return Object(O.jsx)(u.b,Object(S.a)(Object(S.a)({},n),{},{render:function(e){return d()?Object(O.jsx)(t,Object(S.a)({},e)):Object(O.jsx)(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var I=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=d();e&&g.a.get("http://localhost:4000/verifyToken?token=".concat(e)).then((function(e){j(e.data.token,e.data.user),c(!1)})).catch((function(e){b(),c(!1)}))}),[]),n&&d()?Object(O.jsx)("div",{className:"content",children:"Checking Authentiction..."}):Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(r.a,{children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("div",{className:"header-sub",children:[Object(O.jsx)(r.b,{exact:!0,activeClassName:"active",to:"/",children:"Login"}),Object(O.jsx)(r.b,{activeClassName:"active",to:"/todo",children:"TodoList"})]})}),Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(y,{exact:!0,path:"/",component:N}),Object(O.jsx)(T,{path:"/todo",component:f})]})})]})})};a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.0b596575.chunk.js.map