function i(e){return e==null?"":String(e).replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}function g({columns:e=[],rows:o=[],highlights:r={},caption:s=""}={}){const t=new Set(r.gold||[]),l=new Set(r.silver||[]),u=new Set(r.bronze||[]),b=e.map(a=>{const n=a.width?` style="width:${a.width}"`:"",d=a.align||"center";return{...a,w:n,a:d}}),w=`<thead><tr>${b.map(a=>`<th${a.w} style="text-align:${a.a}">${i(a.label)}</th>`).join("")}</tr></thead>`,m=`<tbody>${o.map((a,n)=>{const d=t.has(n),p=l.has(n),h=u.has(n),x=d?' class="tbl-gold"':p?' class="tbl-silver"':h?' class="tbl-bronze"':"",y=d?"🥇":p?"🥈":h?"🥉":"";return`<tr${x}>${b.map(c=>{const v=c.key==="rank"?y||i(a.rank??n+1):i(a[c.key]??"—");return`<td style="text-align:${c.a}">${v}</td>`}).join("")}</tr>`}).join("")}</tbody>`;return`<div class="shared-table-wrap">
  <table class="shared-table">${s?`<caption class="tbl-caption">${i(s)}</caption>`:""}${w}${m}</table>
</div>`}const $={render:g};function k({rows:e=[],columns:o=[{key:"place",label:"#",width:"36px",align:"center"},{key:"name",label:"Игрок",align:"left"},{key:"wins",label:"W",width:"40px",align:"center"},{key:"pts",label:"Pts",width:"44px",align:"center"},{key:"diff",label:"Diff",width:"48px",align:"center"},{key:"K",label:"K",width:"52px",align:"center"}],caption:r=""}={}){const s={gold:e.map((t,l)=>t.place===1?l:-1).filter(t=>t>=0),silver:e.map((t,l)=>t.place===2?l:-1).filter(t=>t>=0),bronze:e.map((t,l)=>t.place===3?l:-1).filter(t=>t>=0)};return g({columns:o,rows:e,highlights:s,caption:r})}const S={render:k};let f=!1;function C(){if(f||typeof document>"u")return;f=!0;const e=document.createElement("style");e.textContent=`
.shared-table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:10px}
.shared-table{width:100%;border-collapse:collapse;font:14px/1.3 Barlow,sans-serif}
.shared-table caption.tbl-caption{caption-side:top;padding:6px 0;font-weight:700;font-size:.85em;color:var(--muted,#6b6b8a);text-align:left}
.shared-table th{padding:8px 6px;font-size:.75em;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--muted,#6b6b8a);border-bottom:1px solid rgba(255,255,255,.08)}
.shared-table td{padding:9px 6px;border-bottom:1px solid rgba(255,255,255,.05);color:var(--text,#e8e8f0)}
.shared-table tr:last-child td{border-bottom:none}
.shared-table tr.tbl-gold td{color:#FFD700;font-weight:700}
.shared-table tr.tbl-silver td{color:#C0C0C0;font-weight:600}
.shared-table tr.tbl-bronze td{color:#CD7F32;font-weight:600}
.shared-table tr:hover td{background:rgba(255,255,255,.03)}
`,document.head.appendChild(e)}const z={CrossTable:$,StandingsTable:S,injectTableCSS:C};try{typeof globalThis<"u"&&(globalThis.sharedTable=z)}catch{}export{$ as CrossTable,S as StandingsTable,z as default,C as injectTableCSS};
//# sourceMappingURL=table-BmJzOWAo.js.map
