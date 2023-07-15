import{d as h,m}from"./vue-9ef19677.js";import{a6 as p,aw as y,Q as o,s as f,t as c,I as u,A as i,B as r,a as _,_ as d,x as n,y as l,r as b,b6 as v,b7 as x,b8 as C,E as S,D as w}from"./index-59ce2143.js";import{_ as k}from"./VDataTable-fdf56192.js";import{F as P}from"./FullScreenModal-bced8cbb.js";import{_ as T}from"./VContainer-2517b3b2.js";import{_ as q,a as R,b as F,c as M}from"./VTabItem-c6994cd7.js";const $=h({name:"SearchTab",mixins:[p],data(){return{headers:[{text:"Filename",value:"fileName"},{text:"File Size",value:"fileSize"},{text:"Seeders",value:"nbSeeders"},{text:"Leechers",value:"nbLeechers"},{text:"Site URL",value:"siteUrl"},{text:"",value:"actions",sortable:!1}],searchPattern:"",searchCategory:"all",searchPlugin:"enabled",queryId:0,queryTimer:NaN,queryResults:[],resultFilter:"",mdiDownload:y}},async beforeDestroy(){await this.stopSearch()},computed:{...m(["getSearchPlugins"]),categories(){const a=[{text:"Movies",value:"movies"},{text:"TV shows",value:"tv"},{text:"Music",value:"music"},{text:"Games",value:"games"},{text:"Anime",value:"anime"},{text:"Software",value:"software"},{text:"Pictures",value:"pictures"},{text:"Books",value:"books"}];return a.sort((e,t)=>e.text.localeCompare(t.text)),[{text:"All categories",value:"all"},...a]},plugins(){const a=[{text:"All plugins",value:"all"},{text:"Only enabled",value:"enabled"}];return this.getSearchPlugins().filter(e=>e.enabled).forEach(e=>a.push({text:e.fullName,value:e.name})),a},filteredResults(){return this.queryResults}},methods:{downloadTorrent(a){this.createModal("AddModal",{initialMagnet:a.fileUrl})},async runNewSearch(){const a=await o.startSearch(this.searchPattern,this.searchCategory,[this.searchPlugin]);this.queryId=a.id,this.queryResults=[],this.queryTimer=setInterval(()=>this.refreshResults(),1e3)},async stopSearch(){this.queryId!==0&&await o.stopSearch(this.queryId),this.queryId=0,clearInterval(this.queryTimer)},customFilter(a,e){return a!=null&&e!=null&&typeof a=="string"&&e.trim().toLowerCase().split(" ").every(t=>a.toString().toLowerCase().indexOf(t)!==-1)},async refreshResults(){const a=await o.getSearchResults(this.queryId,this.queryResults.length);this.queryResults.push(...a.results),a.status==="Stopped"&&(this.queryId=0,await this.stopSearch())}}});var I=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[t(c,{attrs:{flat:""}},[t(u,{staticClass:"searchCriterias"},[t(i,{staticClass:"my-2"},[t(r,{attrs:{cols:"12",md:"6"}},[t(_,{attrs:{dense:"","hide-details":"",clearable:"",rules:[s=>!!s||"Search term is required"],label:"Search pattern"},on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:(s.preventDefault(),e.runNewSearch.apply(null,arguments))}},model:{value:e.searchPattern,callback:function(s){e.searchPattern=s},expression:"searchPattern"}})],1),t(r,{attrs:{cols:"6",sm:"5",md:"2"}},[t(d,{attrs:{height:"1",flat:"",dense:"","hide-details":"",outlined:"",items:e.categories,label:"Search category"},model:{value:e.searchCategory,callback:function(s){e.searchCategory=s},expression:"searchCategory"}})],1),t(r,{attrs:{cols:"6",sm:"5",md:"2"}},[t(d,{attrs:{height:"1",flat:"",dense:"","hide-details":"",outlined:"",items:e.plugins,label:"Search plugins"},model:{value:e.searchPlugin,callback:function(s){e.searchPlugin=s},expression:"searchPlugin"}})],1),t(r,{staticClass:"d-flex align-center justify-center",attrs:{cols:"12",sm:"2"}},[e.queryId===0?t(n,{staticClass:"mx-auto accent white--text elevation-0 px-4",on:{click:e.runNewSearch}},[e._v(" "+e._s(e.$t("search.runNewSearch"))+" ")]):t(n,{staticClass:"mx-auto warning white--text elevation-0 px-4",on:{click:e.stopSearch}},[e._v(" "+e._s(e.$t("search.stopSearch"))+" ")])],1)],1)],1)],1),t(c,{staticClass:"mt-5",attrs:{flat:""}},[t(u,{staticClass:"searchResults"},[t(k,{staticStyle:{width:"100%"},attrs:{id:"searchResultsTable",headers:e.headers,items:e.filteredResults,search:e.resultFilter,"custom-filter":e.customFilter},scopedSlots:e._u([{key:"top",fn:function(){return[t(i,{staticClass:"mt-2"},[t(r,{attrs:{cols:"12",md:"6"}},[t(_,{attrs:{dense:"","hide-details":"",label:"Filter"},model:{value:e.resultFilter,callback:function(s){e.resultFilter=s},expression:"resultFilter"}})],1)],1)]},proxy:!0},{key:"item.fileSize",fn:function({item:s}){return[e._v(" "+e._s(e._f("formatSize")(s.fileSize))+" ")]}},{key:"item.actions",fn:function({item:s}){return[t("span",{staticClass:"d-flex flex-row"},[t(l,{on:{click:function(D){return e.downloadTorrent(s)}}},[e._v(e._s(e.mdiDownload))])],1)]}}])})],1)],1)],1)},N=[],E=f($,I,N,!1,null,"8bb52b3d",null,null);const g=E.exports,L=h({name:"SearchEngine",components:{SearchTab:g},mixins:[p,P],data(){return{tabs:[],tabCount:0,mdiClose:b,mdiToyBrick:v,mdiPlusCircleOutline:x,mdiMinusCircleOutline:C}},async mounted(){await this.$store.dispatch("FETCH_SEARCH_PLUGINS"),document.addEventListener("keydown",this.handleKeyboardShortcut),this.createNewTab()},async beforeDestroy(){document.removeEventListener("keydown",this.handleKeyboardShortcut)},computed:{...m(["getModals"])},methods:{openPluginManager(){this.createModal("SearchPluginManager")},createNewTab(){this.tabs.push({id:this.tabCount++,value:`tab-${this.tabCount}`})},deleteTab(){this.tabs.find((a,e)=>a.value===this.tab?(this.tabs.splice(e,1),!0):!1)},close(){this.$router.back()},handleKeyboardShortcut(a){a.key==="Escape"&&this.getModals().length===0&&this.close()}}});var z=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"px-1 px-sm-5 background noselect"},[t(i,{staticClass:"grey--text",attrs:{"no-gutters":"",align:"center",justify:"center"}},[t(r,[t("h1",{staticClass:"subtitle-1 ml-2",staticStyle:{"font-size":"1.6em !important"}},[e._v(" "+e._s(e.$t("search.title"))+" ")])]),t(r,{staticClass:"align-center justify-center"},[t(S,{staticClass:"justify-end"},[t(n,{attrs:{small:"",elevation:"0",color:"primary"},on:{click:e.openPluginManager}},[t(l,[e._v(e._s(e.mdiToyBrick))])],1),t(n,{attrs:{small:"",elevation:"0"},on:{click:e.close}},[t(l,[e._v(e._s(e.mdiClose))])],1)],1)],1)],1),t(i,{staticClass:"ma-0 pa-0"},[t(T,{staticClass:"d-flex align-center justify-center ma-0 pa-0 primary",attrs:{fluid:""}},[t(q,{staticClass:"overflow-auto",attrs:{"align-with-title":"","show-arrows":"","background-color":"primary","slider-color":"white"},model:{value:e.tab,callback:function(s){e.tab=s},expression:"tab"}},e._l(e.tabs,function(s){return t(R,{staticClass:"white--text",attrs:{href:`#${s.value}`}},[t("h4",[e._v(e._s(e.$t("search.tabHeaderTemplate").replace("$0",s.id)))])])}),1),t(w),t(n,{staticClass:"mr-1",attrs:{icon:""},on:{click:e.createNewTab}},[t(l,{attrs:{color:"accent"}},[e._v(e._s(e.mdiPlusCircleOutline))])],1),t(n,{staticClass:"mx-1",attrs:{icon:"",disabled:e.tabs.length===0},on:{click:e.deleteTab}},[t(l,{attrs:{color:"error"}},[e._v(e._s(e.mdiMinusCircleOutline))])],1)],1),t(F,{staticClass:"full-width",attrs:{touchless:""},model:{value:e.tab,callback:function(s){e.tab=s},expression:"tab"}},e._l(e.tabs,function(s){return t(M,{key:s.id,attrs:{eager:"",value:s.value}},[t(g)],1)}),1)],1)],1)},A=[],O=f(L,z,A,!1,null,"670399c1",null,null);const Q=O.exports;export{Q as default};
