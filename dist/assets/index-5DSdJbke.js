import{y as Wn,a0 as me,Z as Fn,T as Hn,a2 as zn,a1 as Qn,a9 as Jn,a8 as Vn,ab as Gn,aa as Yn,ad as Kn,ac as Zn,af as Xn,ae as er,s as tr,ag as nr,aC as rr,z as or,aD as ir,r as sr,R as ht,o as ar,c as ft}from"./index-BADlssIg.js";import{r as cr,b as lr,g as ur,i as dr,h as hr,s as fr,n as _r,m as pr,c as Q,o as gr,a as Ke,f as mr}from"./index.es-BdTL45zp.js";import{C as A,l as v,k as x,S as U,F as O,d as te,A as we,h as ye,T as ve,_ as J,a as be,g as Ee,y as ne,P as Se,x as Ce,q as ke,M as _t,X as pt,W as wr,R as Z,U as yr,b as vr}from"./hooks.module-BbEf5RMW.js";class Ze extends cr{constructor(e){super(e),this.events=new Wn.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(lr(e.method,e.params||[],e.id||ur().toString()),n)}async requestStrict(e,n){return new Promise(async(r,o)=>{if(!this.connection.connected)try{await this.open()}catch(s){o(s)}this.events.on(`${e.id}`,s=>{dr(s)?o(s.error):r(s.result)});try{await this.connection.send(e,n)}catch(s){o(s)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),hr(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}const le="Session currently connected",q="Session currently disconnected",br="Session Rejected",Er="Missing JSON RPC response",Sr='JSON-RPC success response must include "result" field',Cr='JSON-RPC error response must include "error" field',kr='JSON RPC request must have valid "method" value',xr='JSON RPC request must have valid "id" value',Ir="Missing one of the required parameters: bridge / uri / session",Xe="JSON RPC response format is invalid",Rr="URI format is invalid",Tr="QRCode Modal not provided",et="User close QRCode Modal",Or=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],Nr=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],xe=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...Nr],he="WALLETCONNECT_DEEPLINK_CHOICE",Mr={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var gt=Ie;Ie.strict=mt;Ie.loose=wt;var Lr=Object.prototype.toString,qr={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function Ie(t){return mt(t)||wt(t)}function mt(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function wt(t){return qr[Lr.call(t)]}const Ar=me(gt);var Ur=gt.strict,Pr=function(e){if(Ur(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const Dr=me(Pr),Re="hex",Te="utf8",$r="binary",jr="buffer",Br="array",Wr="typed-array",Fr="array-buffer",re="0";function j(t){return new Uint8Array(t)}function Oe(t,e=!1){const n=t.toString(Re);return e?V(n):n}function Ne(t){return t.toString(Te)}function yt(t){return t.readUIntBE(0,t.length)}function W(t){return Dr(t)}function N(t,e=!1){return Oe(W(t),e)}function vt(t){return Ne(W(t))}function bt(t){return yt(W(t))}function Me(t){return Buffer.from(B(t),Re)}function M(t){return j(Me(t))}function Hr(t){return Ne(Me(t))}function zr(t){return bt(M(t))}function Le(t){return Buffer.from(t,Te)}function Et(t){return j(Le(t))}function Qr(t,e=!1){return Oe(Le(t),e)}function Jr(t){const e=parseInt(t,10);return ho(uo(e),"Number can only safely store up to 53 bits"),e}function Vr(t){return Zr(qe(t))}function Gr(t){return Ae(qe(t))}function Yr(t,e){return Xr(qe(t),e)}function Kr(t){return`${t}`}function qe(t){const e=(t>>>0).toString(2);return Pe(e)}function Zr(t){return W(Ae(t))}function Ae(t){return new Uint8Array(io(t).map(e=>parseInt(e,2)))}function Xr(t,e){return N(Ae(t),e)}function eo(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function St(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function oe(t){return Buffer.isBuffer(t)}function Ue(t){return Ar.strict(t)&&!oe(t)}function Ct(t){return!Ue(t)&&!oe(t)&&typeof t.byteLength<"u"}function to(t){return oe(t)?jr:Ue(t)?Wr:Ct(t)?Fr:Array.isArray(t)?Br:typeof t}function no(t){return eo(t)?$r:St(t)?Re:Te}function ro(...t){return Buffer.concat(t)}function kt(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function oo(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function io(t,e=8){const n=Pe(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function Pe(t,e=8,n=re){return so(t,oo(t.length,e),n)}function so(t,e,n=re){return fo(t,e,!0,n)}function B(t){return t.replace(/^0x/,"")}function V(t){return t.startsWith("0x")?t:`0x${t}`}function ao(t){return t=B(t),t=Pe(t,2),t&&(t=V(t)),t}function co(t){const e=t.startsWith("0x");return t=B(t),t=t.startsWith(re)?t.substring(1):t,e?V(t):t}function lo(t){return typeof t>"u"}function uo(t){return!lo(t)}function ho(t,e){if(!t)throw new Error(e)}function fo(t,e,n,r=re){const o=e-t.length;let s=t;return o>0&&(s=r.repeat(o)+t),s}function X(t){return W(new Uint8Array(t))}function _o(t){return vt(new Uint8Array(t))}function xt(t,e){return N(new Uint8Array(t),!e)}function po(t){return bt(new Uint8Array(t))}function go(...t){return M(t.map(e=>N(new Uint8Array(e))).join("")).buffer}function It(t){return j(t).buffer}function mo(t){return Ne(t)}function wo(t,e){return Oe(t,!e)}function yo(t){return yt(t)}function vo(...t){return ro(...t)}function bo(t){return Et(t).buffer}function Eo(t){return Le(t)}function So(t,e){return Qr(t,!e)}function Co(t){return Jr(t)}function ko(t){return Me(t)}function Rt(t){return M(t).buffer}function xo(t){return Hr(t)}function Io(t){return zr(t)}function Ro(t){return Vr(t)}function To(t){return Gr(t).buffer}function Oo(t){return Kr(t)}function Tt(t,e){return Yr(Number(t),!e)}const No=Jn,Mo=Vn,Lo=Qn,qo=zn,Ao=er,Ot=Xn,Uo=Zn,Nt=Kn,Po=Hn,Do=Fn,$o=Yn,ie=Gn;function se(t){return tr(t)}function ae(){const t=se();return t&&t.os?t.os:void 0}function Mt(){const t=ae();return t?t.toLowerCase().includes("android"):!1}function Lt(){const t=ae();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function qt(){return ae()?Mt()||Lt():!1}function At(){const t=se();return t&&t.name?t.name.toLowerCase()==="node":!1}function Ut(){return!At()&&!!Ot()}const Pt=fr,Dt=_r;function De(t,e){const n=Dt(e),r=ie();r&&r.setItem(t,n)}function $e(t){let e=null,n=null;const r=ie();return r&&(n=r.getItem(t)),e=n&&Pt(n),e}function je(t){const e=ie();e&&e.removeItem(t)}function fe(){return nr()}function jo(t){return ao(t)}function Bo(t){return V(t)}function Wo(t){return B(t)}function Fo(t){return co(V(t))}const $t=pr;function K(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Ho(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function jt(t,e){let n;const r=Mr[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function Bt(t,e){let n;const r=jt(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function zo(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Qo(t){const e=t.href.split("?")[0];De(he,Object.assign(Object.assign({},t),{href:e}))}function Wt(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Jo(t,e){let n=t;return e&&(n=e.map(r=>Wt(t,r)).filter(Boolean)),n}function Vo(t,e){return async(...r)=>new Promise((o,s)=>{const u=(h,_)=>{(h===null||typeof h>"u")&&s(h),o(_)};t.apply(e,[...r,u])})}function Ft(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const Ht="https://registry.walletconnect.com";function Go(){return Ht+"/api/v2/wallets"}function Yo(){return Ht+"/api/v2/dapps"}function zt(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function Ko(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>zt(n,e))}var Be={};(function(t){const e=ir,n=sr,r=rr,o=or,s=i=>i==null;function u(i){switch(i.arrayFormat){case"index":return a=>(d,c)=>{const f=d.length;return c===void 0||i.skipNull&&c===null||i.skipEmptyString&&c===""?d:c===null?[...d,[p(a,i),"[",f,"]"].join("")]:[...d,[p(a,i),"[",p(f,i),"]=",p(c,i)].join("")]};case"bracket":return a=>(d,c)=>c===void 0||i.skipNull&&c===null||i.skipEmptyString&&c===""?d:c===null?[...d,[p(a,i),"[]"].join("")]:[...d,[p(a,i),"[]=",p(c,i)].join("")];case"comma":case"separator":return a=>(d,c)=>c==null||c.length===0?d:d.length===0?[[p(a,i),"=",p(c,i)].join("")]:[[d,p(c,i)].join(i.arrayFormatSeparator)];default:return a=>(d,c)=>c===void 0||i.skipNull&&c===null||i.skipEmptyString&&c===""?d:c===null?[...d,p(a,i)]:[...d,[p(a,i),"=",p(c,i)].join("")]}}function h(i){let a;switch(i.arrayFormat){case"index":return(d,c,f)=>{if(a=/\[(\d*)\]$/.exec(d),d=d.replace(/\[\d*\]$/,""),!a){f[d]=c;return}f[d]===void 0&&(f[d]={}),f[d][a[1]]=c};case"bracket":return(d,c,f)=>{if(a=/(\[\])$/.exec(d),d=d.replace(/\[\]$/,""),!a){f[d]=c;return}if(f[d]===void 0){f[d]=[c];return}f[d]=[].concat(f[d],c)};case"comma":case"separator":return(d,c,f)=>{const m=typeof c=="string"&&c.includes(i.arrayFormatSeparator),g=typeof c=="string"&&!m&&w(c,i).includes(i.arrayFormatSeparator);c=g?w(c,i):c;const E=m||g?c.split(i.arrayFormatSeparator).map(T=>w(T,i)):c===null?c:w(c,i);f[d]=E};default:return(d,c,f)=>{if(f[d]===void 0){f[d]=c;return}f[d]=[].concat(f[d],c)}}}function _(i){if(typeof i!="string"||i.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function p(i,a){return a.encode?a.strict?e(i):encodeURIComponent(i):i}function w(i,a){return a.decode?n(i):i}function y(i){return Array.isArray(i)?i.sort():typeof i=="object"?y(Object.keys(i)).sort((a,d)=>Number(a)-Number(d)).map(a=>i[a]):i}function b(i){const a=i.indexOf("#");return a!==-1&&(i=i.slice(0,a)),i}function C(i){let a="";const d=i.indexOf("#");return d!==-1&&(a=i.slice(d)),a}function k(i){i=b(i);const a=i.indexOf("?");return a===-1?"":i.slice(a+1)}function I(i,a){return a.parseNumbers&&!Number.isNaN(Number(i))&&typeof i=="string"&&i.trim()!==""?i=Number(i):a.parseBooleans&&i!==null&&(i.toLowerCase()==="true"||i.toLowerCase()==="false")&&(i=i.toLowerCase()==="true"),i}function R(i,a){a=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},a),_(a.arrayFormatSeparator);const d=h(a),c=Object.create(null);if(typeof i!="string"||(i=i.trim().replace(/^[?#&]/,""),!i))return c;for(const f of i.split("&")){if(f==="")continue;let[m,g]=r(a.decode?f.replace(/\+/g," "):f,"=");g=g===void 0?null:["comma","separator"].includes(a.arrayFormat)?g:w(g,a),d(w(m,a),g,c)}for(const f of Object.keys(c)){const m=c[f];if(typeof m=="object"&&m!==null)for(const g of Object.keys(m))m[g]=I(m[g],a);else c[f]=I(m,a)}return a.sort===!1?c:(a.sort===!0?Object.keys(c).sort():Object.keys(c).sort(a.sort)).reduce((f,m)=>{const g=c[m];return g&&typeof g=="object"&&!Array.isArray(g)?f[m]=y(g):f[m]=g,f},Object.create(null))}t.extract=k,t.parse=R,t.stringify=(i,a)=>{if(!i)return"";a=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},a),_(a.arrayFormatSeparator);const d=g=>a.skipNull&&s(i[g])||a.skipEmptyString&&i[g]==="",c=u(a),f={};for(const g of Object.keys(i))d(g)||(f[g]=i[g]);const m=Object.keys(f);return a.sort!==!1&&m.sort(a.sort),m.map(g=>{const E=i[g];return E===void 0?"":E===null?p(g,a):Array.isArray(E)?E.reduce(c(g),[]).join("&"):p(g,a)+"="+p(E,a)}).filter(g=>g.length>0).join("&")},t.parseUrl=(i,a)=>{a=Object.assign({decode:!0},a);const[d,c]=r(i,"#");return Object.assign({url:d.split("?")[0]||"",query:R(k(i),a)},a&&a.parseFragmentIdentifier&&c?{fragmentIdentifier:w(c,a)}:{})},t.stringifyUrl=(i,a)=>{a=Object.assign({encode:!0,strict:!0},a);const d=b(i.url).split("?")[0]||"",c=t.extract(i.url),f=t.parse(c,{sort:!1}),m=Object.assign(f,i.query);let g=t.stringify(m,a);g&&(g=`?${g}`);let E=C(i.url);return i.fragmentIdentifier&&(E=`#${p(i.fragmentIdentifier,a)}`),`${d}${g}${E}`},t.pick=(i,a,d)=>{d=Object.assign({parseFragmentIdentifier:!0},d);const{url:c,query:f,fragmentIdentifier:m}=t.parseUrl(i,d);return t.stringifyUrl({url:c,query:o(f,a),fragmentIdentifier:m},d)},t.exclude=(i,a,d)=>{const c=Array.isArray(a)?f=>!a.includes(f):(f,m)=>!a(f,m);return t.pick(i,c,d)}})(Be);function Qt(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Jt(t,e){let n=We(t);return n=Object.assign(Object.assign({},n),e),t=Vt(n),t}function We(t){return Be.parse(t)}function Vt(t){return Be.stringify(t)}function Gt(t){return typeof t.bridge<"u"}function Yt(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function s(y){const C=y.split("@");return{handshakeTopic:C[0],version:parseInt(C[1],10)}}const u=s(o),h=typeof n<"u"?t.substr(n):"";function _(y){const b=We(y);return{key:b.key||"",bridge:b.bridge||""}}const p=_(h);return Object.assign(Object.assign({protocol:r},u),p)}function Zo(t){return t===""||typeof t=="string"&&t.trim()===""}function Xo(t){return!(t&&t.length)}function ei(t){return oe(t)}function ti(t){return Ue(t)}function ni(t){return Ct(t)}function ri(t){return to(t)}function oi(t){return no(t)}function ii(t,e){return St(t,e)}function si(t){return typeof t.params=="object"}function Kt(t){return typeof t.method<"u"}function D(t){return typeof t.result<"u"}function z(t){return typeof t.error<"u"}function _e(t){return typeof t.event<"u"}function Zt(t){return Or.includes(t)||t.startsWith("wc_")}function Xt(t){return t.method.startsWith("wc_")?!0:!xe.includes(t.method)}const ai=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Bo,appendToQueryString:Jt,concatArrayBuffers:go,concatBuffers:vo,convertArrayBufferToBuffer:X,convertArrayBufferToHex:xt,convertArrayBufferToNumber:po,convertArrayBufferToUtf8:_o,convertBufferToArrayBuffer:It,convertBufferToHex:wo,convertBufferToNumber:yo,convertBufferToUtf8:mo,convertHexToArrayBuffer:Rt,convertHexToBuffer:ko,convertHexToNumber:Io,convertHexToUtf8:xo,convertNumberToArrayBuffer:To,convertNumberToBuffer:Ro,convertNumberToHex:Tt,convertNumberToUtf8:Oo,convertUtf8ToArrayBuffer:bo,convertUtf8ToBuffer:Eo,convertUtf8ToHex:So,convertUtf8ToNumber:Co,detectEnv:se,detectOS:ae,formatIOSMobile:zo,formatMobileRegistry:Ko,formatMobileRegistryEntry:zt,formatQueryString:Vt,formatRpcError:Ft,getClientMeta:fe,getCrypto:Do,getCryptoOrThrow:Po,getDappRegistryUrl:Yo,getDocument:qo,getDocumentOrThrow:Lo,getEncoding:oi,getFromWindow:No,getFromWindowOrThrow:Mo,getInfuraRpcUrl:jt,getLocal:$e,getLocalStorage:ie,getLocalStorageOrThrow:$o,getLocation:Nt,getLocationOrThrow:Uo,getMobileLinkRegistry:Jo,getMobileRegistryEntry:Wt,getNavigator:Ot,getNavigatorOrThrow:Ao,getQueryString:Qt,getRpcUrl:Bt,getType:ri,getWalletRegistryUrl:Go,isAndroid:Mt,isArrayBuffer:ni,isBrowser:Ut,isBuffer:ei,isEmptyArray:Xo,isEmptyString:Zo,isHexString:ii,isIOS:Lt,isInternalEvent:_e,isJsonRpcRequest:Kt,isJsonRpcResponseError:z,isJsonRpcResponseSuccess:D,isJsonRpcSubscription:si,isMobile:qt,isNode:At,isReservedEvent:Zt,isSilentPayload:Xt,isTypedArray:ti,isWalletConnectSession:Gt,logDeprecationWarning:Ho,parseQueryString:We,parseWalletConnectUri:Yt,payloadId:$t,promisify:Vo,removeHexLeadingZeros:Fo,removeHexPrefix:Wo,removeLocal:je,safeJsonParse:Pt,safeJsonStringify:Dt,sanitizeHex:jo,saveMobileLinkInfo:Qo,setLocal:De,uuid:K},Symbol.toStringTag,{value:"Module"}));class ci{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const li=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class ui{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new ci,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=di(this._url,this._protocol,this._version);if(this._nextSocket=new li(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function di(t,e,n){var r,o;const u=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),h=Ut()?{protocol:e,version:n,env:"browser",host:((r=Nt())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=se())===null||o===void 0?void 0:o.name)||""},_=Jt(Qt(u[1]||""),h);return u[0]+"?"+_}class hi{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;Kt(e)?r=e.method:D(e)||z(e)?r=`response:${e.id}`:_e(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!Zt(r)&&!_e(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(z(e)){const s=new Error(e.error.message);o.callback(s,null)}else o.callback(null,e)})}}class fi{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=$e(this.storageId);return n&&Gt(n)&&(e=n),e}setSession(e){return De(this.storageId,e),e}removeSession(){je(this.storageId)}}const _i="walletconnect.org",pi="abcdefghijklmnopqrstuvwxyz0123456789",en=pi.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function gi(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function mi(t){return gi(t).split(".").slice(-2).join(".")}function wi(){return Math.floor(Math.random()*en.length)}function yi(){return en[wi()]}function vi(t){return mi(t)===_i}function bi(t){return vi(t)?yi():t}class Ei{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new hi,this._clientMeta=fe()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new fi(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...xe,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(Ir);e.connectorOpts.bridge&&(this.bridge=bi(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new ui({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=Rt(e);this._key=n}get key(){return this._key?xt(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=K()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=fe()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=K(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(et)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(Tr);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(et))),this.on("connect",(o,s)=>{if(o)return r(o);n(s.params[0])})}))}async createSession(e){if(this._connected)throw new Error(le);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=K(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(le);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(le);const n=e&&e.message?e.message:br,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(q);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(q);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(q);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(q);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(q);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(q);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(s,u)=>{if(s){o(s);return}if(!u)throw new Error(Er);r(u)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(q);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return Tt(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(D(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(Sr)}rejectRequest(e){if(z(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(Cr)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),s=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,u=JSON.stringify(o),h=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:Xt(r);this._transport.send(u,s,h)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n);this._transport.send(o,r,!0)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(kr);return{id:typeof e.id>"u"?$t():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(xr);const n={id:e.id,jsonrpc:"2.0"};if(z(e)){const r=Ft(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(D(e))return Object.assign(Object.assign({},n),e);throw new Error(Xe)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),je(he)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}D(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,s)=>{if(o){r(o);return}D(s)?n(s.result):s.error&&s.error.message?r(s.error):r(new Error(Xe))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(qt()&&this._signingMethods.includes(r.method)){const o=$e(he);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),s=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${s}`}_parseUri(e){const n=Yt(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const s=n.key;return{handshakeTopic:r,bridge:o,key:s}}else throw new Error(Rr)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const s=o.params[0].peerMeta.name;n.peerName=s}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function Si(t){return Q.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const tn=256,nn=tn,Ci=tn,L="AES-CBC",ki=`SHA-${nn}`,pe="HMAC",xi="encrypt",Ii="decrypt",Ri="sign",Ti="verify";function Oi(t){return t===L?{length:nn,name:L}:{hash:{name:ki},name:pe}}function Ni(t){return t===L?[xi,Ii]:[Ri,Ti]}async function Fe(t,e=L){return Q.getSubtleCrypto().importKey("raw",t,Oi(e),!0,Ni(e))}async function Mi(t,e,n){const r=Q.getSubtleCrypto(),o=await Fe(e,L),s=await r.encrypt({iv:t,name:L},o,n);return new Uint8Array(s)}async function Li(t,e,n){const r=Q.getSubtleCrypto(),o=await Fe(e,L),s=await r.decrypt({iv:t,name:L},o,n);return new Uint8Array(s)}async function qi(t,e){const n=Q.getSubtleCrypto(),r=await Fe(t,pe),o=await n.sign({length:Ci,name:pe},r,e);return new Uint8Array(o)}function Ai(t,e,n){return Mi(t,e,n)}function Ui(t,e,n){return Li(t,e,n)}async function rn(t,e){return await qi(t,e)}async function on(t){const e=(t||256)/8,n=Si(e);return It(W(n))}async function sn(t,e){const n=M(t.data),r=M(t.iv),o=M(t.hmac),s=N(o,!1),u=kt(n,r),h=await rn(e,u),_=N(h,!1);return B(s)===B(_)}async function Pi(t,e,n){const r=j(X(e)),o=n||await on(128),s=j(X(o)),u=N(s,!1),h=JSON.stringify(t),_=Et(h),p=await Ai(s,r,_),w=N(p,!1),y=kt(p,s),b=await rn(r,y),C=N(b,!1);return{data:w,hmac:C,iv:u}}async function Di(t,e){const n=j(X(e));if(!n)throw new Error("Missing key: required for decryption");if(!await sn(t,n))return null;const o=M(t.data),s=M(t.iv),u=await Ui(s,n,o),h=vt(u);let _;try{_=JSON.parse(h)}catch{return null}return _}const $i=Object.freeze(Object.defineProperty({__proto__:null,decrypt:Di,encrypt:Pi,generateKey:on,verifyHmac:sn},Symbol.toStringTag,{value:"Module"}));class ji extends Ei{constructor(e,n){super({cryptoLib:$i,connectorOpts:e,pushServerOpts:n})}}const Bi=ht(ai);var Wi=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(o){t.addRange(o)}),e&&e.focus()}},Fi=Wi,tt={"text/plain":"Text","text/html":"Url",default:"Text"},Hi="Copy to clipboard: #{key}, Enter";function zi(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Qi(t,e){var n,r,o,s,u,h,_=!1;e||(e={}),n=e.debug||!1;try{o=Fi(),s=document.createRange(),u=document.getSelection(),h=document.createElement("span"),h.textContent=t,h.ariaHidden="true",h.style.all="unset",h.style.position="fixed",h.style.top=0,h.style.clip="rect(0, 0, 0, 0)",h.style.whiteSpace="pre",h.style.webkitUserSelect="text",h.style.MozUserSelect="text",h.style.msUserSelect="text",h.style.userSelect="text",h.addEventListener("copy",function(w){if(w.stopPropagation(),e.format)if(w.preventDefault(),typeof w.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=tt[e.format]||tt.default;window.clipboardData.setData(y,t)}else w.clipboardData.clearData(),w.clipboardData.setData(e.format,t);e.onCopy&&(w.preventDefault(),e.onCopy(w.clipboardData))}),document.body.appendChild(h),s.selectNodeContents(h),u.addRange(s);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");_=!0}catch(w){n&&console.error("unable to copy using execCommand: ",w),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),_=!0}catch(y){n&&console.error("unable to copy using clipboardData: ",y),n&&console.error("falling back to prompt"),r=zi("message"in e?e.message:Hi),window.prompt(r,t)}}finally{u&&(typeof u.removeRange=="function"?u.removeRange(s):u.removeAllRanges()),h&&document.body.removeChild(h),o()}return _}var Ji=Qi;function an(t,e){for(var n in e)t[n]=e[n];return t}function ge(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function He(t,e){var n=e(),r=te({t:{__:n,u:e}}),o=r[0].t,s=r[1];return J(function(){o.__=n,o.u=e,ue(o)&&s({t:o})},[t,n,e]),ne(function(){return ue(o)&&s({t:o}),t(function(){ue(o)&&s({t:o})})},[t]),n}function ue(t){try{return!((e=t.__)===(n=t.u())&&(e!==0||1/e==1/n)||e!=e&&n!=n)}catch{return!0}var e,n}function ze(t){t()}function Qe(t){return t}function Je(){return[!1,ze]}var Ve=J;function ee(t,e){this.props=t,this.context=e}function cn(t,e){function n(o){var s=this.props.ref;return s!=o.ref&&s&&(typeof s=="function"?s(null):s.current=null),e?!e(this.props,o)||s!=o.ref:ge(this.props,o)}function r(o){return this.shouldComponentUpdate=n,x(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.__f=r.prototype.isReactComponent=!0,r.type=t,r}(ee.prototype=new A).isPureReactComponent=!0,ee.prototype.shouldComponentUpdate=function(t,e){return ge(this.props,t)||ge(this.state,e)};var nt=v.__b;v.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),nt&&nt(t)};var Vi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ln(t){function e(n){var r=an({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Vi,e.render=t,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var rt=function(t,e){return t==null?null:O(O(t).map(e))},un={map:rt,forEach:rt,count:function(t){return t?O(t).length:0},only:function(t){var e=O(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:O},Gi=v.__e;v.__e=function(t,e,n,r){if(t.then){for(var o,s=e;s=s.__;)if((o=s.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}Gi(t,e,n,r)};var ot=v.unmount;function dn(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=an({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return dn(r,e,n)})),t}function hn(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return hn(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function H(){this.__u=0,this.o=null,this.__b=null}function fn(t){var e=t.__&&t.__.__c;return e&&e.__a&&e.__a(t)}function _n(t){var e,n,r,o=null;function s(u){if(e||(e=t()).then(function(h){h&&(o=h.default||h),r=!0},function(h){n=h,r=!0}),n)throw n;if(!r)throw e;return o?x(o,u):null}return s.displayName="Lazy",s.__f=!0,s}function $(){this.i=null,this.l=null}v.unmount=function(t){var e=t.__c;e&&(e.__z=!0),e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),ot&&ot(t)},(H.prototype=new A).__c=function(t,e){var n=e.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var o=fn(r.__v),s=!1,u=function(){s||r.__z||(s=!0,n.__R=null,o?o(_):_())};n.__R=u;var h=n.__P;n.__P=null;var _=function(){if(!--r.__u){if(r.state.__a){var p=r.state.__a;r.__v.__k[0]=hn(p,p.__c.__P,p.__c.__O)}var w;for(r.setState({__a:r.__b=null});w=r.o.pop();)w.__P=h,w.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(u,u)},H.prototype.componentWillUnmount=function(){this.o=[]},H.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=dn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&x(U,null,t.fallback);return o&&(o.__u&=-33),[x(U,null,e.__a?null:t.children),o]};var it=function(t,e,n){if(++n[1]===n[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(n=t.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.i=n=n[2]}};function Yi(t){return this.getChildContext=function(){return t.context},t.children}function Ki(t){var e=this,n=t.h;if(e.componentWillUnmount=function(){Z(null,e.v),e.v=null,e.h=null},e.h&&e.h!==n&&e.componentWillUnmount(),!e.v){for(var r=e.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;e.h=n,e.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},namespaceURI:n.namespaceURI,insertBefore:function(o,s){this.childNodes.push(o),e.h.insertBefore(o,s)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),e.h.removeChild(o)}}}Z(x(Yi,{context:e.context},t.__v),e.v)}function pn(t,e){var n=x(Ki,{__v:t,h:e});return n.containerInfo=e,n}($.prototype=new A).__a=function(t){var e=this,n=fn(e.__v),r=e.l.get(t);return r[0]++,function(o){var s=function(){e.props.revealOrder?(r.push(o),it(e,t,r)):o()};n?n(s):s()}},$.prototype.render=function(t){this.i=null,this.l=new Map;var e=O(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.l.set(e[n],this.i=[1,0,this.i]);return t.children},$.prototype.componentDidUpdate=$.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,n){it(t,n,e)})};var gn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Zi=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Xi=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,es=/[A-Z0-9]/g,ts=typeof document<"u",ns=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function mn(t,e,n){return e.__k==null&&(e.textContent=""),Z(t,e),typeof n=="function"&&n(),t?t.__c:null}function wn(t,e,n){return yr(t,e),typeof n=="function"&&n(),t?t.__c:null}A.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(A.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var st=v.event;v.event=function(t){return st&&(t=st(t)),t.persist=function(){},t.isPropagationStopped=function(){return this.cancelBubble},t.isDefaultPrevented=function(){return this.defaultPrevented},t.nativeEvent=t};var Ge,rs={configurable:!0,get:function(){return this.class}},at=v.vnode;v.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={},s=r.indexOf("-")==-1;for(var u in n){var h=n[u];if(!(u==="value"&&"defaultValue"in n&&h==null||ts&&u==="children"&&r==="noscript"||u==="class"||u==="className")){var _=u.toLowerCase();u==="defaultValue"&&"value"in n&&n.value==null?u="value":u==="download"&&h===!0?h="":_==="translate"&&h==="no"?h=!1:_[0]==="o"&&_[1]==="n"?_==="ondoubleclick"?u="ondblclick":_!=="onchange"||r!=="input"&&r!=="textarea"||ns(n.type)?_==="onfocus"?u="onfocusin":_==="onblur"?u="onfocusout":Xi.test(u)&&(u=_):_=u="oninput":s&&Zi.test(u)?u=u.replace(es,"-$&").toLowerCase():h===null&&(h=void 0),_==="oninput"&&o[u=_]&&(u="oninputCapture"),o[u]=h}}r=="select"&&(o.multiple&&Array.isArray(o.value)&&(o.value=O(n.children).forEach(function(p){p.props.selected=o.value.indexOf(p.props.value)!=-1})),o.defaultValue!=null&&(o.value=O(n.children).forEach(function(p){p.props.selected=o.multiple?o.defaultValue.indexOf(p.props.value)!=-1:o.defaultValue==p.props.value}))),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",rs)):n.className&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=gn,at&&at(t)};var ct=v.__r;v.__r=function(t){ct&&ct(t),Ge=t.__c};var lt=v.diffed;v.diffed=function(t){lt&&lt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Ge=null};var yn={ReactCurrentDispatcher:{current:{readContext:function(t){return Ge.__n[t.__c].props.value},useCallback:ke,useContext:Ce,useDebugValue:Se,useDeferredValue:Qe,useEffect:ne,useId:Ee,useImperativeHandle:be,useInsertionEffect:Ve,useLayoutEffect:J,useMemo:ve,useReducer:ye,useRef:we,useState:te,useSyncExternalStore:He,useTransition:Je}}},os="18.3.1";function vn(t){return x.bind(null,t)}function G(t){return!!t&&t.$$typeof===gn}function bn(t){return G(t)&&t.type===U}function En(t){return!!t&&typeof t.displayName=="string"&&t.displayName.indexOf("Memo(")==0}function Sn(t){return G(t)?wr.apply(null,arguments):t}function Cn(t){return!!t.__k&&(Z(null,t),!0)}function kn(t){return t&&(t.base||t.nodeType===1&&t)||null}var xn=function(t,e){return t(e)},In=function(t,e){var n=v.debounceRendering;v.debounceRendering=function(o){return o()};var r=t(e);return v.debounceRendering=n,r},Rn=G,is={useState:te,useId:Ee,useReducer:ye,useEffect:ne,useLayoutEffect:J,useInsertionEffect:Ve,useTransition:Je,useDeferredValue:Qe,useSyncExternalStore:He,startTransition:ze,useRef:we,useImperativeHandle:be,useMemo:ve,useCallback:ke,useContext:Ce,useDebugValue:Se,version:"18.3.1",Children:un,render:mn,hydrate:wn,unmountComponentAtNode:Cn,createPortal:pn,createElement:x,createContext:pt,createFactory:vn,cloneElement:Sn,createRef:_t,Fragment:U,isValidElement:G,isElement:Rn,isFragment:bn,isMemo:En,findDOMNode:kn,Component:A,PureComponent:ee,memo:cn,forwardRef:ln,flushSync:In,unstable_batchedUpdates:xn,StrictMode:U,Suspense:H,SuspenseList:$,lazy:_n,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:yn};const ss=Object.freeze(Object.defineProperty({__proto__:null,Children:un,Component:A,Fragment:U,PureComponent:ee,StrictMode:U,Suspense:H,SuspenseList:$,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:yn,cloneElement:Sn,createContext:pt,createElement:x,createFactory:vn,createPortal:pn,createRef:_t,default:is,findDOMNode:kn,flushSync:In,forwardRef:ln,hydrate:wn,isElement:Rn,isFragment:bn,isMemo:En,isValidElement:G,lazy:_n,memo:cn,render:mn,startTransition:ze,unmountComponentAtNode:Cn,unstable_batchedUpdates:xn,useCallback:ke,useContext:Ce,useDebugValue:Se,useDeferredValue:Qe,useEffect:ne,useErrorBoundary:vr,useId:Ee,useImperativeHandle:be,useInsertionEffect:Ve,useLayoutEffect:J,useMemo:ve,useReducer:ye,useRef:we,useState:te,useSyncExternalStore:He,useTransition:Je,version:os},Symbol.toStringTag,{value:"Module"})),as=ht(ss);function Tn(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var S=Bi,On=Tn(ar),cs=Tn(Ji),l=as;function ls(t){On.toString(t,{type:"terminal"}).then(console.log)}var us=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function ds(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var hs="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",fs="WalletConnect",_s=300,ps="rgb(64, 153, 255)",Nn="walletconnect-wrapper",ut="walletconnect-style-sheet",Mn="walletconnect-qrcode-modal",gs="walletconnect-qrcode-close",Ln="walletconnect-qrcode-text",ms="walletconnect-connect-button";function ws(t){return l.createElement("div",{className:"walletconnect-modal__header"},l.createElement("img",{src:hs,className:"walletconnect-modal__headerLogo"}),l.createElement("p",null,fs),l.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},l.createElement("div",{id:gs,className:"walletconnect-modal__close__icon"},l.createElement("div",{className:"walletconnect-modal__close__line1"}),l.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function ys(t){return l.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:ms+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var vs="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function bs(t){var e=t.color,n=t.href,r=t.name,o=t.logo,s=t.onClick;return l.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:s,rel:"noopener noreferrer",target:"_blank"},l.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),l.createElement("div",{className:"walletconnect-modal__base__row__right"},l.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),l.createElement("img",{src:vs,className:"walletconnect-modal__base__row__right__caret"})))}function Es(t){var e=t.color,n=t.href,r=t.name,o=t.logo,s=t.onClick,u=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return l.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:s,rel:"noopener noreferrer",target:"_blank"},l.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),l.createElement("div",{style:{fontSize:u},className:"walletconnect-connect__button__text"},r))}var Ss=5,de=12;function Cs(t){var e=S.isAndroid(),n=l.useState(""),r=n[0],o=n[1],s=l.useState(""),u=s[0],h=s[1],_=l.useState(1),p=_[0],w=_[1],y=u?t.links.filter(function(c){return c.name.toLowerCase().includes(u.toLowerCase())}):t.links,b=t.errorMessage,C=u||y.length>Ss,k=Math.ceil(y.length/de),I=[(p-1)*de+1,p*de],R=y.length?y.filter(function(c,f){return f+1>=I[0]&&f+1<=I[1]}):[],i=!e&&k>1,a=void 0;function d(c){o(c.target.value),clearTimeout(a),c.target.value?a=setTimeout(function(){h(c.target.value),w(1)},1e3):(o(""),h(""),w(1))}return l.createElement("div",null,l.createElement("p",{id:Ln,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&l.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:d}),l.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":C&&y.length?"__wrap":"")},e?l.createElement(ys,{name:t.text.connect,color:ps,href:t.uri,onClick:l.useCallback(function(){S.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):R.length?R.map(function(c){var f=c.color,m=c.name,g=c.shortName,E=c.logo,T=S.formatIOSMobile(t.uri,c),P=l.useCallback(function(){S.saveMobileLinkInfo({name:m,href:T})},[R]);return C?l.createElement(Es,{color:f,href:T,name:g||m,logo:E,onClick:P}):l.createElement(bs,{color:f,href:T,name:m,logo:E,onClick:P})}):l.createElement(l.Fragment,null,l.createElement("p",null,b.length?t.errorMessage:t.links.length&&!y.length?t.text.no_wallets_found:t.text.loading))),i&&l.createElement("div",{className:"walletconnect-modal__footer"},Array(k).fill(0).map(function(c,f){var m=f+1,g=p===m;return l.createElement("a",{style:{margin:"auto 10px",fontWeight:g?"bold":"normal"},onClick:function(){return w(m)}},m)})))}function ks(t){var e=!!t.message.trim();return l.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var xs=function(t){try{var e="";return Promise.resolve(On.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function Is(t){var e=l.useState(""),n=e[0],r=e[1],o=l.useState(""),s=o[0],u=o[1];l.useEffect(function(){try{return Promise.resolve(xs(t.uri)).then(function(_){u(_)})}catch(_){Promise.reject(_)}},[]);var h=function(){var _=cs(t.uri);_?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return l.createElement("div",null,l.createElement("p",{id:Ln,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),l.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),l.createElement("div",{className:"walletconnect-modal__footer"},l.createElement("a",{onClick:h},t.text.copy_to_clipboard)),l.createElement(ks,{message:n}))}function Rs(t){var e=S.isAndroid(),n=S.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=l.useState(!1),s=o[0],u=o[1],h=l.useState(!1),_=h[0],p=h[1],w=l.useState(!n),y=w[0],b=w[1],C={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},k=l.useState(""),I=k[0],R=k[1],i=l.useState(!1),a=i[0],d=i[1],c=l.useState([]),f=c[0],m=c[1],g=l.useState(""),E=g[0],T=g[1],P=function(){_||s||r&&!r.length||f.length>0||l.useEffect(function(){var Pn=function(){try{if(e)return Promise.resolve();u(!0);var ce=ds(function(){var F=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:S.getWalletRegistryUrl();return Promise.resolve(fetch(F)).then(function(Dn){return Promise.resolve(Dn.json()).then(function($n){var jn=$n.listings,Bn=n?"mobile":"desktop",Y=S.getMobileLinkRegistry(S.formatMobileRegistry(jn,Bn),r);u(!1),p(!0),T(Y.length?"":t.text.no_supported_wallets),m(Y);var Ye=Y.length===1;Ye&&(R(S.formatIOSMobile(t.uri,Y[0])),b(!0)),d(Ye)})})},function(F){u(!1),p(!0),T(t.text.something_went_wrong),console.error(F)});return Promise.resolve(ce&&ce.then?ce.then(function(){}):void 0)}catch(F){return Promise.reject(F)}};Pn()})};P();var Un=n?y:!y;return l.createElement("div",{id:Mn,className:"walletconnect-qrcode__base animated fadeIn"},l.createElement("div",{className:"walletconnect-modal__base"},l.createElement(ws,{onClose:t.onClose}),a&&y?l.createElement("div",{className:"walletconnect-modal__single_wallet"},l.createElement("a",{onClick:function(){return S.saveMobileLinkInfo({name:f[0].name,href:I})},href:I,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(a?f[0].name:"")+" ›")):e||s||!s&&f.length?l.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(Un?" right__selected":"")},l.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?l.createElement(l.Fragment,null,l.createElement("a",{onClick:function(){return b(!1),P()}},t.text.mobile),l.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode)):l.createElement(l.Fragment,null,l.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode),l.createElement("a",{onClick:function(){return b(!1),P()}},t.text.desktop))):null,l.createElement("div",null,y||!e&&!s&&!f.length?l.createElement(Is,Object.assign({},C)):l.createElement(Cs,Object.assign({},C,{links:f,errorMessage:E})))))}var Ts={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},Os={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},Ns={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Ms={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},Ls={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},qs={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},As={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},Us={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},dt={de:Ts,en:Os,es:Ns,fr:Ms,ko:Ls,pt:qs,zh:As,fa:Us};function Ps(){var t=S.getDocumentOrThrow(),e=t.getElementById(ut);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",ut),n.innerText=us,t.head.appendChild(n)}function Ds(){var t=S.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",Nn),t.body.appendChild(e),e}function qn(){var t=S.getDocumentOrThrow(),e=t.getElementById(Mn);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(Nn);n&&t.body.removeChild(n)},_s))}function $s(t){return function(){qn(),t&&t()}}function js(){var t=S.getNavigatorOrThrow().language.split("-")[0]||"en";return dt[t]||dt.en}function Bs(t,e,n){Ps();var r=Ds();l.render(l.createElement(Rs,{text:js(),uri:t,onClose:$s(e),qrcodeModalOptions:n}),r)}function Ws(){qn()}var An=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Fs(t,e,n){console.log(t),An()?ls(t):Bs(t,e,n)}function Hs(){An()||Ws()}var zs={open:Fs,close:Hs},Qs=zs;const Js=me(Qs);class Vs extends gr{constructor(e){super(),this.events=new ft,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",Ke(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?Js:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new ji(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?Ke(e.id,e.error.message,e.error.data):e}}class Zs{constructor(e){this.events=new ft,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new Ze(new Vs(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(xe.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=Bt(e,this.rpc);return typeof n>"u"?void 0:new Ze(new mr(n))}}export{Zs as default};
