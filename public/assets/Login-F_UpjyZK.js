import{h as v,K as b,J as C,V as h,r as q,d as x,z as k,a as K,E as S,G as A,I as s,m as e,U as c,P as p,u as l,W as f,X as _,Y as y}from"./vue-CIcdKVuP.js";import{_ as B}from"./PasswordField.vue_vue_type_script_setup_true_lang-KyyYOCdB.js";import{x as T,y as U,z as E,A as F,B as I,C as z,a as D,V as M,D as N,i as O,E as R}from"./index-kVZL5vui.js";import"./vuetify-DAoOFynB.js";const X=v({__name:"Login",setup(G){const{t:a}=b(),V=C(),o=h(),u=T(),r=q({username:"",password:""}),m=x(!1),w={username:[d=>!!d||a("login.rules.username_required")],password:[d=>!!d||a("login.rules.password_required")]},i=async()=>{m.value&&(await u.login(r.username,r.password),u.isAuthenticated?(y.success(a("login.success")),g()):y.error(a("login.error")))},g=()=>{o.query.redirect?V.push(o.query.redirect):V.push({name:"dashboard"})};return k(async()=>{o.query.username&&o.query.password&&await u.login(o.query.username,o.query.password)}),K(()=>{u.isAuthenticated&&g()}),(d,n)=>(S(),A(U,{class:"fill-height"},{default:s(()=>[e(R,{class:"mx-auto",rounded:"lg","min-width":"250"},{default:s(()=>[e(E,null,{default:s(()=>[c(p(l(a)("login.title")),1)]),_:1}),e(F,null,{default:s(()=>[c(p(l(a)("login.subtitle")),1)]),_:1}),e(I,null,{default:s(()=>[e(z,{modelValue:m.value,"onUpdate:modelValue":n[2]||(n[2]=t=>m.value=t),onSubmit:f(i,["prevent"])},{default:s(()=>[e(D,{modelValue:r.username,"onUpdate:modelValue":n[0]||(n[0]=t=>r.username=t),id:"username",name:"username",label:l(a)("login.username"),autofocus:"",rules:w.username,onKeydown:_(f(i,["prevent"]),["enter"]),variant:"outlined"},{prepend:s(()=>[e(M,{color:"accent",icon:"mdi-account"})]),_:1},8,["modelValue","label","rules","onKeydown"]),e(B,{modelValue:r.password,"onUpdate:modelValue":n[1]||(n[1]=t=>r.password=t),id:"password",label:l(a)("login.password"),rules:w.password,"prepend-icon":"mdi-lock",onKeydown:_(f(i,["prevent"]),["enter"]),variant:"outlined"},null,8,["modelValue","label","rules","onKeydown"])]),_:1},8,["modelValue"])]),_:1}),e(N,null,{default:s(()=>[e(O,{variant:"elevated",block:"",color:"accent",onClick:i},{default:s(()=>[c(p(l(a)("login.submit")),1)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{X as default};
