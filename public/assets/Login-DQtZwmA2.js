import{h as b,E as v,b as h,f as C,T as q,a as k,H as x,I as S,J as s,S as K,R as T,n as e,K as m,L as p,u as l,M as f,O as _,U as y}from"./vue-D2Z9izuK.js";import{_ as A,__tla as __tla_0}from"./PasswordField.vue_vue_type_script_setup_true_lang-BNentBt2.js";import{n as U,o as B,c as F,p as I,d as M,e as O,f as R,k as E,g as L,i as N,V as D,__tla as __tla_1}from"./index-bMid3FrL.js";import"./vuetify-gZZmmE5_.js";let G;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})(),(()=>{try{return __tla_1}catch{}})()]).then(async()=>{G=b({__name:"Login",setup(H){const{t:a}=v(),w=K(),o=T(),u=U(),r=h({username:"",password:""}),c=C(!1),V={username:[d=>!!d||a("login.rules.username_required")],password:[d=>!!d||a("login.rules.password_required")]},i=async()=>{c.value&&(await u.login(r.username,r.password),u.isAuthenticated?(y.success(a("login.success")),g()):y.error(a("login.error")))},g=()=>{o.query.redirect?w.push(o.query.redirect):w.push({name:"dashboard"})};return q(async()=>{o.query.username&&o.query.password&&await u.login(o.query.username,o.query.password)}),k(()=>{u.isAuthenticated&&g()}),(d,n)=>(x(),S(B,{class:"fill-height"},{default:s(()=>[e(D,{class:"mx-auto",rounded:"lg","min-width":"250"},{default:s(()=>[e(F,null,{default:s(()=>[m(p(l(a)("login.title")),1)]),_:1}),e(I,null,{default:s(()=>[m(p(l(a)("login.subtitle")),1)]),_:1}),e(M,null,{default:s(()=>[e(O,{modelValue:c.value,"onUpdate:modelValue":n[2]||(n[2]=t=>c.value=t),onSubmit:f(i,["prevent"])},{default:s(()=>[e(R,{modelValue:r.username,"onUpdate:modelValue":n[0]||(n[0]=t=>r.username=t),id:"username",name:"username",label:l(a)("login.username"),autofocus:"",rules:V.username,onKeydown:_(f(i,["prevent"]),["enter"]),variant:"outlined"},{prepend:s(()=>[e(E,{color:"accent",icon:"mdi-account"})]),_:1},8,["modelValue","label","rules","onKeydown"]),e(A,{modelValue:r.password,"onUpdate:modelValue":n[1]||(n[1]=t=>r.password=t),id:"password",label:l(a)("login.password"),rules:V.password,"prepend-icon":"mdi-lock",onKeydown:_(f(i,["prevent"]),["enter"]),variant:"outlined"},null,8,["modelValue","label","rules","onKeydown"])]),_:1},8,["modelValue"])]),_:1}),e(L,null,{default:s(()=>[e(N,{variant:"elevated",block:"",color:"accent",onClick:i},{default:s(()=>[m(p(l(a)("login.submit")),1)]),_:1})]),_:1})]),_:1})]),_:1}))}})});export{G as default,__tla};