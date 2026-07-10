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

// ============ LIVE LEETCODE STATS ============
(async () => {
  const el = document.getElementById('statLeetcode');
  const username = 'snehasharma08';
  const endpoints = [
    { url: `https://leetcode-stats.tashif.codes/${username}`, field: 'totalSolved' },
    { url: `https://alfa-leetcode-api.onrender.com/${username}/solved`, field: 'solvedProblem' },
    { url: `https://leetcode-stats-api.herokuapp.com/${username}`, field: 'totalSolved' },
  ];
  for (const ep of endpoints) {
    try {
      const res = await fetch(ep.url);
      if (!res.ok) continue;
      const data = await res.json();
      const solved = data[ep.field];
      if (typeof solved === 'number' && solved >= 0) { animateCount(el, solved); return; }
    } catch (e) { /* try next endpoint */ }
  }
  el.textContent = '—';
})();

function animateCount(el, target){
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const timer = setInterval(() => {
    current += step;
    if (current >= target){ current = target; clearInterval(timer); }
    el.textContent = current;
  }, 30);
}
