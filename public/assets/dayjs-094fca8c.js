import{g as J,K as L,d as j,r as Q,c as _,M as X,a1 as E,a2 as A,a3 as x,m as k,W as B,Z as F,u as K,Y as tt,a8 as et,ao as st,D as nt,at as R,ad as U}from"./vue-f2a09b7f.js";import{u as rt,n as ot,e as it,f as at,g as ut,h as dt,i as lt,aC as ht,aD as mt,j as ct,a as ft,k as I,l as $t,m as vt}from"./index-830d7623.js";import"./faker-c43f92d4.js";import{d as W}from"./dayjs.min-b8f05724.js";const St=J({__name:"MoveTorrentDialog",props:{guid:{},hashes:{},mode:{}},setup(H){const D=H,{isOpened:h}=rt(D.guid),{t:a}=L(),g=ot(),f=it(),b=j(),V=j(),S=j(!1),r=Q({newPath:""}),m=[o=>!!o||a("dialogs.moveTorrent.required")],M=_(()=>D.hashes.map(f.getTorrentByHash)),$=_(()=>{switch(D.mode){case"dl":return M.value[0]?.download_path;case"save":return M.value[0]?.savePath}});async function w(){await b.value?.validate(),S.value&&(await g.toggleAutoTmm(D.hashes,!1),await f.moveTorrents(D.mode,D.hashes,r.newPath),V.value?.saveValueToHistory(),y())}const y=()=>{h.value=!1};return X(()=>{r.newPath=$.value||""}),(o,l)=>(E(),A(vt,{modelValue:K(h),"onUpdate:modelValue":l[3]||(l[3]=d=>nt(h)?h.value=d:null)},{default:x(()=>[k($t,null,{default:x(()=>[k(at,null,{default:x(()=>[B(F(o.$t(`dialogs.moveTorrent.${o.mode}.title`)),1)]),_:1}),k(ut,null,{default:x(()=>[k(K(dt),{modelValue:S.value,"onUpdate:modelValue":l[1]||(l[1]=d=>S.value=d),ref_key:"form",ref:b,onSubmit:l[2]||(l[2]=tt(()=>{},["prevent"]))},{default:x(()=>[$.value?(E(),A(lt,{key:0,"model-value":$.value,disabled:"",label:o.$t("dialogs.moveTorrent.oldPath")},null,8,["model-value","label"])):et("",!0),k(ht,{modelValue:r.newPath,"onUpdate:modelValue":l[0]||(l[0]=d=>r.newPath=d),historyKey:K(mt).TORRENT_PATH,ref_key:"field",ref:V,rules:m,autofocus:"",label:o.$t("dialogs.moveTorrent.newPath"),onKeydown:st(w,["enter"])},null,8,["modelValue","historyKey","label","onKeydown"])]),_:1},8,["modelValue"])]),_:1}),k(ct,null,{default:x(()=>[k(ft),k(I,{color:"error",onClick:y},{default:x(()=>[B(F(o.$t("common.cancel")),1)]),_:1}),k(I,{color:"accent",disabled:!S.value,onClick:w},{default:x(()=>[B(F(o.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});var Z={exports:{}};(function(H,D){(function(h,a){H.exports=a()})(R,function(){var h,a,g=1e3,f=6e4,b=36e5,V=864e5,S=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,r=31536e6,m=2628e6,M=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,$={years:r,months:m,days:V,hours:b,minutes:f,seconds:g,milliseconds:1,weeks:6048e5},w=function(s){return s instanceof P},y=function(s,e,t){return new P(s,t,e.$l)},o=function(s){return a.p(s)+"s"},l=function(s){return s<0},d=function(s){return l(s)?Math.ceil(s):Math.floor(s)},C=function(s){return Math.abs(s)},Y=function(s,e){return s?l(s)?{negative:!0,format:""+C(s)+e}:{negative:!1,format:""+s+e}:{negative:!1,format:""}},P=function(){function s(t,n,u){var i=this;if(this.$d={},this.$l=u,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),n)return y(t*$[o(n)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(T){i.$d[o(T)]=t[T]}),this.calMilliseconds(),this;if(typeof t=="string"){var c=t.match(M);if(c){var v=c.slice(2).map(function(T){return T!=null?Number(T):0});return this.$d.years=v[0],this.$d.months=v[1],this.$d.weeks=v[2],this.$d.days=v[3],this.$d.hours=v[4],this.$d.minutes=v[5],this.$d.seconds=v[6],this.calMilliseconds(),this}}return this}var e=s.prototype;return e.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(n,u){return n+(t.$d[u]||0)*$[u]},0)},e.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=d(t/r),t%=r,this.$d.months=d(t/m),t%=m,this.$d.days=d(t/V),t%=V,this.$d.hours=d(t/b),t%=b,this.$d.minutes=d(t/f),t%=f,this.$d.seconds=d(t/g),t%=g,this.$d.milliseconds=t},e.toISOString=function(){var t=Y(this.$d.years,"Y"),n=Y(this.$d.months,"M"),u=+this.$d.days||0;this.$d.weeks&&(u+=7*this.$d.weeks);var i=Y(u,"D"),c=Y(this.$d.hours,"H"),v=Y(this.$d.minutes,"M"),T=this.$d.seconds||0;this.$d.milliseconds&&(T+=this.$d.milliseconds/1e3,T=Math.round(1e3*T)/1e3);var N=Y(T,"S"),z=t.negative||n.negative||i.negative||c.negative||v.negative||N.negative,G=c.format||v.format||N.format?"T":"",O=(z?"-":"")+"P"+t.format+n.format+i.format+G+c.format+v.format+N.format;return O==="P"||O==="-P"?"P0D":O},e.toJSON=function(){return this.toISOString()},e.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",u={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return n.replace(S,function(i,c){return c||String(u[i])})},e.as=function(t){return this.$ms/$[o(t)]},e.get=function(t){var n=this.$ms,u=o(t);return u==="milliseconds"?n%=1e3:n=u==="weeks"?d(n/$[u]):this.$d[u],n||0},e.add=function(t,n,u){var i;return i=n?t*$[o(n)]:w(t)?t.$ms:y(t,this).$ms,y(this.$ms+i*(u?-1:1),this)},e.subtract=function(t,n){return this.add(t,n,!0)},e.locale=function(t){var n=this.clone();return n.$l=t,n},e.clone=function(){return y(this.$ms,this)},e.humanize=function(t){return h().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},e.valueOf=function(){return this.asMilliseconds()},e.milliseconds=function(){return this.get("milliseconds")},e.asMilliseconds=function(){return this.as("milliseconds")},e.seconds=function(){return this.get("seconds")},e.asSeconds=function(){return this.as("seconds")},e.minutes=function(){return this.get("minutes")},e.asMinutes=function(){return this.as("minutes")},e.hours=function(){return this.get("hours")},e.asHours=function(){return this.as("hours")},e.days=function(){return this.get("days")},e.asDays=function(){return this.as("days")},e.weeks=function(){return this.get("weeks")},e.asWeeks=function(){return this.as("weeks")},e.months=function(){return this.get("months")},e.asMonths=function(){return this.as("months")},e.years=function(){return this.get("years")},e.asYears=function(){return this.as("years")},s}(),p=function(s,e,t){return s.add(e.years()*t,"y").add(e.months()*t,"M").add(e.days()*t,"d").add(e.hours()*t,"h").add(e.minutes()*t,"m").add(e.seconds()*t,"s").add(e.milliseconds()*t,"ms")};return function(s,e,t){h=t,a=t().$utils(),t.duration=function(i,c){var v=t.locale();return y(i,{$l:v},c)},t.isDuration=w;var n=e.prototype.add,u=e.prototype.subtract;e.prototype.add=function(i,c){return w(i)?p(this,i,1):n.bind(this)(i,c)},e.prototype.subtract=function(i,c){return w(i)?p(this,i,-1):u.bind(this)(i,c)}}})})(Z);var yt=Z.exports;const pt=U(yt);var q={exports:{}};(function(H,D){(function(h,a){H.exports=a()})(R,function(){return function(h,a,g){h=h||{};var f=a.prototype,b={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function V(r,m,M,$){return f.fromToBase(r,m,M,$)}g.en.relativeTime=b,f.fromToBase=function(r,m,M,$,w){for(var y,o,l,d=M.$locale().relativeTime||b,C=h.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],Y=C.length,P=0;P<Y;P+=1){var p=C[P];p.d&&(y=$?g(r).diff(M,p.d,!0):M.diff(r,p.d,!0));var s=(h.rounding||Math.round)(Math.abs(y));if(l=y>0,s<=p.r||!p.r){s<=1&&P>0&&(p=C[P-1]);var e=d[p.l];w&&(s=w(""+s)),o=typeof e=="string"?e.replace("%d",s):e(s,m,p.l,l);break}}if(m)return o;var t=l?d.future:d.past;return typeof t=="function"?t(o):t.replace("%s",o)},f.to=function(r,m){return V(r,m,this,!0)},f.from=function(r,m){return V(r,m,this)};var S=function(r){return r.$u?g.utc():g()};f.toNow=function(r){return this.to(S(this),r)},f.fromNow=function(r){return this.from(S(this),r)}}})})(q);var gt=q.exports;const Mt=U(gt);W.extend(pt);W.extend(Mt);export{St as _};