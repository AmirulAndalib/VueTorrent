import{j as w,E as Te,$ as F,c as _,H as l,Q as m,U as k,n,u as i,J as c,W as $e,L as v,F as M,q as O,I,N as x,f as R,r as je,G as Ce,Y as qe,K,M as J,O as ge,P as pe,S as Xe,Z as Oe,V as q,_ as ne,a5 as Ee,a6 as Ye,a7 as vt,a8 as ht,w as ft,v as bt,x as De,a9 as _t}from"./vue-OMqPjEdo.js";import{aN as Q,aO as yt,$ as se,aP as gt,e as W,Q as Y,Y as kt,aQ as Tt,g as we,h as L,aR as j,k as Ie,q as Qe,s as me,a as Le,V as Ae,c as ve,d as Ke,f as Re,i as re,j as Me,Z as Ve,aS as $t,aT as Pe,p as Fe,r as _e,v as ye,E as Ze,ab as Ct,aU as Je,m as U,aV as wt,aW as Vt,aX as We,C as Se,aY as et,aZ as tt,a_ as St,a$ as xt,b0 as ee,b1 as D,b2 as at,ae as Ue,X as Dt,b3 as It,aJ as Pt,b4 as Ne,b5 as Bt,x as ze,b6 as Be,b7 as Et,__tla as __tla_0}from"./index-BzETmHWY.js";import{d as Lt}from"./index-C32jK2l0.js";import{_ as He,a as At,b as ke,__tla as __tla_1}from"./ColoredChip.vue_vue_type_script_setup_true_lang-C8cjai-i.js";import{a as ot,u as lt}from"./vuetify-CUzCaHBa.js";import{u as Kt,__tla as __tla_2}from"./ArrayPagination-BeUQ7sif.js";let ho;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})(),(()=>{try{return __tla_1}catch{}})(),(()=>{try{return __tla_2}catch{}})()]).then(async()=>{let Rt,Mt,Ft,Ut,Ot,le,G,Nt,Ge,zt,Ht,Gt,jt,qt,nt,Xt,Yt,Qt,st,Zt,Jt,Wt,rt,ea,ta,aa,oa,it,la,na,sa,ra,dt,ia,da,ut,ua,ca,ct,ma,pa,va,mt,ha,fa,pt,ba,_a,ya,ga,ka,Ta,$a,Ca,wa,Va,Sa,xa,Da,Ia,Pa,Ba,Ea,La,Aa,Ka,Ra,Ma,Fa,Ua,Oa,Na,za,Ha,Ga,ja,qa,Xa,Ya,Qa,Za,Ja,Wa,eo,to,ao,oo,lo,no,so,ro;Rt={class:"d-flex my-3"};Mt={class:"pa-0"};Ft={class:"d-flex align-center text-uppercase text-select",style:{"font-size":"0.8em"}};Ut=w({__name:"Toolbar",setup(h){const{t:e}=Te(),r=Q(),{torrentCountString:t,isSelectionMultiple:a,displayMode:d}=F(r),{isDrawerOpen:o}=F(yt()),u=se(),{sortCriterias:p}=F(u),s=[{value:"added_on",title:e("dashboard.sortBy.added_on")},{value:"amount_left",title:e("dashboard.sortBy.amount_left")},{value:"availability",title:e("dashboard.sortBy.availability")},{value:"available_peers",title:e("dashboard.sortBy.available_peers")},{value:"available_seeds",title:e("dashboard.sortBy.available_seeds")},{value:"avgDownloadSpeed",title:e("dashboard.sortBy.avg_download_speed")},{value:"avgUploadSpeed",title:e("dashboard.sortBy.avg_upload_speed")},{value:"basename_content_path",title:e("dashboard.sortBy.basename_content_path")},{value:"basename_download_path",title:e("dashboard.sortBy.basename_download_path")},{value:"basename_save_path",title:e("dashboard.sortBy.basename_save_path")},{value:"category",title:e("dashboard.sortBy.category")},{value:"completed_on",title:e("dashboard.sortBy.completion_on")},{value:"content_path",title:e("dashboard.sortBy.content_path")},{value:"dl_limit",title:e("dashboard.sortBy.dl_limit")},{value:"dlspeed",title:e("dashboard.sortBy.dlspeed")},{value:"download_path",title:e("dashboard.sortBy.download_path")},{value:"downloaded",title:e("dashboard.sortBy.downloaded")},{value:"downloaded_session",title:e("dashboard.sortBy.downloaded_session")},{value:"eta",title:e("dashboard.sortBy.eta")},{value:"globalSpeed",title:e("dashboard.sortBy.globalSpeed")},{value:"globalVolume",title:e("dashboard.sortBy.globalVolume")},{value:"hash",title:e("dashboard.sortBy.hash")},{value:"inactive_seeding_time_limit",title:e("dashboard.sortBy.inactive_seeding_time_limit")},{value:"infohash_v1",title:e("dashboard.sortBy.infohash_v1")},{value:"infohash_v2",title:e("dashboard.sortBy.infohash_v2")},{value:"last_activity",title:e("dashboard.sortBy.last_activity")},{value:"name",title:e("dashboard.sortBy.name")},{value:"num_leechs",title:e("dashboard.sortBy.num_leechs")},{value:"num_seeds",title:e("dashboard.sortBy.num_seeds")},{value:"priority",title:e("dashboard.sortBy.priority")},{value:"progress",title:e("dashboard.sortBy.progress")},{value:"ratio",title:e("dashboard.sortBy.ratio")},{value:"ratio_limit",title:e("dashboard.sortBy.ratio_limit")},{value:"savePath",title:e("dashboard.sortBy.save_path")},{value:"seeding_time",title:e("dashboard.sortBy.seeding_time")},{value:"seeding_time_limit",title:e("dashboard.sortBy.seeding_time_limit")},{value:"seen_complete",title:e("dashboard.sortBy.seen_complete")},{value:"size",title:e("dashboard.sortBy.size")},{value:"state",title:e("dashboard.sortBy.state")},{value:"tags",title:e("dashboard.sortBy.tags")},{value:"time_active",title:e("dashboard.sortBy.time_active")},{value:"total_size",title:e("dashboard.sortBy.total_size")},{value:"trackerDomain",title:e("dashboard.sortBy.tracker")},{value:"trackers_count",title:e("dashboard.sortBy.trackers_count")},{value:"up_limit",title:e("dashboard.sortBy.up_limit")},{value:"uploaded",title:e("dashboard.sortBy.uploaded")},{value:"uploaded_session",title:e("dashboard.sortBy.uploaded_session")},{value:"upspeed",title:e("dashboard.sortBy.upspeed")}].sort((C,$)=>gt.text.asc(C.title,$.title)),b=_({get:()=>p.value[0],set:C=>{p.value=[{value:C.value,reverse:C.reverse}]}});function f(){u.textFilter=""}const P=_({get:()=>u.textFilter,set:Lt(C=>{u.textFilter=C??""},300)});function A(){a.value&&r.unselectAllTorrents(),a.value=!a.value}return(C,$)=>(l(),m(M,null,[k("div",null,[n(W,{id:"searchInput",modelValue:P.value,"onUpdate:modelValue":$[0]||($[0]=y=>P.value=y),label:i(e)("dashboard.searchInputLabel"),clearable:"",density:"compact","single-line":"","hide-details":"","prepend-inner-icon":"mdi-magnify",variant:"solo","onClick:clear":$[1]||($[1]=y=>f())},null,8,["modelValue","label"])]),k("div",Rt,[n(Y,{text:i(e)("dashboard.toggleSelectMode"),location:"top"},{activator:c(({props:y})=>[n(L,O({icon:i(a)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"},y,{variant:"plain",onClick:A}),null,16,["icon"])]),_:1},8,["text"]),n(kt,null,{activator:c(({props:y})=>[n(Y,{text:C.$t("dashboard.displayMode.title"),location:"top"},{activator:c(({props:g})=>[n(L,O({icon:""},O(y,g),{variant:"plain"}),{default:c(()=>[i(d)===i(j).LIST?(l(),I(Ie,{key:0,icon:"mdi-view-list"})):x("",!0),i(d)===i(j).GRID?(l(),I(Ie,{key:1,icon:"mdi-view-grid"})):x("",!0),i(d)===i(j).TABLE?(l(),I(Ie,{key:2,icon:"mdi-table"})):x("",!0)]),_:2},1040)]),_:2},1032,["text"])]),default:c(()=>[n(Qe,null,{default:c(()=>[n(me,{title:C.$t("dashboard.displayMode.list"),"prepend-icon":"mdi-view-list",onClick:$[2]||($[2]=y=>d.value=i(j).LIST)},null,8,["title"]),n(me,{title:C.$t("dashboard.displayMode.grid"),"prepend-icon":"mdi-view-grid",onClick:$[3]||($[3]=y=>d.value=i(j).GRID)},null,8,["title"]),n(me,{title:C.$t("dashboard.displayMode.table"),"prepend-icon":"mdi-table",onClick:$[4]||($[4]=y=>d.value=i(j).TABLE)},null,8,["title"])]),_:1})]),_:1}),n(Y,{text:i(e)("dashboard.toggleSortOrder"),location:"top"},{activator:c(({props:y})=>[n(L,O({icon:b.value.reverse?"mdi-sort-descending":"mdi-sort-ascending"},y,{variant:"plain",onClick:$[5]||($[5]=g=>b.value.reverse=!b.value.reverse)}),null,16,["icon"])]),_:1},8,["text"]),k("div",Mt,[n(Tt,{modelValue:b.value.value,"onUpdate:modelValue":$[6]||($[6]=y=>b.value.value=y),items:i(s),label:i(e)("dashboard.sortLabel"),"auto-select-first":"",density:"compact","hide-details":"",variant:"solo-filled",style:$e(`width: ${C.$vuetify.display.xs||C.$vuetify.display.sm&&i(o)?140:260}px`)},null,8,["modelValue","items","label","style"])]),n(we),k("div",Ft,v(i(t)),1)])],64))}});Ot=w({__name:"RenameTorrentDialog",props:{guid:{},hash:{}},setup(h){const e=h,{isOpened:r}=Le(e.guid),{t}=Te(),a=se(),d=R(),o=R(),u=R(!1),p=je({newName:""}),s=[C=>!!C||t("dialogs.renameTorrent.required"),C=>C!==f.value||t("dialogs.renameTorrent.sameName")],b=_(()=>a.getTorrentByHash(e.hash)),f=_(()=>b.value?.name);async function P(){await o.value?.validate(),u.value&&(await a.renameTorrent(e.hash,p.newName),A())}const A=()=>{r.value=!1};return Ce(()=>{p.newName=b.value?.name||""}),qe(()=>{d.value?.select()}),(C,$)=>(l(),I(Me,{modelValue:i(r),"onUpdate:modelValue":$[3]||($[3]=y=>pe(r)?r.value=y:null)},{default:c(()=>[n(re,null,{default:c(()=>[n(Ae,null,{default:c(()=>[K(v(C.$t("dialogs.renameTorrent.title")),1)]),_:1}),n(ve,null,{default:c(()=>[n(i(Ke),{modelValue:u.value,"onUpdate:modelValue":$[1]||($[1]=y=>u.value=y),ref_key:"form",ref:o,onSubmit:$[2]||($[2]=J(()=>{},["prevent"]))},{default:c(()=>[f.value?(l(),I(W,{key:0,"model-value":f.value,disabled:"",label:C.$t("dialogs.renameTorrent.oldName")},null,8,["model-value","label"])):x("",!0),n(W,{modelValue:p.newName,"onUpdate:modelValue":$[0]||($[0]=y=>p.newName=y),ref_key:"field",ref:d,rules:s,autofocus:"",label:C.$t("dialogs.renameTorrent.newName"),onKeydown:ge(P,["enter"])},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1}),n(Re,null,{default:c(()=>[n(we),n(L,{color:"error",onClick:A},{default:c(()=>[K(v(C.$t("common.cancel")),1)]),_:1}),n(L,{color:"accent",disabled:!u.value,onClick:P},{default:c(()=>[K(v(C.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});le=-2;G=-1;Nt=w({__name:"ShareLimitDialog",props:{guid:{},hashes:{}},setup(h){const e=h,{isOpened:r}=Le(e.guid),t=Ve(),a=se(),d=R(!1),o=R("global"),u=R(!1),p=R(0),s=R(!1),b=R(0),f=R(!1),P=R(0),A=_(()=>o.value!=="enabled");function C(){r.value=!1}async function $(){switch(o.value){case"global":await t.setShareLimit(e.hashes,le,le,le);break;case"disabled":await t.setShareLimit(e.hashes,G,G,G);break;case"enabled":await t.setShareLimit(e.hashes,u.value?p.value:G,s.value?b.value:G,f.value?P.value:G);break}C()}return Ce(async()=>{const y=a.getTorrentByHash(e.hashes[0]);if(!y)return C();const g=y.ratio_limit,V=y.seeding_time_limit,z=y.inactive_seeding_time_limit;g===le&&V===le&&z===le?o.value="global":g===G&&V===G&&z===G?o.value="disabled":(o.value="enabled",u.value=g>=0,p.value=u.value?g:0,s.value=V>=0,b.value=s.value?V:0,f.value=z>=0,P.value=f.value?z:0)}),(y,g)=>(l(),I(Me,{modelValue:i(r),"onUpdate:modelValue":g[9]||(g[9]=V=>pe(r)?r.value=V:null),"max-width":"500"},{default:c(()=>[n(re,{title:y.$t("dialogs.share_limit.title")},{default:c(()=>[n(ve,null,{default:c(()=>[n(Ke,{modelValue:d.value,"onUpdate:modelValue":g[7]||(g[7]=V=>d.value=V),onSubmit:g[8]||(g[8]=J(()=>{},["prevent"])),onKeydown:ge(J($,["prevent"]),["enter"])},{default:c(()=>[n($t,{modelValue:o.value,"onUpdate:modelValue":g[0]||(g[0]=V=>o.value=V)},{default:c(()=>[n(Pe,{label:y.$t("dialogs.share_limit.global"),value:"global"},null,8,["label"]),n(Pe,{label:y.$t("dialogs.share_limit.disabled"),value:"disabled"},null,8,["label"]),n(Pe,{label:y.$t("dialogs.share_limit.enabled"),value:"enabled"},null,8,["label"])]),_:1},8,["modelValue"]),n(Fe,null,{default:c(()=>[n(_e,{cols:"12",class:"d-flex align-center"},{default:c(()=>[k("span",null,[n(ye,{modelValue:u.value,"onUpdate:modelValue":g[1]||(g[1]=V=>u.value=V),disabled:A.value},null,8,["modelValue","disabled"])]),n(W,{modelValue:p.value,"onUpdate:modelValue":g[2]||(g[2]=V=>p.value=V),disabled:A.value||!u.value,density:"compact","hide-details":"",label:y.$t("dialogs.share_limit.ratio_limit")},null,8,["modelValue","disabled","label"])]),_:1}),n(_e,{cols:"12",class:"d-flex align-center"},{default:c(()=>[k("span",null,[n(ye,{modelValue:s.value,"onUpdate:modelValue":g[3]||(g[3]=V=>s.value=V),disabled:A.value},null,8,["modelValue","disabled"])]),n(W,{modelValue:b.value,"onUpdate:modelValue":g[4]||(g[4]=V=>b.value=V),disabled:A.value||!s.value,density:"compact","hide-details":"",label:y.$t("dialogs.share_limit.seeding_time_limit")},null,8,["modelValue","disabled","label"])]),_:1}),n(_e,{cols:"12",class:"d-flex align-center"},{default:c(()=>[k("span",null,[n(ye,{modelValue:f.value,"onUpdate:modelValue":g[5]||(g[5]=V=>f.value=V),disabled:A.value},null,8,["modelValue","disabled"])]),n(W,{modelValue:P.value,"onUpdate:modelValue":g[6]||(g[6]=V=>P.value=V),disabled:A.value||!f.value,density:"compact","hide-details":"",label:y.$t("dialogs.share_limit.inactive_seeding_time_limit")},null,8,["modelValue","disabled","label"])]),_:1})]),_:1})]),_:1},8,["modelValue","onKeydown"])]),_:1}),n(Re,null,{default:c(()=>[n(we),n(L,{color:"error",onClick:C},{default:c(()=>[K(v(y.$t("common.cancel")),1)]),_:1}),n(L,{color:"accent",disabled:!d.value,onClick:$},{default:c(()=>[K(v(y.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]))}});Ge=w({__name:"SpeedLimitDialog",props:{guid:{},hashes:{},mode:{}},setup(h){const e=h,{isOpened:r}=Le(e.guid),t=Ve(),a=se(),d=R(!1),o=R(0);function u(){r.value=!1}async function p(){const s=Math.max(0,o.value)*1e3;switch(e.mode){case"download":await t.setDownloadLimit(s,e.hashes);break;case"upload":await t.setUploadLimit(s,e.hashes);break}u()}return Ce(async()=>{const s=a.getTorrentByHash(e.hashes[0]);if(!s)return u();switch(e.mode){case"download":o.value=Math.max(0,Math.round(s.dl_limit/1e3));break;case"upload":o.value=Math.max(0,Math.round(s.up_limit/1e3));break}}),(s,b)=>(l(),I(Me,{modelValue:i(r),"onUpdate:modelValue":b[3]||(b[3]=f=>pe(r)?r.value=f:null)},{default:c(()=>[n(re,{title:s.$t(`dialogs.speed_limit.${s.mode}`)},{default:c(()=>[n(ve,null,{default:c(()=>[n(Ke,{modelValue:d.value,"onUpdate:modelValue":b[1]||(b[1]=f=>d.value=f),onSubmit:b[2]||(b[2]=J(()=>{},["prevent"])),onKeydown:ge(J(p,["prevent"]),["enter"])},{default:c(()=>[n(W,{modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=f=>o.value=f),modelModifiers:{number:!0},type:"number",autofocus:"",clearable:"",label:s.$t("dialogs.speed_limit.label"),"prepend-inner-icon":"mdi-speedometer",suffix:"kB/s",onKeydown:ge(J(p,["prevent"]),["enter"])},null,8,["modelValue","label","onKeydown"])]),_:1},8,["modelValue","onKeydown"])]),_:1}),n(Re,null,{default:c(()=>[n(we),n(L,{color:"error",onClick:u},{default:c(()=>[K(v(s.$t("common.cancel")),1)]),_:1}),n(L,{color:"accent",disabled:!d.value,onClick:p},{default:c(()=>[K(v(s.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]))}});zt={class:"d-flex justify-space-around"};Ht=w({__name:"RightClick",props:{rightClickProperties:{}},setup(h){const{t:e}=Te(),r=Xe(),t=Q(),a=Ze(),d=Ve(),o=Ct(),u=se(),p=_(()=>t.selectedTorrents.length>1),s=_(()=>t.selectedTorrents),b=_(()=>s.value[0]),f=_(()=>u.getTorrentByHash(b.value)),P=_(()=>t.selectedTorrents.map(u.getTorrentByHash).filter(S=>!!S)),A=_(()=>[{name:""},...d.categories]);async function C(){await u.resumeTorrents(s)}async function $(){await u.forceResumeTorrents(s)}async function y(){await u.pauseTorrents(s)}function g(){a.createDialog(Je,{hashes:[...t.selectedTorrents]})}function V(){a.createDialog(He,{hashes:[...t.selectedTorrents],mode:"dl"})}function z(){a.createDialog(He,{hashes:[...t.selectedTorrents],mode:"save"})}function X(){a.createDialog(Ot,{hash:t.selectedTorrents[0]})}async function ie(){await u.recheckTorrents(s)}async function he(){await d.reannounceTorrents(s)}async function xe(){await d.toggleSeqDl(s)}async function de(){await d.toggleFLPiecePrio(s)}async function ue(){await d.toggleAutoTmm(s,!f.value?.auto_tmm)}function te(S){return P.value.every(H=>H&&H.tags&&H.tags.includes(S))}async function ae(){await u.removeTorrentTags(s.value)}async function fe(S){te(S)?await u.removeTorrentTags(s.value,[S]):await u.addTorrentTags(s.value,[S])}async function Z(S){try{await navigator.clipboard.writeText(S)}catch{Oe.error(e("toast.copy.error"));return}Oe.success(e("toast.copy.success"))}function ce(){a.createDialog(Ge,{hashes:s.value,mode:"download"})}function be(){a.createDialog(Ge,{hashes:s.value,mode:"upload"})}function T(){a.createDialog(Nt,{hashes:s.value})}async function B(){s.value.forEach(S=>{u.exportTorrent(S).then(H=>{const N=window.URL.createObjectURL(H),oe=document.createElement("a");oe.href=N,oe.style.opacity="0",oe.setAttribute("download",`${S}.torrent`),document.body.appendChild(oe),oe.click(),document.body.removeChild(oe)})})}const E=_(()=>[{text:e("dashboard.right_click.advanced.title"),icon:"mdi-head-cog",children:[{text:e("dashboard.right_click.advanced.download_path"),icon:"mdi-tray-arrow-down",action:V},{text:e("dashboard.right_click.advanced.save_path"),icon:"mdi-content-save",action:z},{text:e("dashboard.right_click.advanced.rename"),icon:"mdi-rename-box",hidden:p.value,action:X},{text:e("dashboard.right_click.advanced.recheck"),icon:"mdi-playlist-check",action:ie},{text:e("dashboard.right_click.advanced.reannounce"),icon:"mdi-bullhorn",action:he},{text:e("dashboard.right_click.advanced.seq_dl"),icon:f.value?.seq_dl?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:xe},{text:e("dashboard.right_click.advanced.f_l_prio"),icon:f.value?.f_l_piece_prio?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:de},{text:e("dashboard.right_click.advanced.auto_tmm"),icon:f.value?.auto_tmm?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:ue}]},{text:e("dashboard.right_click.priority.title"),icon:"mdi-priority-high",hidden:!o.preferences?.queueing_enabled,children:[{text:e("dashboard.right_click.priority.top"),icon:"mdi-priority-high",action:async()=>await u.setTorrentPriority(s.value,"topPrio")},{text:e("dashboard.right_click.priority.increase"),icon:"mdi-arrow-up",action:async()=>await u.setTorrentPriority(s.value,"increasePrio")},{text:e("dashboard.right_click.priority.decrease"),icon:"mdi-arrow-down",action:async()=>await u.setTorrentPriority(s.value,"decreasePrio")},{text:e("dashboard.right_click.priority.bottom"),icon:"mdi-priority-low",action:async()=>await u.setTorrentPriority(s.value,"bottomPrio")}]},{text:e("dashboard.right_click.tags.title"),icon:"mdi-tag",disabled:d.tags.length===0,disabledText:e("dashboard.right_click.tags.disabled_title"),disabledIcon:"mdi-tag-off",children:[...f.value?.tags.length?[{text:e("dashboard.right_click.tags.remove_all"),action:ae,icon:"mdi-playlist-remove"}]:[],...d.tags.map(S=>({text:S,icon:te(S)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:async()=>await fe(S)}))]},{text:e("dashboard.right_click.category.title"),icon:"mdi-label",disabled:d.categories.length===0,disabledText:e("dashboard.right_click.category.disabled_title"),disabledIcon:"mdi-label-off",children:A.value.map(S=>({text:S.name===""?e("dashboard.right_click.category.clear"):S.name,action:async()=>await u.setTorrentCategory(s.value,S.name)}))},{text:e("dashboard.right_click.speed_limit.title"),icon:"mdi-speedometer-slow",children:[{text:e("dashboard.right_click.speed_limit.download"),icon:"mdi-download",action:ce},{text:e("dashboard.right_click.speed_limit.upload"),icon:"mdi-upload",action:be},{text:e("dashboard.right_click.speed_limit.share"),icon:"mdi-account-group",action:T}]},{text:e("dashboard.right_click.copy.title"),icon:"mdi-content-copy",hidden:p.value,children:[{text:e("dashboard.right_click.copy.name"),icon:"mdi-alphabetical-variant",action:async()=>f.value&&await Z(f.value.name)},{text:e("dashboard.right_click.copy.hash"),icon:"mdi-pound",action:async()=>await Z(b.value)},{text:e("dashboard.right_click.copy.magnet"),icon:"mdi-magnet",action:async()=>f.value&&await Z(f.value.magnet)}]},{text:e("dashboard.right_click.export",t.selectedTorrents.length),icon:p.value?"mdi-download-multiple":"mdi-download",action:B},{text:e("dashboard.right_click.info"),icon:"mdi-information",hidden:p.value,action:()=>r.push({name:"torrentDetail",params:{hash:b.value}})}]);return(S,H)=>(l(),m("div",{style:$e(`position: absolute; left: ${S.rightClickProperties.offset[0]}px; top: ${S.rightClickProperties.offset[1]}px;`)},[n(i(At),{modelValue:S.rightClickProperties.isVisible,"onUpdate:modelValue":H[0]||(H[0]=N=>S.rightClickProperties.isVisible=N),"menu-data":E.value},{top:c(()=>[n(me,null,{default:c(()=>[k("div",zt,[n(Y,{location:"top"},{activator:c(({props:N})=>[n(L,O({density:"compact",variant:"plain",icon:"mdi-play"},N,{onClick:C}),null,16)]),default:c(()=>[k("span",null,v(S.$t("dashboard.right_click.top.resume")),1)]),_:1}),n(Y,{location:"top"},{activator:c(({props:N})=>[n(L,O({density:"compact",variant:"plain",icon:"mdi-fast-forward"},N,{onClick:$}),null,16)]),default:c(()=>[k("span",null,v(S.$t("dashboard.right_click.top.force_resume")),1)]),_:1}),n(Y,{location:"top"},{activator:c(({props:N})=>[n(L,O({density:"compact",variant:"plain",icon:"mdi-pause"},N,{onClick:y}),null,16)]),default:c(()=>[k("span",null,v(S.$t("dashboard.right_click.top.pause")),1)]),_:1}),n(Y,{location:"top"},{activator:c(({props:N})=>[n(L,O({color:"red",density:"compact",variant:"plain",icon:"mdi-delete-forever"},N,{onClick:g}),null,16)]),default:c(()=>[k("span",null,v(S.$t("dashboard.right_click.top.delete")),1)]),_:1})])]),_:1})]),_:1},8,["modelValue","menu-data"])],4))}});Gt={class:"d-flex flex-column"};jt={key:0,class:"text-caption text-grey"};qt={key:0,class:"text-caption text-grey"};nt=w({__name:"ItemAmount",props:{torrent:{},titleKey:{},value:{type:Function},total:{type:Function}},setup(h){return(e,r)=>(l(),m("div",Gt,[e.titleKey?(l(),m("div",jt,v(e.$t(e.titleKey)),1)):x("",!0),k("div",null,[K(v(e.value(e.torrent))+" ",1),e.total?(l(),m("span",qt," / "+v(e.total(e.torrent)),1)):x("",!0)])]))}});Xt={key:0,class:"d-flex flex-column"};Yt={key:0,class:"text-caption text-grey"};Qt={class:"d-flex flex-row flex-gap-column-small"};st=w({__name:"ItemChip",props:{torrent:{},titleKey:{},value:{},emptyValueKey:{},color:{},enableHashColor:{type:Boolean,default:!1}},setup(h){const e=h,{hideChipIfUnset:r}=F(U()),t=_(()=>e.value(e.torrent)),a=_(()=>t.value.length<1||t.value[0]===""),d=_(()=>!(r.value&&a.value));return(o,u)=>d.value?(l(),m("div",Xt,[o.titleKey?(l(),m("div",Yt,v(o.$t(o.titleKey)),1)):x("",!0),k("div",Qt,[a.value?(l(),I(ke,{key:0,disabled:!0,"default-color":o.color(o.torrent),value:o.$t(o.emptyValueKey),size:"small"},null,8,["default-color","value"])):(l(!0),m(M,{key:1},q(t.value,p=>(l(),I(ke,{disabled:!o.enableHashColor,"default-color":o.color(o.torrent),value:p,size:"small"},null,8,["disabled","default-color","value"]))),256))])])):x("",!0)}});Zt={class:"d-flex flex-column"};Jt={key:0,class:"text-caption text-grey"};Wt={class:"text-caption text-grey"};rt=w({__name:"ItemData",props:{torrent:{},titleKey:{},value:{type:Function}},setup(h){const e=h,{useBinarySize:r}=F(U()),t=_(()=>e.value(e.torrent));return(a,d)=>(l(),m("div",Zt,[a.titleKey?(l(),m("div",Jt,v(a.$t(a.titleKey)),1)):x("",!0),k("div",null,[K(v(i(wt)(t.value,i(r)))+" ",1),k("span",Wt,v(i(Vt)(t.value,i(r))),1)])]))}});ea={class:"d-flex flex-column"};ta={key:0,class:"text-caption text-grey"};aa={key:0};oa={key:1};it=w({__name:"ItemDateTime",props:{torrent:{},titleKey:{},value:{type:Function}},setup(h){const e=h,{dateFormat:r}=F(U()),t=_(()=>e.value(e.torrent));return(a,d)=>(l(),m("div",ea,[a.titleKey?(l(),m("div",ta,v(a.$t(a.titleKey)),1)):x("",!0),k("div",null,[t.value>0?(l(),m("span",aa,v(i(We)(t.value,i(r))),1)):(l(),m("span",oa,v(a.$t("dashboard.not_complete")),1))])]))}});la={class:"d-flex flex-column"};na={key:0,class:"text-caption text-grey"};sa={key:0};ra={key:1};dt=w({__name:"ItemDuration",props:{torrent:{},titleKey:{},unit:{},value:{type:Function}},setup(h){const e=h,r=_(()=>e.value(e.torrent)),t=_(()=>{const a=Se.duration(r.value,e.unit),d=[a.years(),a.months(),a.days(),a.hours(),a.minutes(),a.seconds()],o=["Y","M","d","h","m","s"];let u=!1;return d.map((p,s)=>{if(u||p)return u=!0,`${p}${o[s]}`}).filter(p=>p).join(" ")});return(a,d)=>(l(),m("div",la,[a.titleKey?(l(),m("div",na,v(a.$t(a.titleKey)),1)):x("",!0),k("div",null,[r.value>0?(l(),m("span",sa,v(t.value),1)):(l(),m("span",ra,v(a.$t("common.NA")),1))])]))}});ia={class:"d-flex flex-column"};da={key:0,class:"text-caption text-grey"};ut=w({__name:"ItemPercent",props:{torrent:{},titleKey:{},value:{type:Function},color:{type:Function}},setup(h){const e=h,r=_(()=>e.value(e.torrent));return(t,a)=>(l(),m("div",ia,[t.titleKey?(l(),m("div",da,v(t.$t(t.titleKey)),1)):x("",!0),n(tt,{"model-value":r.value,max:1,height:20,color:t.color(t.torrent),rounded:"sm",style:{width:"10em"}},{default:c(()=>[K(v(i(et)(r.value)),1)]),_:1},8,["model-value","color"])]))}});ua={class:"d-flex flex-column"};ca={key:0,class:"text-caption text-grey"};ct=w({__name:"ItemRelativeTime",props:{torrent:{},titleKey:{},value:{type:Function}},setup(h){return(e,r)=>(l(),m("div",ua,[e.titleKey?(l(),m("div",ca,v(e.$t(e.titleKey)),1)):x("",!0),k("div",null,[k("span",null,v(i(Se)(e.value(e.torrent)*1e3).fromNow()),1)])]))}});ma={class:"d-flex flex-column"};pa={key:0,class:"text-caption text-grey"};va={class:"text-caption text-grey"};mt=w({__name:"ItemSpeed",props:{torrent:{},titleKey:{},value:{type:Function}},setup(h){const e=h,{useBitSpeed:r}=F(U()),t=_(()=>e.value(e.torrent));return(a,d)=>(l(),m("div",ma,[a.titleKey?(l(),m("div",pa,v(a.$t(a.titleKey)),1)):x("",!0),k("div",null,[K(v(i(St)(t.value,i(r)))+" ",1),k("span",va,v(i(xt)(t.value,i(r))),1)])]))}});ha={class:"d-flex flex-column"};fa={key:0,class:"text-caption text-grey"};pt=w({__name:"ItemText",props:{torrent:{},titleKey:{},value:{type:Function},color:{type:Function}},setup(h){const e=h,r=_(()=>e.value(e.torrent));return(t,a)=>(l(),m("div",ha,[t.titleKey?(l(),m("div",fa,v(t.$t(t.titleKey)),1)):x("",!0),k("div",{class:ne(t.color?t.color(r.value):"")},v(r.value),3)]))}});ba={class:"d-flex flex-gap flex-wrap"};_a=w({__name:"GridTorrent",props:{torrent:{}},emits:["onTorrentClick"],setup(h){const e=h,{current:r}=ot(),t=Q(),a=U(),d=_(()=>(e.torrent.progress===1?a.doneGridProperties:a.busyGridProperties).filter(b=>b.active).sort((b,f)=>b.order-f.order)),o=s=>{switch(s){case D.AMOUNT:return nt;case D.CHIP:return st;case D.DATA:return rt;case D.DATETIME:return it;case D.DURATION:return dt;case D.PERCENT:return ut;case D.RELATIVE:return ct;case D.SPEED:return mt;case D.TEXT:default:return pt}},u=_(()=>t.isTorrentInSelection(e.torrent.hash)),p=_(()=>r.value.colors[ee(e.torrent.state)]);return(s,b)=>(l(),I(re,{class:"cursor-pointer",style:$e(`border-left: 6px solid ${p.value}`),height:"100%",color:u.value?`${i(ee)(s.torrent.state)}-darken-3`:void 0,onClick:b[0]||(b[0]=f=>s.$emit("onTorrentClick",f,s.torrent))},{default:c(()=>[n(Ae,{class:"text-wrap text-subtitle-1 pt-1 pb-0"},{default:c(()=>[K(v(s.torrent.name),1)]),_:1}),n(ve,null,{default:c(()=>[k("div",ba,[(l(!0),m(M,null,q(d.value,f=>(l(),m(M,null,[f.props?(l(),I(Ee(o(f.type)),O({key:0,torrent:s.torrent,ref_for:!0},f.props),null,16,["torrent"])):x("",!0)],64))),256))])]),_:1})]),_:1},8,["style","color"]))}});ya={class:"d-flex align-center",style:{height:"100%",width:"100%"}};ga=w({__name:"GridView",props:{paginatedTorrents:{}},emits:["onCheckboxClick","onTorrentClick","onTorrentDblClick","onTorrentRightClick","startPress","endPress"],setup(h){const e=lt(),r=Q();return(t,a)=>(l(),I(Fe,{id:"torrentList"},{default:c(()=>[(l(!0),m(M,null,q(t.paginatedTorrents,d=>(l(),I(_e,{cols:"12",lg:"3",md:"4",sm:"6",xl:"2",class:ne([i(e).mobile?"pb-2":"pb-4","pt-0"]),onContextmenu:o=>t.$emit("onTorrentRightClick",o,d),onTouchcancel:a[1]||(a[1]=o=>t.$emit("endPress")),onTouchend:a[2]||(a[2]=o=>t.$emit("endPress")),onTouchmove:a[3]||(a[3]=o=>t.$emit("endPress")),onTouchstart:o=>t.$emit("startPress",o.touches.item(0),d),onDblclick:o=>t.$emit("onTorrentDblClick",d)},{default:c(()=>[k("div",ya,[n(at,null,{default:c(()=>[i(r).isSelectionMultiple?(l(),I(L,{key:0,color:i(ee)(d.state),icon:i(r).isTorrentInSelection(d.hash)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"mr-2",variant:"text",onClick:o=>t.$emit("onCheckboxClick",d)},null,8,["color","icon","onClick"])):x("",!0)]),_:2},1024),n(_a,{torrent:d,onOnTorrentClick:a[0]||(a[0]=(o,u)=>t.$emit("onTorrentClick",o,u))},null,8,["torrent"])])]),_:2},1032,["class","onContextmenu","onTouchstart","onDblclick"]))),256))]),_:1}))}});ka=Ue(ga,[["__scopeId","data-v-d4d10d01"]]);Ta={class:"d-flex flex-gap flex-wrap"};$a=w({__name:"ListTorrent",props:{torrent:{}},emits:["onTorrentClick"],setup(h){const e=h,{current:r}=ot(),t=Q(),a=U(),d=_(()=>(e.torrent.progress===1?a.doneTorrentProperties:a.busyTorrentProperties).filter(b=>b.active).sort((b,f)=>b.order-f.order)),o=s=>{switch(s){case D.AMOUNT:return nt;case D.CHIP:return st;case D.DATA:return rt;case D.DATETIME:return it;case D.DURATION:return dt;case D.PERCENT:return ut;case D.RELATIVE:return ct;case D.SPEED:return mt;case D.TEXT:default:return pt}},u=_(()=>t.isTorrentInSelection(e.torrent.hash)),p=_(()=>r.value.colors[ee(e.torrent.state)]);return(s,b)=>(l(),I(re,{class:"cursor-pointer",style:$e(`border-left: 6px solid ${p.value}`),width:"100%",color:u.value?`${i(ee)(s.torrent.state)}-darken-3`:void 0,onClick:b[0]||(b[0]=f=>s.$emit("onTorrentClick",f,s.torrent))},{default:c(()=>[n(Ae,{class:"text-wrap pt-1 pb-0 px-2 text-truncate",style:{"font-size":"0.97em"}},{default:c(()=>[K(v(s.torrent.name),1)]),_:1}),n(ve,{class:"pa-2 pt-0"},{default:c(()=>[k("div",Ta,[(l(!0),m(M,null,q(d.value,f=>(l(),m(M,null,[f.props?(l(),I(Ee(o(f.type)),O({key:0,torrent:s.torrent,ref_for:!0},f.props),null,16,["torrent"])):x("",!0)],64))),256))])]),_:1})]),_:1},8,["style","color"]))}});Ca={class:"d-flex align-center"};wa=w({__name:"ListView",props:{paginatedTorrents:{}},emits:["onCheckboxClick","onTorrentClick","onTorrentDblClick","onTorrentRightClick","startPress","endPress"],setup(h){const e=lt(),r=Q();return(t,a)=>(l(),I(Qe,{id:"torrentList",class:"pa-0"},{default:c(()=>[(l(!0),m(M,null,q(t.paginatedTorrents,d=>(l(),I(me,{id:`torrent-${d.hash}`,class:ne([i(e).mobile?"mb-2":"mb-4","pa-0"]),onContextmenu:o=>t.$emit("onTorrentRightClick",o,d),onTouchcancel:a[1]||(a[1]=o=>t.$emit("endPress")),onTouchend:a[2]||(a[2]=o=>t.$emit("endPress")),onTouchmove:a[3]||(a[3]=o=>t.$emit("endPress")),onTouchstart:o=>t.$emit("startPress",o.touches.item(0),d),onDblclick:o=>t.$emit("onTorrentDblClick",d)},{default:c(()=>[k("div",Ca,[n(at,null,{default:c(()=>[i(r).isSelectionMultiple?(l(),I(L,{key:0,color:i(ee)(d.state),icon:i(r).isTorrentInSelection(d.hash)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"mr-2",variant:"text",onClick:o=>t.$emit("onCheckboxClick",d)},null,8,["color","icon","onClick"])):x("",!0)]),_:2},1024),n($a,{torrent:d,onOnTorrentClick:a[0]||(a[0]=(o,u)=>t.$emit("onTorrentClick",o,u))},null,8,["torrent"])])]),_:2},1032,["id","class","onContextmenu","onTouchstart","onDblclick"]))),256))]),_:1}))}});Va=Ue(wa,[["__scopeId","data-v-8828dd56"]]);Sa={class:"text-no-wrap"};xa={key:0};Da=w({__name:"ItemAmount",props:{torrent:{},value:{type:Function},total:{type:Function}},setup(h){return(e,r)=>(l(),m("td",Sa,[K(v(e.value(e.torrent))+" ",1),e.total?(l(),m("span",xa," / "+v(e.total(e.torrent)),1)):x("",!0)]))}});Ia={key:0,class:"d-flex flex-row flex-gap-column-small"};Pa=w({__name:"ItemChip",props:{torrent:{},value:{},emptyValueKey:{},color:{},enableHashColor:{type:Boolean,default:!1}},setup(h){const e=h,{hideChipIfUnset:r}=F(U()),t=_(()=>e.value(e.torrent)),a=_(()=>t.value.length<1||t.value[0]===""),d=_(()=>!(r.value&&a.value));return(o,u)=>(l(),m("td",null,[d.value?(l(),m("div",Ia,[a.value?(l(),I(ke,{key:0,disabled:!0,"default-color":o.color(o.torrent),value:o.$t(o.emptyValueKey),size:"small"},null,8,["default-color","value"])):(l(!0),m(M,{key:1},q(t.value,p=>(l(),I(ke,{disabled:!o.enableHashColor,"default-color":o.color(o.torrent),value:p,size:"small"},null,8,["disabled","default-color","value"]))),256))])):x("",!0)]))}});Ba={class:"text-no-wrap"};Ea=w({__name:"ItemData",props:{torrent:{},value:{type:Function}},setup(h){const{useBinarySize:e}=F(U());return(r,t)=>(l(),m("td",Ba,v(i(Dt)(r.value(r.torrent),i(e))),1))}});La={key:0,class:"text-no-wrap"};Aa={key:1,class:"text-no-wrap"};Ka=w({__name:"ItemDateTime",props:{torrent:{},value:{type:Function}},setup(h){const e=h,{dateFormat:r}=F(U()),t=_(()=>e.value(e.torrent));return(a,d)=>t.value>0?(l(),m("td",La,v(i(We)(t.value,i(r))),1)):(l(),m("td",Aa,v(a.$t("dashboard.not_complete")),1))}});Ra={key:0,class:"text-no-wrap"};Ma={key:1,class:"text-no-wrap"};Fa=w({__name:"ItemDuration",props:{torrent:{},unit:{},value:{type:Function}},setup(h){const e=h,r=_(()=>e.value(e.torrent)),t=_(()=>{const a=Se.duration(r.value,e.unit),d=[a.years(),a.months(),a.days(),a.hours(),a.minutes(),a.seconds()],o=["Y","M","d","h","m","s"];let u=!1;return d.map((p,s)=>{if(u||p)return u=!0,`${p}${o[s]}`}).filter(p=>p).join(" ")});return(a,d)=>r.value>0?(l(),m("td",Ra,v(t.value),1)):(l(),m("td",Ma,v(a.$t("common.NA")),1))}});Ua=w({__name:"ItemPercent",props:{torrent:{},value:{type:Function},color:{type:Function}},setup(h){const e=h,r=_(()=>e.value(e.torrent));return(t,a)=>(l(),m("td",null,[n(tt,{"model-value":r.value,max:1,height:20,color:t.color(t.torrent),rounded:"sm",style:{width:"10em"}},{default:c(()=>[K(v(i(et)(r.value)),1)]),_:1},8,["model-value","color"])]))}});Oa={class:"text-no-wrap"};Na=w({__name:"ItemRelativeTime",props:{torrent:{},value:{type:Function}},setup(h){return(e,r)=>(l(),m("td",Oa,v(i(Se)(e.value(e.torrent)*1e3).fromNow()),1))}});za={class:"text-no-wrap"};Ha=w({__name:"ItemSpeed",props:{torrent:{},value:{type:Function}},setup(h){const{useBitSpeed:e}=F(U());return(r,t)=>(l(),m("td",za,v(i(It)(r.value(r.torrent),i(e))),1))}});Ga=w({__name:"ItemText",props:{torrent:{},value:{type:Function},color:{type:Function}},setup(h){const e=h,r=_(()=>e.value(e.torrent));return(t,a)=>(l(),m("td",{class:ne([t.color?t.color(r.value):"","text-no-wrap"])},v(r.value),3))}});ja=w({__name:"TableTorrent",props:{torrent:{}},setup(h){const e=U(),r=_(()=>e.tableProperties.filter(a=>a.active).sort((a,d)=>a.order-d.order)),t=a=>{switch(a){case D.AMOUNT:return Da;case D.CHIP:return Pa;case D.DATA:return Ea;case D.DATETIME:return Ka;case D.DURATION:return Fa;case D.PERCENT:return Ua;case D.RELATIVE:return Na;case D.SPEED:return Ha;case D.TEXT:default:return Ga}};return(a,d)=>(l(!0),m(M,null,q(r.value,o=>(l(),m(M,null,[o.props?(l(),I(Ee(t(o.type)),O({key:0,torrent:a.torrent,ref_for:!0},o.props),null,16,["torrent"])):x("",!0)],64))),256))}});qa=h=>(vt("data-v-403c3005"),h=h(),ht(),h);Xa=qa(()=>k("th",{class:"px-1"},null,-1));Ya={key:0};Qa={class:"text-left"};Za={class:"text-left"};Ja=["onContextmenu","onTouchstart","onClick","onDblclick"];Wa={key:0};eo=w({__name:"TableView",props:{paginatedTorrents:{}},emits:["onCheckboxClick","onTorrentClick","onTorrentDblClick","onTorrentRightClick","startPress","endPress"],setup(h){const e=Q(),r=U(),t=_(()=>r.tableProperties.filter(o=>o.active).sort((o,u)=>o.order-u.order));function a(o){return e.isTorrentInSelection(o.hash)}const d=o=>["cursor-pointer",a(o)?`bg-${ee(o.state)}-darken-3 selected`:""];return(o,u)=>(l(),I(Pt,{id:"torrentList",class:"pa-0",density:"compact"},{default:c(()=>[k("thead",null,[k("tr",null,[Xa,i(e).isSelectionMultiple?(l(),m("th",Ya)):x("",!0),k("th",Qa,v(o.$t("torrent.properties.name")),1),(l(!0),m(M,null,q(t.value,p=>(l(),m("th",Za,v(o.$t(p.props.titleKey)),1))),256))])]),k("tbody",null,[(l(!0),m(M,null,q(o.paginatedTorrents,p=>Ye((l(),m("tr",{class:ne(d(p)),onContextmenu:s=>o.$emit("onTorrentRightClick",s,p),onTouchcancel:u[0]||(u[0]=s=>o.$emit("endPress")),onTouchend:u[1]||(u[1]=s=>o.$emit("endPress")),onTouchmove:u[2]||(u[2]=s=>o.$emit("endPress")),onTouchstart:s=>o.$emit("startPress",s.touches.item(0),p),onClick:s=>o.$emit("onTorrentClick",s,p),onDblclick:s=>o.$emit("onTorrentDblClick",p)},[k("td",{class:ne(`pa-0 bg-torrent-${i(Ne)[p.state].toLowerCase()}`)},null,2),i(e).isSelectionMultiple?(l(),m("td",Wa,[n(ye,{"model-value":a(p),color:`torrent-${i(Ne)[p.state].toLowerCase()}`,variant:"text",onClick:J(s=>o.$emit("onCheckboxClick",p),["stop"])},null,8,["model-value","color","onClick"])])):x("",!0),k("td",null,v(p.name),1),n(ja,{torrent:p},null,8,["torrent"])],42,Ja)),[[Bt]])),256))])]),_:1}))}});to=Ue(eo,[["__scopeId","data-v-403c3005"]]);ao={class:"pt-4 px-1 px-sm-5"};oo={class:"text-grey"};lo={key:0,class:"mt-5 text-xs-center"};no={class:"text-grey"};so={key:1};ro={key:5};ho=w({__name:"Dashboard",setup(h){const{t:e}=Te(),r=Xe(),t=Q(),{currentPage:a,isSelectionMultiple:d,selectedTorrents:o,displayMode:u}=F(t),p=Ze(),s=Ve(),b=se(),{processedTorrents:f}=F(b),P=U(),A=_(()=>u.value===j.LIST),C=_(()=>u.value===j.GRID),$=_(()=>u.value===j.TABLE),{paginatedResults:y,currentPage:g,pageCount:V}=Kt(f,P.paginationSize,a),z=_(()=>f.value.length<=o.value.length),X=je({isVisible:!1,offset:[0,0]});function ie(){window.scrollTo({top:0,behavior:"smooth"})}function he(T){if(T)return De(()=>{document.getElementById("searchInput")?.focus()});De(()=>{document.getElementById("searchInput")?.blur()})}function xe(){z.value?t.unselectAllTorrents():t.selectTorrents(...f.value.map(T=>T.hash))}function de(T){d.value||r.push({name:"torrentDetail",params:{hash:T.hash}})}function ue(T){t.toggleSelect(T.hash)}function te(T,B){T.shiftKey?t.spanTorrentSelection(B.hash):(Be(T)||t.isSelectionMultiple)&&(t.isSelectionMultiple=!0,t.toggleSelect(B.hash))}async function ae(T,B){X.isVisible&&(X.isVisible=!1,await De()),X.isVisible=!0,X.offset=[T.pageX,T.pageY],d.value?o.value.length===0&&t.selectTorrent(B.hash):(t.unselectAllTorrents(),t.selectTorrent(B.hash))}const fe=R();function Z(T,B){fe.value=setTimeout(()=>{ae(T,B)},500)}function ce(){clearTimeout(fe.value)}function be(T){if(p.hasActiveDialog)return!1;const B=T.target;if(Be(T)&&T.key==="a"&&B.tagName!=="INPUT")return t.unselectAllTorrents(),t.selectTorrents(...f.value.map(E=>E.hash)),T.preventDefault(),!0;if(Be(T)&&T.key==="f"){const E=document.getElementById("searchInput");if(document.activeElement!==E)return he(!0),T.preventDefault(),!0}if(T.key==="Escape"){const E=document.getElementById("searchInput");return document.activeElement===E?he(!1):(d.value=!1,t.unselectAllTorrents()),T.preventDefault(),!0}if(T.key==="Delete"){if(o.value.length===0)return;const E=document.getElementById("searchInput");return document.activeElement!==E&&(p.createDialog(Je,{hashes:o.value}),T.preventDefault()),!0}if(T.key==="/"){const E=document.getElementById("searchInput");return document.activeElement!==E&&(r.push({name:"searchEngine"}),T.preventDefault()),!0}}return ft(()=>X.isVisible,T=>{!T&&!d.value&&t.unselectAllTorrents()}),Ce(async()=>{await s.fetchCategories(),await s.fetchTags()}),qe(()=>{document.addEventListener("keydown",be),d.value=!1,ie()}),bt(()=>{document.removeEventListener("keydown",be)}),(T,B)=>(l(),m(M,null,[k("div",ao,[n(Ut),n(Fe,{class:"ma-0 pa-0"},{default:c(()=>[n(Et,null,{default:c(()=>[Ye(n(re,{color:"transparent"},{default:c(()=>[n(Y,{text:i(e)("common.selectAll"),location:"bottom"},{activator:c(({props:E})=>[n(L,O({icon:z.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"text-grey",color:"transparent",style:{left:"-8px"}},E,{onClick:xe}),null,16,["icon"])]),_:1},8,["text"]),k("span",oo,v(i(e)("dashboard.selectAll")),1)]),_:1},512),[[_t,i(d)]])]),_:1})]),_:1}),i(f).length===0?(l(),m("div",lo,[k("p",no,v(i(e)("common.emptyList")),1)])):x("",!0),i(P).isPaginationOnTop&&!i(P).isInfiniteScrollActive&&i(V)>1?(l(),m("div",so,[n(ze,{modelValue:i(g),"onUpdate:modelValue":B[0]||(B[0]=E=>pe(g)?g.value=E:null),length:i(V),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left",onInput:ie},null,8,["modelValue","length"])])):x("",!0),A.value?(l(),I(Va,{key:2,"paginated-torrents":i(y),onOnTorrentClick:te,onOnTorrentDblClick:de,onOnCheckboxClick:ue,onOnTorrentRightClick:ae,onStartPress:Z,onEndPress:ce},null,8,["paginated-torrents"])):C.value?(l(),I(ka,{key:3,class:"mb-2","paginated-torrents":i(y),onOnTorrentClick:te,onOnTorrentDblClick:de,onOnCheckboxClick:ue,onOnTorrentRightClick:ae,onStartPress:Z,onEndPress:ce},null,8,["paginated-torrents"])):$.value?(l(),I(to,{key:4,"paginated-torrents":i(y),onOnTorrentClick:te,onOnTorrentDblClick:de,onOnCheckboxClick:ue,onOnTorrentRightClick:ae,onStartPress:Z,onEndPress:ce},null,8,["paginated-torrents"])):x("",!0),!i(P).isPaginationOnTop&&!i(P).isInfiniteScrollActive&&i(V)>1?(l(),m("div",ro,[n(ze,{modelValue:i(g),"onUpdate:modelValue":B[1]||(B[1]=E=>pe(g)?g.value=E:null),length:i(V),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left",onInput:ie},null,8,["modelValue","length"])])):x("",!0)]),n(Ht,{"right-click-properties":X},null,8,["right-click-properties"])],64))}})});export{ho as default,__tla};