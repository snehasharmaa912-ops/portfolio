// ============ SPLASH ============
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  setTimeout(() => splash.classList.add('hide'), 2000);
});

// ============ CUSTOM CURSOR ============
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px';
});

function animateRing(){
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .chip, .cert-card, .project-card, .skill-tags span').forEach(el => {
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
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x*4}deg) rotateX(${-y*4}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
  });
});

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
    `https://leetcode-stats-api.herokuapp.com/${username}`,
    `https://alfa-leetcode-api.onrender.com/${username}/solved`
  ];
  for (const url of endpoints) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const solved = data.totalSolved || data.solvedProblem || null;
      if (solved) { animateCount(el, solved); return; }
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
