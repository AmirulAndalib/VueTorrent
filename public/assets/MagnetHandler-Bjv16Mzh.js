import{l as a,m as r,_ as n,__tla as __tla_0}from"./index-0J_u-yIW.js";import{g as u,H as i,S as m,T as p}from"./vue-BSWNwQE_.js";import"./vuetify-C2R3ttTg.js";let l;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{l=u({__name:"MagnetHandler",setup(d){const o=m(),s=p();return i(async()=>{const e=decodeURIComponent(o.params.url);if(e.startsWith("magnet:")){const t=a();t.isFirstInit=!1,t.pushTorrentToQueue(e),r().createDialog(n,{})}await s.push({name:"dashboard"})}),()=>{}}})});export{l as default,__tla};