import{g as c,d as r,c as o,a2 as t,a3 as d,au as i,a4 as l,m}from"./vue-Z0OO2sk3.js";import{V as u,i as f}from"./index-FFESjDS_.js";const _=c({__name:"PasswordField",props:{hideIcon:{type:Boolean},prependIcon:{}},setup(v){const e=r(!1);function a(){e.value=!e.value}const p=o(()=>e.value?"text":"password"),s=o(()=>e.value?"mdi-eye":"mdi-eye-off");return(n,w)=>(t(),d(f,{name:"password",type:p.value,"append-inner-icon":n.hideIcon?"":s.value,"onClick:appendInner":a},i({_:2},[n.prependIcon?{name:"prepend",fn:l(()=>[m(u,{color:"accent",icon:n.prependIcon},null,8,["icon"])]),key:"0"}:void 0]),1032,["type","append-inner-icon"]))}});export{_};