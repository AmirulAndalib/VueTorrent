import{ak as a}from"./index-2615a93d.js";import{d as r,a8 as s,a0 as n,M as u}from"./vue-30d5b3a2.js";import"./faker-dcfab09f.js";import"./vuetify-501b9e1e.js";import"./apexcharts-ec175a2b.js";const _=r({__name:"MagnetHandler",setup(m){const o=s(),t=n();return u(async()=>{const e=decodeURIComponent(o.params.url);e.startsWith("magnet:")&&a().pushTorrentToQueue(e),await t.push({name:"dashboard"})}),()=>{}}});export{_ as default};
