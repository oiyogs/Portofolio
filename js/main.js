/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
const progressBar = document.createElement('div');
progressBar.id = 'scrollProgress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop    = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (scrollTop / scrollHeight * 100) + '%';
});

/* ============================================================
   NAVBAR — scroll effect & active link highlight
   ============================================================ */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const hamburger    = document.getElementById('hamburger');
const navLinksList = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksList.classList.toggle('open');
});

navLinksList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksList.classList.remove('open');
  });
});

/* ============================================================
   TYPEWRITER — hero roles
   ============================================================ */
const roles  = ['ML Models', 'Data Insights', 'AI Solutions', 'Smart Dashboards'];
const target = document.getElementById('roleDynamic');
let   roleIndex = 0, charIndex = 0, isDeleting = false;

function typeWriter() {
  const current = roles[roleIndex];
  target.textContent = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length + 1) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex  = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeWriter, delay);
}
typeWriter();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   SKILL BAR ANIMATION
   ============================================================ */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

/* ============================================================
   EXPERIENCE TABS
   ============================================================ */
const tabBtns      = document.querySelectorAll('.tab-btn');
const workTimeline = document.getElementById('workTimeline');
const orgTimeline  = document.getElementById('orgTimeline');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (btn.dataset.tab === 'work') {
      workTimeline.classList.remove('hidden');
      orgTimeline.classList.add('hidden');
    } else {
      orgTimeline.classList.remove('hidden');
      workTimeline.classList.add('hidden');
    }
  });
});

/* ============================================================
   PROJECT FILTER
   ============================================================ */
const filterBtns   = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const cats = card.dataset.category || '';
      if (filter === 'all' || cats.includes(filter)) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});

/* ============================================================
   PARTICLE CANVAS (Hero background)
   ============================================================ */
const canvas = document.getElementById('particleCanvas');
const ctx    = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x       = Math.random() * canvas.width;
    this.y       = Math.random() * canvas.height;
    this.size    = Math.random() * 1.5 + 0.5;
    this.speedX  = (Math.random() - 0.5) * 0.4;
    this.speedY  = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(79,156,249,${this.opacity})`;
    ctx.fill();
  }
}

const particles = Array.from({ length: 80 }, () => new Particle());

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx   = particles[i].x - particles[j].x;
      const dy   = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(79,156,249,${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth   = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ============================================================
   CONTACT FORM — toast feedback (no backend required)
   ============================================================ */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  fetch('https://formspree.io/f/xlgvgary', {
    method: 'POST',
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      showToast("Message sent! I'll get back to you soon.", 'success');
      this.reset();
    } else {
      showToast('Oops! Something went wrong. Please try again.', 'error');
    }
  })
  .catch(() => showToast('Oops! Something went wrong. Please try again.', 'error'))
  .finally(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  });
});

/* ============================================================
   SMOOTH SCROLL for anchor links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetEl = document.querySelector(this.getAttribute('href'));
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
