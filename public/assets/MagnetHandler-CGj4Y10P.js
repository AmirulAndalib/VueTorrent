import{v as r,w as n,_ as u}from"./index-CjhflkuO.js";import{h as i,T as m,H as d,J as p}from"./vue-CnBfmSzz.js";import"./vuetify-8cAtHrug.js";const g=i({__name:"MagnetHandler",setup(c){const t=m(),s=d(),e=r(),a=n();return p(async()=>{const o=decodeURIComponent(t.params.url);o.startsWith("magnet:")&&(e.isFirstInit=!1,e.pushTorrentToQueue(o),a.createDialog(u)),await s.push({name:"dashboard"})}),()=>{}}});export{g as default};