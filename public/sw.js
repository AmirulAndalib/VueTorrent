if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const o=s=>l(s,n),u={module:{uri:n},exports:a,require:o};e[n]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-39ef031c.js",revision:null},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-fbed8a33.js",revision:null},{url:"assets/ConfirmDeleteModal-0450e4e6.js",revision:null},{url:"assets/ConfirmShutdownModal-f58be813.js",revision:null},{url:"assets/CreateNewCategoryDialog-6cf89fff.js",revision:null},{url:"assets/CreateNewTagDialog-865f8136.js",revision:null},{url:"assets/Dashboard-4578a74e.js",revision:null},{url:"assets/Dashboard-be52ce27.css",revision:null},{url:"assets/FeedForm-0ca94794.js",revision:null},{url:"assets/FullScreenModal-b7264cb2.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-3f7df99a.js",revision:null},{url:"assets/index-fa553f6d.css",revision:null},{url:"assets/Login-bf756d4f.js",revision:null},{url:"assets/Logs-7205318e.js",revision:null},{url:"assets/Logs-b79cb50b.css",revision:null},{url:"assets/MagnetHandler-6482c9c5.js",revision:null},{url:"assets/Modal-f5e0cc6c.js",revision:null},{url:"assets/RenameTorrentFileModal-c53b5527.js",revision:null},{url:"assets/RenameTorrentModal-981c170f.js",revision:null},{url:"assets/RssArticles-7f13b1cb.js",revision:null},{url:"assets/RssArticles-fc2a926c.css",revision:null},{url:"assets/RuleForm-fc20b08e.js",revision:null},{url:"assets/SearchEngine-75292b59.css",revision:null},{url:"assets/SearchEngine-f3fc85f1.js",revision:null},{url:"assets/SearchPluginManager-18b4a4dd.js",revision:null},{url:"assets/Settings-13e7e0c1.css",revision:null},{url:"assets/Settings-bcc50c87.js",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitInput-cae32b2e.js",revision:null},{url:"assets/ShareLimitModal-88ad7ce7.js",revision:null},{url:"assets/ShareLimitModal-9da1db21.css",revision:null},{url:"assets/SpeedLimitModal-cecfba44.js",revision:null},{url:"assets/TorrentDetail-d183173c.css",revision:null},{url:"assets/TorrentDetail-fad226f0.js",revision:null},{url:"assets/VCheckbox-2836d801.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VContainer-cb93e676.js",revision:null},{url:"assets/VDataTable-72eb890c.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-fa1947fa.js",revision:null},{url:"assets/VForm-a19db274.js",revision:null},{url:"assets/VTab-73d1f1f2.js",revision:null},{url:"assets/VTab-e1f8d77a.css",revision:null},{url:"assets/VTabItem-43475bbb.js",revision:null},{url:"assets/VTextarea-64b487a8.css",revision:null},{url:"assets/VTextarea-fa43635f.js",revision:null},{url:"assets/vue-b220ace6.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"95e46e50c0a2f3223f90f8e29c93e4de"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
