import{D as r,E as n,_ as u}from"./index-BSNAbUut.js";import{j as i,W as m,Q as d,E as p}from"./vue-CLUXWngw.js";import"./vuetify-BAscqwKc.js";const g=i({__name:"MagnetHandler",setup(c){const t=m(),s=d(),e=r(),a=n();return p(async()=>{const o=decodeURIComponent(t.params.url);o.startsWith("magnet:")&&(e.isFirstInit=!1,e.pushTorrentToQueue(o),a.createDialog(u)),await s.push({name:"dashboard"})}),()=>{}}});export{g as default};
