import{k as r,h as u,__tla as __tla_0}from"./index-CP36BZ0x.js";import{h as p,c as f,H as o,I as a,J as i,K as m,L as n,N as s,Q as b}from"./vue-BQgCUbk_.js";import{u as h}from"./vuetify-DWkLi8Ew.js";let x;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{let k;k={key:1,"data-testid":"mixedbtn-text"};x=p({__name:"MixedButton",props:{mobileOverride:{type:Boolean,default:!1},mobileValue:{type:Boolean},position:{},icon:{},text:{}},setup(c){const l=c,{mobile:d}=h(),t=f(()=>l.mobileOverride?l.mobileValue:d.value);return(e,v)=>(o(),a(u,{icon:t.value},{default:i(()=>[t.value||e.position==="left"?(o(),a(r,{key:0,"data-testid":"mixedbtn-icon-left"},{default:i(()=>[m(n(e.icon),1)]),_:1})):s("",!0),t.value?s("",!0):(o(),b("span",k,n(e.text),1)),!t.value&&e.position==="right"?(o(),a(r,{key:2,"data-testid":"mixedbtn-icon-right"},{default:i(()=>[m(n(e.icon),1)]),_:1})):s("",!0)]),_:1},8,["icon"]))}})});export{x as _,__tla};