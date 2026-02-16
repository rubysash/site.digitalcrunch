/* Fraze Stack Status Dashboard */
(function() {
"use strict";

// ══════════════════════════════════════════
//  CONFIG
// ══════════════════════════════════════════
const REFRESH = 300;
const HISTORY_SLOTS = 120;
const HISTORY_DISPLAY = 60;
const DNS_HISTORY_DISPLAY = 30;
const DNS_SLOW_MS = 500;
const DNS_TIMEOUT_MS = 5000;

const PROXIES = [
  url => 'https://corsproxy.io/?' + encodeURIComponent(url),
  url => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url),
];

// ── API-MONITORED SERVICES ──
const SERVICES = [
  // Column 1
  { id:'retell', name:'Retell AI',    desc:'Voice AI Agents · Phone',            url:'https://status.retellai.com',        api:'https://status.retellai.com/api/v2/summary.json',        color:'#0ea5e9', icon:'RTL', col:1 },
  { id:'anth',   name:'Anthropic',    desc:'Claude AI Models · API',             url:'https://status.anthropic.com',       api:'https://status.anthropic.com/api/v2/summary.json',       color:'#d97706', icon:'ANT', col:1 },
  { id:'deepgram',name:'Deepgram',    desc:'Speech-to-Text · STT Engine',        url:'https://status.deepgram.com',        api:'https://status.deepgram.com/api/v2/summary.json',        color:'#13b886', icon:'DG',  col:1 },
  { id:'gcp',    name:'Google Cloud', desc:'Gemini AI · GCP Infrastructure',     url:'https://status.cloud.google.com',    api:'https://status.cloud.google.com/incidents.json',         color:'#4285f4', icon:'GCP', col:1, isGoogle:true },
  { id:'sendgrid',name:'SendGrid',    desc:'Email Delivery · Transactional Mail',url:'https://status.sendgrid.com',        api:'https://status.sendgrid.com/api/v2/summary.json',        color:'#1a82e2', icon:'SG',  col:1 },
  { id:'netlify',name:'Netlify',      desc:'CDN · Hosting · Builds · DNS',       url:'https://www.netlifystatus.com',      api:'https://www.netlifystatus.com/api/v2/summary.json',      color:'#00c7b7', icon:'NTL', col:1 },
  // Column 2
  { id:'openai', name:'OpenAI',       desc:'ChatGPT · GPT-4 · DALL·E',          url:'https://status.openai.com',          api:'https://status.openai.com/api/v2/summary.json',          color:'#10b981', icon:'OAI', col:2 },
  { id:'twilio', name:'Twilio',       desc:'SMS · Voice · Phone · Telecom',      url:'https://status.twilio.com',          api:'https://status.twilio.com/api/v2/summary.json',          color:'#e11d48', icon:'TWL', col:2 },
  { id:'cf',     name:'Cloudflare',   desc:'CDN · DNS · Security · DDoS',        url:'https://www.cloudflarestatus.com',   api:'https://www.cloudflarestatus.com/api/v2/summary.json',   color:'#f59e0b', icon:'CF',  col:2 },
  { id:'github', name:'GitHub',       desc:'Repos · Actions · CI/CD · Pages',    url:'https://www.githubstatus.com',       api:'https://www.githubstatus.com/api/v2/summary.json',       color:'#8b5cf6', icon:'GH',  col:2 },
  { id:'do',     name:'DigitalOcean', desc:'Droplets · K8s · Spaces · Apps',     url:'https://status.digitalocean.com',    api:'https://status.digitalocean.com/api/v2/summary.json',    color:'#0080ff', icon:'DO',  col:2 },
];

// ── DNS RESOLVERS (live DoH probes) ──
// format: 'json' = DoH JSON API, 'wire' = RFC 8484 binary
// corsOk: true = endpoint sends Access-Control-Allow-Origin (can fetch direct from browser)
const DNS_RESOLVERS = [
  {
    id: 'dns_cf', name: 'Cloudflare', ip: '1.1.1.1', color: '#f59e0b', icon: 'CF',
    url: 'https://cloudflare-dns.com/dns-query?name=example.com&type=A',
    page: 'https://www.cloudflarestatus.com',
    format: 'json', corsOk: true,
    headers: { 'Accept': 'application/dns-json' },
  },
  {
    id: 'dns_google', name: 'Google', ip: '8.8.8.8', color: '#4285f4', icon: 'G',
    url: 'https://dns.google/resolve?name=example.com&type=A',
    page: 'https://status.cloud.google.com',
    format: 'json', corsOk: true,
    headers: {},
  },
];

// Unified DNS probe: direct for CORS-friendly, corsproxy for the rest
async function dnsProbe(resolver) {
  const attempts = [];

  if (resolver.corsOk) {
    attempts.push(resolver.url);
  } else {
    attempts.push('https://corsproxy.io/?' + encodeURIComponent(resolver.url));
    attempts.push('https://api.allorigins.win/raw?url=' + encodeURIComponent(resolver.url));
  }

  let lastErr;
  for (const fetchUrl of attempts) {
    try {
      const ac = new AbortController();
      const timer = setTimeout(() => ac.abort(), DNS_TIMEOUT_MS);

      const r = await fetch(fetchUrl, {
        signal: ac.signal,
        headers: resolver.corsOk ? resolver.headers : {},
        // Note: custom headers through CORS proxy may be stripped, but the
        // proxy URL itself triggers the right content-type from the upstream
      });
      clearTimeout(timer);

      if (!r.ok) throw new Error('HTTP ' + r.status);

      if (resolver.format === 'json') {
        const d = await r.json();
        if (d.Status !== 0 || !d.Answer?.length) throw new Error('No answer');
        return d.Answer[0].data;
      } else {
        // Wire format — parse binary DNS response
        const buf = await r.arrayBuffer();
        if (buf.byteLength < 12) throw new Error('Empty response');
        const view = new Uint8Array(buf);
        const rcode = view[3] & 0x0f;
        if (rcode !== 0) throw new Error('RCODE: ' + rcode);
        const ancount = (view[6] << 8) | view[7];
        if (ancount < 1) throw new Error('No answers');
        return ancount + ' record' + (ancount > 1 ? 's' : '');
      }
    } catch (e) {
      lastErr = e;
      continue;
    }
  }
  throw lastErr || new Error('All attempts failed');
}

// ── MANUAL CHECK SERVICES ──
const MANUAL = [
  { name:'GoHighLevel', desc:'CRM · Automations · Funnels',       url:'https://status.gohighlevel.com',    color:'#6366f1', icon:'GHL' },
  { name:'Stripe',      desc:'Payments · Subscriptions',           url:'https://status.stripe.com',         color:'#7c3aed', icon:'STR' },
  { name:'VAPI',        desc:'Voice AI Platform',                  url:'https://status.vapi.ai',            color:'#f43f5e', icon:'VAPI'},
  { name:'ElevenLabs',  desc:'Voice Synthesis · TTS',              url:'https://status.elevenlabs.io',      color:'#000000', icon:'11L' },
  { name:'AWS',         desc:'Amazon Web Services',                url:'https://health.aws.amazon.com',     color:'#ff9900', icon:'AWS' },
  { name:'Azure',       desc:'Microsoft Cloud · VMs · AD',         url:'https://azure.status.microsoft/en-us/status', color:'#0078d4', icon:'AZR' },
  { name:'Quad9',       desc:'DNS 9.9.9.9',                        url:'https://uptime.quad9.net',              color:'#3b82f6', icon:'Q9'  },
  { name:'OpenDNS',     desc:'DNS 208.67.222.222',                  url:'https://status.p1.opendns.com',         color:'#e97627', icon:'OD'  },
  { name:'AdGuard',     desc:'DNS 94.140.14.14',                    url:'https://status.adguard.com',            color:'#68bc71', icon:'AG'  },
];

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
const state = {};
const history = {};
const proxyIdx = {};
let countdown = REFRESH;

// Service state
SERVICES.forEach(s => {
  state[s.id] = null;
  history[s.id] = loadHist(s.id);
  proxyIdx[s.id] = 0;
});

// DNS state
const dnsState = {};
const dnsHistory = {};
DNS_RESOLVERS.forEach(r => {
  dnsState[r.id] = null; // { status, latency, detail, error }
  dnsHistory[r.id] = loadHist(r.id);
});

function loadHist(id) {
  try {
    const r = localStorage.getItem('fss_' + id);
    if (r) {
      const arr = JSON.parse(r);
      const cut = Date.now() - 2*3600000;
      return arr.filter(e => e.t > cut);
    }
  } catch(e) {}
  return [];
}
function saveHist(id, hist) {
  try {
    localStorage.setItem('fss_' + id, JSON.stringify(hist.slice(-HISTORY_SLOTS)));
  } catch(e){}
}

// ══════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════
const LBL = {
  operational:'Operational', degraded_performance:'Degraded',
  partial_outage:'Partial Outage', major_outage:'Major Outage',
  under_maintenance:'Maintenance', unknown:'Unknown'
};
const SEV = { operational:0, degraded_performance:1, under_maintenance:2, partial_outage:3, major_outage:4, unknown:-1 };
function worst(a){ let w='operational'; for(const s of a) if((SEV[s]??-1)>(SEV[w]??-1)) w=s; return w; }
function esc(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }
function ago(d){ const m=Math.floor((Date.now()-new Date(d).getTime())/60000); if(m<1)return'just now'; if(m<60)return m+'m ago'; const h=Math.floor(m/60); if(h<24)return h+'h ago'; return Math.floor(h/24)+'d ago'; }
function dotCls(s){
  return s==='operational'?'c-ok':s==='degraded_performance'?'c-warn':s==='partial_outage'?'c-part':s==='major_outage'?'c-bad':s==='under_maintenance'?'c-maint':'c-unk';
}
function cardG(s){
  return s==='operational'?'g-ok':s==='degraded_performance'?'g-warn':s==='partial_outage'?'g-part':s==='major_outage'?'g-bad':'g-unk';
}
function fmtT(ts){ return new Date(ts).toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'}); }

// ══════════════════════════════════════════
//  FETCH WITH CORS PROXY FALLBACK
// ══════════════════════════════════════════
async function fetchProxy(svc) {
  const start = proxyIdx[svc.id] || 0;
  for (let i = 0; i < PROXIES.length; i++) {
    const idx = (start + i) % PROXIES.length;
    try {
      const ac = new AbortController();
      const t = setTimeout(() => ac.abort(), 10000);
      const r = await fetch(PROXIES[idx](svc.api), { signal: ac.signal });
      clearTimeout(t);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const d = await r.json();
      proxyIdx[svc.id] = idx;
      return d;
    } catch(e) { continue; }
  }
  throw new Error('All fetch methods failed');
}

// ══════════════════════════════════════════
//  PARSERS
// ══════════════════════════════════════════
function parseStatuspage(d) {
  const comps = (d.components||[]).filter(c => c.group !== true);
  const incs = (d.incidents||[]).filter(i => i.status!=='resolved' && i.status!=='postmortem');
  const mts = (d.scheduled_maintenances||[]).filter(m => m.status==='in_progress');
  const ind = d.status?.indicator;
  const ov = ind==='none'?'operational':ind==='minor'?'degraded_performance':ind==='major'?'partial_outage':ind==='critical'?'major_outage':'operational';
  return {
    overall:ov, overallDesc: d.status?.description||'',
    components: comps.map(c=>({name:c.name, status:c.status||'unknown'})),
    incidents: incs.map(i=>({name:i.name, impact:i.impact, updated:i.updated_at})),
    maintenances: mts.map(m=>({name:m.name})),
    updatedAt: d.page?.updated_at
  };
}

function parseGoogle(data) {
  if (!Array.isArray(data)) throw new Error('Unexpected format');
  const now = Date.now();
  const active = data.filter(inc => {
    if (!inc.most_recent_update) return false;
    const w = new Date(inc.most_recent_update.when||inc.begin).getTime();
    if (now-w > 86400000) return false;
    const st = (inc.most_recent_update.status||'').toUpperCase();
    return st!=='AVAILABLE' && st!=='RESOLVED';
  });
  const known = ['Vertex AI / Gemini','Compute Engine','Cloud Functions','Cloud Storage','Cloud Run','BigQuery','Cloud Networking','Cloud SQL'];
  if (!active.length) {
    return {
      overall:'operational', overallDesc:'All Systems Operational',
      components: known.map(n=>({name:n,status:'operational'})),
      incidents:[], maintenances:[], updatedAt:new Date().toISOString()
    };
  }
  const aff = new Map();
  for (const inc of active) for (const p of (inc.affected_products||[])) {
    const t=p.title||p.id, sev=inc.severity||'medium';
    const st = sev==='high'?'major_outage':sev==='medium'?'partial_outage':'degraded_performance';
    if(!aff.has(t)||SEV[st]>SEV[aff.get(t)]) aff.set(t,st);
  }
  const comps = known.map(n=>{
    let st='operational';
    for(const[k,v]of aff){if(n.toLowerCase().includes(k.toLowerCase())||k.toLowerCase().includes(n.split(' / ')[0].toLowerCase())){st=v;break;}}
    return{name:n,status:st};
  });
  for(const[k,v]of aff){if(!comps.some(c=>c.name.toLowerCase().includes(k.toLowerCase())))comps.push({name:k,status:v});}
  return {
    overall:worst(comps.map(c=>c.status)),
    overallDesc:`${active.length} Active Incident${active.length>1?'s':''}`,
    components:comps,
    incidents:active.slice(0,2).map(i=>({name:i.external_desc||'Active incident',impact:i.severity,updated:i.most_recent_update?.when})),
    maintenances:[], updatedAt:new Date().toISOString()
  };
}

// ══════════════════════════════════════════
//  FETCH SERVICE
// ══════════════════════════════════════════
async function fetchSvc(svc) {
  try {
    const raw = await fetchProxy(svc);
    state[svc.id] = { ...(svc.isGoogle ? parseGoogle(raw) : parseStatuspage(raw)), error:null };
  } catch(e) {
    state[svc.id] = { overall:'unknown', overallDesc:'Fetch Error', components:[], incidents:[], maintenances:[], updatedAt:null, error:e.message };
  }
  history[svc.id].push({ t:Date.now(), s:state[svc.id].overall });
  if (history[svc.id].length > HISTORY_SLOTS) history[svc.id] = history[svc.id].slice(-HISTORY_SLOTS);
  saveHist(svc.id, history[svc.id]);
}

// ══════════════════════════════════════════
//  DNS PROBE
// ══════════════════════════════════════════
async function probeDns(resolver) {
  const t0 = performance.now();
  try {
    const result = await dnsProbe(resolver);
    const latency = Math.round(performance.now() - t0);
    const status = latency > DNS_SLOW_MS ? 'slow' : 'ok';
    dnsState[resolver.id] = { status, latency, detail: result, error: null };
  } catch(e) {
    const latency = Math.round(performance.now() - t0);
    dnsState[resolver.id] = { status: 'down', latency, detail: null, error: e.message };
  }

  // Record history
  const st = dnsState[resolver.id];
  const histStatus = st.status === 'ok' ? 'operational' : st.status === 'slow' ? 'degraded_performance' : 'major_outage';
  dnsHistory[resolver.id].push({ t: Date.now(), s: histStatus, ms: st.latency });
  if (dnsHistory[resolver.id].length > HISTORY_SLOTS) dnsHistory[resolver.id] = dnsHistory[resolver.id].slice(-HISTORY_SLOTS);
  saveHist(resolver.id, dnsHistory[resolver.id]);
}

// ══════════════════════════════════════════
//  RENDER — SERVICE CARDS
// ══════════════════════════════════════════
function renderCard(svc, idx, isSide) {
  const d = state[svc.id];
  const loading = !d;
  const ov = d ? d.overall : 'loading';
  const label = d ? (LBL[d.overall]||d.overallDesc||'Unknown') : 'Loading...';

  const h = history[svc.id];
  const slots = [];
  for (let i = 0; i < HISTORY_DISPLAY; i++) {
    const entry = h[h.length - HISTORY_DISPLAY + i];
    slots.push(entry || null);
  }
  const dotsHtml = slots.map(s => {
    if (!s) return '<div class="dot-cell c-empty"></div>';
    return `<div class="dot-cell ${dotCls(s.s)}"><div class="tip">${fmtT(s.t)} — ${esc(LBL[s.s]||s.s)}</div></div>`;
  }).join('');
  const oldest = slots.find(s=>s);
  const startLbl = oldest ? fmtT(oldest.t) : '';
  const endLbl = h.length ? fmtT(h[h.length-1].t) : 'now';

  let compsHtml = '';
  if (d && d.components.length) {
    const scroll = isSide ? ' comps-scroll' : '';
    compsHtml = '<div class="comps' + scroll + '">' + d.components.map(c =>
      `<div class="comp"><div class="comp-n">${esc(c.name)}</div><div class="comp-s cs-${c.status}"><div class="comp-d"></div><span class="comp-t">${esc(LBL[c.status]||c.status)}</span></div></div>`
    ).join('') + '</div>';
  }

  let incHtml = '';
  if (d && d.incidents.length) {
    incHtml = '<div class="inc-wrap">' + d.incidents.slice(0,2).map(i =>
      `<div class="inc-box"><b>⚠ ${esc(i.name)}</b>${i.updated?'Updated '+ago(i.updated):''}</div>`
    ).join('') + '</div>';
  }
  if (d && d.maintenances && d.maintenances.length) {
    incHtml += '<div class="inc-wrap">' + d.maintenances.slice(0,1).map(m =>
      `<div class="inc-box inc-maint"><b>🔧 ${esc(m.name)}</b>Maintenance in progress</div>`
    ).join('') + '</div>';
  }

  let errHtml = '';
  if (d && d.error) {
    errHtml = `<div class="err-note">⚠ ${esc(d.error)} — <a href="${svc.url}" target="_blank">check directly →</a></div>`;
  }

  return `
  <div class="card ${d?cardG(d.overall):'g-unk'}" style="animation-delay:${idx*0.05}s">
    <div class="card-top">
      <div class="ct-left">
        <div class="svc-icon" style="background:${svc.color}">${svc.icon}</div>
        <div><a href="${svc.url}" target="_blank" rel="noopener" class="svc-name">${esc(svc.name)}</a><div class="svc-desc">${esc(svc.desc)}</div></div>
      </div>
      <div class="big-status bs-${ov}"><div class="sd"></div>${loading?'Loading...':esc(label)}</div>
    </div>
    <div class="history-bar">
      <div class="dots-row">${dotsHtml}</div>
      <div class="history-label"><span>${startLbl}</span><span>${endLbl}</span></div>
    </div>
    ${incHtml}${compsHtml}${errHtml}
    <div class="card-foot"><a href="${svc.url}" target="_blank">${svc.url.replace('https://','').replace('www.','')}</a></div>
  </div>`;
}

// ══════════════════════════════════════════
//  RENDER — DNS CARDS
// ══════════════════════════════════════════
function renderDns() {
  document.getElementById('sd-dns-grid').innerHTML = DNS_RESOLVERS.map((r, i) => {
    const d = dnsState[r.id];
    const h = dnsHistory[r.id];

    let cardCls, badgeCls, badgeLbl, latCls, latTxt, detailTxt;

    if (!d) {
      cardCls = 'dns-wait';
      badgeCls = 'db-wait'; badgeLbl = 'Probing...';
      latCls = 'lat-unk'; latTxt = '—';
      detailTxt = '';
    } else if (d.status === 'ok') {
      cardCls = 'dns-ok';
      badgeCls = 'db-ok'; badgeLbl = 'Resolving';
      latCls = 'lat-ok'; latTxt = d.latency + 'ms';
      detailTxt = d.detail || '';
    } else if (d.status === 'slow') {
      cardCls = 'dns-slow';
      badgeCls = 'db-slow'; badgeLbl = 'Slow';
      latCls = 'lat-slow'; latTxt = d.latency + 'ms';
      detailTxt = d.detail || '';
    } else {
      cardCls = 'dns-down';
      badgeCls = 'db-down'; badgeLbl = 'Down';
      latCls = 'lat-bad'; latTxt = 'FAIL';
      detailTxt = d.error || '';
    }

    // Mini history dots
    const slots = [];
    for (let j = 0; j < DNS_HISTORY_DISPLAY; j++) {
      const entry = h[h.length - DNS_HISTORY_DISPLAY + j];
      slots.push(entry || null);
    }
    const histHtml = slots.map(s => {
      if (!s) return '<div class="dns-hdot c-empty"></div>';
      const tip = `${fmtT(s.t)} — ${s.ms}ms`;
      return `<div class="dns-hdot ${dotCls(s.s)}"><div class="tip">${tip}</div></div>`;
    }).join('');

    return `
    <div class="dns-card ${cardCls}" style="animation-delay:${i*0.06}s">
      <div class="dns-top">
        <div class="dns-top-left">
          <div class="dns-icon" style="background:${r.color}">${r.icon}</div>
          <div>
            <a href="${r.page}" target="_blank" rel="noopener" class="dns-name">${esc(r.name)}</a>
            <div class="dns-ip">${esc(r.ip)}</div>
          </div>
        </div>
        <div class="dns-badge ${badgeCls}"><div class="db-dot"></div>${badgeLbl}</div>
      </div>
      <div class="dns-meta">
        <div class="dns-latency ${latCls}">${latTxt}</div>
        <div class="dns-detail">${esc(detailTxt)}</div>
      </div>
      <div class="dns-hist">${histHtml}</div>
      <div class="dns-foot"><a href="${r.page}" target="_blank" rel="noopener">${r.page.replace('https://','').replace('www.','')}</a></div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════
//  RENDER — MANUAL + ALL
// ══════════════════════════════════════════
function renderManual() {
  document.getElementById('sd-manual-grid').innerHTML = MANUAL.map(m => `
    <a class="manual-chip" href="${m.url}" target="_blank" rel="noopener">
      <div class="mc-icon" style="background:${m.color}">${m.icon}</div>
      <div class="mc-info">
        <div class="mc-name">${esc(m.name)}</div>
        <div class="mc-desc">${esc(m.desc)}</div>
      </div>
      <div class="mc-arrow">↗</div>
    </a>
  `).join('');
}

function renderAll() {
  const c1 = SERVICES.filter(s => s.col===1);
  const c2 = SERVICES.filter(s => s.col===2);
  document.getElementById('sd-col1').innerHTML = c1.map((s,i) => renderCard(s,i,false)).join('');
  document.getElementById('sd-col2').innerHTML = c2.map((s,i) => renderCard(s,i,true)).join('');

  renderDns();

  // Overall pill — combine service + DNS status
  const pill = document.getElementById('sd-opill');
  const svcStates = Object.values(state).filter(d=>d&&d.overall!=='unknown').map(d=>d.overall);
  const dnsStates = Object.values(dnsState).filter(d=>d).map(d =>
    d.status==='ok'?'operational':d.status==='slow'?'degraded_performance':'major_outage'
  );
  const all = [...svcStates, ...dnsStates];

  if (!all.length) {
    pill.className='pill pill-unk'; pill.innerHTML='<div class="blink"></div><span>Loading</span>';
  } else {
    const w = worst(all);
    const ok = all.every(s=>s==='operational');
    if (ok) { pill.className='pill pill-ok'; pill.innerHTML='<div class="blink"></div><span>All Systems Go</span>'; }
    else if (w==='major_outage'||w==='partial_outage') { pill.className='pill pill-bad'; pill.innerHTML='<div class="blink"></div><span>Issues Detected</span>'; }
    else { pill.className='pill pill-warn'; pill.innerHTML='<div class="blink"></div><span>Degraded</span>'; }
  }
  const now = new Date();
  document.getElementById('sd-ts').textContent = `Last refresh: ${now.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})} ${now.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'})}`;
}

// ══════════════════════════════════════════
//  MAIN
// ══════════════════════════════════════════
async function refresh() {
  await Promise.allSettled([
    ...SERVICES.map(s => fetchSvc(s)),
    ...DNS_RESOLVERS.map(r => probeDns(r)),
  ]);
  renderAll();
}

(async function init() {
  renderManual();
  renderAll();
  await refresh();
  countdown = REFRESH;
  setInterval(() => {
    countdown--;
    const m = Math.floor(Math.max(countdown,0)/60);
    const s = Math.max(countdown,0)%60;
    document.getElementById('sd-cd').textContent = m + ':' + String(s).padStart(2,'0');
    if (countdown <= 0) { countdown = REFRESH; refresh(); }
  }, 1000);
})();

})();