import{D as c,n}from"./TorrentDetail-C6T79jHi.js";class l{constructor(a){this._canvasPool=Object.create(null),this.canvasOptions=a||{},this.enableFullScreen=!1}_createCanvasAndContext(a,s){const t=c.get().createCanvas();t.width=a,t.height=s;const o=t.getContext("2d");return{canvas:t,context:o}}getOptimalCanvasAndContext(a,s,t=1){a=Math.ceil(a*t-1e-6),s=Math.ceil(s*t-1e-6),a=n(a),s=n(s);const o=(a<<17)+(s<<1);this._canvasPool[o]||(this._canvasPool[o]=[]);let e=this._canvasPool[o].pop();return e||(e=this._createCanvasAndContext(a,s)),e}returnCanvasAndContext(a){const s=a.canvas,{width:t,height:o}=s,e=(t<<17)+(o<<1);this._canvasPool[e].push(a)}clear(){this._canvasPool={}}}const C=new l;export{C};
