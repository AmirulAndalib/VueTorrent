import{d as v,_ as b,$ as C,a7 as q,r as x,e as k,x as S,a0 as h,a1 as K,a2 as s,j as e,V as c,Z as p,u as l,Y as f,an as g,a9 as y}from"./vue-19d3ce4b.js";import{_ as A}from"./PasswordField.vue_vue_type_script_setup_true_lang-80910354.js";import{aI as T,aJ as B,i as F,aC as I,j as U,s as j,t as L,m as M,v as N,w as O,k as R}from"./index-7d260cc9.js";import"./faker-dcfab09f.js";import"./vuetify-a96aa76f.js";const E=v({__name:"Login",setup($){const{t:a}=b(),V=C(),o=q(),u=T(),r=x({username:"",password:""}),m=k(!1),w={username:[d=>!!d||a("login.rules.username_required")],password:[d=>!!d||a("login.rules.password_required")]},i=async()=>{m.value&&(await u.login(r.username,r.password),u.isAuthenticated?(y.success(a("login.success")),_()):y.error(a("login.error")))},_=()=>{o.query.redirect?V.push(o.query.redirect):V.push({name:"dashboard"})};return S(async()=>{o.query.username&&o.query.password&&await u.login(o.query.username,o.query.password),u.isAuthenticated&&_()}),(d,t)=>(h(),K(B,{class:"mt-16"},{default:s(()=>[e(R,{class:"mx-auto",rounded:"lg","min-width":"250"},{default:s(()=>[e(F,null,{default:s(()=>[c(p(l(a)("login.title")),1)]),_:1}),e(I,null,{default:s(()=>[c(p(l(a)("login.subtitle")),1)]),_:1}),e(U,null,{default:s(()=>[e(j,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=n=>m.value=n),onSubmit:f(i,["prevent"])},{default:s(()=>[e(L,{modelValue:r.username,"onUpdate:modelValue":t[0]||(t[0]=n=>r.username=n),label:l(a)("login.username"),autofocus:"",rules:w.username,onKeydown:g(f(i,["prevent"]),["enter"]),variant:"outlined"},{prepend:s(()=>[e(M,{color:"accent",icon:"mdi-account"})]),_:1},8,["modelValue","label","rules","onKeydown"]),e(A,{modelValue:r.password,"onUpdate:modelValue":t[1]||(t[1]=n=>r.password=n),label:l(a)("login.password"),rules:w.password,"prepend-icon":"mdi-lock",onKeydown:g(f(i,["prevent"]),["enter"]),variant:"outlined"},null,8,["modelValue","label","rules","onKeydown"])]),_:1},8,["modelValue","onSubmit"])]),_:1}),e(N,null,{default:s(()=>[e(O,{variant:"elevated",block:"",color:"accent",onClick:i},{default:s(()=>[c(p(l(a)("login.submit")),1)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{E as default};
