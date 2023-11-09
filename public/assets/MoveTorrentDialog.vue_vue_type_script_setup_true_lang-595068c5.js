import{d as A}from"./dayjs.min-a017fbc8.js";import{c as Z,a as q}from"./apexcharts-ec175a2b.js";import{d as L,$ as Q,e as O,r as X,c as E,M as tt,a1 as _,a2 as I,a3 as D,j as V,W as B,_ as F,u as K,Z as st,a6 as et,am as nt,D as rt}from"./vue-30d5b3a2.js";import{r as ot,h as it,i as at,j as ut,s as dt,t as U,v as lt,n as ht,w as W,k as mt,x as ct}from"./index-2615a93d.js";import"./faker-dcfab09f.js";var z={exports:{}};(function(Y,C){(function(m,o){Y.exports=o()})(Z,function(){var m,o,p=1e3,f=6e4,y=36e5,g=864e5,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,r=31536e6,l=2628e6,b=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:r,months:l,days:g,hours:y,minutes:f,seconds:p,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof k},a=function(e,s,t){return new k(e,t,s.$l)},h=function(e){return o.p(e)+"s"},x=function(e){return e<0},M=function(e){return x(e)?Math.ceil(e):Math.floor(e)},H=function(e){return Math.abs(e)},S=function(e,s){return e?x(e)?{negative:!0,format:""+H(e)+s}:{negative:!1,format:""+e+s}:{negative:!1,format:""}},k=function(){function e(t,n,u){var i=this;if(this.$d={},this.$l=u,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),n)return a(t*v[h(n)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(T){i.$d[h(T)]=t[T]}),this.calMilliseconds(),this;if(typeof t=="string"){var c=t.match(b);if(c){var $=c.slice(2).map(function(T){return T!=null?Number(T):0});return this.$d.years=$[0],this.$d.months=$[1],this.$d.weeks=$[2],this.$d.days=$[3],this.$d.hours=$[4],this.$d.minutes=$[5],this.$d.seconds=$[6],this.calMilliseconds(),this}}return this}var s=e.prototype;return s.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(n,u){return n+(t.$d[u]||0)*v[u]},0)},s.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=M(t/r),t%=r,this.$d.months=M(t/l),t%=l,this.$d.days=M(t/g),t%=g,this.$d.hours=M(t/y),t%=y,this.$d.minutes=M(t/f),t%=f,this.$d.seconds=M(t/p),t%=p,this.$d.milliseconds=t},s.toISOString=function(){var t=S(this.$d.years,"Y"),n=S(this.$d.months,"M"),u=+this.$d.days||0;this.$d.weeks&&(u+=7*this.$d.weeks);var i=S(u,"D"),c=S(this.$d.hours,"H"),$=S(this.$d.minutes,"M"),T=this.$d.seconds||0;this.$d.milliseconds&&(T+=this.$d.milliseconds/1e3,T=Math.round(1e3*T)/1e3);var j=S(T,"S"),J=t.negative||n.negative||i.negative||c.negative||$.negative||j.negative,R=c.format||$.format||j.format?"T":"",N=(J?"-":"")+"P"+t.format+n.format+i.format+R+c.format+$.format+j.format;return N==="P"||N==="-P"?"P0D":N},s.toJSON=function(){return this.toISOString()},s.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",u={Y:this.$d.years,YY:o.s(this.$d.years,2,"0"),YYYY:o.s(this.$d.years,4,"0"),M:this.$d.months,MM:o.s(this.$d.months,2,"0"),D:this.$d.days,DD:o.s(this.$d.days,2,"0"),H:this.$d.hours,HH:o.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:o.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:o.s(this.$d.seconds,2,"0"),SSS:o.s(this.$d.milliseconds,3,"0")};return n.replace(P,function(i,c){return c||String(u[i])})},s.as=function(t){return this.$ms/v[h(t)]},s.get=function(t){var n=this.$ms,u=h(t);return u==="milliseconds"?n%=1e3:n=u==="weeks"?M(n/v[u]):this.$d[u],n||0},s.add=function(t,n,u){var i;return i=n?t*v[h(n)]:d(t)?t.$ms:a(t,this).$ms,a(this.$ms+i*(u?-1:1),this)},s.subtract=function(t,n){return this.add(t,n,!0)},s.locale=function(t){var n=this.clone();return n.$l=t,n},s.clone=function(){return a(this.$ms,this)},s.humanize=function(t){return m().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},s.valueOf=function(){return this.asMilliseconds()},s.milliseconds=function(){return this.get("milliseconds")},s.asMilliseconds=function(){return this.as("milliseconds")},s.seconds=function(){return this.get("seconds")},s.asSeconds=function(){return this.as("seconds")},s.minutes=function(){return this.get("minutes")},s.asMinutes=function(){return this.as("minutes")},s.hours=function(){return this.get("hours")},s.asHours=function(){return this.as("hours")},s.days=function(){return this.get("days")},s.asDays=function(){return this.as("days")},s.weeks=function(){return this.get("weeks")},s.asWeeks=function(){return this.as("weeks")},s.months=function(){return this.get("months")},s.asMonths=function(){return this.as("months")},s.years=function(){return this.get("years")},s.asYears=function(){return this.as("years")},e}(),w=function(e,s,t){return e.add(s.years()*t,"y").add(s.months()*t,"M").add(s.days()*t,"d").add(s.hours()*t,"h").add(s.minutes()*t,"m").add(s.seconds()*t,"s").add(s.milliseconds()*t,"ms")};return function(e,s,t){m=t,o=t().$utils(),t.duration=function(i,c){var $=t.locale();return a(i,{$l:$},c)},t.isDuration=d;var n=s.prototype.add,u=s.prototype.subtract;s.prototype.add=function(i,c){return d(i)?w(this,i,1):n.bind(this)(i,c)},s.prototype.subtract=function(i,c){return d(i)?w(this,i,-1):u.bind(this)(i,c)}}})})(z);var ft=z.exports;const $t=q(ft);var G={exports:{}};(function(Y,C){(function(m,o){Y.exports=o()})(Z,function(){return function(m,o,p){m=m||{};var f=o.prototype,y={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function g(r,l,b,v){return f.fromToBase(r,l,b,v)}p.en.relativeTime=y,f.fromToBase=function(r,l,b,v,d){for(var a,h,x,M=b.$locale().relativeTime||y,H=m.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],S=H.length,k=0;k<S;k+=1){var w=H[k];w.d&&(a=v?p(r).diff(b,w.d,!0):b.diff(r,w.d,!0));var e=(m.rounding||Math.round)(Math.abs(a));if(x=a>0,e<=w.r||!w.r){e<=1&&k>0&&(w=H[k-1]);var s=M[w.l];d&&(e=d(""+e)),h=typeof s=="string"?s.replace("%d",e):s(e,l,w.l,x);break}}if(l)return h;var t=x?M.future:M.past;return typeof t=="function"?t(h):t.replace("%s",h)},f.to=function(r,l){return g(r,l,this,!0)},f.from=function(r,l){return g(r,l,this)};var P=function(r){return r.$u?p.utc():p()};f.toNow=function(r){return this.to(P(this),r)},f.fromNow=function(r){return this.from(P(this),r)}}})})(G);var vt=G.exports;const pt=q(vt);A.extend($t);A.extend(pt);const Tt=L({__name:"MoveTorrentDialog",props:{guid:{},hashes:{}},setup(Y){const C=Y,{isOpened:m}=ot(C.guid),{t:o}=Q(),p=it(),f=O(),y=O(!1),g=X({newPath:""}),P=[d=>!!d||o("dialogs.moveTorrent.required"),d=>d!==l.value||o("dialogs.moveTorrent.samePath")],r=E(()=>C.hashes.map(p.getTorrentByHash)),l=E(()=>r.value[0]?.savePath);async function b(){await f.value?.validate(),y.value&&(await p.moveTorrents(C.hashes,g.newPath),v())}const v=()=>{m.value=!1};return tt(()=>{g.newPath=r.value[0]?.savePath||""}),(d,a)=>(_(),I(ct,{modelValue:K(m),"onUpdate:modelValue":a[3]||(a[3]=h=>rt(m)?m.value=h:null)},{default:D(()=>[V(mt,null,{default:D(()=>[V(at,null,{default:D(()=>[B(F(d.$t("dialogs.moveTorrent.title")),1)]),_:1}),V(ut,null,{default:D(()=>[V(K(dt),{modelValue:y.value,"onUpdate:modelValue":a[1]||(a[1]=h=>y.value=h),ref_key:"form",ref:f,onSubmit:a[2]||(a[2]=st(()=>{},["prevent"]))},{default:D(()=>[l.value?(_(),I(U,{key:0,"model-value":l.value,disabled:"",label:d.$t("dialogs.moveTorrent.oldPath")},null,8,["model-value","label"])):et("",!0),V(U,{modelValue:g.newPath,"onUpdate:modelValue":a[0]||(a[0]=h=>g.newPath=h),rules:P,autofocus:"",label:d.$t("dialogs.moveTorrent.newPath"),onKeydown:nt(b,["enter"])},null,8,["modelValue","label","onKeydown"])]),_:1},8,["modelValue"])]),_:1}),V(lt,null,{default:D(()=>[V(ht),V(W,{color:"error",onClick:v},{default:D(()=>[B(F(d.$t("common.cancel")),1)]),_:1}),V(W,{color:"accent",disabled:!y.value,onClick:b},{default:D(()=>[B(F(d.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});export{Tt as _};
