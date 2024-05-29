import{k as b,g as D,Y as I,q as K,s as H,a as U,Z as q,$ as L,V as A,c as O,d as j,e as G,K as J,M as Q,f as Y,h as B,i as Z,j as z,__tla as __tla_0}from"./index-CP36BZ0x.js";import{h as C,a0 as W,H as o,I as s,J as a,U as X,K as c,L as i,N as m,Q as g,n as l,V as R,q as E,F,a1 as x,a2 as ee,a3 as ae,E as oe,f as T,r as te,c as S,G as le,u as _,M as se,O as ne,P as re}from"./vue-BQgCUbk_.js";let he,pe;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{let de,ie,ue,me;de={class:"d-flex"};ie={key:2};ue={key:3};me=C({__name:"RightClickMenuEntry",props:{text:{},icon:{},action:{type:Function},hidden:{type:Boolean},disabled:{type:Boolean},disabledText:{},disabledIcon:{},children:{}},setup(f){const t=f,n=()=>{t.action&&t.action()};return(e,u)=>{const h=W("RightClickMenuEntry",!0);return e.hidden?m("",!0):(o(),s(H,{key:0,class:"px-3",disabled:e.disabled,onClick:n},{default:a(()=>[X("div",de,[e.disabled&&e.disabledIcon?(o(),s(b,{key:0,class:"mr-2"},{default:a(()=>[c(i(e.disabledIcon),1)]),_:1})):e.icon?(o(),s(b,{key:1,class:"mr-2"},{default:a(()=>[c(i(e.icon),1)]),_:1})):m("",!0),e.disabled&&e.disabledText?(o(),g("span",ie,i(e.disabledText),1)):(o(),g("span",ue,i(e.text),1)),l(D),!e.disabled&&e.children?(o(),s(b,{key:4},{default:a(()=>[c("mdi-chevron-right")]),_:1})):m("",!0)]),e.children?(o(),s(I,{key:0,activator:"parent","open-on-hover":"","open-on-click":"","close-delay":"10","open-delay":"0",location:"right"},{default:a(()=>[l(K,null,{default:a(()=>[(o(!0),g(F,null,R(e.children,v=>(o(),s(h,E({ref_for:!0},v),null,16))),256))]),_:1})]),_:1})):m("",!0)]),_:1},8,["disabled"]))}}});pe=C({__name:"RightClickMenu",props:x({menuData:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(f){const t=ee(f,"modelValue");return(n,e)=>t.value?(o(),s(I,{key:0,modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=u=>t.value=u),activator:"parent","close-on-content-click":!0,transition:"slide-y-transition","scroll-strategy":"none"},{default:a(()=>[l(K,null,{default:a(()=>[ae(n.$slots,"top"),(o(!0),g(F,null,R(n.menuData,u=>(o(),s(me,E({ref_for:!0},u),null,16))),256))]),_:3})]),_:3},8,["modelValue"])):m("",!0)}});he=C({__name:"MoveTorrentDialog",props:{guid:{},hashes:{},mode:{}},setup(f){const t=f,{isOpened:n}=U(t.guid),{t:e}=oe(),u=q(),h=L(),v=T(),w=T(),V=T(!1),y=te({newPath:""}),N=[r=>!!r||e("dialogs.moveTorrent.required")],M=S(()=>t.hashes.map(h.getTorrentByHash)),k=S(()=>{switch(t.mode){case"dl":return M.value[0]?.download_path;case"save":return M.value[0]?.savePath}});async function P(){await v.value?.validate(),V.value&&(await u.toggleAutoTmm(t.hashes,!1),await h.moveTorrents(t.mode,t.hashes,y.newPath),w.value?.saveValueToHistory(),$())}const $=()=>{n.value=!1};return le(()=>{y.newPath=k.value||""}),(r,d)=>(o(),s(z,{modelValue:_(n),"onUpdate:modelValue":d[3]||(d[3]=p=>re(n)?n.value=p:null)},{default:a(()=>[l(Z,null,{default:a(()=>[l(A,null,{default:a(()=>[c(i(r.$t(`dialogs.moveTorrent.${r.mode}.title`)),1)]),_:1}),l(O,null,{default:a(()=>[l(_(j),{modelValue:V.value,"onUpdate:modelValue":d[1]||(d[1]=p=>V.value=p),ref_key:"form",ref:v,onSubmit:d[2]||(d[2]=se(()=>{},["prevent"]))},{default:a(()=>[k.value?(o(),s(G,{key:0,"model-value":k.value,disabled:"",label:r.$t("dialogs.moveTorrent.oldPath")},null,8,["model-value","label"])):m("",!0),l(J,{modelValue:y.newPath,"onUpdate:modelValue":d[0]||(d[0]=p=>y.newPath=p),historyKey:_(Q).TORRENT_PATH,ref_key:"field",ref:w,rules:N,autofocus:"",label:r.$t("dialogs.moveTorrent.newPath"),onKeydown:ne(P,["enter"])},null,8,["modelValue","historyKey","label"])]),_:1},8,["modelValue"])]),_:1}),l(Y,null,{default:a(()=>[l(D),l(B,{color:"error",onClick:$},{default:a(()=>[c(i(r.$t("common.cancel")),1)]),_:1}),l(B,{color:"accent",disabled:!V.value,onClick:P},{default:a(()=>[c(i(r.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}})});export{he as _,pe as a,__tla};