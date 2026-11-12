/* ═══════════════════════════════════════════════════════════
   FORTWORKXX — Application Router & Pages
   Hash-based SPA with cinematic page transitions
   ═══════════════════════════════════════════════════════════ */

(() => {
  const app = document.getElementById('app');
  const naira = (n) => '₦' + Number(n).toLocaleString('en-NG');

  /* ═══════════════ SHARED PARTIALS ═══════════════ */

  const pageHero = ({ crumb, title, lead, image, eyebrow }) => `
    <section class="page-hero">
      <div class="page-hero-bg">${image ? `<img src="${image}" alt="" loading="lazy" />` : ''}</div>
      <div class="container">
        <div class="breadcrumb reveal">${crumb}</div>
        ${eyebrow ? `<p class="eyebrow reveal" style="--d:.05s">${eyebrow}</p>` : ''}
        <h1 class="page-title reveal" style="--d:.1s">${title}</h1>
        ${lead ? `<p class="page-lead reveal" style="--d:.18s">${lead}</p>` : ''}
      </div>
    </section>`;

  const serviceCard = (s, i = 0) => `
    <a class="service-card reveal" style="--d:${(i * 0.05).toFixed(2)}s" href="#/service/${s.id}">
      <div class="sc-icon">${s.icon}</div>
      <span class="sc-division">${s.divisionName}</span>
      <h3 class="sc-title">${s.name}</h3>
      <p class="sc-desc">${s.description}</p>
      <span class="sc-more">Explore <span class="arrow">↗</span></span>
    </a>`;

  const divisionCard = (d, i = 0) => `
    <a class="division-card reveal ${d.wide ? 'wide' : ''}" style="--d:${(i * 0.08).toFixed(2)}s" href="#/division/${d.id}">
      <div class="dc-bg"><img src="${d.image}" alt="${d.name}" loading="lazy" /></div>
      <span class="dc-num">${d.num}</span>
      <span class="dc-tag">${d.tag}</span>
      <div>
        <h3 class="dc-title">${d.name.replace('Fortworkxx ', 'Fortworkxx <span>')} </span></h3>
        <p class="dc-desc">${d.description}</p>
        <div class="dc-services">${d.offerings.slice(0, 3).map((o) => `<span class="chip">${o}</span>`).join('')}</div>
        <span class="dc-link">Enter division <span class="arrow">↗</span></span>
      </div>
    </a>`;

  const projectCard = (p) => `
    <a class="project-card reveal" href="#/portfolio" data-cat="${p.cat}">
      <img src="${p.image}" alt="${p.title}" loading="lazy" />
      <span class="pc-open">↗</span>
      <div class="pc-veil">
        <span class="pc-cat">${p.cat} · ${p.year}</span>
        <h3 class="pc-title">${p.title}</h3>
        <p class="pc-meta">${p.meta}</p>
      </div>
    </a>`;

  const statsBand = () => `
    <div class="stats-band reveal">
      ${FW.stats.map((s) => `
        <div class="stat-cell">
          <b><span data-count="${s.value}" data-suffix="${s.suffix}">0</span></b>
          <span>${s.label}</span>
        </div>`).join('')}
    </div>`;

  const marquee = (items) => `
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        ${items.map((t) => `<span>${t}</span>`).join('')}
        ${items.map((t) => `<span>${t}</span>`).join('')}
      </div>
    </div>`;

  const testimonialCard = (t) => `
    <div class="testimonial reveal">
      <p class="t-quote">${t.quote}</p>
      <div class="t-stars">★★★★★</div>
      <div class="t-person">
        <span class="t-avatar">${t.initials}</span>
        <div><div class="t-name">${t.name}</div><div class="t-role">${t.role}</div></div>
      </div>
    </div>`;

  /* ═══════════════ HOME ═══════════════ */

  function pageHome() {
    return `
    <section class="hero">
      <div class="hero-bg"><img src="assets/img/hero.jpg" alt="" fetchpriority="high" /></div>
      <div class="hero-content">
        <p class="hero-eyebrow">A Multi-Disciplinary Brand</p>
        <h1 class="hero-title">
          <span class="line"><span style="--ld:.35s">Excellence</span></span>
          <span class="line"><span style="--ld:.5s">Beyond <em>Boundaries.</em></span></span>
        </h1>
        <p class="hero-sub">Technology. Creativity. Sound. Lifestyle. Performance. <strong>One vision.</strong> Unlimited possibilities — delivered to a single, exceptional standard.</p>
        <div class="hero-actions">
          <a class="btn btn-gold btn-lg magnetic" href="#/services">Explore Services</a>
          <a class="btn btn-outline btn-lg magnetic" href="#/bookings">Start a Project</a>
        </div>
      </div>
      <div class="scroll-hint">Scroll to discover</div>
      <div class="hero-stats">
        <div class="hero-stats-inner">
          ${FW.stats.map((s) => `
            <div class="hero-stat">
              <b><span data-count="${s.value}" data-suffix="${s.suffix}">0</span></b>
              <span>${s.label}</span>
            </div>`).join('')}
        </div>
      </div>
    </section>

    ${marquee(['Technology', 'Sound Engineering', 'Catering', 'Printing', 'Art', 'Cleaning', 'Music', 'Fitness'])}

    <section class="section">
      <div class="container intro-grid">
        <div class="reveal-l">
          <p class="eyebrow">The brand</p>
          <p class="intro-quote">One brand. Multiple industries. <em>One exceptional standard.</em></p>
          <div class="divider-x">✦</div>
          <p style="color:var(--muted);font-weight:300">Fortworkxx is a multi-disciplinary professional brand delivering technology solutions, creative production, lifestyle services, education and personal development to individuals, businesses and organisations.</p>
          <a class="btn btn-outline" href="#/about" style="margin-top:26px">Our Story</a>
        </div>
        <div class="intro-body reveal-r" style="--d:.15s">
          <p>From enterprise network rollouts and sold-out events to fine-dining catering, premium print, original artwork, spotless spaces, stage-ready performances and transformational fitness coaching — every Fortworkxx division operates with the same discipline.</p>
          <p>We organise eight service disciplines under five focused divisions, so you always know exactly who you are working with — and what standard to expect.</p>
          <p class="intro-sign">— The Fortworkxx Standard</p>
        </div>
      </div>
      <div class="container" style="margin-top:clamp(48px,7vh,80px)">${statsBand()}</div>
    </section>

    <section class="section" style="background:linear-gradient(180deg,transparent,rgba(23,58,128,0.06),transparent)">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow">Five divisions</p>
          <h2 class="section-title">The Fortworkxx <em>ecosystem</em></h2>
          <p class="section-lead">Eight disciplines, five divisions, one identity. Choose a division to explore its services, packages and booking options.</p>
        </div>
        <div class="divisions-grid">
          ${FW.divisions.map((d, i) => divisionCard(d, i)).join('')}
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Service disciplines</p>
          <h2 class="section-title">Eight ways we <em>serve</em></h2>
        </div>
        <div class="services-grid">
          ${FW.services.map((s, i) => serviceCard(s, i)).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Selected work</p>
          <h2 class="section-title">Featured <em>projects</em></h2>
        </div>
        <div class="projects-grid">
          ${FW.portfolio.slice(0, 6).map((p) => projectCard(p)).join('')}
        </div>
        <div style="text-align:center;margin-top:38px" class="reveal">
          <a class="btn btn-outline" href="#/portfolio">View Full Portfolio</a>
        </div>
      </div>
    </section>

    <section class="section" style="position:relative;overflow:hidden;border-block:1px solid var(--line)">
      <div class="container intro-grid">
        <div class="reveal-l" style="position:relative;z-index:1">
          <p class="eyebrow">Fortworkxx Academy</p>
          <h2 class="section-title">Learn the craft. <em>Master the standard.</em></h2>
          <p class="section-lead">Technology, creative arts and music training — taught by practising professionals through hands-on projects, assessments and certification.</p>
          <div class="hero-actions" style="opacity:1;animation:none">
            <a class="btn btn-gold" href="#/academy">Browse Courses</a>
            <a class="btn btn-ghost" href="#/bookings">Enquire About Training</a>
          </div>
        </div>
        <div class="reveal-r">
          <img src="assets/img/academy.jpg" alt="Fortworkxx Academy" loading="lazy" style="border:1px solid var(--line);filter:saturate(1.05)" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow">Why Fortworkxx</p>
          <h2 class="section-title">Built on <em>standards</em>, not shortcuts</h2>
        </div>
        <div class="why-grid">
          ${FW.why.map((w, i) => `
            <div class="why-card reveal" style="--d:${i * 0.07}s">
              <span class="why-num">${w.num}</span>
              <h3 class="why-title">${w.title}</h3>
              <p class="why-desc">${w.desc}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow">Client words</p>
          <h2 class="section-title">Trusted across <em>industries</em></h2>
        </div>
        <div class="testimonials-grid">
          ${FW.testimonials.map((t) => testimonialCard(t)).join('')}
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="cta-band reveal-scale">
          <p class="eyebrow" style="justify-content:center">Begin</p>
          <h2 class="section-title">Let's create something <em>exceptional.</em></h2>
          <div class="cta-actions">
            <a class="btn btn-gold btn-lg" href="#/bookings">Book a Service</a>
            <a class="btn btn-outline btn-lg" href="#/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </section>`;
  }

  /* ═══════════════ ABOUT ═══════════════ */

  function pageAbout() {
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>About',
      eyebrow: 'Our story',
      title: 'A house of <em>disciplines.</em>',
      lead: 'Fortworkxx exists to prove that excellence is a repeatable system — applied to technology, sound, hospitality, creativity and performance alike.',
      image: 'assets/img/hero.jpg',
    })}

    <section class="section">
      <div class="container intro-grid">
        <div class="reveal-l">
          <p class="eyebrow">The story</p>
          <p class="intro-quote">Built by a practitioner who refused to <em>choose one lane.</em></p>
        </div>
        <div class="intro-body reveal-r">
          <p>Fortworkxx began with a simple observation: the same discipline that makes a great engineer — diagnosis, precision, follow-through — makes a great sound engineer, chef, printer, artist, cleaner, performer and coach.</p>
          <p>What started as individual expertise across multiple crafts became a unified brand: five divisions, eight service disciplines, and one promise to every client.</p>
          <p class="intro-sign">Excellence Beyond Boundaries.</p>
        </div>
      </div>
      <div class="container" style="margin-top:clamp(48px,7vh,80px)">${statsBand()}</div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="why-grid">
          <div class="why-card reveal">
            <span class="why-num">Vision</span>
            <h3 class="why-title">A world-class services brand from Africa</h3>
            <p class="why-desc">To be recognised internationally for the quality, creativity and reliability of every Fortworkxx engagement.</p>
          </div>
          <div class="why-card reveal" style="--d:.1s">
            <span class="why-num">Mission</span>
            <h3 class="why-title">One standard across every discipline</h3>
            <p class="why-desc">To deliver technology, creative, hospitality and performance services that exceed expectations — consistently, transparently, beautifully.</p>
          </div>
          <div class="why-card reveal" style="--d:.2s">
            <span class="why-num">Values</span>
            <h3 class="why-title">Craft · Integrity · Growth</h3>
            <p class="why-desc">We do the work properly, we say what we will do and do it, and we invest in the people who learn from us.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">The divisions</p>
          <h2 class="section-title">Five houses, one <em>name</em></h2>
        </div>
        <div class="divisions-grid">
          ${FW.divisions.map((d) => divisionCard(d)).join('')}
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="cta-band reveal-scale">
          <h2 class="section-title">Work with the <em>standard.</em></h2>
          <div class="cta-actions">
            <a class="btn btn-gold btn-lg" href="#/bookings">Start a Project</a>
            <a class="btn btn-outline btn-lg" href="#/contact">Talk to Us</a>
          </div>
        </div>
      </div>
    </section>`;
  }

  /* ═══════════════ DIVISIONS ═══════════════ */

  function pageDivisions() {
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Divisions',
      eyebrow: 'Brand architecture',
      title: 'Five divisions. <em>Eight disciplines.</em>',
      lead: 'Rather than eight unrelated services, Fortworkxx organises its work into five focused divisions — each with its own identity inside one luxury system.',
      image: 'assets/img/portfolio.jpg',
    })}
    <section class="section">
      <div class="container">
        <div class="divisions-grid">
          ${FW.divisions.map((d, i) => divisionCard(d, i)).join('')}
        </div>
      </div>
    </section>
    <section class="section-tight">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">All services</p>
          <h2 class="section-title">Every discipline, one <em>click</em> away</h2>
        </div>
        <div class="services-grid">${FW.services.map(serviceCard).join('')}</div>
      </div>
    </section>`;
  }

  function pageDivision(id) {
    const d = FW.getDivision(id);
    if (!d) return page404();
    const services = FW.divisionServices(id);
    return `
    ${pageHero({
      crumb: `<a href="#/">Home</a><span>/</span><a href="#/divisions">Divisions</a><span>/</span>${d.short}`,
      eyebrow: `Division ${d.num}`,
      title: d.headline,
      lead: d.description,
      image: d.image,
    })}
    <section class="section">
      <div class="container">
        <div class="division-hero-card reveal-scale">
          <div class="dhc-img"><img src="${d.image}" alt="${d.name}" /></div>
          <div class="dhc-body">
            <span class="dhc-num">DIVISION ${d.num}</span>
            <h2 class="dhc-title">${d.name.replace('Fortworkxx ', 'Fortworkxx <br/><em>')} </em></h2>
            <p class="dhc-desc">${d.description}</p>
            <div class="dhc-identity"><i style="background:${d.tagColor}"></i>${d.identity}</div>
            <div class="dc-services" style="margin-top:22px">${d.offerings.map((o) => `<span class="chip">${o}</span>`).join('')}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Services in this division</p>
          <h2 class="section-title">What we <em>deliver</em></h2>
        </div>
        <div class="services-grid">${services.map(serviceCard).join('')}</div>
        ${services.length === 0 ? '<p class="section-lead">Services launching soon.</p>' : ''}
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="cta-band reveal-scale">
          <h2 class="section-title">Engage <em>${d.short}</em></h2>
          <div class="cta-actions">
            <a class="btn btn-gold btn-lg" href="#/bookings">Request a Quote</a>
            <a class="btn btn-outline btn-lg" href="#/contact">Ask a Question</a>
          </div>
        </div>
      </div>
    </section>`;
  }

  /* ═══════════════ SERVICE DETAIL ═══════════════ */

  function pageServices() {
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Services',
      eyebrow: 'Eight disciplines',
      title: 'Services engineered to an <em>exceptional</em> standard.',
      lead: 'Explore every Fortworkxx service — with offerings, process, packages and instant booking.',
      image: 'assets/img/hero.jpg',
    })}
    <section class="section">
      <div class="container">
        <div class="services-grid">${FW.services.map((s, i) => serviceCard(s, i)).join('')}</div>
      </div>
    </section>`;
  }

  function pageService(id) {
    const s = FW.getService(id);
    if (!s) return page404();
    const div = FW.getDivision(s.division);
    const related = FW.services.filter((x) => x.division === s.division && x.id !== s.id);
    return `
    ${pageHero({
      crumb: `<a href="#/">Home</a><span>/</span><a href="#/divisions">${div.short}</a><span>/</span>${s.name}`,
      eyebrow: s.divisionName,
      title: s.name.split(' ').slice(0, -1).join(' ') + ' <em>' + s.name.split(' ').slice(-1) + '</em>',
      lead: s.tagline,
      image: s.image,
    })}

    <section class="section">
      <div class="container svc-detail-grid">
        <div class="svc-body">
          <div class="reveal"><img src="${s.image}" alt="${s.name}" style="border:1px solid var(--line);margin-bottom:34px" /></div>
          ${s.long.map((p, i) => `<p class="reveal" style="--d:${i * 0.08}s">${p}</p>`).join('')}

          <h3 class="reveal">What's included</h3>
          <ul class="svc-list reveal">
            ${s.offerings.map((o) => `<li>${o}</li>`).join('')}
          </ul>

          <h3 class="reveal">How it works</h3>
          <div class="process-steps reveal">
            ${s.process.map((p) => `
              <div class="process-step">
                <div><h4>${p.t}</h4><p>${p.d}</p></div>
              </div>`).join('')}
          </div>

          <h3 class="reveal">Packages</h3>
          <div class="packages-grid reveal">
            ${s.packages.map((p) => `
              <div class="package-card ${p.featured ? 'featured' : ''}">
                ${p.featured ? '<span class="pkg-badge">Most requested</span>' : ''}
                <span class="pkg-name">${p.name}</span>
                <div class="pkg-price">${p.price} <small>${p.unit}</small></div>
                <p class="pkg-desc">${p.desc}</p>
                <ul class="pkg-features">${p.features.map((f) => `<li>${f}</li>`).join('')}</ul>
                <a class="btn ${p.featured ? 'btn-gold' : 'btn-outline'}" href="#/bookings?s=${s.id}">Book ${p.name}</a>
              </div>`).join('')}
          </div>
          <p class="aside-note reveal">All prices are indicative starting points. Final quotations are issued after assessment — catering is priced per guest; training per month.</p>
        </div>

        <aside class="svc-aside">
          <div class="aside-card gold reveal-r">
            <h4>Book ${s.name}</h4>
            <div class="price-row"><span>From</span><b>${s.packages[0].price} ${s.packages[0].unit}</b></div>
            <div class="price-row"><span>Response time</span><b>&lt; 24 hours</b></div>
            <div class="price-row"><span>Division</span><b>${div.short}</b></div>
            <a class="btn btn-gold" href="#/bookings?s=${s.id}" style="width:100%;margin-top:20px">Start Booking</a>
            <a class="btn btn-ghost" href="${FW.brand.whatsapp}" target="_blank" rel="noopener" style="width:100%;margin-top:12px">WhatsApp Us</a>
          </div>
          <div class="aside-card reveal-r" style="--d:.1s">
            <h4>Need advice?</h4>
            <p style="font-size:14px;color:var(--muted);font-weight:300">Not sure which package fits? Send us the details and we will recommend the right configuration — no obligation.</p>
            <a class="art-read" href="#/contact" style="margin-top:16px">Contact the team ↗</a>
          </div>
          ${related.length ? `
          <div class="aside-card reveal-r" style="--d:.15s">
            <h4>Related services</h4>
            ${related.map((r) => `<a class="footer-col" href="#/service/${r.id}" style="display:block;padding:7px 0;color:var(--muted);font-size:14px">${r.icon} &nbsp;${r.name}</a>`).join('')}
          </div>` : ''}
        </aside>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="cta-band reveal-scale">
          <h2 class="section-title">Ready for <em>${s.name.toLowerCase()}</em>?</h2>
          <div class="cta-actions">
            <a class="btn btn-gold btn-lg" href="#/bookings?s=${s.id}">Book Now</a>
            <a class="btn btn-outline btn-lg" href="#/portfolio">See Our Work</a>
          </div>
        </div>
      </div>
    </section>`;
  }

  /* ═══════════════ ACADEMY ═══════════════ */

  function pageAcademy() {
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Academy',
      eyebrow: 'Fortworkxx Academy',
      title: 'Education with a <em>signature standard.</em>',
      lead: 'Three departments — technology, creative arts and music — taught by practising professionals through projects, assessment and certification.',
      image: 'assets/img/academy.jpg',
    })}

    <section class="section-tight">
      <div class="container">
        <div class="dept-grid">
          ${FW.academy.departments.map((d, i) => `
            <div class="dept-card reveal" style="--d:${i * 0.1}s">
              <span class="dept-num">${d.num}</span>
              <h3 class="dept-title">${d.title}</h3>
              <p style="color:var(--muted);font-weight:300;font-size:14.5px;margin-top:10px;position:relative">${d.desc}</p>
              <ul class="dept-list">${d.items.map((it) => `<li>${it}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Course catalogue</p>
          <h2 class="section-title">Current <em>programmes</em></h2>
          <p class="section-lead">Cohorts run monthly. Enrol to reserve a seat — payment unlocks your student dashboard and course materials immediately.</p>
        </div>
        <div class="course-grid">
          ${FW.academy.courses.map((c, i) => `
            <article class="course-card reveal" style="--d:${i * 0.06}s">
              <div class="cc-img">
                <img src="${c.image}" alt="${c.title}" loading="lazy" />
                <span class="cc-level">${c.level}</span>
              </div>
              <div class="cc-body">
                <span class="cc-dept">${c.dept}</span>
                <h3 class="cc-title">${c.title}</h3>
                <p class="cc-desc">${c.desc}</p>
                <div class="cc-meta">
                  <span class="cc-price">${c.price}</span>
                  <span class="cc-duration">${c.duration}</span>
                </div>
                <a class="btn btn-outline btn-sm" href="#/bookings?s=tech" style="margin-top:16px">Enrol Now</a>
              </div>
            </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow">Student journey</p>
          <h2 class="section-title">From enquiry to <em>certificate</em></h2>
        </div>
        <div class="process-steps reveal" style="max-width:760px;margin-inline:auto">
          ${FW.academy.journey.map((j, i) => `
            <div class="process-step"><div><h4>${j}</h4></div></div>`).join('')}
        </div>
        <div class="cta-actions reveal" style="margin-top:40px">
          <a class="btn btn-gold" href="#/bookings?s=tech">Register Interest</a>
          <a class="btn btn-outline" href="#/contact">Request Syllabus</a>
        </div>
      </div>
    </section>`;
  }

  /* ═══════════════ PORTFOLIO ═══════════════ */

  function pagePortfolio() {
    const cats = ['All', ...Array.from(new Set(FW.portfolio.map((p) => p.cat)))];
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Portfolio',
      eyebrow: 'Selected work',
      title: 'Results across every <em>discipline.</em>',
      lead: 'A cross-section of Fortworkxx projects — filter by discipline to see the work that matches yours.',
      image: 'assets/img/portfolio.jpg',
    })}
    <section class="section">
      <div class="container">
        <div class="filter-bar reveal" id="portfolio-filters">
          ${cats.map((c, i) => `<button class="filter-pill ${i === 0 ? 'active' : ''}" data-filter="${c}">${c}</button>`).join('')}
        </div>
        <div class="projects-grid" id="portfolio-grid">
          ${FW.portfolio.map((p) => projectCard(p)).join('')}
        </div>
        <p id="portfolio-empty" style="display:none;text-align:center;color:var(--faint);padding:50px 0;font-style:italic">No projects in this category yet — check back soon.</p>
      </div>
    </section>
    <section class="section-tight">
      <div class="container">
        <div class="cta-band reveal-scale">
          <h2 class="section-title">Want work like <em>this?</em></h2>
          <div class="cta-actions">
            <a class="btn btn-gold btn-lg" href="#/bookings">Start a Project</a>
          </div>
        </div>
      </div>
    </section>`;
  }

  /* ═══════════════ MARKETPLACE ═══════════════ */

  function pageMarketplace() {
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Marketplace',
      eyebrow: 'Fortworkxx store',
      title: 'The <em>marketplace.</em>',
      lead: 'Physical craft and digital downloads — print packs, art prints, templates, e-books and more. Checkout activates with payment integration.',
      image: 'assets/img/div-creative.jpg',
    })}
    <section class="section">
      <div class="container">
        <div class="section-head reveal" style="display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap">
          <div>
            <p class="eyebrow">Products</p>
            <h2 class="section-title">Shop the <em>collection</em></h2>
          </div>
          <button class="btn btn-outline" id="open-cart">Cart (<span id="cart-label">0</span>)</button>
        </div>
        <div class="product-grid">
          ${FW.products.map((p, i) => `
            <article class="product-card reveal" style="--d:${i * 0.05}s">
              <div class="pd-img">
                <img src="${p.image}" alt="${p.title}" loading="lazy" />
                <span class="pd-kind ${p.kind}">${p.kind}</span>
              </div>
              <div class="pd-body">
                <span class="pd-cat">${p.cat}</span>
                <h3 class="pd-title">${p.title}</h3>
                <p class="pd-desc">${p.desc}</p>
                <div class="pd-foot">
                  <span class="pd-price">${naira(p.price)}</span>
                  <button class="btn btn-gold btn-sm add-cart" data-id="${p.id}">Add</button>
                </div>
              </div>
            </article>`).join('')}
        </div>
        <p class="aside-note reveal" style="margin-top:26px">Demo storefront — products and cart work in-browser. Live checkout requires a payment gateway (Paystack/Flutterwave); see the Launch Blueprint.</p>
      </div>
    </section>

    <div class="cart-drawer" id="cart-drawer" aria-hidden="true">
      <div class="cart-head">
        <h3>Your Cart</h3>
        <button class="cart-close" id="cart-close" aria-label="Close cart">✕</button>
      </div>
      <div class="cart-items" id="cart-items"></div>
      <div class="cart-foot">
        <div class="cart-total"><span>Total</span><b id="cart-total">₦0</b></div>
        <button class="btn btn-gold" id="checkout-btn">Proceed to Checkout</button>
        <p class="cart-note">Secure checkout activates once Paystack is connected.</p>
      </div>
    </div>`;
  }

  /* ═══════════════ BOOKINGS ═══════════════ */

  const bookingState = { step: 1, service: null, data: {} };

  function pageBookings(preset) {
    const presetValid = !!(preset && FW.getService(preset));
    bookingState.step = presetValid ? 2 : 1;
    bookingState.service = presetValid ? preset : null;
    bookingState.data = {};
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Bookings',
      eyebrow: 'Reserve a service',
      title: 'Book the <em>standard.</em>',
      lead: 'Choose a service, share the details, and receive a booking reference instantly. Our team confirms or quotes within 24 hours.',
      image: 'assets/img/div-performance.jpg',
    })}
    <section class="section">
      <div class="container booking-shell">
        <div>
          <div class="stepper" id="booking-stepper">
            ${['Service', 'Details', 'Schedule', 'Contact'].map((s, i) => `
              <span class="step-dot ${i === 0 ? 'active' : ''}" data-step="${i + 1}"><i>0${i + 1}</i>${s}</span>`).join('')}
          </div>
          <div class="form-panel" id="booking-panel"></div>
        </div>
        <aside class="booking-aside">
          <div class="summary-card">
            <h4>Booking Summary</h4>
            <div class="sum-row"><span>Service</span><b id="sum-service">—</b></div>
            <div class="sum-row"><span>Division</span><b id="sum-division">—</b></div>
            <div class="sum-row"><span>Date</span><b id="sum-date">—</b></div>
            <div class="sum-row"><span>Package</span><b id="sum-package">Standard enquiry</b></div>
            <div class="sum-row"><span>Status</span><b class="gold" id="sum-status">Draft</b></div>
            <p class="aside-note">No payment is taken now. You will receive a quotation or payment link after review.</p>
          </div>
          <div class="aside-card">
            <h4>Prefer to talk?</h4>
            <p style="font-size:14px;color:var(--muted);font-weight:300">Reach us directly on WhatsApp for same-day responses during business hours.</p>
            <a class="btn btn-ghost" href="${FW.brand.whatsapp}" target="_blank" rel="noopener" style="width:100%;margin-top:16px">Open WhatsApp</a>
          </div>
        </aside>
      </div>
    </section>`;
  }

  function renderBookingStep() {
    const panel = document.getElementById('booking-panel');
    if (!panel) return;
    const { step, service } = bookingState;
    const s = service ? FW.getService(service) : null;

    document.querySelectorAll('.step-dot').forEach((d) => {
      const n = Number(d.dataset.step);
      d.classList.toggle('active', n === step);
      d.classList.toggle('done', n < step);
    });

    if (step === 1) {
      panel.innerHTML = `
        <h3>Which service do you need?</h3>
        <p class="panel-sub">Select a discipline to load its specific booking fields.</p>
        <div class="svc-picker">
          ${FW.services.map((x) => `
            <button class="svc-option ${bookingState.service === x.id ? 'selected' : ''}" data-svc="${x.id}">
              <span class="so-icon">${x.icon}</span>
              <span class="so-name">${x.name}</span>
              <span class="so-division">${FW.getDivision(x.division).short}</span>
            </button>`).join('')}
        </div>
        <div class="form-error" id="bk-error"></div>`;
      panel.querySelectorAll('.svc-option').forEach((b) => {
        b.addEventListener('click', () => {
          bookingState.service = b.dataset.svc;
          panel.querySelectorAll('.svc-option').forEach((x) => x.classList.toggle('selected', x === b));
          updateSummary();
          setTimeout(() => { bookingState.step = 2; renderBookingStep(); }, 260);
        });
      });
    }

    if (step === 2) {
      if (!s) { bookingState.step = 1; return renderBookingStep(); }
      panel.innerHTML = `
        <h3>${s.name} details</h3>
        <p class="panel-sub">The more you share, the more accurate your quotation will be.</p>
        <div class="field-grid">
          ${s.bookingFields.map((f) => fieldHTML(f, bookingState.data)).join('')}
        </div>
        <div class="form-error" id="bk-error"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="bk-back">← Back</button>
          <button class="btn btn-gold" id="bk-next">Continue →</button>
        </div>`;
      wireFieldInputs();
      document.getElementById('bk-back').onclick = () => { bookingState.step = 1; renderBookingStep(); };
      document.getElementById('bk-next').onclick = () => {
        const missing = s.bookingFields.filter((f) => f.type !== 'textarea' && !String(bookingState.data[f.id] || '').trim());
        if (missing.length) {
          document.getElementById('bk-error').textContent = `Please complete: ${missing.map((m) => m.label).join(', ')}`;
          return;
        }
        bookingState.step = 3; renderBookingStep();
      };
    }

    if (step === 3) {
      panel.innerHTML = `
        <h3>When do you need us?</h3>
        <p class="panel-sub">Tell us the timing and choose a package so we can prioritise your request.</p>
        <div class="field-grid">
          <div class="field">
            <label for="bk-date">Preferred date *</label>
            <input type="date" id="bk-date" data-key="date" value="${bookingState.data.date || ''}" min="${new Date().toISOString().slice(0, 10)}" />
          </div>
          <div class="field">
            <label for="bk-time">Preferred time</label>
            <select id="bk-time" data-key="time">
              ${['Morning (8–12)', 'Afternoon (12–4)', 'Evening (4–8)', 'Flexible'].map((t) => `<option ${bookingState.data.time === t ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
          </div>
          <div class="field">
            <label for="bk-package">Package interest</label>
            <select id="bk-package" data-key="pkg">
              <option value="">Not sure — advise me</option>
              ${s ? s.packages.map((p) => `<option ${bookingState.data.pkg === p.name ? 'selected' : ''}>${p.name} — ${p.price} ${p.unit}</option>`).join('') : ''}
            </select>
          </div>
          <div class="field">
            <label for="bk-budget">Budget range (optional)</label>
            <select id="bk-budget" data-key="budget">
              ${['Under ₦50,000', '₦50,000 – ₦150,000', '₦150,000 – ₦500,000', '₦500,000+', 'Let the team advise'].map((b) => `<option ${bookingState.data.budget === b ? 'selected' : ''}>${b}</option>`).join('')}
            </select>
          </div>
          <div class="field full">
            <label for="bk-notes">Additional notes</label>
            <textarea id="bk-notes" data-key="notes" placeholder="Anything else we should know…">${bookingState.data.notes || ''}</textarea>
          </div>
        </div>
        <div class="form-error" id="bk-error"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="bk-back">← Back</button>
          <button class="btn btn-gold" id="bk-next">Continue →</button>
        </div>`;
      wireFieldInputs();
      document.getElementById('bk-back').onclick = () => { bookingState.step = 2; renderBookingStep(); };
      document.getElementById('bk-next').onclick = () => {
        if (!bookingState.data.date) { document.getElementById('bk-error').textContent = 'Please choose a preferred date.'; return; }
        bookingState.step = 4; renderBookingStep();
      };
    }

    if (step === 4) {
      panel.innerHTML = `
        <h3>Your contact details</h3>
        <p class="panel-sub">We will send your booking reference and next steps here.</p>
        <div class="field-grid">
          <div class="field"><label for="bk-name">Full name *</label><input id="bk-name" data-key="name" placeholder="Your full name" value="${bookingState.data.name || ''}" /></div>
          <div class="field"><label for="bk-email">Email *</label><input id="bk-email" type="email" data-key="email" placeholder="you@example.com" value="${bookingState.data.email || ''}" /></div>
          <div class="field"><label for="bk-phone">Phone / WhatsApp *</label><input id="bk-phone" data-key="phone" placeholder="+234…" value="${bookingState.data.phone || ''}" /></div>
          <div class="field"><label for="bk-location">Location</label><input id="bk-location" data-key="location" placeholder="City / address" value="${bookingState.data.location || ''}" /></div>
          <div class="field full">
            <label style="display:flex;gap:10px;align-items:center;text-transform:none;letter-spacing:0;font-size:13px;color:var(--muted);font-weight:400">
              <input type="checkbox" id="bk-consent" style="width:auto;accent-color:var(--gold)" ${bookingState.data.consent ? 'checked' : ''} />
              I agree to be contacted about this booking and accept the privacy policy.
            </label>
          </div>
        </div>
        <div class="form-error" id="bk-error"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="bk-back">← Back</button>
          <button class="btn btn-gold" id="bk-submit">Confirm Booking ✦</button>
        </div>`;
      wireFieldInputs();
      document.getElementById('bk-back').onclick = () => { bookingState.step = 3; renderBookingStep(); };
      document.getElementById('bk-submit').onclick = submitBooking;
    }

    if (step === 5) {
      const ref = bookingState.ref;
      panel.innerHTML = `
        <div class="booking-success">
          <div class="success-ring">✓</div>
          <h3>Booking received</h3>
          <div class="ref-box">${ref}</div>
          <p>Thank you, ${bookingState.data.name || 'valued client'}. Your ${s ? s.name : ''} request is in review. Our team will confirm availability or send your quotation within 24 hours — keep this reference for your records.</p>
          <div class="cta-actions" style="margin-top:30px">
            <a class="btn btn-gold" href="#/">Back to Home</a>
            <a class="btn btn-outline" href="#/services">Explore More Services</a>
          </div>
          <p class="aside-note" style="max-width:460px;margin:26px auto 0">Demo submission — connect the booking API (Supabase + email/WhatsApp webhook) to deliver this reference for real. See the Launch Blueprint.</p>
        </div>`;
      document.getElementById('sum-status').textContent = 'Submitted';
    }

    updateSummary();
  }

  function fieldHTML(f, data) {
    const val = data[f.id] || '';
    if (f.type === 'select') {
      return `<div class="field">
        <label for="f-${f.id}">${f.label} *</label>
        <select id="f-${f.id}" data-key="${f.id}">
          <option value="">Select…</option>
          ${f.options.map((o) => `<option ${val === o ? 'selected' : ''}>${o}</option>`).join('')}
        </select>
      </div>`;
    }
    if (f.type === 'textarea') {
      return `<div class="field full">
        <label for="f-${f.id}">${f.label}</label>
        <textarea id="f-${f.id}" data-key="${f.id}" placeholder="${f.ph || ''}">${val}</textarea>
      </div>`;
    }
    return `<div class="field">
      <label for="f-${f.id}">${f.label} *</label>
      <input id="f-${f.id}" type="${f.type || 'text'}" data-key="${f.id}" placeholder="${f.ph || ''}" value="${val}" />
    </div>`;
  }

  function wireFieldInputs() {
    document.querySelectorAll('#booking-panel [data-key]').forEach((el) => {
      el.addEventListener('input', () => { bookingState.data[el.dataset.key] = el.value; updateSummary(); });
      el.addEventListener('change', () => { bookingState.data[el.dataset.key] = el.value; updateSummary(); });
    });
  }

  function updateSummary() {
    const s = bookingState.service ? FW.getService(bookingState.service) : null;
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('sum-service', s ? s.name : '—');
    set('sum-division', s ? FW.getDivision(s.division).short : '—');
    set('sum-date', bookingState.data.date || '—');
    set('sum-package', bookingState.data.pkg || (s ? 'Standard enquiry' : '—'));
    if (bookingState.step < 5) set('sum-status', bookingState.step === 1 ? 'Draft' : 'In progress');
  }

  function submitBooking() {
    const d = bookingState.data;
    const err = document.getElementById('bk-error');
    if (!d.name || !d.email || !d.phone) { err.textContent = 'Name, email and phone are required.'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) { err.textContent = 'Please enter a valid email address.'; return; }
    if (!document.getElementById('bk-consent')?.checked) { err.textContent = 'Please accept the privacy policy to continue.'; return; }
    bookingState.ref = 'FW-' + Date.now().toString(36).toUpperCase().slice(-5) + '-' + Math.floor(Math.random() * 90 + 10);
    bookingState.step = 5;
    renderBookingStep();
    FX.toast('Booking <b>received</b> — reference generated.');
  }

  /* ═══════════════ INSIGHTS ═══════════════ */

  function pageInsights() {
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Insights',
      eyebrow: 'Articles & resources',
      title: 'Insights from the <em>workshop.</em>',
      lead: 'Practical writing on technology, sound, hospitality, creativity and performance — from the Fortworkxx team.',
      image: 'assets/img/div-tech.jpg',
    })}
    <section class="section">
      <div class="container">
        <div class="articles-grid">
          ${FW.articles.map((a, i) => `
            <article class="article-card reveal" style="--d:${i * 0.06}s">
              <div class="art-meta"><span class="art-cat">${a.cat}</span><span>${a.date}</span><span>${a.read} read</span></div>
              <h3 class="art-title">${a.title}</h3>
              <p class="art-excerpt">${a.excerpt}</p>
              <a class="art-read" href="#/contact">Read article <span>↗</span></a>
            </article>`).join('')}
        </div>
      </div>
    </section>`;
  }

  /* ═══════════════ CONTACT ═══════════════ */

  function pageContact() {
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Contact',
      eyebrow: 'Get in touch',
      title: 'Let\'s begin the <em>conversation.</em>',
      lead: 'Enquiries, quotations, partnerships or support — reach us through any channel below and we respond within one business day.',
      image: 'assets/img/hero.jpg',
    })}
    <section class="section">
      <div class="container contact-grid">
        <div class="reveal-l">
          <div class="channel">
            <span class="channel-icon">✆</span>
            <div><h4>WhatsApp</h4><p>Fastest response during business hours.<br/><a href="${FW.brand.whatsapp}" target="_blank" rel="noopener">Chat with us ↗</a></p></div>
          </div>
          <div class="channel">
            <span class="channel-icon">✉</span>
            <div><h4>Email</h4><p><a href="mailto:${FW.brand.email}">${FW.brand.email}</a><br/><a href="mailto:${FW.brand.bookingsEmail}">${FW.brand.bookingsEmail}</a></p></div>
          </div>
          <div class="channel">
            <span class="channel-icon">☎</span>
            <div><h4>Phone</h4><p><a href="tel:${FW.brand.phone.replace(/\s/g, '')}">${FW.brand.phone}</a></p></div>
          </div>
          <div class="channel">
            <span class="channel-icon">⌖</span>
            <div><h4>Location</h4><p>${FW.brand.location} — serving clients nationwide and remotely worldwide.</p></div>
          </div>
          <div class="channel" style="border-bottom:0">
            <span class="channel-icon">◈</span>
            <div><h4>Hours</h4><p>Monday – Saturday, 8:00 – 18:00 WAT<br/>Event services available on Sundays by arrangement.</p></div>
          </div>
        </div>

        <div class="contact-form-card reveal-r">
          <h3 class="section-title" style="font-size:clamp(28px,3vw,38px);margin-bottom:8px">Send an <em>enquiry</em></h3>
          <p class="panel-sub" style="color:var(--muted);font-weight:300;margin-bottom:26px">No account needed — just tell us what you need.</p>
          <form id="contact-form">
            <div class="field-grid">
              <div class="field"><label for="ct-name">Full name *</label><input id="ct-name" required placeholder="Your name" /></div>
              <div class="field"><label for="ct-email">Email *</label><input id="ct-email" type="email" required placeholder="you@example.com" /></div>
              <div class="field"><label for="ct-phone">Phone</label><input id="ct-phone" placeholder="+234…" /></div>
              <div class="field">
                <label for="ct-subject">Subject</label>
                <select id="ct-subject">
                  <option>General enquiry</option>
                  <option>Request a quotation</option>
                  <option>Training & Academy</option>
                  <option>Partnership</option>
                  <option>Support</option>
                </select>
              </div>
              <div class="field full"><label for="ct-msg">Message *</label><textarea id="ct-msg" required placeholder="How can we help?"></textarea></div>
            </div>
            <button class="btn btn-gold btn-lg" type="submit" style="margin-top:24px">Send Message</button>
            <p class="form-status" id="ct-status" role="status"></p>
          </form>
        </div>
      </div>
    </section>`;
  }

  /* ═══════════════ PORTAL / LEGAL / 404 ═══════════════ */

  function pagePortal() {
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Client Portal',
      eyebrow: 'Client account',
      title: 'Your Fortworkxx <em>dashboard.</em>',
      lead: 'Bookings, orders, invoices, course progress and support — all in one place.',
      image: 'assets/img/div-performance.jpg',
    })}
    <section class="section">
      <div class="container">
        <div class="stub-card reveal-scale">
          <span class="stub-badge">Stage 2 build</span>
          <h2 class="section-title">Portal launching <em>soon.</em></h2>
          <p class="section-lead" style="margin-inline:auto">The client portal (accounts, booking history, payments, receipts, course access) is part of Stage 2 of the Fortworkxx build plan. Public enquiries and bookings work today without an account.</p>
          <div class="cta-actions">
            <a class="btn btn-gold" href="#/bookings">Book a Service</a>
            <a class="btn btn-outline" href="#/contact">Contact Support</a>
          </div>
        </div>
      </div>
    </section>`;
  }

  function pageLegal() {
    return `
    ${pageHero({
      crumb: '<a href="#/">Home</a><span>/</span>Legal',
      eyebrow: 'Policies',
      title: 'Privacy & <em>terms.</em>',
      lead: 'Plain-language policies — final legal review required before launch.',
      image: 'assets/img/div-creative.jpg',
    })}
    <section class="section">
      <div class="container legal-body">
        <div class="stub-card reveal" style="margin-bottom:40px">
          <span class="stub-badge">Draft template</span>
          <p style="color:var(--muted);font-weight:300">These are working drafts for structure and intent. Have a Nigerian-qualified lawyer review them before go-live, especially for NDPA (Nigeria Data Protection Act) compliance.</p>
        </div>
        <h3 class="reveal">Privacy Policy</h3>
        <p class="reveal">Fortworkxx collects only the information you provide through booking, contact, enrolment and checkout forms — such as your name, contact details, service preferences and transaction records — in order to deliver the service you requested.</p>
        <ul class="reveal">
          <li>We do not sell your personal data.</li>
          <li>Payment details are processed by certified payment providers (Paystack/Flutterwave) and never stored on our servers.</li>
          <li>You may request access, correction or deletion of your data by emailing info@fortworkxx.com.</li>
          <li>Transactional emails (bookings, receipts) are sent as part of service delivery; marketing messages only with your consent.</li>
          <li>Data is retained only as long as needed for service delivery and legal obligations, in line with the Nigeria Data Protection Act (NDPA).</li>
        </ul>
        <h3 class="reveal">Terms of Service</h3>
        <p class="reveal">Quotations are valid for 14 days unless stated otherwise. Bookings are confirmed upon receipt of the required deposit or full payment. Cancellations more than 72 hours before service receive a full refund of deposits; inside 72 hours, deposits are non-refundable unless we cancel.</p>
        <ul class="reveal">
          <li>Prices quoted are in Nigerian Naira and may be revised if requirements change.</li>
          <li>Academy fees are non-refundable once course access has been granted, except where a cohort is cancelled by us.</li>
          <li>Marketplace digital goods are delivered after verified payment; physical goods ship per the delivery options at checkout.</li>
          <li>Portfolio images and brand assets remain the intellectual property of Fortworkxx and their respective clients.</li>
        </ul>
        <h3 class="reveal">Booking & Refund Policy</h3>
        <p class="reveal">Every booking receives a unique reference. Statuses move through: new request → quotation sent → awaiting payment → confirmed → in progress → completed. Cancellations, reschedules and refunds are handled through the same reference — contact bookings@fortworkxx.com or WhatsApp with your reference number.</p>
      </div>
    </section>`;
  }

  function page404() {
    return `
    <section class="page-hero" style="min-height:70vh;display:flex;align-items:center">
      <div class="container" style="text-align:center">
        <p class="eyebrow" style="justify-content:center">404</p>
        <h1 class="page-title" style="margin-inline:auto">This page moved <em>beyond boundaries.</em></h1>
        <p class="page-lead" style="margin-inline:auto">The link you followed does not exist — but everything else does.</p>
        <div class="cta-actions"><a class="btn btn-gold" href="#/">Return Home</a><a class="btn btn-outline" href="#/services">Browse Services</a></div>
      </div>
    </section>`;
  }

  /* ═══════════════ CART (marketplace) ═══════════════ */

  const cart = {
    items: JSON.parse(localStorage.getItem('fw_cart') || '[]'),
    save() { localStorage.setItem('fw_cart', JSON.stringify(this.items)); this.render(); },
    add(id) {
      const p = FW.products.find((x) => x.id === id);
      if (!p) return;
      const line = this.items.find((x) => x.id === id);
      if (line) line.qty += 1; else this.items.push({ id, qty: 1 });
      this.save();
      FX.toast(`<b>${p.title}</b> added to cart`);
    },
    remove(id) { this.items = this.items.filter((x) => x.id !== id); this.save(); },
    total() {
      return this.items.reduce((sum, line) => {
        const p = FW.products.find((x) => x.id === line.id);
        return sum + (p ? p.price * line.qty : 0);
      }, 0);
    },
    render() {
      const count = this.items.reduce((n, l) => n + l.qty, 0);
      document.querySelectorAll('#cart-label, .cart-count').forEach((el) => {
        el.textContent = count;
        if (el.classList.contains('cart-count')) el.classList.toggle('show', count > 0);
      });
      const box = document.getElementById('cart-items');
      if (!box) return;
      if (!this.items.length) {
        box.innerHTML = '<p class="cart-empty">Your cart is empty — add something beautiful.</p>';
      } else {
        box.innerHTML = this.items.map((line) => {
          const p = FW.products.find((x) => x.id === line.id);
          if (!p) return '';
          return `
            <div class="cart-item">
              <img src="${p.image}" alt="" />
              <div>
                <div class="ci-title">${p.title} ${line.qty > 1 ? `× ${line.qty}` : ''}</div>
                <div class="ci-price">${naira(p.price * line.qty)}</div>
              </div>
              <button class="ci-remove" data-remove="${p.id}">Remove</button>
            </div>`;
        }).join('');
        box.querySelectorAll('[data-remove]').forEach((b) => b.onclick = () => this.remove(b.dataset.remove));
      }
      const t = document.getElementById('cart-total');
      if (t) t.textContent = naira(this.total());
    },
  };

  function wireMarketplace() {
    const drawer = document.getElementById('cart-drawer');
    if (!drawer) return;
    cart.render();
    document.getElementById('open-cart').onclick = () => { drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); };
    document.getElementById('cart-close').onclick = () => { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); };
    document.querySelectorAll('.add-cart').forEach((b) => b.onclick = () => cart.add(b.dataset.id));
    document.getElementById('checkout-btn').onclick = () => {
      if (!cart.items.length) { FX.toast('Your cart is <b>empty</b>'); return; }
      FX.toast('Checkout activates after <b>Paystack</b> integration — see Launch Blueprint');
    };
  }

  /* ═══════════════ PORTFOLIO FILTER ═══════════════ */

  function wirePortfolio() {
    const bar = document.getElementById('portfolio-filters');
    if (!bar) return;
    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill');
      if (!btn) return;
      bar.querySelectorAll('.filter-pill').forEach((p) => p.classList.toggle('active', p === btn));
      const f = btn.dataset.filter;
      let visible = 0;
      document.querySelectorAll('#portfolio-grid .project-card').forEach((card) => {
        const show = f === 'All' || card.dataset.cat === f;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      const empty = document.getElementById('portfolio-empty');
      if (empty) empty.style.display = visible ? 'none' : 'block';
    });
  }

  /* ═══════════════ FORMS ═══════════════ */

  function wireForms() {
    const cf = document.getElementById('contact-form');
    if (cf) {
      cf.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('ct-status');
        status.textContent = 'Sending…';
        setTimeout(() => {
          status.textContent = '✓ Message queued. Connect the email API (Resend) to deliver for real — see the Launch Blueprint.';
          cf.reset();
          FX.toast('Enquiry <b>received</b> — we respond within 24 hours');
        }, 700);
      });
    }
    const nf = document.getElementById('newsletter-form');
    if (nf && !nf.dataset.wired) {
      nf.dataset.wired = '1';
      nf.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('newsletter-note').textContent = '✓ You are on the list. Connect Resend/Mailchimp for live subscriptions.';
        nf.reset();
      });
    }
  }

  /* ═══════════════ ROUTER ═══════════════ */

  const routes = {
    '': { render: pageHome, nav: '#/' },
    'about': { render: pageAbout, nav: '#/about' },
    'divisions': { render: pageDivisions, nav: '#/divisions' },
    'services': { render: pageServices, nav: '#/divisions' },
    'academy': { render: pageAcademy, nav: '#/academy' },
    'portfolio': { render: pagePortfolio, nav: '#/portfolio' },
    'marketplace': { render: pageMarketplace, nav: '#/marketplace' },
    'bookings': { render: (q) => pageBookings(q.get('s')), nav: '#/bookings' },
    'insights': { render: pageInsights, nav: '#/insights' },
    'contact': { render: pageContact, nav: '#/contact' },
    'portal': { render: pagePortal, nav: null },
    'legal': { render: pageLegal, nav: null },
  };

  let firstLoad = true;
  let lastRenderedHash = null;
  let renderQueue = Promise.resolve();

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, '');
    const [path, query] = raw.split('?');
    return { parts: path.split('/').filter(Boolean), query: new URLSearchParams(query || '') };
  }

  function resolve(parts, query) {
    const [head, arg] = parts;
    if (!head) return routes[''].render(query);
    if (head === 'division' && arg) return pageDivision(arg);
    if (head === 'service' && arg) return pageService(arg);
    const route = routes[head];
    if (route) return route.render(query);
    return page404();
  }

  function setActiveNav(navHref) {
    document.querySelectorAll('[data-nav]').forEach((a) => {
      a.classList.toggle('active', !!navHref && a.getAttribute('href') === navHref);
    });
  }

  async function doRender() {
    const hrefAtStart = location.hash;
    const { parts, query } = parseHash();
    // skip duplicate renders (rapid clicks on the same link)
    if (!firstLoad && hrefAtStart === lastRenderedHash) return;
    const html = await new Promise((resolvePromise) => {
      if (firstLoad) { resolvePromise(resolve(parts, query)); return; }
      FX.sweep(() => resolvePromise(resolve(parts, query)));
    });

    app.innerHTML = html;
    lastRenderedHash = hrefAtStart;

    // nav highlight
    const head = parts[0] || '';
    let navHref = '#/';
    if (head === 'division' || head === 'services') navHref = '#/divisions';
    else if (head === 'service') navHref = '#/divisions';
    else if (routes[head]) navHref = routes[head].nav;
    setActiveNav(navHref);

    // page hooks
    FX.initReveals(app);
    FX.initCounters(app);
    FX.initMagnetic(app);
    FX.initTilt(app);
    wirePortfolio();
    wireMarketplace();
    wireForms();
    if (head === 'bookings') renderBookingStep();
    cart.render();

    // scroll to top (instant on first load)
    window.scrollTo({ top: 0, behavior: firstLoad ? 'auto' : 'instant' });
    firstLoad = false;
    document.title = titleFor(parts) + ' — FORTWORKXX';
    app.focus({ preventScroll: true });
  }

  // serialize renders so rapid navigation never overlaps page sweeps
  function render() {
    renderQueue = renderQueue
      .then(() => doRender())
      .catch((e) => console.error('render error', e));
    return renderQueue;
  }

  function titleFor(parts) {
    const map = {
      '': 'Excellence Beyond Boundaries',
      about: 'About',
      divisions: 'Divisions',
      services: 'Services',
      academy: 'Academy',
      portfolio: 'Portfolio',
      marketplace: 'Marketplace',
      bookings: 'Bookings',
      insights: 'Insights',
      contact: 'Contact',
      portal: 'Client Portal',
      legal: 'Privacy & Terms',
    };
    if (parts[0] === 'service') return FW.getService(parts[1])?.name || 'Service';
    if (parts[0] === 'division') return FW.getDivision(parts[1])?.short || 'Division';
    return map[parts[0] || ''] || 'Not Found';
  }

  /* ═══════════════ BOOT ═══════════════ */

  document.getElementById('year').textContent = new Date().getFullYear();

  window.addEventListener('hashchange', render);
  FX.boot();
  render();

  // initial cart count badge in header area (marketplace page mounts it)
  cart.render();
})();
