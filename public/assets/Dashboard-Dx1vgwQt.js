import{h as S,E as Te,a3 as N,a as y,H as s,Y as p,W as b,n as a,u as c,J as m,X as ze,L as v,F as R,q as K,I as A,N as D,f as M,r as qe,G as ke,T as Xe,K as B,M as Q,O as be,P as pe,S as Ye,U as Ke,Z as X,V as W,a5 as Ae,a6 as $e,a7 as Be,a8 as pt,a9 as vt,w as ht,v as ft,x as Ie}from"./vue-Jp_2OsRs.js";import{aG as Z,aH as _t,U as ne,aI as h,f as J,B as j,S as yt,aJ as bt,h as Ce,i as O,aK as q,k as Ee,C as je,D as me,a as Le,V as re,c as xe,d as ve,e as Oe,g as Me,j as Re,T as Se,aL as gt,aM as De,s as Ne,t as _e,A as ye,m as We,a9 as Tt,aN as Ze,G as U,aO as ge,aP as Qe,aQ as kt,aR as $t,aS as Je,Q as Ve,aT as et,aU as tt,aV as Ct,aW as St,aX as E,aY as ot,R as Ue,$ as Vt,aZ as wt,aC as It,a_ as Et,K as Fe,a$ as Pe,b0 as Dt,__tla as __tla_0}from"./index-CQuF-7N5.js";import{d as Pt}from"./index-d-kiVV2d.js";import{_ as At,a as Ge,__tla as __tla_1}from"./MoveTorrentDialog.vue_vue_type_script_setup_true_lang-lOmxuwEY.js";import{u as at}from"./vuetify-BGw30afU.js";import{u as Bt,__tla as __tla_2}from"./ArrayPagination-C_DANId4.js";let ia;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})(),(()=>{try{return __tla_1}catch{}})(),(()=>{try{return __tla_2}catch{}})()]).then(async()=>{let Lt,xt,Ot,Mt,Rt,le,z,Nt,He,Ut,Kt,Ft,Gt,Ht,lt,zt,qt,Xt,nt,Yt,jt,Wt,rt,Zt,Qt,Jt,eo,st,to,oo,ao,lo,it,no,ro,dt,so,io,ut,uo,co,mo,ct,po,vo,mt,ho,fo,_o,yo,bo,go,To,ko,$o,Co,So,Vo,wo,Io,Eo,Do,Po,Ao,Bo,Lo,xo,Oo,Mo,Ro,No,Uo,Ko,Fo,Go,Ho,zo,qo,Xo,Yo,jo,Wo,Zo,Qo,Jo,ea,ta;Lt={class:"d-flex my-3"};xt={class:"pa-0"};Ot={class:"d-flex align-center text-uppercase text-select",style:{"font-size":"0.8em"}};Mt=S({__name:"Toolbar",setup(f){const{t:e}=Te(),d=Z(),{torrentCountString:t,isSelectionMultiple:o,displayMode:u}=N(d),{isDrawerOpen:l}=N(_t()),n=ne(),{sortOptions:r}=N(n),i=[{value:h.ADDED_ON,title:e("dashboard.sortBy.added_on")},{value:h.AMOUNT_LEFT,title:e("dashboard.sortBy.amount_left")},{value:h.AUTO_TMM,title:e("dashboard.sortBy.auto_tmm")},{value:h.AVAILABILITY,title:e("dashboard.sortBy.availability")},{value:h.AVG_DOWNLOAD_SPEED,title:e("dashboard.sortBy.avg_download_speed")},{value:h.AVG_UPLOAD_SPEED,title:e("dashboard.sortBy.avg_upload_speed")},{value:h.CATEGORY,title:e("dashboard.sortBy.category")},{value:h.COMPLETED,title:e("dashboard.sortBy.completed")},{value:h.COMPLETION_ON,title:e("dashboard.sortBy.completion_on")},{value:h.CONTENT_PATH,title:e("dashboard.sortBy.content_path")},{value:h.DL_LIMIT,title:e("dashboard.sortBy.dl_limit")},{value:h.DLSPEED,title:e("dashboard.sortBy.dlspeed")},{value:h.DOWNLOAD_PATH,title:e("dashboard.sortBy.download_path")},{value:h.DOWNLOADED,title:e("dashboard.sortBy.downloaded")},{value:h.DOWNLOADED_SESSION,title:e("dashboard.sortBy.downloaded_session")},{value:h.ETA,title:e("dashboard.sortBy.eta")},{value:h.F_L_PIECE_PRIO,title:e("dashboard.sortBy.f_l_piece_prio")},{value:h.FORCE_START,title:e("dashboard.sortBy.force_start")},{value:h.GLOBALSPEED,title:e("dashboard.sortBy.globalSpeed")},{value:h.GLOBALVOLUME,title:e("dashboard.sortBy.globalVolume")},{value:h.HASH,title:e("dashboard.sortBy.hash")},{value:h.INFOHASH_V1,title:e("dashboard.sortBy.infohash_v1")},{value:h.INFOHASH_V2,title:e("dashboard.sortBy.infohash_v2")},{value:h.LAST_ACTIVITY,title:e("dashboard.sortBy.last_activity")},{value:h.MAGNET_URI,title:e("dashboard.sortBy.magnet_uri")},{value:h.MAX_RATIO,title:e("dashboard.sortBy.max_ratio")},{value:h.MAX_SEEDING_TIME,title:e("dashboard.sortBy.max_seeding_time")},{value:h.NAME,title:e("dashboard.sortBy.name")},{value:h.NUM_COMPLETE,title:e("dashboard.sortBy.num_complete")},{value:h.NUM_INCOMPLETE,title:e("dashboard.sortBy.num_incomplete")},{value:h.NUM_LEECHS,title:e("dashboard.sortBy.num_leechs")},{value:h.NUM_SEEDS,title:e("dashboard.sortBy.num_seeds")},{value:h.PRIORITY,title:e("dashboard.sortBy.priority")},{value:h.PROGRESS,title:e("dashboard.sortBy.progress")},{value:h.RATIO,title:e("dashboard.sortBy.ratio")},{value:h.RATIO_LIMIT,title:e("dashboard.sortBy.ratio_limit")},{value:h.SAVE_PATH,title:e("dashboard.sortBy.save_path")},{value:h.SEEDING_TIME,title:e("dashboard.sortBy.seeding_time")},{value:h.SEEDING_TIME_LIMIT,title:e("dashboard.sortBy.seeding_time_limit")},{value:h.SEEN_COMPLETE,title:e("dashboard.sortBy.seen_complete")},{value:h.SEQ_DL,title:e("dashboard.sortBy.seq_dl")},{value:h.SIZE,title:e("dashboard.sortBy.size")},{value:h.STATE,title:e("dashboard.sortBy.state")},{value:h.SUPER_SEEDING,title:e("dashboard.sortBy.super_seeding")},{value:h.TAGS,title:e("dashboard.sortBy.tags")},{value:h.TIME_ACTIVE,title:e("dashboard.sortBy.time_active")},{value:h.TOTAL_SIZE,title:e("dashboard.sortBy.total_size")},{value:h.TRACKER,title:e("dashboard.sortBy.tracker")},{value:h.TRACKERS_COUNT,title:e("dashboard.sortBy.trackers_count")},{value:h.UP_LIMIT,title:e("dashboard.sortBy.up_limit")},{value:h.UPLOADED,title:e("dashboard.sortBy.uploaded")},{value:h.UPLOADED_SESSION,title:e("dashboard.sortBy.uploaded_session")},{value:h.UPSPEED,title:e("dashboard.sortBy.upspeed")}].sort((P,T)=>P.title.localeCompare(T.title));i.splice(0,0,{value:h.DEFAULT,title:e("dashboard.sortBy.default")});function C(){n.textFilter=""}const g=y({get:()=>n.textFilter,set:Pt(P=>{n.textFilter=P??""},300)});function x(){o.value&&d.unselectAllTorrents(),o.value=!o.value}return(P,T)=>(s(),p(R,null,[b("div",null,[a(J,{id:"searchInput",modelValue:g.value,"onUpdate:modelValue":T[0]||(T[0]=V=>g.value=V),label:c(e)("dashboard.searchInputLabel"),clearable:"",density:"compact","single-line":"","hide-details":"","prepend-inner-icon":"mdi-magnify",variant:"solo","onClick:clear":T[1]||(T[1]=V=>C())},null,8,["modelValue","label"])]),b("div",Lt,[a(j,{text:c(e)("dashboard.toggleSelectMode"),location:"top"},{activator:m(({props:V})=>[a(O,K({icon:c(o)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"},V,{variant:"plain",onClick:x}),null,16,["icon"])]),_:1},8,["text"]),a(yt,null,{activator:m(({props:V})=>[a(j,{text:P.$t("dashboard.displayMode.title"),location:"top"},{activator:m(({props:w})=>[a(O,K({icon:""},K(V,w),{variant:"plain"}),{default:m(()=>[c(u)===c(q).LIST?(s(),A(Ee,{key:0,icon:"mdi-view-list"})):D("",!0),c(u)===c(q).GRID?(s(),A(Ee,{key:1,icon:"mdi-view-grid"})):D("",!0),c(u)===c(q).TABLE?(s(),A(Ee,{key:2,icon:"mdi-table"})):D("",!0)]),_:2},1040)]),_:2},1032,["text"])]),default:m(()=>[a(je,null,{default:m(()=>[a(me,{title:P.$t("dashboard.displayMode.list"),"prepend-icon":"mdi-view-list",onClick:T[2]||(T[2]=V=>u.value=c(q).LIST)},null,8,["title"]),a(me,{title:P.$t("dashboard.displayMode.grid"),"prepend-icon":"mdi-view-grid",onClick:T[3]||(T[3]=V=>u.value=c(q).GRID)},null,8,["title"]),a(me,{title:P.$t("dashboard.displayMode.table"),"prepend-icon":"mdi-table",onClick:T[4]||(T[4]=V=>u.value=c(q).TABLE)},null,8,["title"])]),_:1})]),_:1}),a(j,{text:c(e)("dashboard.toggleSortOrder"),location:"top"},{activator:m(({props:V})=>[a(O,K({icon:c(r).reverseOrder?"mdi-arrow-up-thin":"mdi-arrow-down-thin"},V,{variant:"plain",onClick:T[5]||(T[5]=w=>c(r).reverseOrder=!c(r).reverseOrder)}),null,16,["icon"])]),_:1},8,["text"]),b("div",xt,[a(bt,{modelValue:c(r).sortBy,"onUpdate:modelValue":T[6]||(T[6]=V=>c(r).sortBy=V),items:c(i),label:c(e)("dashboard.sortLabel"),"auto-select-first":"",density:"compact","hide-details":"",variant:"solo-filled",style:ze(`width: ${P.$vuetify.display.xs||P.$vuetify.display.sm&&c(l)?140:260}px`)},null,8,["modelValue","items","label","style"])]),a(Ce),b("div",Ot,v(c(t)),1)])],64))}});Rt=S({__name:"RenameTorrentDialog",props:{guid:{},hash:{}},setup(f){const e=f,{isOpened:d}=Le(e.guid),{t}=Te(),o=ne(),u=M(),l=M(),n=M(!1),r=qe({newName:""}),i=[T=>!!T||t("dialogs.renameTorrent.required"),T=>T!==g.value||t("dialogs.renameTorrent.sameName")],C=y(()=>o.getTorrentByHash(e.hash)),g=y(()=>C.value?.name);async function x(){await l.value?.validate(),n.value&&(await o.renameTorrent(e.hash,r.newName),P())}const P=()=>{d.value=!1};return ke(()=>{r.newName=C.value?.name||""}),Xe(()=>{u.value?.select()}),(T,V)=>(s(),A(Re,{modelValue:c(d),"onUpdate:modelValue":V[3]||(V[3]=w=>pe(d)?d.value=w:null)},{default:m(()=>[a(re,null,{default:m(()=>[a(xe,null,{default:m(()=>[B(v(T.$t("dialogs.renameTorrent.title")),1)]),_:1}),a(ve,null,{default:m(()=>[a(c(Oe),{modelValue:n.value,"onUpdate:modelValue":V[1]||(V[1]=w=>n.value=w),ref_key:"form",ref:l,onSubmit:V[2]||(V[2]=Q(()=>{},["prevent"]))},{default:m(()=>[g.value?(s(),A(J,{key:0,"model-value":g.value,disabled:"",label:T.$t("dialogs.renameTorrent.oldName")},null,8,["model-value","label"])):D("",!0),a(J,{modelValue:r.newName,"onUpdate:modelValue":V[0]||(V[0]=w=>r.newName=w),ref_key:"field",ref:u,rules:i,autofocus:"",label:T.$t("dialogs.renameTorrent.newName"),onKeydown:be(x,["enter"])},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1}),a(Me,null,{default:m(()=>[a(Ce),a(O,{color:"error",onClick:P},{default:m(()=>[B(v(T.$t("common.cancel")),1)]),_:1}),a(O,{color:"accent",disabled:!n.value,onClick:x},{default:m(()=>[B(v(T.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});le=-2;z=-1;Nt=S({__name:"ShareLimitDialog",props:{guid:{},hashes:{}},setup(f){const e=f,{isOpened:d}=Le(e.guid),t=Se(),o=ne(),u=M(!1),l=M("global"),n=M(!1),r=M(0),i=M(!1),C=M(0),g=M(!1),x=M(0),P=y(()=>l.value!=="enabled");function T(){d.value=!1}async function V(){switch(l.value){case"global":await t.setShareLimit(e.hashes,le,le,le);break;case"disabled":await t.setShareLimit(e.hashes,z,z,z);break;case"enabled":await t.setShareLimit(e.hashes,n.value?r.value:z,i.value?C.value:z,g.value?x.value:z);break}T()}return ke(async()=>{const w=o.getTorrentByHash(e.hashes[0]);if(!w)return T();const k=w.ratio_limit,I=w.seeding_time_limit,G=w.inactive_seeding_time_limit;k===le&&I===le&&G===le?l.value="global":k===z&&I===z&&G===z?l.value="disabled":(l.value="enabled",n.value=k>=0,r.value=n.value?k:0,i.value=I>=0,C.value=i.value?I:0,g.value=G>=0,x.value=g.value?G:0)}),(w,k)=>(s(),A(Re,{modelValue:c(d),"onUpdate:modelValue":k[9]||(k[9]=I=>pe(d)?d.value=I:null),"max-width":"500"},{default:m(()=>[a(re,{title:w.$t("dialogs.share_limit.title")},{default:m(()=>[a(ve,null,{default:m(()=>[a(Oe,{modelValue:u.value,"onUpdate:modelValue":k[7]||(k[7]=I=>u.value=I),onSubmit:k[8]||(k[8]=Q(()=>{},["prevent"])),onKeydown:be(Q(V,["prevent"]),["enter"])},{default:m(()=>[a(gt,{modelValue:l.value,"onUpdate:modelValue":k[0]||(k[0]=I=>l.value=I)},{default:m(()=>[a(De,{label:w.$t("dialogs.share_limit.global"),value:"global"},null,8,["label"]),a(De,{label:w.$t("dialogs.share_limit.disabled"),value:"disabled"},null,8,["label"]),a(De,{label:w.$t("dialogs.share_limit.enabled"),value:"enabled"},null,8,["label"])]),_:1},8,["modelValue"]),a(Ne,null,{default:m(()=>[a(_e,{cols:"12",class:"d-flex align-center"},{default:m(()=>[b("span",null,[a(ye,{modelValue:n.value,"onUpdate:modelValue":k[1]||(k[1]=I=>n.value=I),disabled:P.value},null,8,["modelValue","disabled"])]),a(J,{modelValue:r.value,"onUpdate:modelValue":k[2]||(k[2]=I=>r.value=I),disabled:P.value||!n.value,density:"compact","hide-details":"",label:w.$t("dialogs.share_limit.ratio_limit")},null,8,["modelValue","disabled","label"])]),_:1}),a(_e,{cols:"12",class:"d-flex align-center"},{default:m(()=>[b("span",null,[a(ye,{modelValue:i.value,"onUpdate:modelValue":k[3]||(k[3]=I=>i.value=I),disabled:P.value},null,8,["modelValue","disabled"])]),a(J,{modelValue:C.value,"onUpdate:modelValue":k[4]||(k[4]=I=>C.value=I),disabled:P.value||!i.value,density:"compact","hide-details":"",label:w.$t("dialogs.share_limit.seeding_time_limit")},null,8,["modelValue","disabled","label"])]),_:1}),a(_e,{cols:"12",class:"d-flex align-center"},{default:m(()=>[b("span",null,[a(ye,{modelValue:g.value,"onUpdate:modelValue":k[5]||(k[5]=I=>g.value=I),disabled:P.value},null,8,["modelValue","disabled"])]),a(J,{modelValue:x.value,"onUpdate:modelValue":k[6]||(k[6]=I=>x.value=I),disabled:P.value||!g.value,density:"compact","hide-details":"",label:w.$t("dialogs.share_limit.inactive_seeding_time_limit")},null,8,["modelValue","disabled","label"])]),_:1})]),_:1})]),_:1},8,["modelValue","onKeydown"])]),_:1}),a(Me,null,{default:m(()=>[a(Ce),a(O,{color:"error",onClick:T},{default:m(()=>[B(v(w.$t("common.cancel")),1)]),_:1}),a(O,{color:"accent",disabled:!u.value,onClick:V},{default:m(()=>[B(v(w.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]))}});He=S({__name:"SpeedLimitDialog",props:{guid:{},hashes:{},mode:{}},setup(f){const e=f,{isOpened:d}=Le(e.guid),t=Se(),o=ne(),u=M(!1),l=M(0);function n(){d.value=!1}async function r(){const i=Math.max(0,l.value)*1e3;switch(e.mode){case"download":await t.setDownloadLimit(i,e.hashes);break;case"upload":await t.setUploadLimit(i,e.hashes);break}n()}return ke(async()=>{const i=o.getTorrentByHash(e.hashes[0]);if(!i)return n();switch(e.mode){case"download":l.value=Math.max(0,Math.round(i.dl_limit/1e3));break;case"upload":l.value=Math.max(0,Math.round(i.up_limit/1e3));break}}),(i,C)=>(s(),A(Re,{modelValue:c(d),"onUpdate:modelValue":C[3]||(C[3]=g=>pe(d)?d.value=g:null)},{default:m(()=>[a(re,{title:i.$t(`dialogs.speed_limit.${i.mode}`)},{default:m(()=>[a(ve,null,{default:m(()=>[a(Oe,{modelValue:u.value,"onUpdate:modelValue":C[1]||(C[1]=g=>u.value=g),onSubmit:C[2]||(C[2]=Q(()=>{},["prevent"])),onKeydown:be(Q(r,["prevent"]),["enter"])},{default:m(()=>[a(J,{modelValue:l.value,"onUpdate:modelValue":C[0]||(C[0]=g=>l.value=g),modelModifiers:{number:!0},type:"number",autofocus:"",clearable:"",label:i.$t("dialogs.speed_limit.label"),"prepend-inner-icon":"mdi-speedometer",suffix:"kB/s",onKeydown:be(Q(r,["prevent"]),["enter"])},null,8,["modelValue","label","onKeydown"])]),_:1},8,["modelValue","onKeydown"])]),_:1}),a(Me,null,{default:m(()=>[a(Ce),a(O,{color:"error",onClick:n},{default:m(()=>[B(v(i.$t("common.cancel")),1)]),_:1}),a(O,{color:"accent",disabled:!u.value,onClick:r},{default:m(()=>[B(v(i.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]))}});Ut={class:"d-flex justify-space-around"};Kt=S({__name:"RightClick",props:{rightClickProperties:{}},setup(f){const{t:e}=Te(),d=Ye(),t=Z(),o=We(),u=Se(),l=Tt(),n=ne(),r=y(()=>t.selectedTorrents.length>1),i=y(()=>t.selectedTorrents),C=y(()=>i.value[0]),g=y(()=>n.getTorrentByHash(C.value)),x=y(()=>t.selectedTorrents.map(n.getTorrentByHash).filter(_=>!!_)),P=y(()=>[{name:""},...u.categories]);async function T(){await n.resumeTorrents(i)}async function V(){await n.forceResumeTorrents(i)}async function w(){await n.pauseTorrents(i)}function k(){o.createDialog(Ze,{hashes:[...t.selectedTorrents]})}function I(){o.createDialog(Ge,{hashes:[...t.selectedTorrents],mode:"dl"})}function G(){o.createDialog(Ge,{hashes:[...t.selectedTorrents],mode:"save"})}function Y(){o.createDialog(Rt,{hash:t.selectedTorrents[0]})}async function se(){await n.recheckTorrents(i)}async function he(){await u.reannounceTorrents(i)}async function we(){await u.toggleSeqDl(i)}async function ie(){await u.toggleFLPiecePrio(i)}async function de(){await u.toggleAutoTmm(i,!g.value?.auto_tmm)}function ee(_){return x.value.every(H=>H&&H.tags&&H.tags.includes(_))}async function te(_){ee(_)?await n.removeTorrentTags(i.value,[_]):await n.addTorrentTags(i.value,[_])}async function oe(_){try{await navigator.clipboard.writeText(_)}catch{Ke.error(e("toast.copy.error"));return}Ke.success(e("toast.copy.success"))}function ue(){o.createDialog(He,{hashes:i.value,mode:"download"})}function ce(){o.createDialog(He,{hashes:i.value,mode:"upload"})}function fe(){o.createDialog(Nt,{hashes:i.value})}async function $(){i.value.forEach(_=>{n.exportTorrent(_).then(H=>{const F=window.URL.createObjectURL(H),ae=document.createElement("a");ae.href=F,ae.style.opacity="0",ae.setAttribute("download",`${_}.torrent`),document.body.appendChild(ae),ae.click(),document.body.removeChild(ae)})})}const L=y(()=>[{text:e("dashboard.right_click.advanced.title"),icon:"mdi-head-cog",children:[{text:e("dashboard.right_click.advanced.download_path"),icon:"mdi-tray-arrow-down",action:I},{text:e("dashboard.right_click.advanced.save_path"),icon:"mdi-content-save",action:G},{text:e("dashboard.right_click.advanced.rename"),icon:"mdi-rename-box",hidden:r.value,action:Y},{text:e("dashboard.right_click.advanced.recheck"),icon:"mdi-playlist-check",action:se},{text:e("dashboard.right_click.advanced.reannounce"),icon:"mdi-bullhorn",action:he},{text:e("dashboard.right_click.advanced.seq_dl"),icon:g.value?.seq_dl?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:we},{text:e("dashboard.right_click.advanced.f_l_prio"),icon:g.value?.f_l_piece_prio?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:ie},{text:e("dashboard.right_click.advanced.auto_tmm"),icon:g.value?.auto_tmm?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:de}]},{text:e("dashboard.right_click.priority.title"),icon:"mdi-priority-high",hidden:!l.preferences?.queueing_enabled,children:[{text:e("dashboard.right_click.priority.top"),icon:"mdi-priority-high",action:async()=>await n.setTorrentPriority(i.value,"topPrio")},{text:e("dashboard.right_click.priority.increase"),icon:"mdi-arrow-up",action:async()=>await n.setTorrentPriority(i.value,"increasePrio")},{text:e("dashboard.right_click.priority.decrease"),icon:"mdi-arrow-down",action:async()=>await n.setTorrentPriority(i.value,"decreasePrio")},{text:e("dashboard.right_click.priority.bottom"),icon:"mdi-priority-low",action:async()=>await n.setTorrentPriority(i.value,"bottomPrio")}]},{text:e("dashboard.right_click.tags.title"),icon:"mdi-tag",disabled:u.tags.length===0,disabledText:e("dashboard.right_click.tags.disabled_title"),disabledIcon:"mdi-tag-off",children:u.tags.map(_=>({text:_,icon:ee(_)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:async()=>await te(_)}))},{text:e("dashboard.right_click.category.title"),icon:"mdi-label",disabled:u.categories.length===0,disabledText:e("dashboard.right_click.category.disabled_title"),disabledIcon:"mdi-label-off",children:P.value.map(_=>({text:_.name===""?e("dashboard.right_click.category.clear"):_.name,action:async()=>await n.setTorrentCategory(i.value,_.name)}))},{text:e("dashboard.right_click.speed_limit.title"),icon:"mdi-speedometer-slow",children:[{text:e("dashboard.right_click.speed_limit.download"),icon:"mdi-download",action:ue},{text:e("dashboard.right_click.speed_limit.upload"),icon:"mdi-upload",action:ce},{text:e("dashboard.right_click.speed_limit.share"),icon:"mdi-account-group",action:fe}]},{text:e("dashboard.right_click.copy.title"),icon:"mdi-content-copy",hidden:r.value,children:[{text:e("dashboard.right_click.copy.name"),icon:"mdi-alphabetical-variant",action:async()=>g.value&&await oe(g.value.name)},{text:e("dashboard.right_click.copy.hash"),icon:"mdi-pound",action:async()=>await oe(C.value)},{text:e("dashboard.right_click.copy.magnet"),icon:"mdi-magnet",action:async()=>g.value&&await oe(g.value.magnet)}]},{text:e("dashboard.right_click.export",t.selectedTorrents.length),icon:r.value?"mdi-download-multiple":"mdi-download",action:$},{text:e("dashboard.right_click.info"),icon:"mdi-information",hidden:r.value,action:()=>d.push({name:"torrentDetail",params:{hash:C.value}})}]);return(_,H)=>(s(),p("div",{style:ze(`position: absolute; left: ${_.rightClickProperties.offset[0]}px; top: ${_.rightClickProperties.offset[1]}px;`)},[a(c(At),{modelValue:_.rightClickProperties.isVisible,"onUpdate:modelValue":H[0]||(H[0]=F=>_.rightClickProperties.isVisible=F),"menu-data":L.value},{top:m(()=>[a(me,null,{default:m(()=>[b("div",Ut,[a(j,{location:"top"},{activator:m(({props:F})=>[a(O,K({density:"compact",variant:"plain",icon:"mdi-play"},F,{onClick:T}),null,16)]),default:m(()=>[b("span",null,v(_.$t("dashboard.right_click.top.resume")),1)]),_:1}),a(j,{location:"top"},{activator:m(({props:F})=>[a(O,K({density:"compact",variant:"plain",icon:"mdi-fast-forward"},F,{onClick:V}),null,16)]),default:m(()=>[b("span",null,v(_.$t("dashboard.right_click.top.force_resume")),1)]),_:1}),a(j,{location:"top"},{activator:m(({props:F})=>[a(O,K({density:"compact",variant:"plain",icon:"mdi-pause"},F,{onClick:w}),null,16)]),default:m(()=>[b("span",null,v(_.$t("dashboard.right_click.top.pause")),1)]),_:1}),a(j,{location:"top"},{activator:m(({props:F})=>[a(O,K({color:"red",density:"compact",variant:"plain",icon:"mdi-delete-forever"},F,{onClick:k}),null,16)]),default:m(()=>[b("span",null,v(_.$t("dashboard.right_click.top.delete")),1)]),_:1})])]),_:1})]),_:1},8,["modelValue","menu-data"])],4))}});Ft={class:"d-flex flex-column"};Gt={key:0,class:"text-caption text-grey"};Ht={key:0,class:"text-caption text-grey"};lt=S({__name:"ItemAmount",props:{torrent:{},titleKey:{},value:{type:Function},total:{type:Function}},setup(f){return(e,d)=>(s(),p("div",Ft,[e.titleKey?(s(),p("div",Gt,v(e.$t(e.titleKey)),1)):D("",!0),b("div",null,[B(v(e.value(e.torrent))+" ",1),e.total?(s(),p("span",Ht," / "+v(e.total(e.torrent)),1)):D("",!0)])]))}});zt={key:0,class:"d-flex flex-column"};qt={key:0,class:"text-caption text-grey"};Xt={class:"d-flex flex-row flex-gap"};nt=S({__name:"ItemChip",props:{torrent:{},titleKey:{},value:{},emptyValueKey:{},color:{},enableHashColor:{type:Boolean,default:!1}},setup(f){const e=f,{hideChipIfUnset:d,enableHashColors:t}=N(U()),o=y(()=>e.value(e.torrent)),u=y(()=>o.value.length<1||o.value[0]===""),l=y(()=>!(d.value&&u.value)),n=y(()=>t.value&&e.enableHashColor);return(r,i)=>l.value?(s(),p("div",zt,[r.titleKey?(s(),p("div",qt,v(r.$t(r.titleKey)),1)):D("",!0),b("div",Xt,[u.value?(s(),A(ge,{key:0,color:r.color(r.torrent),variant:"flat",size:"small"},{default:m(()=>[B(v(r.$t(r.emptyValueKey)),1)]),_:1},8,["color"])):(s(!0),p(R,{key:1},X(o.value,C=>(s(),A(ge,{color:n.value?c(Qe)(C):r.color(r.torrent),variant:"flat",size:"small"},{default:m(()=>[B(v(C),1)]),_:2},1032,["color"]))),256))])])):D("",!0)}});Yt={class:"d-flex flex-column"};jt={key:0,class:"text-caption text-grey"};Wt={class:"text-caption text-grey"};rt=S({__name:"ItemData",props:{torrent:{},titleKey:{},value:{type:Function}},setup(f){const e=f,{useBinarySize:d}=N(U()),t=y(()=>e.value(e.torrent));return(o,u)=>(s(),p("div",Yt,[o.titleKey?(s(),p("div",jt,v(o.$t(o.titleKey)),1)):D("",!0),b("div",null,[B(v(c(kt)(t.value,c(d)))+" ",1),b("span",Wt,v(c($t)(t.value,c(d))),1)])]))}});Zt={class:"d-flex flex-column"};Qt={key:0,class:"text-caption text-grey"};Jt={key:0};eo={key:1};st=S({__name:"ItemDateTime",props:{torrent:{},titleKey:{},value:{type:Function}},setup(f){const e=f,{dateFormat:d}=N(U()),t=y(()=>e.value(e.torrent));return(o,u)=>(s(),p("div",Zt,[o.titleKey?(s(),p("div",Qt,v(o.$t(o.titleKey)),1)):D("",!0),b("div",null,[t.value>0?(s(),p("span",Jt,v(c(Je)(t.value,c(d))),1)):(s(),p("span",eo,v(o.$t("dashboard.not_complete")),1))])]))}});to={class:"d-flex flex-column"};oo={key:0,class:"text-caption text-grey"};ao={key:0};lo={key:1};it=S({__name:"ItemDuration",props:{torrent:{},titleKey:{},unit:{},value:{type:Function}},setup(f){const e=f,d=y(()=>e.value(e.torrent)),t=y(()=>{const o=Ve.duration(d.value,e.unit),u=[o.years(),o.months(),o.days(),o.hours(),o.minutes(),o.seconds()],l=["Y","M","d","h","m","s"];let n=!1;return u.map((r,i)=>{if(n||r)return n=!0,`${r}${l[i]}`}).filter(r=>r).join(" ")});return(o,u)=>(s(),p("div",to,[o.titleKey?(s(),p("div",oo,v(o.$t(o.titleKey)),1)):D("",!0),b("div",null,[d.value>0?(s(),p("span",ao,v(t.value),1)):(s(),p("span",lo,v(o.$t("common.NA")),1))])]))}});no={class:"d-flex flex-column"};ro={key:0,class:"text-caption text-grey"};dt=S({__name:"ItemPercent",props:{torrent:{},titleKey:{},value:{type:Function},color:{type:Function}},setup(f){const e=f,d=y(()=>e.value(e.torrent));return(t,o)=>(s(),p("div",no,[t.titleKey?(s(),p("div",ro,v(t.$t(t.titleKey)),1)):D("",!0),a(tt,{"model-value":d.value,max:1,height:20,color:t.color(t.torrent),rounded:"sm",style:{width:"10em"}},{default:m(()=>[B(v(c(et)(d.value)),1)]),_:1},8,["model-value","color"])]))}});so={class:"d-flex flex-column"};io={key:0,class:"text-caption text-grey"};ut=S({__name:"ItemRelativeTime",props:{torrent:{},titleKey:{},value:{type:Function}},setup(f){return(e,d)=>(s(),p("div",so,[e.titleKey?(s(),p("div",io,v(e.$t(e.titleKey)),1)):D("",!0),b("div",null,[b("span",null,v(c(Ve)(e.value(e.torrent)*1e3).fromNow()),1)])]))}});uo={class:"d-flex flex-column"};co={key:0,class:"text-caption text-grey"};mo={class:"text-caption text-grey"};ct=S({__name:"ItemSpeed",props:{torrent:{},titleKey:{},value:{type:Function}},setup(f){const e=f,{useBitSpeed:d}=N(U()),t=y(()=>e.value(e.torrent));return(o,u)=>(s(),p("div",uo,[o.titleKey?(s(),p("div",co,v(o.$t(o.titleKey)),1)):D("",!0),b("div",null,[B(v(c(Ct)(t.value,c(d)))+" ",1),b("span",mo,v(c(St)(t.value,c(d))),1)])]))}});po={class:"d-flex flex-column"};vo={key:0,class:"text-caption text-grey"};mt=S({__name:"ItemText",props:{torrent:{},titleKey:{},value:{type:Function},color:{type:Function}},setup(f){const e=f,d=y(()=>e.value(e.torrent));return(t,o)=>(s(),p("div",po,[t.titleKey?(s(),p("div",vo,v(t.$t(t.titleKey)),1)):D("",!0),b("div",{class:W(t.color?t.color(d.value):"")},v(d.value),3)]))}});ho={class:"d-flex flex-gap flex-wrap"};fo=S({__name:"GridTorrent",props:{torrent:{}},emits:["onTorrentClick"],setup(f){const e=f,d=Z(),t=U(),o=y(()=>(e.torrent.progress===1?t.doneGridProperties:t.busyGridProperties).filter(r=>r.active).sort((r,i)=>r.order-i.order)),u=n=>{switch(n){case E.AMOUNT:return lt;case E.CHIP:return nt;case E.DATA:return rt;case E.DATETIME:return st;case E.DURATION:return it;case E.PERCENT:return dt;case E.RELATIVE:return ut;case E.SPEED:return ct;case E.TEXT:default:return mt}},l=y(()=>d.isTorrentInSelection(e.torrent.hash));return(n,r)=>(s(),A(re,{class:W(`sideborder ${n.torrent.state} cursor-pointer`),height:"100%",color:l.value?`torrent-${n.torrent.state}-darken-3`:void 0,onClick:r[0]||(r[0]=i=>n.$emit("onTorrentClick",i,n.torrent))},{default:m(()=>[a(xe,{class:"text-wrap text-subtitle-1 pt-1 pb-0"},{default:m(()=>[B(v(n.torrent.name),1)]),_:1}),a(ve,null,{default:m(()=>[b("div",ho,[(s(!0),p(R,null,X(o.value,i=>(s(),p(R,null,[i.props?(s(),A(Ae(u(i.type)),K({key:0,torrent:n.torrent,ref_for:!0},i.props),null,16,["torrent"])):D("",!0)],64))),256))])]),_:1})]),_:1},8,["class","color"]))}});_o={class:"d-flex align-center",style:{height:"100%",width:"100%"}};yo=S({__name:"GridView",props:{paginatedTorrents:{}},emits:["onCheckboxClick","onTorrentClick","onTorrentDblClick","onTorrentRightClick","startPress","endPress"],setup(f){const e=at(),d=Z();return(t,o)=>(s(),A(Ne,{id:"torrentList"},{default:m(()=>[(s(!0),p(R,null,X(t.paginatedTorrents,u=>(s(),A(_e,{cols:"12",lg:"3",md:"4",sm:"6",xl:"2",class:W([c(e).mobile?"pb-2":"pb-4","pt-0"]),onContextmenu:l=>t.$emit("onTorrentRightClick",l,u),onTouchcancel:o[1]||(o[1]=l=>t.$emit("endPress")),onTouchend:o[2]||(o[2]=l=>t.$emit("endPress")),onTouchmove:o[3]||(o[3]=l=>t.$emit("endPress")),onTouchstart:l=>t.$emit("startPress",l.touches.item(0),u),onDblclick:l=>t.$emit("onTorrentDblClick",u)},{default:m(()=>[b("div",_o,[a(ot,null,{default:m(()=>[$e(a(O,{color:`torrent-${u.state}`,icon:c(d).isTorrentInSelection(u.hash)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"mr-2",variant:"text",onClick:l=>t.$emit("onCheckboxClick",u)},null,8,["color","icon","onClick"]),[[Be,c(d).isSelectionMultiple]])]),_:2},1024),a(fo,{torrent:u,onOnTorrentClick:o[0]||(o[0]=(l,n)=>t.$emit("onTorrentClick",l,n))},null,8,["torrent"])])]),_:2},1032,["class","onContextmenu","onTouchstart","onDblclick"]))),256))]),_:1}))}});bo=Ue(yo,[["__scopeId","data-v-8292d1aa"]]);go={class:"d-flex flex-gap flex-wrap"};To=S({__name:"ListTorrent",props:{torrent:{}},emits:["onTorrentClick"],setup(f){const e=f,d=Z(),t=U(),o=y(()=>(e.torrent.progress===1?t.doneTorrentProperties:t.busyTorrentProperties).filter(r=>r.active).sort((r,i)=>r.order-i.order)),u=n=>{switch(n){case E.AMOUNT:return lt;case E.CHIP:return nt;case E.DATA:return rt;case E.DATETIME:return st;case E.DURATION:return it;case E.PERCENT:return dt;case E.RELATIVE:return ut;case E.SPEED:return ct;case E.TEXT:default:return mt}},l=y(()=>d.isTorrentInSelection(e.torrent.hash));return(n,r)=>(s(),A(re,{class:W(`sideborder ${n.torrent.state} cursor-pointer`),width:"100%",color:l.value?`torrent-${n.torrent.state}-darken-3`:void 0,onClick:r[0]||(r[0]=i=>n.$emit("onTorrentClick",i,n.torrent))},{default:m(()=>[a(xe,{class:"text-wrap pt-1 pb-0 px-2 text-truncate",style:{"font-size":"0.97em"}},{default:m(()=>[B(v(n.torrent.name),1)]),_:1}),a(ve,{class:"pa-2 pt-0"},{default:m(()=>[b("div",go,[(s(!0),p(R,null,X(o.value,i=>(s(),p(R,null,[i.props?(s(),A(Ae(u(i.type)),K({key:0,torrent:n.torrent,ref_for:!0},i.props),null,16,["torrent"])):D("",!0)],64))),256))])]),_:1})]),_:1},8,["class","color"]))}});ko={class:"d-flex align-center"};$o=S({__name:"ListView",props:{paginatedTorrents:{}},emits:["onCheckboxClick","onTorrentClick","onTorrentDblClick","onTorrentRightClick","startPress","endPress"],setup(f){const e=at(),d=Z();return(t,o)=>(s(),A(je,{id:"torrentList",class:"pa-0"},{default:m(()=>[(s(!0),p(R,null,X(t.paginatedTorrents,u=>(s(),A(me,{id:`torrent-${u.hash}`,class:W([c(e).mobile?"mb-2":"mb-4","pa-0"]),onContextmenu:l=>t.$emit("onTorrentRightClick",l,u),onTouchcancel:o[1]||(o[1]=l=>t.$emit("endPress")),onTouchend:o[2]||(o[2]=l=>t.$emit("endPress")),onTouchmove:o[3]||(o[3]=l=>t.$emit("endPress")),onTouchstart:l=>t.$emit("startPress",l.touches.item(0),u),onDblclick:l=>t.$emit("onTorrentDblClick",u)},{default:m(()=>[b("div",ko,[a(ot,null,{default:m(()=>[$e(a(O,{color:`torrent-${u.state}`,icon:c(d).isTorrentInSelection(u.hash)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"mr-2",variant:"text",onClick:l=>t.$emit("onCheckboxClick",u)},null,8,["color","icon","onClick"]),[[Be,c(d).isSelectionMultiple]])]),_:2},1024),a(To,{torrent:u,onOnTorrentClick:o[0]||(o[0]=(l,n)=>t.$emit("onTorrentClick",l,n))},null,8,["torrent"])])]),_:2},1032,["id","class","onContextmenu","onTouchstart","onDblclick"]))),256))]),_:1}))}});Co=Ue($o,[["__scopeId","data-v-2b24c5da"]]);So={key:0};Vo=S({__name:"ItemAmount",props:{torrent:{},value:{type:Function},total:{type:Function}},setup(f){return(e,d)=>(s(),p("td",null,[B(v(e.value(e.torrent))+" ",1),e.total?(s(),p("span",So," / "+v(e.total(e.torrent)),1)):D("",!0)]))}});wo={key:0,class:"d-flex flex-row flex-gap"};Io=S({__name:"ItemChip",props:{torrent:{},value:{},emptyValueKey:{},color:{},enableHashColor:{type:Boolean,default:!1}},setup(f){const e=f,{hideChipIfUnset:d,enableHashColors:t}=N(U()),o=y(()=>e.value(e.torrent)),u=y(()=>o.value.length<1||o.value[0]===""),l=y(()=>!(d.value&&u.value)),n=y(()=>t.value&&e.enableHashColor);return(r,i)=>(s(),p("td",null,[l.value?(s(),p("div",wo,[u.value?(s(),A(ge,{key:0,color:r.color(r.torrent),variant:"flat",size:"small"},{default:m(()=>[B(v(r.$t(r.emptyValueKey)),1)]),_:1},8,["color"])):(s(!0),p(R,{key:1},X(o.value,C=>(s(),A(ge,{color:n.value?c(Qe)(C):r.color(r.torrent),variant:"flat",size:"small"},{default:m(()=>[B(v(C),1)]),_:2},1032,["color"]))),256))])):D("",!0)]))}});Eo=S({__name:"ItemData",props:{torrent:{},value:{type:Function}},setup(f){const{useBinarySize:e}=N(U());return(d,t)=>(s(),p("td",null,v(c(Vt)(d.value(d.torrent),c(e))),1))}});Do={key:0};Po={key:1};Ao=S({__name:"ItemDateTime",props:{torrent:{},value:{type:Function}},setup(f){const e=f,{dateFormat:d}=N(U()),t=y(()=>e.value(e.torrent));return(o,u)=>t.value>0?(s(),p("td",Do,v(c(Je)(t.value,c(d))),1)):(s(),p("td",Po,v(o.$t("dashboard.not_complete")),1))}});Bo={key:0};Lo={key:1};xo=S({__name:"ItemDuration",props:{torrent:{},unit:{},value:{type:Function}},setup(f){const e=f,d=y(()=>e.value(e.torrent)),t=y(()=>{const o=Ve.duration(d.value,e.unit),u=[o.years(),o.months(),o.days(),o.hours(),o.minutes(),o.seconds()],l=["Y","M","d","h","m","s"];let n=!1;return u.map((r,i)=>{if(n||r)return n=!0,`${r}${l[i]}`}).filter(r=>r).join(" ")});return(o,u)=>d.value>0?(s(),p("td",Bo,v(t.value),1)):(s(),p("td",Lo,v(o.$t("common.NA")),1))}});Oo=S({__name:"ItemPercent",props:{torrent:{},value:{type:Function},color:{type:Function}},setup(f){const e=f,d=y(()=>e.value(e.torrent));return(t,o)=>(s(),p("td",null,[a(tt,{"model-value":d.value,max:1,height:20,color:t.color(t.torrent),rounded:"sm",style:{width:"10em"}},{default:m(()=>[B(v(c(et)(d.value)),1)]),_:1},8,["model-value","color"])]))}});Mo=S({__name:"ItemRelativeTime",props:{torrent:{},value:{type:Function}},setup(f){return(e,d)=>(s(),p("td",null,v(c(Ve)(e.value(e.torrent)*1e3).fromNow()),1))}});Ro=S({__name:"ItemSpeed",props:{torrent:{},value:{type:Function}},setup(f){const{useBitSpeed:e}=N(U());return(d,t)=>(s(),p("td",null,v(c(wt)(d.value(d.torrent),c(e))),1))}});No=S({__name:"ItemText",props:{torrent:{},value:{type:Function},color:{type:Function}},setup(f){const e=f,d=y(()=>e.value(e.torrent));return(t,o)=>(s(),p("td",{class:W(t.color?t.color(d.value):"")},v(d.value),3))}});Uo=S({__name:"TableTorrent",props:{torrent:{}},setup(f){const e=U(),d=y(()=>e.tableProperties.filter(o=>o.active).sort((o,u)=>o.order-u.order)),t=o=>{switch(o){case E.AMOUNT:return Vo;case E.CHIP:return Io;case E.DATA:return Eo;case E.DATETIME:return Ao;case E.DURATION:return xo;case E.PERCENT:return Oo;case E.RELATIVE:return Mo;case E.SPEED:return Ro;case E.TEXT:default:return No}};return(o,u)=>(s(!0),p(R,null,X(d.value,l=>(s(),p(R,null,[l.props?(s(),A(Ae(t(l.type)),K({key:0,torrent:o.torrent,ref_for:!0},l.props),null,16,["torrent"])):D("",!0)],64))),256))}});Ko=f=>(pt("data-v-13e3f0fc"),f=f(),vt(),f);Fo=Ko(()=>b("th",{class:"px-1"},null,-1));Go={key:0};Ho={class:"text-left"};zo={class:"text-left"};qo=["onContextmenu","onTouchstart","onClick","onDblclick"];Xo={key:0};Yo=S({__name:"TableView",props:{paginatedTorrents:{}},emits:["onCheckboxClick","onTorrentClick","onTorrentDblClick","onTorrentRightClick","startPress","endPress"],setup(f){const e=Z(),d=U(),t=y(()=>d.tableProperties.filter(l=>l.active).sort((l,n)=>l.order-n.order));function o(l){return e.isTorrentInSelection(l.hash)}const u=l=>["cursor-pointer",o(l)?`bg-torrent-${l.state}-darken-3 selected`:""];return(l,n)=>(s(),A(It,{id:"torrentList",class:"pa-0",density:"compact"},{default:m(()=>[b("thead",null,[b("tr",null,[Fo,c(e).isSelectionMultiple?(s(),p("th",Go)):D("",!0),b("th",Ho,v(l.$t("torrent.properties.name")),1),(s(!0),p(R,null,X(t.value,r=>(s(),p("th",zo,v(l.$t(r.props.titleKey)),1))),256))])]),b("tbody",null,[(s(!0),p(R,null,X(l.paginatedTorrents,r=>$e((s(),p("tr",{class:W(u(r)),onContextmenu:i=>l.$emit("onTorrentRightClick",i,r),onTouchcancel:n[0]||(n[0]=i=>l.$emit("endPress")),onTouchend:n[1]||(n[1]=i=>l.$emit("endPress")),onTouchmove:n[2]||(n[2]=i=>l.$emit("endPress")),onTouchstart:i=>l.$emit("startPress",i.touches.item(0),r),onClick:i=>l.$emit("onTorrentClick",i,r),onDblclick:i=>l.$emit("onTorrentDblClick",r)},[b("td",{class:W(`pa-0 bg-torrent-${r.state}`)},null,2),c(e).isSelectionMultiple?(s(),p("td",Xo,[a(ye,{"model-value":o(r),color:`torrent-${r.state}`,variant:"text",onClick:Q(i=>l.$emit("onCheckboxClick",r),["stop"])},null,8,["model-value","color","onClick"])])):D("",!0),b("td",null,v(r.name),1),a(Uo,{torrent:r},null,8,["torrent"])],42,qo)),[[Et]])),256))])]),_:1}))}});jo=Ue(Yo,[["__scopeId","data-v-13e3f0fc"]]);Wo={class:"pt-4 px-1 px-sm-5"};Zo={class:"text-grey"};Qo={key:0,class:"mt-5 text-xs-center"};Jo={class:"text-grey"};ea={key:1};ta={key:5};ia=S({__name:"Dashboard",setup(f){const{t:e}=Te(),d=Ye(),t=Z(),{currentPage:o,isSelectionMultiple:u,selectedTorrents:l,displayMode:n}=N(t),r=We(),i=Se(),C=ne(),{filteredTorrents:g}=N(C),x=U(),P=y(()=>n.value===q.LIST),T=y(()=>n.value===q.GRID),V=y(()=>n.value===q.TABLE),{paginatedResults:w,currentPage:k,pageCount:I}=Bt(g,x.paginationSize,o),G=y(()=>g.value.length<=l.value.length),Y=qe({isVisible:!1,offset:[0,0]});function se(){window.scrollTo({top:0,behavior:"smooth"})}function he($){if($)return Ie(()=>{document.getElementById("searchInput")?.focus()});Ie(()=>{document.getElementById("searchInput")?.blur()})}function we(){G.value?t.unselectAllTorrents():t.selectTorrents(...g.value.map($=>$.hash))}function ie($){u.value||d.push({name:"torrentDetail",params:{hash:$.hash}})}function de($){t.toggleSelect($.hash)}function ee($,L){$.shiftKey?t.spanTorrentSelection(L.hash):(Pe($)||t.isSelectionMultiple)&&(t.isSelectionMultiple=!0,t.toggleSelect(L.hash))}async function te($,L){Y.isVisible&&(Y.isVisible=!1,await Ie()),Y.isVisible=!0,Y.offset=[$.pageX,$.pageY],u.value?l.value.length===0&&t.selectTorrent(L.hash):(t.unselectAllTorrents(),t.selectTorrent(L.hash))}const oe=M();function ue($,L){oe.value=setTimeout(()=>{te($,L)},500)}function ce(){clearTimeout(oe.value)}function fe($){if(r.hasActiveDialog)return!1;const L=$.target;if(Pe($)&&$.key==="a"&&L.tagName!=="INPUT")return t.unselectAllTorrents(),t.selectTorrents(...g.value.map(_=>_.hash)),$.preventDefault(),!0;if(Pe($)&&$.key==="f"){const _=document.getElementById("searchInput");if(document.activeElement!==_)return he(!0),$.preventDefault(),!0}if($.key==="Escape"){const _=document.getElementById("searchInput");return document.activeElement===_?he(!1):(u.value=!1,t.unselectAllTorrents()),$.preventDefault(),!0}if($.key==="Delete")return l.value.length===0?void 0:(r.createDialog(Ze,{hashes:l.value}),$.preventDefault(),!0);if($.key==="/"){const _=document.getElementById("searchInput");return document.activeElement!==_&&(d.push({name:"searchEngine"}),$.preventDefault()),!0}}return ht(()=>Y.isVisible,$=>{!$&&!u.value&&t.unselectAllTorrents()}),ke(async()=>{await i.fetchCategories(),await i.fetchTags()}),Xe(()=>{document.addEventListener("keydown",fe),u.value=!1,se()}),ft(()=>{document.removeEventListener("keydown",fe)}),($,L)=>(s(),p(R,null,[b("div",Wo,[a(Mt),a(Ne,{class:"ma-0 pa-0"},{default:m(()=>[a(Dt,null,{default:m(()=>[$e(a(re,{color:"transparent"},{default:m(()=>[a(j,{text:c(e)("common.selectAll"),location:"bottom"},{activator:m(({props:_})=>[a(O,K({icon:G.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"text-grey",color:"transparent",style:{left:"-8px"}},_,{onClick:we}),null,16,["icon"])]),_:1},8,["text"]),b("span",Zo,v(c(e)("dashboard.selectAll")),1)]),_:1},512),[[Be,c(u)]])]),_:1})]),_:1}),c(g).length===0?(s(),p("div",Qo,[b("p",Jo,v(c(e)("common.emptyList")),1)])):D("",!0),c(x).isPaginationOnTop&&!c(x).isInfiniteScrollActive&&c(I)>1?(s(),p("div",ea,[a(Fe,{modelValue:c(k),"onUpdate:modelValue":L[0]||(L[0]=_=>pe(k)?k.value=_:null),length:c(I),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left",onInput:se},null,8,["modelValue","length"])])):D("",!0),P.value?(s(),A(Co,{key:2,"paginated-torrents":c(w),onOnTorrentClick:ee,onOnTorrentDblClick:ie,onOnCheckboxClick:de,onOnTorrentRightClick:te,onStartPress:ue,onEndPress:ce},null,8,["paginated-torrents"])):T.value?(s(),A(bo,{key:3,class:"mb-2","paginated-torrents":c(w),onOnTorrentClick:ee,onOnTorrentDblClick:ie,onOnCheckboxClick:de,onOnTorrentRightClick:te,onStartPress:ue,onEndPress:ce},null,8,["paginated-torrents"])):V.value?(s(),A(jo,{key:4,"paginated-torrents":c(w),onOnTorrentClick:ee,onOnTorrentDblClick:ie,onOnCheckboxClick:de,onOnTorrentRightClick:te,onStartPress:ue,onEndPress:ce},null,8,["paginated-torrents"])):D("",!0),!c(x).isPaginationOnTop&&!c(x).isInfiniteScrollActive&&c(I)>1?(s(),p("div",ta,[a(Fe,{modelValue:c(k),"onUpdate:modelValue":L[1]||(L[1]=_=>pe(k)?k.value=_:null),length:c(I),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left",onInput:se},null,8,["modelValue","length"])])):D("",!0)]),a(Kt,{"right-click-properties":Y},null,8,["right-click-properties"])],64))}})});export{ia as default,__tla};