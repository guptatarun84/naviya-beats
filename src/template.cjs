/* ============================================================
   NAVIYA BEATS — page template. Edit copy in src/content.js
   Simple, calm one-pager: hero, about, classes, kathak,
   testimonials, contact. No marquee, no heavy effects.
   ============================================================ */
const c = require("./content.js");

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const ICONS = {
  spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/>',
  music: '<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
  heart: '<path d="M20.8 5.6a5 5 0 00-7.1 0L12 7.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21.5l8.8-8.8a5 5 0 000-7.1z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>',
  facebook: '<path d="M15 3h-2.5A4.5 4.5 0 008 7.5V10H5.5v4H8v7h4v-7h3l.8-4H12V7.5c0-.8.4-1 1-1h2V3z"/>',
  mail: '<rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/>',
  pin: '<path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};

const icon = (name, cls = "ico") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

/* ---------- pieces ---------- */

const navLinks = c.nav
  .map((l) => `<a class="nav-link" href="${esc(l.href)}">${esc(l.label)}</a>`)
  .join("\n        ");

const navMobileLinks = c.nav
  .map((l) => `<a class="m-link" href="${esc(l.href)}">${esc(l.label)}</a>`)
  .join("\n        ");

const stats = c.hero.stats
  .map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`)
  .join("\n          ");

const features = c.about.features
  .map(
    (f) => `<li class="feature reveal">
            <span class="feature-ico">${icon(f.icon)}</span>
            <div><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></div>
          </li>`
  )
  .join("\n          ");

const aboutImages = c.about.images
  .map(
    (im, i) => `<figure class="about-img about-img--${i + 1} reveal">
              <img src="${esc(im.src)}" alt="${esc(im.alt)}" loading="lazy" decoding="async" />
            </figure>`
  )
  .join("\n            ");

const classCards = c.classes.items
  .map(
    (k, i) => `<article class="card reveal" style="--i:${i}">
            <div class="card-media">
              <img src="${esc(k.image)}" alt="${esc(k.name)}" loading="lazy" decoding="async" />
            </div>
            <div class="card-body">
              <p class="card-level">${esc(k.level)}</p>
              <h3>${esc(k.name)}</h3>
              <p class="card-when">${icon("clock", "ico ico-sm")} ${esc(k.when)}</p>
              <p>${esc(k.text)}</p>
              <a class="card-link" href="#contact">Ask about this class ${icon("arrow", "ico ico-sm")}</a>
            </div>
          </article>`
  )
  .join("\n          ");

const kathakTerms = c.kathak.terms
  .map((t) => `<li class="term reveal"><b>${esc(t.word)}</b><span>${esc(t.meaning)}</span></li>`)
  .join("\n              ");

const testimonials = c.testimonials.items
  .map(
    (t, i) => `<figure class="quote reveal" style="--i:${i}">
            <blockquote>“${esc(t.quote)}”</blockquote>
            <figcaption>
              <span class="avatar" aria-hidden="true">${esc(t.initials)}</span>
              <span><b>${esc(t.name)}</b><small>${esc(t.role)}</small></span>
            </figcaption>
          </figure>`
  )
  .join("\n          ");

const socials = c.social
  .map(
    (s) => `<a class="social reveal" href="${esc(s.href)}" target="_blank" rel="noopener">
            ${icon(s.icon, "ico social-ico")}
            <span><b>${esc(s.label)}</b><small>${esc(s.handle)}</small></span>
          </a>`
  )
  .join("\n            ");

const footerSocials = c.social
  .map(
    (s) => `<a class="foot-social" href="${esc(s.href)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">${icon(s.icon)}</a>`
  )
  .join("\n            ");

const contactMeta = [
  c.contact.email
    ? `<li>${icon("mail")}<a href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a></li>`
    : "",
  c.contact.phone ? `<li>${icon("mail")}<a href="tel:${esc(c.contact.phone)}">${esc(c.contact.phone)}</a></li>` : "",
  c.contact.location ? `<li>${icon("pin")}<span>${esc(c.contact.location)}</span></li>` : "",
  c.contact.hours ? `<li>${icon("clock")}<span>${esc(c.contact.hours)}</span></li>` : "",
]
  .filter(Boolean)
  .join("\n              ");

const t = c.theme;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(c.name)} — ${esc(c.tagline)}</title>
<meta name="description" content="${esc(c.hero.sub)}" />
<meta name="theme-color" content="${esc(t.ink)}" />
<meta property="og:title" content="${esc(c.name)} — ${esc(c.tagline)}" />
<meta property="og:description" content="${esc(c.hero.sub)}" />
<meta property="og:type" content="website" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=${esc(t.fontDisplay.replace(/ /g, "+"))}:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=${esc(t.fontBody.replace(/ /g, "+"))}:wght@300;400;500;600&display=swap" rel="stylesheet" />
<style>
:root{
  --ink:${t.ink};
  --ink-2:${t.ink2};
  --cream:${t.cream};
  --accent:${t.saffron};
  --accent-2:${t.coral};
  --gold:${t.gold};
  --muted:color-mix(in srgb, ${t.cream} 64%, transparent);
  --line:color-mix(in srgb, ${t.cream} 13%, transparent);
  --font-d:"${t.fontDisplay}", Georgia, serif;
  --font-b:"${t.fontBody}", system-ui, -apple-system, sans-serif;
  --r-lg:20px; --r-md:14px; --r-sm:10px;
  --maxw:1080px;
  --pad:clamp(20px, 5vw, 48px);
  --nav-h:66px;
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth; -webkit-text-size-adjust:100%}
body{
  margin:0; background:var(--ink); color:var(--cream);
  font-family:var(--font-b); font-size:clamp(15px,1.05vw,16.5px); line-height:1.7;
  -webkit-font-smoothing:antialiased; overflow-x:hidden;
}
img{max-width:100%; display:block}
a{color:inherit; text-decoration:none}
h1,h2,h3{font-family:var(--font-d); font-weight:500; line-height:1.1; letter-spacing:-.02em; margin:0}
p{margin:0}
::selection{background:var(--accent); color:#1a0f08}
.ico{width:18px;height:18px;flex:none}
.ico-sm{width:14px;height:14px}

/* ---------- layout ---------- */
.wrap{width:min(100% - 2*var(--pad), var(--maxw)); margin-inline:auto; position:relative; z-index:1}
section{padding-block:clamp(56px,8vw,104px); position:relative; z-index:1}
section + section{border-top:1px solid var(--line)}
.eyebrow{
  display:block; margin:0 0 .9rem;
  font-size:.7rem; font-weight:500; letter-spacing:.2em; text-transform:uppercase;
  color:var(--gold);
}
.section-head{max-width:600px; margin-bottom:clamp(28px,4vw,44px)}
.section-head h2{font-size:clamp(1.7rem,4vw,2.6rem)}
.section-head p{color:var(--muted); margin-top:.9rem}

/* ---------- buttons ---------- */
.btn{
  display:inline-flex; align-items:center; justify-content:center; gap:.55rem;
  padding:.85rem 1.5rem; border-radius:8px; border:1px solid transparent;
  font-family:var(--font-b); font-size:.92rem; font-weight:500;
  cursor:pointer; transition:background .2s, border-color .2s, color .2s, transform .2s;
}
.btn--primary{background:var(--accent); color:#1a0f08}
.btn--primary:hover{background:var(--gold); transform:translateY(-1px)}
.btn--ghost{background:transparent; color:var(--cream); border-color:color-mix(in srgb, var(--cream) 30%, transparent)}
.btn--ghost:hover{border-color:var(--cream); background:color-mix(in srgb, var(--cream) 7%, transparent)}
.btn:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible,button:focus-visible{
  outline:2px solid var(--gold); outline-offset:3px;
}

/* ---------- nav ---------- */
.nav{
  position:sticky; top:0; z-index:50; height:var(--nav-h);
  display:flex; align-items:center;
  background:color-mix(in srgb, var(--ink) 72%, transparent);
  border-bottom:1px solid transparent;
  transition:background .3s, border-color .3s, backdrop-filter .3s;
}
.nav.is-stuck{
  background:color-mix(in srgb, var(--ink) 94%, transparent);
  backdrop-filter:blur(14px);
  border-bottom-color:var(--line);
}
.nav-inner{display:flex; align-items:center; justify-content:space-between; gap:1rem; width:100%}
.brand{display:flex; align-items:center; gap:.65rem; font-family:var(--font-d); font-size:1.05rem; letter-spacing:-.01em}
.brand-mark{
  width:34px;height:34px;border-radius:8px; display:grid; place-items:center;
  background:var(--accent); color:#1a0f08; font-family:var(--font-b);
  font-size:.76rem; font-weight:600; letter-spacing:.01em;
}
.brand small{display:block; font-family:var(--font-b); font-size:.56rem; font-weight:400; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); line-height:1; margin-top:3px}
.nav-links{display:none; gap:.3rem; align-items:center}
.nav-link{
  padding:.45rem .7rem; border-radius:6px; font-size:.87rem; color:var(--muted);
  transition:color .2s, background .2s;
}
.nav-link:hover,.nav-link.active{color:var(--cream); background:color-mix(in srgb, var(--cream) 7%, transparent)}
.nav-actions{display:flex; align-items:center; gap:.5rem}
.nav-cta{display:none; padding:.6rem 1.1rem; font-size:.85rem}
.burger{
  width:38px;height:38px;border-radius:8px; display:grid; place-items:center; gap:5px;
  background:transparent; border:1px solid var(--line); color:var(--cream); cursor:pointer;
}
.burger span{display:block; width:15px; height:1.5px; background:currentColor; border-radius:2px; transition:transform .25s, opacity .2s}
.burger[aria-expanded="true"] span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.burger[aria-expanded="true"] span:nth-child(2){opacity:0}
.burger[aria-expanded="true"] span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
.mobile-menu{
  position:fixed; inset:var(--nav-h) 0 auto 0; z-index:49; padding:1rem var(--pad) 1.6rem;
  background:color-mix(in srgb, var(--ink) 98%, transparent);
  border-bottom:1px solid var(--line); display:grid; gap:.1rem;
  transform:translateY(-8px); opacity:0; pointer-events:none; transition:opacity .25s, transform .25s;
}
.mobile-menu.open{opacity:1; transform:none; pointer-events:auto}
.m-link{padding:.8rem .1rem; font-family:var(--font-d); font-size:1.2rem; border-bottom:1px solid var(--line)}
.mobile-menu .btn{margin-top:1rem}

/* ---------- hero ---------- */
.hero{
  position:relative; display:flex; align-items:flex-end; min-height:min(80svh,700px);
  padding-block:0; margin-top:calc(-1 * var(--nav-h));
  padding-top:calc(var(--nav-h) + 3rem); overflow:hidden;
}
.hero-media{position:absolute; inset:0; z-index:-2}
.hero-media img,.hero-media video{
  width:100%; height:100%; object-fit:cover; object-position:${esc(c.hero.imagePosition || "50% 45%")};
}
.hero-media::after{
  content:""; position:absolute; inset:0;
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--ink) 94%, transparent) 0%, color-mix(in srgb, var(--ink) 62%, transparent) 48%, color-mix(in srgb, var(--ink) 25%, transparent) 100%),
    linear-gradient(180deg, color-mix(in srgb, var(--ink) 70%, transparent) 0%, transparent 30%, color-mix(in srgb, var(--ink) 65%, transparent) 80%, var(--ink) 100%);
}
.hero-inner{padding-bottom:clamp(2.4rem,6vw,4rem); max-width:620px}
.hero h1{
  font-size:clamp(2.3rem, 7vw, 4.2rem); font-weight:500; letter-spacing:-.03em; margin-top:.1rem;
}
.hero h1 em{font-style:italic; color:var(--gold)}
.hero p.lede{color:color-mix(in srgb, var(--cream) 82%, transparent); margin-top:1.1rem; max-width:42ch}
.hero-cta{display:flex; flex-wrap:wrap; gap:.6rem; margin-top:1.7rem}
.hero-stats{
  display:flex; flex-wrap:wrap; gap:clamp(1.4rem,5vw,3rem);
  margin-top:clamp(1.8rem,4vw,2.6rem); padding-top:1.3rem; border-top:1px solid var(--line);
}
.stat b{display:block; font-family:var(--font-d); font-size:1.4rem; line-height:1.1; color:var(--gold)}
.stat span{font-size:.72rem; letter-spacing:.1em; text-transform:uppercase; color:var(--muted)}

/* ---------- about ---------- */
.about-grid{display:grid; gap:clamp(2rem,5vw,3.5rem); align-items:center}
.about-media{display:grid; grid-template-columns:1.1fr .9fr; gap:clamp(.5rem,1.4vw,0.8rem)}
.about-img{margin:0; border-radius:var(--r-md); overflow:hidden; background:var(--ink-2)}
.about-img img{width:100%; height:100%; object-fit:cover}
.about-img--1{grid-row:span 2; aspect-ratio:3/4}
.about-img--2,.about-img--3{aspect-ratio:4/3}
.about-img--2{margin-top:clamp(.8rem,3vw,1.8rem)}
.about-body p{color:var(--muted); margin-top:.9rem}
.features{list-style:none; padding:0; margin:1.8rem 0 0; display:grid; gap:0}
.feature{display:flex; gap:.9rem; padding:.9rem 0; border-top:1px solid var(--line)}
.feature:last-child{border-bottom:1px solid var(--line)}
.feature-ico{
  width:34px;height:34px;flex:none; border-radius:8px; display:grid; place-items:center;
  background:color-mix(in srgb, var(--cream) 5%, transparent); border:1px solid var(--line); color:var(--gold);
}
.feature h3{font-size:.98rem; font-weight:500; font-family:var(--font-b); letter-spacing:0}
.feature p{font-size:.86rem; color:var(--muted); margin-top:.1rem}

/* ---------- classes ---------- */
.cards{display:grid; gap:clamp(1rem,2.4vw,1.4rem); grid-template-columns:1fr}
.card{
  border-radius:var(--r-lg); overflow:hidden; background:var(--ink-2);
  border:1px solid var(--line); display:flex; flex-direction:column;
  transition:border-color .25s, transform .25s;
}
.card:hover{border-color:color-mix(in srgb, var(--gold) 40%, transparent); transform:translateY(-3px)}
.card-media{aspect-ratio:16/10; overflow:hidden; background:var(--ink)}
.card-media img{width:100%;height:100%;object-fit:cover}
.card-body{padding:1.2rem 1.3rem 1.4rem; display:flex; flex-direction:column; gap:.4rem; flex:1}
.card-level{
  font-size:.66rem; letter-spacing:.16em; text-transform:uppercase; color:var(--gold);
  margin:0;
}
.card-body h3{font-size:1.25rem}
.card-when{display:flex; align-items:center; gap:.4rem; font-size:.8rem; color:var(--muted)}
.card-body p{font-size:.9rem; color:var(--muted)}
.card-link{
  margin-top:auto; padding-top:.9rem; display:inline-flex; align-items:center; gap:.35rem;
  font-size:.85rem; font-weight:500; color:var(--gold);
}
.card-link .ico{transition:transform .2s}
.card:hover .card-link .ico{transform:translateX(3px)}

/* ---------- kathak ---------- */
.kathak-grid{display:grid; gap:clamp(1.8rem,5vw,3rem); align-items:center}
.kathak-figure{margin:0; border-radius:var(--r-lg); overflow:hidden; background:var(--ink-2)}
.kathak-figure img{width:100%; aspect-ratio:4/5; object-fit:cover; object-position:50% 20%}
.kathak-body h2{font-size:clamp(1.7rem,4vw,2.5rem)}
.kathak-body h2 em{font-style:italic; color:var(--gold)}
.kathak-body p{color:var(--muted); margin-top:.9rem}
.terms{list-style:none; padding:0; margin:1.6rem 0 0; display:flex; flex-wrap:wrap; gap:.5rem}
.term{
  display:flex; flex-direction:column; gap:.05rem; padding:.55rem .9rem; border-radius:8px;
  border:1px solid var(--line); background:color-mix(in srgb, var(--cream) 4%, transparent);
}
.term b{font-family:var(--font-d); font-size:.95rem; font-weight:500}
.term span{font-size:.68rem; letter-spacing:.08em; text-transform:uppercase; color:var(--muted)}
.kathak-cta{margin-top:1.7rem}

/* ---------- testimonials ---------- */
.quotes{display:grid; gap:clamp(1rem,2.4vw,1.3rem); grid-template-columns:1fr}
.quote{
  margin:0; padding:clamp(1.2rem,2.6vw,1.6rem); border-radius:var(--r-md);
  border:1px solid var(--line); background:color-mix(in srgb, var(--cream) 3%, transparent);
  display:flex; flex-direction:column; gap:.9rem;
}
.quote blockquote{
  margin:0; font-family:var(--font-d); font-size:1.02rem; line-height:1.6;
  color:color-mix(in srgb, var(--cream) 90%, transparent);
}
.quote figcaption{display:flex; align-items:center; gap:.65rem; margin-top:auto}
.avatar{
  width:34px;height:34px;border-radius:50%; flex:none; display:grid; place-items:center;
  font-size:.7rem; font-weight:600; color:#1a0f08; background:var(--accent);
}
.quote figcaption b{display:block; font-size:.87rem; font-weight:500}
.quote figcaption small{color:var(--muted); font-size:.76rem}

/* ---------- contact ---------- */
.contact-grid{display:grid; gap:clamp(2rem,5vw,3rem); align-items:start}
.contact-meta{list-style:none; padding:0; margin:1.6rem 0 0; display:grid; gap:.8rem}
.contact-meta li{display:flex; align-items:flex-start; gap:.7rem; font-size:.9rem; color:var(--muted)}
.contact-meta .ico{color:var(--gold); margin-top:.2rem}
.contact-meta a:hover{color:var(--cream); text-decoration:underline; text-underline-offset:3px}
.socials{display:grid; gap:.5rem; margin-top:1.6rem}
.social{
  display:flex; align-items:center; gap:.75rem; padding:.6rem .85rem; border-radius:var(--r-sm);
  border:1px solid var(--line); transition:border-color .2s, background .2s;
}
.social:hover{border-color:color-mix(in srgb, var(--gold) 40%, transparent); background:color-mix(in srgb, var(--cream) 4%, transparent)}
.social-ico{color:var(--gold)}
.social b{display:block; font-size:.86rem; font-weight:500}
.social small{color:var(--muted); font-size:.74rem}

.form-card{
  padding:clamp(1.3rem,3vw,1.9rem); border-radius:var(--r-lg);
  background:var(--ink-2); border:1px solid var(--line);
}
.field{margin-bottom:.9rem}
.field label{display:block; font-size:.72rem; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); margin-bottom:.35rem}
.field input,.field textarea{
  width:100%; padding:.75rem .9rem; border-radius:var(--r-sm);
  background:var(--ink); border:1px solid var(--line); color:var(--cream);
  font-family:inherit; font-size:.93rem; transition:border-color .2s;
}
.field textarea{min-height:110px; resize:vertical}
.field input::placeholder,.field textarea::placeholder{color:color-mix(in srgb, var(--cream) 32%, transparent)}
.field input:focus,.field textarea:focus{outline:none; border-color:var(--accent)}
.form-note{font-size:.78rem; color:var(--muted); margin-top:.8rem}
.form-msg{
  display:none; margin-top:.9rem; padding:.75rem .9rem; border-radius:var(--r-sm);
  font-size:.86rem; background:color-mix(in srgb, var(--gold) 12%, transparent);
  border:1px solid color-mix(in srgb, var(--gold) 35%, transparent); color:var(--cream);
}
.form-msg.show{display:block}
.signup{margin-top:1.4rem; padding-top:1.2rem; border-top:1px solid var(--line)}
.signup h3{font-size:.9rem; font-family:var(--font-b); font-weight:500; letter-spacing:0}
.signup-row{display:flex; gap:.5rem; margin-top:.6rem; flex-wrap:wrap}
.signup-row input{
  flex:1 1 150px; padding:.7rem .9rem; border-radius:var(--r-sm);
  background:var(--ink); border:1px solid var(--line); color:var(--cream);
  font-family:inherit; font-size:.88rem;
}
.signup-row input:focus{outline:none; border-color:var(--accent)}
.signup-row .btn{padding:.7rem 1.1rem; font-size:.84rem}

/* ---------- footer ---------- */
.footer{border-top:1px solid var(--line); padding-block:clamp(2rem,4vw,2.8rem); position:relative; z-index:1}
.footer-inner{display:grid; gap:1.6rem}
.footer-brand p{color:var(--muted); font-size:.87rem; max-width:32ch; margin-top:.8rem}
.foot-socials{display:flex; gap:.45rem; margin-top:1rem}
.foot-social{
  width:36px;height:36px;border-radius:8px; display:grid; place-items:center;
  border:1px solid var(--line); color:var(--muted);
  transition:color .2s, border-color .2s;
}
.foot-social:hover{color:var(--gold); border-color:color-mix(in srgb, var(--gold) 40%, transparent)}
.footer-links{display:flex; flex-wrap:wrap; gap:.4rem 1.2rem; align-content:start}
.footer-links a{font-size:.85rem; color:var(--muted); transition:color .2s}
.footer-links a:hover{color:var(--cream)}
.footer-bottom{
  margin-top:1.6rem; padding-top:1.2rem; border-top:1px solid var(--line);
  display:flex; flex-wrap:wrap; gap:.5rem 1.2rem; justify-content:space-between;
  font-size:.76rem; color:color-mix(in srgb, var(--cream) 42%, transparent);
}

/* ---------- reveal (gentle) ---------- */
.reveal{opacity:0; transform:translateY(14px); transition:opacity .6s ease, transform .6s ease; transition-delay:calc(var(--i,0) * 70ms)}
.reveal.in{opacity:1; transform:none}

/* ---------- responsive ---------- */
@media (min-width:600px){
  .cards{grid-template-columns:repeat(2,1fr)}
  .quotes{grid-template-columns:repeat(2,1fr)}
  .quotes .quote:last-child{grid-column:1 / -1}
  .socials{grid-template-columns:repeat(2,1fr)}
}
@media (min-width:900px){
  :root{--nav-h:72px}
  .nav-links{display:flex}
  .nav-cta{display:inline-flex}
  .burger{display:none}
  .mobile-menu{display:none}
  .about-grid{grid-template-columns:1fr 1fr}
  .cards{grid-template-columns:repeat(3,1fr)}
  .quotes{grid-template-columns:repeat(3,1fr)}
  .quotes .quote:last-child{grid-column:auto}
  .kathak-grid{grid-template-columns:.8fr 1.2fr}
  .contact-grid{grid-template-columns:.9fr 1.1fr}
  .footer-inner{grid-template-columns:1.4fr 1fr; align-items:start}
  .footer-links{justify-content:flex-end}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important}
  .reveal{opacity:1; transform:none}
}
</style>
</head>
<body>

<!-- ===== NAV ===== -->
<header class="nav" id="nav">
  <div class="wrap nav-inner">
    <a class="brand" href="#top" aria-label="${esc(c.name)} home">
      <span class="brand-mark">${esc(c.logoMark)}</span>
      <span>${esc(c.name)}<small>${esc(c.tagline)}</small></span>
    </a>
    <nav class="nav-links" aria-label="Main">
      ${navLinks}
    </nav>
    <div class="nav-actions">
      <a class="btn btn--primary nav-cta" href="${esc(c.navCta.href)}">${esc(c.navCta.label)}</a>
      <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu">
  ${navMobileLinks}
  <a class="btn btn--primary" href="${esc(c.navCta.href)}">${esc(c.navCta.label)}</a>
</div>

<!-- ===== HERO ===== -->
<section class="hero" id="top">
  <div class="hero-media">
    ${
      c.hero.video
        ? `<video autoplay muted loop playsinline poster="${esc(c.hero.poster)}"><source src="${esc(c.hero.video)}" type="video/mp4" /></video>`
        : `<img src="${esc(c.hero.image)}" alt="Dancer on stage" fetchpriority="high" />`
    }
  </div>
  <div class="wrap hero-inner">
    <p class="eyebrow">${esc(c.hero.eyebrow)}</p>
    <h1>Dance Your <em>Heart Out</em></h1>
    <p class="lede">${esc(c.hero.sub)}</p>
    <div class="hero-cta">
      <a class="btn btn--primary" href="${esc(c.hero.ctaPrimary.href)}">${esc(c.hero.ctaPrimary.label)}</a>
      <a class="btn btn--ghost" href="${esc(c.hero.ctaSecondary.href)}">${esc(c.hero.ctaSecondary.label)}</a>
    </div>
    <div class="hero-stats">
      ${stats}
    </div>
  </div>
</section>

<!-- ===== ABOUT ===== -->
<section id="about">
  <div class="wrap about-grid">
    <div class="about-media">
      ${aboutImages}
    </div>
    <div class="about-body">
      <p class="eyebrow">${esc(c.about.eyebrow)}</p>
      <h2 class="section-head" style="margin:0">${esc(c.about.title)}</h2>
      ${c.about.body.map((p) => `<p>${esc(p)}</p>`).join("\n      ")}
      <ul class="features">
          ${features}
      </ul>
    </div>
  </div>
</section>

<!-- ===== CLASSES ===== -->
<section id="classes">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${esc(c.classes.eyebrow)}</p>
      <h2>${esc(c.classes.title)}</h2>
      <p>${esc(c.classes.sub)}</p>
    </div>
    <div class="cards">
          ${classCards}
    </div>
  </div>
</section>

<!-- ===== KATHAK ===== -->
<section id="kathak">
  <div class="wrap kathak-grid">
    <figure class="kathak-figure reveal">
      <img src="${esc(c.kathak.image)}" alt="Kathak dancer holding a pose" loading="lazy" decoding="async" />
    </figure>
    <div class="kathak-body">
      <p class="eyebrow">${esc(c.kathak.eyebrow)}</p>
      <h2>${esc(c.kathak.titleLead)}<em>${esc(c.kathak.titleEm)}</em></h2>
      ${c.kathak.body.map((p) => `<p>${esc(p)}</p>`).join("\n      ")}
      <ul class="terms">
              ${kathakTerms}
      </ul>
      <div class="kathak-cta">
        <a class="btn btn--ghost" href="${esc(c.kathak.cta.href)}">${esc(c.kathak.cta.label)} ${icon("arrow", "ico ico-sm")}</a>
      </div>
    </div>
  </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section id="testimonials">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${esc(c.testimonials.eyebrow)}</p>
      <h2>${esc(c.testimonials.title)}</h2>
    </div>
    <div class="quotes">
          ${testimonials}
    </div>
  </div>
</section>

<!-- ===== CONTACT ===== -->
<section id="contact">
  <div class="wrap contact-grid">
    <div>
      <p class="eyebrow">${esc(c.contact.eyebrow)}</p>
      <h2 class="section-head" style="margin:0">${esc(c.contact.title)}</h2>
      <p style="color:var(--muted); margin-top:.9rem">${esc(c.contact.sub)}</p>
      <ul class="contact-meta">
              ${contactMeta}
      </ul>
      <div class="socials">
            ${socials}
      </div>
    </div>

    <div class="form-card">
      <form id="contactForm" action="${esc(c.contact.form.action)}" method="${esc(c.contact.form.method)}" novalidate>
        <div class="field">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div class="field">
          <label for="email">Email *</label>
          <input id="email" name="email" type="email" placeholder="you@email.com" required />
        </div>
        <div class="field">
          <label for="interest">Which class?</label>
          <input id="interest" name="interest" type="text" placeholder="Kathak, Bollywood or Folk & Garba" />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us a little about you — and when you'd like to come."></textarea>
        </div>
        <button class="btn btn--primary" type="submit" style="width:100%">${esc(c.contact.form.submitLabel)}</button>
        <p class="form-note">${esc(c.contact.form.note)}</p>
        <div class="form-msg" id="formMsg" role="status" aria-live="polite"></div>
      </form>

      <div class="signup">
        <h3>${esc(c.contact.signup.label)}</h3>
        <form class="signup-row" id="signupForm" action="${esc(c.contact.signup.action)}" method="POST" novalidate>
          <input type="email" name="email" placeholder="${esc(c.contact.signup.placeholder)}" aria-label="Email address" required />
          <button class="btn btn--primary" type="submit">${esc(c.contact.signup.button)}</button>
        </form>
        <div class="form-msg" id="signupMsg" role="status" aria-live="polite"></div>
      </div>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer">
  <div class="wrap">
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="brand" href="#top">
          <span class="brand-mark">${esc(c.logoMark)}</span>
          <span>${esc(c.name)}<small>${esc(c.tagline)}</small></span>
        </a>
        <p>${esc(c.footer.blurb)}</p>
        <div class="foot-socials">
            ${footerSocials}
        </div>
      </div>
      <nav class="footer-links" aria-label="Footer">
        ${c.nav.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join("\n        ")}
      </nav>
    </div>
    <div class="footer-bottom">
      <span>${esc(c.footer.copyright)}</span>
      <span>${esc(c.tagline)}</span>
    </div>
  </div>
</footer>

<script>
(() => {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 16);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // mobile menu
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  const closeMenu = () => { burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); document.body.style.overflow = ''; };
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open', !open);
    document.body.style.overflow = !open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  // gentle reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  // active nav link
  const sections = [...document.querySelectorAll('section[id]')];
  const links = [...document.querySelectorAll('.nav-link')];
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
  }

  // forms — demo mode when no endpoint is set
  const bind = (form, msg, text) => {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      const email = form.querySelector('input[type=email]');
      if (email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value)) {
        e.preventDefault(); email.focus();
        msg.textContent = 'Please enter a valid email address.';
        msg.classList.add('show');
        return;
      }
      if (!form.getAttribute('action')) {
        e.preventDefault();
        msg.textContent = text;
        msg.classList.add('show');
        form.reset();
      }
    });
  };
  bind(document.getElementById('contactForm'), document.getElementById('formMsg'), 'Thank you — we\\'ll be in touch soon. (Preview: add a form endpoint to receive messages.)');
  bind(document.getElementById('signupForm'), document.getElementById('signupMsg'), 'Thank you for subscribing. (Preview: add an endpoint to go live.)');
})();
</script>
</body>
</html>
`;

require("fs").writeFileSync(require("path").join(__dirname, "..", "index.html"), html);
console.log("Built index.html", (html.length / 1024).toFixed(1) + "KB");
