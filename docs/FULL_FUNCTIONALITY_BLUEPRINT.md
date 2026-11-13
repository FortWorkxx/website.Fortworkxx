# FORTWORKXX — Full Functionality Blueprint

> **What this document is:** the complete, actionable list of everything required to take the Fortworkxx website from the immersive front-end you see today to a fully functional business platform — bookings, payments, academy, marketplace, admin, communications, legal and operations.
>
> **How to use it:** work top-to-bottom. Stage 0–1 items are needed to go live with a credible presence. Stages 2–5 add full business capability. Every checklist item is a concrete task with an owner and a tool.

---

## PART 0 — WHAT ALREADY EXISTS (this repository)

The current build is a production-quality **front-end showcase** — a cinematic, mobile-responsive single-page application:

| Area | Status |
|---|---|
| Cinematic preloader (gold monogram reveal, skippable) | ✅ Built |
| Ambient gold/blue particle field + mouse interaction | ✅ Built |
| Custom cursor, magnetic buttons, card tilt, scroll reveals | ✅ Built |
| Cinematic hero with animated typography + live counters | ✅ Built |
| 5 division pages + 8 full service pages (offerings, process, packages) | ✅ Built |
| Academy page (3 departments, 6 courses, student journey) | ✅ Built |
| Portfolio with category filtering (12 projects, 8 categories) | ✅ Built |
| Marketplace with working client-side cart (8 products, localStorage) | ✅ Built |
| Multi-step booking wizard with service-specific fields + booking reference generation | ✅ Built (front-end only) |
| Insights, Contact, About, Legal drafts, Client-Portal stub | ✅ Built |
| Newsletter + contact forms (demo submit) | ✅ Built (front-end only) |
| WhatsApp float button, fullscreen menu, page-transition sweeps | ✅ Built |
| Luxury design system: black/gold/royal-blue/white, Cormorant Garamond + Manrope, self-hosted fonts | ✅ Built |
| SEO meta + Open Graph tags | ✅ Built (basic) |

**What is NOT yet connected (and is covered below):** real form delivery, payments, accounts, database, admin, CMS, live checkout, real booking storage, analytics, domain.

---

## PART 1 — STAGE 0: GO-LIVE ESSENTIALS (week 1)

Do these and the website is publicly reachable and credible.

### 1.1 Domain
- [ ] Buy the primary domain — first choice **fortworkxx.com** (alternatives: fortworkxx.ng, fortworkxx.africa, fortworkxx.co)
- [ ] Buy via a reputable registrar (Namecheap, GoDaddy, Whogohost, DomainKing for NG)
- [ ] Enable **auto-renew** and register with *your* email — never a developer's
- [ ] Create domain-based emails: `info@`, `bookings@`, `support@`, `academy@` (Google Workspace ~$7/mo or Zoho Mail free tier)

### 1.2 Hosting & deployment
- [ ] Push this repository to GitHub (done: `FortWorkxx/website.Fortworkxx`)
- [ ] Deploy to **Vercel** (free tier is sufficient for the showcase): import repo → framework "Other" → build command empty → output `.`
  - *Alternative:* Netlify, Cloudflare Pages, or any static host — this site is pure static (HTML/CSS/JS), so anything works
- [ ] Attach the custom domain in the host dashboard
- [ ] DNS records: `A @ → host IP` or `CNAME www → host`
- [ ] Force HTTPS (Vercel/Netlify do this automatically via Let's Encrypt)
- [ ] Verify: `https://fortworkxx.com` loads, HTTPS padlock shows, www redirects to apex (or vice versa — pick one)

### 1.3 Replace placeholder contact data
Search the codebase and replace:
- [ ] `js/data.js` → `FW.brand.phone`, `FW.brand.whatsapp` (currently `+234 000…` / `wa.me/2340000000000`)
- [ ] `FW.brand.email` / `bookingsEmail` with live domain emails
- [ ] Footer social links (`index.html` → `.footer-socials` `href="#"`)
- [ ] Footer/menu location text if you expand beyond "Lagos, Nigeria"

### 1.4 Legal pages
- [ ] Have a Nigerian lawyer review the draft Privacy Policy / Terms / Refund Policy (`#/legal`)
- [ ] Confirm NDPA (Nigeria Data Protection Act) compliance posture — consent language is already in the booking form
- [ ] Publish both pages and link them in the footer (already linked)

### 1.5 Content you must supply (the real bottleneck)
Nothing below can be invented — gather these before launch:

| Content | Where it goes | Notes |
|---|---|---|
| Real logo files (SVG/PNG, light + dark) | Header, favicon, preloader | Current mark is typographic F/X |
| Founder / brand story photo | About page | Builds trust immediately |
| Real project photos (min. 12) | Portfolio | Replace demo images in `FW.portfolio` |
| Real testimonials with names + permission | Home + About | Replace `FW.testimonials` |
| Confirmed prices for all 8 services | Service pages + booking summary | Replace package prices in `FW.services` |
| Real course dates, fees, syllabi | Academy | Replace `FW.academy.courses` |
| Product photos + stock counts | Marketplace | Replace `FW.products` |
| Real address / map embed | Contact | Add Google Maps iframe |
| WhatsApp Business number | Float button + forms | Must be a real WhatsApp Business line |

---

## PART 2 — STAGE 1: BUSINESS OPERATIONS (weeks 2–6)

This is where the site stops being a brochure and starts being a business.

### 2.1 Backend foundation — Supabase (recommended)
Create a free Supabase project, then enable:

- [ ] **Auth**: email/password + Google sign-in; enable "confirm email"
- [ ] **Database tables** (minimum viable set):

```
profiles          (id → auth.users, full_name, phone, role, created_at)
roles             (user_id, role: customer | booking_manager | instructor | store_manager | admin)
bookings          (id, ref unique, user_id?, service_id, division_id, fields jsonb,
                   date, time, package, status, created_at)
booking_status    enum: new_request → awaiting_quotation → quotation_sent →
                   awaiting_payment → confirmed → in_progress → completed | cancelled | refunded
enquiries         (id, name, email, phone, subject, message, status, created_at)
courses           (id, title, dept, level, price, duration, syllabus, image)
enrollments       (id, user_id, course_id, paid, progress int, completed_at)
lessons           (id, course_id, title, video_url, position)
assignments       (id, lesson_id, student_id, submission_url, grade)
certificates      (id, enrollment_id, code unique, issued_at)
products          (id, title, price, kind: physical|digital, stock, image, active)
orders            (id, user_id, total, status, payment_ref, created_at)
order_items       (id, order_id, product_id, qty, price)
payments          (id, order_id|booking_id, provider, ref, amount, status, raw jsonb)
testimonials      (id, name, role, quote, approved bool)
portfolio         (id, title, cat, year, image, meta, published)
posts             (id, title, slug, cat, body, cover, published_at)
newsletter        (id, email, source, created_at)
```

- [ ] **Row Level Security** on *every* table (customers see only their rows; admins see all)
- [ ] **Storage buckets**: `portfolio`, `products`, `courses`, `avatars` — with upload policies and size limits
- [ ] Backups: enable PITR (paid) or weekly pg_dump to an external bucket

### 2.2 Booking system (replace the demo wizard)
The booking wizard already collects the right data per service. To make it real:

- [ ] Create an API route (Vercel serverless function) `POST /api/bookings`
- [ ] Validate payload server-side (never trust the client)
- [ ] Insert into `bookings` with a generated reference (`FW-XXXXX-NN`)
- [ ] Trigger transactional email via **Resend** + WhatsApp notification via **WhatsApp Business API** (or Meta Cloud API)
- [ ] Add admin view: list bookings, change status, assign staff, send quotation
- [ ] Add booking-status page for customers (Stage 3 portal)
- [ ] Store service-specific fields in the `fields` JSONB column — the wizard's field schema already matches

### 2.3 Payments — Paystack (primary) + Flutterwave (secondary)
Nigeria-first, international cards supported.

**Paystack setup checklist:**
- [ ] Create business account at paystack.com → complete KYC (CAC, ID, bank)
- [ ] Get **test** keys → wire into `/api/payments/init`
- [ ] Implement: initialize transaction → redirect to Paystack checkout → **verify server-side** → mark paid
- [ ] Register **webhooks** → `https://fortworkxx.com/api/webhooks/paystack` for `charge.success`, `refund.processed`
- [ ] Switch to **live** keys after a full test cycle
- [ ] Test matrix: card success, card decline, bank transfer, insufficient funds, webhook replay, double-payment

**Hard rules (non-negotiable):**
1. **Never** mark anything paid from a client-side callback or an uploaded transfer receipt — only from server-side verification or an admin action.
2. Payment secrets live only in server environment variables (Vercel → Settings → Environment Variables).
3. Every payment row stores the provider reference for reconciliation.

**What gets paid for:**
| Flow | Mechanism |
|---|---|
| Service bookings | Deposit (e.g. 50%) or full payment per quotation |
| Academy enrolment | Full course fee at checkout → unlocks enrolment |
| Marketplace physical goods | Full payment + delivery fee at checkout |
| Marketplace digital goods | Full payment → instant download link (signed URL) |

### 2.4 Communications
- [ ] **Resend** (or SendGrid) account → verified domain (`SPF`, `DKIM`, `DMARC` DNS records)
- [ ] Email templates: booking received, quotation sent, payment receipt, enrolment welcome, order shipped, password reset
- [ ] **WhatsApp Business**: profile, away message, quick replies; float button already points at `wa.me` — swap in the real number
- [ ] Optional: WhatsApp Cloud API for automated booking notifications
- [ ] Spam protection on all public forms (Turnstile/hCaptcha — invisible kind keeps the luxury feel)

---

## PART 3 — STAGE 2: ACCOUNTS, PORTAL & ADMIN (weeks 5–10)

### 3.1 Customer portal (replace the `#/portal` stub)
- [ ] Sign up / login / password reset (Supabase Auth)
- [ ] Tabs: My bookings (with status timeline) · Orders · Invoices/receipts (PDF) · Courses · Support tickets · Profile
- [ ] Allow enquiry/booking *without* account (already the default — keep it)

### 3.2 Administration Command Centre (private `/admin`)
- [ ] Route-protected by role (`admin`, `division_manager`, `booking_manager`, `finance_manager`, `instructor`, `store_manager`, `content_editor`)
- [ ] **Overview**: bookings, revenue, pending requests, students, low stock — live KPI cards
- [ ] **Bookings**: filter by status/division, change status, assign staff, add quotation amount, export CSV
- [ ] **Customers**: full history per customer
- [ ] **Academy**: create courses/lessons, upload materials, review assignments, grade, issue certificates (auto-generated only when completion criteria met)
- [ ] **Marketplace**: products, variants, stock, discount codes, orders, fulfilment, shipping zones
- [ ] **Finance**: payments ledger, refunds, deposits vs balances, downloadable reports
- [ ] **Content**: portfolio, testimonials, blog posts — publish/unpublish (acts as your CMS)
- [ ] **Settings**: brand settings, service pricing, business hours
- [ ] Audit log for admin actions; 2FA (TOTP) mandatory for admin accounts

### 3.3 Roles (from the brand blueprint)
| Role | Access |
|---|---|
| Super admin | Everything |
| Division manager | Assigned division's bookings + content |
| Booking manager | Bookings & quotations only |
| Finance manager | Payments & reports only |
| Instructor | Own courses & students |
| Store manager | Products & orders |
| Content editor | Pages, portfolio, posts, media |
| Customer | Own account only |

Enforce with RLS **and** API middleware — never UI-hiding alone.

---

## PART 4 — STAGE 3: ACADEMY LMS (weeks 8–14)

- [ ] Course detail pages (currently catalogue cards) with full syllabus
- [ ] Video hosting: **Mux** or Cloudflare Stream (signed URLs — never public S3 links); YouTube unlisted is the cheap fallback
- [ ] Lesson player with progress tracking (save `position` per lesson)
- [ ] Assignments upload (Supabase Storage) + instructor grading UI
- [ ] Quizzes/assessments with pass threshold
- [ ] Progress bar per course → completion at ≥80% + all assignments graded
- [ ] Certificate generation (PDF, unique verification code + public verify page)
- [ ] Cohort scheduling: start dates, seats remaining, waitlist
- [ ] Instructor dashboard (create course → upload lessons → review submissions → grade → certify)

---

## PART 5 — STAGE 4: MARKETPLACE LIVE (weeks 12–16)

- [ ] Product detail pages with gallery, variants (size/finish), stock display
- [ ] Real cart & checkout → Paystack (cart logic already exists client-side)
- [ ] Digital goods: signed, expiring download URLs after verified payment
- [ ] Physical goods: delivery fee logic (Lagos zones + nationwide courier), shipping address capture
- [ ] Inventory decrement on paid orders; low-stock alerts
- [ ] Discount codes (%, flat, free shipping; expiry + usage caps)
- [ ] Order tracking statuses: pending → paid → packed → shipped → delivered | refunded
- [ ] Transactional emails per status; invoices as PDF

---

## PART 6 — STAGE 5: IMMERSION & GROWTH (ongoing)

### 6.1 Deeper immersion (keep it tasteful)
- [ ] Replace hero still with a **compressed looping video** (dark hall / gold particles), < 4 MB, muted autoplay
- [ ] Optional Three.js 3D monogram in the hero (the blueprint's "stage 5" item) — one hero object, not every page
- [ ] Case-study pages: full-screen image sequences per portfolio project
- [ ] Audio previews on sound/music service pages (waveform player)
- [ ] Testimonial video wall
- [ ] Page-transition refinement: prefetch adjacent routes for instant sweeps

### 6.2 SEO & discovery
- [ ] Real `sitemap.xml` + `robots.txt` (host-level)
- [ ] JSON-LD: `Organization`, `LocalBusiness`, `Service` ×8, `Course` ×6, `Product`, `FAQPage`
- [ ] Unique meta title/description per route (extend `titleFor()` + inject meta per page)
- [ ] Google Search Console → submit sitemap → monitor
- [ ] Google Business Profile (Lagos) with NAP consistency
- [ ] Image `alt` text audit (already present — verify with real photos)
- [ ] Target pages: "sound engineer Lagos", "catering services Lagos", "printing services Lagos", "personal trainer Lagos", "tech training Nigeria" etc.

### 6.3 Analytics & monitoring
- [ ] **Vercel Analytics** + **Google Analytics 4** (consent-aware for EU/NG visitors)
- [ ] **Sentry** for JS errors + API errors (free tier)
- [ ] Uptime monitoring: UptimeRobot/BetterStack on `/` + key APIs
- [ ] Conversion events: booking submitted, checkout initiated, payment success, course enrol, WhatsApp click, newsletter join

### 6.4 Performance targets (measure with Lighthouse + real devices)
| Metric | Target |
|---|---|
| LCP | ≤ 2.5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |
| Total JS (initial route) | < 150 KB gzip (current site is well under) |
| Images | AVIF/WebP, responsive `srcset`, lazy below fold |

- [ ] Run Lighthouse on mobile for Home, Service, Booking, Checkout
- [ ] Test on 2–3 real Android devices (Nigeria's traffic is mobile-first)
- [ ] `prefers-reduced-motion` already respected — verify with real users

### 6.5 Accessibility (WCAG 2.2 AA)
- [ ] Keyboard-only pass through menu → booking wizard → checkout
- [ ] Screen-reader pass (VoiceOver/NVDA) on forms
- [ ] Contrast audit (gold #C6A15B on black passes; check muted text 4.5:1)
- [ ] Visible focus states (already styled), skip-link, aria labels on icon buttons

---

## PART 7 — SECURITY CHECKLIST (before every stage goes live)

- [ ] HTTPS everywhere; HSTS enabled
- [ ] All secrets in server env vars only (`.env` never committed)
- [ ] Rate limiting on `/api/*` (esp. bookings, contact, auth)
- [ ] Input validation + parameterised queries (Supabase client handles this — don't hand-write SQL)
- [ ] File upload: MIME + size allow-list; store outside web root
- [ ] CORS locked to `https://fortworkxx.com`
- [ ] CSP headers (start report-only, then enforce)
- [ ] Admin: 2FA + IP-agnostic session expiry (7 days) + audit log
- [ ] Webhook signature verification (Paystack/Flutterwave)
- [ ] Weekly automated DB backups + quarterly restore test
- [ ] Dependency audit (`npm audit`) in CI
- [ ] Pen-test pass or at minimum OWASP top-10 review before marketplace launch

---

## PART 8 — OPERATING COSTS (realistic monthly/annual)

| Item | Est. cost | When |
|---|---|---|
| Domain | ~₦15k–25k / year | Stage 0 |
| Vercel hosting | $0 (free tier) → $20/mo Pro when scaling | Stage 0 → later |
| Google Workspace / Zoho | $0–7 / month | Stage 0 |
| Supabase | $0 (free) → $25/mo (Pro, PITR) | Stage 1 → growth |
| Resend email | $0 (3k/mo free) → $20/mo | Stage 1 |
| Paystack fees | 1.5% + ₦100 local cards (negotiable at volume) | per transaction |
| Flutterwave fees | ~1.4% local (backup gateway) | per transaction |
| WhatsApp Business API | Usage-based (Blueticks/360dialog from ~$20/mo) | Stage 1 optional |
| Video hosting (Mux) | ~$0.05–0.10 / GB streamed | Stage 3 |
| Sentry | $0 (free tier) | Stage 5 |
| Legal review | One-off (lawyer) | Stage 0 |
| Maintenance retainer | ₦50k–150k / month or 5–10 hrs of your time | ongoing |

---

## PART 9 — MASTER BUILD SEQUENCE (do it in this order)

```
STAGE 0 — GO LIVE          ✅ front-end done → domain, deploy, real content, legal
STAGE 1 — OPERATIONS       Supabase, real bookings, Paystack, email/WhatsApp
STAGE 2 — ACCOUNTS & ADMIN Client portal, command centre, roles, CMS
STAGE 3 — ACADEMY          LMS, video, assignments, certificates
STAGE 4 — COMMERCE         Live checkout, inventory, shipping, discounts
STAGE 5 — GROWTH           Video hero, SEO depth, analytics, 3D, optimisation
```

**Rule:** never start a stage while the previous stage's checklist has open critical items. The front-end is done — **your next three actions are: (1) buy the domain, (2) deploy to Vercel, (3) gather the real content table in Part 1.5.**

---

## PART 10 — LAUNCH CHECKLIST (final gate)

**Presence**
- [ ] Domain live with HTTPS, www decision made
- [ ] All placeholder contacts/links replaced (phone, WhatsApp, email, socials)
- [ ] Real photos in portfolio, real testimonials, real prices
- [ ] Privacy policy + terms reviewed and published
- [ ] Favicon + OG image correct

**Function**
- [ ] Booking form → database → email + WhatsApp notification (end-to-end test)
- [ ] Payment: deposit on a booking verified server-side
- [ ] Academy enrolment unlocks course access
- [ ] Marketplace checkout → payment → delivery/email receipt
- [ ] Admin can see and change every record created above
- [ ] Role permissions verified (customer cannot open /admin)

**Quality**
- [ ] Lighthouse ≥ 90 performance on mobile home + booking
- [ ] Tested on Android Chrome, iOS Safari, desktop
- [ ] Keyboard + screen-reader pass
- [ ] Error monitoring + uptime alerts connected
- [ ] GA4 + Search Console live, sitemap submitted
- [ ] Backup restore tested once

---

*Fortworkxx — Excellence Beyond Boundaries.*
*This blueprint matches the build in this repository. Update checklists as stages complete.*
