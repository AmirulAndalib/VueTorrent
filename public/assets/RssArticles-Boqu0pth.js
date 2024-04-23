import{g as P,G as z,d as J,r as q,c as G,H as O,x as W,$ as X,I as r,W as v,m as e,K as s,T as Y,X as i,M as u,u as a,J as h,Q as R,O as c,F as S,a0 as Z,V as ee,L as b,N as A}from"./vue-BFqQp3p5.js";import{u as te,__tla as __tla_0}from"./ArrayPagination-mB6owNiQ.js";import{l as le,m as se,a0 as ne,E as ae,F as oe,s as $,I as D,j as re,t as y,i as m,J as f,f as ie,a1 as ue,h as N,M as F,K as de,a2 as ce,a3 as me,V as fe,c as pe,q as ve,r as Ve,d as _e,C as ge,__tla as __tla_1}from"./index-CvSZb7K1.js";import{d as ke}from"./index-BOWuzcd3.js";import"./vuetify-CjkUXMck.js";let Me;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})(),(()=>{try{return __tla_1}catch{}})()]).then(async()=>{let he,ye,Ce,be,Ae,xe,we,Te,Le,Re;he={class:"pa-3"};ye={class:"subtitle-1 ml-2",style:{"font-size":"1.6em !important"}};Ce={class:"d-flex justify-end"};be={class:"d-flex flex-row align-center justify-center"};Ae={class:"d-flex"};xe={key:0};we={key:1};Te={class:"d-flex flex-column"};Le=["innerHTML"];Re=P({__name:"RssArticles",setup(Se){const I=Y(),{t:V}=z(),M=le(),U=se(),o=ne(),B=ae(),p=J(!1),_=q({title:"",content:""}),C=G({get:()=>o.filters.title,set:ke(l=>{o.filters.title=l??""},300)}),g=oe(()=>o.articles.sort((l,n)=>Number(n.parsedDate)-Number(l.parsedDate)),()=>C.value,l=>l.title),{paginatedResults:j,currentPage:d,pageCount:x}=te(g.results,15);function E(l){const n=B.useIdForRssLinks?l.id:l.link;window.open(n,"_blank","noreferrer")}function H(l){l.description&&(_.title=l.title.trim(),_.content=l.description.trim(),p.value=!0)}function Q(l){M.pushTorrentToQueue(l.torrentURL)}async function w(l){await o.markArticleAsRead(l.id)}function T(){I.push({name:"dashboard"})}function L(l){if(U.hasActiveDialog||p.value)return!1;l.key==="Escape"&&T()}return O(async()=>{await o.fetchFeeds()}),W(()=>{document.addEventListener("keydown",L)}),X(()=>{document.removeEventListener("keydown",L)}),(l,n)=>(r(),v("div",he,[e($,{align:"center",justify:"center","no-gutters":""},{default:s(()=>[e(y,null,{default:s(()=>[i("h1",ye,u(a(V)("rssArticles.title")),1)]),_:1}),e(y,null,{default:s(()=>[i("div",Ce,[e(m,{icon:"mdi-close",variant:"plain",onClick:T})])]),_:1})]),_:1}),e(D,null,{default:s(()=>[e(f,null,{default:s(()=>[e($,null,{default:s(()=>[e(y,{cols:"12"},{default:s(()=>[e(ie,{modelValue:C.value,"onUpdate:modelValue":n[0]||(n[0]=t=>C.value=t),label:l.$t("rssArticles.filters.title"),clearable:"","hide-details":""},null,8,["modelValue","label"])]),_:1}),e(y,{cols:"12"},{default:s(()=>[i("div",be,[e(ue,{modelValue:a(o).filters.unread,"onUpdate:modelValue":n[1]||(n[1]=t=>a(o).filters.unread=t),label:l.$t("rssArticles.filters.unread"),"hide-details":""},null,8,["modelValue","label"]),e(N),e(m,{disabled:a(o).unreadArticles.length===0,text:l.$t("rssArticles.markAllAsRead"),color:"primary",onClick:n[2]||(n[2]=t=>a(o).markAllAsRead())},null,8,["disabled","text"])])]),_:1})]),_:1})]),_:1}),a(g).results.value.length?(r(),h(f,{key:0},{default:s(()=>[e(F,{modelValue:a(d),"onUpdate:modelValue":n[3]||(n[3]=t=>R(d)?d.value=t:null),length:a(x),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):c("",!0),e(f,null,{default:s(()=>[e(D,null,{default:s(()=>[(r(!0),v(S,null,Z(a(j),(t,K)=>(r(),v(S,null,[K>0?(r(),h(de,{key:0,color:"white"})):c("",!0),e(f,{class:ee({"rss-read":t.isRead}),onClick:k=>H(t),onContextmenu:k=>w(t)},{default:s(()=>[i("div",Ae,[i("div",null,[e(ce,{class:"wrap-anywhere",style:{"white-space":"unset"}},{default:s(()=>[b(u(t.title),1)]),_:2},1024),e(me,{class:"d-block"},{default:s(()=>[i("div",null,u(t.parsedDate.toLocaleString()),1),i("div",null,u(a(V)("rssArticles.item.feedName",{name:a(o).getFeedNames(t.id).join(" | ")})),1),t.author?(r(),v("div",xe,u(a(V)("rssArticles.item.author",{author:t.author})),1)):c("",!0),t.category?(r(),v("div",we,u(a(V)("rssArticles.item.category",{category:t.category})),1)):c("",!0)]),_:2},1024)]),e(N),i("div",Te,[e(m,{icon:"mdi-open-in-new",variant:"text",onClick:A(k=>E(t),["stop"])},null,8,["onClick"]),e(m,{color:"accent",icon:"mdi-check",variant:"text",onClick:A(k=>w(t),["stop"])},null,8,["onClick"]),e(m,{icon:"mdi-download",variant:"text",onClick:A(k=>Q(t),["stop"])},null,8,["onClick"])])])]),_:2},1032,["class","onClick","onContextmenu"])],64))),256)),a(g).results.value.length===0?(r(),h(f,{key:0},{default:s(()=>[b(u(l.$t("common.emptyList")),1)]),_:1})):c("",!0)]),_:1})]),_:1}),a(g).results.value.length?(r(),h(f,{key:1},{default:s(()=>[e(F,{modelValue:a(d),"onUpdate:modelValue":n[4]||(n[4]=t=>R(d)?d.value=t:null),length:a(x),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):c("",!0)]),_:1}),e(re,{modelValue:p.value,"onUpdate:modelValue":n[6]||(n[6]=t=>p.value=t)},{default:s(()=>[e(fe,null,{default:s(()=>[e(pe,null,{default:s(()=>[e(ve,{color:"transparent"},{default:s(()=>[e(Ve,null,{default:s(()=>[b(u(_.title),1)]),_:1}),e(m,{icon:"mdi-close",onClick:n[5]||(n[5]=t=>p.value=!1)})]),_:1})]),_:1}),e(_e,null,{default:s(()=>[i("div",{class:"description-container",innerHTML:_.content},null,8,Le)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});Me=ge(Re,[["__scopeId","data-v-77fbfd3e"]])});export{Me as default,__tla};