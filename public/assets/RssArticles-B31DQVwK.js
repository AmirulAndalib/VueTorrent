import{h as _,d as B,r as le,H as ae,B as o,D as b,G as t,m as e,I as D,J as C,u as A,K as j,L as ce,O as W,S as U,M as T,N as S,X as ne,V as ye,c as M,T as Q,F as L,n as N,P as ke,z as be,R as se,_ as fe}from"./vue-BnX0oIJJ.js";import{u as oe,c as Fe,ak as q,d as z,e as Z,f as x,g as Re,a as P,i as ie,j as H,k as R,l as ee,Y as Ue,al as re,am as Se,t as G,E as Te,o as _e,an as Ee,y as pe,x as K,r as ue,a7 as Ne,ao as Le,V as ve,R as O,ap as Me,F as de,aq as Oe,af as Ae,ab as Y,ar as Ie,q as J,s as I,J as me,K as he,as as Pe,at as Be,au as je,av as ge,aw as qe,ax as Ge}from"./index-DYiTlDAA.js";import{a as He}from"./vuetify-Dz-z3L3o.js";var E=(v=>(v[v.LOADING=0]="LOADING",v[v.ERROR=1]="ERROR",v[v.UNREAD=2]="UNREAD",v[v.READ=3]="READ",v))(E||{});const Ke=_({__name:"RssFeedDialog",props:{guid:{},initialFeed:{}},setup(v){const d=v,{t:s}=oe(),{isOpened:a}=Fe(d.guid),l=q(),m=B(),c=B(!1),p=le({name:"",url:""}),h=[i=>!!i||s("dialogs.rss.feed.rules.name_required")],r=[i=>!!i||s("dialogs.rss.feed.rules.url_required")];async function g(){await m.value?.validate(),c.value&&(d.initialFeed?(p.url!==d.initialFeed.url&&await l.setFeedUrl(d.initialFeed.name,p.url),p.name!==d.initialFeed.name&&await l.renameFeed(d.initialFeed.name,p.name)):await l.createFeed(p.name,p.url),await l.fetchFeeds(),u())}const u=()=>{a.value=!1};return ae(()=>{d.initialFeed&&(p.name=d.initialFeed.name,p.url=d.initialFeed.url)}),(i,y)=>(o(),b(ee,{modelValue:A(a),"onUpdate:modelValue":y[4]||(y[4]=n=>W(a)?a.value=n:null)},{default:t(()=>[e(z,null,{default:t(()=>[e(Z,null,{default:t(()=>[D(C(i.$t(`dialogs.rss.feed.title.${i.initialFeed?"edit":"create"}`)),1)]),_:1}),e(x,null,{default:t(()=>[e(A(Re),{modelValue:c.value,"onUpdate:modelValue":y[2]||(y[2]=n=>c.value=n),ref_key:"form",ref:m,onSubmit:y[3]||(y[3]=j(()=>{},["prevent"]))},{default:t(()=>[e(P,{modelValue:p.name,"onUpdate:modelValue":y[0]||(y[0]=n=>p.name=n),rules:h,label:i.$t("dialogs.rss.feed.name"),onKeydown:ce(g,["enter"])},null,8,["modelValue","label"]),e(P,{modelValue:p.url,"onUpdate:modelValue":y[1]||(y[1]=n=>p.url=n),rules:r,label:i.$t("dialogs.rss.feed.url"),onKeydown:ce(g,["enter"])},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1}),e(ie,null,{default:t(()=>[e(H),e(R,{color:"error",onClick:u},{default:t(()=>[D(C(i.$t("common.cancel")),1)]),_:1}),e(R,{color:"accent",disabled:!c.value,onClick:g},{default:t(()=>[D(C(i.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),ze={class:"d-flex"},Je={key:0},Qe={key:1},Xe={class:"d-flex flex-column"},Ye=_({__name:"Article",props:{value:{}},emits:["click","markAsRead","open","download"],setup(v){const d=q();return(s,a)=>(o(),b(G,{class:ne({"rss-read":s.value.isRead}),onClick:a[3]||(a[3]=l=>s.$emit("click")),onContextmenu:a[4]||(a[4]=l=>s.$emit("markAsRead"))},{default:t(()=>[U("div",ze,[U("div",null,[e(re,{class:"d-flex align-center ga-3 wrap-anywhere",style:{"white-space":"unset"}},{default:t(()=>[s.value.isRead?T("",!0):(o(),b(Ue,{key:0,color:"accent",variant:"outlined"},{default:t(()=>[D(C(s.$t("rssArticles.feeds.item.new")),1)]),_:1})),U("div",null,C(s.value.title),1)]),_:1}),e(Se,{class:"d-block mt-3"},{default:t(()=>[U("div",null,C(s.value.parsedDate.toLocaleString()),1),U("div",null,C(s.$t("rssArticles.feeds.item.feedName",{name:A(d).getFeedNames(s.value.id).join(" | ")})),1),s.value.author?(o(),S("div",Je,C(s.$t("rssArticles.feeds.item.author",{author:s.value.author})),1)):T("",!0),s.value.category?(o(),S("div",Qe,C(s.$t("rssArticles.feeds.item.category",{category:s.value.category})),1)):T("",!0)]),_:1})]),e(H),U("div",Xe,[e(R,{icon:"mdi-open-in-new",variant:"text",onClick:a[0]||(a[0]=j(l=>s.$emit("open"),["stop"]))}),e(R,{color:"accent",icon:"mdi-check",variant:"text",onClick:a[1]||(a[1]=j(l=>s.$emit("markAsRead"),["stop"]))}),e(R,{icon:"mdi-download",variant:"text",onClick:a[2]||(a[2]=j(l=>s.$emit("download"),["stop"]))})])])]),_:1},8,["class"]))}}),$e=_({__name:"ArticleList",props:{height:{}},emits:["articleClicked"],setup(v){const d=ye(),s=Te(),a=q(),l=_e(),m=M(()=>d.params.feedId),c=M(()=>a.filteredArticles.filter(y=>!m.value||m.value===y.feedId).sort((y,n)=>Number(n.parsedDate)-Number(y.parsedDate))),{paginatedResults:p,currentPage:h,pageCount:r}=Ee(c,15);function g(y){const n=l.useIdForRssLinks?y.id:y.link;Ne(n)}function u(y){s.pushTorrentToQueue(y.torrentURL)}async function i(y){await a.markArticleAsRead(y.id)}return(y,n)=>(o(),b(ue,{height:y.height},{default:t(()=>[c.value.length?(o(),b(G,{key:0},{default:t(()=>[e(pe,{modelValue:A(h),"onUpdate:modelValue":n[0]||(n[0]=f=>W(h)?h.value=f:null),length:A(r),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):T("",!0),(o(!0),S(L,null,Q(A(p),(f,$)=>(o(),S(L,null,[$>0?(o(),b(K,{key:0})):T("",!0),e(Ye,{value:f,onClick:w=>y.$emit("articleClicked",f),onMarkAsRead:w=>i(f),onOpen:w=>g(f),onDownload:w=>u(f)},null,8,["value","onClick","onMarkAsRead","onOpen","onDownload"])],64))),256)),c.value.length===0?(o(),b(G,{key:1},{default:t(()=>[D(C(y.$t("common.emptyList")),1)]),_:1})):T("",!0),c.value.length?(o(),b(G,{key:2},{default:t(()=>[e(pe,{modelValue:A(h),"onUpdate:modelValue":n[1]||(n[1]=f=>W(h)?h.value=f:null),length:A(r),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):T("",!0)]),_:1},8,["height"]))}}),We={class:"mr-2"},Ce=_({__name:"FeedIcon",props:{state:{}},setup(v){return(d,s)=>(o(),S("span",We,[d.state===A(E).LOADING?(o(),b(Le,{key:0,size:"24",width:"3",indeterminate:""})):d.state===A(E).ERROR?(o(),b(ve,{key:1,icon:"mdi-alert-circle-outline",color:"error"})):d.state===A(E).UNREAD?(o(),b(ve,{key:2,icon:"mdi-email"})):T("",!0)]))}}),Ze={class:"d-flex align-center"},xe=_({__name:"Feed",props:{title:{},state:{},unreadCount:{}},emits:["readFeed","refreshFeed","editFeed","deleteFeed"],setup(v){const d=v,s=M(()=>d.state===E.LOADING);return(a,l)=>(o(),S("div",Ze,[e(Ce,{state:a.state},null,8,["state"]),e(re,null,{default:t(()=>[D(C(a.title),1)]),_:1}),e(H),e(O,{text:a.$t("rssArticles.feeds.markAsRead"),location:"top"},{activator:t(({props:m})=>[a.unreadCount>0?(o(),b(R,N({key:0},m,{icon:"mdi-email-open",density:"comfortable",variant:"plain",onClick:l[0]||(l[0]=j(c=>a.$emit("readFeed"),["stop"]))}),null,16)):T("",!0)]),_:1},8,["text"]),e(O,{text:a.$t("common.refresh"),location:"top"},{activator:t(({props:m})=>[s.value?T("",!0):(o(),b(R,N({key:0},m,{icon:"mdi-sync",density:"comfortable",variant:"plain",onClick:l[1]||(l[1]=j(c=>a.$emit("refreshFeed"),["stop"]))}),null,16))]),_:1},8,["text"]),e(O,{text:a.$t("common.edit"),location:"top"},{activator:t(({props:m})=>[e(R,N(m,{icon:"mdi-pencil",density:"comfortable",variant:"plain",onClick:l[2]||(l[2]=j(c=>a.$emit("editFeed"),["stop"]))}),null,16)]),_:1},8,["text"]),e(O,{text:a.$t("common.delete"),location:"top"},{activator:t(({props:m})=>[e(R,N(m,{icon:"mdi-delete",color:"red",density:"comfortable",variant:"plain",onClick:l[3]||(l[3]=j(c=>a.$emit("deleteFeed"),["stop"]))}),null,16)]),_:1},8,["text"])]))}}),et={class:"d-flex align-center"},Ve=_({__name:"FeedList",props:{height:{}},emits:["update","createFeed","editFeed","deleteFeed","refreshFeed"],setup(v,{emit:d}){const s=d,a=ke(),l=q(),m=M({get(){return a.currentRoute.value.params.feedId},set(n){a.replace({name:"rssArticles",params:{tab:"feeds",feedId:n}}),s("update",n)}}),c=Me(()=>l.filteredArticles.map(n=>n.feedId));function p(n){return n?(n.articles??[]).reduce((f,$)=>f+ +!$.isRead,0):l.unreadArticles.length}function h(n){m.value=m.value!==n.uid?n.uid:void 0}async function r(n){await l.markFeedAsRead(n)}async function g(){await l.refreshAllFeeds(),l.resumeFeedTimer()}function u(n){const f=p(n);return(f?`${f} | `:"")+`${n?n.name:"All"}`}const i=M(()=>l.feeds.reduce((n,f)=>Math.min(n,y(f)),E.READ));function y(n){return n.isLoading?E.LOADING:n.hasError?E.ERROR:n.articles?.some(f=>!f.isRead)?E.UNREAD:E.READ}return(n,f)=>(o(),b(ue,{height:n.height},{default:t(()=>[e(G,{active:!m.value,color:"accent",variant:"text",onClick:f[3]||(f[3]=$=>m.value=void 0)},{default:t(()=>[U("div",et,[e(Ce,{state:i.value},null,8,["state"]),e(re,null,{default:t(()=>[D(C(u()),1)]),_:1}),e(H),e(O,{text:n.$t("rssArticles.feeds.markAllAsRead"),location:"top"},{activator:t(({props:$})=>[p()>0?(o(),b(R,N({key:0},$,{icon:"mdi-email-open",density:"comfortable",variant:"plain",onClick:f[0]||(f[0]=w=>A(l).markAllAsRead())}),null,16)):T("",!0)]),_:1},8,["text"]),e(O,{text:n.$t("rssArticles.feeds.refreshAllFeeds"),location:"top"},{activator:t(({props:$})=>[i.value!==A(E).LOADING?(o(),b(R,N({key:0},$,{icon:"mdi-sync",density:"comfortable",variant:"plain",onClick:f[1]||(f[1]=w=>g())}),null,16)):T("",!0)]),_:1},8,["text"]),e(O,{text:n.$t("rssArticles.feeds.empty.action"),location:"top"},{activator:t(({props:$})=>[e(R,N($,{icon:"mdi-plus",density:"comfortable",variant:"plain",onClick:f[2]||(f[2]=w=>n.$emit("createFeed"))}),null,16)]),_:1},8,["text"])])]),_:1},8,["active"]),e(K,{thickness:"3"}),(o(!0),S(L,null,Q(A(l).feeds,$=>(o(),S(L,null,[(!A(l).filters.unread||p($)>0)&&(!A(c).length||A(c).includes($.uid))?(o(),b(G,{key:0,active:m.value===$.uid,class:ne(p($)>0?"text-accent":""),color:"accent",variant:"text",onClick:w=>h($)},{default:t(()=>[e(xe,{title:u($),state:y($),"unread-count":p($),onReadFeed:w=>r($),onRefreshFeed:w=>n.$emit("refreshFeed",$),onEditFeed:w=>n.$emit("editFeed",$),onDeleteFeed:w=>n.$emit("deleteFeed",$)},null,8,["title","state","unread-count","onReadFeed","onRefreshFeed","onEditFeed","onDeleteFeed"])]),_:2},1032,["active","class","onClick"])):T("",!0)],64))),256))]),_:1},8,["height"]))}}),tt=_({__name:"Feeds",props:{height:{},mobile:{type:Boolean}},emits:["openArticle"],setup(v){const d=v,s=de(),a=q(),l=B(!1),m=M(()=>d.height-56-16-56-12*2),c=M({get:()=>a.filters.title,set:Oe(g=>{a.filters.title=g??""},300)});function p(g){s.createDialog(Ke,{initialFeed:g},a.resumeFeedTimer)}async function h(g){await a.refreshFeed(g.name),a.resumeFeedTimer()}async function r(g){await a.deleteFeed(g.name),a.resumeFeedTimer()}return be(()=>{a.resumeFeedTimer()}),se(()=>{a.pauseFeedTimer()}),(g,u)=>A(a).feeds.length?(o(),b(z,{key:1,id:"rss-articles",class:"pa-3",height:g.height},{default:t(()=>[e(P,{modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=i=>c.value=i),label:g.$t("rssArticles.feeds.filters.title"),clearable:"","hide-details":""},null,8,["modelValue","label"]),e(Y,{modelValue:A(a).filters.unread,"onUpdate:modelValue":u[2]||(u[2]=i=>A(a).filters.unread=i),label:g.$t("rssArticles.feeds.filters.unread"),"hide-details":""},null,8,["modelValue","label"]),g.mobile?(o(),S(L,{key:0},[e($e,{height:m.value,onArticleClicked:u[3]||(u[3]=i=>g.$emit("openArticle",i))},null,8,["height"]),e(Ie,{modelValue:l.value,"onUpdate:modelValue":u[9]||(u[9]=i=>l.value=i),"max-height":"550"},{activator:t(({props:i})=>[e(R,N({class:"fab"},i,{color:"accent",icon:"mdi-format-list-bulleted",size:"large"}),null,16)]),default:t(()=>[e(Ve,{onUpdate:u[4]||(u[4]=i=>l.value=!1),onCreateFeed:u[5]||(u[5]=()=>p()),onEditFeed:u[6]||(u[6]=i=>p(i)),onDeleteFeed:u[7]||(u[7]=i=>r(i)),onRefreshFeed:u[8]||(u[8]=i=>h(i))})]),_:1},8,["modelValue"])],64)):(o(),b(J,{key:1},{default:t(()=>[e(I,{cols:"4"},{default:t(()=>[e(Ve,{height:m.value,onCreateFeed:u[10]||(u[10]=()=>p()),onEditFeed:u[11]||(u[11]=i=>p(i)),onDeleteFeed:u[12]||(u[12]=i=>r(i)),onRefreshFeed:u[13]||(u[13]=i=>h(i))},null,8,["height"])]),_:1}),e(I,{cols:"8"},{default:t(()=>[e($e,{height:m.value,onArticleClicked:u[14]||(u[14]=i=>g.$emit("openArticle",i))},null,8,["height"])]),_:1})]),_:1}))]),_:1},8,["height"])):(o(),b(z,{key:0,height:g.height},{default:t(()=>[e(Ae,{title:g.$t("rssArticles.feeds.empty.value"),icon:"mdi-rss-off"},{actions:t(()=>[e(R,{text:g.$t("rssArticles.feeds.empty.action"),color:"accent",onClick:u[0]||(u[0]=i=>p())},null,8,["text"])]),_:1},8,["title"])]),_:1},8,["height"]))}}),lt=_({__name:"AddTorrentParamsDialog",props:{modelValue:{required:!0},modelModifiers:{},isOpened:{type:Boolean},isOpenedModifiers:{}},emits:["update:modelValue","update:isOpened"],setup(v){const d=fe(v,"modelValue"),s=fe(v,"isOpened"),{t:a}=oe(),l=B();function m(){l.value?.saveFields(),s.value=!1}return(c,p)=>(o(),b(ee,{modelValue:s.value,"onUpdate:modelValue":p[1]||(p[1]=h=>s.value=h),class:ne(c.$vuetify.display.mobile?"":"w-75"),fullscreen:c.$vuetify.display.mobile,scrollable:""},{default:t(()=>[e(z,null,{default:t(()=>[e(Z,{class:"ios-margin"},{default:t(()=>[e(me,{color:"transparent"},{default:t(()=>[e(he,null,{default:t(()=>[D(C(A(a)("dialogs.add.params.title")),1)]),_:1}),e(R,{icon:"mdi-close",onClick:m})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(Pe,{modelValue:d.value,"onUpdate:modelValue":p[0]||(p[0]=h=>d.value=h)},null,8,["modelValue"])]),_:1}),e(ie,{class:"mb-2"},{default:t(()=>[e(H),e(R,{text:c.$t("common.close"),color:"",variant:"flat",onClick:m},null,8,["text"])]),_:1})]),_:1})]),_:1},8,["modelValue","class","fullscreen"]))}});function at(v){return{save_path:v?.save_path??"",skip_checking:!1,add_to_top_of_queue:v?.add_to_top_of_queue??!1,content_layout:v?.torrent_content_layout,stop_condition:v?.torrent_stop_condition,download_limit:v?.dl_limit,upload_limit:v?.up_limit,use_download_path:!!v?.temp_path,download_path:v?.temp_path?v?.temp_path:"",stopped:v?.add_stopped_enabled??v?.start_paused_enabled,use_auto_tmm:v?.auto_tmm_enabled,ratio_limit:-2,seeding_time_limit:-2,inactive_seeding_time_limit:-2}}const nt={class:"d-flex"},st={class:"d-flex align-center"},ot={class:"v-card-title pa-0"},it=_({__name:"RssRuleDialog",props:{guid:{},initialRule:{}},setup(v){const d=v,s=M(()=>!!(d.initialRule&&d.initialRule.name)),{isOpened:a}=Fe(d.guid),{t:l}=oe(),m=Be(),c=q(),p=B(),h=B(!1),r=le(y()),g=B(""),u=B([]),i=M(()=>{if(r.lastMatch==="")return l("dialogs.rss.rule.lastMatch.unknownValue").toString();const k=new Date().getTime()-new Date(r.lastMatch).getTime();return l("dialogs.rss.rule.lastMatch.knownValue",Math.floor(k/(1e3*60*60*24)))});function y(){return{affectedFeeds:[],enabled:!0,episodeFilter:"",ignoreDays:0,lastMatch:"",mustContain:"",mustNotContain:"",name:"",priority:0,smartFilter:!1,useRegex:!1,previouslyMatchedEpisodes:s.value?d.initialRule.previouslyMatchedEpisodes:[],torrentParams:at(m.preferences)}}async function n(){if(g.value==="")return;const k=[],F=await c.fetchMatchingArticles(g.value);for(const V in F){const X=F[V];k.length>0&&k.push({type:"divider"}),k.push({type:"subheader",value:V});for(const we in X){const De=X[we];k.push({type:"item",value:De})}}u.value=k}async function f(){h.value&&((s.value||g.value!=="")&&g.value!==r.name&&await c.renameRule(g.value,r.name),await c.setRule(r.name,r),g.value=r.name,await c.fetchRules(),await n())}async function $(){r.affectedFeeds=[]}async function w(){r.affectedFeeds=c.feeds.map(k=>k.url)}const te=()=>{a.value=!1};return ae(async()=>{await c.fetchFeeds(),s.value&&(g.value=d.initialRule.name,Object.assign(r,d.initialRule)),await n()}),(k,F)=>(o(),b(ee,{modelValue:A(a),"onUpdate:modelValue":F[13]||(F[13]=V=>W(a)?a.value=V:null)},{default:t(()=>[e(z,null,{default:t(()=>[e(Z,null,{default:t(()=>[e(me,{color:"transparent",title:k.$t(`dialogs.rss.rule.title.${k.initialRule?"edit":"create"}`)},{default:t(()=>[e(R,{icon:"mdi-close",onClick:te})]),_:1},8,["title"])]),_:1}),e(x,null,{default:t(()=>[e(A(Re),{modelValue:h.value,"onUpdate:modelValue":F[11]||(F[11]=V=>h.value=V),ref_key:"form",ref:p,onSubmit:F[12]||(F[12]=j(()=>{},["prevent"]))},{default:t(()=>[e(J,null,{default:t(()=>[e(I,{cols:"12",sm:"6",class:"scrollable-col"},{default:t(()=>[e(P,{modelValue:r.name,"onUpdate:modelValue":F[0]||(F[0]=V=>r.name=V),autofocus:"",required:"",label:k.$t("dialogs.rss.rule.name")},null,8,["modelValue","label"]),U("div",nt,[e(je,{modelValue:r.enabled,"onUpdate:modelValue":F[1]||(F[1]=V=>r.enabled=V),color:"accent",inset:"","hide-details":"",label:k.$t("dialogs.rss.rule.enabled")},null,8,["modelValue","label"]),e(H),U("div",st,[e(R,{class:"d-flex align-center justify-center",color:"accent"},{default:t(()=>[D(C(k.$t("dialogs.add.params.title"))+" ",1),e(lt,{modelValue:r.torrentParams,"onUpdate:modelValue":F[2]||(F[2]=V=>r.torrentParams=V),activator:"parent"},null,8,["modelValue"])]),_:1})])]),e(K),e(Y,{modelValue:r.useRegex,"onUpdate:modelValue":F[3]||(F[3]=V=>r.useRegex=V),"hide-details":"",label:k.$t("dialogs.rss.rule.useRegex")},null,8,["modelValue","label"]),e(P,{modelValue:r.mustContain,"onUpdate:modelValue":F[4]||(F[4]=V=>r.mustContain=V),label:k.$t("dialogs.rss.rule.mustContain")},null,8,["modelValue","label"]),e(P,{modelValue:r.mustNotContain,"onUpdate:modelValue":F[5]||(F[5]=V=>r.mustNotContain=V),label:k.$t("dialogs.rss.rule.mustNotContain")},null,8,["modelValue","label"]),e(Y,{modelValue:r.smartFilter,"onUpdate:modelValue":F[6]||(F[6]=V=>r.smartFilter=V),"hide-details":"",label:k.$t("dialogs.rss.rule.smartFilter")},null,8,["modelValue","label"]),e(P,{modelValue:r.episodeFilter,"onUpdate:modelValue":F[7]||(F[7]=V=>r.episodeFilter=V),placeholder:k.$t("dialogs.rss.rule.episodeFilterPlaceholder"),label:k.$t("dialogs.rss.rule.episodeFilter")},null,8,["modelValue","placeholder","label"]),e(K,{class:"mb-4"}),e(P,{modelValue:r.ignoreDays,"onUpdate:modelValue":F[8]||(F[8]=V=>r.ignoreDays=V),modelModifiers:{number:!0},type:"number",hint:k.$t("dialogs.rss.rule.ignoreDaysHint"),label:k.$t("dialogs.rss.rule.ignoreDays")},null,8,["modelValue","hint","label"]),e(P,{modelValue:i.value,"onUpdate:modelValue":F[9]||(F[9]=V=>i.value=V),disabled:"",label:k.$t("dialogs.rss.rule.lastMatch.label")},null,8,["modelValue","label"]),e(K),e(ge,null,{default:t(()=>[D(C(k.$t("dialogs.rss.rule.affectedFeedsSubheader")),1)]),_:1}),e(J,null,{default:t(()=>[e(I,{cols:"6",class:"d-flex align-center justify-center"},{default:t(()=>[e(R,{color:"accent",onClick:w},{default:t(()=>[D(C(k.$t("common.selectAll")),1)]),_:1})]),_:1}),e(I,{cols:"6",class:"d-flex align-center justify-center"},{default:t(()=>[e(R,{color:"primary",onClick:$},{default:t(()=>[D(C(k.$t("common.selectNone")),1)]),_:1})]),_:1})]),_:1}),(o(!0),S(L,null,Q(A(c).feeds,V=>(o(),b(Y,{modelValue:r.affectedFeeds,"onUpdate:modelValue":F[10]||(F[10]=X=>r.affectedFeeds=X),multiple:"","hide-details":"",label:V.name,value:V.url},null,8,["modelValue","label","value"]))),256))]),_:1}),e(K,{vertical:!k.$vuetify.display.mobile},null,8,["vertical"]),e(I,{cols:"12",sm:"6",class:"scrollable-col"},{default:t(()=>[U("div",ot,C(k.$t("dialogs.rss.rule.matchingArticles.title")),1),e(ue,null,{default:t(()=>[(o(!0),S(L,null,Q(u.value,V=>(o(),S(L,null,[V.type==="divider"?(o(),b(K,{key:0})):V.type==="subheader"?(o(),b(ge,{key:1,inset:""},{default:t(()=>[D(C(V.value),1)]),_:2},1024)):(o(),b(G,{key:2,class:"mb-3"},{default:t(()=>[D(C(V.value),1)]),_:2},1024))],64))),256)),u.value.length===0?(o(),b(G,{key:0,title:k.$t("dialogs.rss.rule.matchingArticles.noMatch")},null,8,["title"])):T("",!0)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(ie,null,{default:t(()=>[e(H),e(R,{color:"error",onClick:te},{default:t(()=>[D(C(k.$t("common.close")),1)]),_:1}),e(R,{color:"accent",onClick:f},{default:t(()=>[D(C(k.$t("common.save")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),rt=qe(it,[["__scopeId","data-v-f0e89cbe"]]),ut={class:"pl-4"},dt=_({__name:"Rule",props:{value:{}},emits:["openRule"],setup(v){const d=q();async function s(l){await d.setRule(l.name,{...l,enabled:!l.enabled}),d.resumeRuleTimer()}async function a(l){await d.deleteRule(l.name),d.resumeRuleTimer()}return(l,m)=>(o(),b(Ge,{rounded:"xl",class:"d-flex align-center"},{default:t(()=>[U("div",ut,C(l.value.name),1),e(H),U("div",null,[e(R,{class:"my-2 mr-2",icon:l.value.enabled?"mdi-check":"mdi-cancel",color:l.value.enabled?"accent":"red",variant:"plain",density:"compact",onClick:m[0]||(m[0]=c=>s(l.value))},null,8,["icon","color"]),e(O,{text:l.$t("common.edit"),location:"top"},{activator:t(({props:c})=>[e(R,N(c,{class:"my-2 mr-2",icon:"mdi-pencil",variant:"plain",density:"compact",onClick:m[1]||(m[1]=p=>l.$emit("openRule",l.value))}),null,16)]),_:1},8,["text"]),e(O,{text:l.$t("common.delete"),location:"top"},{activator:t(({props:c})=>[e(R,N(c,{class:"my-2 mr-2",icon:"mdi-delete",color:"red",variant:"plain",density:"compact",onClick:m[2]||(m[2]=p=>a(l.value))}),null,16)]),_:1},8,["text"])])]),_:1}))}}),mt=_({__name:"Rules",props:{height:{}},setup(v){const d=de(),s=q();function a(l){d.createDialog(rt,{initialRule:l},s.resumeRuleTimer)}return ae(()=>{s.resumeRuleTimer()}),se(()=>{s.pauseRuleTimer()}),(l,m)=>A(s).rules.length?(o(),S(L,{key:1},[e(J,{class:"mt-2"},{default:t(()=>[(o(!0),S(L,null,Q(A(s).rules,c=>(o(),b(I,{cols:"12",sm:"6",lg:"3"},{default:t(()=>[e(dt,{value:c,onOpenRule:a},null,8,["value"])]),_:2},1024))),256))]),_:1}),e(J,null,{default:t(()=>[e(I,{cols:"12",class:"d-flex align-center justify-center"},{default:t(()=>[e(R,{color:"accent",onClick:m[1]||(m[1]=c=>a())},{default:t(()=>[D(C(l.$t("rssArticles.rules.empty.action")),1)]),_:1})]),_:1})]),_:1})],64)):(o(),b(z,{key:0,height:l.height},{default:t(()=>[e(Ae,{title:l.$t("rssArticles.rules.empty.value"),icon:"mdi-rss-off"},{actions:t(()=>[e(R,{text:l.$t("rssArticles.rules.empty.action"),color:"accent",onClick:m[0]||(m[0]=c=>a())},null,8,["text"])]),_:1},8,["title"])]),_:1},8,["height"]))}}),ct={class:"pa-3"},ft={class:"subtitle-1 ml-2",style:{"font-size":"1.6em !important"}},pt={class:"d-flex justify-end"},vt=["innerHTML"],yt=_({__name:"RssArticles",setup(v){const{height:d,mobile:s}=He({mobileBreakpoint:"md"}),a=ye(),l=ke(),m=de(),c=q(),p=B(!1),h=le({title:"",content:""}),r=M(()=>a.params.tab!=="rules"),g=M(()=>d.value-64-12*2-48);function u(f){f.description&&(h.title=f.title.trim(),h.content=f.description.trim(),p.value=!0)}function i(){const f=a.params.tab==="rules"?"feeds":"rules";l.replace({name:"rssArticles",params:{tab:f}}),c.lastView=f}function y(){l.push({name:"dashboard"})}function n(f){if(m.hasActiveDialog||p.value)return!1;f.key==="Escape"&&y()}return be(()=>{document.addEventListener("keydown",n)}),se(()=>{document.removeEventListener("keydown",n)}),(f,$)=>(o(),S(L,null,[U("div",ct,[e(J,{align:"center",justify:"center","no-gutters":""},{default:t(()=>[e(I,null,{default:t(()=>[U("h1",ft,C(r.value?f.$t("rssArticles.feeds.title"):f.$t("rssArticles.rules.title")),1)]),_:1}),e(I,null,{default:t(()=>[U("div",pt,[e(O,{text:f.$t(r.value?"rssArticles.toggle.rules":"rssArticles.toggle.feeds"),location:"top"},{activator:t(({props:w})=>[e(R,N(w,{icon:"mdi-auto-download",variant:"plain",onClick:$[0]||($[0]=te=>i())}),null,16)]),_:1},8,["text"]),e(R,{icon:"mdi-close",variant:"plain",onClick:$[1]||($[1]=w=>y())})])]),_:1})]),_:1}),r.value?(o(),b(tt,{key:0,height:g.value,mobile:A(s),onOpenArticle:u},null,8,["height","mobile"])):(o(),b(mt,{key:1,height:g.value},null,8,["height"]))]),e(ee,{modelValue:p.value,"onUpdate:modelValue":$[3]||($[3]=w=>p.value=w)},{default:t(()=>[e(z,null,{default:t(()=>[e(Z,null,{default:t(()=>[e(me,{color:"transparent"},{default:t(()=>[e(he,null,{default:t(()=>[D(C(h.title),1)]),_:1}),e(R,{icon:"mdi-close",onClick:$[2]||($[2]=w=>p.value=!1)})]),_:1})]),_:1}),e(x,null,{default:t(()=>[U("div",{class:"description-container",innerHTML:h.content},null,8,vt)]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});export{yt as default};