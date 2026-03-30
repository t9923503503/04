function u(t){return t==null?"":String(t).replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function E({team1:t,team2:s,score1:a=0,score2:r=0,onScore:o="",id:l="",finished:i=!1}={}){const e=l?` id="${u(l)}"`:"",n=Array.isArray(t)?t.join(" / "):String(t??""),d=Array.isArray(s)?s.join(" / "):String(s??""),c=i?"sc-score-btn disabled":"sc-score-btn",p=(f,v,A)=>{if(!o)return"";const T=o.replace(/%t/g,f).replace(/%d/g,v),C=f===1?n:d,g=`${v>0?"Увеличить":"Уменьшить"} счет команды ${C||`#${f}`}`;return`<button type="button" class="${c}" onclick="${T}" aria-label="${u(g)}" title="${u(g)}" ${i?"disabled":""}>${A}</button>`};return`<div class="sc-card${i?" sc-finished":""}"${e}>
  <div class="sc-team sc-team1">${u(n)}</div>
  <div class="sc-score-wrap">
    ${p(1,-1,"−")}
    <span class="sc-score sc-s1">${a}</span>
    <span class="sc-score-sep">:</span>
    <span class="sc-score sc-s2">${r}</span>
    ${p(2,1,"+")}
  </div>
  <div class="sc-score-wrap sc-score-wrap-r">
    ${p(1,1,"+")}
    <span class="sc-score sc-s2r">${r}</span>
    <span class="sc-score-sep">:</span>
    <span class="sc-score sc-s1r">${a}</span>
    ${p(2,-1,"−")}
  </div>
  <div class="sc-team sc-team2">${u(d)}</div>
</div>`}const h={render:E};function L({courtName:t="",color:s="#FFD700",matches:a=[],onScore:r="",headerExtra:o=""}={}){const l=`border-top:3px solid ${u(s)}`,i=a.map((e,n)=>h.render({...e,onScore:r,id:e.id||""})).join("");return`<div class="court-card" style="${l}">
  <div class="court-card-hdr">
    <span class="court-card-name">${u(t)}</span>
    ${o}
  </div>
  <div class="court-card-matches">${i||'<div class="court-empty">Нет матчей</div>'}</div>
</div>`}const x={render:L};function S(t,{onConfirm:s,min:a=0,max:r=99,current:o}={}){t&&t.addEventListener("dblclick",function(i){if(i.stopPropagation(),t.querySelector("input"))return;const e=o??(parseInt(t.textContent,10)||0),n=document.createElement("input");n.type="number",n.inputMode="numeric",n.min=String(a),n.max=String(r),n.value=String(e),n.className="sc-inline-input",n.style.cssText="width:60px;font-size:inherit;font-weight:inherit;text-align:center;padding:2px 4px;border-radius:6px;border:1px solid var(--gold,#FFD700);background:var(--dark2,#13131f);color:var(--text,#e8e8f0)";const d=()=>{const c=Math.max(a,Math.min(r,parseInt(n.value,10)||0));t.removeChild(n),s&&s(c)};n.addEventListener("keydown",c=>{c.key==="Enter"&&d(),c.key==="Escape"&&t.removeChild(n)}),n.addEventListener("blur",d),t.appendChild(n),n.select(),n.focus()})}const y={attach:S};function _({label:t="",action:s="",holdMs:a=600,cls:r=""}={}){return`<button class="hold-btn${r?" "+u(r):""}"
  data-action="${u(s)}"
  data-hold-ms="${a}"
  ontouchstart="HoldBtn._start(this,event)"
  ontouchend="HoldBtn._end(this,event)"
  ontouchcancel="HoldBtn._end(this,event)"
  onmousedown="HoldBtn._start(this,event)"
  onmouseup="HoldBtn._end(this,event)"
  onmouseleave="HoldBtn._end(this,event)"
  >${u(t)}</button>`}function B(t=document){}let b=null;function D(t,s){s.preventDefault();const a=parseInt(t.dataset.holdMs||"600",10);t.classList.add("hold-btn-active"),b=setTimeout(()=>{t.classList.remove("hold-btn-active");const r=t.dataset.action;try{r&&new Function(r)()}catch(o){console.warn("[HoldBtn]",o)}},a)}function F(t,s){t.classList.remove("hold-btn-active"),clearTimeout(b),b=null}const w={render:_,initAll:B,_start:D,_end:F};let m=!1;function H(){if(m||typeof document>"u")return;m=!0;const t=document.createElement("style");t.textContent=`
/* ScoreCard */
.sc-card{background:var(--card,#1e1e32);border-radius:12px;padding:12px;margin-bottom:8px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px}
.sc-card.sc-finished{opacity:.75}
.sc-team{font-size:.85em;font-weight:600;color:var(--text,#e8e8f0);text-align:center;word-break:break-word}
.sc-score-wrap{display:flex;align-items:center;gap:6px;justify-content:center}
.sc-score-wrap-r{display:none}
.sc-score{font-size:1.5em;font-weight:700;min-width:28px;text-align:center;cursor:pointer}
.sc-score-sep{color:var(--muted,#6b6b8a);font-weight:300}
.sc-score-btn{background:rgba(255,255,255,.07);border:none;border-radius:8px;padding:6px 10px;font-size:1.1em;font-weight:700;cursor:pointer;color:var(--text,#e8e8f0);line-height:1;touch-action:manipulation}
.sc-score-btn:active{background:rgba(255,255,255,.15)}
.sc-score-btn:focus-visible{outline:2px solid var(--gold,#FFD700);outline-offset:2px}
.sc-score-btn.disabled{opacity:.35;cursor:default}
.sc-inline-input::-webkit-inner-spin-button,.sc-inline-input::-webkit-outer-spin-button{-webkit-appearance:none}
/* CourtCard */
.court-card{background:var(--card,#1e1e32);border-radius:14px;overflow:hidden;margin-bottom:12px}
.court-card-hdr{padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:8px;background:rgba(0,0,0,.15)}
.court-card-name{font-weight:700;font-size:.9em;letter-spacing:.02em;color:var(--text,#e8e8f0)}
.court-card-matches{padding:10px 12px 12px}
.court-empty{color:var(--muted,#6b6b8a);font-size:.85em;padding:8px 0;text-align:center}
/* HoldBtn */
.hold-btn{touch-action:manipulation;user-select:none;-webkit-user-select:none;transition:transform .1s,opacity .1s}
.hold-btn.hold-btn-active{transform:scale(.94);opacity:.75}
`,document.head.appendChild(t)}function I(t){const s='a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';function a(){return[...t.querySelectorAll(s)].filter(o=>o.offsetParent!==null)}function r(o){if(o.key!=="Tab")return;const l=a();if(!l.length)return;const i=l[0],e=l[l.length-1];o.shiftKey?document.activeElement===i&&(o.preventDefault(),e.focus()):document.activeElement===e&&(o.preventDefault(),i.focus())}return t.addEventListener("keydown",r),requestAnimationFrame(()=>{const o=a();o.length&&o[0].focus()}),function(){t.removeEventListener("keydown",r)}}function j(t,s={}){const a=s.selector||"button";t.setAttribute("role","tablist");function r(){return[...t.querySelectorAll(a)]}r().forEach((e,n)=>{e.setAttribute("role","tab"),e.setAttribute("tabindex",e.classList.contains("active")?"0":"-1"),e.setAttribute("aria-selected",e.classList.contains("active")?"true":"false")});function l(e,n){r().forEach(c=>{c.setAttribute("tabindex","-1"),c.setAttribute("aria-selected","false")}),e.setAttribute("tabindex","0"),e.setAttribute("aria-selected","true"),e.focus(),s.onActivate&&s.onActivate(e,n)}function i(e){const n=r(),d=n.indexOf(document.activeElement);if(d===-1)return;let c=-1;if(e.key==="ArrowRight"||e.key==="ArrowDown")c=(d+1)%n.length;else if(e.key==="ArrowLeft"||e.key==="ArrowUp")c=(d-1+n.length)%n.length;else if(e.key==="Home")c=0;else if(e.key==="End")c=n.length-1;else return;e.preventDefault(),l(n[c],c)}return t.addEventListener("keydown",i),function(){t.removeEventListener("keydown",i)}}const k={attach:I},$={attach:j},z={ScoreCard:h,CourtCard:x,DoubleClickInput:y,HoldBtn:w,FocusTrap:k,AriaTabList:$,injectUiKitCSS:H};try{typeof globalThis<"u"&&(globalThis.sharedUiKit=z,globalThis.ScoreCard=h,globalThis.CourtCard=x,globalThis.DoubleClickInput=y,globalThis.HoldBtn=w,globalThis.FocusTrap=k,globalThis.AriaTabList=$)}catch{}export{$ as AriaTabList,x as CourtCard,y as DoubleClickInput,k as FocusTrap,w as HoldBtn,h as ScoreCard,z as default,H as injectUiKitCSS};
//# sourceMappingURL=ui-kit-BIz3kH66.js.map
