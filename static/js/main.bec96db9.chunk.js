(this.webpackJsonpwsb_react=this.webpackJsonpwsb_react||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a,r,i,c,o,d=n(0),s=n.n(d),b=n(8),u=n.n(b),l=n(30),p=n(10),j=n(12),m=n(36),f=n(151),h=n(148),x=n(150),O=n(67),g=n.n(O),w=n(147),v=n(149),y=n(156),_=n(157),C=n(114),k=n(64),E=n.n(k),N=n(65),T=n.n(N),F=n(66),M=n.n(F),D=n(144),S=Object(D.a)((function(){return{header:{backgroundColor:"#4A9BDB",paddingLeft:"64px","@media (max-width: 768px)":{padding:"0 16px"}},logo:{fontWeight:600,color:"#FFFFFF",textAlign:"left","@media (max-width: 768px)":{width:"100%",textAlign:"right"}},menuButton:{fontWeight:700,fontSize:"16px",padding:"20px 20px","@media (min-width: 900px)":{marginRight:"32px"},"&.active":{color:"#C9C9CC"}},toolbar:{display:"flex",flexDirection:"row",justifyContent:"space-between"},drawerContainer:{backgroundColor:"#4A9BDB",height:"100%",paddingTop:"16px"},drawerLink:{padding:"10px 36px",marginTop:"8px"},icon:{marginRight:"8px"},active:{"&.active":{color:"#C9C9CC"},color:"#ffffff"}}})),B=n(2),W=[{icon:E.a,label:"Home",href:"/"},{icon:T.a,label:"Regular Mems",href:"/regular"},{icon:M.a,label:"Hot Mems",href:"/hot"}],R=function(){var e=Object(d.useState)({mobileView:!1,drawerOpen:!1}),t=Object(m.a)(e,2),n=t[0],a=t[1],r=n.mobileView,i=n.drawerOpen,c=function(){return window.innerWidth<769?a((function(e){return Object(j.a)(Object(j.a)({},e),{},{mobileView:!0})})):a((function(e){return Object(j.a)(Object(j.a)({},e),{},{mobileView:!1})}))},o=S(),s=o.header,b=o.logo,u=o.menuButton,p=o.toolbar,O=o.drawerContainer,k=o.drawerLink,E=o.icon,N=o.active;Object(d.useEffect)((function(){return c(),window.addEventListener("resize",(function(){return c()})),function(){window.removeEventListener("resize",(function(){return c()}))}}),[]);var T=Object(B.jsx)(C.a,{variant:"h6",component:l.b,to:"/",color:"inherit",style:{textDecoration:"none"},className:b,children:"WSB Mems"}),F=function(e){return W.map((function(t){var n=t.icon,a=t.label,r=t.href;return Object(B.jsx)(v.a,{component:l.b,exact:!0,to:r,color:"inherit",style:{textDecoration:"none"},className:[N],key:a,onClick:e,children:Object(B.jsxs)(_.a,{className:k,children:[Object(B.jsx)(n,{className:E})," ",a]})})}))};return Object(B.jsx)("header",{children:Object(B.jsx)(f.a,{className:s,children:r?function(){var e=function(){return a((function(e){return Object(j.a)(Object(j.a)({},e),{},{drawerOpen:!1})}))};return Object(B.jsxs)(h.a,{children:[Object(B.jsx)(x.a,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return a((function(e){return Object(j.a)(Object(j.a)({},e),{},{drawerOpen:!0})}))},children:Object(B.jsx)(g.a,{})}),Object(B.jsx)(y.a,{anchor:"left",open:i,onClose:e,children:Object(B.jsx)("div",{className:O,children:F(e)})}),T]})}():Object(B.jsxs)(h.a,{className:p,children:[T,Object(B.jsx)("div",{children:W.map((function(e){var t=e.icon,n=e.label,a=e.href;return Object(B.jsxs)(w.a,{key:n,color:"inherit",to:a,component:l.b,exact:!0,className:u,children:[Object(B.jsx)(t,{className:E})," ",n]})}))})]})})})},A=n(152),L=n(153),V=n(154),z=n(155),Z=n(73),H=n.n(Z),P=n(72),I=n.n(P),J=n(71),G=n.n(J),X=n(22),Y=n(23),q=Object(D.a)((function(){return{card:{overflow:"visible",maxWidth:300,width:"100%",transition:"0.3s",backgroundColor:"#ecf3f9",boxShadow:"0 16px 100px -12.125px rgba(0,0,0,0.5)","&:hover":{boxShadow:"0 24px 100px -12.125px rgba(0,0,0,0.9)"},position:"relative"},star:{width:"48px",height:"48px",position:"absolute",top:0,right:0,color:"#FFCD3C","@media (min-width: 360px)":{transform:"translate(50%, -50%)"}},media:{minHeight:"60.25%",width:"auto",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"},content:{textAlign:"center",padding:3},divider:{margin:"6px 0"}}})),K=Y.b.div(a||(a=Object(X.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]))),Q=n(34),U=function(e){var t=e.data,n=Object(Q.b)(),a=t.uuid,r=t.title,i=t.mem_image,c=t.added_datetime,o=t.top,d=q(),s=d.card,b=d.star,u=d.media,l=d.content,p=d.divider;return Object(B.jsxs)(A.a,{className:s,children:[o&&Object(B.jsx)(G.a,{className:b}),Object(B.jsx)(L.a,{className:u,image:i}),Object(B.jsxs)(V.a,{className:l,children:[Object(B.jsx)(C.a,{variant:"h6",gutterBottom:!0,children:r}),Object(B.jsxs)(C.a,{variant:"subtitle2",children:["Added Datetime:"," ",new Date(c).toLocaleString("pl-PL",{dateStyle:"short",timeStyle:"short"})]})]}),Object(B.jsx)(z.a,{className:p}),Object(B.jsxs)(K,{children:[Object(B.jsx)(x.a,{"aria-label":"dislike",onClick:function(){return n(function(e){return function(t){t({type:"DOWNVOTE_MEM",payload:{uuid:e}})}}(a))},children:Object(B.jsx)(I.a,{style:{color:"#e32524"}})}),Object(B.jsx)(x.a,{"aria-label":"like",onClick:function(){return n(function(e){return function(t){t({type:"VOTE_MEM",payload:{uuid:e}})}}(a))},children:Object(B.jsx)(H.a,{style:{color:"#028A0F"}})})]})]})},$=n(74),ee=n.n($),te=Object(Y.b)(x.a)(r||(r=Object(X.a)(["\n  position: fixed;\n  right: 48px;\n  bottom: 48px;\n  background-color: #4a9bdb;\n  color: #ffffff;\n  height: 112px;\n  width: 112px;\n  &:hover {\n    background-color: #4a9bdb;\n  }\n  @media (max-width: 768px) {\n    bottom: 16px;\n    right: 16px;\n    height: 64px;\n    width: 64px;\n  }\n  svg {\n    height: 96px;\n    width: 96px;\n    @media (max-width: 768px) {\n      height: 56px;\n      width: 56px;\n      bottom: 16px;\n      right: 16px;\n    }\n  }\n"]))),ne=function(){return Object(B.jsx)(te,{"aria-label":"add_mem",children:Object(B.jsx)(ee.a,{})})},ae=Y.b.main(i||(i=Object(X.a)(["\n  max-width: 100%;\n  @media (min-width: 900px) {\n    max-width: 80%;\n  }\n  margin: 120px auto;\n  display: grid;\n  justify-items: center;\n  grid-gap: 70px;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-auto-rows: 350px;\n"]))),re=function(){var e=Object(p.g)().pathname,t=Object(Q.c)((function(e){return e.memReducer})),n=Object(d.useState)([]),a=Object(m.a)(n,2),r=a[0],i=a[1],c=Object(d.useCallback)((function(t){switch(e){case"/hot":return t.filter((function(e){return e.upvotes-e.downvotes>5}));case"/regular":return t.filter((function(e){return e.upvotes-e.downvotes<=5}));default:return t}}),[e]);return Object(d.useEffect)((function(){var e=c(t);i(e)}),[c,t]),Object(B.jsx)(ae,{children:r.map((function(e){var t=e.uuid;return Object(B.jsx)(U,{data:e},t)}))})},ie=n(56),ce=n.n(ie),oe=Y.b.main(c||(c=Object(X.a)(["\n  margin: 120px;\n  text-align: center;\n"]))),de=function(){var e=Object(d.useState)({redirect:!1,stopWatch:10}),t=Object(m.a)(e,2),n=t[0],a=t[1],r=n.redirect,i=n.stopWatch;Object(d.useEffect)((function(){var e=setInterval((function(){a(0===i?function(e){return Object(j.a)(Object(j.a)({},e),{},{redirect:!0})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{stopWatch:i-1})})}),1e3);return function(){clearInterval(e)}}),[i]);var c=Object(B.jsxs)(oe,{children:[Object(B.jsx)(ce.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80}),Object(B.jsxs)(C.a,{variant:"h5",children:["Error 404 ",Object(B.jsx)("br",{}),"You will be redirect to home page in ",i," s."]})]});return Object(B.jsx)(B.Fragment,{children:r?Object(B.jsx)(p.a,{to:"/"}):Object(B.jsx)(B.Fragment,{children:c})})},se=function(){return Object(B.jsxs)(l.a,{basename:"/wsb_react",children:[Object(B.jsx)(R,{}),Object(B.jsxs)(p.d,{children:[Object(B.jsx)(p.b,{exact:!0,path:"/",component:re}),Object(B.jsx)(p.b,{path:"/regular",component:re}),Object(B.jsx)(p.b,{path:"/hot",component:re}),Object(B.jsx)(p.b,{path:"*",component:de})]}),Object(B.jsx)(ne,{})]})},be=Object(Y.a)(o||(o=Object(X.a)(["\n*,\n*::after,\n*::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n    /* font-family: 'Montserrat', sans-serif; */\n}\n  body {\n   -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #C0D8EF;\n  }\n"]))),ue=n(43),le=n(75),pe=n(76),je=[{uuid:"8f973f9e-e3c6-4bb6-999e-f452e7f04d6e",title:"Javascript",mem_image:"https://www.freecodecamp.org/news/content/images/size/w2000/2019/07/cover-photo.png",added_datetime:"2021-06-12T16:35:45.881Z",top:!1,upvotes:0,downvotes:0},{uuid:"8f873f9e-e3c6-4bb6-999e-f452e7f04d6e",title:"Typescript",mem_image:"https://www.meme-arsenal.com/memes/e3cf12860859b7a69c445defa5887ba0.jpg",added_datetime:"2021-05-03T06:54:45.881Z",top:!0,upvotes:0,downvotes:0},{uuid:"8f973f9e-e5c6-4bb6-999e-f452e7f04d6a",title:"React",mem_image:"https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",added_datetime:"2021-06-01T18:01:45.881Z",top:!0,upvotes:5,downvotes:2},{uuid:"8f973f9e-e3c6-1bb6-999e-f452e7f04d6c",title:"Node",mem_image:"https://img.devrant.com/devrant/rant/r_123356_Gnftu.jpg",added_datetime:"2021-02-09T14:12:45.881Z",top:!1,upvotes:8,downvotes:2},{uuid:"8f973f9e-e3c6-3bb6-999e-f452e7f04d4a",title:"Programing",mem_image:"https://www.meme-arsenal.com/memes/d4430e6f3f4df494020c4a7b03b0f259.jpg",added_datetime:"2021-06-12T09:36:45.881Z",top:!1,upvotes:5,downvotes:2},{uuid:"8f973f9e-e3c6-4cb6-999e-f452e7f04d3a",title:"PHP",mem_image:"https://gbksoft.com/blog/wp-content/uploads/2020/07/5Xjj4bC-480x308.jpg",added_datetime:"2021-04-14T22:35:45.881Z",top:!1,upvotes:5,downvotes:2}],me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"VOTE_MEM":return e.map((function(e){var t=e.uuid,n=e.upvotes;return t===a.uuid?Object(j.a)(Object(j.a)({},e),{},{upvotes:n+1}):e}));case"DOWNVOTE_MEM":return e.map((function(e){var t=e.uuid,n=e.downvotes;return t===a.uuid?Object(j.a)(Object(j.a)({},e),{},{downvotes:n+1}):e}));case"ADD_MEM":return[].concat(Object(pe.a)(e),[a]);default:return e}},fe=Object(ue.b)({memReducer:me}),he=Object(ue.c)(fe,Object(ue.a)(le.a));u.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsxs)(Q.a,{store:he,children:[Object(B.jsx)(be,{}),Object(B.jsx)(se,{})]})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.bec96db9.chunk.js.map