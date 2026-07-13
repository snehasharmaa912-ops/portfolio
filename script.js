// ============ TIMELINE SCRUBBER ============
(() => {
  const slider = document.getElementById('journeySlider');
  const fill = document.getElementById('scrubberFill');
  const yearEl = document.getElementById('scrubberYear');
  const textEl = document.getElementById('scrubberText');
  const ticks = document.querySelectorAll('.scrubber-ticks span');
  if (!slider) return;

  const milestones = {
    0: { year: '2021', text: "Started Secondary Education at Manava Bharati India International School." },
    1: { year: '2022', text: "Completed Secondary Education with 87.83% — first real proof that consistency pays off and took on the role of Vice - Caption of Takshashila House at school." },
    2: { year: '2023', text: "Began Senior Secondary education in PCM + Computer Science, and took on the role of Discipline Incharge at school." },
    3: { year: '2024', text: "Graduated Senior Secondary with First Division. Started B.Tech in Computer Science & Engineering at Graphic Era Hill University — joined NSS GEHU and Team Aryavart." },
    4: { year: '2025', text: "Earned AWS Cloud Practitioner Essentials (Feb) and the AWS AI Practitioner Learning Plan (Sep) — building a cloud and AI foundation alongside coursework." },
    5: { year: '2026', text: "Interning at TBI-GEU and Mirai School of Technology, shipping SheSays, ATSlay, and VibeOps, and completing three Forage job simulations." },
  };

  function update(){
    const val = parseInt(slider.value, 10);
    const pct = (val / 5) * 100;
    fill.style.width = pct + '%';
    const m = milestones[val];
    yearEl.textContent = m.year;
    textEl.textContent = m.text;
    ticks.forEach((t, i) => t.classList.toggle('active', i === val));
  }
  slider.addEventListener('input', update);
  update();
})();

// ============ FOOTER SIGNATURE REVEAL ============
(() => {
  const sig = document.getElementById('footerSignature');
  if (!sig) return;
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sig.classList.add('signed');
        io2.disconnect();
      }
    });
  }, { threshold: 0.5 });
  io2.observe(sig);
})();

// ============ SPLASH: crack open + reveal ============
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  setTimeout(() => splash.classList.add('crack-open'), 1900);
  setTimeout(() => splash.classList.add('hide'), 2550);
  setTimeout(() => startTypewriter(), 2600);
});

// ============ TYPEWRITER TAGLINE ============
function startTypewriter(){
  const el = document.getElementById('typewriterTarget');
  if (!el) return;
  const full = el.getAttribute('data-full-text') || el.textContent;
  el.textContent = '';
  el.style.borderRight = '2px solid #c9a227';
  let i = 0;
  function type(){
    if (i <= full.length){
      el.textContent = full.slice(0, i);
      i++;
      setTimeout(type, 14);
    } else {
      setTimeout(() => { el.style.borderRight = 'none'; }, 400);
    }
  }
  type();
}

// ============ CUSTOM CURSOR + GOLD DUST TRAIL ============
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
let lastDust = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px';

  const now = Date.now();
  if (now - lastDust > 45) {
    lastDust = now;
    spawnDust(mouseX, mouseY);
  }
});

function spawnDust(x, y){
  const d = document.createElement('div');
  d.className = 'dust';
  const dx = (Math.random() - 0.5) * 30;
  const dy = -20 - Math.random() * 30;
  d.style.setProperty('--dx', dx + 'px');
  d.style.setProperty('--dy', dy + 'px');
  d.style.left = x + 'px';
  d.style.top = y + 'px';
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 950);
}

function animateRing(){
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .chip, .cert-card, .project-card, .skill-tags span, .p-visual').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

// Magnetic buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    btn.style.transform = `translate(${x*0.25}px, ${y*0.35}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
});

// ============ SCROLL PROGRESS ============
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
});

// ============ NAV MOBILE TOGGLE ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ============ TILT ON PROJECT CARDS ============
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    if (card.classList.contains('flipped')) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1400px) rotateY(${x*4}deg) rotateX(${-y*4}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1400px) rotateY(0) rotateX(0) translateY(0)';
  });
});

// ============ PARALLAX ============
const parallaxEls = document.querySelectorAll('.parallax-el');
function updateParallax(){
  const scrollY = window.scrollY;
  parallaxEls.forEach(el => {
    const speed = parseFloat(el.getAttribute('data-speed')) || 0.2;
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
  requestAnimationFrame(updateParallax);
}
updateParallax();

// ============ AMBIENT FLOATING GOLD PARTICLES (canvas) ============
(() => {
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function makeParticles(n){
    return Array.from({length: n}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.6,
      vy: -0.08 - Math.random() * 0.18,
      vx: (Math.random() - 0.5) * 0.06,
      alpha: 0.15 + Math.random() * 0.35,
    }));
  }
  particles = makeParticles(46);

  function draw(){
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.y += p.vy; p.x += p.vx;
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,162,39,${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ============ LIVE GITHUB STATS ============
(async () => {
  const el = document.getElementById('statRepos');
  try {
    const res = await fetch('https://api.github.com/users/snehasharmaa912-ops');
    const data = await res.json();
    animateCount(el, data.public_repos || 0);
  } catch (e) {
    el.textContent = '—';
  }
})();

// ============ GITHUB COMMIT HEATMAP ============
(async () => {
  const grid = document.getElementById('heatmapGrid');
  const sub = document.getElementById('heatmapSub');
  const username = 'snehasharmaa912-ops';
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
    if (!res.ok) throw new Error('bad response');
    const data = await res.json();
    const days = data.contributions || [];
    const totalKey = Object.keys(data.total || {}).pop();
    const total = totalKey ? data.total[totalKey] : days.reduce((s, d) => s + d.count, 0);

    sub.textContent = `${total} contributions in the last year`;

    grid.innerHTML = '';
    days.forEach(d => {
      const cell = document.createElement('div');
      cell.className = 'hm-cell';
      cell.setAttribute('data-level', d.level ?? 0);
      cell.title = `${d.date}: ${d.count} commit${d.count === 1 ? '' : 's'}`;
      grid.appendChild(cell);
    });
  } catch (e) {
    sub.textContent = 'Commit history unavailable right now — check back later.';
  }
})();

// ============ LIVE LEETCODE STATS + HEATMAP ============
(async () => {
  const el = document.getElementById('statLeetcode');
  const lcSub = document.getElementById('lcHeatmapSub');
  const lcGrid = document.getElementById('lcHeatmapGrid');
  const username = 'snehasharma08';

  // Primary: tashif API returns both solved count AND submissionCalendar in one call
  try {
    const res = await fetch(`https://leetcode-stats.tashif.codes/${username}`);
    if (res.ok) {
      const data = await res.json();
      if (typeof data.totalSolved === 'number') {
        animateCount(el, data.totalSolved);
        if (data.submissionCalendar) {
          renderLeetcodeHeatmap(data.submissionCalendar, lcGrid, lcSub);
          return;
        }
      }
    }
  } catch (e) { /* fall through to fallback endpoints */ }

  // Fallback chain for the solved count only (no heatmap data available)
  const fallbacks = [
    { url: `https://alfa-leetcode-api.onrender.com/${username}/solved`, field: 'solvedProblem' },
    { url: `https://leetcode-stats-api.herokuapp.com/${username}`, field: 'totalSolved' },
  ];
  for (const ep of fallbacks) {
    try {
      const res = await fetch(ep.url);
      if (!res.ok) continue;
      const data = await res.json();
      const solved = data[ep.field];
      if (typeof solved === 'number' && solved >= 0) {
        animateCount(el, solved);
        lcSub.textContent = 'Submission calendar unavailable right now — check back later.';
        return;
      }
    } catch (e) { /* try next endpoint */ }
  }
  el.textContent = '—';
  lcSub.textContent = 'Stats unavailable right now — check back later.';
})();

function renderLeetcodeHeatmap(calendar, gridEl, subEl){
  // calendar: { "unixTimestampSeconds": count }
  const entries = Object.entries(calendar).map(([ts, count]) => ({
    date: new Date(parseInt(ts, 10) * 1000),
    count: parseInt(count, 10),
  }));
  entries.sort((a, b) => a.date - b.date);

  const total = entries.reduce((s, e) => s + e.count, 0);
  subEl.textContent = `${total} submissions in the last year`;

  // Build a continuous day-by-day map for the last 365 days for a clean grid
  const byDate = {};
  entries.forEach(e => { byDate[e.date.toISOString().slice(0, 10)] = e.count; });

  const today = new Date();
  const days = [];
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ date: key, count: byDate[key] || 0 });
  }

  function levelFor(count){
    if (count === 0) return 0;
    if (count <= 1) return 1;
    if (count <= 3) return 2;
    if (count <= 6) return 3;
    return 4;
  }

  gridEl.innerHTML = '';
  days.forEach(d => {
    const cell = document.createElement('div');
    cell.className = 'hm-cell lc';
    cell.setAttribute('data-level', levelFor(d.count));
    cell.title = `${d.date}: ${d.count} submission${d.count === 1 ? '' : 's'}`;
    gridEl.appendChild(cell);
  });
}

function animateCount(el, target){
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const timer = setInterval(() => {
    current += step;
    if (current >= target){ current = target; clearInterval(timer); }
    el.textContent = current;
  }, 30);
}
