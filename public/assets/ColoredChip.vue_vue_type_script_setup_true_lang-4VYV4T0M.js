import{V as B,r as D,Q as F,g as I,j as K,F as L,R as A,z as O,B as q,C as z,a as J,I as Q,J as j,D as G,i as S,E as Y,P as Z,b as W,S as R,U as X}from"./index-CjhflkuO.js";import{h as _,Y as x,B as l,D as r,G as o,M as ee,S as f,N as d,P as y,L as g,m as s,Q as N,n as E,F as U,Z as ae,_ as oe,$ as le,I as H,d as M,r as te,c as C,J as se,u as P,U as ne,V as re,O as de,a0 as ue,R as ie}from"./vue-CnBfmSzz.js";import{u as me}from"./vuetify-8cAtHrug.js";const ce={class:"d-flex"},fe={key:2},pe={key:3},ve=_({__name:"RightClickMenuEntry",props:{text:{},icon:{},action:{type:Function},hidden:{type:Boolean},disabled:{type:Boolean},disabledText:{},disabledIcon:{},children:{}},setup(m){const e=m,n=()=>{e.action&&e.action()};return(a,t)=>{const p=x("RightClickMenuEntry",!0);return a.hidden?y("",!0):(l(),r(K,{key:0,class:"px-3",disabled:a.disabled,onClick:n},{default:o(()=>[ee("div",ce,[a.disabled&&a.disabledIcon?(l(),r(B,{key:0,class:"mr-2"},{default:o(()=>[f(d(a.disabledIcon),1)]),_:1})):a.icon?(l(),r(B,{key:1,class:"mr-2"},{default:o(()=>[f(d(a.icon),1)]),_:1})):y("",!0),a.disabled&&a.disabledText?(l(),g("span",fe,d(a.disabledText),1)):(l(),g("span",pe,d(a.text),1)),s(D),!a.disabled&&a.children?(l(),r(B,{key:4},{default:o(()=>t[0]||(t[0]=[f("mdi-chevron-right")])),_:1})):y("",!0)]),a.children?(l(),r(F,{key:0,activator:"parent","open-on-hover":"","open-on-click":"","close-delay":"10","open-delay":"0",location:"right"},{default:o(()=>[s(I,null,{default:o(()=>[(l(!0),g(U,null,N(a.children,v=>(l(),r(p,E({ref_for:!0},v),null,16))),256))]),_:1})]),_:1})):y("",!0)]),_:1},8,["disabled"]))}}}),Ce=_({__name:"RightClickMenu",props:ae({menuData:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(m){const e=oe(m,"modelValue");return(n,a)=>e.value?(l(),r(F,{key:0,modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),activator:"parent","close-on-content-click":!0,transition:"slide-y-transition","scroll-strategy":"none"},{default:o(()=>[s(I,null,{default:o(()=>[le(n.$slots,"top"),(l(!0),g(U,null,N(n.menuData,t=>(l(),r(ve,E({ref_for:!0},t),null,16))),256))]),_:3})]),_:3},8,["modelValue"])):y("",!0)}}),be=_({__name:"MoveTorrentDialog",props:{guid:{},hashes:{},mode:{}},setup(m){const e=m,{isOpened:n}=L(e.guid),{t:a}=H(),t=A(),p=M(),v=M(),h=M(!1),V=te({newPath:""}),k=[u=>!!u||a("dialogs.moveTorrent.required")],T=C(()=>e.hashes.map(t.getTorrentByHash)),c=C(()=>{switch(e.mode){case"dl":return T.value[0]?.download_path;case"save":return T.value[0]?.savePath}});async function w(){await p.value?.validate(),h.value&&(await t.toggleAutoTmm(e.hashes,!1),await t.moveTorrents(e.mode,e.hashes,V.newPath),v.value?.saveValueToHistory(),$())}const $=()=>{n.value=!1};return se(()=>{V.newPath=c.value||""}),(u,i)=>(l(),r(Z,{modelValue:P(n),"onUpdate:modelValue":i[3]||(i[3]=b=>de(n)?n.value=b:null)},{default:o(()=>[s(Y,null,{default:o(()=>[s(O,null,{default:o(()=>[f(d(u.$t(`dialogs.moveTorrent.${u.mode}.title`)),1)]),_:1}),s(q,null,{default:o(()=>[s(P(z),{modelValue:h.value,"onUpdate:modelValue":i[1]||(i[1]=b=>h.value=b),ref_key:"form",ref:p,onSubmit:i[2]||(i[2]=ne(()=>{},["prevent"]))},{default:o(()=>[c.value?(l(),r(J,{key:0,"model-value":c.value,disabled:"",label:u.$t("dialogs.moveTorrent.oldPath")},null,8,["model-value","label"])):y("",!0),s(Q,{modelValue:V.newPath,"onUpdate:modelValue":i[0]||(i[0]=b=>V.newPath=b),historyKey:P(j).TORRENT_PATH,ref_key:"field",ref:v,rules:k,autofocus:"",label:u.$t("dialogs.moveTorrent.newPath"),onKeydown:re(w,["enter"])},null,8,["modelValue","historyKey","label"])]),_:1},8,["modelValue"])]),_:1}),s(G,null,{default:o(()=>[s(D),s(S,{color:"error",onClick:$},{default:o(()=>[f(d(u.$t("common.cancel")),1)]),_:1}),s(S,{color:"accent",disabled:!h.value,onClick:w},{default:o(()=>[f(d(u.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),ge=_({__name:"ColoredChip",props:{defaultColor:{},disabled:{type:Boolean,default:!1},disabledValue:{},value:{}},setup(m){const e=m,{t:n}=H(),{current:a}=me(),{enableHashColors:t,hideColoredChip:p}=ue(W());function v(c){return a.value.colors[c]??c}const h=C(()=>e.disabled||!t.value?e.defaultColor:R(e.value)),V=C(()=>e.disabled||!t.value?v(e.defaultColor):R(e.value)),k=C(()=>e.disabled?e.disabledValue||e.value||n("common.none"):e.value),T=C(()=>!p.value);return(c,w)=>T.value?(l(),r(X,{key:0,color:h.value,variant:"flat"},{default:o(()=>[f(d(k.value),1)]),_:1},8,["color"])):(l(),g("div",{key:1,class:"text-no-wrap",style:ie(`color: ${V.value}`)},d(k.value),5))}});export{be as _,Ce as a,ge as b};