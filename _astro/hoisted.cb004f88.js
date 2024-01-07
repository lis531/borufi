/* empty css                       *//**
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
 */const Ni={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(t,e){if(!t)throw Ge(e)},Ge=function(t){return new Error("Firebase Database ("+Ni.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ri=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wo=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},jn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ri(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Vo;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ki=function(t){const e=Ri(t);return jn.encodeByteArray(e,!0)},xt=function(t){return ki(t).replace(/\./g,"")},Cn=function(t){try{return jn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $o(t){return Ai(void 0,t)}function Ai(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qo(n)||(t[n]=Ai(t[n],e[n]));return t}function qo(t){return t!=="__proto__"}/**
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
 */function Go(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jo=()=>Go().__FIREBASE_DEFAULTS__,zo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cn(t[1]);return e&&JSON.parse(e)},xi=()=>{try{return jo()||zo()||Yo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ko=t=>{var e,n;return(n=(e=xi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pi=t=>{const e=Ko(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Di=()=>{var t;return(t=xi())===null||t===void 0?void 0:t.config};/**
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
 */class zn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Oi(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xt(JSON.stringify(n)),xt(JSON.stringify(o)),a].join(".")}/**
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
 */function Qo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Li(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qo())}function Xo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mi(){return Ni.NODE_ADMIN===!0}function Zo(){try{return typeof indexedDB=="object"}catch{return!1}}function Jo(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const ea="FirebaseError";class je extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ea,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ta(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new je(i,a,s)}}function ta(t,e){return t.replace(na,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const na=/\{\$([^}]+)}/g;/**
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
 */function ot(t){return JSON.parse(t)}function O(t){return JSON.stringify(t)}/**
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
 */const Bi=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ot(Cn(r[0])||""),n=ot(Cn(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},sa=function(t){const e=Bi(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ia=function(t){const e=Bi(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function le(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function He(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pt(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function En(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ks(r)&&ks(o)){if(!En(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ks(t){return t!==null&&typeof t=="object"}/**
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
 */function ra(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class oa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ui(t,e){return`${t} failed: ${e} argument `}/**
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
 */const aa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,f(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kt=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ye(t){return t&&t._delegate?t._delegate:t}class We{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ce="[DEFAULT]";/**
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
 */class la{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ha(e))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ce){return this.instances.has(e)}getOptions(e=Ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ca(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ce){return this.component?this.component.multipleInstances?e:Ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ca(t){return t===Ce?void 0:t}function ha(t){return t.instantiationMode==="EAGER"}/**
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
 */class ua{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new la(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const da={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},fa=S.INFO,pa={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},_a=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=pa[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hi{constructor(e){this.name=e,this._logLevel=fa,this._logHandler=_a,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?da[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const ma=(t,e)=>e.some(n=>t instanceof n);let As,xs;function ga(){return As||(As=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ya(){return xs||(xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wi=new WeakMap,wn=new WeakMap,Vi=new WeakMap,ln=new WeakMap,Yn=new WeakMap;function va(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(he(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wi.set(n,t)}).catch(()=>{}),Yn.set(e,t),e}function Ca(t){if(wn.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});wn.set(t,e)}let bn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return he(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ea(t){bn=t(bn)}function wa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(cn(this),e,...n);return Vi.set(s,e.sort?e.sort():[e]),he(s)}:ya().includes(t)?function(...e){return t.apply(cn(this),e),he(Wi.get(this))}:function(...e){return he(t.apply(cn(this),e))}}function ba(t){return typeof t=="function"?wa(t):(t instanceof IDBTransaction&&Ca(t),ma(t,ga())?new Proxy(t,bn):t)}function he(t){if(t instanceof IDBRequest)return va(t);if(ln.has(t))return ln.get(t);const e=ba(t);return e!==t&&(ln.set(t,e),Yn.set(e,t)),e}const cn=t=>Yn.get(t);function Ia(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=he(o);return s&&o.addEventListener("upgradeneeded",l=>{s(he(o.result),l.oldVersion,l.newVersion,he(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ta=["get","getKey","getAll","getAllKeys","count"],Sa=["put","add","delete","clear"],hn=new Map;function Ps(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hn.get(e))return hn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Sa.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ta.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return hn.set(e,r),r}Ea(t=>({...t,get:(e,n,s)=>Ps(e,n)||t.get(e,n,s),has:(e,n)=>!!Ps(e,n)||t.has(e,n)}));/**
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
 */class Na{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ra(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ra(t){const e=t.getComponent();return e?.type==="VERSION"}const In="@firebase/app",Ds="0.9.25";/**
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
 */const Se=new Hi("@firebase/app"),ka="@firebase/app-compat",Aa="@firebase/analytics-compat",xa="@firebase/analytics",Pa="@firebase/app-check-compat",Da="@firebase/app-check",Oa="@firebase/auth",La="@firebase/auth-compat",Ma="@firebase/database",Fa="@firebase/database-compat",Ba="@firebase/functions",Ua="@firebase/functions-compat",Ha="@firebase/installations",Wa="@firebase/installations-compat",Va="@firebase/messaging",$a="@firebase/messaging-compat",qa="@firebase/performance",Ga="@firebase/performance-compat",ja="@firebase/remote-config",za="@firebase/remote-config-compat",Ya="@firebase/storage",Ka="@firebase/storage-compat",Qa="@firebase/firestore",Xa="@firebase/firestore-compat",Za="firebase",Ja="10.7.1";/**
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
 */const Tn="[DEFAULT]",el={[In]:"fire-core",[ka]:"fire-core-compat",[xa]:"fire-analytics",[Aa]:"fire-analytics-compat",[Da]:"fire-app-check",[Pa]:"fire-app-check-compat",[Oa]:"fire-auth",[La]:"fire-auth-compat",[Ma]:"fire-rtdb",[Fa]:"fire-rtdb-compat",[Ba]:"fire-fn",[Ua]:"fire-fn-compat",[Ha]:"fire-iid",[Wa]:"fire-iid-compat",[Va]:"fire-fcm",[$a]:"fire-fcm-compat",[qa]:"fire-perf",[Ga]:"fire-perf-compat",[ja]:"fire-rc",[za]:"fire-rc-compat",[Ya]:"fire-gcs",[Ka]:"fire-gcs-compat",[Qa]:"fire-fst",[Xa]:"fire-fst-compat","fire-js":"fire-js",[Za]:"fire-js-all"};/**
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
 */const Dt=new Map,Sn=new Map;function tl(t,e){try{t.container.addComponent(e)}catch(n){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function at(t){const e=t.name;if(Sn.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;Sn.set(e,t);for(const n of Dt.values())tl(n,t);return!0}function $i(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ue=new Fi("app","Firebase",nl);/**
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
 */class sl{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const qi=Ja;function Kn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Tn,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ue.create("bad-app-name",{appName:String(i)});if(n||(n=Di()),!n)throw ue.create("no-options");const r=Dt.get(i);if(r){if(En(n,r.options)&&En(s,r.config))return r;throw ue.create("duplicate-app",{appName:i})}const o=new ua(i);for(const l of Sn.values())o.addComponent(l);const a=new sl(n,s,o);return Dt.set(i,a),a}function Gi(t=Tn){const e=Dt.get(t);if(!e&&t===Tn&&Di())return Kn();if(!e)throw ue.create("no-app",{appName:t});return e}function de(t,e,n){var s;let i=(s=el[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(a.join(" "));return}at(new We(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const il="firebase-heartbeat-database",rl=1,lt="firebase-heartbeat-store";let un=null;function ji(){return un||(un=Ia(il,rl,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lt)}}}).catch(t=>{throw ue.create("idb-open",{originalErrorMessage:t.message})})),un}async function ol(t){try{return await(await ji()).transaction(lt).objectStore(lt).get(zi(t))}catch(e){if(e instanceof je)Se.warn(e.message);else{const n=ue.create("idb-get",{originalErrorMessage:e?.message});Se.warn(n.message)}}}async function Os(t,e){try{const s=(await ji()).transaction(lt,"readwrite");await s.objectStore(lt).put(e,zi(t)),await s.done}catch(n){if(n instanceof je)Se.warn(n.message);else{const s=ue.create("idb-set",{originalErrorMessage:n?.message});Se.warn(s.message)}}}function zi(t){return`${t.name}!${t.options.appId}`}/**
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
 */const al=1024,ll=30*24*60*60*1e3;class cl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ul(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ls();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ll}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ls(),{heartbeatsToSend:s,unsentEntries:i}=hl(this._heartbeatsCache.heartbeats),r=xt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ls(){return new Date().toISOString().substring(0,10)}function hl(t,e=al){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ms(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ms(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ul{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zo()?Jo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ol(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Os(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Os(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ms(t){return xt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dl(t){at(new We("platform-logger",e=>new Na(e),"PRIVATE")),at(new We("heartbeat",e=>new cl(e),"PRIVATE")),de(In,Ds,t),de(In,Ds,"esm2017"),de("fire-js","")}dl("");/**
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
 */const Yi="firebasestorage.googleapis.com",Ki="storageBucket",fl=2*60*1e3,pl=10*60*1e3;/**
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
 */class H extends je{constructor(e,n,s=0){super(dn(e),`Firebase Storage: ${n} (${dn(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,H.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var U;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(U||(U={}));function dn(t){return"storage/"+t}function Qi(){const t="An unknown error occurred, please check the error payload for server response.";return new H(U.UNKNOWN,t)}function _l(t){return new H(U.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ml(t){return new H(U.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gl(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new H(U.UNAUTHENTICATED,t)}function yl(){return new H(U.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vl(t){return new H(U.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Cl(){return new H(U.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function El(){return new H(U.CANCELED,"User canceled the upload/download.")}function wl(t){return new H(U.INVALID_URL,"Invalid URL '"+t+"'.")}function bl(t){return new H(U.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Il(){return new H(U.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ki+"' property when initializing the app?")}function Tl(){return new H(U.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Nn(t){return new H(U.INVALID_ARGUMENT,t)}function Xi(){return new H(U.APP_DELETED,"The Firebase app was deleted.")}function Sl(t){return new H(U.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ke(t){throw new H(U.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Y{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Y.makeFromUrl(e,n)}catch{return new Y(e,"")}if(s.path==="")return s;throw bl(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(z){z.path_=decodeURIComponent(z.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},C=n===Yi?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",Q=new RegExp(`^https?://${C}/${i}/${E}`,"i"),te=[{regex:a,indices:l,postModify:r},{regex:p,indices:_,postModify:c},{regex:Q,indices:{bucket:1,path:2},postModify:c}];for(let z=0;z<te.length;z++){const It=te[z],on=It.regex.exec(e);if(on){const Ho=on[It.indices.bucket];let an=on[It.indices.path];an||(an=""),s=new Y(Ho,an),It.postModify(s);break}}if(s==null)throw wl(e);return s}}class Nl{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Rl(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function d(){r&&clearTimeout(r)}function p(E,...Q){if(c){d();return}if(E){d(),u.call(null,E,...Q);return}if(l()||o){d(),u.call(null,E,...Q);return}s<64&&(s*=2);let te;a===1?(a=2,te=0):te=(s+Math.random())*1e3,h(te)}let _=!1;function C(E){_||(_=!0,d(),!c&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function kl(t){t(!1)}/**
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
 */function Al(t){return t!==void 0}function xl(t){return typeof t=="object"&&!Array.isArray(t)}function Zi(t){return typeof t=="string"||t instanceof String}function Fs(t,e,n,s){if(s<e)throw Nn(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Nn(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ji(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function er(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var be;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(be||(be={}));/**
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
 */function Pl(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class Dl{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Tt(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===be.NO_ERROR,l=r.getStatus();if(!a||Pl(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===be.ABORT;s(!1,new Tt(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Tt(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Al(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Qi();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Xi():El();o(l)}else{const l=Cl();o(l)}};this.canceled_?n(!1,new Tt(!1,null,!0)):this.backoffId_=Rl(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kl(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tt{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ol(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ll(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ml(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Fl(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Bl(t,e,n,s,i,r,o=!0){const a=er(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Ml(c,e),Ol(c,n),Ll(c,r),Fl(c,s),new Dl(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function tr(t){let e;try{e=JSON.parse(t)}catch{return null}return xl(e)?e:null}/**
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
 */function Ul(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Hl(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function nr(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Wl(t,e){return e}class ${constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||Wl}}let St=null;function Vl(t){return!Zi(t)||t.length<2?t:nr(t)}function $l(){if(St)return St;const t=[];t.push(new $("bucket")),t.push(new $("generation")),t.push(new $("metageneration")),t.push(new $("name","fullPath",!0));function e(r,o){return Vl(o)}const n=new $("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new $("size");return i.xform=s,t.push(i),t.push(new $("timeCreated")),t.push(new $("updated")),t.push(new $("md5Hash",null,!0)),t.push(new $("cacheControl",null,!0)),t.push(new $("contentDisposition",null,!0)),t.push(new $("contentEncoding",null,!0)),t.push(new $("contentLanguage",null,!0)),t.push(new $("contentType",null,!0)),t.push(new $("metadata","customMetadata",!0)),St=t,St}function ql(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new Y(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function Gl(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return ql(s,t),s}function jl(t,e,n){const s=tr(e);return s===null?null:Gl(t,s,n)}function zl(t,e,n,s){const i=tr(e);if(i===null||!Zi(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Ji(d,n,s),_=er({alt:"media",token:c});return p+_})[0]}class Yl{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Kl(t){if(!t)throw Qi()}function Ql(t,e){function n(s,i){const r=jl(t,i,e);return Kl(r!==null),zl(r,i,t.host,t._protocol)}return n}function Xl(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=yl():i=gl():n.getStatus()===402?i=ml(t.bucket):n.getStatus()===403?i=vl(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Zl(t){const e=Xl(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=_l(t.path)),r.serverResponse=i.serverResponse,r}return n}function Jl(t,e,n){const s=e.fullServerUrl(),i=Ji(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Yl(i,r,Ql(t,n),o);return a.errorHandler=Zl(e),a}class ec{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=be.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=be.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=be.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Ke("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ke("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ke("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ke("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ke("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class tc extends ec{initXhr(){this.xhr_.responseType="text"}}function nc(){return new tc}/**
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
 */class Ne{constructor(e,n){this._service=e,n instanceof Y?this._location=n:this._location=Y.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ne(e,n)}get root(){const e=new Y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nr(this._location.path)}get storage(){return this._service}get parent(){const e=Ul(this._location.path);if(e===null)return null;const n=new Y(this._location.bucket,e);return new Ne(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Sl(e)}}function sc(t){t._throwIfRoot("getDownloadURL");const e=Jl(t.storage,t._location,$l());return t.storage.makeRequestWithTokens(e,nc).then(n=>{if(n===null)throw Tl();return n})}function ic(t,e){const n=Hl(t._location.path,e),s=new Y(t._location.bucket,n);return new Ne(t.storage,s)}/**
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
 */function rc(t){return/^[A-Za-z]+:\/\//.test(t)}function oc(t,e){return new Ne(t,e)}function sr(t,e){if(t instanceof Qn){const n=t;if(n._bucket==null)throw Il();const s=new Ne(n,n._bucket);return e!=null?sr(s,e):s}else return e!==void 0?ic(t,e):t}function ac(t,e){if(e&&rc(e)){if(t instanceof Qn)return oc(t,e);throw Nn("To use ref(service, url), the first argument must be a Storage instance.")}else return sr(t,e)}function Bs(t,e){const n=e?.[Ki];return n==null?null:Y.makeFromBucketSpec(n,t)}function lc(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Oi(i,t.app.options.projectId))}class Qn{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Yi,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fl,this._maxUploadRetryTime=pl,this._requests=new Set,i!=null?this._bucket=Y.makeFromBucketSpec(i,this._host):this._bucket=Bs(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Y.makeFromBucketSpec(this._url,e):this._bucket=Bs(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fs("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fs("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ne(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Nl(Xi());{const o=Bl(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Us="@firebase/storage",Hs="0.12.0";/**
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
 */const ir="storage";function Xn(t){return t=ye(t),sc(t)}function Zn(t,e){return t=ye(t),ac(t,e)}function rr(t=Gi(),e){t=ye(t);const s=$i(t,ir).getImmediate({identifier:e}),i=Pi("storage");return i&&cc(s,...i),s}function cc(t,e,n,s={}){lc(t,e,n,s)}function hc(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Qn(n,s,i,e,qi)}function uc(){at(new We(ir,hc,"PUBLIC").setMultipleInstances(!0)),de(Us,Hs,""),de(Us,Hs,"esm2017")}uc();var dc="firebase",fc="10.7.1";/**
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
 */de(dc,fc,"app");const Ws="@firebase/database",Vs="1.0.2";/**
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
 */let or="";function pc(t){or=t}/**
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
 */class _c{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),O(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ot(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class mc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ar=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _c(e)}}catch{}return new mc},we=ar("localStorage"),Rn=ar("sessionStorage");/**
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
 */const Fe=new Hi("@firebase/database"),gc=function(){let t=1;return function(){return t++}}(),lr=function(t){const e=aa(t),n=new oa;n.update(e);const s=n.digest();return jn.encodeByteArray(s)},gt=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=gt.apply(null,s):typeof s=="object"?e+=O(s):e+=s,e+=" "}return e};let Ie=null,$s=!0;const yc=function(t,e){f(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Fe.logLevel=S.VERBOSE,Ie=Fe.log.bind(Fe),e&&Rn.set("logging_enabled",!0)):typeof t=="function"?Ie=t:(Ie=null,Rn.remove("logging_enabled"))},V=function(...t){if($s===!0&&($s=!1,Ie===null&&Rn.get("logging_enabled")===!0&&yc(!0)),Ie){const e=gt.apply(null,t);Ie(e)}},yt=function(t){return function(...e){V(t,...e)}},kn=function(...t){const e="FIREBASE INTERNAL ERROR: "+gt(...t);Fe.error(e)},ae=function(...t){const e=`FIREBASE FATAL ERROR: ${gt(...t)}`;throw Fe.error(e),new Error(e)},K=function(...t){const e="FIREBASE WARNING: "+gt(...t);Fe.warn(e)},vc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&K("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Cc=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ve="[MIN_NAME]",Re="[MAX_NAME]",ze=function(t,e){if(t===e)return 0;if(t===Ve||e===Re)return-1;if(e===Ve||t===Re)return 1;{const n=qs(t),s=qs(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Ec=function(t,e){return t===e?0:t<e?-1:1},Qe=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+O(e))},Jn=function(t){if(typeof t!="object"||t===null)return O(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=O(e[s]),n+=":",n+=Jn(t[e[s]]);return n+="}",n},hr=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function j(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ur=function(t){f(!cr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},wc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ic(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Tc=new RegExp("^-?(0*)\\d{1,10}$"),Sc=-2147483648,Nc=2147483647,qs=function(t){if(Tc.test(t)){const e=Number(t);if(e>=Sc&&e<=Nc)return e}return null},vt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw K("Exception was thrown by user callback.",n),e},Math.floor(0))}},Rc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},nt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class kc{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){K(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ac{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(V("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',K(e)}}class Be{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Be.OWNER="owner";/**
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
 */const es="5",dr="v",fr="s",pr="r",_r="f",mr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gr="ls",yr="p",An="ac",vr="websocket",Cr="long_polling";/**
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
 */class Er{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=we.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&we.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xc(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wr(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let s;if(e===vr)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cr)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xc(t)&&(n.ns=t.namespace);const i=[];return j(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Pc{constructor(){this.counters_={}}incrementCounter(e,n=1){le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $o(this.counters_)}}/**
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
 */const fn={},pn={};function ts(t){const e=t.toString();return fn[e]||(fn[e]=new Pc),fn[e]}function Dc(t,e){const n=t.toString();return pn[n]||(pn[n]=e()),pn[n]}/**
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
 */class Oc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&vt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Gs="start",Lc="close",Mc="pLPCommand",Fc="pRTLPCB",br="id",Ir="pw",Tr="ser",Bc="cb",Uc="seg",Hc="ts",Wc="d",Vc="dframe",Sr=1870,Nr=30,$c=Sr-Nr,qc=25e3,Gc=3e4;class Le{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yt(e),this.stats_=ts(n),this.urlFn=l=>(this.appCheckToken&&(l[An]=this.appCheckToken),wr(n,Cr,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Oc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gc)),Cc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ns((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gs)this.id=a,this.password=l;else if(o===Lc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Gs]="t",s[Tr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Bc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[dr]=es,this.transportSessionId&&(s[fr]=this.transportSessionId),this.lastSessionId&&(s[gr]=this.lastSessionId),this.applicationId&&(s[yr]=this.applicationId),this.appCheckToken&&(s[An]=this.appCheckToken),typeof location<"u"&&location.hostname&&mr.test(location.hostname)&&(s[pr]=_r);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return Le.forceAllow_?!0:!Le.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wc()&&!bc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=O(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ki(n),i=hr(s,$c);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Vc]="t",s[br]=e,s[Ir]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=O(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ns{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gc(),window[Mc+this.uniqueCallbackIdentifier]=e,window[Fc+this.uniqueCallbackIdentifier]=n,this.myIFrame=ns.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){V("frame writing exception"),a.stack&&V(a.stack),V(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||V("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[br]=this.myID,e[Ir]=this.myPW,e[Tr]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nr+s.length<=Sr;){const o=this.pendingSegs.shift();s=s+"&"+Uc+i+"="+o.seg+"&"+Hc+i+"="+o.ts+"&"+Wc+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(qc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{V("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const jc=16384,zc=45e3;let Ot=null;typeof MozWebSocket<"u"?Ot=MozWebSocket:typeof WebSocket<"u"&&(Ot=WebSocket);class X{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yt(this.connId),this.stats_=ts(n),this.connURL=X.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[dr]=es,typeof location<"u"&&location.hostname&&mr.test(location.hostname)&&(o[pr]=_r),n&&(o[fr]=n),s&&(o[gr]=s),i&&(o[An]=i),r&&(o[yr]=r),wr(e,vr,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,we.set("previous_websocket_failure",!0);try{let s;Mi(),this.mySock=new Ot(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){X.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ot!==null&&!X.forceDisallow_}static previouslyFailed(){return we.isInMemoryStorage||we.get("previous_websocket_failure")===!0}markConnectionHealthy(){we.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ot(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=O(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hr(n,jc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zc))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}X.responsesRequiredToBeHealthy=2;X.healthyTimeout=3e4;/**
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
 */class ct{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,X]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=X&&X.isAvailable();let s=n&&!X.previouslyFailed();if(e.webSocketOnly&&(n||K("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[X];else{const i=this.transports_=[];for(const r of ct.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ct.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ct.globalTransportInitialized_=!1;/**
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
 */const Yc=6e4,Kc=5e3,Qc=10*1024,Xc=100*1024,_n="t",js="d",Zc="s",zs="r",Jc="e",Ys="o",Ks="a",Qs="n",Xs="p",eh="h";class th{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yt("c:"+this.id+":"),this.transportManager_=new ct(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=nt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Xc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_n in e){const n=e[_n];n===Ks?this.upgradeIfSecondaryHealthy_():n===zs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ys&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qe("t",e),s=Qe("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ks,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qe("t",e),s=Qe("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qe(_n,e);if(js in e){const s=e[js];if(n===eh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Qs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zc?this.onConnectionShutdown_(s):n===zs?this.onReset_(s):n===Jc?kn("Server Error: "+s):n===Ys?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kn("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),es!==s&&K("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),nt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Yc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):nt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Kc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(we.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Rr{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class kr{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Lt extends kr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Li()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Lt}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zs=32,Js=768;class T{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function b(){return new T("")}function v(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _e(t){return t.pieces_.length-t.pieceNum_}function N(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new T(t.pieces_,e)}function Ar(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nh(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Pr(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new T(e,0)}function L(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof T)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new T(n,0)}function y(t){return t.pieceNum_>=t.pieces_.length}function q(t,e){const n=v(t),s=v(e);if(n===null)return e;if(n===s)return q(N(t),N(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Dr(t,e){if(_e(t)!==_e(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Z(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(_e(t)>_e(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class sh{constructor(e,n){this.errorPrefix_=n,this.parts_=xr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Kt(this.parts_[s]);Or(this)}}function ih(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kt(e),Or(t)}function rh(t){const e=t.parts_.pop();t.byteLength_-=Kt(e),t.parts_.length>0&&(t.byteLength_-=1)}function Or(t){if(t.byteLength_>Js)throw new Error(t.errorPrefix_+"has a key path longer than "+Js+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zs)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zs+") or object contains a cycle "+Ee(t))}function Ee(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ss extends kr{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ss}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xe=1e3,oh=60*5*1e3,ei=30*1e3,ah=1.3,lh=3e4,ch="server_kill",ti=3;class re extends Rr{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=re.nextPersistentConnectionId_++,this.log_=yt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xe,this.maxReconnectDelay_=oh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Mi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ss.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(O(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new zn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;re.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&le(e,"w")){const s=He(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();K(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ia(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ei)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sa(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+O(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kn("Unrecognized action received from server: "+O(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lh&&(this.reconnectDelay_=Xe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ah)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?V("getToken() completed but was canceled"):(V("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new th(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{K(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(ch)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&K(h),l())}}}interrupt(e){V("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){V("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rs(this.interruptReasons_)&&(this.reconnectDelay_=Xe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Jn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new T(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){V("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ti&&(this.reconnectDelay_=ei,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){V("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ti&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+or.replace(/\./g,"-")]=1,Li()?e["framework.cordova"]=1:Xo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lt.getInstance().currentlyOnline();return Rs(this.interruptReasons_)&&e}}re.nextPersistentConnectionId_=0;re.nextConnectionId_=0;/**
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
 */class g{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new g(e,n)}}/**
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
 */class Qt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new g(Ve,e),i=new g(Ve,n);return this.compare(s,i)!==0}minPost(){return g.MIN}}/**
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
 */let Nt;class Lr extends Qt{static get __EMPTY_NODE(){return Nt}static set __EMPTY_NODE(e){Nt=e}compare(e,n){return ze(e.name,n.name)}isDefinedOn(e){throw Ge("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return g.MIN}maxPost(){return new g(Re,Nt)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new g(e,Nt)}toString(){return".key"}}const Ue=new Lr;/**
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
 */class Rt{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class F{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??F.RED,this.left=i??G.EMPTY_NODE,this.right=r??G.EMPTY_NODE}copy(e,n,s,i,r){return new F(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return G.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return G.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}F.RED=!0;F.BLACK=!1;class hh{copy(e,n,s,i,r){return this}insert(e,n,s){return new F(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class G{constructor(e,n=G.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new G(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,F.BLACK,null,null))}remove(e){return new G(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,F.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Rt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Rt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Rt(this.root_,null,this.comparator_,!0,e)}}G.EMPTY_NODE=new hh;/**
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
 */function uh(t,e){return ze(t.name,e.name)}function is(t,e){return ze(t,e)}/**
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
 */let xn;function dh(t){xn=t}const Mr=function(t){return typeof t=="number"?"number:"+ur(t):"string:"+t},Fr=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&le(e,".sv"),"Priority must be a string or number.")}else f(t===xn||t.isEmpty(),"priority of unexpected type.");f(t===xn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ni;class M{constructor(e,n=M.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fr(this.priorityNode_)}static set __childrenNodeConstructor(e){ni=e}static get __childrenNodeConstructor(){return ni}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new M(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return y(e)?this:v(e)===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:M.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=v(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(f(s!==".priority"||_e(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,M.__childrenNodeConstructor.EMPTY_NODE.updateChild(N(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mr(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ur(this.value_):e+=this.value_,this.lazyHash_=lr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===M.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof M.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=M.VALUE_TYPE_ORDER.indexOf(n),r=M.VALUE_TYPE_ORDER.indexOf(s);return f(i>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}M.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Br,Ur;function fh(t){Br=t}function ph(t){Ur=t}class _h extends Qt{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ze(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return g.MIN}maxPost(){return new g(Re,new M("[PRIORITY-POST]",Ur))}makePost(e,n){const s=Br(e);return new g(n,new M("[PRIORITY-POST]",s))}toString(){return".priority"}}const x=new _h;/**
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
 */const mh=Math.log(2);class gh{constructor(e){const n=r=>parseInt(Math.log(r)/mh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mt=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new F(d,h.node,F.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=i(l,p),C=i(p+1,c);return h=t[p],d=n?n(h):h,new F(d,h.node,F.BLACK,_,C)}},r=function(l){let c=null,u=null,h=t.length;const d=function(_,C){const E=h-_,Q=h;h-=_;const Pe=i(E+1,Q),te=t[E],z=n?n(te):te;p(new F(z,te.node,C,null,Pe))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const C=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));C?d(E,F.BLACK):(d(E,F.BLACK),d(E,F.RED))}return u},o=new gh(t.length),a=r(o);return new G(s||e,a)};/**
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
 */let mn;const De={};class ie{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(De&&x,"ChildrenNode.ts has not been loaded"),mn=mn||new ie({".priority":De},{".priority":x}),mn}get(e){const n=He(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof G?n:null}hasIndex(e){return le(this.indexSet_,e.toString())}addIndex(e,n){f(e!==Ue,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(g.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Mt(s,e.getCompare()):a=De;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ie(u,c)}addToIndexes(e,n){const s=Pt(this.indexes_,(i,r)=>{const o=He(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),i===De)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(g.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Mt(a,o.getCompare())}else return De;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new g(e.name,a))),l.insert(e,e.node)}});return new ie(s,this.indexSet_)}removeFromIndexes(e,n){const s=Pt(this.indexes_,i=>{if(i===De)return i;{const r=n.get(e.name);return r?i.remove(new g(e.name,r)):i}});return new ie(s,this.indexSet_)}}/**
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
 */let Ze;class m{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fr(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ze||(Ze=new m(new G(is),null,ie.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ze}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ze:n}}getChild(e){const n=v(e);return n===null?this:this.getImmediateChild(n).getChild(N(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new g(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ze:this.priorityNode_;return new m(i,o,r)}}updateChild(e,n){const s=v(e);if(s===null)return n;{f(v(e)!==".priority"||_e(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(N(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(x,(o,a)=>{n[o]=a.val(e),s++,r&&m.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mr(this.getPriority().val())+":"),this.forEachChild(x,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":lr(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new g(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new g(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new g(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,g.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,g.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ct?-1:0}withIndex(e){if(e===Ue||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ue||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(x),i=n.getIterator(x);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ue?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yh extends m{constructor(){super(new G(is),m.EMPTY_NODE,ie.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const Ct=new yh;Object.defineProperties(g,{MIN:{value:new g(Ve,m.EMPTY_NODE)},MAX:{value:new g(Re,Ct)}});Lr.__EMPTY_NODE=m.EMPTY_NODE;M.__childrenNodeConstructor=m;dh(Ct);ph(Ct);/**
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
 */const vh=!0;function W(t,e=null){if(t===null)return m.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new M(n,W(e))}if(!(t instanceof Array)&&vh){const n=[];let s=!1;if(j(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=W(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new g(o,l)))}}),n.length===0)return m.EMPTY_NODE;const r=Mt(n,uh,o=>o.name,is);if(s){const o=Mt(n,x.getCompare());return new m(r,W(e),new ie({".priority":o},{".priority":x}))}else return new m(r,W(e),ie.Default)}else{let n=m.EMPTY_NODE;return j(t,(s,i)=>{if(le(t,s)&&s.substring(0,1)!=="."){const r=W(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(W(e))}}fh(W);/**
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
 */class Ch extends Qt{constructor(e){super(),this.indexPath_=e,f(!y(e)&&v(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ze(e.name,n.name):r}makePost(e,n){const s=W(e),i=m.EMPTY_NODE.updateChild(this.indexPath_,s);return new g(n,i)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,Ct);return new g(Re,e)}toString(){return xr(this.indexPath_,0).join("/")}}/**
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
 */class Eh extends Qt{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ze(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return g.MIN}maxPost(){return g.MAX}makePost(e,n){const s=W(e);return new g(n,s)}toString(){return".value"}}const wh=new Eh;/**
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
 */function Hr(t){return{type:"value",snapshotNode:t}}function $e(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ht(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ut(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bh(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class rs{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ht(n,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange($e(n,s)):o.trackChildChange(ut(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(x,(i,r)=>{n.hasChild(i)||s.trackChildChange(ht(i,r))}),n.isLeafNode()||n.forEachChild(x,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ut(i,r,o))}else s.trackChildChange($e(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class dt{constructor(e){this.indexedFilter_=new rs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dt.getStartPost_(e),this.endPost_=dt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new g(n,s))||(s=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=m.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(m.EMPTY_NODE);const r=this;return n.forEachChild(x,(o,a)=>{r.matches(new g(o,a))||(i=i.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ih{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new dt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new g(n,s))||(s=m.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new g(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r?.trackChildChange(ut(n,s,h)),a.updateImmediateChild(n,s);{r?.trackChildChange(ht(n,h));const C=a.updateImmediateChild(n,m.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r?.trackChildChange($e(d.name,d.node)),C.updateImmediateChild(d.name,d.node)):C}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ht(c.name,c.node)),r.trackChildChange($e(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
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
 */class os{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=x}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ve}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Re}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===x}copy(){const e=new os;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Th(t){return t.loadsAllData()?new rs(t.getIndex()):t.hasLimit()?new Ih(t):new dt(t)}function si(t){const e={};if(t.isDefault())return e;let n;if(t.index_===x?n="$priority":t.index_===wh?n="$value":t.index_===Ue?n="$key":(f(t.index_ instanceof Ch,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=O(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=O(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+O(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=O(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+O(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ii(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==x&&(e.i=t.index_.toString()),e}/**
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
 */class Ft extends Rr{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=yt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ft.getListenId_(e,s),a={};this.listens_[o]=a;const l=si(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),He(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ft.getListenId_(e,n);delete this.listens_[s]}get(e){const n=si(e._queryParams),s=e._path.toString(),i=new zn;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ra(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ot(a.responseText)}catch{K("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&K("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Sh{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Bt(){return{value:null,children:new Map}}function Wr(t,e,n){if(y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=v(e);t.children.has(s)||t.children.set(s,Bt());const i=t.children.get(s);e=N(e),Wr(i,e,n)}}function Pn(t,e,n){t.value!==null?n(e,t.value):Nh(t,(s,i)=>{const r=new T(e.toString()+"/"+s);Pn(i,r,n)})}function Nh(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Rh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&j(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const ri=10*1e3,kh=30*1e3,Ah=5*60*1e3;class xh{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Rh(e);const s=ri+(kh-ri)*Math.random();nt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;j(e,(i,r)=>{r>0&&le(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),nt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ah))}}/**
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
 */var J;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(J||(J={}));function Vr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function as(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ls(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ut{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=J.ACK_USER_WRITE,this.source=Vr()}operationForChild(e){if(y(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new T(e));return new Ut(b(),n,this.revert)}}else return f(v(this.path)===e,"operationForChild called for unrelated child."),new Ut(N(this.path),this.affectedTree,this.revert)}}/**
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
 */class ft{constructor(e,n){this.source=e,this.path=n,this.type=J.LISTEN_COMPLETE}operationForChild(e){return y(this.path)?new ft(this.source,b()):new ft(this.source,N(this.path))}}/**
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
 */class ke{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=J.OVERWRITE}operationForChild(e){return y(this.path)?new ke(this.source,b(),this.snap.getImmediateChild(e)):new ke(this.source,N(this.path),this.snap)}}/**
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
 */class pt{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=J.MERGE}operationForChild(e){if(y(this.path)){const n=this.children.subtree(new T(e));return n.isEmpty()?null:n.value?new ke(this.source,b(),n.value):new pt(this.source,b(),n)}else return f(v(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pt(this.source,N(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class me{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(y(e))return this.isFullyInitialized()&&!this.filtered_;const n=v(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ph{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Dh(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bh(o.childName,o.snapshotNode))}),Je(t,i,"child_removed",e,s,n),Je(t,i,"child_added",e,s,n),Je(t,i,"child_moved",r,s,n),Je(t,i,"child_changed",e,s,n),Je(t,i,"value",e,s,n),i}function Je(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Lh(t,a,l)),o.forEach(a=>{const l=Oh(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Oh(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Lh(t,e,n){if(e.childName==null||n.childName==null)throw Ge("Should only compare child_ events.");const s=new g(e.childName,e.snapshotNode),i=new g(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Xt(t,e){return{eventCache:t,serverCache:e}}function st(t,e,n,s){return Xt(new me(e,n,s),t.serverCache)}function $r(t,e,n,s){return Xt(t.eventCache,new me(e,n,s))}function Ht(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ae(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let gn;const Mh=()=>(gn||(gn=new G(Ec)),gn);class R{constructor(e,n=Mh()){this.value=e,this.children=n}static fromObject(e){let n=new R(null);return j(e,(s,i)=>{n=n.set(new T(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:b(),value:this.value};if(y(e))return null;{const s=v(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(N(e),n);return r!=null?{path:L(new T(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(y(e))return this;{const n=v(e),s=this.children.get(n);return s!==null?s.subtree(N(e)):new R(null)}}set(e,n){if(y(e))return new R(n,this.children);{const s=v(e),r=(this.children.get(s)||new R(null)).set(N(e),n),o=this.children.insert(s,r);return new R(this.value,o)}}remove(e){if(y(e))return this.children.isEmpty()?new R(null):new R(null,this.children);{const n=v(e),s=this.children.get(n);if(s){const i=s.remove(N(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new R(null):new R(this.value,r)}else return this}}get(e){if(y(e))return this.value;{const n=v(e),s=this.children.get(n);return s?s.get(N(e)):null}}setTree(e,n){if(y(e))return n;{const s=v(e),r=(this.children.get(s)||new R(null)).setTree(N(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new R(this.value,o)}}fold(e){return this.fold_(b(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(L(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,b(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(y(e))return null;{const r=v(e),o=this.children.get(r);return o?o.findOnPath_(N(e),L(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,b(),n)}foreachOnPath_(e,n,s){if(y(e))return this;{this.value&&s(n,this.value);const i=v(e),r=this.children.get(i);return r?r.foreachOnPath_(N(e),L(n,i),s):new R(null)}}foreach(e){this.foreach_(b(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(L(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ee{constructor(e){this.writeTree_=e}static empty(){return new ee(new R(null))}}function it(t,e,n){if(y(e))return new ee(new R(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=q(i,e);return r=r.updateChild(o,n),new ee(t.writeTree_.set(i,r))}else{const i=new R(n),r=t.writeTree_.setTree(e,i);return new ee(r)}}}function oi(t,e,n){let s=t;return j(n,(i,r)=>{s=it(s,L(e,i),r)}),s}function ai(t,e){if(y(e))return ee.empty();{const n=t.writeTree_.setTree(e,new R(null));return new ee(n)}}function Dn(t,e){return xe(t,e)!=null}function xe(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(q(n.path,e)):null}function li(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(x,(s,i)=>{e.push(new g(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new g(s,i.value))}),e}function fe(t,e){if(y(e))return t;{const n=xe(t,e);return n!=null?new ee(new R(n)):new ee(t.writeTree_.subtree(e))}}function On(t){return t.writeTree_.isEmpty()}function qe(t,e){return qr(b(),t.writeTree_,e)}function qr(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qr(L(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(L(t,".priority"),s)),n}}/**
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
 */function Zt(t,e){return Yr(e,t)}function Fh(t,e,n,s,i){f(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=it(t.visibleWrites,e,n)),t.lastWriteId=s}function Bh(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Uh(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Hh(a,s.path)?i=!1:Z(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Wh(t),!0;if(s.snap)t.visibleWrites=ai(t.visibleWrites,s.path);else{const a=s.children;j(a,l=>{t.visibleWrites=ai(t.visibleWrites,L(s.path,l))})}return!0}else return!1}function Hh(t,e){if(t.snap)return Z(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Z(L(t.path,n),e))return!0;return!1}function Wh(t){t.visibleWrites=Gr(t.allWrites,Vh,b()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Vh(t){return t.visible}function Gr(t,e,n){let s=ee.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Z(n,o)?(a=q(n,o),s=it(s,a,r.snap)):Z(o,n)&&(a=q(o,n),s=it(s,b(),r.snap.getChild(a)));else if(r.children){if(Z(n,o))a=q(n,o),s=oi(s,a,r.children);else if(Z(o,n))if(a=q(o,n),y(a))s=oi(s,b(),r.children);else{const l=He(r.children,v(a));if(l){const c=l.getChild(N(a));s=it(s,b(),c)}}}else throw Ge("WriteRecord should have .snap or .children")}}return s}function jr(t,e,n,s,i){if(!s&&!i){const r=xe(t.visibleWrites,e);if(r!=null)return r;{const o=fe(t.visibleWrites,e);if(On(o))return n;if(n==null&&!Dn(o,b()))return null;{const a=n||m.EMPTY_NODE;return qe(o,a)}}}else{const r=fe(t.visibleWrites,e);if(!i&&On(r))return n;if(!i&&n==null&&!Dn(r,b()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Z(c.path,e)||Z(e,c.path))},a=Gr(t.allWrites,o,e),l=n||m.EMPTY_NODE;return qe(a,l)}}}function $h(t,e,n){let s=m.EMPTY_NODE;const i=xe(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(x,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=fe(t.visibleWrites,e);return n.forEachChild(x,(o,a)=>{const l=qe(fe(r,new T(o)),a);s=s.updateImmediateChild(o,l)}),li(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=fe(t.visibleWrites,e);return li(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qh(t,e,n,s,i){f(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=L(e,n);if(Dn(t.visibleWrites,r))return null;{const o=fe(t.visibleWrites,r);return On(o)?i.getChild(n):qe(o,i.getChild(n))}}function Gh(t,e,n,s){const i=L(e,n),r=xe(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=fe(t.visibleWrites,i);return qe(o,s.getNode().getImmediateChild(n))}else return null}function jh(t,e){return xe(t.visibleWrites,e)}function zh(t,e,n,s,i,r,o){let a;const l=fe(t.visibleWrites,e),c=xe(l,b());if(c!=null)a=c;else if(n!=null)a=qe(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function Yh(){return{visibleWrites:ee.empty(),allWrites:[],lastWriteId:-1}}function Wt(t,e,n,s){return jr(t.writeTree,t.treePath,e,n,s)}function cs(t,e){return $h(t.writeTree,t.treePath,e)}function ci(t,e,n,s){return qh(t.writeTree,t.treePath,e,n,s)}function Vt(t,e){return jh(t.writeTree,L(t.treePath,e))}function Kh(t,e,n,s,i,r){return zh(t.writeTree,t.treePath,e,n,s,i,r)}function hs(t,e,n){return Gh(t.writeTree,t.treePath,e,n)}function zr(t,e){return Yr(L(t.treePath,e),t.writeTree)}function Yr(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Qh{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ut(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ht(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,$e(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ut(s,e.snapshotNode,i.oldSnap));else throw Ge("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Xh{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Kr=new Xh;class us{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new me(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hs(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ae(this.viewCache_),r=Kh(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Zh(t){return{filter:t}}function Jh(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function eu(t,e,n,s,i){const r=new Qh;let o,a;if(n.type===J.OVERWRITE){const c=n;c.source.fromUser?o=Ln(t,e,c.path,c.snap,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!y(c.path),o=$t(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===J.MERGE){const c=n;c.source.fromUser?o=nu(t,e,c.path,c.children,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Mn(t,e,c.path,c.children,s,i,a,r))}else if(n.type===J.ACK_USER_WRITE){const c=n;c.revert?o=ru(t,e,c.path,s,i,r):o=su(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===J.LISTEN_COMPLETE)o=iu(t,e,n.path,s,r);else throw Ge("Unknown operation type: "+n.type);const l=r.getChanges();return tu(e,o,l),{viewCache:o,changes:l}}function tu(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ht(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Hr(Ht(e)))}}function Qr(t,e,n,s,i,r){const o=e.eventCache;if(Vt(s,n)!=null)return e;{let a,l;if(y(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ae(e),u=c instanceof m?c:m.EMPTY_NODE,h=cs(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Wt(s,Ae(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=v(n);if(c===".priority"){f(_e(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ci(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=N(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ci(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=hs(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return st(e,a,o.isFullyInitialized()||y(n),t.filter.filtersNodes())}}function $t(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(y(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=v(n);if(!l.isCompleteForPath(n)&&_e(n)>1)return e;const _=N(n),E=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),p,E,_,Kr,null)}const h=$r(e,c,l.isFullyInitialized()||y(n),u.filtersNodes()),d=new us(i,h,r);return Qr(t,h,n,i,d,a)}function Ln(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new us(i,e,r);if(y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=st(e,c,!0,t.filter.filtersNodes());else{const h=v(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=st(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=N(n),p=a.getNode().getImmediateChild(h);let _;if(y(d))_=s;else{const C=u.getCompleteChild(h);C!=null?Ar(d)===".priority"&&C.getChild(Pr(d)).isEmpty()?_=C:_=C.updateChild(d,s):_=m.EMPTY_NODE}if(p.equals(_))l=e;else{const C=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=st(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function hi(t,e){return t.eventCache.isCompleteForChild(e)}function nu(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=L(n,l);hi(e,v(u))&&(a=Ln(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=L(n,l);hi(e,v(u))||(a=Ln(t,a,u,c,i,r,o))}),a}function ui(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Mn(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;y(n)?c=s:c=new R(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=ui(t,p,d);l=$t(t,l,new T(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),C=ui(t,_,d);l=$t(t,l,new T(h),C,i,r,o,a)}}),l}function su(t,e,n,s,i,r,o){if(Vt(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return $t(t,e,n,l.getNode().getChild(n),i,r,a,o);if(y(n)){let c=new R(null);return l.getNode().forEachChild(Ue,(u,h)=>{c=c.set(new T(u),h)}),Mn(t,e,n,c,i,r,a,o)}else return e}else{let c=new R(null);return s.foreach((u,h)=>{const d=L(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Mn(t,e,n,c,i,r,a,o)}}function iu(t,e,n,s,i){const r=e.serverCache,o=$r(e,r.getNode(),r.isFullyInitialized()||y(n),r.isFiltered());return Qr(t,o,n,s,Kr,i)}function ru(t,e,n,s,i,r){let o;if(Vt(s,n)!=null)return e;{const a=new us(s,e,i),l=e.eventCache.getNode();let c;if(y(n)||v(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Wt(s,Ae(e));else{const h=e.serverCache.getNode();f(h instanceof m,"serverChildren would be complete if leaf node"),u=cs(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=v(n);let h=hs(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,N(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,m.EMPTY_NODE,N(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wt(s,Ae(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Vt(s,b())!=null,st(e,c,o,t.filter.filtersNodes())}}/**
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
 */class ou{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new rs(s.getIndex()),r=Th(s);this.processor_=Zh(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),u=new me(l,o.isFullyInitialized(),i.filtersNodes()),h=new me(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Xt(h,u),this.eventGenerator_=new Ph(this.query_)}get query(){return this.query_}}function au(t){return t.viewCache_.serverCache.getNode()}function lu(t){return Ht(t.viewCache_)}function cu(t,e){const n=Ae(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!y(e)&&!n.getImmediateChild(v(e)).isEmpty())?n.getChild(e):null}function di(t){return t.eventRegistrations_.length===0}function hu(t,e){t.eventRegistrations_.push(e)}function fi(t,e,n){const s=[];if(n){f(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function pi(t,e,n,s){e.type===J.MERGE&&e.source.queryId!==null&&(f(Ae(t.viewCache_),"We should always have a full cache before handling merges"),f(Ht(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=eu(t.processor_,i,e,n,s);return Jh(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Xr(t,r.changes,r.viewCache.eventCache.getNode(),null)}function uu(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(x,(r,o)=>{s.push($e(r,o))}),n.isFullyInitialized()&&s.push(Hr(n.getNode())),Xr(t,s,n.getNode(),e)}function Xr(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Dh(t.eventGenerator_,e,n,i)}/**
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
 */let qt;class Zr{constructor(){this.views=new Map}}function du(t){f(!qt,"__referenceConstructor has already been defined"),qt=t}function fu(){return f(qt,"Reference.ts has not been loaded"),qt}function pu(t){return t.views.size===0}function ds(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return f(r!=null,"SyncTree gave us an op for an invalid query."),pi(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(pi(o,e,n,s));return r}}function Jr(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Wt(n,i?s:null),l=!1;a?l=!0:s instanceof m?(a=cs(n,s),l=!1):(a=m.EMPTY_NODE,l=!1);const c=Xt(new me(a,l,!1),new me(s,i,!1));return new ou(e,c)}return o}function _u(t,e,n,s,i,r){const o=Jr(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hu(o,n),uu(o,n)}function mu(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=ge(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(fi(c,n,s)),di(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(fi(l,n,s)),di(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ge(t)&&r.push(new(fu())(e._repo,e._path)),{removed:r,events:o}}function eo(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pe(t,e){let n=null;for(const s of t.views.values())n=n||cu(s,e);return n}function to(t,e){if(e._queryParams.loadsAllData())return Jt(t);{const s=e._queryIdentifier;return t.views.get(s)}}function no(t,e){return to(t,e)!=null}function ge(t){return Jt(t)!=null}function Jt(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Gt;function gu(t){f(!Gt,"__referenceConstructor has already been defined"),Gt=t}function yu(){return f(Gt,"Reference.ts has not been loaded"),Gt}let vu=1;class _i{constructor(e){this.listenProvider_=e,this.syncPointTree_=new R(null),this.pendingWriteTree_=Yh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cu(t,e,n,s,i){return Fh(t.pendingWriteTree_,e,n,s,i),i?wt(t,new ke(Vr(),e,n)):[]}function Me(t,e,n=!1){const s=Bh(t.pendingWriteTree_,e);if(Uh(t.pendingWriteTree_,e)){let r=new R(null);return s.snap!=null?r=r.set(b(),!0):j(s.children,o=>{r=r.set(new T(o),!0)}),wt(t,new Ut(s.path,r,n))}else return[]}function Et(t,e,n){return wt(t,new ke(as(),e,n))}function Eu(t,e,n){const s=R.fromObject(n);return wt(t,new pt(as(),e,s))}function wu(t,e){return wt(t,new ft(as(),e))}function bu(t,e,n){const s=fs(t,n);if(s){const i=ps(s),r=i.path,o=i.queryId,a=q(r,e),l=new ft(ls(o),a);return _s(t,r,l)}else return[]}function so(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||no(o,e))){const l=mu(o,e,n,s);pu(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,p)=>ge(p));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=Nu(d);for(let _=0;_<p.length;++_){const C=p[_],E=C.query,Q=lo(t,C);t.listenProvider_.startListening(rt(E),_t(t,E),Q.hashFn,Q.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(rt(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(en(d));t.listenProvider_.stopListening(rt(d),p)}))}Ru(t,c)}return a}function io(t,e,n,s){const i=fs(t,s);if(i!=null){const r=ps(i),o=r.path,a=r.queryId,l=q(o,e),c=new ke(ls(a),l,n);return _s(t,o,c)}else return[]}function Iu(t,e,n,s){const i=fs(t,s);if(i){const r=ps(i),o=r.path,a=r.queryId,l=q(o,e),c=R.fromObject(n),u=new pt(ls(a),l,c);return _s(t,o,u)}else return[]}function Tu(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const _=q(d,i);r=r||pe(p,_),o=o||ge(p)});let a=t.syncPointTree_.get(i);a?(o=o||ge(a),r=r||pe(a,b())):(a=new Zr,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const C=pe(_,b());C&&(r=r.updateImmediateChild(p,C))}));const c=no(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=en(e);f(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=ku();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Zt(t.pendingWriteTree_,i);let h=_u(a,e,n,u,r,l);if(!c&&!o&&!s){const d=to(a,e);h=h.concat(Au(t,e,d))}return h}function ro(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=q(o,e),c=pe(a,l);if(c)return c});return jr(i,e,r,n,!0)}function Su(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=q(c,n);s=s||pe(u,h)});let i=t.syncPointTree_.get(n);i?s=s||pe(i,b()):(i=new Zr,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new me(s,!0,!1):null,a=Zt(t.pendingWriteTree_,e._path),l=Jr(i,e,a,r?o.getNode():m.EMPTY_NODE,r);return lu(l)}function wt(t,e){return oo(e,t.syncPointTree_,null,Zt(t.pendingWriteTree_,b()))}function oo(t,e,n,s){if(y(t.path))return ao(t,e,n,s);{const i=e.get(b());n==null&&i!=null&&(n=pe(i,b()));let r=[];const o=v(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=zr(s,o);r=r.concat(oo(a,l,c,u))}return i&&(r=r.concat(ds(i,t,s,n))),r}}function ao(t,e,n,s){const i=e.get(b());n==null&&i!=null&&(n=pe(i,b()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=zr(s,o),u=t.operationForChild(o);u&&(r=r.concat(ao(u,a,l,c)))}),i&&(r=r.concat(ds(i,t,s,n))),r}function lo(t,e){const n=e.query,s=_t(t,n);return{hashFn:()=>(au(e)||m.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?bu(t,n._path,s):wu(t,n._path);{const r=Ic(i,n);return so(t,n,null,r)}}}}function _t(t,e){const n=en(e);return t.queryToTagMap.get(n)}function en(t){return t._path.toString()+"$"+t._queryIdentifier}function fs(t,e){return t.tagToQueryMap.get(e)}function ps(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new T(t.substr(0,e))}}function _s(t,e,n){const s=t.syncPointTree_.get(e);f(s,"Missing sync point for query tag that we're tracking");const i=Zt(t.pendingWriteTree_,e);return ds(s,n,i,null)}function Nu(t){return t.fold((e,n,s)=>{if(n&&ge(n))return[Jt(n)];{let i=[];return n&&(i=eo(n)),j(s,(r,o)=>{i=i.concat(o)}),i}})}function rt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(yu())(t._repo,t._path):t}function Ru(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=en(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ku(){return vu++}function Au(t,e,n){const s=e._path,i=_t(t,e),r=lo(t,n),o=t.listenProvider_.startListening(rt(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)f(!ge(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!y(c)&&u&&ge(u))return[Jt(u).query];{let d=[];return u&&(d=d.concat(eo(u).map(p=>p.query))),j(h,(p,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(rt(u),_t(t,u))}}return o}/**
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
 */class ms{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ms(n)}node(){return this.node_}}class gs{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=L(this.path_,e);return new gs(this.syncTree_,n)}node(){return ro(this.syncTree_,this.path_)}}const xu=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mi=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Pu(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Du(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Pu=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},Du=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&f(!1,"Unexpected increment value: "+s);const i=e.node();if(f(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ou=function(t,e,n,s){return ys(e,new gs(n,t),s)},Lu=function(t,e,n){return ys(t,new ms(e),n)};function ys(t,e,n){const s=t.getPriority().val(),i=mi(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=mi(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new M(a,W(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new M(i))),o.forEachChild(x,(a,l)=>{const c=ys(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class vs{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Cs(t,e){let n=e instanceof T?e:new T(e),s=t,i=v(n);for(;i!==null;){const r=He(s.node.children,i)||{children:{},childCount:0};s=new vs(i,s,r),n=N(n),i=v(n)}return s}function Ye(t){return t.node.value}function co(t,e){t.node.value=e,Fn(t)}function ho(t){return t.node.childCount>0}function Mu(t){return Ye(t)===void 0&&!ho(t)}function tn(t,e){j(t.node.children,(n,s)=>{e(new vs(n,t,s))})}function uo(t,e,n,s){n&&!s&&e(t),tn(t,i=>{uo(i,e,!0,s)}),n&&s&&e(t)}function Fu(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bt(t){return new T(t.parent===null?t.name:bt(t.parent)+"/"+t.name)}function Fn(t){t.parent!==null&&Bu(t.parent,t.name,t)}function Bu(t,e,n){const s=Mu(n),i=le(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Fn(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fn(t))}/**
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
 */const Uu=/[\[\].#$\/\u0000-\u001F\u007F]/,Hu=/[\[\].#$\u0000-\u001F\u007F]/,yn=10*1024*1024,fo=function(t){return typeof t=="string"&&t.length!==0&&!Uu.test(t)},po=function(t){return typeof t=="string"&&t.length!==0&&!Hu.test(t)},Wu=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),po(t)},_o=function(t,e,n){const s=n instanceof T?new sh(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ee(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ee(s)+" with contents = "+e.toString());if(cr(e))throw new Error(t+"contains "+e.toString()+" "+Ee(s));if(typeof e=="string"&&e.length>yn/3&&Kt(e)>yn)throw new Error(t+"contains a string greater than "+yn+" utf8 bytes "+Ee(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(j(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!fo(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ee(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ih(s,o),_o(t,a,s),rh(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ee(s)+" in addition to actual children.")}},mo=function(t,e,n,s){if(!(s&&n===void 0)&&!po(n))throw new Error(Ui(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Vu=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mo(t,e,n,s)},$u=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wu(n))throw new Error(Ui(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gu(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Dr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ve(t,e,n){Gu(t,n),ju(t,s=>Z(s,e)||Z(e,s))}function ju(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(zu(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zu(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ie&&V("event: "+n.toString()),vt(s)}}}/**
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
 */const Yu="repo_interrupt",Ku=25;class Qu{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bt(),this.transactionQueueTree_=new vs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xu(t,e,n){if(t.stats_=ts(t.repoInfo_),t.forceRestClient_||Rc())t.server_=new Ft(t.repoInfo_,(s,i,r,o)=>{gi(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yi(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{O(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new re(t.repoInfo_,e,(s,i,r,o)=>{gi(t,s,i,r,o)},s=>{yi(t,s)},s=>{Ju(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Dc(t.repoInfo_,()=>new xh(t.stats_,t.server_)),t.infoData_=new Sh,t.infoSyncTree_=new _i({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Et(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Es(t,"connected",!1),t.serverSyncTree_=new _i({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ve(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Zu(t){const n=t.infoData_.getNode(new T(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function go(t){return xu({timestamp:Zu(t)})}function gi(t,e,n,s,i){t.dataUpdateCount++;const r=new T(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Pt(n,c=>W(c));o=Iu(t.serverSyncTree_,r,l,i)}else{const l=W(n);o=io(t.serverSyncTree_,r,l,i)}else if(s){const l=Pt(n,c=>W(c));o=Eu(t.serverSyncTree_,r,l)}else{const l=W(n);o=Et(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Is(t,r)),ve(t.eventQueue_,a,o)}function yi(t,e){Es(t,"connected",e),e===!1&&nd(t)}function Ju(t,e){j(e,(n,s)=>{Es(t,n,s)})}function Es(t,e,n){const s=new T("/.info/"+e),i=W(n);t.infoData_.updateSnapshot(s,i);const r=Et(t.infoSyncTree_,s,i);ve(t.eventQueue_,s,r)}function ed(t){return t.nextWriteId_++}function td(t,e,n){const s=Su(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=W(i).withIndex(e._queryParams.getIndex());Tu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Et(t.serverSyncTree_,e._path,r);else{const a=_t(t.serverSyncTree_,e);o=io(t.serverSyncTree_,e._path,r,a)}return ve(t.eventQueue_,e._path,o),so(t.serverSyncTree_,e,n,null,!0),r},i=>(ws(t,"get for query "+O(e)+" failed: "+i),Promise.reject(new Error(i))))}function nd(t){ws(t,"onDisconnectEvents");const e=go(t),n=Bt();Pn(t.onDisconnect_,b(),(i,r)=>{const o=Ou(i,r,t.serverSyncTree_,e);Wr(n,i,o)});let s=[];Pn(n,b(),(i,r)=>{s=s.concat(Et(t.serverSyncTree_,i,r));const o=od(t,i);Is(t,o)}),t.onDisconnect_=Bt(),ve(t.eventQueue_,b(),s)}function sd(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Yu)}function ws(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),V(n,...e)}function yo(t,e,n){return ro(t.serverSyncTree_,e,n)||m.EMPTY_NODE}function bs(t,e=t.transactionQueueTree_){if(e||nn(t,e),Ye(e)){const n=Co(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&id(t,bt(e),n)}else ho(e)&&tn(e,n=>{bs(t,n)})}function id(t,e,n){const s=n.map(c=>c.currentWriteId),i=yo(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];f(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=q(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ws(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Me(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();nn(t,Cs(t.transactionQueueTree_,e)),bs(t,t.transactionQueueTree_),ve(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)vt(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{K("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Is(t,e)}},o)}function Is(t,e){const n=vo(t,e),s=bt(n),i=Co(t,n);return rd(t,i,s),s}function rd(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=q(n,l.path);let u=!1,h;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Me(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ku)u=!0,h="maxretry",i=i.concat(Me(t.serverSyncTree_,l.currentWriteId,!0));else{const d=yo(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){_o("transaction failed: Data returned ",p,l.path);let _=W(p);typeof p=="object"&&p!=null&&le(p,".priority")||(_=_.updatePriority(d.getPriority()));const E=l.currentWriteId,Q=go(t),Pe=Lu(_,d,Q);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=Pe,l.currentWriteId=ed(t),o.splice(o.indexOf(E),1),i=i.concat(Cu(t.serverSyncTree_,l.path,Pe,l.currentWriteId,l.applyLocally)),i=i.concat(Me(t.serverSyncTree_,E,!0))}else u=!0,h="nodata",i=i.concat(Me(t.serverSyncTree_,l.currentWriteId,!0))}ve(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}nn(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)vt(s[a]);bs(t,t.transactionQueueTree_)}function vo(t,e){let n,s=t.transactionQueueTree_;for(n=v(e);n!==null&&Ye(s)===void 0;)s=Cs(s,n),e=N(e),n=v(e);return s}function Co(t,e){const n=[];return Eo(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Eo(t,e,n){const s=Ye(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);tn(e,i=>{Eo(t,i,n)})}function nn(t,e){const n=Ye(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,co(e,n.length>0?n:void 0)}tn(e,s=>{nn(t,s)})}function od(t,e){const n=bt(vo(t,e)),s=Cs(t.transactionQueueTree_,e);return Fu(s,i=>{vn(t,i)}),vn(t,s),uo(s,i=>{vn(t,i)}),n}function vn(t,e){const n=Ye(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Me(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?co(e,void 0):n.length=r+1,ve(t.eventQueue_,bt(e),i);for(let o=0;o<s.length;o++)vt(s[o])}}/**
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
 */function ad(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ld(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):K(`Invalid query segment '${n}' in query '${t}'`)}return e}const vi=function(t,e){const n=cd(t),s=n.namespace;n.domain==="firebase.com"&&ae(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ae("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vc();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Er(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new T(n.pathString)}},cd=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ad(t.substring(u,h)));const d=ld(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class hd{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+O(this.snapshot.exportVal())}}class ud{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class dd{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ts{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return y(this._path)?null:Ar(this._path)}get ref(){return new ce(this._repo,this._path)}get _queryIdentifier(){const e=ii(this._queryParams),n=Jn(e);return n==="{}"?"default":n}get _queryObject(){return ii(this._queryParams)}isEqual(e){if(e=ye(e),!(e instanceof Ts))return!1;const n=this._repo===e._repo,s=Dr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nh(this._path)}}class ce extends Ts{constructor(e,n){super(e,n,new os,!1)}get parent(){const e=Pr(this._path);return e===null?null:new ce(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mt{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new T(e),s=Bn(this.ref,e);return new mt(this._node.getChild(n),s,x)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new mt(i,Bn(this.ref,s),x)))}hasChild(e){const n=new T(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wo(t,e){return t=ye(t),t._checkNotDeleted("ref"),e!==void 0?Bn(t._root,e):t._root}function Bn(t,e){return t=ye(t),v(t._path)===null?Vu("child","path",e,!1):mo("child","path",e,!1),new ce(t._repo,L(t._path,e))}function bo(t){t=ye(t);const e=new dd(()=>{}),n=new Ss(e);return td(t._repo,t,n).then(s=>new mt(s,new ce(t._repo,t._path),t._queryParams.getIndex()))}class Ss{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new hd("value",this,new mt(e.snapshotNode,new ce(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ud(this,e,n):null}matches(e){return e instanceof Ss?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}du(ce);gu(ce);/**
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
 */const fd="FIREBASE_DATABASE_EMULATOR_HOST",Un={};let pd=!1;function _d(t,e,n,s){t.repoInfo_=new Er(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function md(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ae("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),V("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vi(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[fd]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=vi(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Be(Be.OWNER):new Ac(t.name,t.options,e);$u("Invalid Firebase Database URL",o),y(o.path)||ae("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yd(a,t,u,new kc(t.name,n));return new vd(h,t)}function gd(t,e){const n=Un[e];(!n||n[t.key]!==t)&&ae(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sd(t),delete n[t.key]}function yd(t,e,n,s){let i=Un[e.name];i||(i={},Un[e.name]=i);let r=i[t.toURLString()];return r&&ae("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qu(t,pd,n,s),i[t.toURLString()]=r,r}class vd{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ce(this._repo,b())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ae("Cannot call "+e+" on a deleted database.")}}function Cd(t=Gi(),e){const n=$i(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Pi("database");s&&Ed(n,...s)}return n}function Ed(t,e,n,s={}){t=ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ae("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ae('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Be(Be.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Oi(s.mockUserToken,t.app.options.projectId);r=new Be(o)}_d(i,e,n,r)}/**
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
 */function wd(t){pc(qi),at(new We("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return md(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),de(Ws,Vs,t),de(Ws,Vs,"esm2017")}re.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};re.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wd();const Ci={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:t=>`Invalid arguments passed to${t?` <${t}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},Ei={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:t=>`\`Astro.glob(${t})\` can only be used in \`.astro\` files. \`import.meta.glob(${t})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},wi={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:t=>`\`Astro.glob(${t})\` did not return any matching files. Check the pattern for typos.`};function bd(t){return t.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function Id(t,e){if(!e||e.line===void 0||e.column===void 0)return"";const n=bd(t).split(`
`).map(o=>o.replace(/\t/g,"  ")),s=[];for(let o=-2;o<=2;o++)n[e.line+o]&&s.push(e.line+o);let i=0;for(const o of s){let a=`> ${o}`;a.length>i&&(i=a.length)}let r="";for(const o of s){const a=o===e.line-1;r+=a?"> ":"  ",r+=`${o+1} | ${n[o]}
`,a&&(r+=`${Array.from({length:i}).join(" ")}  | ${Array.from({length:e.column}).join(" ")}^
`)}return r}class Hn extends Error{loc;title;hint;frame;type="AstroError";constructor(e,...n){super(...n);const{name:s,title:i,message:r,stack:o,location:a,hint:l,frame:c}=e;this.title=i,this.name=s,r&&(this.message=r),this.stack=o||this.stack,this.loc=a,this.hint=l,this.frame=c}setLocation(e){this.loc=e}setName(e){this.name=e}setMessage(e){this.message=e}setHint(e){this.hint=e}setFrame(e,n){this.frame=Id(e,n)}static is(e){return e.type==="AstroError"}}function Td(t){return!(t.length!==3||!t[0]||typeof t[0]!="object")}function Io(t,e,n){const s=e?.split("/").pop()?.replace(".astro","")??"",i=(...r)=>{if(!Td(r))throw new Hn({...Ci,message:Ci.message(s)});return t(...r)};return Object.defineProperty(i,"name",{value:s,writable:!1}),i.isAstroComponentFactory=!0,i.moduleId=e,i.propagation=n,i}function Sd(t){return Io(t.factory,t.moduleId,t.propagation)}function To(t,e,n){return typeof t=="function"?Io(t,e,n):Sd(t)}const Nd="3.6.4";function Rd(){return e=>{if(typeof e=="string")throw new Hn({...Ei,message:Ei.message(JSON.stringify(e))});let n=[...Object.values(e)];if(n.length===0)throw new Hn({...wi,message:wi.message(JSON.stringify(e))});return Promise.all(n.map(s=>s()))}}function So(t){return{site:t?new URL(t):void 0,generator:`Astro v${Nd}`,glob:Rd()}}const{replace:kd}="",Ad=/[&<>'"]/g,xd={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Pd=t=>xd[t],Dd=t=>kd.call(t,Ad,Pd);function Od(t){return!!t&&typeof t=="object"&&typeof t.then=="function"}const Ld=Dd;class Wn extends String{get[Symbol.toStringTag](){return"HTMLString"}}const No=t=>t instanceof Wn?t:typeof t=="string"?new Wn(t):t;function Md(t){return Object.prototype.toString.call(t)==="[object HTMLString]"}const Fd=Symbol.for("astro:render");function Bd(t){return Object.defineProperty(t,Fd,{value:!0})}function Ro(t){const e=[],n={write:i=>e.push(i)},s=t(n);return{async renderToFinalDestination(i){for(const r of e)i.write(r);n.write=r=>i.write(r),await s}}}function*Ud(){yield Bd({type:"maybe-head"})}const bi=Symbol.for("astro:slot-string");class Hd extends Wn{instructions;[bi];constructor(e,n){super(e),this.instructions=n,this[bi]=!0}}new TextEncoder;new TextDecoder;function Wd(t){return!!t&&typeof t=="object"&&"render"in t&&typeof t.render=="function"}async function kt(t,e){if(e=await e,e instanceof Hd)t.write(e);else if(Md(e))t.write(e);else if(Array.isArray(e)){const n=e.map(s=>Ro(i=>kt(i,s)));for(const s of n)s&&await s.renderToFinalDestination(t)}else if(typeof e=="function")await kt(t,e());else if(typeof e=="string")t.write(No(Ld(e)));else if(!(!e&&e!==0))if(Wd(e))await e.render(t);else if(Gd(e))await e.render(t);else if($d(e))await e.render(t);else if(ArrayBuffer.isView(e))t.write(e);else if(typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e))for await(const n of e)await kt(t,n);else t.write(e)}const Vd=Symbol.for("astro.componentInstance");function $d(t){return typeof t=="object"&&!!t[Vd]}const ko=Symbol.for("astro.renderTemplateResult");class qd{[ko]=!0;htmlParts;expressions;error;constructor(e,n){this.htmlParts=e,this.error=void 0,this.expressions=n.map(s=>Od(s)?Promise.resolve(s).catch(i=>{if(!this.error)throw this.error=i,i}):s)}async render(e){const n=this.expressions.map(s=>Ro(i=>{if(s||s===0)return kt(i,s)}));for(let s=0;s<this.htmlParts.length;s++){const i=this.htmlParts[s],r=n[s];e.write(No(i)),r&&await r.renderToFinalDestination(e)}}}function Gd(t){return typeof t=="object"&&!!t[ko]}function Ao(t,...e){return new qd(t,e)}const jd=So(),xo={apiKey:"AIzaSyD8y05o67CNIYc0kNPVQtsz4p58S1QyRXA",authDomain:"borufi-4610a.firebaseapp.com",databaseURL:"https://borufi-4610a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"borufi-4610a",storageBucket:"borufi-4610a.appspot.com",messagingSenderId:"13483024769",appId:"1:13483024769:web:4875c275b2f726b36d8880",measurementId:"G-XZNVBP7S41"},zd=To(async(t,e,n)=>{const s=t.createAstro(jd,e,n);return s.self=zd,Ao``},"E:/borufi/src/firebaseConfig.astro",void 0),Yd=document.querySelectorAll("#playButton"),Kd=document.getElementsByClassName("link-card");Yd.forEach(t=>{t.firstElementChild.style.display="block",t.lastElementChild.style.display="none"});Array.from(Kd).forEach(t=>{const e=t.querySelector("#playButton");t.addEventListener("mouseover",()=>{e?.classList.remove("no-animation")})});const Po=Kn(xo),Qd=Cd(Po),Xd=rr(Po),Zd=wo(Qd,"songData");let Jd=document.querySelectorAll("#imgPlay img"),ef=document.querySelectorAll("#info h2"),tf=document.querySelectorAll("#info p");try{const e=(await bo(Zd)).val();e?Object.keys(e).forEach(n=>{const s=Zn(Xd,"covers/"+e[n].img);(async()=>{const i=await Xn(s);Jd[n].src=i,ef[n].innerHTML=e[n].title,tf[n].innerHTML=e[n].author})()}):console.log("No data available")}catch(t){console.error("Error fetching data:",t)}const nf=So();let B={isLooping:!1,isShuffling:!1,audioSource:"",currentPlaylist:NaN,currentSong:NaN};const Te=To(async(t,e,n)=>{const s=t.createAstro(nf,e,n);return s.self=Te,Ao`${Ud()}<div id="audioPlayer" data-astro-cid-quhwgcgm> <div id="songInfo" data-astro-cid-quhwgcgm> <h1 id="title" data-astro-cid-quhwgcgm>Title</h1> <h2 id="artist" data-astro-cid-quhwgcgm>Artist</h2> </div> <div id="mainControls" data-astro-cid-quhwgcgm> <div id="songControls" data-astro-cid-quhwgcgm> <button id="random" data-astro-cid-quhwgcgm> <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;" data-astro-cid-quhwgcgm><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3536 1.14645C12.1583 0.951184 11.8417 0.951184 11.6464 1.14645C11.4512 1.34171 11.4512 1.65829 11.6464 1.85355L12.7929 3H12C10.7037 3 9.71111 3.58423 8.87248 4.38931C8.20065 5.03427 7.59349 5.85684 6.99461 6.6682C6.86287 6.84668 6.73154 7.02462 6.6 7.2C5.10874 9.18835 3.49037 11 0.5 11C0.223858 11 0 11.2239 0 11.5C0 11.7761 0.223858 12 0.5 12C4.00963 12 5.89126 9.81165 7.4 7.8C7.54367 7.60845 7.6832 7.41962 7.81996 7.23454L7.82005 7.23443L7.82006 7.23441C8.41674 6.42695 8.96069 5.69085 9.56502 5.11069C10.2889 4.41577 11.0463 4 12 4H12.7929L11.6464 5.14645C11.4512 5.34171 11.4512 5.65829 11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85355L14.3536 3.85355C14.5488 3.65829 14.5488 3.34171 14.3536 3.14645L12.3536 1.14645ZM0.5 3C3.35278 3 5.12992 4.44588 6.50548 6.06746L6.3762 6.24266C6.2483 6.4161 6.12293 6.58609 6 6.75C5.96397 6.79804 5.92798 6.84581 5.892 6.89331C4.57348 5.29306 3.02637 4 0.5 4C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3ZM8.87248 10.6107C8.37284 10.131 7.90897 9.55314 7.45767 8.95468C7.64688 8.71693 7.82704 8.48061 8 8.25L8.08987 8.12987C8.58412 8.79402 9.05288 9.39766 9.56502 9.88931C10.2889 10.5842 11.0463 11 12 11H12.7929L11.6464 9.85355C11.4512 9.65829 11.4512 9.34171 11.6464 9.14645C11.8417 8.95118 12.1583 8.95118 12.3536 9.14645L14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536C11.4512 13.6583 11.4512 13.3417 11.6464 13.1464L12.7929 12H12C10.7037 12 9.71111 11.4158 8.87248 10.6107Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;" data-astro-cid-quhwgcgm></path></svg> </button> <button id="playPrevious" data-astro-cid-quhwgcgm> <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;" data-astro-cid-quhwgcgm><path fill-rule="evenodd" clip-rule="evenodd" d="M1.94976 2.74989C1.94976 2.44613 2.196 2.19989 2.49976 2.19989C2.80351 2.19989 3.04976 2.44613 3.04976 2.74989V7.2825C3.0954 7.18802 3.17046 7.10851 3.26662 7.05776L12.2666 2.30776C12.4216 2.22596 12.6081 2.23127 12.7582 2.32176C12.9083 2.41225 13 2.57471 13 2.74995V12.25C13 12.4252 12.9083 12.5877 12.7582 12.6781C12.6081 12.7686 12.4216 12.7739 12.2666 12.6921L3.26662 7.94214C3.17046 7.89139 3.0954 7.81188 3.04976 7.7174V12.2499C3.04976 12.5536 2.80351 12.7999 2.49976 12.7999C2.196 12.7999 1.94976 12.5536 1.94976 12.2499V2.74989ZM4.57122 7.49995L12 11.4207V3.5792L4.57122 7.49995Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;" data-astro-cid-quhwgcgm></path></svg> </button> <button id="play" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);" data-astro-cid-quhwgcgm> <svg viewBox="0 0 15 15" height="32px" width="32px" data-astro-cid-quhwgcgm><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925" data-astro-cid-quhwgcgm></path></svg> <svg viewBox="0 0 15 15" height="32px" width="32px" data-astro-cid-quhwgcgm><path d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z" data-astro-cid-quhwgcgm></path></svg> </button> <button id="playNext" data-astro-cid-quhwgcgm> <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;" data-astro-cid-quhwgcgm><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0502 2.74989C13.0502 2.44613 12.804 2.19989 12.5002 2.19989C12.1965 2.19989 11.9502 2.44613 11.9502 2.74989V7.2825C11.9046 7.18802 11.8295 7.10851 11.7334 7.05776L2.73338 2.30776C2.5784 2.22596 2.3919 2.23127 2.24182 2.32176C2.09175 2.41225 2 2.57471 2 2.74995V12.25C2 12.4252 2.09175 12.5877 2.24182 12.6781C2.3919 12.7686 2.5784 12.7739 2.73338 12.6921L11.7334 7.94214C11.8295 7.89139 11.9046 7.81188 11.9502 7.7174V12.2499C11.9502 12.5536 12.1965 12.7999 12.5002 12.7999C12.804 12.7999 13.0502 12.5536 13.0502 12.2499V2.74989ZM3 11.4207V3.5792L10.4288 7.49995L3 11.4207Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;" data-astro-cid-quhwgcgm></path></svg> </button> <button id="loop" data-astro-cid-quhwgcgm> <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;" data-astro-cid-quhwgcgm><path fill-rule="evenodd" clip-rule="evenodd" d="M3.35355 1.85355C3.54882 1.65829 3.54882 1.34171 3.35355 1.14645C3.15829 0.951184 2.84171 0.951184 2.64645 1.14645L0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355L2.64645 5.85355C2.84171 6.04882 3.15829 6.04882 3.35355 5.85355C3.54882 5.65829 3.54882 5.34171 3.35355 5.14645L2.20711 4H9.5C11.433 4 13 5.567 13 7.5C13 7.77614 13.2239 8 13.5 8C13.7761 8 14 7.77614 14 7.5C14 5.01472 11.9853 3 9.5 3H2.20711L3.35355 1.85355ZM2 7.5C2 7.22386 1.77614 7 1.5 7C1.22386 7 1 7.22386 1 7.5C1 9.98528 3.01472 12 5.5 12H12.7929L11.6464 13.1464C11.4512 13.3417 11.4512 13.6583 11.6464 13.8536C11.8417 14.0488 12.1583 14.0488 12.3536 13.8536L14.3536 11.8536C14.5488 11.6583 14.5488 11.3417 14.3536 11.1464L12.3536 9.14645C12.1583 8.95118 11.8417 8.95118 11.6464 9.14645C11.4512 9.34171 11.4512 9.65829 11.6464 9.85355L12.7929 11H5.5C3.567 11 2 9.433 2 7.5Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;" data-astro-cid-quhwgcgm></path></svg> </button> </div> <div id="audioNavigation" data-astro-cid-quhwgcgm> <label id="current-time" class="time" data-astro-cid-quhwgcgm>0:00</label> <input type="range" id="seek-slider" min="0" max="0" value="0" disabled data-astro-cid-quhwgcgm> <label id="duration" class="time" data-astro-cid-quhwgcgm>0:00</label> </div> </div> <div id="volumeControl" data-astro-cid-quhwgcgm> <span id="volume" data-astro-cid-quhwgcgm>50</span> <button id="mute" data-astro-cid-quhwgcgm> <svg id="highV" viewBox="0 0 16 16" height="32px" width="32px" fill="white" data-astro-cid-quhwgcgm><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" data-astro-cid-quhwgcgm></path><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" style="display: block;" data-astro-cid-quhwgcgm></path><path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" style="display: block;" data-astro-cid-quhwgcgm></path></svg> <svg id="medV" viewBox="0 0 16 16" height="32px" width="32px" fill="white" data-astro-cid-quhwgcgm><path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z" data-astro-cid-quhwgcgm></path></svg> <svg id="noV" viewBox="0 0 16 16" height="32px" width="32px" fill="white" data-astro-cid-quhwgcgm><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" data-astro-cid-quhwgcgm></path></svg> </button> <input type="range" id="volume-slider" min="0" max="100" value="50" data-astro-cid-quhwgcgm> </div> <audio id="audio" src="" preload="metadata" data-astro-cid-quhwgcgm></audio></div>  `},"E:/borufi/src/player/Player.astro",void 0);let sn=document.querySelectorAll("#playButton"),oe=document.getElementById("play"),jt=document.getElementById("current-time"),A=document.getElementById("seek-slider"),Vn=document.getElementById("duration"),I=document.getElementById("audio"),$n=document.getElementById("mute"),qn=document.getElementById("volume"),k=document.getElementById("volume-slider");A.disabled=!0;oe&&(oe.disabled=!0);const zt=(t=!1)=>{if(oe instanceof HTMLElement){const e=oe.firstElementChild,n=oe.lastElementChild;t?(e.style.display="block",n.style.display="none"):(e.style.display="none",n.style.display="block")}},sf=t=>{oe instanceof HTMLElement&&(t==null||t==""||t==null?(console.log("No audio source found"),A.setAttribute("disabled","true"),oe.setAttribute("disabled","true"),I.setAttribute("src","null"),zt(!0)):t!==I.src&&(A.removeAttribute("disabled"),oe.removeAttribute("disabled"),I.setAttribute("src",t),Te.audioSource=t,console.log("Audio source changed"),I.play(),zt()))},rf=()=>{I instanceof HTMLAudioElement&&(I.paused?I.play():I.pause())};I.addEventListener("play",()=>{zt(),sn.forEach((t,e)=>{Te.currentPlaylist==e?t.parentElement?.parentElement?.parentElement.classList.add("active"):t.parentElement?.parentElement?.parentElement.classList.remove("active")})});I.addEventListener("pause",()=>{zt(!0)});oe.addEventListener("click",()=>{rf(),sn.forEach(t=>{I.paused?(t.firstElementChild.style.display="block",t.lastElementChild.style.display="none"):Te.currentPlaylist==t.parentElement.parentElement?.dataset.source&&(t.firstElementChild.style.display="none",t.lastElementChild.style.display="block")})});const Do=(t,e=0)=>{jt&&(jt.innerHTML=Gn(t)),Vn&&e!==0&&(Vn.innerHTML=Gn(e)),A.value="0"},Gn=t=>{const e=Math.floor(t/60),n=Math.floor(t%60);return n<10?`${e}:0${n}`:n>=10?`${e}:${n}`:"0:00"};k.style.setProperty("--volume-before-width",`${Number(k.value)/Number(k.max)*100}%`);I instanceof HTMLAudioElement&&(I.volume=Number(k.value)/200);const Oo=()=>{I instanceof HTMLAudioElement&&(I.volume=Number(k.value)/200)};let At=!0,tt=50;$n?.addEventListener("click",()=>{if(k.value=="0"&&tt==0)return;const[t,e,n]=$n?.children;At?(tt=parseInt(k.value),k.value="0",t.style.display="none",e.style.display="none",n.style.display="block"):(k.value=tt.toString(),tt>75?(t.style.display="block",e.style.display="none",n.style.display="none"):(t.style.display="none",e.style.display="block",n.style.display="none")),k.style.setProperty("--volume-before-width",`${Number(k.value)/Number(k.max)*100}%`),qn&&(qn.innerHTML=k.value.toString(),Oo()),At=!At});k.addEventListener("input",()=>{I.volume=Number(k.value)/200;const[t,e,n]=$n.children;Number(k.value)>75?(t.style.display="block",e.style.display="none",n.style.display="none"):Number(k.value)>0?(t.style.display="none",e.style.display="block",n.style.display="none"):(t.style.display="none",e.style.display="none",n.style.display="block"),k.style.setProperty("--volume-before-width",`${Number(k.value)/Number(k.max)*100}%`),qn.innerHTML=k.value.toString(),At=!0});k?.addEventListener("change",()=>{tt=Number(k.value),Oo()});I?.addEventListener("loadedmetadata",()=>{Do(I.currentTime,I.duration)});let Yt=0;A?.addEventListener("input",()=>{I&&jt&&(Yt=Number(A.value),A.style.setProperty("--seek-before-width",`${Number(A.value)/Number(A.max)*100}%`),jt.innerHTML=Gn(Yt))});A?.addEventListener("change",()=>{I instanceof HTMLAudioElement&&(I.currentTime=I.duration*(Number(A.value)/Number(A.max)),A.style.setProperty("--seek-before-width",`${Number(A.value)/Number(A.max)*100}%`),Yt=0)});setInterval(()=>{I instanceof HTMLAudioElement&&Vn&&Yt==0&&(Do(I.currentTime),A.value=I.currentTime.toString(),A.style.setProperty("--seek-before-width",`${Number(A.value)/Number(A.max)*100}%`),isNaN(Number(A.max))?A.max="0":A.max=Math.floor(I.duration).toString())},1e3);const of=()=>{sn.forEach(t=>{if(t.firstElementChild.style.display="block",t.lastElementChild.style.display="none",t instanceof HTMLElement){const e=t.parentElement?.parentElement?.parentElement;e&&e.classList.remove("active")}})};sn.forEach((t,e)=>{t.addEventListener("click",n=>{Te.currentPlaylist!=e?(of(),document.querySelectorAll("#song")[e].classList.add("active"),Te.currentPlaylist=e,Te.currentSong=0,sf(playlistData[e].songs[0].source),t.firstElementChild.style.display="none",t.lastElementChild.style.display="block"):I.paused?(t.firstElementChild.style.display="none",t.lastElementChild.style.display="block",I.play()):(t.firstElementChild.style.display="block",t.lastElementChild.style.display="none",I.pause()),n.stopPropagation()})});const ne=[],af=Kn(xo),Ns=rr(af),lf=Zn(Ns,"covers/boruwa_originals.jpg"),cf=document.getElementById("imgPlay");try{const t=await Xn(lf);cf.src=t}catch(t){console.error("Error getting download URL:",t)}const hf=wo(Ns,"songData");try{const e=(await bo(hf)).val();e?(Object.keys(e).forEach(n=>{ne.push(e[n])}),console.log("Playlists Data:",ne)):console.log("No data available")}catch(t){console.error("Error fetching data:",t)}const Lo=async()=>{const t=Zn(Ns,"songData"),e=await Xn(t+ne[P].songs[w].source);console.log(e),D.src=e};let uf=document.getElementById("backButton"),Mo=document.querySelectorAll("#song"),df=document.getElementById("cover"),ff=document.getElementById("playlistTitle"),pf=document.getElementById("author"),_f=document.getElementById("playlistLength"),et=document.getElementById("songs"),Fo=document.getElementById("playlistMain"),Bo=document.getElementById("main"),se=document.getElementById("playPlaylist")?.lastElementChild,D=document.getElementById("audio"),mf=document.getElementById("playNext"),gf=document.getElementById("playPrevious"),Oe=document.querySelectorAll("#playButton");se.lastElementChild.style.display="none";let P=0;uf?.addEventListener("click",()=>{Fo.style.display="none",Bo.style.display="flex",Mo.forEach(t=>{if(t.dataset.source!=B.currentPlaylist)Oe[t.dataset.source].firstElementChild.style.display="block",Oe[t.dataset.source].lastElementChild.style.display="none";else if(D.paused){Oe[t.dataset.source].firstElementChild.style.display="block",Oe[t.dataset.source].lastElementChild.style.display="none";let e=document.querySelectorAll("#singleSongButton");e[w].firstElementChild.style.display="block",e[w].lastElementChild.style.display="none"}else{Oe[t.dataset.source].firstElementChild.style.display="none",Oe[t.dataset.source].lastElementChild.style.display="block";let e=document.querySelectorAll("#singleSongButton");e[w].firstElementChild.style.display="none",e[w].lastElementChild.style.display="block"}})});function Ii(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n<10?"0":""}${n}`}let w=NaN;function yf(){w=B.currentSong;let t=0;df.src=ne[P].img,ff.textContent=ne[P].title,pf.textContent=ne[P].author;var e=et.querySelectorAll("tr");e.forEach(n=>{n.remove()}),ne[P].songs.forEach((n,s)=>{let i=new Audio(n.source);i.addEventListener("loadedmetadata",()=>{let r=document.createElement("tr");r.style.height="3rem",r.innerHTML+=`
                    <td style="display: flex; height: inherit; padding-right: 1rem;">
                        <button id="singleSongButton" data-source='${n.source}' data-openedPlaylistID='${P}' style="padding: 0; border: none; background: none; color: white; cursor: pointer;">
                            <svg viewBox="0 0 16 16" width="32px" height="32px"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fill="currentColor"></path></svg>
                            <svg viewBox="0 0 16 16" style="display: none;" width="32px" height="32px"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z" fill="currentColor"></path></svg>
                        </button>
                    </td>
                    <td style="padding-right: 1rem;">${s+1}</td>
                    <td style="padding-right: 1rem;">${n.title}</td>
                    <td style="padding-right: 1rem;">${n.artist}</td>
                    <td>${Ii(i.duration)}</td>`,s>et.childElementCount?et.appendChild(r):et.insertBefore(r,et.children[s]);let o=document.querySelectorAll("#singleSongButton");t+=i.duration,_f.textContent="Playlist length: "+Ii(t),o.forEach((a,l)=>{let c=a.firstElementChild,u=a.lastElementChild;console.log(l,w,P,B.currentPlaylist,D.paused),l!=w||P!=B.currentPlaylist||D.paused?(c.style.display="block",u.style.display="none"):(c.style.display="none",u.style.display="block"),!a.getAttribute("listener")&&a.addEventListener("click",()=>{console.log("HALO");let h=document.getElementById("play"),d=document.getElementById("seek-slider");h.removeAttribute("disabled"),d.removeAttribute("disabled"),P=parseInt(a.dataset.openedplaylistid),B.currentPlaylist=P,c&&u&&(w!=l||B.audioSource!=a.dataset.source?(w=l,Lo(),D.play()):D.paused?D.play():D.pause(),o.forEach((p,_)=>{let C=p.firstElementChild,E=p.lastElementChild;console.log(_!=w,P!=B.currentPlaylist,D.paused),_!=w||D.paused?(console.log("playIco",_),C.style.display="block",E.style.display="none"):(console.log("pauseIco",_),C.style.display="none",E.style.display="block")}))})})})})}const rn=(t,e=!1)=>{console.log("kkkk",e);let n=t.firstElementChild,s=t.lastElementChild;if(n.style.display="none",s.style.display="block",ne[P].songs[w]&&ne[P].songs[w].source!=B.audioSource&&!e){Lo(),D.play(),n.style.display="none",s.style.display="block";return}D.paused?(e||D.play(),n.style.display="none",s.style.display="block"):(e||D.pause(),n.style.display="block",s.style.display="none")},vf=()=>{let t=document.querySelectorAll("#singleSongButton");isNaN(w)&&(w=0),rn(t[w]);let e=document.getElementById("play");document.getElementById("seek-slider").removeAttribute("disabled"),e.removeAttribute("disabled"),B.currentPlaylist=P};se.addEventListener("click",()=>{vf(),console.log("playPlaylist")});Mo.forEach((t,e)=>{t.addEventListener("click",()=>{Fo.style.display="block",Bo.style.display="none",P=e,console.log(B.currentPlaylist,P),console.log(P!=B.currentPlaylist),yf(),P!=B.currentPlaylist||D.paused?(se.firstElementChild.style.display="block",se.lastElementChild.style.display="none"):(se.firstElementChild.style.display="none",se.lastElementChild.style.display="block")})});const Uo=()=>{w++;let t=document.querySelectorAll("#singleSongButton");t[w]?(t.forEach(e=>{let n=e.firstElementChild,s=e.lastElementChild;n.style.display="block",s.style.display="none"}),rn(t[w])):w--},Cf=()=>{w--;let t=document.querySelectorAll("#singleSongButton");t[w]?rn(t[w]):w++};mf.addEventListener("click",()=>{Uo()});gf.addEventListener("click",()=>{Cf()});let Ti=document.getElementById("random"),Si=document.getElementById("loop");Si?.addEventListener("click",()=>{Si?.classList.toggle("on"),D.loop=B.isLooping,B.isLooping=!B.isLooping});Ti?.addEventListener("click",()=>{Ti?.classList.toggle("on"),B.isShuffling=!B.isShuffling});D.addEventListener("ended",()=>{if(B.isShuffling){let t=document.querySelectorAll("#singleSongButton");t.forEach(e=>{let n=e.firstElementChild,s=e.lastElementChild;n.style.display="block",s.style.display="none"}),w=Math.random()*ne[P].songs.length,rn(t[w])}else Uo()});D.addEventListener("play",()=>{console.log("play"),se.firstElementChild.style.display="none",se.lastElementChild.style.display="block";let t=document.querySelectorAll("#singleSongButton");t[w].firstElementChild.style.display="none",t[w].lastElementChild.style.display="block"});D.addEventListener("pause",()=>{console.log("pause"),se.firstElementChild.style.display="block",se.lastElementChild.style.display="none";let t=document.querySelectorAll("#singleSongButton");console.log(w),t[w].firstElementChild.style.display="block",t[w].lastElementChild.style.display="none"});
