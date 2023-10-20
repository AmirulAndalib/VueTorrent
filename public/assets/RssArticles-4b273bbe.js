import{A as Q,_ as q,r as G,d as J,c as K,C as Y,h as Z,y as O,$ as o,a2 as f,D as e,a1 as l,a7 as r,Z as u,u as n,a0 as g,i as L,a4 as d,F as S,a3 as W,a5 as X,V as C,Y as x}from"./vue-aae79161.js";import{u as ee}from"./ArrayPagination-3dc7c5ff.js";import{s as te,z as le,ap as ae,aq as se,G as T,p as D,J as h,x as _,q as p,v as ne,S as oe,n as N,L as $,T as ie,ar as re,as as ue,y as de,k as ce,i as me,a5 as fe,a6 as _e,j as pe,_ as ve}from"./index-514c2666.js";import{u as Ve}from"./rss-d4b1d8e2.js";import{d as ke}from"./index-519bc226.js";const ye={class:"pa-3"},ge={class:"subtitle-1 ml-2",style:{"font-size":"1.6em !important"}},he={class:"d-flex justify-end"},Ae={class:"d-flex flex-row align-center justify-center"},Ce={class:"d-flex"},xe={key:0},be={key:1},we={key:2},Re={class:"d-flex flex-column"},Le=["innerHTML"],Se=Q({__name:"RssArticles",setup(Te){const U=q(),{t:V}=te(),B=le(),F=ae(),i=Ve(),v=G(!1),k=J({title:"",content:""}),A=K({get:()=>i.filters.title,set:ke(t=>{i.filters.title=t??""},300)}),y=se(()=>i.articles.sort((t,s)=>Number(s.parsedDate)-Number(t.parsedDate)),()=>A.value,t=>t.title),{paginatedResults:I,currentPage:c,pageCount:b}=ee(y.results,15);function M(t){window.open(t,"_blank","noreferrer")}function j(t){t.description&&(k.title=t.title,k.content=t.description,v.value=!0)}function E(t){F.pushTorrentToQueue(t.torrentURL)}async function z(t){await i.markArticleAsRead(t)}async function H(){await i.markAllAsRead()}function w(){U.push({name:"dashboard"})}function R(t){if(B.hasActiveDialog||v.value)return!1;t.key==="Escape"&&w()}return Y(async()=>{await i.fetchFeeds()}),Z(()=>{document.addEventListener("keydown",R)}),O(()=>{document.removeEventListener("keydown",R)}),(t,s)=>(o(),f("div",ye,[e(T,{align:"center",justify:"center","no-gutters":""},{default:l(()=>[e(h,null,{default:l(()=>[r("h1",ge,u(n(V)("rssArticles.title")),1)]),_:1}),e(h,null,{default:l(()=>[r("div",he,[e(_,{icon:"mdi-close",variant:"plain",onClick:w})])]),_:1})]),_:1}),e(D,null,{default:l(()=>[e(p,null,{default:l(()=>[e(T,null,{default:l(()=>[e(h,{cols:"12"},{default:l(()=>[e(ne,{modelValue:A.value,"onUpdate:modelValue":s[0]||(s[0]=a=>A.value=a),label:t.$t("rssArticles.filters.title"),clearable:"","hide-details":""},null,8,["modelValue","label"])]),_:1}),e(h,{cols:"12"},{default:l(()=>[r("div",Ae,[e(oe,{modelValue:n(i).filters.unread,"onUpdate:modelValue":s[1]||(s[1]=a=>n(i).filters.unread=a),label:t.$t("rssArticles.filters.unread"),"hide-details":""},null,8,["modelValue","label"]),e(N),e(_,{text:t.$t("rssArticles.markAllAsRead"),color:"primary",onClick:H},null,8,["text"])])]),_:1})]),_:1})]),_:1}),n(y).results.value.length?(o(),g(p,{key:0},{default:l(()=>[e($,{modelValue:n(c),"onUpdate:modelValue":s[2]||(s[2]=a=>L(c)?c.value=a:null),length:n(b),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):d("",!0),e(p,null,{default:l(()=>[e(D,null,{default:l(()=>[(o(!0),f(S,null,W(n(I),(a,P)=>(o(),f(S,null,[P>0?(o(),g(ie,{key:0,color:"white"})):d("",!0),e(p,{class:X({"rss-read":a.isRead}),onClick:m=>j(a)},{default:l(()=>[r("div",Ce,[r("div",null,[e(re,{class:"text-wrap"},{default:l(()=>[C(u(a.title),1)]),_:2},1024),e(ue,{class:"d-block"},{default:l(()=>[r("div",null,u(a.parsedDate.toLocaleString()),1),a.feedName?(o(),f("div",xe,u(n(V)("rssArticles.item.feedName",{name:a.feedName})),1)):d("",!0),a.author?(o(),f("div",be,u(n(V)("rssArticles.item.author",{author:a.author})),1)):d("",!0),a.category?(o(),f("div",we,u(n(V)("rssArticles.item.category",{category:a.category})),1)):d("",!0)]),_:2},1024)]),e(N),r("div",Re,[e(_,{icon:"mdi-open-in-new",variant:"text",onClick:x(m=>M(a.link),["stop"])},null,8,["onClick"]),e(_,{color:"accent",icon:"mdi-check",variant:"text",onClick:x(m=>z(a),["stop"])},null,8,["onClick"]),e(_,{icon:"mdi-download",variant:"text",onClick:x(m=>E(a),["stop"])},null,8,["onClick"])])]),e(de,{modelValue:v.value,"onUpdate:modelValue":s[4]||(s[4]=m=>v.value=m)},{default:l(()=>[e(ce,null,{default:l(()=>[e(me,null,{default:l(()=>[e(fe,{color:"transparent"},{default:l(()=>[e(_e,null,{default:l(()=>[C(u(k.title),1)]),_:1}),e(_,{icon:"mdi-close",onClick:s[3]||(s[3]=m=>v.value=!1)})]),_:1})]),_:1}),e(pe,null,{default:l(()=>[r("div",{class:"description-container",innerHTML:k.content},null,8,Le)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:2},1032,["class","onClick"])],64))),256)),n(y).results.value.length===0?(o(),g(p,{key:0},{default:l(()=>[C(u(t.$t("common.emptyList")),1)]),_:1})):d("",!0)]),_:1})]),_:1}),n(y).results.value.length?(o(),g(p,{key:1},{default:l(()=>[e($,{modelValue:n(c),"onUpdate:modelValue":s[5]||(s[5]=a=>L(c)?c.value=a:null),length:n(b),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):d("",!0)]),_:1})]))}});const Fe=ve(Se,[["__scopeId","data-v-524ee5de"]]);export{Fe as default};
