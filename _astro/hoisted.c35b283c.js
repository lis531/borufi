/* empty css                       */const Ms={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:t=>`Invalid arguments passed to${t?` <${t}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},Fs={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:t=>`\`Astro.glob(${t})\` can only be used in \`.astro\` files. \`import.meta.glob(${t})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},Bs={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:t=>`\`Astro.glob(${t})\` did not return any matching files. Check the pattern for typos.`};function sl(t){return t.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function il(t,e){if(!e||e.line===void 0||e.column===void 0)return"";const n=sl(t).split(`
`).map(o=>o.replace(/\t/g,"  ")),s=[];for(let o=-2;o<=2;o++)n[e.line+o]&&s.push(e.line+o);let i=0;for(const o of s){let l=`> ${o}`;l.length>i&&(i=l.length)}let r="";for(const o of s){const l=o===e.line-1;r+=l?"> ":"  ",r+=`${o+1} | ${n[o]}
`,l&&(r+=`${Array.from({length:i}).join(" ")}  | ${Array.from({length:e.column}).join(" ")}^
`)}return r}class Nn extends Error{loc;title;hint;frame;type="AstroError";constructor(e,...n){super(...n);const{name:s,title:i,message:r,stack:o,location:l,hint:a,frame:c}=e;this.title=i,this.name=s,r&&(this.message=r),this.stack=o||this.stack,this.loc=l,this.hint=a,this.frame=c}setLocation(e){this.loc=e}setName(e){this.name=e}setMessage(e){this.message=e}setHint(e){this.hint=e}setFrame(e,n){this.frame=il(e,n)}static is(e){return e.type==="AstroError"}}function rl(t){return!(t.length!==3||!t[0]||typeof t[0]!="object")}function Mi(t,e,n){const s=e?.split("/").pop()?.replace(".astro","")??"",i=(...r)=>{if(!rl(r))throw new Nn({...Ms,message:Ms.message(s)});return t(...r)};return Object.defineProperty(i,"name",{value:s,writable:!1}),i.isAstroComponentFactory=!0,i.moduleId=e,i.propagation=n,i}function ol(t){return Mi(t.factory,t.moduleId,t.propagation)}function Fi(t,e,n){return typeof t=="function"?Mi(t,e,n):ol(t)}const ll="3.6.4";function al(){return e=>{if(typeof e=="string")throw new Nn({...Fs,message:Fs.message(JSON.stringify(e))});let n=[...Object.values(e)];if(n.length===0)throw new Nn({...Bs,message:Bs.message(JSON.stringify(e))});return Promise.all(n.map(s=>s()))}}function Bi(t){return{site:t?new URL(t):void 0,generator:`Astro v${ll}`,glob:al()}}const{replace:cl}="",hl=/[&<>'"]/g,ul={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},dl=t=>ul[t],fl=t=>cl.call(t,hl,dl);function pl(t){return!!t&&typeof t=="object"&&typeof t.then=="function"}const _l=fl;class Rn extends String{get[Symbol.toStringTag](){return"HTMLString"}}const Ui=t=>t instanceof Rn?t:typeof t=="string"?new Rn(t):t;function gl(t){return Object.prototype.toString.call(t)==="[object HTMLString]"}const ml=Symbol.for("astro:render");function yl(t){return Object.defineProperty(t,ml,{value:!0})}function Hi(t){const e=[],n={write:i=>e.push(i)},s=t(n);return{async renderToFinalDestination(i){for(const r of e)i.write(r);n.write=r=>i.write(r),await s}}}function*vl(){yield yl({type:"maybe-head"})}const Us=Symbol.for("astro:slot-string");class Cl extends Rn{instructions;[Us];constructor(e,n){super(e),this.instructions=n,this[Us]=!0}}new TextEncoder;new TextDecoder;function El(t){return!!t&&typeof t=="object"&&"render"in t&&typeof t.render=="function"}async function Dt(t,e){if(e=await e,e instanceof Cl)t.write(e);else if(gl(e))t.write(e);else if(Array.isArray(e)){const n=e.map(s=>Hi(i=>Dt(i,s)));for(const s of n)s&&await s.renderToFinalDestination(t)}else if(typeof e=="function")await Dt(t,e());else if(typeof e=="string")t.write(Ui(_l(e)));else if(!(!e&&e!==0))if(El(e))await e.render(t);else if(Tl(e))await e.render(t);else if(bl(e))await e.render(t);else if(ArrayBuffer.isView(e))t.write(e);else if(typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e))for await(const n of e)await Dt(t,n);else t.write(e)}const wl=Symbol.for("astro.componentInstance");function bl(t){return typeof t=="object"&&!!t[wl]}const Vi=Symbol.for("astro.renderTemplateResult");class Il{[Vi]=!0;htmlParts;expressions;error;constructor(e,n){this.htmlParts=e,this.error=void 0,this.expressions=n.map(s=>pl(s)?Promise.resolve(s).catch(i=>{if(!this.error)throw this.error=i,i}):s)}async render(e){const n=this.expressions.map(s=>Hi(i=>{if(s||s===0)return Dt(i,s)}));for(let s=0;s<this.htmlParts.length;s++){const i=this.htmlParts[s],r=n[s];e.write(Ui(i)),r&&await r.renderToFinalDestination(e)}}}function Tl(t){return typeof t=="object"&&!!t[Vi]}function $i(t,...e){return new Il(t,e)}const Sl=Bi();let _={isLooping:!1,isShuffling:!1,audioSource:"",currentPlaylist:NaN,openedPlaylist:NaN,currentSong:NaN};const Nl=Fi(async(t,e,n)=>{const s=t.createAstro(Sl,e,n);return s.self=Nl,$i`${vl()}<div id="audioPlayer" data-astro-cid-quhwgcgm> <div id="songInfo" data-astro-cid-quhwgcgm> <h1 id="title" data-astro-cid-quhwgcgm>Title</h1> <h2 id="artist" data-astro-cid-quhwgcgm>Artist</h2> </div> <div id="mainControls" data-astro-cid-quhwgcgm> <div id="songControls" data-astro-cid-quhwgcgm> <button id="random" data-astro-cid-quhwgcgm> <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;" data-astro-cid-quhwgcgm><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3536 1.14645C12.1583 0.951184 11.8417 0.951184 11.6464 1.14645C11.4512 1.34171 11.4512 1.65829 11.6464 1.85355L12.7929 3H12C10.7037 3 9.71111 3.58423 8.87248 4.38931C8.20065 5.03427 7.59349 5.85684 6.99461 6.6682C6.86287 6.84668 6.73154 7.02462 6.6 7.2C5.10874 9.18835 3.49037 11 0.5 11C0.223858 11 0 11.2239 0 11.5C0 11.7761 0.223858 12 0.5 12C4.00963 12 5.89126 9.81165 7.4 7.8C7.54367 7.60845 7.6832 7.41962 7.81996 7.23454L7.82005 7.23443L7.82006 7.23441C8.41674 6.42695 8.96069 5.69085 9.56502 5.11069C10.2889 4.41577 11.0463 4 12 4H12.7929L11.6464 5.14645C11.4512 5.34171 11.4512 5.65829 11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85355L14.3536 3.85355C14.5488 3.65829 14.5488 3.34171 14.3536 3.14645L12.3536 1.14645ZM0.5 3C3.35278 3 5.12992 4.44588 6.50548 6.06746L6.3762 6.24266C6.2483 6.4161 6.12293 6.58609 6 6.75C5.96397 6.79804 5.92798 6.84581 5.892 6.89331C4.57348 5.29306 3.02637 4 0.5 4C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3ZM8.87248 10.6107C8.37284 10.131 7.90897 9.55314 7.45767 8.95468C7.64688 8.71693 7.82704 8.48061 8 8.25L8.08987 8.12987C8.58412 8.79402 9.05288 9.39766 9.56502 9.88931C10.2889 10.5842 11.0463 11 12 11H12.7929L11.6464 9.85355C11.4512 9.65829 11.4512 9.34171 11.6464 9.14645C11.8417 8.95118 12.1583 8.95118 12.3536 9.14645L14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536C11.4512 13.6583 11.4512 13.3417 11.6464 13.1464L12.7929 12H12C10.7037 12 9.71111 11.4158 8.87248 10.6107Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;" data-astro-cid-quhwgcgm></path></svg> </button> <button id="playPrevious" data-astro-cid-quhwgcgm> <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;" data-astro-cid-quhwgcgm><path fill-rule="evenodd" clip-rule="evenodd" d="M1.94976 2.74989C1.94976 2.44613 2.196 2.19989 2.49976 2.19989C2.80351 2.19989 3.04976 2.44613 3.04976 2.74989V7.2825C3.0954 7.18802 3.17046 7.10851 3.26662 7.05776L12.2666 2.30776C12.4216 2.22596 12.6081 2.23127 12.7582 2.32176C12.9083 2.41225 13 2.57471 13 2.74995V12.25C13 12.4252 12.9083 12.5877 12.7582 12.6781C12.6081 12.7686 12.4216 12.7739 12.2666 12.6921L3.26662 7.94214C3.17046 7.89139 3.0954 7.81188 3.04976 7.7174V12.2499C3.04976 12.5536 2.80351 12.7999 2.49976 12.7999C2.196 12.7999 1.94976 12.5536 1.94976 12.2499V2.74989ZM4.57122 7.49995L12 11.4207V3.5792L4.57122 7.49995Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;" data-astro-cid-quhwgcgm></path></svg> </button> <button id="play" data-astro-cid-quhwgcgm> <svg viewBox="0 0 15 15" height="32px" width="32px" data-astro-cid-quhwgcgm><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925" data-astro-cid-quhwgcgm></path></svg> <svg viewBox="0 0 15 15" height="32px" width="32px" data-astro-cid-quhwgcgm><path d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z" data-astro-cid-quhwgcgm></path></svg> </button> <button id="playNext" data-astro-cid-quhwgcgm> <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;" data-astro-cid-quhwgcgm><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0502 2.74989C13.0502 2.44613 12.804 2.19989 12.5002 2.19989C12.1965 2.19989 11.9502 2.44613 11.9502 2.74989V7.2825C11.9046 7.18802 11.8295 7.10851 11.7334 7.05776L2.73338 2.30776C2.5784 2.22596 2.3919 2.23127 2.24182 2.32176C2.09175 2.41225 2 2.57471 2 2.74995V12.25C2 12.4252 2.09175 12.5877 2.24182 12.6781C2.3919 12.7686 2.5784 12.7739 2.73338 12.6921L11.7334 7.94214C11.8295 7.89139 11.9046 7.81188 11.9502 7.7174V12.2499C11.9502 12.5536 12.1965 12.7999 12.5002 12.7999C12.804 12.7999 13.0502 12.5536 13.0502 12.2499V2.74989ZM3 11.4207V3.5792L10.4288 7.49995L3 11.4207Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;" data-astro-cid-quhwgcgm></path></svg> </button> <button id="loop" data-astro-cid-quhwgcgm> <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;" data-astro-cid-quhwgcgm><path fill-rule="evenodd" clip-rule="evenodd" d="M3.35355 1.85355C3.54882 1.65829 3.54882 1.34171 3.35355 1.14645C3.15829 0.951184 2.84171 0.951184 2.64645 1.14645L0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355L2.64645 5.85355C2.84171 6.04882 3.15829 6.04882 3.35355 5.85355C3.54882 5.65829 3.54882 5.34171 3.35355 5.14645L2.20711 4H9.5C11.433 4 13 5.567 13 7.5C13 7.77614 13.2239 8 13.5 8C13.7761 8 14 7.77614 14 7.5C14 5.01472 11.9853 3 9.5 3H2.20711L3.35355 1.85355ZM2 7.5C2 7.22386 1.77614 7 1.5 7C1.22386 7 1 7.22386 1 7.5C1 9.98528 3.01472 12 5.5 12H12.7929L11.6464 13.1464C11.4512 13.3417 11.4512 13.6583 11.6464 13.8536C11.8417 14.0488 12.1583 14.0488 12.3536 13.8536L14.3536 11.8536C14.5488 11.6583 14.5488 11.3417 14.3536 11.1464L12.3536 9.14645C12.1583 8.95118 11.8417 8.95118 11.6464 9.14645C11.4512 9.34171 11.4512 9.65829 11.6464 9.85355L12.7929 11H5.5C3.567 11 2 9.433 2 7.5Z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;" data-astro-cid-quhwgcgm></path></svg> </button> </div> <div id="audioNavigation" data-astro-cid-quhwgcgm> <label id="current-time" class="time" data-astro-cid-quhwgcgm>0:00</label> <input type="range" id="seek-slider" min="0" max="0" value="0" disabled data-astro-cid-quhwgcgm> <label id="duration" class="time" data-astro-cid-quhwgcgm>0:00</label> </div> </div> <div id="volumeControl" data-astro-cid-quhwgcgm> <!-- <span id="volume">50</span> --> <button id="mute" data-astro-cid-quhwgcgm> <svg id="highV" viewBox="0 0 16 16" height="32px" width="32px" fill="white" data-astro-cid-quhwgcgm><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" data-astro-cid-quhwgcgm></path><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" data-astro-cid-quhwgcgm></path><path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" data-astro-cid-quhwgcgm></path></svg> <svg id="medV" viewBox="0 0 16 16" height="32px" width="32px" fill="white" data-astro-cid-quhwgcgm><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" data-astro-cid-quhwgcgm></path><path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" data-astro-cid-quhwgcgm></path></svg> <svg id="lowV" viewBox="0 0 16 16" height="32px" width="32px" fill="white" data-astro-cid-quhwgcgm><path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" data-astro-cid-quhwgcgm></path></svg> <svg id="noV" viewBox="0 0 16 16" height="32px" width="32px" fill="white" data-astro-cid-quhwgcgm><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" data-astro-cid-quhwgcgm></path></svg> </button> <input type="range" id="volume-slider" min="0" max="100" value="50" data-astro-cid-quhwgcgm> </div> <audio id="audio" src="" preload="metadata" data-astro-cid-quhwgcgm></audio></div>  `},"E:/borufi/src/player/Player.astro",void 0);/**
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
 */const Wi={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const p=function(t,e){if(!t)throw Ge(e)},Ge=function(t){return new Error("Firebase Database ("+Wi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const qi=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rl=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new kl;const d=r<<2|l>>4;if(s.push(d),c!==64){const f=l<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zi=function(t){const e=qi(t);return Jn.encodeByteArray(e,!0)},Lt=function(t){return zi(t).replace(/\./g,"")},kn=function(t){try{return Jn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Al(t){return Gi(void 0,t)}function Gi(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xl(n)||(t[n]=Gi(t[n],e[n]));return t}function xl(t){return t!=="__proto__"}/**
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
 */const Dl=()=>Pl().__FIREBASE_DEFAULTS__,Ol=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ll=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kn(t[1]);return e&&JSON.parse(e)},ji=()=>{try{return Dl()||Ol()||Ll()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ml=t=>{var e,n;return(n=(e=ji())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yi=t=>{const e=Ml(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ki=()=>{var t;return(t=ji())===null||t===void 0?void 0:t.config};/**
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
 */class es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Qi(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Lt(JSON.stringify(n)),Lt(JSON.stringify(o)),l].join(".")}/**
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
 */function Fl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fl())}function Bl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zi(){return Wi.NODE_ADMIN===!0}function Ul(){try{return typeof indexedDB=="object"}catch{return!1}}function Hl(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Vl="FirebaseError";class je extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Vl,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?$l(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new je(i,l,s)}}function $l(t,e){return t.replace(Wl,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Wl=/\{\$([^}]+)}/g;/**
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
 */function lt(t){return JSON.parse(t)}function O(t){return JSON.stringify(t)}/**
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
 */const er=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=lt(kn(r[0])||""),n=lt(kn(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ql=function(t){const e=er(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zl=function(t){const e=er(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ae(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ve(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mt(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function An(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Vs(r)&&Vs(o)){if(!An(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Vs(t){return t!==null&&typeof t=="object"}/**
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
 */function Gl(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class jl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function tr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Yl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nn=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ce(t){return t&&t._delegate?t._delegate:t}class $e{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Kl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new es;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xl(e))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ce){return this.instances.has(e)}getOptions(e=Ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ql(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ce){return this.component?this.component.multipleInstances?e:Ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ql(t){return t===Ce?void 0:t}function Xl(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const Jl={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},ea=S.INFO,ta={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},na=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ta[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nr{constructor(e){this.name=e,this._logLevel=ea,this._logHandler=na,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const sa=(t,e)=>e.some(n=>t instanceof n);let $s,Ws;function ia(){return $s||($s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ra(){return Ws||(Ws=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sr=new WeakMap,xn=new WeakMap,ir=new WeakMap,_n=new WeakMap,ts=new WeakMap;function oa(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ue(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sr.set(n,t)}).catch(()=>{}),ts.set(e,t),e}function la(t){if(xn.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});xn.set(t,e)}let Pn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ir.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aa(t){Pn=t(Pn)}function ca(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gn(this),e,...n);return ir.set(s,e.sort?e.sort():[e]),ue(s)}:ra().includes(t)?function(...e){return t.apply(gn(this),e),ue(sr.get(this))}:function(...e){return ue(t.apply(gn(this),e))}}function ha(t){return typeof t=="function"?ca(t):(t instanceof IDBTransaction&&la(t),sa(t,ia())?new Proxy(t,Pn):t)}function ue(t){if(t instanceof IDBRequest)return oa(t);if(_n.has(t))return _n.get(t);const e=ha(t);return e!==t&&(_n.set(t,e),ts.set(e,t)),e}const gn=t=>ts.get(t);function ua(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=ue(o);return s&&o.addEventListener("upgradeneeded",a=>{s(ue(o.result),a.oldVersion,a.newVersion,ue(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const da=["get","getKey","getAll","getAllKeys","count"],fa=["put","add","delete","clear"],mn=new Map;function qs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mn.get(e))return mn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=fa.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||da.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return mn.set(e,r),r}aa(t=>({...t,get:(e,n,s)=>qs(e,n)||t.get(e,n,s),has:(e,n)=>!!qs(e,n)||t.has(e,n)}));/**
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
 */class pa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_a(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _a(t){const e=t.getComponent();return e?.type==="VERSION"}const Dn="@firebase/app",zs="0.9.25";/**
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
 */const Te=new nr("@firebase/app"),ga="@firebase/app-compat",ma="@firebase/analytics-compat",ya="@firebase/analytics",va="@firebase/app-check-compat",Ca="@firebase/app-check",Ea="@firebase/auth",wa="@firebase/auth-compat",ba="@firebase/database",Ia="@firebase/database-compat",Ta="@firebase/functions",Sa="@firebase/functions-compat",Na="@firebase/installations",Ra="@firebase/installations-compat",ka="@firebase/messaging",Aa="@firebase/messaging-compat",xa="@firebase/performance",Pa="@firebase/performance-compat",Da="@firebase/remote-config",Oa="@firebase/remote-config-compat",La="@firebase/storage",Ma="@firebase/storage-compat",Fa="@firebase/firestore",Ba="@firebase/firestore-compat",Ua="firebase",Ha="10.7.1";/**
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
 */const On="[DEFAULT]",Va={[Dn]:"fire-core",[ga]:"fire-core-compat",[ya]:"fire-analytics",[ma]:"fire-analytics-compat",[Ca]:"fire-app-check",[va]:"fire-app-check-compat",[Ea]:"fire-auth",[wa]:"fire-auth-compat",[ba]:"fire-rtdb",[Ia]:"fire-rtdb-compat",[Ta]:"fire-fn",[Sa]:"fire-fn-compat",[Na]:"fire-iid",[Ra]:"fire-iid-compat",[ka]:"fire-fcm",[Aa]:"fire-fcm-compat",[xa]:"fire-perf",[Pa]:"fire-perf-compat",[Da]:"fire-rc",[Oa]:"fire-rc-compat",[La]:"fire-gcs",[Ma]:"fire-gcs-compat",[Fa]:"fire-fst",[Ba]:"fire-fst-compat","fire-js":"fire-js",[Ua]:"fire-js-all"};/**
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
 */const Ft=new Map,Ln=new Map;function $a(t,e){try{t.container.addComponent(e)}catch(n){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function at(t){const e=t.name;if(Ln.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;Ln.set(e,t);for(const n of Ft.values())$a(n,t);return!0}function rr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Wa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new Ji("app","Firebase",Wa);/**
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
 */class qa{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}/**
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
 */const or=Ha;function ns(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:On,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw de.create("bad-app-name",{appName:String(i)});if(n||(n=Ki()),!n)throw de.create("no-options");const r=Ft.get(i);if(r){if(An(n,r.options)&&An(s,r.config))return r;throw de.create("duplicate-app",{appName:i})}const o=new Zl(i);for(const a of Ln.values())o.addComponent(a);const l=new qa(n,s,o);return Ft.set(i,l),l}function lr(t=On){const e=Ft.get(t);if(!e&&t===On&&Ki())return ns();if(!e)throw de.create("no-app",{appName:t});return e}function fe(t,e,n){var s;let i=(s=Va[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Te.warn(l.join(" "));return}at(new $e(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const za="firebase-heartbeat-database",Ga=1,ct="firebase-heartbeat-store";let yn=null;function ar(){return yn||(yn=ua(za,Ga,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ct)}}}).catch(t=>{throw de.create("idb-open",{originalErrorMessage:t.message})})),yn}async function ja(t){try{return await(await ar()).transaction(ct).objectStore(ct).get(cr(t))}catch(e){if(e instanceof je)Te.warn(e.message);else{const n=de.create("idb-get",{originalErrorMessage:e?.message});Te.warn(n.message)}}}async function Gs(t,e){try{const s=(await ar()).transaction(ct,"readwrite");await s.objectStore(ct).put(e,cr(t)),await s.done}catch(n){if(n instanceof je)Te.warn(n.message);else{const s=de.create("idb-set",{originalErrorMessage:n?.message});Te.warn(s.message)}}}function cr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ya=1024,Ka=30*24*60*60*1e3;class Qa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Za(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=js();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Ka}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=js(),{heartbeatsToSend:s,unsentEntries:i}=Xa(this._heartbeatsCache.heartbeats),r=Lt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function js(){return new Date().toISOString().substring(0,10)}function Xa(t,e=Ya){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ys(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ys(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Za{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ul()?Hl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ja(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ys(t){return Lt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ja(t){at(new $e("platform-logger",e=>new pa(e),"PRIVATE")),at(new $e("heartbeat",e=>new Qa(e),"PRIVATE")),fe(Dn,zs,t),fe(Dn,zs,"esm2017"),fe("fire-js","")}Ja("");/**
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
 */const hr="firebasestorage.googleapis.com",ur="storageBucket",ec=2*60*1e3,tc=10*60*1e3;/**
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
 */class H extends je{constructor(e,n,s=0){super(vn(e),`Firebase Storage: ${n} (${vn(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,H.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var U;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(U||(U={}));function vn(t){return"storage/"+t}function dr(){const t="An unknown error occurred, please check the error payload for server response.";return new H(U.UNKNOWN,t)}function nc(t){return new H(U.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function sc(t){return new H(U.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ic(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new H(U.UNAUTHENTICATED,t)}function rc(){return new H(U.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function oc(t){return new H(U.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function lc(){return new H(U.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ac(){return new H(U.CANCELED,"User canceled the upload/download.")}function cc(t){return new H(U.INVALID_URL,"Invalid URL '"+t+"'.")}function hc(t){return new H(U.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function uc(){return new H(U.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ur+"' property when initializing the app?")}function dc(){return new H(U.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Mn(t){return new H(U.INVALID_ARGUMENT,t)}function fr(){return new H(U.APP_DELETED,"The Firebase app was deleted.")}function fc(t){return new H(U.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qe(t){throw new H(U.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class X{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=X.makeFromUrl(e,n)}catch{return new X(e,"")}if(s.path==="")return s;throw hc(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function c(W){W.path_=decodeURIComponent(W.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},v=n===hr?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",G=new RegExp(`^https?://${v}/${i}/${w}`,"i"),Q=[{regex:l,indices:a,postModify:r},{regex:f,indices:g,postModify:c},{regex:G,indices:{bucket:1,path:2},postModify:c}];for(let W=0;W<Q.length;W++){const xe=Q[W],fn=xe.regex.exec(e);if(fn){const nl=fn[xe.indices.bucket];let pn=fn[xe.indices.path];pn||(pn=""),s=new X(nl,pn),xe.postModify(s);break}}if(s==null)throw cc(e);return s}}class pc{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function _c(t,e,n){let s=1,i=null,r=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,a())},w)}function d(){r&&clearTimeout(r)}function f(w,...G){if(c){d();return}if(w){d(),u.call(null,w,...G);return}if(a()||o){d(),u.call(null,w,...G);return}s<64&&(s*=2);let Q;l===1?(l=2,Q=0):Q=(s+Math.random())*1e3,h(Q)}let g=!1;function v(w){g||(g=!0,d(),!c&&(i!==null?(w||(l=2),clearTimeout(i),h(0)):w||(l=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function gc(t){t(!1)}/**
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
 */function mc(t){return t!==void 0}function yc(t){return typeof t=="object"&&!Array.isArray(t)}function pr(t){return typeof t=="string"||t instanceof String}function Ks(t,e,n,s){if(s<e)throw Mn(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Mn(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ss(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function _r(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function vc(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class Cc{constructor(e,n,s,i,r,o,l,a,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new kt(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===be.NO_ERROR,a=r.getStatus();if(!l||vc(a,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===be.ABORT;s(!1,new kt(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;s(!0,new kt(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());mc(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=dr();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?fr():ac();o(a)}else{const a=lc();o(a)}};this.canceled_?n(!1,new kt(!1,null,!0)):this.backoffId_=_c(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gc(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class kt{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ec(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wc(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bc(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ic(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Tc(t,e,n,s,i,r,o=!0){const l=_r(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return bc(c,e),Ec(c,n),wc(c,r),Ic(c,s),new Cc(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function gr(t){let e;try{e=JSON.parse(t)}catch{return null}return yc(e)?e:null}/**
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
 */function Sc(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Nc(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function mr(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Rc(t,e){return e}class q{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||Rc}}let At=null;function kc(t){return!pr(t)||t.length<2?t:mr(t)}function yr(){if(At)return At;const t=[];t.push(new q("bucket")),t.push(new q("generation")),t.push(new q("metageneration")),t.push(new q("name","fullPath",!0));function e(r,o){return kc(o)}const n=new q("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new q("size");return i.xform=s,t.push(i),t.push(new q("timeCreated")),t.push(new q("updated")),t.push(new q("md5Hash",null,!0)),t.push(new q("cacheControl",null,!0)),t.push(new q("contentDisposition",null,!0)),t.push(new q("contentEncoding",null,!0)),t.push(new q("contentLanguage",null,!0)),t.push(new q("contentType",null,!0)),t.push(new q("metadata","customMetadata",!0)),At=t,At}function Ac(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new X(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function xc(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return Ac(s,t),s}function vr(t,e,n){const s=gr(e);return s===null?null:xc(t,s,n)}function Pc(t,e,n,s){const i=gr(e);if(i===null||!pr(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=ss(d,n,s),g=_r({alt:"media",token:c});return f+g})[0]}class Cr{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Er(t){if(!t)throw dr()}function Dc(t,e){function n(s,i){const r=vr(t,i,e);return Er(r!==null),r}return n}function Oc(t,e){function n(s,i){const r=vr(t,i,e);return Er(r!==null),Pc(r,i,t.host,t._protocol)}return n}function Lc(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=rc():i=ic():n.getStatus()===402?i=sc(t.bucket):n.getStatus()===403?i=oc(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function wr(t){const e=Lc(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=nc(t.path)),r.serverResponse=i.serverResponse,r}return n}function Mc(t,e,n){const s=e.fullServerUrl(),i=ss(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,l=new Cr(i,r,Dc(t,n),o);return l.errorHandler=wr(e),l}function Fc(t,e,n){const s=e.fullServerUrl(),i=ss(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,l=new Cr(i,r,Oc(t,n),o);return l.errorHandler=wr(e),l}class Bc{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=be.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=be.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=be.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Qe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Uc extends Bc{initXhr(){this.xhr_.responseType="text"}}function br(){return new Uc}/**
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
 */class Se{constructor(e,n){this._service=e,n instanceof X?this._location=n:this._location=X.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Se(e,n)}get root(){const e=new X(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mr(this._location.path)}get storage(){return this._service}get parent(){const e=Sc(this._location.path);if(e===null)return null;const n=new X(this._location.bucket,e);return new Se(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fc(e)}}function Hc(t){t._throwIfRoot("getMetadata");const e=Mc(t.storage,t._location,yr());return t.storage.makeRequestWithTokens(e,br)}function Vc(t){t._throwIfRoot("getDownloadURL");const e=Fc(t.storage,t._location,yr());return t.storage.makeRequestWithTokens(e,br).then(n=>{if(n===null)throw dc();return n})}function $c(t,e){const n=Nc(t._location.path,e),s=new X(t._location.bucket,n);return new Se(t.storage,s)}/**
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
 */function Wc(t){return/^[A-Za-z]+:\/\//.test(t)}function qc(t,e){return new Se(t,e)}function Ir(t,e){if(t instanceof is){const n=t;if(n._bucket==null)throw uc();const s=new Se(n,n._bucket);return e!=null?Ir(s,e):s}else return e!==void 0?$c(t,e):t}function zc(t,e){if(e&&Wc(e)){if(t instanceof is)return qc(t,e);throw Mn("To use ref(service, url), the first argument must be a Storage instance.")}else return Ir(t,e)}function Qs(t,e){const n=e?.[ur];return n==null?null:X.makeFromBucketSpec(n,t)}function Gc(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Qi(i,t.app.options.projectId))}class is{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=hr,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ec,this._maxUploadRetryTime=tc,this._requests=new Set,i!=null?this._bucket=X.makeFromBucketSpec(i,this._host):this._bucket=Qs(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=X.makeFromBucketSpec(this._url,e):this._bucket=Qs(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ks("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ks("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Se(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new pc(fr());{const o=Tc(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Xs="@firebase/storage",Zs="0.12.0";/**
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
 */const Tr="storage";function jc(t){return t=ce(t),Hc(t)}function sn(t){return t=ce(t),Vc(t)}function ht(t,e){return t=ce(t),zc(t,e)}function Sr(t=lr(),e){t=ce(t);const s=rr(t,Tr).getImmediate({identifier:e}),i=Yi("storage");return i&&Yc(s,...i),s}function Yc(t,e,n,s={}){Gc(t,e,n,s)}function Kc(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new is(n,s,i,e,or)}function Qc(){at(new $e(Tr,Kc,"PUBLIC").setMultipleInstances(!0)),fe(Xs,Zs,""),fe(Xs,Zs,"esm2017")}Qc();var Xc="firebase",Zc="10.7.1";/**
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
 */fe(Xc,Zc,"app");const Js="@firebase/database",ei="1.0.2";/**
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
 */let Nr="";function Jc(t){Nr=t}/**
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
 */class eh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),O(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:lt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class th{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ae(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Rr=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eh(e)}}catch{}return new th},we=Rr("localStorage"),Fn=Rr("sessionStorage");/**
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
 */const Fe=new nr("@firebase/database"),nh=function(){let t=1;return function(){return t++}}(),kr=function(t){const e=Yl(t),n=new jl;n.update(e);const s=n.digest();return Jn.encodeByteArray(s)},Ct=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ct.apply(null,s):typeof s=="object"?e+=O(s):e+=s,e+=" "}return e};let Ie=null,ti=!0;const sh=function(t,e){p(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Fe.logLevel=S.VERBOSE,Ie=Fe.log.bind(Fe),e&&Fn.set("logging_enabled",!0)):typeof t=="function"?Ie=t:(Ie=null,Fn.remove("logging_enabled"))},$=function(...t){if(ti===!0&&(ti=!1,Ie===null&&Fn.get("logging_enabled")===!0&&sh(!0)),Ie){const e=Ct.apply(null,t);Ie(e)}},Et=function(t){return function(...e){$(t,...e)}},Bn=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ct(...t);Fe.error(e)},le=function(...t){const e=`FIREBASE FATAL ERROR: ${Ct(...t)}`;throw Fe.error(e),new Error(e)},Z=function(...t){const e="FIREBASE WARNING: "+Ct(...t);Fe.warn(e)},ih=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ar=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rh=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},We="[MIN_NAME]",Ne="[MAX_NAME]",Ye=function(t,e){if(t===e)return 0;if(t===We||e===Ne)return-1;if(e===We||t===Ne)return 1;{const n=ni(t),s=ni(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},oh=function(t,e){return t===e?0:t<e?-1:1},Xe=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+O(e))},rs=function(t){if(typeof t!="object"||t===null)return O(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=O(e[s]),n+=":",n+=rs(t[e[s]]);return n+="}",n},xr=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function K(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Pr=function(t){p(!Ar(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},lh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ah=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ch(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const hh=new RegExp("^-?(0*)\\d{1,10}$"),uh=-2147483648,dh=2147483647,ni=function(t){if(hh.test(t)){const e=Number(t);if(e>=uh&&e<=dh)return e}return null},wt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Z("Exception was thrown by user callback.",n),e},Math.floor(0))}},fh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},nt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ph{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _h{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Z(e)}}class Be{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Be.OWNER="owner";/**
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
 */const os="5",Dr="v",Or="s",Lr="r",Mr="f",Fr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Br="ls",Ur="p",Un="ac",Hr="websocket",Vr="long_polling";/**
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
 */class $r{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=we.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&we.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gh(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Wr(t,e,n){p(typeof e=="string","typeof type must == string"),p(typeof n=="object","typeof params must == object");let s;if(e===Hr)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vr)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gh(t)&&(n.ns=t.namespace);const i=[];return K(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class mh{constructor(){this.counters_={}}incrementCounter(e,n=1){ae(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Al(this.counters_)}}/**
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
 */const Cn={},En={};function ls(t){const e=t.toString();return Cn[e]||(Cn[e]=new mh),Cn[e]}function yh(t,e){const n=t.toString();return En[n]||(En[n]=e()),En[n]}/**
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
 */class vh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&wt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const si="start",Ch="close",Eh="pLPCommand",wh="pRTLPCB",qr="id",zr="pw",Gr="ser",bh="cb",Ih="seg",Th="ts",Sh="d",Nh="dframe",jr=1870,Yr=30,Rh=jr-Yr,kh=25e3,Ah=3e4;class Le{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Et(e),this.stats_=ls(n),this.urlFn=a=>(this.appCheckToken&&(a[Un]=this.appCheckToken),Wr(n,Vr,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ah)),rh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new as((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===si)this.id=l,this.password=a;else if(o===Ch)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[si]="t",s[Gr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[bh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Dr]=os,this.transportSessionId&&(s[Or]=this.transportSessionId),this.lastSessionId&&(s[Br]=this.lastSessionId),this.applicationId&&(s[Ur]=this.applicationId),this.appCheckToken&&(s[Un]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fr.test(location.hostname)&&(s[Lr]=Mr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return Le.forceAllow_?!0:!Le.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lh()&&!ah()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=O(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zi(n),i=xr(s,Rh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Nh]="t",s[qr]=e,s[zr]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=O(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class as{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nh(),window[Eh+this.uniqueCallbackIdentifier]=e,window[wh+this.uniqueCallbackIdentifier]=n,this.myIFrame=as.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){$("frame writing exception"),l.stack&&$(l.stack),$(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qr]=this.myID,e[zr]=this.myPW,e[Gr]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yr+s.length<=jr;){const o=this.pendingSegs.shift();s=s+"&"+Ih+i+"="+o.seg+"&"+Th+i+"="+o.ts+"&"+Sh+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(kh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{$("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const xh=16384,Ph=45e3;let Bt=null;typeof MozWebSocket<"u"?Bt=MozWebSocket:typeof WebSocket<"u"&&(Bt=WebSocket);class te{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Et(this.connId),this.stats_=ls(n),this.connURL=te.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Dr]=os,typeof location<"u"&&location.hostname&&Fr.test(location.hostname)&&(o[Lr]=Mr),n&&(o[Or]=n),s&&(o[Br]=s),i&&(o[Un]=i),r&&(o[Ur]=r),Wr(e,Hr,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,we.set("previous_websocket_failure",!0);try{let s;Zi(),this.mySock=new Bt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){te.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Bt!==null&&!te.forceDisallow_}static previouslyFailed(){return we.isInMemoryStorage||we.get("previous_websocket_failure")===!0}markConnectionHealthy(){we.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=lt(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=O(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xr(n,xh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ph))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}te.responsesRequiredToBeHealthy=2;te.healthyTimeout=3e4;/**
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
 */class ut{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,te]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=te&&te.isAvailable();let s=n&&!te.previouslyFailed();if(e.webSocketOnly&&(n||Z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[te];else{const i=this.transports_=[];for(const r of ut.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ut.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ut.globalTransportInitialized_=!1;/**
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
 */const Dh=6e4,Oh=5e3,Lh=10*1024,Mh=100*1024,wn="t",ii="d",Fh="s",ri="r",Bh="e",oi="o",li="a",ai="n",ci="p",Uh="h";class Hh{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Et("c:"+this.id+":"),this.transportManager_=new ut(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=nt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Mh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Lh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wn in e){const n=e[wn];n===li?this.upgradeIfSecondaryHealthy_():n===ri?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===oi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Xe("t",e),s=Xe("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ci,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:li,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ai,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Xe("t",e),s=Xe("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Xe(wn,e);if(ii in e){const s=e[ii];if(n===Uh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ai){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Fh?this.onConnectionShutdown_(s):n===ri?this.onReset_(s):n===Bh?Bn("Server Error: "+s):n===oi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bn("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),os!==s&&Z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),nt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Dh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):nt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Oh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ci,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(we.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Kr{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Qr{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ut extends Qr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ut}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const hi=32,ui=768;class T{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function I(){return new T("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ge(t){return t.pieces_.length-t.pieceNum_}function N(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new T(t.pieces_,e)}function Xr(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Vh(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jr(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new T(e,0)}function L(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof T)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new T(n,0)}function E(t){return t.pieceNum_>=t.pieces_.length}function z(t,e){const n=b(t),s=b(e);if(n===null)return e;if(n===s)return z(N(t),N(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function eo(t,e){if(ge(t)!==ge(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ne(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ge(t)>ge(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class $h{constructor(e,n){this.errorPrefix_=n,this.parts_=Zr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=nn(this.parts_[s]);to(this)}}function Wh(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nn(e),to(t)}function qh(t){const e=t.parts_.pop();t.byteLength_-=nn(e),t.parts_.length>0&&(t.byteLength_-=1)}function to(t){if(t.byteLength_>ui)throw new Error(t.errorPrefix_+"has a key path longer than "+ui+" bytes ("+t.byteLength_+").");if(t.parts_.length>hi)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hi+") or object contains a cycle "+Ee(t))}function Ee(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class cs extends Qr{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new cs}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ze=1e3,zh=60*5*1e3,di=30*1e3,Gh=1.3,jh=3e4,Yh="server_kill",fi=3;class oe extends Kr{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=oe.nextPersistentConnectionId_++,this.log_=Et("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ze,this.maxReconnectDelay_=zh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Zi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ut.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(O(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new es,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;oe.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ae(e,"w")){const s=Ve(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=di)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ql(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+O(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bn("Unrecognized action received from server: "+O(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ze,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ze,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jh&&(this.reconnectDelay_=Ze),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Gh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){p(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$("getToken() completed but was canceled"):($("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Hh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Z(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Yh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Z(h),a())}}}interrupt(e){$("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hs(this.interruptReasons_)&&(this.reconnectDelay_=Ze,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>rs(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new T(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){$("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fi&&(this.reconnectDelay_=di,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Nr.replace(/\./g,"-")]=1,Xi()?e["framework.cordova"]=1:Bl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ut.getInstance().currentlyOnline();return Hs(this.interruptReasons_)&&e}}oe.nextPersistentConnectionId_=0;oe.nextConnectionId_=0;/**
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
 */class C{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new C(e,n)}}/**
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
 */class rn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new C(We,e),i=new C(We,n);return this.compare(s,i)!==0}minPost(){return C.MIN}}/**
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
 */let xt;class no extends rn{static get __EMPTY_NODE(){return xt}static set __EMPTY_NODE(e){xt=e}compare(e,n){return Ye(e.name,n.name)}isDefinedOn(e){throw Ge("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return C.MIN}maxPost(){return new C(Ne,xt)}makePost(e,n){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new C(e,xt)}toString(){return".key"}}const Ue=new no;/**
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
 */class Pt{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class F{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??F.RED,this.left=i??j.EMPTY_NODE,this.right=r??j.EMPTY_NODE}copy(e,n,s,i,r){return new F(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return j.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return j.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}F.RED=!0;F.BLACK=!1;class Kh{copy(e,n,s,i,r){return this}insert(e,n,s){return new F(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class j{constructor(e,n=j.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new j(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,F.BLACK,null,null))}remove(e){return new j(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,F.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pt(this.root_,null,this.comparator_,!0,e)}}j.EMPTY_NODE=new Kh;/**
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
 */function Qh(t,e){return Ye(t.name,e.name)}function hs(t,e){return Ye(t,e)}/**
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
 */let Hn;function Xh(t){Hn=t}const so=function(t){return typeof t=="number"?"number:"+Pr(t):"string:"+t},io=function(t){if(t.isLeafNode()){const e=t.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ae(e,".sv"),"Priority must be a string or number.")}else p(t===Hn||t.isEmpty(),"priority of unexpected type.");p(t===Hn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let pi;class M{constructor(e,n=M.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),io(this.priorityNode_)}static set __childrenNodeConstructor(e){pi=e}static get __childrenNodeConstructor(){return pi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new M(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return E(e)?this:b(e)===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:M.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=b(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||ge(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,M.__childrenNodeConstructor.EMPTY_NODE.updateChild(N(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+so(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Pr(this.value_):e+=this.value_,this.lazyHash_=kr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===M.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof M.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=M.VALUE_TYPE_ORDER.indexOf(n),r=M.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+n),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}M.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ro,oo;function Zh(t){ro=t}function Jh(t){oo=t}class eu extends rn{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ye(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return C.MIN}maxPost(){return new C(Ne,new M("[PRIORITY-POST]",oo))}makePost(e,n){const s=ro(e);return new C(n,new M("[PRIORITY-POST]",s))}toString(){return".priority"}}const x=new eu;/**
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
 */const tu=Math.log(2);class nu{constructor(e){const n=r=>parseInt(Math.log(r)/tu,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ht=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new F(d,h.node,F.BLACK,null,null);{const f=parseInt(u/2,10)+a,g=i(a,f),v=i(f+1,c);return h=t[f],d=n?n(h):h,new F(d,h.node,F.BLACK,g,v)}},r=function(a){let c=null,u=null,h=t.length;const d=function(g,v){const w=h-g,G=h;h-=g;const ee=i(w+1,G),Q=t[w],W=n?n(Q):Q;f(new F(W,Q.node,v,null,ee))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(g+1));v?d(w,F.BLACK):(d(w,F.BLACK),d(w,F.RED))}return u},o=new nu(t.length),l=r(o);return new j(s||e,l)};/**
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
 */let bn;const Pe={};class re{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return p(Pe&&x,"ChildrenNode.ts has not been loaded"),bn=bn||new re({".priority":Pe},{".priority":x}),bn}get(e){const n=Ve(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof j?n:null}hasIndex(e){return ae(this.indexSet_,e.toString())}addIndex(e,n){p(e!==Ue,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(C.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ht(s,e.getCompare()):l=Pe;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new re(u,c)}addToIndexes(e,n){const s=Mt(this.indexes_,(i,r)=>{const o=Ve(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===Pe)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(C.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ht(l,o.getCompare())}else return Pe;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new C(e.name,l))),a.insert(e,e.node)}});return new re(s,this.indexSet_)}removeFromIndexes(e,n){const s=Mt(this.indexes_,i=>{if(i===Pe)return i;{const r=n.get(e.name);return r?i.remove(new C(e.name,r)):i}});return new re(s,this.indexSet_)}}/**
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
 */let Je;class m{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&io(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Je||(Je=new m(new j(hs),null,re.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Je}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Je:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(N(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(p(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new C(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Je:this.priorityNode_;return new m(i,o,r)}}updateChild(e,n){const s=b(e);if(s===null)return n;{p(b(e)!==".priority"||ge(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(N(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(x,(o,l)=>{n[o]=l.val(e),s++,r&&m.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+so(this.getPriority().val())+":"),this.forEachChild(x,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":kr(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new C(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new C(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new C(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,C.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,C.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bt?-1:0}withIndex(e){if(e===Ue||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ue||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(x),i=n.getIterator(x);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ue?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class su extends m{constructor(){super(new j(hs),m.EMPTY_NODE,re.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const bt=new su;Object.defineProperties(C,{MIN:{value:new C(We,m.EMPTY_NODE)},MAX:{value:new C(Ne,bt)}});no.__EMPTY_NODE=m.EMPTY_NODE;M.__childrenNodeConstructor=m;Xh(bt);Jh(bt);/**
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
 */const iu=!0;function V(t,e=null){if(t===null)return m.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new M(n,V(e))}if(!(t instanceof Array)&&iu){const n=[];let s=!1;if(K(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=V(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new C(o,a)))}}),n.length===0)return m.EMPTY_NODE;const r=Ht(n,Qh,o=>o.name,hs);if(s){const o=Ht(n,x.getCompare());return new m(r,V(e),new re({".priority":o},{".priority":x}))}else return new m(r,V(e),re.Default)}else{let n=m.EMPTY_NODE;return K(t,(s,i)=>{if(ae(t,s)&&s.substring(0,1)!=="."){const r=V(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(V(e))}}Zh(V);/**
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
 */class ru extends rn{constructor(e){super(),this.indexPath_=e,p(!E(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ye(e.name,n.name):r}makePost(e,n){const s=V(e),i=m.EMPTY_NODE.updateChild(this.indexPath_,s);return new C(n,i)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,bt);return new C(Ne,e)}toString(){return Zr(this.indexPath_,0).join("/")}}/**
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
 */class ou extends rn{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ye(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return C.MIN}maxPost(){return C.MAX}makePost(e,n){const s=V(e);return new C(n,s)}toString(){return".value"}}const lu=new ou;/**
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
 */function lo(t){return{type:"value",snapshotNode:t}}function qe(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function dt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ft(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function au(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class us{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(dt(n,l)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(qe(n,s)):o.trackChildChange(ft(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(x,(i,r)=>{n.hasChild(i)||s.trackChildChange(dt(i,r))}),n.isLeafNode()||n.forEachChild(x,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ft(i,r,o))}else s.trackChildChange(qe(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class pt{constructor(e){this.indexedFilter_=new us(e.getIndex()),this.index_=e.getIndex(),this.startPost_=pt.getStartPost_(e),this.endPost_=pt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new C(n,s))||(s=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=m.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(m.EMPTY_NODE);const r=this;return n.forEachChild(x,(o,l)=>{r.matches(new C(o,l))||(i=i.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class cu{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new pt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new C(n,s))||(s=m.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const l=e;p(l.numChildren()===this.limit_,"");const a=new C(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,a);if(u&&!s.isEmpty()&&f>=0)return r?.trackChildChange(ft(n,s,h)),l.updateImmediateChild(n,s);{r?.trackChildChange(dt(n,h));const v=l.updateImmediateChild(n,m.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r?.trackChildChange(qe(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(dt(c.name,c.node)),r.trackChildChange(qe(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
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
 */class ds{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=x}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:We}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ne}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===x}copy(){const e=new ds;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hu(t){return t.loadsAllData()?new us(t.getIndex()):t.hasLimit()?new cu(t):new pt(t)}function _i(t){const e={};if(t.isDefault())return e;let n;if(t.index_===x?n="$priority":t.index_===lu?n="$value":t.index_===Ue?n="$key":(p(t.index_ instanceof ru,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=O(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=O(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+O(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=O(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+O(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gi(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==x&&(e.i=t.index_.toString()),e}/**
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
 */class Vt extends Kr{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Et("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vt.getListenId_(e,s),l={};this.listens_[o]=l;const a=_i(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ve(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Vt.getListenId_(e,n);delete this.listens_[s]}get(e){const n=_i(e._queryParams),s=e._path.toString(),i=new es;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gl(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=lt(l.responseText)}catch{Z("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Z("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class uu{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function $t(){return{value:null,children:new Map}}function ao(t,e,n){if(E(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=b(e);t.children.has(s)||t.children.set(s,$t());const i=t.children.get(s);e=N(e),ao(i,e,n)}}function Vn(t,e,n){t.value!==null?n(e,t.value):du(t,(s,i)=>{const r=new T(e.toString()+"/"+s);Vn(i,r,n)})}function du(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class fu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&K(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const mi=10*1e3,pu=30*1e3,_u=5*60*1e3;class gu{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fu(e);const s=mi+(pu-mi)*Math.random();nt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;K(e,(i,r)=>{r>0&&ae(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),nt(this.reportStats_.bind(this),Math.floor(Math.random()*2*_u))}}/**
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
 */var se;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(se||(se={}));function co(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ps(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Wt{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=se.ACK_USER_WRITE,this.source=co()}operationForChild(e){if(E(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new T(e));return new Wt(I(),n,this.revert)}}else return p(b(this.path)===e,"operationForChild called for unrelated child."),new Wt(N(this.path),this.affectedTree,this.revert)}}/**
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
 */class _t{constructor(e,n){this.source=e,this.path=n,this.type=se.LISTEN_COMPLETE}operationForChild(e){return E(this.path)?new _t(this.source,I()):new _t(this.source,N(this.path))}}/**
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
 */class Re{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=se.OVERWRITE}operationForChild(e){return E(this.path)?new Re(this.source,I(),this.snap.getImmediateChild(e)):new Re(this.source,N(this.path),this.snap)}}/**
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
 */class gt{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=se.MERGE}operationForChild(e){if(E(this.path)){const n=this.children.subtree(new T(e));return n.isEmpty()?null:n.value?new Re(this.source,I(),n.value):new gt(this.source,I(),n)}else return p(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gt(this.source,N(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class me{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(E(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class mu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yu(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(au(o.childName,o.snapshotNode))}),et(t,i,"child_removed",e,s,n),et(t,i,"child_added",e,s,n),et(t,i,"child_moved",r,s,n),et(t,i,"child_changed",e,s,n),et(t,i,"value",e,s,n),i}function et(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Cu(t,l,a)),o.forEach(l=>{const a=vu(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function vu(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Cu(t,e,n){if(e.childName==null||n.childName==null)throw Ge("Should only compare child_ events.");const s=new C(e.childName,e.snapshotNode),i=new C(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function on(t,e){return{eventCache:t,serverCache:e}}function st(t,e,n,s){return on(new me(e,n,s),t.serverCache)}function ho(t,e,n,s){return on(t.eventCache,new me(e,n,s))}function qt(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ke(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let In;const Eu=()=>(In||(In=new j(oh)),In);class R{constructor(e,n=Eu()){this.value=e,this.children=n}static fromObject(e){let n=new R(null);return K(e,(s,i)=>{n=n.set(new T(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:I(),value:this.value};if(E(e))return null;{const s=b(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(N(e),n);return r!=null?{path:L(new T(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(E(e))return this;{const n=b(e),s=this.children.get(n);return s!==null?s.subtree(N(e)):new R(null)}}set(e,n){if(E(e))return new R(n,this.children);{const s=b(e),r=(this.children.get(s)||new R(null)).set(N(e),n),o=this.children.insert(s,r);return new R(this.value,o)}}remove(e){if(E(e))return this.children.isEmpty()?new R(null):new R(null,this.children);{const n=b(e),s=this.children.get(n);if(s){const i=s.remove(N(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new R(null):new R(this.value,r)}else return this}}get(e){if(E(e))return this.value;{const n=b(e),s=this.children.get(n);return s?s.get(N(e)):null}}setTree(e,n){if(E(e))return n;{const s=b(e),r=(this.children.get(s)||new R(null)).setTree(N(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new R(this.value,o)}}fold(e){return this.fold_(I(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(L(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,I(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(E(e))return null;{const r=b(e),o=this.children.get(r);return o?o.findOnPath_(N(e),L(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,I(),n)}foreachOnPath_(e,n,s){if(E(e))return this;{this.value&&s(n,this.value);const i=b(e),r=this.children.get(i);return r?r.foreachOnPath_(N(e),L(n,i),s):new R(null)}}foreach(e){this.foreach_(I(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(L(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ie{constructor(e){this.writeTree_=e}static empty(){return new ie(new R(null))}}function it(t,e,n){if(E(e))return new ie(new R(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=z(i,e);return r=r.updateChild(o,n),new ie(t.writeTree_.set(i,r))}else{const i=new R(n),r=t.writeTree_.setTree(e,i);return new ie(r)}}}function yi(t,e,n){let s=t;return K(n,(i,r)=>{s=it(s,L(e,i),r)}),s}function vi(t,e){if(E(e))return ie.empty();{const n=t.writeTree_.setTree(e,new R(null));return new ie(n)}}function $n(t,e){return Ae(t,e)!=null}function Ae(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(z(n.path,e)):null}function Ci(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(x,(s,i)=>{e.push(new C(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new C(s,i.value))}),e}function pe(t,e){if(E(e))return t;{const n=Ae(t,e);return n!=null?new ie(new R(n)):new ie(t.writeTree_.subtree(e))}}function Wn(t){return t.writeTree_.isEmpty()}function ze(t,e){return uo(I(),t.writeTree_,e)}function uo(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=uo(L(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(L(t,".priority"),s)),n}}/**
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
 */function ln(t,e){return go(e,t)}function wu(t,e,n,s,i){p(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=it(t.visibleWrites,e,n)),t.lastWriteId=s}function bu(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Iu(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);p(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Tu(l,s.path)?i=!1:ne(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Su(t),!0;if(s.snap)t.visibleWrites=vi(t.visibleWrites,s.path);else{const l=s.children;K(l,a=>{t.visibleWrites=vi(t.visibleWrites,L(s.path,a))})}return!0}else return!1}function Tu(t,e){if(t.snap)return ne(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ne(L(t.path,n),e))return!0;return!1}function Su(t){t.visibleWrites=fo(t.allWrites,Nu,I()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Nu(t){return t.visible}function fo(t,e,n){let s=ie.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ne(n,o)?(l=z(n,o),s=it(s,l,r.snap)):ne(o,n)&&(l=z(o,n),s=it(s,I(),r.snap.getChild(l)));else if(r.children){if(ne(n,o))l=z(n,o),s=yi(s,l,r.children);else if(ne(o,n))if(l=z(o,n),E(l))s=yi(s,I(),r.children);else{const a=Ve(r.children,b(l));if(a){const c=a.getChild(N(l));s=it(s,I(),c)}}}else throw Ge("WriteRecord should have .snap or .children")}}return s}function po(t,e,n,s,i){if(!s&&!i){const r=Ae(t.visibleWrites,e);if(r!=null)return r;{const o=pe(t.visibleWrites,e);if(Wn(o))return n;if(n==null&&!$n(o,I()))return null;{const l=n||m.EMPTY_NODE;return ze(o,l)}}}else{const r=pe(t.visibleWrites,e);if(!i&&Wn(r))return n;if(!i&&n==null&&!$n(r,I()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ne(c.path,e)||ne(e,c.path))},l=fo(t.allWrites,o,e),a=n||m.EMPTY_NODE;return ze(l,a)}}}function Ru(t,e,n){let s=m.EMPTY_NODE;const i=Ae(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(x,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=pe(t.visibleWrites,e);return n.forEachChild(x,(o,l)=>{const a=ze(pe(r,new T(o)),l);s=s.updateImmediateChild(o,a)}),Ci(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=pe(t.visibleWrites,e);return Ci(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ku(t,e,n,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=L(e,n);if($n(t.visibleWrites,r))return null;{const o=pe(t.visibleWrites,r);return Wn(o)?i.getChild(n):ze(o,i.getChild(n))}}function Au(t,e,n,s){const i=L(e,n),r=Ae(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=pe(t.visibleWrites,i);return ze(o,s.getNode().getImmediateChild(n))}else return null}function xu(t,e){return Ae(t.visibleWrites,e)}function Pu(t,e,n,s,i,r,o){let l;const a=pe(t.visibleWrites,e),c=Ae(a,I());if(c!=null)l=c;else if(n!=null)l=ze(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Du(){return{visibleWrites:ie.empty(),allWrites:[],lastWriteId:-1}}function zt(t,e,n,s){return po(t.writeTree,t.treePath,e,n,s)}function _s(t,e){return Ru(t.writeTree,t.treePath,e)}function Ei(t,e,n,s){return ku(t.writeTree,t.treePath,e,n,s)}function Gt(t,e){return xu(t.writeTree,L(t.treePath,e))}function Ou(t,e,n,s,i,r){return Pu(t.writeTree,t.treePath,e,n,s,i,r)}function gs(t,e,n){return Au(t.writeTree,t.treePath,e,n)}function _o(t,e){return go(L(t.treePath,e),t.writeTree)}function go(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Lu{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;p(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ft(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,dt(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,qe(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ft(s,e.snapshotNode,i.oldSnap));else throw Ge("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Mu{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const mo=new Mu;class ms{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new me(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gs(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ke(this.viewCache_),r=Ou(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Fu(t){return{filter:t}}function Bu(t,e){p(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Uu(t,e,n,s,i){const r=new Lu;let o,l;if(n.type===se.OVERWRITE){const c=n;c.source.fromUser?o=qn(t,e,c.path,c.snap,s,i,r):(p(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!E(c.path),o=jt(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===se.MERGE){const c=n;c.source.fromUser?o=Vu(t,e,c.path,c.children,s,i,r):(p(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=zn(t,e,c.path,c.children,s,i,l,r))}else if(n.type===se.ACK_USER_WRITE){const c=n;c.revert?o=qu(t,e,c.path,s,i,r):o=$u(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===se.LISTEN_COMPLETE)o=Wu(t,e,n.path,s,r);else throw Ge("Unknown operation type: "+n.type);const a=r.getChanges();return Hu(e,o,a),{viewCache:o,changes:a}}function Hu(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=qt(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(lo(qt(e)))}}function yo(t,e,n,s,i,r){const o=e.eventCache;if(Gt(s,n)!=null)return e;{let l,a;if(E(n))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ke(e),u=c instanceof m?c:m.EMPTY_NODE,h=_s(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=zt(s,ke(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=b(n);if(c===".priority"){p(ge(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ei(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=N(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Ei(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=gs(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return st(e,l,o.isFullyInitialized()||E(n),t.filter.filtersNodes())}}function jt(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(E(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),f,null)}else{const f=b(n);if(!a.isCompleteForPath(n)&&ge(n)>1)return e;const g=N(n),w=a.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?c=u.updatePriority(a.getNode(),w):c=u.updateChild(a.getNode(),f,w,g,mo,null)}const h=ho(e,c,a.isFullyInitialized()||E(n),u.filtersNodes()),d=new ms(i,h,r);return yo(t,h,n,i,d,l)}function qn(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new ms(i,e,r);if(E(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=st(e,c,!0,t.filter.filtersNodes());else{const h=b(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=st(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=N(n),f=l.getNode().getImmediateChild(h);let g;if(E(d))g=s;else{const v=u.getCompleteChild(h);v!=null?Xr(d)===".priority"&&v.getChild(Jr(d)).isEmpty()?g=v:g=v.updateChild(d,s):g=m.EMPTY_NODE}if(f.equals(g))a=e;else{const v=t.filter.updateChild(l.getNode(),h,g,d,u,o);a=st(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function wi(t,e){return t.eventCache.isCompleteForChild(e)}function Vu(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=L(n,a);wi(e,b(u))&&(l=qn(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=L(n,a);wi(e,b(u))||(l=qn(t,l,u,c,i,r,o))}),l}function bi(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function zn(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;E(n)?c=s:c=new R(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=bi(t,f,d);a=jt(t,a,new T(h),g,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),v=bi(t,g,d);a=jt(t,a,new T(h),v,i,r,o,l)}}),a}function $u(t,e,n,s,i,r,o){if(Gt(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(E(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return jt(t,e,n,a.getNode().getChild(n),i,r,l,o);if(E(n)){let c=new R(null);return a.getNode().forEachChild(Ue,(u,h)=>{c=c.set(new T(u),h)}),zn(t,e,n,c,i,r,l,o)}else return e}else{let c=new R(null);return s.foreach((u,h)=>{const d=L(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),zn(t,e,n,c,i,r,l,o)}}function Wu(t,e,n,s,i){const r=e.serverCache,o=ho(e,r.getNode(),r.isFullyInitialized()||E(n),r.isFiltered());return yo(t,o,n,s,mo,i)}function qu(t,e,n,s,i,r){let o;if(Gt(s,n)!=null)return e;{const l=new ms(s,e,i),a=e.eventCache.getNode();let c;if(E(n)||b(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zt(s,ke(e));else{const h=e.serverCache.getNode();p(h instanceof m,"serverChildren would be complete if leaf node"),u=_s(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=b(n);let h=gs(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,N(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,m.EMPTY_NODE,N(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zt(s,ke(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Gt(s,I())!=null,st(e,c,o,t.filter.filtersNodes())}}/**
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
 */class zu{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new us(s.getIndex()),r=hu(s);this.processor_=Fu(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,l.getNode(),null),u=new me(a,o.isFullyInitialized(),i.filtersNodes()),h=new me(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=on(h,u),this.eventGenerator_=new mu(this.query_)}get query(){return this.query_}}function Gu(t){return t.viewCache_.serverCache.getNode()}function ju(t){return qt(t.viewCache_)}function Yu(t,e){const n=ke(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!E(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function Ii(t){return t.eventRegistrations_.length===0}function Ku(t,e){t.eventRegistrations_.push(e)}function Ti(t,e,n){const s=[];if(n){p(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Si(t,e,n,s){e.type===se.MERGE&&e.source.queryId!==null&&(p(ke(t.viewCache_),"We should always have a full cache before handling merges"),p(qt(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Uu(t.processor_,i,e,n,s);return Bu(t.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,vo(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Qu(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(x,(r,o)=>{s.push(qe(r,o))}),n.isFullyInitialized()&&s.push(lo(n.getNode())),vo(t,s,n.getNode(),e)}function vo(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return yu(t.eventGenerator_,e,n,i)}/**
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
 */let Yt;class Co{constructor(){this.views=new Map}}function Xu(t){p(!Yt,"__referenceConstructor has already been defined"),Yt=t}function Zu(){return p(Yt,"Reference.ts has not been loaded"),Yt}function Ju(t){return t.views.size===0}function ys(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),Si(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Si(o,e,n,s));return r}}function Eo(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=zt(n,i?s:null),a=!1;l?a=!0:s instanceof m?(l=_s(n,s),a=!1):(l=m.EMPTY_NODE,a=!1);const c=on(new me(l,a,!1),new me(s,i,!1));return new zu(e,c)}return o}function ed(t,e,n,s,i,r){const o=Eo(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ku(o,n),Qu(o,n)}function td(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=ye(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ti(c,n,s)),Ii(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ti(a,n,s)),Ii(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!ye(t)&&r.push(new(Zu())(e._repo,e._path)),{removed:r,events:o}}function wo(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _e(t,e){let n=null;for(const s of t.views.values())n=n||Yu(s,e);return n}function bo(t,e){if(e._queryParams.loadsAllData())return an(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Io(t,e){return bo(t,e)!=null}function ye(t){return an(t)!=null}function an(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Kt;function nd(t){p(!Kt,"__referenceConstructor has already been defined"),Kt=t}function sd(){return p(Kt,"Reference.ts has not been loaded"),Kt}let id=1;class Ni{constructor(e){this.listenProvider_=e,this.syncPointTree_=new R(null),this.pendingWriteTree_=Du(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rd(t,e,n,s,i){return wu(t.pendingWriteTree_,e,n,s,i),i?Tt(t,new Re(co(),e,n)):[]}function Me(t,e,n=!1){const s=bu(t.pendingWriteTree_,e);if(Iu(t.pendingWriteTree_,e)){let r=new R(null);return s.snap!=null?r=r.set(I(),!0):K(s.children,o=>{r=r.set(new T(o),!0)}),Tt(t,new Wt(s.path,r,n))}else return[]}function It(t,e,n){return Tt(t,new Re(fs(),e,n))}function od(t,e,n){const s=R.fromObject(n);return Tt(t,new gt(fs(),e,s))}function ld(t,e){return Tt(t,new _t(fs(),e))}function ad(t,e,n){const s=vs(t,n);if(s){const i=Cs(s),r=i.path,o=i.queryId,l=z(r,e),a=new _t(ps(o),l);return Es(t,r,a)}else return[]}function To(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Io(o,e))){const a=td(o,e,n,s);Ju(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,f)=>ye(f));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=dd(d);for(let g=0;g<f.length;++g){const v=f[g],w=v.query,G=Ao(t,v);t.listenProvider_.startListening(rt(w),mt(t,w),G.hashFn,G.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(rt(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(cn(d));t.listenProvider_.stopListening(rt(d),f)}))}fd(t,c)}return l}function So(t,e,n,s){const i=vs(t,s);if(i!=null){const r=Cs(i),o=r.path,l=r.queryId,a=z(o,e),c=new Re(ps(l),a,n);return Es(t,o,c)}else return[]}function cd(t,e,n,s){const i=vs(t,s);if(i){const r=Cs(i),o=r.path,l=r.queryId,a=z(o,e),c=R.fromObject(n),u=new gt(ps(l),a,c);return Es(t,o,u)}else return[]}function hd(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const g=z(d,i);r=r||_e(f,g),o=o||ye(f)});let l=t.syncPointTree_.get(i);l?(o=o||ye(l),r=r||_e(l,I())):(l=new Co,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=m.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,g)=>{const v=_e(g,I());v&&(r=r.updateImmediateChild(f,v))}));const c=Io(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=cn(e);p(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=pd();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=ln(t.pendingWriteTree_,i);let h=ed(l,e,n,u,r,a);if(!c&&!o&&!s){const d=bo(l,e);h=h.concat(_d(t,e,d))}return h}function No(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=z(o,e),c=_e(l,a);if(c)return c});return po(i,e,r,n,!0)}function ud(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=z(c,n);s=s||_e(u,h)});let i=t.syncPointTree_.get(n);i?s=s||_e(i,I()):(i=new Co,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new me(s,!0,!1):null,l=ln(t.pendingWriteTree_,e._path),a=Eo(i,e,l,r?o.getNode():m.EMPTY_NODE,r);return ju(a)}function Tt(t,e){return Ro(e,t.syncPointTree_,null,ln(t.pendingWriteTree_,I()))}function Ro(t,e,n,s){if(E(t.path))return ko(t,e,n,s);{const i=e.get(I());n==null&&i!=null&&(n=_e(i,I()));let r=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=_o(s,o);r=r.concat(Ro(l,a,c,u))}return i&&(r=r.concat(ys(i,t,s,n))),r}}function ko(t,e,n,s){const i=e.get(I());n==null&&i!=null&&(n=_e(i,I()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=_o(s,o),u=t.operationForChild(o);u&&(r=r.concat(ko(u,l,a,c)))}),i&&(r=r.concat(ys(i,t,s,n))),r}function Ao(t,e){const n=e.query,s=mt(t,n);return{hashFn:()=>(Gu(e)||m.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?ad(t,n._path,s):ld(t,n._path);{const r=ch(i,n);return To(t,n,null,r)}}}}function mt(t,e){const n=cn(e);return t.queryToTagMap.get(n)}function cn(t){return t._path.toString()+"$"+t._queryIdentifier}function vs(t,e){return t.tagToQueryMap.get(e)}function Cs(t){const e=t.indexOf("$");return p(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new T(t.substr(0,e))}}function Es(t,e,n){const s=t.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=ln(t.pendingWriteTree_,e);return ys(s,n,i,null)}function dd(t){return t.fold((e,n,s)=>{if(n&&ye(n))return[an(n)];{let i=[];return n&&(i=wo(n)),K(s,(r,o)=>{i=i.concat(o)}),i}})}function rt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sd())(t._repo,t._path):t}function fd(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=cn(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function pd(){return id++}function _d(t,e,n){const s=e._path,i=mt(t,e),r=Ao(t,n),o=t.listenProvider_.startListening(rt(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)p(!ye(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!E(c)&&u&&ye(u))return[an(u).query];{let d=[];return u&&(d=d.concat(wo(u).map(f=>f.query))),K(h,(f,g)=>{d=d.concat(g)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(rt(u),mt(t,u))}}return o}/**
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
 */class ws{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ws(n)}node(){return this.node_}}class bs{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=L(this.path_,e);return new bs(this.syncTree_,n)}node(){return No(this.syncTree_,this.path_)}}const gd=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ri=function(t,e,n){if(!t||typeof t!="object")return t;if(p(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return md(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yd(t[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},md=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:p(!1,"Unexpected server value: "+t)}},yd=function(t,e,n){t.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},vd=function(t,e,n,s){return Is(e,new bs(n,t),s)},Cd=function(t,e,n){return Is(t,new ws(e),n)};function Is(t,e,n){const s=t.getPriority().val(),i=Ri(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ri(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new M(l,V(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new M(i))),o.forEachChild(x,(l,a)=>{const c=Is(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Ts{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ss(t,e){let n=e instanceof T?e:new T(e),s=t,i=b(n);for(;i!==null;){const r=Ve(s.node.children,i)||{children:{},childCount:0};s=new Ts(i,s,r),n=N(n),i=b(n)}return s}function Ke(t){return t.node.value}function xo(t,e){t.node.value=e,Gn(t)}function Po(t){return t.node.childCount>0}function Ed(t){return Ke(t)===void 0&&!Po(t)}function hn(t,e){K(t.node.children,(n,s)=>{e(new Ts(n,t,s))})}function Do(t,e,n,s){n&&!s&&e(t),hn(t,i=>{Do(i,e,!0,s)}),n&&s&&e(t)}function wd(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function St(t){return new T(t.parent===null?t.name:St(t.parent)+"/"+t.name)}function Gn(t){t.parent!==null&&bd(t.parent,t.name,t)}function bd(t,e,n){const s=Ed(n),i=ae(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Gn(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gn(t))}/**
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
 */const Id=/[\[\].#$\/\u0000-\u001F\u007F]/,Td=/[\[\].#$\u0000-\u001F\u007F]/,Tn=10*1024*1024,Oo=function(t){return typeof t=="string"&&t.length!==0&&!Id.test(t)},Lo=function(t){return typeof t=="string"&&t.length!==0&&!Td.test(t)},Sd=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Lo(t)},Mo=function(t,e,n){const s=n instanceof T?new $h(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ee(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ee(s)+" with contents = "+e.toString());if(Ar(e))throw new Error(t+"contains "+e.toString()+" "+Ee(s));if(typeof e=="string"&&e.length>Tn/3&&nn(e)>Tn)throw new Error(t+"contains a string greater than "+Tn+" utf8 bytes "+Ee(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(K(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Oo(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ee(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Wh(s,o),Mo(t,l,s),qh(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ee(s)+" in addition to actual children.")}},Fo=function(t,e,n,s){if(!(s&&n===void 0)&&!Lo(n))throw new Error(tr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nd=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fo(t,e,n,s)},Rd=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Oo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Sd(n))throw new Error(tr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class kd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ad(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!eo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ve(t,e,n){Ad(t,n),xd(t,s=>ne(s,e)||ne(e,s))}function xd(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Pd(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Pd(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ie&&$("event: "+n.toString()),wt(s)}}}/**
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
 */const Dd="repo_interrupt",Od=25;class Ld{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$t(),this.transactionQueueTree_=new Ts,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Md(t,e,n){if(t.stats_=ls(t.repoInfo_),t.forceRestClient_||fh())t.server_=new Vt(t.repoInfo_,(s,i,r,o)=>{ki(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ai(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{O(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new oe(t.repoInfo_,e,(s,i,r,o)=>{ki(t,s,i,r,o)},s=>{Ai(t,s)},s=>{Bd(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=yh(t.repoInfo_,()=>new gu(t.stats_,t.server_)),t.infoData_=new uu,t.infoSyncTree_=new Ni({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=It(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ns(t,"connected",!1),t.serverSyncTree_=new Ni({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ve(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Fd(t){const n=t.infoData_.getNode(new T(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Bo(t){return gd({timestamp:Fd(t)})}function ki(t,e,n,s,i){t.dataUpdateCount++;const r=new T(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Mt(n,c=>V(c));o=cd(t.serverSyncTree_,r,a,i)}else{const a=V(n);o=So(t.serverSyncTree_,r,a,i)}else if(s){const a=Mt(n,c=>V(c));o=od(t.serverSyncTree_,r,a)}else{const a=V(n);o=It(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=As(t,r)),ve(t.eventQueue_,l,o)}function Ai(t,e){Ns(t,"connected",e),e===!1&&Vd(t)}function Bd(t,e){K(e,(n,s)=>{Ns(t,n,s)})}function Ns(t,e,n){const s=new T("/.info/"+e),i=V(n);t.infoData_.updateSnapshot(s,i);const r=It(t.infoSyncTree_,s,i);ve(t.eventQueue_,s,r)}function Ud(t){return t.nextWriteId_++}function Hd(t,e,n){const s=ud(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=V(i).withIndex(e._queryParams.getIndex());hd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=It(t.serverSyncTree_,e._path,r);else{const l=mt(t.serverSyncTree_,e);o=So(t.serverSyncTree_,e._path,r,l)}return ve(t.eventQueue_,e._path,o),To(t.serverSyncTree_,e,n,null,!0),r},i=>(Rs(t,"get for query "+O(e)+" failed: "+i),Promise.reject(new Error(i))))}function Vd(t){Rs(t,"onDisconnectEvents");const e=Bo(t),n=$t();Vn(t.onDisconnect_,I(),(i,r)=>{const o=vd(i,r,t.serverSyncTree_,e);ao(n,i,o)});let s=[];Vn(n,I(),(i,r)=>{s=s.concat(It(t.serverSyncTree_,i,r));const o=zd(t,i);As(t,o)}),t.onDisconnect_=$t(),ve(t.eventQueue_,I(),s)}function $d(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Dd)}function Rs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$(n,...e)}function Uo(t,e,n){return No(t.serverSyncTree_,e,n)||m.EMPTY_NODE}function ks(t,e=t.transactionQueueTree_){if(e||un(t,e),Ke(e)){const n=Vo(t,e);p(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Wd(t,St(e),n)}else Po(e)&&hn(e,n=>{ks(t,n)})}function Wd(t,e,n){const s=n.map(c=>c.currentWriteId),i=Uo(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=z(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Rs(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Me(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();un(t,Ss(t.transactionQueueTree_,e)),ks(t,t.transactionQueueTree_),ve(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)wt(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Z("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}As(t,e)}},o)}function As(t,e){const n=Ho(t,e),s=St(n),i=Vo(t,n);return qd(t,i,s),s}function qd(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=z(n,a.path);let u=!1,h;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Me(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Od)u=!0,h="maxretry",i=i.concat(Me(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Uo(t,a.path,o);a.currentInputSnapshot=d;const f=e[l].update(d.val());if(f!==void 0){Mo("transaction failed: Data returned ",f,a.path);let g=V(f);typeof f=="object"&&f!=null&&ae(f,".priority")||(g=g.updatePriority(d.getPriority()));const w=a.currentWriteId,G=Bo(t),ee=Cd(g,d,G);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=ee,a.currentWriteId=Ud(t),o.splice(o.indexOf(w),1),i=i.concat(rd(t.serverSyncTree_,a.path,ee,a.currentWriteId,a.applyLocally)),i=i.concat(Me(t.serverSyncTree_,w,!0))}else u=!0,h="nodata",i=i.concat(Me(t.serverSyncTree_,a.currentWriteId,!0))}ve(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}un(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)wt(s[l]);ks(t,t.transactionQueueTree_)}function Ho(t,e){let n,s=t.transactionQueueTree_;for(n=b(e);n!==null&&Ke(s)===void 0;)s=Ss(s,n),e=N(e),n=b(e);return s}function Vo(t,e){const n=[];return $o(t,e,n),n.sort((s,i)=>s.order-i.order),n}function $o(t,e,n){const s=Ke(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);hn(e,i=>{$o(t,i,n)})}function un(t,e){const n=Ke(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xo(e,n.length>0?n:void 0)}hn(e,s=>{un(t,s)})}function zd(t,e){const n=St(Ho(t,e)),s=Ss(t.transactionQueueTree_,e);return wd(s,i=>{Sn(t,i)}),Sn(t,s),Do(s,i=>{Sn(t,i)}),n}function Sn(t,e){const n=Ke(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(p(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Me(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xo(e,void 0):n.length=r+1,ve(t.eventQueue_,St(e),i);for(let o=0;o<s.length;o++)wt(s[o])}}/**
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
 */function Gd(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jd(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Z(`Invalid query segment '${n}' in query '${t}'`)}return e}const xi=function(t,e){const n=Yd(t),s=n.namespace;n.domain==="firebase.com"&&le(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&le("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ih();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $r(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new T(n.pathString)}},Yd=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Gd(t.substring(u,h)));const d=jd(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Kd{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+O(this.snapshot.exportVal())}}class Qd{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Xd{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xs{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return E(this._path)?null:Xr(this._path)}get ref(){return new he(this._repo,this._path)}get _queryIdentifier(){const e=gi(this._queryParams),n=rs(e);return n==="{}"?"default":n}get _queryObject(){return gi(this._queryParams)}isEqual(e){if(e=ce(e),!(e instanceof xs))return!1;const n=this._repo===e._repo,s=eo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vh(this._path)}}class he extends xs{constructor(e,n){super(e,n,new ds,!1)}get parent(){const e=Jr(this._path);return e===null?null:new he(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yt{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new T(e),s=jn(this.ref,e);return new yt(this._node.getChild(n),s,x)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new yt(i,jn(this.ref,s),x)))}hasChild(e){const n=new T(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wo(t,e){return t=ce(t),t._checkNotDeleted("ref"),e!==void 0?jn(t._root,e):t._root}function jn(t,e){return t=ce(t),b(t._path)===null?Nd("child","path",e,!1):Fo("child","path",e,!1),new he(t._repo,L(t._path,e))}function Ps(t){t=ce(t);const e=new Xd(()=>{}),n=new Ds(e);return Hd(t._repo,t,n).then(s=>new yt(s,new he(t._repo,t._path),t._queryParams.getIndex()))}class Ds{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Kd("value",this,new yt(e.snapshotNode,new he(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qd(this,e,n):null}matches(e){return e instanceof Ds?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Xu(he);nd(he);/**
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
 */const Zd="FIREBASE_DATABASE_EMULATOR_HOST",Yn={};let Jd=!1;function ef(t,e,n,s){t.repoInfo_=new $r(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function tf(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||le("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xi(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Zd]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=xi(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Be(Be.OWNER):new _h(t.name,t.options,e);Rd("Invalid Firebase Database URL",o),E(o.path)||le("Database URL must point to the root of a Firebase Database (not including a child path).");const h=sf(l,t,u,new ph(t.name,n));return new rf(h,t)}function nf(t,e){const n=Yn[e];(!n||n[t.key]!==t)&&le(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$d(t),delete n[t.key]}function sf(t,e,n,s){let i=Yn[e.name];i||(i={},Yn[e.name]=i);let r=i[t.toURLString()];return r&&le("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ld(t,Jd,n,s),i[t.toURLString()]=r,r}class rf{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Md(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new he(this._repo,I())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&le("Cannot call "+e+" on a deleted database.")}}function qo(t=lr(),e){const n=rr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Yi("database");s&&of(n,...s)}return n}function of(t,e,n,s={}){t=ce(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&le("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&le('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Be(Be.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Qi(s.mockUserToken,t.app.options.projectId);r=new Be(o)}ef(i,e,n,r)}/**
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
 */function lf(t){Jc(or),at(new $e("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return tf(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),fe(Js,ei,t),fe(Js,ei,"esm2017")}oe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};oe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};lf();const af=Bi(),zo={apiKey:"AIzaSyD8y05o67CNIYc0kNPVQtsz4p58S1QyRXA",authDomain:"borufi-4610a.firebaseapp.com",databaseURL:"https://borufi-4610a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"borufi-4610a",storageBucket:"borufi-4610a.appspot.com",messagingSenderId:"13483024769",appId:"1:13483024769:web:4875c275b2f726b36d8880",measurementId:"G-XZNVBP7S41"},cf=Fi(async(t,e,n)=>{const s=t.createAstro(af,e,n);return s.self=cf,$i``},"E:/borufi/src/firebaseConfig.astro",void 0),Go=ns(zo),hf=qo(Go),jo=Sr(Go),Yo=Wo(hf,"songData"),uf=await Ps(Yo),Qt=uf.val(),Pi=document.getElementById("playlistsList"),df=async()=>{Qt.forEach(()=>{Pi&&(Pi.innerHTML+=`
			<div class="link-card">
				<div class="song">
    				<div class="imgPlay">
					<img loading="eager" src="" width="250px" height="250px" />
					<button class="playButton no-animation">
						<!-- <svg viewBox="0 0 384 512" height="32px" width="32px" fill="white"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg> -->
						<!-- <svg viewBox="0 0 320 512" height="32px" width="32px" fill="white"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path></svg> -->
						<svg viewBox="0 0 448 512" height="32px" width="32px" fill="white"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
						<svg viewBox="0 0 448 512" height="32px" width="32px" fill="white"><path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>
					</button>
    				</div>
    				<div class="info">
						<h2></h2>
						<p></p>
    				</div>
				</div>
			</div>`)})};await df();const Os=document.querySelectorAll(".playButton"),ff=document.querySelectorAll(".link-card");Os.forEach(t=>{t.firstElementChild&&t.lastElementChild&&(t.firstElementChild.style.display="block",t.lastElementChild.style.display="none")});ff.forEach(t=>{const e=t.querySelector(".playButton");t.addEventListener("mouseover",()=>{e?.classList.remove("no-animation")})});let pf=document.querySelectorAll(".imgPlay img"),_f=document.querySelectorAll(".info h2"),gf=document.querySelectorAll(".info p");try{const e=(await Ps(Yo)).val();e?Object.keys(e).forEach((n,s)=>{const i=ht(jo,"covers/"+e[s].img);(async()=>{let r=Date.now();const o=await sn(i);console.log(Date.now()-r+" ms"),pf[s].src=o,_f[s].innerHTML=e[s].title,gf[s].innerHTML=e[s].author})()}):console.log("No data available")}catch(t){console.error("Error fetching data:",t)}const He=document.getElementById("audio"),mf=document.getElementById("title"),yf=document.getElementById("artist"),vf=()=>{Os.forEach(t=>{t.firstElementChild.style.display="block",t.lastElementChild.style.display="none";const e=t.parentElement?.parentElement?.parentElement;e&&e.classList.remove("active")})},Cf=async t=>{if(t!==He.src){const e=ht(jo,"songs/"+t),n=await sn(e);He.src=n,mf.innerHTML=Qt[_.currentPlaylist].songs[_.currentSong].title,yf.innerHTML=Qt[_.currentPlaylist].songs[_.currentSong].artist,_.audioSource=t,He.play()}};let Ef=document.querySelectorAll(".song");Os.forEach((t,e)=>{t.addEventListener("click",n=>{_.currentPlaylist!=e?(vf(),Ef[e].parentElement.classList.add("active"),_.currentPlaylist=e,_.currentSong=0,Cf(Qt[_.currentPlaylist].songs[_.currentSong].source),t.firstElementChild.style.display="none",t.lastElementChild.style.display="block"):He.paused?(t.firstElementChild.style.display="none",t.lastElementChild.style.display="block",He.play()):(t.firstElementChild.style.display="block",t.lastElementChild.style.display="none",He.pause()),n.stopPropagation()})});let vt=document.getElementById("play"),Xt=document.getElementById("current-time"),P=document.getElementById("seek-slider"),Kn=document.getElementById("duration"),B=document.getElementById("audio"),Qn=document.getElementById("mute");document.getElementById("volume");let A=document.getElementById("volume-slider");P.disabled=!0;vt.disabled=!0;const Ko=(t=!1)=>{const e=vt.firstElementChild,n=vt.lastElementChild;t?(e.style.display="block",n.style.display="none"):(e.style.display="none",n.style.display="block")},wf=()=>{let t=document.querySelectorAll(".singleSongButton"),e=document.getElementById("playPlaylist")?.lastElementChild,n=document.querySelectorAll(".playButton");B.paused?(B.play(),n.forEach(s=>{s.firstElementChild.style.display="none",s.lastElementChild.style.display="block"}),n[_.currentPlaylist].firstElementChild.style.display="none",n[_.currentPlaylist].lastElementChild.style.display="block",_.currentPlaylist==_.openedPlaylist&&(t[_.currentSong].lastElementChild.style.display="block",t[_.currentSong].firstElementChild.style.display="none",e.firstElementChild.style.display="none",e.lastElementChild.style.display="block")):(B.pause(),n.forEach(s=>{s.firstElementChild.style.display="block",s.lastElementChild.style.display="none"}),n[_.currentPlaylist].firstElementChild.style.display="block",n[_.currentPlaylist].lastElementChild.style.display="none",_.currentPlaylist==_.openedPlaylist&&(t[_.currentSong].lastElementChild.style.display="none",t[_.currentSong].firstElementChild.style.display="block",e.firstElementChild.style.display="block",e.lastElementChild.style.display="none"))};B.addEventListener("play",()=>{Ko()});B.addEventListener("pause",()=>{Ko(!0)});vt.addEventListener("click",()=>{wf()});const Qo=(t,e=0)=>{Xt&&(Xt.innerHTML=Xn(t)),Kn&&e!==0&&(Kn.innerHTML=Xn(e)),P.value="0"},Xn=t=>{const e=Math.floor(t/60),n=Math.floor(t%60);return n<10?`${e}:0${n}`:n>=10?`${e}:${n}`:"0:00"};A.style.setProperty("--volume-before-width",`${Number(A.value)/Number(A.max)*100}%`);B.volume=Number(A.value)/200;const Xo=()=>{B.volume=Number(A.value)/200};let Ot=!0,Oe=50;Qn?.addEventListener("click",()=>{if(A.value=="0"&&Oe==0)return;const[t,e,n,s]=Qn?.children;Ot?(Oe=parseInt(A.value),A.value="0",t.style.display="none",e.style.display="none",n.style.display="none",s.style.display="block"):(A.value=Oe.toString(),Oe>65?(t.style.display="block",e.style.display="none",n.style.display="none",s.style.display="none"):Oe>35?(t.style.display="none",e.style.display="block",n.style.display="none",s.style.display="none"):(t.style.display="none",e.style.display="none",n.style.display="block",s.style.display="none")),A.style.setProperty("--volume-before-width",`${Number(A.value)/Number(A.max)*100}%`),Xo(),Ot=!Ot});A.addEventListener("input",()=>{B.volume=Number(A.value)/200;const[t,e,n,s]=Qn?.children;Number(A.value)>65?(t.style.display="block",e.style.display="none",n.style.display="none",s.style.display="none"):Number(A.value)>35?(t.style.display="none",e.style.display="block",n.style.display="none",s.style.display="none"):Number(A.value)>0?(t.style.display="none",e.style.display="none",n.style.display="block",s.style.display="none"):(t.style.display="none",e.style.display="none",n.style.display="none",s.style.display="block"),A.style.setProperty("--volume-before-width",`${Number(A.value)/Number(A.max)*100}%`),Ot=!0});A?.addEventListener("change",()=>{Oe=Number(A.value),Xo()});let Zt=0;P?.addEventListener("input",()=>{B&&Xt&&(Zt=Number(P.value),P.style.setProperty("--seek-before-width",`${Number(P.value)/Number(P.max)*100}%`),Xt.innerHTML=Xn(Zt))});P?.addEventListener("change",()=>{B.currentTime=B.duration*(Number(P.value)/Number(P.max)),P.style.setProperty("--seek-before-width",`${Number(P.value)/Number(P.max)*100}%`),Zt=0});setInterval(()=>{Kn&&Zt==0&&(Qo(B.currentTime),P.value=B.currentTime.toString(),P.style.setProperty("--seek-before-width",`${Number(P.value)/Number(P.max)*100}%`),isNaN(Number(P.max))?P.max="0":P.max=Math.floor(B.duration).toString())},1e3);B?.addEventListener("loadedmetadata",()=>{Qo(B.currentTime,B.duration),vt.removeAttribute("disabled"),P.removeAttribute("disabled")});let Di=document.getElementById("random"),Oi=document.getElementById("loop");Oi?.addEventListener("click",()=>{Oi?.classList.toggle("on"),_.isLooping=!_.isLooping,B.loop=_.isLooping});Di?.addEventListener("click",()=>{Di?.classList.toggle("on"),_.isShuffling=!_.isShuffling});const Zo=ns(zo),Zn=Sr(Zo),bf=qo(Zo),If=Wo(bf,"songData"),Tf=await Ps(If),k=Tf.val();let Sf=document.getElementById("backButton"),Jo=document.querySelectorAll(".song"),Nf=document.getElementById("cover"),Rf=document.getElementById("playlistTitle"),kf=document.getElementById("author"),Nt=document.getElementById("title"),Rt=document.getElementById("artist"),Af=document.getElementById("playlistLength"),ot=document.getElementById("songs"),Ls=document.getElementById("playlistMain"),el=document.getElementById("main"),Y=document.getElementById("playPlaylist")?.lastElementChild,J=document.getElementById("audio"),xf=document.getElementById("playNext"),Pf=document.getElementById("playPrevious"),De=document.querySelectorAll(".playButton");const dn=async t=>{_.audioSource=t;const e=ht(Zn,"songs/"+t),n=await sn(e);if(J.src=n,D==_.currentPlaylist&&(Y.firstElementChild.style.display="none",Y.lastElementChild.style.display="block"),J.play(),ot.querySelectorAll("tr").forEach(i=>{let r=i.children[1]?.firstElementChild?.firstElementChild?.lastElementChild;i.classList.remove("playing"),r.style.fill="white"}),D==_.currentPlaylist){ot.children[y].classList.add("playing");let i=ot.children[y].children[1]?.firstElementChild?.firstElementChild?.lastElementChild;i.style.fill="url(#gradient)"}};Y.lastElementChild.style.display="none";let D=0,y=NaN;Sf?.addEventListener("click",()=>{Ls.style.display="none",el.style.display="flex";let t=document.querySelectorAll(".song");t.forEach(e=>{e.parentElement.classList.remove("active")}),_.currentPlaylist&&t[_.currentPlaylist].parentElement.classList.add("active"),Jo.forEach((e,n)=>{if(n!=_.currentPlaylist)De[n].firstElementChild.style.display="block",De[n].lastElementChild.style.display="none";else{let s=document.querySelectorAll(".singleSongButton");J.paused?(De[n].firstElementChild.style.display="block",De[n].lastElementChild.style.display="none",s[y].firstElementChild.style.display="block",s[y].lastElementChild.style.display="none"):(De[n].firstElementChild.style.display="none",De[n].lastElementChild.style.display="block",s[y].firstElementChild.style.display="none",s[y].lastElementChild.style.display="block")}})});function Li(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n<10?"0":""}${n}`}async function Df(){let t=Date.now(),e=0;const n=ht(Zn,"covers/"+k[D].img),s=await sn(n);y!=_.currentSong&&(y=_.currentSong),Nf.src=s;const i=document.createElement("canvas"),r=i.getContext("2d"),o=new Image;o.crossOrigin="anonymous",o.src=s,o.onload=()=>{i.width=o.width,i.height=o.height,r.drawImage(o,0,0);const h=r.getImageData(0,0,i.width,i.height).data,d=h[0],f=h[1],g=h[2],v=`linear-gradient(rgba(${d}, ${f}, ${g}, 0.5), rgba(${d}, ${f}, ${g}, 0.5))`;Ls.style.backgroundImage=v},Rf.textContent=k[D].title,kf.textContent=k[D].author;var l=ot.querySelectorAll("tr");l.forEach(h=>{h.remove()});let a;const c=k[D].songs.map(async h=>{const d=ht(Zn,"songs/"+h.source);return jc(d).then(f=>f.customMetadata?.duration||"").catch(f=>"")}),u=await Promise.all(c);for(const[h,d]of k[D].songs.entries()){let f=document.createElement("tr");if(f.style.height="3rem",a=parseFloat(u[h]),f.innerHTML+=`
                <td></td>
                <td style="display: flex; height: inherit; padding-right: 1rem;">
                    <button class="singleSongButton" data-id='${h}' data-openedPlaylistID='${D}' style="padding: 0; border: none; background: none; color: white; cursor: pointer;">
                        <svg viewBox="0 0 16 16" width="32px" height="32px">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fill="white"></path>
                        </svg>
                        <svg viewBox="0 0 16 16" width="32px" height="32px">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z" fill=url(#gradient)></path>
                        </svg>
                    </button>
                </td>
                <td style="padding-right: 1rem;">${h+1}</td>
                <td style="padding-right: 1rem;">${d.title}</td>
                <td style="padding-right: 1rem;">${d.artist}</td>
                <td>${Li(a)}</td>`,h==y&&D==_.currentPlaylist){f.classList.add("playing");let ee=f.children[1]?.firstElementChild?.firstElementChild?.firstElementChild;ee.style.fill="url(#gradient)"}ot.appendChild(f),e+=a;let g=document.querySelectorAll(".singleSongButton")[h],v=g.firstElementChild,w=g.lastElementChild;if(h!=y||D!=_.currentPlaylist||J.paused?(v.style.display="block",w.style.display="none"):(v.style.display="none",w.style.display="block"),g.getAttribute("listener"))return;const G=()=>{y!=h||_.currentPlaylist!=D?(y=h,_.currentSong=h,_.currentPlaylist=D,document.querySelectorAll(".singleSongButton").forEach(Q=>{let W=Q.firstElementChild,xe=Q.lastElementChild;W.style.display="block",xe.style.display="none"}),dn(d.source),Nt.textContent=k[_.currentPlaylist].songs[h].title,Rt.textContent=k[_.currentPlaylist].songs[h].artist,v.style.display="none",w.style.display="block"):J.paused?(Jt(Y),v.style.display="none",w.style.display="block"):(Jt(Y),v.style.display="block",w.style.display="none")};f.addEventListener("click",()=>{f.parentElement.querySelectorAll("tr").forEach(ee=>{ee.classList.remove("selected")}),f.classList.add("selected")}),f.addEventListener("dblclick",()=>{G()}),g.addEventListener("click",()=>{G()})}Af.textContent="Playlist length: "+Li(e),console.log(Date.now()-t+" ms")}const Jt=(t,e=!1)=>{let n=t.firstElementChild,s=t.lastElementChild;if(k[_.currentPlaylist].songs[y]&&k[_.currentPlaylist].songs[y].source!=_.audioSource&&!e){dn(k[_.currentPlaylist].songs[y].source),n.style.display="none",s.style.display="block",Nt.textContent=k[_.currentPlaylist].songs[y].title,Rt.textContent=k[_.currentPlaylist].songs[y].artist;return}J.paused?(e||J.play(),n.style.display="none",s.style.display="block"):(e||J.pause(),n.style.display="block",s.style.display="none")},Of=()=>{let t=document.querySelectorAll(".singleSongButton");isNaN(y)&&(y=0,_.currentSong=0),D==_.currentPlaylist?Jt(t[y]):D!=_.currentPlaylist&&(y=0,_.currentSong=0,dn(k[D].songs[y].source),_.currentPlaylist=D,Jt(t[y],!1),t[y].lastElementChild.style.display="block",t[y].firstElementChild.style.display="none"),Nt.textContent=k[_.currentPlaylist].songs[y].title,Rt.textContent=k[_.currentPlaylist].songs[y].artist,J.paused?(Y.firstElementChild.style.display="block",Y.lastElementChild.style.display="none"):(Y.firstElementChild.style.display="none",Y.lastElementChild.style.display="block")};Y.addEventListener("click",()=>{Of()});Jo.forEach((t,e)=>{t.addEventListener("click",()=>{Ls.style.display="block",el.style.display="none",D=e,_.openedPlaylist=D,Df(),D!=_.currentPlaylist||J.paused?(Y.firstElementChild.style.display="block",Y.lastElementChild.style.display="none"):(Y.firstElementChild.style.display="none",Y.lastElementChild.style.display="block")})});const en=()=>{let t=document.querySelectorAll(".singleSongButton");D==_.currentPlaylist&&t[y]&&(t.forEach(e=>{let n=e.firstElementChild,s=e.lastElementChild;n.style.display="block",s.style.display="none"}),t[_.currentSong].firstElementChild.style.display="none",t[_.currentSong].lastElementChild.style.display="block"),dn(k[_.currentPlaylist].songs[y].source),Nt.textContent=k[_.currentPlaylist].songs[y].title,Rt.textContent=k[_.currentPlaylist].songs[y].artist};let tt=[],tn=[];const tl=()=>{if(_.isShuffling){tn.push(k[_.currentPlaylist].songs[y]),tt.length<=1&&(tt=k[_.currentPlaylist].songs.filter(e=>e.source!==k[_.currentPlaylist].songs[y].source),tt.sort(()=>Math.random()-.5));let t=tt[0];Nt.textContent=t.title,Rt.textContent=t.artist,y=k[_.currentPlaylist].songs.findIndex(e=>e.source===t.source),_.currentSong=y,en(),tt.shift()}else k[_.currentPlaylist].songs.length-1>_.currentSong&&(tn.push(k[_.currentPlaylist].songs[y]),y++,_.currentSong=y,en())},Lf=()=>{if(J.currentTime>3){J.currentTime=0;return}if(tn.length>0){let t=tn.pop();y=k[_.currentPlaylist].songs.findIndex(e=>e.source===t.source),_.currentSong=y,en()}else _.currentSong>0&&(y--,_.currentSong=y,en())};J.addEventListener("ended",()=>{tl()});xf.addEventListener("click",()=>{tl()});Pf.addEventListener("click",()=>{Lf()});
