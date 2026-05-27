const Al=()=>{};var oo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},wl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,E=o>>2,A=(o&3)<<4|c>>4;let S=(c&15)<<2|f>>6,C=f&63;h||(C=64,u||(S=64)),r.push(e[E],e[A],e[S],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ma(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||A==null)throw new Rl;const S=o<<2|c>>4;if(r.push(S),f!==64){const C=c<<4&240|f>>2;if(r.push(C),A!==64){const V=f<<6&192|A;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sl=function(n){const t=ma(n);return ga.encodeByteArray(t,!0)},_a=function(n){return Sl(n).replace(/\./g,"")},ya=function(n){try{return ga.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=()=>Pl().__FIREBASE_DEFAULTS__,Cl=()=>{if(typeof process>"u"||typeof oo>"u")return;const n=oo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ya(n[1]);return t&&JSON.parse(t)},va=()=>{try{return Al()||bl()||Cl()||Vl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nl=n=>{var t;return(t=va())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function kl(){var n;const t=(n=va())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ol(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ml(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ll(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xl(){return!kl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fl(){try{return typeof indexedDB=="object"}catch{return!1}}function Ul(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="FirebaseError";class te extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Bl,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?jl(o,r):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new te(s,c,r)}}function jl(n,t){return n.replace($l,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const $l=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ql(n,t){const e=new Hl(n,t);return e.subscribe.bind(e)}class Hl{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");zl(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=Yr),s.error===void 0&&(s.error=Yr),s.complete===void 0&&(s.complete=Yr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zl(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Yr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n){return n&&n._delegate?n._delegate:n}class Pe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Gl={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Wl=x.INFO,Kl={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Ql=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Kl[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ci{constructor(t){this.name=t,this._logLevel=Wl,this._logHandler=Ql,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const Xl=(n,t)=>t.some(e=>n instanceof e);let ao,uo;function Jl(){return ao||(ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yl(){return uo||(uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ta=new WeakMap,li=new WeakMap,Ia=new WeakMap,Zr=new WeakMap,Vi=new WeakMap;function Zl(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Wt(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Ta.set(e,n)}).catch(()=>{}),Vi.set(t,n),t}function tc(n){if(li.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});li.set(n,t)}let ci={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return li.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ia.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Wt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ec(n){ci=n(ci)}function nc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ti(this),t,...e);return Ia.set(r,t.sort?t.sort():[t]),Wt(r)}:Yl().includes(n)?function(...t){return n.apply(ti(this),t),Wt(Ta.get(this))}:function(...t){return Wt(n.apply(ti(this),t))}}function rc(n){return typeof n=="function"?nc(n):(n instanceof IDBTransaction&&tc(n),Xl(n,Jl())?new Proxy(n,ci):n)}function Wt(n){if(n instanceof IDBRequest)return Zl(n);if(Zr.has(n))return Zr.get(n);const t=rc(n);return t!==n&&(Zr.set(n,t),Vi.set(t,n)),t}const ti=n=>Vi.get(n);function ic(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Wt(u);return r&&u.addEventListener("upgradeneeded",h=>{r(Wt(u.result),h.oldVersion,h.newVersion,Wt(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const sc=["get","getKey","getAll","getAllKeys","count"],oc=["put","add","delete","clear"],ei=new Map;function lo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ei.get(t))return ei.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=oc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sc.includes(e)))return;const o=async function(u,...c){const h=this.transaction(u,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return ei.set(t,o),o}ec(n=>({...n,get:(t,e,r)=>lo(t,e)||n.get(t,e,r),has:(t,e)=>!!lo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(uc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function uc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const hi="@firebase/app",co="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Ci("@firebase/app"),lc="@firebase/app-compat",cc="@firebase/analytics-compat",hc="@firebase/analytics",dc="@firebase/app-check-compat",fc="@firebase/app-check",pc="@firebase/auth",mc="@firebase/auth-compat",gc="@firebase/database",_c="@firebase/data-connect",yc="@firebase/database-compat",vc="@firebase/functions",Ec="@firebase/functions-compat",Tc="@firebase/installations",Ic="@firebase/installations-compat",Ac="@firebase/messaging",wc="@firebase/messaging-compat",Rc="@firebase/performance",Sc="@firebase/performance-compat",Pc="@firebase/remote-config",bc="@firebase/remote-config-compat",Cc="@firebase/storage",Vc="@firebase/storage-compat",Nc="@firebase/firestore",Dc="@firebase/ai",kc="@firebase/firestore-compat",Oc="firebase",Mc="11.10.0",Lc={[hi]:"fire-core",[lc]:"fire-core-compat",[hc]:"fire-analytics",[cc]:"fire-analytics-compat",[fc]:"fire-app-check",[dc]:"fire-app-check-compat",[pc]:"fire-auth",[mc]:"fire-auth-compat",[gc]:"fire-rtdb",[_c]:"fire-data-connect",[yc]:"fire-rtdb-compat",[vc]:"fire-fn",[Ec]:"fire-fn-compat",[Tc]:"fire-iid",[Ic]:"fire-iid-compat",[Ac]:"fire-fcm",[wc]:"fire-fcm-compat",[Rc]:"fire-perf",[Sc]:"fire-perf-compat",[Pc]:"fire-rc",[bc]:"fire-rc-compat",[Cc]:"fire-gcs",[Vc]:"fire-gcs-compat",[Nc]:"fire-fst",[kc]:"fire-fst-compat",[Dc]:"fire-vertex","fire-js":"fire-js",[Oc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map,Fc=new Map,ho=new Map;function fo(n,t){try{n.container.addComponent(t)}catch(e){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function be(n){const t=n.name;if(ho.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;ho.set(t,n);for(const e of xc.values())fo(e,n);for(const e of Fc.values())fo(e,n);return!0}function oe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ni=new pn("app","Firebase",Uc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=Mc;function Kt(n,t,e){var r;let s=(r=Lc[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jt.warn(c.join(" "));return}be(new Pe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="firebase-heartbeat-database",jc=1,un="firebase-heartbeat-store";let ni=null;function Aa(){return ni||(ni=ic(Bc,jc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(un)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ni.create("idb-open",{originalErrorMessage:n.message})})),ni}async function $c(n){try{const e=(await Aa()).transaction(un),r=await e.objectStore(un).get(wa(n));return await e.done,r}catch(t){if(t instanceof te)jt.warn(t.message);else{const e=Ni.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jt.warn(e.message)}}}async function po(n,t){try{const r=(await Aa()).transaction(un,"readwrite");await r.objectStore(un).put(t,wa(n)),await r.done}catch(e){if(e instanceof te)jt.warn(e.message);else{const r=Ni.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});jt.warn(r.message)}}}function wa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=1024,Hc=30;class zc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Wc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=mo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Hc){const u=Kc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mo(),{heartbeatsToSend:r,unsentEntries:s}=Gc(this._heartbeatsCache.heartbeats),o=_a(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return jt.warn(e),""}}}function mo(){return new Date().toISOString().substring(0,10)}function Gc(n,t=qc){const e=[];let r=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),go(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),go(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Wc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fl()?Ul().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await $c(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function go(n){return _a(JSON.stringify({version:2,heartbeats:n})).length}function Kc(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){be(new Pe("platform-logger",t=>new ac(t),"PRIVATE")),be(new Pe("heartbeat",t=>new zc(t),"PRIVATE")),Kt(hi,co,n),Kt(hi,co,"esm2017"),Kt("fire-js","")}Qc("");var Xc="firebase",Jc="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(Xc,Jc,"app");function Ra(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(e[r[s]]=n[r[s]]);return e}function Sa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yc=Sa,Pa=new pn("auth","Firebase",Sa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Ci("@firebase/auth");function Zc(n,...t){er.logLevel<=x.WARN&&er.warn(`Auth (${gr}): ${n}`,...t)}function Kn(n,...t){er.logLevel<=x.ERROR&&er.error(`Auth (${gr}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n,...t){throw Di(n,...t)}function ba(n,...t){return Di(n,...t)}function Ca(n,t,e){const r=Object.assign(Object.assign({},Yc()),{[t]:e});return new pn("auth","Firebase",r).create(t,{appName:n.name})}function Qn(n){return Ca(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Di(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Pa.create(n,...t)}function j(n,t,...e){if(!n)throw Di(t,...e)}function tn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Kn(t),new Error(t)}function nr(n,t){n||tn(t)}function th(){return yo()==="http:"||yo()==="https:"}function yo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(th()||Ml()||"connection"in navigator)?navigator.onLine:!0}function nh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.shortDelay=t,this.longDelay=e,nr(e>t,"Short delay should be less than long delay!"),this.isMobile=Dl()||Ll()}get(){return eh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,t){nr(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oh=new mn(3e4,6e4);function Na(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function _r(n,t,e,r,s={}){return Da(n,s,async()=>{let o={},u={};r&&(t==="GET"?u=r:o={body:JSON.stringify(r)});const c=Ea(Object.assign({key:n.config.apiKey},u)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:t,headers:h},o);return Ol()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&bi(n.emulatorConfig.host)&&(f.credentials="include"),Va.fetch()(await ka(n,n.config.apiHost,e,c),f)})}async function Da(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ih),t);try{const s=new ah(n),o=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw jn(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const c=o.ok?u.errorMessage:u.error.message,[h,f]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw jn(n,"credential-already-in-use",u);if(h==="EMAIL_EXISTS")throw jn(n,"email-already-in-use",u);if(h==="USER_DISABLED")throw jn(n,"user-disabled",u);const E=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ca(n,E,f);_o(n,E)}}catch(s){if(s instanceof te)throw s;_o(n,"network-request-failed",{message:String(s)})}}async function ka(n,t,e,r){const s=`${t}${e}?${r}`,o=n,u=o.config.emulator?rh(n.config,s):`${n.config.apiScheme}://${s}`;return sh.includes(e)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}class ah{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ba(this.auth,"network-request-failed")),oh.get())})}}function jn(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=ba(n,t,r);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(n,t){return _r(n,"POST","/v1/accounts:delete",t)}async function rr(n,t){return _r(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lh(n,t=!1){const e=Rt(n),r=await e.getIdToken(t),s=Oa(r);j(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:en(ri(s.auth_time)),issuedAtTime:en(ri(s.iat)),expirationTime:en(ri(s.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ri(n){return Number(n)*1e3}function Oa(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Kn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ya(e);return s?JSON.parse(s):(Kn("Failed to decode base64 JWT payload"),null)}catch(s){return Kn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vo(n){const t=Oa(n);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof te&&ch(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ch({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=en(this.lastLoginAt),this.creationTime=en(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(n){var t;const e=n.auth,r=await n.getIdToken(),s=await di(n,rr(e,{idToken:r}));j(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const u=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Ma(o.providerUserInfo):[],c=fh(n.providerData,u),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),E=h?f:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new fi(o.createdAt,o.lastLoginAt),isAnonymous:E};Object.assign(n,A)}async function dh(n){const t=Rt(n);await ir(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fh(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ma(n){return n.map(t=>{var{providerId:e}=t,r=Ra(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ph(n,t){const e=await Da(n,{},async()=>{const r=Ea({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,u=await ka(n,s,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:r};return n.emulatorConfig&&bi(n.emulatorConfig.host)&&(h.credentials="include"),Va.fetch()(u,h)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function mh(n,t){return _r(n,"POST","/v2/accounts:revokeToken",Na(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vo(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){j(t.length!==0,"internal-error");const e=vo(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:o}=await ph(t,e);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:o}=e,u=new Ae;return r&&(j(typeof r=="string","internal-error",{appName:t}),u.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:t}),u.accessToken=s),o&&(j(typeof o=="number","internal-error",{appName:t}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ae,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,t){j(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class kt{constructor(t){var{uid:e,auth:r,stsTokenManager:s}=t,o=Ra(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new fi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await di(this,this.stsTokenManager.getToken(this.auth,t));return j(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return lh(this,t)}reload(){return dh(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new kt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await ir(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(oe(this.auth.app))return Promise.reject(Qn(this.auth));const t=await this.getIdToken();return await di(this,uh(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,s,o,u,c,h,f,E;const A=(r=e.displayName)!==null&&r!==void 0?r:void 0,S=(s=e.email)!==null&&s!==void 0?s:void 0,C=(o=e.phoneNumber)!==null&&o!==void 0?o:void 0,V=(u=e.photoURL)!==null&&u!==void 0?u:void 0,O=(c=e.tenantId)!==null&&c!==void 0?c:void 0,k=(h=e._redirectEventId)!==null&&h!==void 0?h:void 0,W=(f=e.createdAt)!==null&&f!==void 0?f:void 0,$=(E=e.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:H,emailVerified:et,isAnonymous:Nt,providerData:nt,stsTokenManager:v}=e;j(H&&v,t,"internal-error");const p=Ae.fromJSON(this.name,v);j(typeof H=="string",t,"internal-error"),Gt(A,t.name),Gt(S,t.name),j(typeof et=="boolean",t,"internal-error"),j(typeof Nt=="boolean",t,"internal-error"),Gt(C,t.name),Gt(V,t.name),Gt(O,t.name),Gt(k,t.name),Gt(W,t.name),Gt($,t.name);const g=new kt({uid:H,auth:t,email:S,emailVerified:et,displayName:A,isAnonymous:Nt,photoURL:V,phoneNumber:C,tenantId:O,stsTokenManager:p,createdAt:W,lastLoginAt:$});return nt&&Array.isArray(nt)&&(g.providerData=nt.map(_=>Object.assign({},_))),k&&(g._redirectEventId=k),g}static async _fromIdTokenResponse(t,e,r=!1){const s=new Ae;s.updateFromServerResponse(e);const o=new kt({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ir(o),o}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];j(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Ma(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new Ae;c.updateFromIdToken(r);const h=new kt({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:u}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new fi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Map;function ae(n){nr(n instanceof Function,"Expected a class definition");let t=Eo.get(n);return t?(nr(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Eo.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}La.type="NONE";const To=La;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n,t,e){return`firebase:${n}:${t}:${e}`}class we{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=ii(this.userKey,s.apiKey,o),this.fullPersistenceKey=ii("persistence",s.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await rr(this.auth,{idToken:t}).catch(()=>{});return e?kt._fromGetAccountInfoResponse(this.auth,e,t):null}return kt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new we(ae(To),t,r);const s=(await Promise.all(e.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||ae(To);const u=ii(r,t.config.apiKey,t.name);let c=null;for(const f of e)try{const E=await f._get(u);if(E){let A;if(typeof E=="string"){const S=await rr(t,{idToken:E}).catch(()=>{});if(!S)break;A=await kt._fromGetAccountInfoResponse(t,S,E)}else A=kt._fromJSON(t,E);f!==o&&(c=A),o=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new we(o,t,r):(o=h[0],c&&await o._set(u,c.toJSON()),await Promise.all(e.map(async f=>{if(f!==o)try{await f._remove(u)}catch{}})),new we(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Th(t))return"Blackberry";if(Ih(t))return"Webos";if(_h(t))return"Safari";if((t.includes("chrome/")||yh(t))&&!t.includes("edge/"))return"Chrome";if(Eh(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gh(n=Vt()){return/firefox\//i.test(n)}function _h(n=Vt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yh(n=Vt()){return/crios\//i.test(n)}function vh(n=Vt()){return/iemobile/i.test(n)}function Eh(n=Vt()){return/android/i.test(n)}function Th(n=Vt()){return/blackberry/i.test(n)}function Ih(n=Vt()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(n,t=[]){let e;switch(n){case"Browser":e=Io(Vt());break;case"Worker":e=`${Io(Vt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=o=>new Promise((u,c)=>{try{const h=t(o);u(h)}catch(h){c(h)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(n,t={}){return _r(n,"GET","/v2/passwordPolicy",Na(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=6;class Sh{constructor(t){var e,r,s,o;const u=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=u.minPasswordLength)!==null&&e!==void 0?e:Rh,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,s,o,u,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,h),this.validatePasswordCharacterOptions(t,h),h.isValid&&(h.isValid=(e=h.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(u=h.containsNumericCharacter)!==null&&u!==void 0?u:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ao(this),this.idTokenSubscription=new Ao(this),this.beforeStateQueue=new Ah(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ae(e)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await we.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await rr(this,{idToken:t}),r=await kt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(oe(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(t);(!u||u===c)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ir(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=nh()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(oe(this.app))return Promise.reject(Qn(this));const e=t?Rt(t):null;return e&&j(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return oe(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return oe(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ae(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await wh(this),e=new Sh(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new pn("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await mh(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ae(t)||this._popupRedirectResolver;j(e,this,"argument-error"),this.redirectPersistenceManager=await we.create(this,[ae(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const o=typeof e=="function"?e:e.next.bind(e);let u=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{u||o(this.currentUser)}),typeof e=="function"){const h=t.addObserver(e,r,s);return()=>{u=!0,h()}}else{const h=t.addObserver(e);return()=>{u=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Zc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function bh(n){return Rt(n)}class Ao{constructor(t){this.auth=t,this.observer=null,this.addObserver=ql(e=>this.observer=e)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ch(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(ae);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}new mn(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new mn(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new mn(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new mn(5e3,15e3);var wo="@firebase/auth",Ro="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dh(n){be(new Pe("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:u,authDomain:c}=r.options;j(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:u,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xa(n)},f=new Ph(r,s,o,h);return Ch(f,e),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),be(new Pe("auth-internal",t=>{const e=bh(t.getProvider("auth").getImmediate());return(r=>new Vh(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(wo,Ro,Nh(n)),Kt(wo,Ro,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=300;Nl("authIdTokenMaxAge");Dh("Browser");var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(_,y,I){for(var m=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)m[Lt-2]=arguments[Lt];return p.prototype[y].apply(_,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,g){g||(g=0);var _=Array(16);if(typeof p=="string")for(var y=0;16>y;++y)_[y]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],y=v.g[2];var I=v.g[3],m=p+(I^g&(y^I))+_[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=I+(y^p&(g^y))+_[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=y+(g^I&(p^g))+_[2]+606105819&4294967295,y=I+(m<<17&4294967295|m>>>15),m=g+(p^y&(I^p))+_[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(I^g&(y^I))+_[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(y^p&(g^y))+_[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=y+(g^I&(p^g))+_[6]+2821735955&4294967295,y=I+(m<<17&4294967295|m>>>15),m=g+(p^y&(I^p))+_[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(I^g&(y^I))+_[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(y^p&(g^y))+_[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=y+(g^I&(p^g))+_[10]+4294925233&4294967295,y=I+(m<<17&4294967295|m>>>15),m=g+(p^y&(I^p))+_[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(I^g&(y^I))+_[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(y^p&(g^y))+_[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=y+(g^I&(p^g))+_[14]+2792965006&4294967295,y=I+(m<<17&4294967295|m>>>15),m=g+(p^y&(I^p))+_[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(y^I&(g^y))+_[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^y&(p^g))+_[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(I^p))+_[11]+643717713&4294967295,y=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(y^I))+_[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^I&(g^y))+_[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^y&(p^g))+_[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(I^p))+_[15]+3634488961&4294967295,y=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(y^I))+_[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^I&(g^y))+_[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^y&(p^g))+_[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(I^p))+_[3]+4107603335&4294967295,y=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(y^I))+_[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^I&(g^y))+_[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^y&(p^g))+_[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(I^p))+_[7]+1735328473&4294967295,y=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(y^I))+_[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(g^y^I)+_[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^y)+_[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=y+(I^p^g)+_[11]+1839030562&4294967295,y=I+(m<<16&4294967295|m>>>16),m=g+(y^I^p)+_[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^I)+_[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^y)+_[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=y+(I^p^g)+_[7]+4139469664&4294967295,y=I+(m<<16&4294967295|m>>>16),m=g+(y^I^p)+_[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^I)+_[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^y)+_[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=y+(I^p^g)+_[3]+3572445317&4294967295,y=I+(m<<16&4294967295|m>>>16),m=g+(y^I^p)+_[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^I)+_[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^y)+_[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=y+(I^p^g)+_[15]+530742520&4294967295,y=I+(m<<16&4294967295|m>>>16),m=g+(y^I^p)+_[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(y^(g|~I))+_[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~y))+_[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=y+(p^(I|~g))+_[14]+2878612391&4294967295,y=I+(m<<15&4294967295|m>>>17),m=g+(I^(y|~p))+_[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~I))+_[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~y))+_[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=y+(p^(I|~g))+_[10]+4293915773&4294967295,y=I+(m<<15&4294967295|m>>>17),m=g+(I^(y|~p))+_[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~I))+_[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~y))+_[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=y+(p^(I|~g))+_[6]+2734768916&4294967295,y=I+(m<<15&4294967295|m>>>17),m=g+(I^(y|~p))+_[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~I))+_[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~y))+_[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=y+(p^(I|~g))+_[2]+718787259&4294967295,y=I+(m<<15&4294967295|m>>>17),m=g+(I^(y|~p))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,_=this.B,y=this.h,I=0;I<p;){if(y==0)for(;I<=g;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(_[y++]=v.charCodeAt(I++),y==this.blockSize){s(this,_),y=0;break}}else for(;I<p;)if(_[y++]=v[I++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var _=0;32>_;_+=8)v[g++]=this.g[p]>>>_&255;return v};function o(v,p){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function u(v,p){this.h=p;for(var g=[],_=!0,y=v.length-1;0<=y;y--){var I=v[y]|0;_&&I==p||(g[y]=I,_=!1)}this.g=g}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return k(f(-v));for(var p=[],g=1,_=0;v>=g;_++)p[_]=v/g|0,g*=4294967296;return new u(p,0)}function E(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return k(E(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),_=A,y=0;y<v.length;y+=8){var I=Math.min(8,v.length-y),m=parseInt(v.substring(y,y+I),p);8>I?(I=f(Math.pow(p,I)),_=_.j(I).add(f(m))):(_=_.j(g),_=_.add(f(m)))}return _}var A=h(0),S=h(1),C=h(16777216);n=u.prototype,n.m=function(){if(O(this))return-k(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var _=this.i(g);v+=(0<=_?_:4294967296+_)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(O(this))return"-"+k(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,_="";;){var y=et(g,p).g;g=W(g,y.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=y,V(g))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=W(this,v),O(v)?-1:V(v)?0:1};function k(v){for(var p=v.g.length,g=[],_=0;_<p;_++)g[_]=~v.g[_];return new u(g,~v.h).add(S)}n.abs=function(){return O(this)?k(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],_=0,y=0;y<=p;y++){var I=_+(this.i(y)&65535)+(v.i(y)&65535),m=(I>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=m>>>16,I&=65535,m&=65535,g[y]=m<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function W(v,p){return v.add(k(p))}n.j=function(v){if(V(this)||V(v))return A;if(O(this))return O(v)?k(this).j(k(v)):k(k(this).j(v));if(O(v))return k(this.j(k(v)));if(0>this.l(C)&&0>v.l(C))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],_=0;_<2*p;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var I=this.i(_)>>>16,m=this.i(_)&65535,Lt=v.i(y)>>>16,Me=v.i(y)&65535;g[2*_+2*y]+=m*Me,$(g,2*_+2*y),g[2*_+2*y+1]+=I*Me,$(g,2*_+2*y+1),g[2*_+2*y+1]+=m*Lt,$(g,2*_+2*y+1),g[2*_+2*y+2]+=I*Lt,$(g,2*_+2*y+2)}for(_=0;_<p;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=p;_<2*p;_++)g[_]=0;return new u(g,0)};function $(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function H(v,p){this.g=v,this.h=p}function et(v,p){if(V(p))throw Error("division by zero");if(V(v))return new H(A,A);if(O(v))return p=et(k(v),p),new H(k(p.g),k(p.h));if(O(p))return p=et(v,k(p)),new H(k(p.g),p.h);if(30<v.g.length){if(O(v)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=S,_=p;0>=_.l(v);)g=Nt(g),_=Nt(_);var y=nt(g,1),I=nt(_,1);for(_=nt(_,2),g=nt(g,2);!V(_);){var m=I.add(_);0>=m.l(v)&&(y=y.add(g),I=m),_=nt(_,1),g=nt(g,1)}return p=W(v,y.j(p)),new H(y,p)}for(y=A;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=f(g),m=I.j(p);O(m)||0<m.l(v);)g-=_,I=f(g),m=I.j(p);V(I)&&(I=S),y=y.add(I),v=W(v,m)}return new H(y,v)}n.A=function(v){return et(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)&v.i(_);return new u(g,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)|v.i(_);return new u(g,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)^v.i(_);return new u(g,this.h^v.h)};function Nt(v){for(var p=v.g.length+1,g=[],_=0;_<p;_++)g[_]=v.i(_)<<1|v.i(_-1)>>>31;return new u(g,v.h)}function nt(v,p){var g=p>>5;p%=32;for(var _=v.g.length-g,y=[],I=0;I<_;I++)y[I]=0<p?v.i(I+g)>>>p|v.i(I+g+1)<<32-p:v.i(I+g);return new u(y,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=E,ki=u}).apply(typeof So<"u"?So:typeof self<"u"?self:typeof window<"u"?window:{});var $n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,Ze,Ua,Xn,pi,Ba,ja,$a;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof $n=="object"&&$n];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var T=i[d];if(!(T in l))break t;l=l[T]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,T={next:function(){if(!d&&l<i.length){var w=l++;return{value:a(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function E(i,a,l){return i.call.apply(i.bind,arguments)}function A(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),i.apply(a,T)}}return function(){return i.apply(a,arguments)}}function S(i,a,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,S.apply(null,arguments)}function C(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function V(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,T,w){for(var b=Array(arguments.length-2),q=2;q<arguments.length;q++)b[q-2]=arguments[q];return a.prototype[T].apply(d,b)}}function O(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function k(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const T=i.length||0,w=d.length||0;i.length=T+w;for(let b=0;b<w;b++)i[T+b]=d[b]}else i.push(d)}}class W{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function $(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function et(i){return et[" "](i),i}et[" "]=function(){};var Nt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function nt(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function v(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function p(i){const a={};for(const l in i)a[l]=i[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let l,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(l in d)i[l]=d[l];for(let w=0;w<g.length;w++)l=g[w],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function y(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function I(i){c.setTimeout(()=>{throw i},0)}function m(){var i=br;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Lt{constructor(){this.h=this.g=null}add(a,l){const d=Me.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Me=new W(()=>new $u,i=>i.reset());class $u{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,xe=!1,br=new Lt,os=()=>{const i=c.Promise.resolve(void 0);Le=()=>{i.then(qu)}};var qu=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(l){I(l)}var a=Me;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}xe=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var Hu=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i})();function Fe(i,a){if(ct.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Nt){t:{try{et(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:zu[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Fe.aa.h.call(this)}}V(Fe,ct);var zu={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var In="closure_listenable_"+(1e6*Math.random()|0),Gu=0;function Wu(i,a,l,d,T){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=T,this.key=++Gu,this.da=this.fa=!1}function An(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function wn(i){this.src=i,this.g={},this.h=0}wn.prototype.add=function(i,a,l,d,T){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var b=Vr(i,a,d,T);return-1<b?(a=i[b],l||(a.fa=!1)):(a=new Wu(a,this.src,w,!!d,T),a.fa=l,i.push(a)),a};function Cr(i,a){var l=a.type;if(l in i.g){var d=i.g[l],T=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(d,T,1),w&&(An(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Vr(i,a,l,d){for(var T=0;T<i.length;++T){var w=i[T];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return T}return-1}var Nr="closure_lm_"+(1e6*Math.random()|0),Dr={};function as(i,a,l,d,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)as(i,a[w],l,d,T);return null}return l=cs(l),i&&i[In]?i.K(a,l,f(d)?!!d.capture:!1,T):Ku(i,a,l,!1,d,T)}function Ku(i,a,l,d,T,w){if(!a)throw Error("Invalid event type");var b=f(T)?!!T.capture:!!T,q=Or(i);if(q||(i[Nr]=q=new wn(i)),l=q.add(a,l,d,b,w),l.proxy)return l;if(d=Qu(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)Hu||(T=b),T===void 0&&(T=!1),i.addEventListener(a.toString(),d,T);else if(i.attachEvent)i.attachEvent(ls(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Qu(){function i(l){return a.call(i.src,i.listener,l)}const a=Xu;return i}function us(i,a,l,d,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)us(i,a[w],l,d,T);else d=f(d)?!!d.capture:!!d,l=cs(l),i&&i[In]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],l=Vr(w,l,d,T),-1<l&&(An(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=Or(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Vr(a,l,d,T)),(l=-1<i?a[i]:null)&&kr(l))}function kr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[In])Cr(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(ls(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Or(a))?(Cr(l,i),l.h==0&&(l.src=null,a[Nr]=null)):An(i)}}}function ls(i){return i in Dr?Dr[i]:Dr[i]="on"+i}function Xu(i,a){if(i.da)i=!0;else{a=new Fe(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&kr(i),i=l.call(d,a)}return i}function Or(i){return i=i[Nr],i instanceof wn?i:null}var Mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function cs(i){return typeof i=="function"?i:(i[Mr]||(i[Mr]=function(a){return i.handleEvent(a)}),i[Mr])}function ht(){$t.call(this),this.i=new wn(this),this.M=this,this.F=null}V(ht,$t),ht.prototype[In]=!0,ht.prototype.removeEventListener=function(i,a,l,d){us(this,i,a,l,d)};function _t(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new ct(a,i);else if(a instanceof ct)a.target=a.target||i;else{var T=a;a=new ct(d,i),_(a,T)}if(T=!0,l)for(var w=l.length-1;0<=w;w--){var b=a.g=l[w];T=Rn(b,d,!0,a)&&T}if(b=a.g=i,T=Rn(b,d,!0,a)&&T,T=Rn(b,d,!1,a)&&T,l)for(w=0;w<l.length;w++)b=a.g=l[w],T=Rn(b,d,!1,a)&&T}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)An(l[d]);delete i.g[a],i.h--}}this.F=null},ht.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},ht.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function Rn(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var b=a[w];if(b&&!b.da&&b.capture==l){var q=b.listener,st=b.ha||b.src;b.fa&&Cr(i.i,b),T=q.call(st,d)!==!1&&T}}return T&&!d.defaultPrevented}function hs(i,a,l){if(typeof i=="function")l&&(i=S(i,l));else if(i&&typeof i.handleEvent=="function")i=S(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function ds(i){i.g=hs(()=>{i.g=null,i.i&&(i.i=!1,ds(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Ju extends $t{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ds(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(i){$t.call(this),this.h=i,this.g={}}V(Ue,$t);var fs=[];function ps(i){nt(i.g,function(a,l){this.g.hasOwnProperty(l)&&kr(a)},i),i.g={}}Ue.prototype.N=function(){Ue.aa.N.call(this),ps(this)},Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=c.JSON.stringify,Yu=c.JSON.parse,Zu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function xr(){}xr.prototype.h=null;function ms(i){return i.h||(i.h=i.i())}function gs(){}var Be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fr(){ct.call(this,"d")}V(Fr,ct);function Ur(){ct.call(this,"c")}V(Ur,ct);var ne={},_s=null;function Sn(){return _s=_s||new ht}ne.La="serverreachability";function ys(i){ct.call(this,ne.La,i)}V(ys,ct);function je(i){const a=Sn();_t(a,new ys(a))}ne.STAT_EVENT="statevent";function vs(i,a){ct.call(this,ne.STAT_EVENT,i),this.stat=a}V(vs,ct);function yt(i){const a=Sn();_t(a,new vs(a,i))}ne.Ma="timingevent";function Es(i,a){ct.call(this,ne.Ma,i),this.size=a}V(Es,ct);function $e(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function qe(){this.g=!0}qe.prototype.xa=function(){this.g=!1};function tl(i,a,l,d,T,w){i.info(function(){if(i.g)if(w)for(var b="",q=w.split("&"),st=0;st<q.length;st++){var B=q[st].split("=");if(1<B.length){var dt=B[0];B=B[1];var ft=dt.split("_");b=2<=ft.length&&ft[1]=="type"?b+(dt+"="+B+"&"):b+(dt+"=redacted&")}}else b=null;else b=w;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+l+`
`+b})}function el(i,a,l,d,T,w,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+l+`
`+w+" "+b})}function _e(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+rl(i,l)+(d?" "+d:"")})}function nl(i,a){i.info(function(){return"TIMEOUT: "+a})}qe.prototype.info=function(){};function rl(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var b=1;b<T.length;b++)T[b]=""}}}}return Lr(l)}catch{return a}}var Pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ts={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Br;function bn(){}V(bn,xr),bn.prototype.g=function(){return new XMLHttpRequest},bn.prototype.i=function(){return{}},Br=new bn;function qt(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new Ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Is}function Is(){this.i=null,this.g="",this.h=!1}var As={},jr={};function $r(i,a,l){i.L=1,i.v=Dn(xt(a)),i.m=l,i.P=!0,ws(i,null)}function ws(i,a){i.F=Date.now(),Cn(i),i.A=xt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Fs(l.i,"t",d),i.C=0,l=i.j.J,i.h=new Is,i.g=no(i.j,l?a:null,!i.m),0<i.O&&(i.M=new Ju(S(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(fs[0]=T.toString()),T=fs);for(var w=0;w<T.length;w++){var b=as(l,T[w],d||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),je(),tl(i.i,i.u,i.A,i.l,i.R,i.m)}qt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Ft(i)==3?a.j():this.Y(i)},qt.prototype.Y=function(i){try{if(i==this.g)t:{const ft=Ft(this.g);var a=this.g.Ba();const Ee=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||zs(this.g)))){this.J||ft!=4||a==7||(a==8||0>=Ee?je(3):je(2)),qr(this);var l=this.g.Z();this.X=l;e:if(Rs(this)){var d=zs(this.g);i="";var T=d.length,w=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),He(this);var b="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(w&&a==T-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,el(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var q,st=this.g;if((q=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(q)){var B=q;break e}}B=null}if(l=B)_e(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hr(this,l);else{this.o=!1,this.s=3,yt(12),re(this),He(this);break t}}if(this.P){l=!0;let St;for(;!this.J&&this.C<b.length;)if(St=il(this,b),St==jr){ft==4&&(this.s=4,yt(14),l=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(St==As){this.s=4,yt(15),_e(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else _e(this.i,this.l,St,null),Hr(this,St);if(Rs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||b.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)_e(this.i,this.l,b,"[Invalid Chunked Response]"),re(this),He(this);else if(0<b.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Xr(dt),dt.M=!0,yt(11))}}else _e(this.i,this.l,b,null),Hr(this,b);ft==4&&re(this),this.o&&!this.J&&(ft==4?Ys(this.j,this):(this.o=!1,Cn(this)))}else Tl(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),re(this),He(this)}}}catch{}finally{}};function Rs(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function il(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?jr:(l=Number(a.substring(l,d)),isNaN(l)?As:(d+=1,d+l>a.length?jr:(a=a.slice(d,d+l),i.C=d+l,a)))}qt.prototype.cancel=function(){this.J=!0,re(this)};function Cn(i){i.S=Date.now()+i.I,Ss(i,i.I)}function Ss(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=$e(S(i.ba,i),a)}function qr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}qt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(nl(this.i,this.A),this.L!=2&&(je(),yt(17)),re(this),this.s=2,He(this)):Ss(this,this.S-i)};function He(i){i.j.G==0||i.J||Ys(i.j,i)}function re(i){qr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,ps(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Hr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||zr(l.h,i))){if(!i.K&&zr(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Fn(l),Ln(l);else break t;Qr(l),yt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=$e(S(l.Za,l),6e3));if(1>=Cs(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else se(l,11)}else if((i.K||l.g==i)&&Fn(l),!$(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let B=T[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const dt=B[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=B[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const Ee=B[5];Ee!=null&&typeof Ee=="number"&&0<Ee&&(d=1.5*Ee,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const St=i.g;if(St){const Bn=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bn){var w=d.h;w.g||Bn.indexOf("spdy")==-1&&Bn.indexOf("quic")==-1&&Bn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Gr(w,w.h),w.h=null))}if(d.D){const Jr=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;Jr&&(d.ya=Jr,G(d.I,d.D,Jr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=i;if(d.qa=eo(d,d.J?d.ia:null,d.W),b.K){Vs(d.h,b);var q=b,st=d.L;st&&(q.I=st),q.B&&(qr(q),Cn(q)),d.g=b}else Xs(d);0<l.i.length&&xn(l)}else B[0]!="stop"&&B[0]!="close"||se(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?se(l,7):Kr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}je(4)}catch{}}var sl=class{constructor(i,a){this.g=i,this.map=a}};function Ps(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bs(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Cs(i){return i.h?1:i.g?i.g.size:0}function zr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Gr(i,a){i.g?i.g.add(a):i.h=a}function Vs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Ps.prototype.cancel=function(){if(this.i=Ns(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ns(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return O(i.i)}function ol(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function al(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function Ds(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=al(i),d=ol(i),T=d.length,w=0;w<T;w++)a.call(void 0,d[w],l&&l[w],i)}var ks=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ul(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),T=null;if(0<=d){var w=i[l].substring(0,d);T=i[l].substring(d+1)}else w=i[l];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ie(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ie){this.h=i.h,Vn(this,i.j),this.o=i.o,this.g=i.g,Nn(this,i.s),this.l=i.l;var a=i.i,l=new We;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Os(this,l),this.m=i.m}else i&&(a=String(i).match(ks))?(this.h=!1,Vn(this,a[1]||"",!0),this.o=ze(a[2]||""),this.g=ze(a[3]||"",!0),Nn(this,a[4]),this.l=ze(a[5]||"",!0),Os(this,a[6]||"",!0),this.m=ze(a[7]||"")):(this.h=!1,this.i=new We(null,this.h))}ie.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ge(a,Ms,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ge(a,Ms,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Ge(l,l.charAt(0)=="/"?hl:cl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Ge(l,fl)),i.join("")};function xt(i){return new ie(i)}function Vn(i,a,l){i.j=l?ze(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Nn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Os(i,a,l){a instanceof We?(i.i=a,pl(i.i,i.h)):(l||(a=Ge(a,dl)),i.i=new We(a,i.h))}function G(i,a,l){i.i.set(a,l)}function Dn(i){return G(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function ze(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ge(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,ll),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function ll(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ms=/[#\/\?@]/g,cl=/[#\?:]/g,hl=/[#\?]/g,dl=/[#\?@]/g,fl=/#/g;function We(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ht(i){i.g||(i.g=new Map,i.h=0,i.i&&ul(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=We.prototype,n.add=function(i,a){Ht(this),this.i=null,i=ye(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function Ls(i,a){Ht(i),a=ye(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function xs(i,a){return Ht(i),a=ye(i,a),i.g.has(a)}n.forEach=function(i,a){Ht(this),this.g.forEach(function(l,d){l.forEach(function(T){i.call(a,T,d,this)},this)},this)},n.na=function(){Ht(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const T=i[d];for(let w=0;w<T.length;w++)l.push(a[d])}return l},n.V=function(i){Ht(this);let a=[];if(typeof i=="string")xs(this,i)&&(a=a.concat(this.g.get(ye(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},n.set=function(i,a){return Ht(this),this.i=null,i=ye(this,i),xs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Fs(i,a,l){Ls(i,a),0<l.length&&(i.i=null,i.g.set(ye(i,a),O(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var T=w;b[d]!==""&&(T+="="+encodeURIComponent(String(b[d]))),i.push(T)}}return this.i=i.join("&")};function ye(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function pl(i,a){a&&!i.j&&(Ht(i),i.i=null,i.g.forEach(function(l,d){var T=d.toLowerCase();d!=T&&(Ls(this,d),Fs(this,T,l))},i)),i.j=a}function ml(i,a){const l=new qe;if(c.Image){const d=new Image;d.onload=C(zt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=C(zt,l,"TestLoadImage: error",!1,a,d),d.onabort=C(zt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(zt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function gl(i,a){const l=new qe,d=new AbortController,T=setTimeout(()=>{d.abort(),zt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(T),w.ok?zt(l,"TestPingServer: ok",!0,a):zt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),zt(l,"TestPingServer: error",!1,a)})}function zt(i,a,l,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(l)}catch{}}function _l(){this.g=new Zu}function yl(i,a,l){const d=l||"";try{Ds(i,function(T,w){let b=T;f(T)&&(b=Lr(T)),a.push(d+w+"="+encodeURIComponent(b))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function kn(i){this.l=i.Ub||null,this.j=i.eb||!1}V(kn,xr),kn.prototype.g=function(){return new On(this.l,this.j)},kn.prototype.i=(function(i){return function(){return i}})({});function On(i,a){ht.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(On,ht),n=On.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,Qe(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Us(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Us(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Ke(this):Qe(this),this.readyState==3&&Us(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Ke(this))},n.Qa=function(i){this.g&&(this.response=i,Ke(this))},n.ga=function(){this.g&&Ke(this)};function Ke(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Qe(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function Qe(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(On.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Bs(i){let a="";return nt(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Wr(i,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Bs(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):G(i,a,l))}function J(i){ht.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(J,ht);var vl=/^https?$/i,El=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Br.g(),this.v=this.o?ms(this.o):ms(Br),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){js(this,w);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)l.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(El,a,void 0))||d||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of l)this.g.setRequestHeader(w,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hs(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){js(this,w)}};function js(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,$s(i),Mn(i)}function $s(i){i.A||(i.A=!0,_t(i,"complete"),_t(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,_t(this,"complete"),_t(this,"abort"),Mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qs(this):this.bb())},n.bb=function(){qs(this)};function qs(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Ft(i)!=4||i.Z()!=2)){if(i.u&&Ft(i)==4)hs(i.Ea,0,i);else if(_t(i,"readystatechange"),Ft(i)==4){i.h=!1;try{const b=i.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=b===0){var T=String(i.D).match(ks)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),d=!vl.test(T?T.toLowerCase():"")}l=d}if(l)_t(i,"complete"),_t(i,"success");else{i.m=6;try{var w=2<Ft(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",$s(i)}}finally{Mn(i)}}}}function Mn(i,a){if(i.g){Hs(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||_t(i,"ready");try{l.onreadystatechange=d}catch{}}}function Hs(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ft(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Yu(a)}};function zs(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Tl(i){const a={};i=(i.g&&2<=Ft(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if($(i[d]))continue;var l=y(i[d]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[T]||[];a[T]=w,w.push(l)}v(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xe(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function Gs(i){this.Aa=0,this.i=[],this.j=new qe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xe("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xe("baseRetryDelayMs",5e3,i),this.cb=Xe("retryDelaySeedMs",1e4,i),this.Wa=Xe("forwardChannelMaxRetries",2,i),this.wa=Xe("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ps(i&&i.concurrentRequestLimit),this.Da=new _l,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Gs.prototype,n.la=8,n.G=1,n.connect=function(i,a,l,d){yt(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=eo(this,null,this.W),xn(this)};function Kr(i){if(Ws(i),i.G==3){var a=i.U++,l=xt(i.I);if(G(l,"SID",i.K),G(l,"RID",a),G(l,"TYPE","terminate"),Je(i,l),a=new qt(i,i.j,a),a.L=2,a.v=Dn(xt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=no(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Cn(a)}to(i)}function Ln(i){i.g&&(Xr(i),i.g.cancel(),i.g=null)}function Ws(i){Ln(i),i.u&&(c.clearTimeout(i.u),i.u=null),Fn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function xn(i){if(!bs(i.h)&&!i.s){i.s=!0;var a=i.Ga;Le||os(),xe||(Le(),xe=!0),br.add(a,i),i.B=0}}function Il(i,a){return Cs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=$e(S(i.Ga,i,a),Zs(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new qt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Qs(this,T,a),l=xt(this.I),G(l,"RID",i),G(l,"CVER",22),this.D&&G(l,"X-HTTP-Session-Id",this.D),Je(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Bs(w)))+"&"+a:this.m&&Wr(l,this.m,w)),Gr(this.h,T),this.Ua&&G(l,"TYPE","init"),this.P?(G(l,"$req",a),G(l,"SID","null"),T.T=!0,$r(T,l,null)):$r(T,l,a),this.G=2}}else this.G==3&&(i?Ks(this,i):this.i.length==0||bs(this.h)||Ks(this))};function Ks(i,a){var l;a?l=a.l:l=i.U++;const d=xt(i.I);G(d,"SID",i.K),G(d,"RID",l),G(d,"AID",i.T),Je(i,d),i.m&&i.o&&Wr(d,i.m,i.o),l=new qt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Qs(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Gr(i.h,l),$r(l,d,a)}function Je(i,a){i.H&&nt(i.H,function(l,d){G(a,d,l)}),i.l&&Ds({},function(l,d){G(a,d,l)})}function Qs(i,a,l){l=Math.min(i.i.length,l);var d=i.l?S(i.l.Na,i.l,i):null;t:{var T=i.i;let w=-1;for(;;){const b=["count="+l];w==-1?0<l?(w=T[0].g,b.push("ofs="+w)):w=0:b.push("ofs="+w);let q=!0;for(let st=0;st<l;st++){let B=T[st].g;const dt=T[st].map;if(B-=w,0>B)w=Math.max(0,T[st].g-100),q=!1;else try{yl(dt,b,"req"+B+"_")}catch{d&&d(dt)}}if(q){d=b.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,d}function Xs(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Le||os(),xe||(Le(),xe=!0),br.add(a,i),i.v=0}}function Qr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=$e(S(i.Fa,i),Zs(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Js(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=$e(S(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Ln(this),Js(this))};function Xr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Js(i){i.g=new qt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=xt(i.qa);G(a,"RID","rpc"),G(a,"SID",i.K),G(a,"AID",i.T),G(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&G(a,"TO",i.ja),G(a,"TYPE","xmlhttp"),Je(i,a),i.m&&i.o&&Wr(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Dn(xt(a)),l.m=null,l.P=!0,ws(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),Qr(this),yt(19))};function Fn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ys(i,a){var l=null;if(i.g==a){Fn(i),Xr(i),i.g=null;var d=2}else if(zr(i.h,a))l=a.D,Vs(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=i.B;d=Sn(),_t(d,new Es(d,l)),xn(i)}else Xs(i);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&Il(i,a)||d==2&&Qr(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),T){case 1:se(i,5);break;case 4:se(i,10);break;case 3:se(i,6);break;default:se(i,2)}}}function Zs(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function se(i,a){if(i.j.info("Error code "+a),a==2){var l=S(i.fb,i),d=i.Xa;const T=!d;d=new ie(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Vn(d,"https"),Dn(d),T?ml(d.toString(),l):gl(d.toString(),l)}else yt(2);i.G=0,i.l&&i.l.sa(a),to(i),Ws(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function to(i){if(i.G=0,i.ka=[],i.l){const a=Ns(i.h);(a.length!=0||i.i.length!=0)&&(k(i.ka,a),k(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function eo(i,a,l){var d=l instanceof ie?xt(l):new ie(l);if(d.g!="")a&&(d.g=a+"."+d.g),Nn(d,d.s);else{var T=c.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new ie(null);d&&Vn(w,d),a&&(w.g=a),T&&Nn(w,T),l&&(w.l=l),d=w}return l=i.D,a=i.ya,l&&a&&G(d,l,a),G(d,"VER",i.la),Je(i,d),d}function no(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new J(new kn({eb:l})):new J(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ro(){}n=ro.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Un(){}Un.prototype.g=function(i,a){return new It(i,a)};function It(i,a){ht.call(this),this.g=new Gs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!$(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!$(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new ve(this)}V(It,ht),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Kr(this.g)},It.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Lr(i),i=l);a.i.push(new sl(a.Ya++,i)),a.G==3&&xn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,Kr(this.g),delete this.g,It.aa.N.call(this)};function io(i){Fr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}V(io,Fr);function so(){Ur.call(this),this.status=1}V(so,Ur);function ve(i){this.g=i}V(ve,ro),ve.prototype.ua=function(){_t(this.g,"a")},ve.prototype.ta=function(i){_t(this.g,new io(i))},ve.prototype.sa=function(i){_t(this.g,new so)},ve.prototype.ra=function(){_t(this.g,"b")},Un.prototype.createWebChannel=Un.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,$a=function(){return new Un},ja=function(){return Sn()},Ba=ne,pi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pn.NO_ERROR=0,Pn.TIMEOUT=8,Pn.HTTP_ERROR=6,Xn=Pn,Ts.COMPLETE="complete",Ua=Ts,gs.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ze=gs,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Fa=J}).apply(typeof $n<"u"?$n:typeof self<"u"?self:typeof window<"u"?window:{});const Po="@firebase/firestore",bo="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Ci("@firebase/firestore");function Te(){return he.logLevel}function N(n,...t){if(he.logLevel<=x.DEBUG){const e=t.map(Oi);he.debug(`Firestore (${Oe}): ${n}`,...e)}}function de(n,...t){if(he.logLevel<=x.ERROR){const e=t.map(Oi);he.error(`Firestore (${Oe}): ${n}`,...e)}}function ln(n,...t){if(he.logLevel<=x.WARN){const e=t.map(Oi);he.warn(`Firestore (${Oe}): ${n}`,...e)}}function Oi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,qa(n,r,e)}function qa(n,t,e){let r=`FIRESTORE (${Oe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw de(r),new Error(r)}function Y(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||qa(t,s,r)}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends te{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(vt.UNAUTHENTICATED)))}shutdown(){}}class Lh{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new le;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new le,t.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new le)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new Oh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new vt(t)}}class xh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Fh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new xh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Co{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,oe(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Co(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Co(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Bh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function mi(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=jh(),u=$h(o.encode(Vo(n,e)),o.encode(Vo(t,e)));return u!==0?u:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function Vo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function $h(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Ce(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="__name__";class Dt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Dt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Dt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Dt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=Dt.isNumericId(t),s=Dt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Dt.extractNumericId(t).compare(Dt.extractNumericId(e)):mi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ki.fromString(t.substring(4,t.length-2))}}class X extends Dt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const qh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Dt{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return qh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===No}static keyField(){return new ut([No])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new D(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(r+=c,s++):(o(),s++)}if(o(),u)throw new D(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n,t,e){if(!e)throw new D(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Hh(n,t,e,r){if(t===!0&&r===!0)throw new D(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Do(n){if(!M.isDocumentKey(n))throw new D(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ko(n){if(M.isDocumentKey(n))throw new D(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function za(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Li(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function zh(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Li(n);throw new D(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,t){const e={typeString:n};return t&&(e.value=t),e}function gn(n,t){if(!za(n))throw new D(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=-62135596800,Mo=1e6;class Q{static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Mo);return new Q(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Oo)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Q._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gn(t,Q._jsonSchema))return new Q(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Oo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Q._jsonSchemaVersion="firestore/timestamp/1.0",Q._jsonSchema={type:tt("string",Q._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new Q(0,0))}static max(){return new K(new Q(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=-1;function Gh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new Q(e+1,0):new Q(e,r));return new Xt(s,M.empty(),t)}function Wh(n){return new Xt(n.readTime,n.key,cn)}class Xt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Xt(K.min(),M.empty(),cn)}static max(){return new Xt(K.max(),M.empty(),cn)}}function Kh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Qh)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let s=0,o=0,u=!1;t.forEach((c=>{++s,c.next((()=>{++o,u&&o===s&&e()}),(h=>r(h)))})),u=!0,o===s&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((s=>s?R.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,s)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next((E=>{u[f]=E,++c,c===o&&r(u)}),(E=>s(E)))}}))}static doWhile(t,e){return new R(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function Jh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function _n(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Fi.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=-1;function Bi(n){return n==null}function sr(n){return n===0&&1/n==-1/0}function Yh(n){return typeof n=="number"&&Number.isInteger(n)&&!sr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="";function Zh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Lo(t)),t=td(n.get(e),t);return Lo(t)}function td(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Ga:e+="";break;default:e+=o}}return e}function Lo(n){return n+Ga+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Wa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new Tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new Tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qn(this.root,t,this.comparator,!0)}}class qn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ot(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new Tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fo(this.data.getIterator())}getIteratorFrom(t){return new Fo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Fo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new wt([])}unionWith(t){let e=new lt(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ce(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ed("Invalid base64 string: "+o):o}})(t);return new Ot(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o})(t);return new Ot(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const nd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fe(n){if(Y(!!n,39018),typeof n=="string"){let t=0;const e=nd.exec(n);if(Y(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ve(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="server_timestamp",Qa="__type__",Xa="__previous_value__",Ja="__local_write_time__";function ji(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Qa])===null||e===void 0?void 0:e.stringValue)===Ka}function $i(n){const t=n.mapValue.fields[Xa];return ji(t)?$i(t):t}function or(n){const t=fe(n.mapValue.fields[Ja].timestampValue);return new Q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,e,r,s,o,u,c,h,f,E){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=E}}const gi="(default)";class ar{constructor(t,e){this.projectId=t,this.database=e||gi}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database===gi}isEqual(t){return t instanceof ar&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="__type__",id="__max__",Hn={mapValue:{}},Za="__vector__",_i="value";function pe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ji(n)?4:od(n)?9007199254740991:sd(n)?10:11:L(28295,{value:n})}function Mt(n,t){if(n===t)return!0;const e=pe(n);if(e!==pe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return or(n).isEqual(or(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=fe(s.timestampValue),c=fe(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return Ve(s.bytesValue).isEqual(Ve(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return at(s.geoPointValue.latitude)===at(o.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return at(s.integerValue)===at(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=at(s.doubleValue),c=at(o.doubleValue);return u===c?sr(u)===sr(c):isNaN(u)&&isNaN(c)}return!1})(n,t);case 9:return Ce(n.arrayValue.values||[],t.arrayValue.values||[],Mt);case 10:case 11:return(function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(xo(u)!==xo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Mt(u[h],c[h])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function hn(n,t){return(n.values||[]).find((e=>Mt(e,t)))!==void 0}function Ne(n,t){if(n===t)return 0;const e=pe(n),r=pe(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return(function(o,u){const c=at(o.integerValue||o.doubleValue),h=at(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,t);case 3:return Uo(n.timestampValue,t.timestampValue);case 4:return Uo(or(n),or(t));case 5:return mi(n.stringValue,t.stringValue);case 6:return(function(o,u){const c=Ve(o),h=Ve(u);return c.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const E=U(c[f],h[f]);if(E!==0)return E}return U(c.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,u){const c=U(at(o.latitude),at(u.latitude));return c!==0?c:U(at(o.longitude),at(u.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Bo(n.arrayValue,t.arrayValue);case 10:return(function(o,u){var c,h,f,E;const A=o.fields||{},S=u.fields||{},C=(c=A[_i])===null||c===void 0?void 0:c.arrayValue,V=(h=S[_i])===null||h===void 0?void 0:h.arrayValue,O=U(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((E=V==null?void 0:V.values)===null||E===void 0?void 0:E.length)||0);return O!==0?O:Bo(C,V)})(n.mapValue,t.mapValue);case 11:return(function(o,u){if(o===Hn.mapValue&&u===Hn.mapValue)return 0;if(o===Hn.mapValue)return 1;if(u===Hn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},E=Object.keys(f);h.sort(),E.sort();for(let A=0;A<h.length&&A<E.length;++A){const S=mi(h[A],E[A]);if(S!==0)return S;const C=Ne(c[h[A]],f[E[A]]);if(C!==0)return C}return U(h.length,E.length)})(n.mapValue,t.mapValue);default:throw L(23264,{le:e})}}function Uo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=fe(n),r=fe(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function Bo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ne(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function De(n){return yi(n)}function yi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=fe(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Ve(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=yi(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${yi(e.fields[u])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function Jn(n){switch(pe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=$i(n);return t?16+Jn(t):16;case 5:return 2*n.stringValue.length;case 6:return Ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+Jn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return me(r.fields,((o,u)=>{s+=o.length+Jn(u)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function vi(n){return!!n&&"integerValue"in n}function qi(n){return!!n&&"arrayValue"in n}function Yn(n){return!!n&&"mapValue"in n}function sd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ya])===null||e===void 0?void 0:e.stringValue)===Za}function nn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return me(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=nn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=nn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function od(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===id}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Yn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nn(e)}setAll(t){let e=ut.emptyPath(),r={},s=[];t.forEach(((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}u?r[c.lastSegment()]=nn(u):s.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Yn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Mt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Yn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){me(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new At(nn(this.value))}}function tu(n){const t=[];return me(n.fields,((e,r)=>{const s=new ut([e]);if(Yn(r)){const o=tu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)})),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e,r,s,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new Pt(t,0,K.min(),K.min(),K.min(),At.empty(),0)}static newFoundDocument(t,e,r,s){return new Pt(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new Pt(t,2,e,K.min(),K.min(),At.empty(),0)}static newUnknownDocument(t,e){return new Pt(t,3,e,K.min(),K.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e){this.position=t,this.inclusive=e}}function jo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(u.referenceValue),e.key):r=Ne(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function $o(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Mt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e="asc"){this.field=t,this.dir=e}}function ad(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{}class it extends eu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ld(t,e,r):e==="array-contains"?new dd(t,r):e==="in"?new fd(t,r):e==="not-in"?new pd(t,r):e==="array-contains-any"?new md(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new cd(t,r):new hd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ne(e,this.value)):e!==null&&pe(this.value)===pe(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends eu{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Jt(t,e)}matches(t){return nu(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function nu(n){return n.op==="and"}function ru(n){return ud(n)&&nu(n)}function ud(n){for(const t of n.filters)if(t instanceof Jt)return!1;return!0}function Ei(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+De(n.value);if(ru(n))return n.filters.map((t=>Ei(t))).join(",");{const t=n.filters.map((e=>Ei(e))).join(",");return`${n.op}(${t})`}}function iu(n,t){return n instanceof it?(function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)})(n,t):n instanceof Jt?(function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,u,c)=>o&&iu(u,s.filters[c])),!0):!1})(n,t):void L(19439)}function su(n){return n instanceof it?(function(e){return`${e.field.canonicalString()} ${e.op} ${De(e.value)}`})(n):n instanceof Jt?(function(e){return e.op.toString()+" {"+e.getFilters().map(su).join(" ,")+"}"})(n):"Filter"}class ld extends it{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class cd extends it{constructor(t,e){super(t,"in",e),this.keys=ou("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class hd extends it{constructor(t,e){super(t,"not-in",e),this.keys=ou("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ou(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>M.fromName(r.referenceValue)))}class dd extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qi(e)&&hn(e.arrayValue,this.value)}}class fd extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&hn(this.value.arrayValue,e)}}class pd extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!hn(this.value.arrayValue,e)}}class md extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>hn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,e=null,r=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.Pe=null}}function qo(n,t=null,e=[],r=[],s=null,o=null,u=null){return new gd(n,t,e,r,s,o,u)}function Hi(n){const t=z(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Ei(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Bi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>De(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>De(r))).join(",")),t.Pe=e}return t.Pe}function zi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ad(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!iu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$o(n.startAt,t.startAt)&&$o(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e=null,r=[],s=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function _d(n,t,e,r,s,o,u,c){return new yr(n,t,e,r,s,o,u,c)}function yd(n){return new yr(n)}function Ho(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vd(n){return n.collectionGroup!==null}function rn(n){const t=z(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new lt(ut.comparator);return u.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new lr(o,r))})),e.has(ut.keyField().canonicalString())||t.Te.push(new lr(ut.keyField(),r))}return t.Te}function ce(n){const t=z(n);return t.Ie||(t.Ie=Ed(t,rn(n))),t.Ie}function Ed(n,t){if(n.limitType==="F")return qo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new lr(s.field,o)}));const e=n.endAt?new ur(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ur(n.startAt.position,n.startAt.inclusive):null;return qo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ti(n,t,e){return new yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function au(n,t){return zi(ce(n),ce(t))&&n.limitType===t.limitType}function uu(n){return`${Hi(ce(n))}|lt:${n.limitType}`}function Ye(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>su(s))).join(", ")}]`),Bi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>De(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>De(s))).join(",")),`Target(${r})`})(ce(n))}; limitType=${n.limitType})`}function Gi(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of rn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(u,c,h){const f=jo(u,c,h);return u.inclusive?f<=0:f<0})(r.startAt,rn(r),s)||r.endAt&&!(function(u,c,h){const f=jo(u,c,h);return u.inclusive?f>=0:f>0})(r.endAt,rn(r),s))})(n,t)}function Td(n){return(t,e)=>{let r=!1;for(const s of rn(n)){const o=Id(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Id(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ne(h,f):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){me(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return Wa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Tt(M.comparator);function cr(){return Ad}const lu=new Tt(M.comparator);function zn(...n){let t=lu;for(const e of n)t=t.insert(e.key,e);return t}function cu(n){let t=lu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ue(){return sn()}function hu(){return sn()}function sn(){return new ge((n=>n.toString()),((n,t)=>n.isEqual(t)))}const wd=new Tt(M.comparator),Rd=new lt(M.comparator);function mt(...n){let t=Rd;for(const e of n)t=t.add(e);return t}const Sd=new lt(U);function Pd(){return Sd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sr(t)?"-0":t}}function du(n){return{integerValue:""+n}}function bd(n,t){return Yh(t)?du(t):Wi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this._=void 0}}function Cd(n,t,e){return n instanceof hr?(function(s,o){const u={fields:{[Qa]:{stringValue:Ka},[Ja]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ji(o)&&(o=$i(o)),o&&(u.fields[Xa]=o),{mapValue:u}})(e,t):n instanceof dn?pu(n,t):n instanceof fn?mu(n,t):(function(s,o){const u=fu(s,o),c=zo(u)+zo(s.Ee);return vi(u)&&vi(s.Ee)?du(c):Wi(s.serializer,c)})(n,t)}function Vd(n,t,e){return n instanceof dn?pu(n,t):n instanceof fn?mu(n,t):e}function fu(n,t){return n instanceof dr?(function(r){return vi(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class hr extends vr{}class dn extends vr{constructor(t){super(),this.elements=t}}function pu(n,t){const e=gu(t);for(const r of n.elements)e.some((s=>Mt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class fn extends vr{constructor(t){super(),this.elements=t}}function mu(n,t){let e=gu(t);for(const r of n.elements)e=e.filter((s=>!Mt(s,r)));return{arrayValue:{values:e}}}class dr extends vr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function zo(n){return at(n.integerValue||n.doubleValue)}function gu(n){return qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Nd(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof dn&&s instanceof dn||r instanceof fn&&s instanceof fn?Ce(r.elements,s.elements,Mt):r instanceof dr&&s instanceof dr?Mt(r.Ee,s.Ee):r instanceof hr&&s instanceof hr})(n.transform,t.transform)}class Dd{constructor(t,e){this.version=t,this.transformResults=e}}class Ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Er{}function _u(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ki(n.key,Ct.none()):new yn(n.key,n.data,Ct.none());{const e=n.data,r=At.empty();let s=new lt(ut.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new ee(n.key,r,new wt(s.toArray()),Ct.none())}}function kd(n,t,e){n instanceof yn?(function(s,o,u){const c=s.value.clone(),h=Wo(s.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()})(n,t,e):n instanceof ee?(function(s,o,u){if(!Zn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Wo(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(yu(s)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function on(n,t,e,r){return n instanceof yn?(function(o,u,c,h){if(!Zn(o.precondition,u))return c;const f=o.value.clone(),E=Ko(o.fieldTransforms,h,u);return f.setAll(E),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof ee?(function(o,u,c,h){if(!Zn(o.precondition,u))return c;const f=Ko(o.fieldTransforms,h,u),E=u.data;return E.setAll(yu(o)),E.setAll(f),u.convertToFoundDocument(u.version,E).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((A=>A.field)))})(n,t,e,r):(function(o,u,c){return Zn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c})(n,t,e)}function Od(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=fu(r.transform,s||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function Go(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ce(r,s,((o,u)=>Nd(o,u)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class yn extends Er{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ee extends Er{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function yu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Wo(n,t,e){const r=new Map;Y(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);r.set(o.field,Vd(u,c,e[s]))}return r}function Ko(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,Cd(o,u,t))}return r}class Ki extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Md extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&kd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=on(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=on(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=hu();return this.mutations.forEach((s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const h=_u(u,c);h!==null&&r.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(K.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),mt())}isEqual(t){return this.batchId===t.batchId&&Ce(this.mutations,t.mutations,((e,r)=>Go(e,r)))&&Ce(this.baseMutations,t.baseMutations,((e,r)=>Go(e,r)))}}class Qi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Y(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=(function(){return wd})();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,r[u].version);return new Qi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,F;function Fd(n){switch(n){case P.OK:return L(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Ud(n){if(n===void 0)return de("GRPC error has no .code"),P.UNKNOWN;switch(n){case Z.OK:return P.OK;case Z.CANCELLED:return P.CANCELLED;case Z.UNKNOWN:return P.UNKNOWN;case Z.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Z.INTERNAL:return P.INTERNAL;case Z.UNAVAILABLE:return P.UNAVAILABLE;case Z.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Z.NOT_FOUND:return P.NOT_FOUND;case Z.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Z.ABORTED:return P.ABORTED;case Z.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Z.DATA_LOSS:return P.DATA_LOSS;default:return L(39323,{code:n})}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ki([4294967295,4294967295],0);class Bd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ii(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function jd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function $d(n,t){return Ii(n,t.toTimestamp())}function Re(n){return Y(!!n,49232),K.fromTimestamp((function(e){const r=fe(e);return new Q(r.seconds,r.nanos)})(n))}function vu(n,t){return Ai(n,t).canonicalString()}function Ai(n,t){const e=(function(s){return new X(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function qd(n){const t=X.fromString(n);return Y(Jd(t),10190,{key:t.toString()}),t}function wi(n,t){return vu(n.databaseId,t.path)}function Hd(n){const t=qd(n);return t.length===4?X.emptyPath():Gd(t)}function zd(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gd(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Qo(n,t,e){return{name:wi(n,t),fields:e.value.mapValue.fields}}function Wd(n,t){let e;if(t instanceof yn)e={update:Qo(n,t.key,t.value)};else if(t instanceof Ki)e={delete:wi(n,t.key)};else if(t instanceof ee)e={update:Qo(n,t.key,t.data),updateMask:Xd(t.fieldMask)};else{if(!(t instanceof Md))return L(16599,{Rt:t.type});e={verify:wi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,u){const c=u.transform;if(c instanceof hr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof dn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof dr)return{fieldPath:u.field.canonicalString(),increment:c.Ee};throw L(20930,{transform:u.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:$d(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function Kd(n,t){return n&&n.length>0?(Y(t!==void 0,14353),n.map((e=>(function(s,o){let u=s.updateTime?Re(s.updateTime):Re(o);return u.isEqual(K.min())&&(u=Re(o)),new Dd(u,s.transformResults||[])})(e,t)))):[]}function Qd(n){let t=Hd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Y(r===1,65062);const E=e.from[0];E.allDescendants?s=E.collectionId:t=t.child(E.collectionId)}let o=[];e.where&&(o=(function(A){const S=Eu(A);return S instanceof Jt&&ru(S)?S.getFilters():[S]})(e.where));let u=[];e.orderBy&&(u=(function(A){return A.map((S=>(function(V){return new lr(Ie(V.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(S)))})(e.orderBy));let c=null;e.limit&&(c=(function(A){let S;return S=typeof A=="object"?A.value:A,Bi(S)?null:S})(e.limit));let h=null;e.startAt&&(h=(function(A){const S=!!A.before,C=A.values||[];return new ur(C,S)})(e.startAt));let f=null;return e.endAt&&(f=(function(A){const S=!A.before,C=A.values||[];return new ur(C,S)})(e.endAt)),_d(t,s,u,o,c,"F",h,f)}function Eu(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ie(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ie(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ie(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ie(e.unaryFilter.field);return it.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return it.create(Ie(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Jt.create(e.compositeFilter.filters.map((r=>Eu(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function Ie(n){return ut.fromServerFormat(n.fieldPath)}function Xd(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Jd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){this.gt=t}}function Zd(n){const t=Qd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ti(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Dn=new ef}addToCollectionParentIndex(t,e){return this.Dn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Xt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class ef{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new lt(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new lt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Tu=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Tu,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new ke(0)}static ur(){return new ke(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="LruGarbageCollector",nf=1048576;function Yo([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class rf{constructor(t){this.Tr=t,this.buffer=new lt(Yo),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Yo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class sf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(Jo,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){_n(e)?N(Jo,"Ignoring IndexedDB error during garbage collection: ",e):await xi(e)}await this.Rr(3e5)}))}}class of{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Fi.ue);const r=new rf(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Xo)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xo):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,u,c,h,f;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),s=this.params.maximumSequenceNumbersToCollect):s=A,u=Date.now(),this.nthSequenceNumber(t,s)))).next((A=>(r=A,c=Date.now(),this.removeTargets(t,r,e)))).next((A=>(o=A,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(f=Date.now(),Te()<=x.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-E}ms
	Determined least recently used ${s} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${A} documents in `+(f-h)+`ms
Total Duration: ${f-E}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:A}))))}}function af(n,t){return new of(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.changes=new ge((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&on(r.mutation,s,wt.empty(),Q.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,mt()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=mt()){const s=ue();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let u=zn();return o.forEach(((c,h)=>{u=u.insert(c,h.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const r=ue();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,mt())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((u,c)=>{e.set(u,c)}))}))}computeViews(t,e,r,s){let o=cr();const u=sn(),c=(function(){return sn()})();return e.forEach(((h,f)=>{const E=r.get(f.key);s.has(f.key)&&(E===void 0||E.mutation instanceof ee)?o=o.insert(f.key,f):E!==void 0?(u.set(f.key,E.mutation.getFieldMask()),on(E.mutation,f,E.mutation.getFieldMask(),Q.now())):u.set(f.key,wt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((f,E)=>u.set(f,E))),e.forEach(((f,E)=>{var A;return c.set(f,new lf(E,(A=u.get(f))!==null&&A!==void 0?A:null))})),c)))}recalculateAndSaveOverlays(t,e){const r=sn();let s=new Tt(((u,c)=>u-c)),o=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const c of u)c.keys().forEach((h=>{const f=e.get(h);if(f===null)return;let E=r.get(h)||wt.empty();E=c.applyToLocalView(f,E),r.set(h,E);const A=(s.get(c.batchId)||mt()).add(h);s=s.insert(c.batchId,A)}))})).next((()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,E=h.value,A=hu();E.forEach((S=>{if(!o.has(S)){const C=_u(e.get(S),r.get(S));C!==null&&A.set(S,C),o=o.add(S)}})),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return R.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):vd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):R.resolve(ue());let c=cn,h=o;return u.next((f=>R.forEach(f,((E,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(E)?R.resolve():this.remoteDocumentCache.getEntry(t,E).next((S=>{h=h.insert(E,S)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,h,f,mt()))).next((E=>({batchId:c,changes:cu(E)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let s=zn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=zn();return this.indexManager.getCollectionParents(t,o).next((c=>R.forEach(c,(h=>{const f=(function(A,S){return new yr(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next((E=>{E.forEach(((A,S)=>{u=u.insert(A,S)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((u=>{o.forEach(((h,f)=>{const E=f.getKey();u.get(E)===null&&(u=u.insert(E,Pt.newInvalidDocument(E)))}));let c=zn();return u.forEach(((h,f)=>{const E=o.get(h);E!==void 0&&on(E.mutation,f,wt.empty(),Q.now()),Gi(e,f)&&(c=c.insert(h,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return R.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Re(s.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Zd(s.bundledQuery),readTime:Re(s.readTime)}})(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.overlays=new Tt(M.comparator),this.kr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ue();return R.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.wt(t,e,o)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=ue(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Tt(((f,E)=>f-E));const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let E=o.get(f.largestBatchId);E===null&&(E=ue(),o=o.insert(f.largestBatchId,E)),E.set(f.getKey(),f)}}const c=ue(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,E)=>c.set(f,E))),!(c.size()>=s)););return R.resolve(c)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new xd(e,r));let o=this.kr.get(e);o===void 0&&(o=mt(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.qr=new lt(rt.Qr),this.$r=new lt(rt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new rt(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new rt(t,e))}Gr(t,e){t.forEach((r=>this.removeReference(r,e)))}zr(t){const e=new M(new X([])),r=new rt(e,t),s=new rt(e,t+1),o=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),o.push(u.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new M(new X([])),r=new rt(e,t),s=new rt(e,t+1);let o=mt();return this.$r.forEachInRange([r,s],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new rt(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return M.comparator(t.key,e.key)||U(t.Hr,e.Hr)}static Ur(t,e){return U(t.Hr,e.Hr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new lt(rt.Qr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Ld(o,e,r,s);this.mutationQueue.push(u);for(const c of s)this.Yr=this.Yr.add(new rt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Ui:this.er-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),s=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],(u=>{const c=this.Zr(u.Hr);o.push(c)})),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(U);return e.forEach((s=>{const o=new rt(s,0),u=new rt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,u],(c=>{r=r.add(c.Hr)}))})),R.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const u=new rt(new M(o),0);let c=new lt(U);return this.Yr.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.Hr)),!0)}),u),R.resolve(this.ei(c))}ei(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){Y(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return R.forEach(e.mutations,(s=>{const o=new rt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=r}))}rr(t){}containsKey(t,e){const r=new rt(e,0),s=this.Yr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.ni=t,this.docs=(function(){return new Tt(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(e))}getEntries(t,e){let r=cr();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Pt.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=cr();const u=e.path,c=new M(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:E}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Kh(Wh(E),r)<=0||(s.has(E.key)||Gi(e,E))&&(o=o.insert(E.key,E.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ri(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new gf(this)}getSize(t){return R.resolve(this.size)}}class gf extends uf{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this.persistence=t,this.ii=new ge((e=>Hi(e)),zi),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.si=0,this.oi=new Xi,this.targetCount=0,this._i=ke.ar()}forEachTarget(t,e){return this.ii.forEach(((r,s)=>e(s))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),R.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new ke(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.hr(e),R.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach(((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ii.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),R.waitFor(o).next((()=>s))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((u=>{o.push(s.markPotentiallyOrphaned(t,u))})),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,e){this.ai={},this.overlays={},this.ui=new Fi(0),this.ci=!1,this.ci=!0,this.li=new ff,this.referenceDelegate=t(this),this.hi=new _f(this),this.indexManager=new tf,this.remoteDocumentCache=(function(s){return new mf(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Yd(e),this.Ti=new hf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new df,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new pf(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new yf(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return R.or(Object.values(this.ai).map((r=>()=>r.containsKey(t,e))))}}class yf extends Xh{constructor(t){super(),this.currentSequenceNumber=t}}class Ji{constructor(t){this.persistence=t,this.Ai=new Xi,this.Ri=null}static Vi(t){return new Ji(t)}get mi(){if(this.Ri)return this.Ri;throw L(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.mi,(r=>{const s=M.fromPath(r);return this.fi(t,s).next((o=>{o||e.removeEntry(s,K.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return R.or([()=>R.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class fr{constructor(t,e){this.persistence=t,this.gi=new ge((r=>Zh(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=af(this,e)}static Vi(t,e){return new fr(t,e)}Ii(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}yr(t){let e=0;return this.gr(t,(r=>{e++})).next((()=>e))}gr(t,e){return R.forEach(this.gi,((r,s)=>this.Sr(t,r,s).next((o=>o?R.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,(u=>this.Sr(t,u,e).next((c=>{c||(r++,o.removeEntry(u,K.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),R.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Jn(t.data.value)),e}Sr(t,e,r){return R.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=mt(),s=mt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Yi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return xl()?8:Jh(Vt())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ys(t,e,s,r).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new vf;return this.ws(t,e,u).next((c=>{if(o.result=c,this.Rs)return this.Ss(t,e,u,c.size)}))})).next((()=>o.result))}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(Te()<=x.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(Te()<=x.DEBUG&&N("QueryEngine","Query:",Ye(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Te()<=x.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ce(e))):R.resolve())}ps(t,e){if(Ho(e))return R.resolve(null);let r=ce(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ti(e,null,"F"),r=ce(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const u=mt(...o);return this.gs.getDocuments(t,u).next((c=>this.indexManager.getMinOffset(t,r).next((h=>{const f=this.bs(e,c);return this.Ds(e,f,u,h.readTime)?this.ps(t,Ti(e,null,"F")):this.vs(t,f,e,h)}))))})))))}ys(t,e,r,s){return Ho(e)||s.isEqual(K.min())?R.resolve(null):this.gs.getDocuments(t,r).next((o=>{const u=this.bs(e,o);return this.Ds(e,u,r,s)?R.resolve(null):(Te()<=x.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ye(e)),this.vs(t,u,e,Gh(s,cn)).next((c=>c)))}))}bs(t,e){let r=new lt(Td(t));return e.forEach(((s,o)=>{Gi(t,o)&&(r=r.add(o))})),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return Te()<=x.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ye(e)),this.gs.getDocumentsMatchingQuery(t,e,Xt.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="LocalStore";class If{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new Tt(U),this.Ms=new ge((o=>Hi(o)),zi),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cf(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function Af(n,t,e,r){return new If(n,t,e,r)}async function Au(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const u=[],c=[];let h=mt();for(const f of s){u.push(f.batchId);for(const E of f.mutations)h=h.add(E.key)}for(const f of o){c.push(f.batchId);for(const E of f.mutations)h=h.add(E.key)}return e.localDocuments.getDocuments(r,h).next((f=>({Bs:f,removedBatchIds:u,addedBatchIds:c})))}))}))}function wf(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(c,h,f,E){const A=f.batch,S=A.keys();let C=R.resolve();return S.forEach((V=>{C=C.next((()=>E.getEntry(h,V))).next((O=>{const k=f.docVersions.get(V);Y(k!==null,48541),O.version.compareTo(k)<0&&(A.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),E.addEntry(O)))}))})),C.next((()=>c.mutationQueue.removeMutationBatch(h,A)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let h=mt();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Rf(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function Sf(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Ui),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class Zo{constructor(){this.activeTargetIds=Pd()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pf{constructor(){this.Fo=new Zo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Zo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="ConnectivityMonitor";class ea{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(ta,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(ta,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn=null;function Ri(){return Gn===null?Gn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gn++,"0x"+Gn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="RestConnection",Cf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Vf{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===gi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const u=Ri(),c=this.Go(t,e.toUriEncodedString());N(si,`Sending RPC '${t}' ${u}:`,c,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:f}=new URL(c),E=bi(f);return this.jo(t,c,h,r,E).then((A=>(N(si,`Received RPC '${t}' ${u}: `,A),A)),(A=>{throw ln(si,`RPC '${t}' ${u} failed with error: `,A,"url: ",c,"request:",r),A}))}Jo(t,e,r,s,o,u){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Oe})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Go(t,e){const r=Cf[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Df extends Vf{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const u=Ri();return new Promise(((c,h)=>{const f=new Fa;f.setWithCredentials(!0),f.listenOnce(Ua.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Xn.NO_ERROR:const A=f.getResponseJson();N(pt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(A)),c(A);break;case Xn.TIMEOUT:N(pt,`RPC '${t}' ${u} timed out`),h(new D(P.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const S=f.getStatus();if(N(pt,`RPC '${t}' ${u} failed with status:`,S,"response text:",f.getResponseText()),S>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const V=C==null?void 0:C.error;if(V&&V.status&&V.message){const O=(function(W){const $=W.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN})(V.status);h(new D(O,V.message))}else h(new D(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new D(P.UNAVAILABLE,"Connection failed."));break;default:L(9055,{c_:t,streamId:u,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{N(pt,`RPC '${t}' ${u} completed.`)}}));const E=JSON.stringify(s);N(pt,`RPC '${t}' ${u} sending request:`,s),f.send(e,"POST",E,r,15)}))}P_(t,e,r){const s=Ri(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=$a(),c=ja(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const E=o.join("");N(pt,`Creating RPC '${t}' stream ${s}: ${E}`,h);const A=u.createWebChannel(E,h);this.T_(A);let S=!1,C=!1;const V=new Nf({Ho:k=>{C?N(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(S||(N(pt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),S=!0),N(pt,`RPC '${t}' stream ${s} sending:`,k),A.send(k))},Yo:()=>A.close()}),O=(k,W,$)=>{k.listen(W,(H=>{try{$(H)}catch(et){setTimeout((()=>{throw et}),0)}}))};return O(A,Ze.EventType.OPEN,(()=>{C||(N(pt,`RPC '${t}' stream ${s} transport opened.`),V.s_())})),O(A,Ze.EventType.CLOSE,(()=>{C||(C=!0,N(pt,`RPC '${t}' stream ${s} transport closed`),V.__(),this.I_(A))})),O(A,Ze.EventType.ERROR,(k=>{C||(C=!0,ln(pt,`RPC '${t}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),V.__(new D(P.UNAVAILABLE,"The operation could not be completed")))})),O(A,Ze.EventType.MESSAGE,(k=>{var W;if(!C){const $=k.data[0];Y(!!$,16349);const H=$,et=(H==null?void 0:H.error)||((W=H[0])===null||W===void 0?void 0:W.error);if(et){N(pt,`RPC '${t}' stream ${s} received error:`,et);const Nt=et.status;let nt=(function(g){const _=Z[g];if(_!==void 0)return Ud(_)})(Nt),v=et.message;nt===void 0&&(nt=P.INTERNAL,v="Unknown error status: "+Nt+" with message "+et.message),C=!0,V.__(new D(nt,v)),A.close()}else N(pt,`RPC '${t}' stream ${s} received:`,$),V.a_($)}})),O(c,Ba.STAT_EVENT,(k=>{k.stat===pi.PROXY?N(pt,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===pi.NOPROXY&&N(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function oi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){return new Bd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="PersistentStream";class kf{constructor(t,e,r,s,o,u,c,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new wu(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(de(e.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===e&&this.W_(r,s)}),(r=>{t((()=>{const s=new D(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return N(na,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(N(na,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Of extends kf{constructor(t,e,r,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Kd(t.writeResults,t.commitTime),r=Re(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=zd(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Wd(this.serializer,r)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{}class Lf extends Mf{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Wo(t,Ai(e,r),s,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(P.UNKNOWN,o.toString())}))}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,c])=>this.connection.Jo(t,Ai(e,r),s,u,c,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new D(P.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class xf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(de(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="RemoteStore";class Ff{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Tn(this)&&(N(vn,"Restarting streams for network reachability change."),await(async function(h){const f=z(h);f.Ia.add(4),await En(f),f.Aa.set("Unknown"),f.Ia.delete(4),await Ir(f)})(this))}))})),this.Aa=new xf(r,s)}}async function Ir(n){if(Tn(n))for(const t of n.da)await t(!0)}async function En(n){for(const t of n.da)await t(!1)}function Tn(n){return z(n).Ia.size===0}async function Ru(n,t,e){if(!_n(t))throw t;n.Ia.add(1),await En(n),n.Aa.set("Offline"),e||(e=()=>Rf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(vn,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Ir(n)}))}function Su(n,t){return t().catch((e=>Ru(n,e,t)))}async function Ar(n){const t=z(n),e=Yt(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Ui;for(;Uf(t);)try{const s=await Sf(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,Bf(t,s)}catch(s){await Ru(t,s)}Pu(t)&&bu(t)}function Uf(n){return Tn(n)&&n.Pa.length<10}function Bf(n,t){n.Pa.push(t);const e=Yt(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function Pu(n){return Tn(n)&&!Yt(n).M_()&&n.Pa.length>0}function bu(n){Yt(n).start()}async function jf(n){Yt(n).na()}async function $f(n){const t=Yt(n);for(const e of n.Pa)t.X_(e.mutations)}async function qf(n,t,e){const r=n.Pa.shift(),s=Qi.from(r,t,e);await Su(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ar(n)}async function Hf(n,t){t&&Yt(n).Z_&&await(async function(r,s){if((function(u){return Fd(u)&&u!==P.ABORTED})(s.code)){const o=r.Pa.shift();Yt(r).N_(),await Su(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Ar(r)}})(n,t),Pu(n)&&bu(n)}async function ra(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),N(vn,"RemoteStore received new credentials");const r=Tn(e);e.Ia.add(3),await En(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Ir(e)}async function zf(n,t){const e=z(n);t?(e.Ia.delete(2),await Ir(e)):t||(e.Ia.add(2),await En(e),e.Aa.set("Unknown"))}function Yt(n){return n.ma||(n.ma=(function(e,r,s){const o=z(e);return o.ia(),new Of(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:jf.bind(null,n),n_:Hf.bind(null,n),ea:$f.bind(null,n),ta:qf.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await Ar(n)):(await n.ma.stop(),n.Pa.length>0&&(N(vn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,c=new Zi(t,e,u,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cu(n,t){if(de("AsyncQueue",`${t}: ${n}`),_n(n))return new D(P.UNAVAILABLE,`${t}: ${n}`);throw n}class Gf{constructor(){this.queries=ia(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=z(e),o=s.queries;s.queries=ia(),o.forEach(((u,c)=>{for(const h of c.wa)h.onError(r)}))})(this,new D(P.ABORTED,"Firestore shutting down"))}}function ia(){return new ge((n=>uu(n)),au)}function Wf(n){n.Da.forEach((t=>{t.next()}))}var sa,oa;(oa=sa||(sa={})).Fa="default",oa.Cache="cache";const Kf="SyncEngine";class Qf{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ge((c=>uu(c)),au),this.Tu=new Map,this.Iu=new Set,this.du=new Tt(M.comparator),this.Eu=new Map,this.Au=new Xi,this.Ru={},this.Vu=new Map,this.mu=ke.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Xf(n,t,e){const r=tp(n);try{const s=await(function(u,c){const h=z(u),f=Q.now(),E=c.reduce(((C,V)=>C.add(V.key)),mt());let A,S;return h.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let V=cr(),O=mt();return h.Os.getEntries(C,E).next((k=>{V=k,V.forEach(((W,$)=>{$.isValidDocument()||(O=O.add(W))}))})).next((()=>h.localDocuments.getOverlayedDocuments(C,V))).next((k=>{A=k;const W=[];for(const $ of c){const H=Od($,A.get($.key).overlayedDocument);H!=null&&W.push(new ee($.key,H,tu(H.value.mapValue),Ct.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,W,c)})).next((k=>{S=k;const W=k.applyToLocalDocumentSet(A,O);return h.documentOverlayCache.saveOverlays(C,k.batchId,W)}))})).then((()=>({batchId:S.batchId,changes:cu(A)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(u,c,h){let f=u.Ru[u.currentUser.toKey()];f||(f=new Tt(U)),f=f.insert(c,h),u.Ru[u.currentUser.toKey()]=f})(r,s.batchId,e),await wr(r,s.changes),await Ar(r.remoteStore)}catch(s){const o=Cu(s,"Failed to persist write");e.reject(o)}}function aa(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach(((o,u)=>{const c=u.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(u,c){const h=z(u);h.onlineState=c;let f=!1;h.queries.forEach(((E,A)=>{for(const S of A.wa)S.va(c)&&(f=!0)})),f&&Wf(h)})(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Jf(n,t){const e=z(n),r=t.batch.batchId;try{const s=await wf(e.localStore,t);Nu(e,r,null),Vu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await wr(e,s)}catch(s){await xi(s)}}async function Yf(n,t,e){const r=z(n);try{const s=await(function(u,c){const h=z(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let E;return h.mutationQueue.lookupMutationBatch(f,c).next((A=>(Y(A!==null,37113),E=A.keys(),h.mutationQueue.removeMutationBatch(f,A)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,E,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,E))).next((()=>h.localDocuments.getDocuments(f,E)))}))})(r.localStore,t);Nu(r,t,e),Vu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await wr(r,s)}catch(s){await xi(s)}}function Vu(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function Nu(n,t,e){const r=z(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}async function wr(n,t,e){const r=z(n),s=[],o=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,h)=>{u.push(r.gu(h,t,e).then((f=>{var E;if((f||e)&&r.isPrimaryClient){const A=f?!f.fromCache:(E=void 0)===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(h.targetId,A?"current":"not-current")}if(f){s.push(f);const A=Yi.Es(h.targetId,f);o.push(A)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(h,f){const E=z(h);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>R.forEach(f,(S=>R.forEach(S.Is,(C=>E.persistence.referenceDelegate.addReference(A,S.targetId,C))).next((()=>R.forEach(S.ds,(C=>E.persistence.referenceDelegate.removeReference(A,S.targetId,C)))))))))}catch(A){if(!_n(A))throw A;N(Tf,"Failed to update sequence numbers: "+A)}for(const A of f){const S=A.targetId;if(!A.fromCache){const C=E.Fs.get(S),V=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(V);E.Fs=E.Fs.insert(S,O)}}})(r.localStore,o))}async function Zf(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){N(Kf,"User change. New user:",t.toKey());const r=await Au(e.localStore,t);e.currentUser=t,(function(o,u){o.Vu.forEach((c=>{c.forEach((h=>{h.reject(new D(P.CANCELLED,u))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await wr(e,r.Bs)}}function tp(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Jf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yf.bind(null,t),t}class pr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Tr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Af(this.persistence,new Ef,t.initialUser,this.serializer)}Du(t){return new Iu(Ji.Vi,this.serializer)}bu(t){return new Pf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pr.provider={build:()=>new pr};class ep extends pr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){Y(this.persistence.referenceDelegate instanceof fr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sf(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Iu((r=>fr.Vi(r,e)),this.serializer)}}class Si{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>aa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zf.bind(null,this.syncEngine),await zf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Gf})()}createDatastore(t){const e=Tr(t.databaseInfo.databaseId),r=(function(o){return new Df(o)})(t.databaseInfo);return(function(o,u,c,h){return new Lf(o,u,c,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,u,c){return new Ff(r,s,o,u,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>aa(this.syncEngine,e,0)),(function(){return ea.C()?new ea:new bf})())}createSyncEngine(t,e){return(function(s,o,u,c,h,f,E){const A=new Qf(s,o,u,c,h,f);return E&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=z(s);N(vn,"RemoteStore shutting down."),o.Ia.add(5),await En(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Si.provider={build:()=>new Si};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="FirestoreClient";class np{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Mi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async u=>{N(Zt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(N(Zt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Cu(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ai(n,t){n.asyncQueue.verifyOperationInProgress(),N(Zt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Au(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>{ln("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{ln("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function ua(n,t){n.asyncQueue.verifyOperationInProgress();const e=await rp(n);N(Zt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>ra(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>ra(t.remoteStore,s))),n._onlineComponents=t}async function rp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Zt,"Using user provided OfflineComponentProvider");try{await ai(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ln("Error using user provided cache. Falling back to memory cache: "+e),await ai(n,new pr)}}else N(Zt,"Using default OfflineComponentProvider"),await ai(n,new ep(void 0));return n._offlineComponents}async function ip(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Zt,"Using user provided OnlineComponentProvider"),await ua(n,n._uninitializedComponentsProvider._online)):(N(Zt,"Using default OnlineComponentProvider"),await ua(n,new Si))),n._onlineComponents}function sp(n){return ip(n).then((t=>t.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="firestore.googleapis.com",ca=!0;class ha{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new D(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=op,this.ssl=ca}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:ca;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Tu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<nf)throw new D(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Du((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ts{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ha({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ha(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Mh;switch(r.type){case"firstParty":return new Fh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=la.get(e);r&&(N("ComponentProvider","Removing Datastore"),la.delete(e),r.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new es(this.firestore,t,this._query)}}class gt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(gn(e,gt._jsonSchema))return new gt(t,r||null,new M(X.fromString(e.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:tt("string",gt._jsonSchemaVersion),referencePath:tt("string")};class Qt extends es{constructor(t,e,r){super(t,e,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new M(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function Ip(n,t,...e){if(n=Rt(n),Ha("collection","path",t),n instanceof ts){const r=X.fromString(t,...e);return ko(r),new Qt(n,null,r)}{if(!(n instanceof gt||n instanceof Qt))throw new D(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ko(r),new Qt(n.firestore,null,r)}}function Ap(n,t,...e){if(n=Rt(n),arguments.length===1&&(t=Mi.newId()),Ha("doc","path",t),n instanceof ts){const r=X.fromString(t,...e);return Do(r),new gt(n,null,new M(r))}{if(!(n instanceof gt||n instanceof Qt))throw new D(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Do(r),new gt(n.firestore,n instanceof Qt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="AsyncQueue";class fa{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new wu(this,"async_queue_retry"),this.oc=()=>{const r=oi();r&&N(da,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=oi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=oi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new le;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!_n(t))throw t;N(da,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((r=>{throw this.tc=r,this.nc=!1,de("INTERNAL UNHANDLED ERROR: ",pa(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Zi.createAndSchedule(this,t,e,r,(o=>this.lc(o)));return this.ec.push(s),s}ac(){this.tc&&L(47125,{hc:pa(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function pa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class ku extends ts{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new fa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new fa(t),this._firestoreClient=void 0,await t}}}function Ou(n){if(n._terminated)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ap(n),n._firestoreClient}function ap(n){var t,e,r;const s=n._freezeSettings(),o=(function(c,h,f,E){return new rd(c,h,f,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Du(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new np(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bt(Ot.fromBase64String(t))}catch(e){throw new D(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bt(Ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gn(t,bt._jsonSchema))return bt.fromBase64String(t.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:tt("string",bt._jsonSchemaVersion),bytes:tt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(t){if(gn(t,Ut._jsonSchema))return new Ut(t.latitude,t.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:tt("string",Ut._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gn(t,Bt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Bt(t.vectorValues);throw new D(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bt._jsonSchemaVersion="firestore/vectorValue/1.0",Bt._jsonSchema={type:tt("string",Bt._jsonSchemaVersion),vectorValues:tt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=/^__.*__$/;class lp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new yn(t,this.data,e,this.fieldTransforms)}}class Mu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ee(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Lu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ec:n})}}class rs{constructor(t,e,r,s,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new rs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return mr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Lu(this.Ec)&&up.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class cp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Tr(t)}Dc(t,e,r,s=!1){return new rs({Ec:t,methodName:e,bc:r,path:ut.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hp(n){const t=n._freezeSettings(),e=Tr(n._databaseId);return new cp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function dp(n,t,e,r,s,o={}){const u=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);is("Data must be an object, but it was:",u,r);const c=xu(r,u);let h,f;if(o.merge)h=new wt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const E=[];for(const A of o.mergeFields){const S=Pi(t,A,e);if(!u.contains(S))throw new D(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Uu(E,S)||E.push(S)}h=new wt(E),f=u.fieldTransforms.filter((A=>h.covers(A.field)))}else h=null,f=u.fieldTransforms;return new lp(new At(c),h,f)}class Sr extends ns{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Sr}}function fp(n,t,e,r){const s=n.Dc(1,t,e);is("Data must be an object, but it was:",s,r);const o=[],u=At.empty();me(r,((h,f)=>{const E=ss(t,h,e);f=Rt(f);const A=s.gc(E);if(f instanceof Sr)o.push(E);else{const S=Pr(f,A);S!=null&&(o.push(E),u.set(E,S))}}));const c=new wt(o);return new Mu(u,c,s.fieldTransforms)}function pp(n,t,e,r,s,o){const u=n.Dc(1,t,e),c=[Pi(t,r,e)],h=[s];if(o.length%2!=0)throw new D(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<o.length;S+=2)c.push(Pi(t,o[S])),h.push(o[S+1]);const f=[],E=At.empty();for(let S=c.length-1;S>=0;--S)if(!Uu(f,c[S])){const C=c[S];let V=h[S];V=Rt(V);const O=u.gc(C);if(V instanceof Sr)f.push(C);else{const k=Pr(V,O);k!=null&&(f.push(C),E.set(C,k))}}const A=new wt(f);return new Mu(E,A,u.fieldTransforms)}function Pr(n,t){if(Fu(n=Rt(n)))return is("Unsupported field value:",t,n),xu(n,t);if(n instanceof ns)return(function(r,s){if(!Lu(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(r,s){const o=[];let u=0;for(const c of r){let h=Pr(c,s.yc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Q.fromDate(r);return{timestampValue:Ii(s.serializer,o)}}if(r instanceof Q){const o=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ii(s.serializer,o)}}if(r instanceof Ut)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bt)return{bytesValue:jd(s.serializer,r._byteString)};if(r instanceof gt){const o=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:vu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bt)return(function(u,c){return{mapValue:{fields:{[Ya]:{stringValue:Za},[_i]:{arrayValue:{values:u.toArray().map((f=>{if(typeof f!="number")throw c.wc("VectorValues must only contain numeric values.");return Wi(c.serializer,f)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Li(r)}`)})(n,t)}function xu(n,t){const e={};return Wa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(n,((r,s)=>{const o=Pr(s,t.Vc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Fu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof Ut||n instanceof bt||n instanceof gt||n instanceof ns||n instanceof Bt)}function is(n,t,e){if(!Fu(e)||!za(e)){const r=Li(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function Pi(n,t,e){if((t=Rt(t))instanceof Rr)return t._internalPath;if(typeof t=="string")return ss(n,t);throw mr("Field path arguments must be of type string or ",n,!1,void 0,e)}const mp=new RegExp("[~\\*/\\[\\]]");function ss(n,t,e){if(t.search(mp)>=0)throw mr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Rr(...t.split("."))._internalPath}catch{throw mr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function mr(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${s}`),h+=")"),new D(P.INVALID_ARGUMENT,c+n+h)}function Uu(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ju("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class gp extends Bu{data(){return super.data()}}function ju(n,t){return typeof t=="string"?ss(n,t):t instanceof Rr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Wn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Se extends Bu{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ju("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Se._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Se._jsonSchemaVersion="firestore/documentSnapshot/1.0",Se._jsonSchema={type:tt("string",Se._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class tr extends Se{data(t={}){return super.data(t)}}class an{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Wn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new tr(this._firestore,this._userDataWriter,r.key,r,new Wn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((c=>{const h=new tr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new tr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,E=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),E=u.indexOf(c.doc.key)),{type:yp(c.type),doc:h,oldIndex:f,newIndex:E}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=an._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Mi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function yp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}an._jsonSchemaVersion="firestore/querySnapshot/1.0",an._jsonSchema={type:tt("string",an._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};function vp(n,t){return(function(r,s){const o=new le;return r.asyncQueue.enqueueAndForget((async()=>Xf(await sp(r),s,o))),o.promise})(Ou(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=hp(t)}set(t,e,r){this._verifyNotCommitted();const s=ui(t,this._firestore),o=_p(s.converter,e,r),u=dp(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,r);return this._mutations.push(u.toMutation(s._key,Ct.none())),this}update(t,e,r,...s){this._verifyNotCommitted();const o=ui(t,this._firestore);let u;return u=typeof(e=Rt(e))=="string"||e instanceof Rr?pp(this._dataReader,"WriteBatch.update",o._key,e,r,s):fp(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(u.toMutation(o._key,Ct.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ui(t,this._firestore);return this._mutations=this._mutations.concat(new Ki(e._key,Ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ui(n,t){if((n=Rt(n)).firestore!==t)throw new D(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n){return Ou(n=zh(n,ku)),new Ep(n,(t=>vp(n,t)))}(function(t,e=!0){(function(s){Oe=s})(gr),be(new Pe("firestore",((r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new ku(new Lh(r.getProvider("auth-internal")),new Uh(u,r.getProvider("app-check-internal")),(function(f,E){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new D(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(f.options.projectId,E)})(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),Kt(Po,bo,t),Kt(Po,bo,"esm2017")})();export{Ip as c,Ap as d,wp as w};
