if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>l(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AddModal-73e954b7.js",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-66730cca.js",revision:null},{url:"assets/ConfirmDeleteModal-c515b095.js",revision:null},{url:"assets/ConfirmShutdownModal-04ea7fb4.js",revision:null},{url:"assets/CreateCategoryDialog-15c6e156.js",revision:null},{url:"assets/CreateTagDialog-14af0a05.js",revision:null},{url:"assets/Dashboard-0797ffb0.js",revision:null},{url:"assets/Dashboard-ad42ab22.css",revision:null},{url:"assets/FeedForm-f5ee50d8.js",revision:null},{url:"assets/FullScreenModal-bced8cbb.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-8bead82c.js",revision:null},{url:"assets/index-adff5842.css",revision:null},{url:"assets/Login-5249e17d.js",revision:null},{url:"assets/Logs-50f16254.js",revision:null},{url:"assets/Logs-b79cb50b.css",revision:null},{url:"assets/MagnetHandler-809fb44a.js",revision:null},{url:"assets/Modal-572b592c.js",revision:null},{url:"assets/RenameModal-c141bde1.js",revision:null},{url:"assets/RssArticles-46f75556.js",revision:null},{url:"assets/RssArticles-c867a82f.css",revision:null},{url:"assets/RuleForm-55f5dd14.js",revision:null},{url:"assets/SearchEngine-c511971c.css",revision:null},{url:"assets/SearchEngine-e6ce63d7.js",revision:null},{url:"assets/SearchPluginManager-5a31bc2a.js",revision:null},{url:"assets/Settings-23640bff.js",revision:null},{url:"assets/Settings-adcd9bdf.css",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitInput-f77ce440.js",revision:null},{url:"assets/ShareLimitModal-19e37143.js",revision:null},{url:"assets/ShareLimitModal-9da1db21.css",revision:null},{url:"assets/SpeedLimitModal-c225fa54.js",revision:null},{url:"assets/TorrentDetail-54cb06da.css",revision:null},{url:"assets/TorrentDetail-ade7d93f.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VCheckbox-c58fea19.js",revision:null},{url:"assets/VContainer-a499bed4.js",revision:null},{url:"assets/VDataTable-6327d305.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-9647d6e0.js",revision:null},{url:"assets/VForm-5ce4003c.js",revision:null},{url:"assets/VTabItem-6d2ee3b7.css",revision:null},{url:"assets/VTabItem-8cd8eaff.js",revision:null},{url:"assets/VTextarea-eb1b260f.css",revision:null},{url:"assets/VTextarea-f36a681b.js",revision:null},{url:"assets/vue-9ef19677.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"99652087b72f0f0bd1475e101247a5e1"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"./icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
