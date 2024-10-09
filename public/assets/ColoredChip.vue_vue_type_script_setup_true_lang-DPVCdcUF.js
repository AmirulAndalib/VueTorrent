import{V as $,i as F,a1 as H,s as I,v as O,y as K,b as A,a2 as q,c as z,d as j,e as G,f as J,a as Z,N as Q,O as W,h as X,j as E,k as Y,n as x,a3 as N,a4 as ee}from"./index-RFrLkh5m.js";import{h as w,_ as ae,u as k,B as t,D as s,G as o,S as te,J as p,K as d,N as c,O as D,m as u,T as U,F as P,$ as oe,n as le,a0 as ne,a1 as se,a2 as re,H as L,d as M,r as ue,c as C,I as de,L as ie,M as me,P as ce,Z as ye,U as pe}from"./vue-BwV3LOMf.js";import{u as fe}from"./vuetify-Dzk9Lamd.js";function R(l){return!S(l)}function S(l){return"type"in l}function ve(l){return S(l)&&l.type==="divider"}const he={class:"d-flex"},Ve={key:2},De={key:3},Ce=w({__name:"RightClickMenuEntry",props:{entryData:{}},setup(l){const a=l,r=()=>{R(a.entryData)&&a.entryData.action&&a.entryData.action()};return(e,n)=>{const f=ae("RightClickMenuEntry",!0);return k(R)(e.entryData)&&!e.entryData.hidden?(t(),s(O,{key:0,class:"px-3",disabled:e.entryData.disabled,onClick:r},{default:o(()=>[te("div",he,[e.entryData.disabled&&e.entryData.disabledIcon?(t(),s($,{key:0,class:"mr-2"},{default:o(()=>[p(d(e.entryData.disabledIcon),1)]),_:1})):e.entryData.icon?(t(),s($,{key:1,class:"mr-2"},{default:o(()=>[p(d(e.entryData.icon),1)]),_:1})):c("",!0),e.entryData.disabled&&e.entryData.disabledText?(t(),D("span",Ve,d(e.entryData.disabledText),1)):(t(),D("span",De,d(e.entryData.text),1)),u(F),!e.entryData.disabled&&e.entryData.children?(t(),s($,{key:4},{default:o(()=>n[0]||(n[0]=[p("mdi-chevron-right")])),_:1})):c("",!0)]),e.entryData.children?(t(),s(H,{key:0,activator:"parent","open-on-hover":"","open-on-click":"","close-delay":"10","open-delay":"0",location:"right"},{default:o(()=>[u(I,null,{default:o(()=>[(t(!0),D(P,null,U(e.entryData.children,v=>(t(),s(f,{entryData:v},null,8,["entryData"]))),256))]),_:1})]),_:1})):c("",!0)]),_:1},8,["disabled"])):k(S)(e.entryData)?(t(),D(P,{key:1},[k(ve)(e.entryData)?(t(),s(K,oe(le({key:0},e.entryData.props)),null,16)):c("",!0)],64)):c("",!0)}}}),Te=w({__name:"RightClickMenu",props:ne({menuData:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=se(l,"modelValue");return(r,e)=>a.value?(t(),s(H,{key:0,modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),activator:"parent","close-on-content-click":!0,transition:"slide-y-transition","scroll-strategy":"none"},{default:o(()=>[u(I,null,{default:o(()=>[re(r.$slots,"top"),r.$slots.top?(t(),s(K,{key:0,thickness:"3"})):c("",!0),(t(!0),D(P,null,U(r.menuData,n=>(t(),s(Ce,{entryData:n},null,8,["entryData"]))),256))]),_:3})]),_:3},8,["modelValue"])):c("",!0)}}),we=w({__name:"MoveTorrentDialog",props:{guid:{},hashes:{},mode:{}},setup(l){const a=l,{isOpened:r}=A(a.guid),{t:e}=L(),n=q(),f=M(),v=M(),h=M(!1),V=ue({newPath:""}),g=[i=>!!i||e("dialogs.moveTorrent.required")],T=C(()=>a.hashes.map(n.getTorrentByHash)),y=C(()=>{switch(a.mode){case"dl":return T.value[0]?.download_path;case"save":return T.value[0]?.savePath}});async function _(){await f.value?.validate(),h.value&&(await n.toggleAutoTmm(a.hashes,!1),await n.moveTorrents(a.mode,a.hashes,V.newPath),v.value?.saveValueToHistory(),B())}const B=()=>{r.value=!1};return de(()=>{V.newPath=y.value||""}),(i,m)=>(t(),s(Y,{modelValue:k(r),"onUpdate:modelValue":m[3]||(m[3]=b=>ce(r)?r.value=b:null)},{default:o(()=>[u(z,null,{default:o(()=>[u(j,null,{default:o(()=>[p(d(i.$t(`dialogs.moveTorrent.${i.mode}.title`)),1)]),_:1}),u(G,null,{default:o(()=>[u(k(J),{modelValue:h.value,"onUpdate:modelValue":m[1]||(m[1]=b=>h.value=b),ref_key:"form",ref:f,onSubmit:m[2]||(m[2]=ie(()=>{},["prevent"]))},{default:o(()=>[y.value?(t(),s(Z,{key:0,"model-value":y.value,disabled:"",label:i.$t("dialogs.moveTorrent.oldPath")},null,8,["model-value","label"])):c("",!0),u(Q,{modelValue:V.newPath,"onUpdate:modelValue":m[0]||(m[0]=b=>V.newPath=b),historyKey:k(W).TORRENT_PATH,ref_key:"field",ref:v,rules:g,autofocus:"",label:i.$t("dialogs.moveTorrent.newPath"),onKeydown:me(_,["enter"])},null,8,["modelValue","historyKey","label"])]),_:1},8,["modelValue"])]),_:1}),u(X,null,{default:o(()=>[u(F),u(E,{color:"error",onClick:B},{default:o(()=>[p(d(i.$t("common.cancel")),1)]),_:1}),u(E,{color:"accent",disabled:!h.value,onClick:_},{default:o(()=>[p(d(i.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),_e=w({__name:"ColoredChip",props:{defaultColor:{},disabled:{type:Boolean,default:!1},disabledValue:{},value:{}},setup(l){const a=l,{t:r}=L(),{current:e}=fe(),{enableHashColors:n,hideColoredChip:f}=ye(x());function v(y){return e.value.colors[y]??y}const h=C(()=>a.disabled||!n.value?a.defaultColor:N(a.value)),V=C(()=>a.disabled||!n.value?v(a.defaultColor):N(a.value)),g=C(()=>a.disabled?a.disabledValue||a.value||r("common.none"):a.value),T=C(()=>!f.value);return(y,_)=>T.value?(t(),s(ee,{key:0,color:h.value,variant:"flat"},{default:o(()=>[p(d(g.value),1)]),_:1},8,["color"])):(t(),D("div",{key:1,class:"text-no-wrap",style:pe(`color: ${V.value}`)},d(g.value),5))}});export{Te as _,we as a,_e as b};