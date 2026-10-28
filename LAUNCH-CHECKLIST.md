# SoftAxes — pre-launch checklist, copy alternatives and test plan

Everything in `[square brackets]` in the code is a placeholder. Search the repo for
`[` is not reliable — search for the phrases below instead, or grep for
`\[Add |\[Upload |\[Confirm |\[add real` across `src/`.

---

## 1. Placeholders to replace before launch

### A. Facts, figures and legal

| Where | Placeholder |
| --- | --- |
| `src/data/site.ts` | Phone number, WhatsApp number, email, full office address, Google Maps embed URL, booking calendar URL, working hours, response-time promise |
| `src/data/site.ts` | Social profile URLs (LinkedIn, Facebook, Instagram) |
| `src/data/site.ts` | SECP registration number, PASHA membership status, PSEB registration number, Chamber of Commerce membership number |
| `src/pages/Home.tsx`, `About.tsx` | Confirm **100+ clients / 400+ projects / 15+ team**, founding year, office city |
| `src/pages/Process.tsx` | Retainer scope, included hours, response-time SLA |
| `index.html` | JSON-LD Organization block: address, telephone, email, sameAs |
| `src/data/services.ts` | Starting prices / price bands for mobile apps, web, custom software, QA retainers, media retainers, minimum ad budget |
| `src/data/services.ts` | "Team on the work" (right-rail panel on every service page) |
| `src/data/services.ts` | Digital marketing FAQ — partner status sentence: `[confirm and add: Google Partner / Meta Business Partner / Microsoft Partner]` |
| `src/pages/About.tsx` | Founder story paragraphs (3), founding year, city |
| `src/pages/About.tsx` | Team names, roles and headcount — add or remove cards so the grid matches reality |
| `src/pages/Misc.tsx` | Privacy Policy: every section; Terms: every section; last-updated dates; governing law |

### B. Partner badges (highest legal risk — do not guess)

1. Log into each platform and confirm the partnership status is live in the dashboard.
2. Download the **official** badge file only.
3. Upload to `public/assets/partners/` as `google-partner.svg`, `meta-partner.svg`, `tiktok-partner.svg`, `microsoft-partner.svg`.
4. Replace `profileUrl` in `src/data/site.ts` with the real verification/profile URL.
5. Set `confirmed: true` **only** for platforms you have verified. Unverified platforms never render.
6. Badges are used as-is: no recolouring, cropping, stretching or CSS filters.

### C. Photography and project screenshots

| Slot | Size | Used on |
| --- | --- | --- |
| Workspace / hero section image | 1600×1000 (16:10) | Home |
| Office photo | 1500×1000 (3:2) | Services, Contact, About |
| Team portraits ×6 | 1200×1500 (4:5) | About |
| Case study covers ×6 | 1920×1080 (16:9) | Work, service pages |
| Article illustrations ×3 | 1200×900 | Resources |

Rules: real photos only, written consent for every face, no stock "smiling laptop"
shots, no AI-generated people. Export as WebP, add `width`/`height`, keep
`loading="lazy"` on anything below the fold. When you swap a placeholder for a real
image, use the `photo-frame` class so the dark-teal grade (`rgba(5,10,13,.3)`) and the
14px radius are applied consistently.

### D. Case studies and testimonials

- `src/data/cases.ts`: client name, descriptor, challenge, approach, **real** results, tech list, client quote (with written approval).
- `src/pages/Home.tsx`: hero testimonial block — real quote, name, role, company.
- `src/data/services.ts`: `caseStudyTitle` per service, and point the detail page at a real project.
- Delete case studies you cannot evidence. Six real ones beat twenty invented ones.

### E. Technical

- [ ] Connect `LeadForm` to a real endpoint (Formspree / Netlify Forms / HubSpot / your API) — `src/components/forms.tsx`, `submitTo`.
- [ ] Add spam protection (Cloudflare Turnstile or reCAPTCHA) and confirm submissions reach a monitored inbox plus the CRM.
- [ ] Replace `https://www.softaxes.com` in `src/lib/seo.ts` and `index.html` if the domain differs.
- [ ] Add `public/og-cover.jpg` (1200×630) and the favicon / logo file referenced by the Organization schema.
- [ ] GA4, GTM and Microsoft Clarity: paste real IDs in `index.html`, uncomment the blocks.
- [ ] Test forms, WhatsApp click, phone click and calendar embed on a real phone.
- [ ] Run Lighthouse on mobile (target: LCP < 2.5s, CLS < 0.1) at 360px width.
- [ ] Ask legal to review Privacy and Terms against PECA and any client jurisdiction.
- [ ] Add a `sitemap.xml` and `robots.txt` at the host level, and submit to Search Console.
- [ ] Hosting: SPA rewrite so `/services/mobile-apps` serves `index.html` on refresh (the router already falls back to hash routing on `file://`).

---

## 2. Five alternative hero headlines

Current: **"We build the software, then bring the customers."**

1. "The agency that ships your app and then finds its users."
2. "Built, tested, and filled with customers — by the same team."
3. "Your app, your website, and the ads that make them pay for themselves."
4. "Software that gets finished. Marketing that gets measured."
5. "One team for the build and the customers who use it."

Pair each with the existing subhead first; if you change the subhead, keep the phrase
"Google, Meta and TikTok" — it is doing real qualification work.

## 3. Five CTA button variations

Current: **"Book a free strategy call"**

1. "Book a 30-minute call"
2. "Get a price range first"
3. "Show me what you would build"
4. "Talk to a developer, not a salesperson"
5. "Send my project for a quote"

Test one change at a time, on the hero only, with a 50/50 split and a minimum of two
weeks or 300 sessions per arm.

---

## 4. A/B test ideas, in priority order

| # | Test | Hypothesis | Metric |
| --- | --- | --- | --- |
| 1 | Hero CTA copy (list above) | Specific beats generic for a skeptical SME buyer | Click rate to `/contact`, then completed forms |
| 2 | Hero layout: build console vs. a real product screenshot | Proof beats theatrics for senior buyers | Scroll depth + form starts |
| 3 | Contact form: budget field required vs. optional | Asking budget early may cost completions | Form completion rate |
| 4 | Add a price range on service pages vs. "starting from" | Transparency increases qualified leads | Lead quality (calls booked) |
| 5 | Partner badge row above vs. below the hero | Trust early helps cold traffic | Bounce rate on `/` |
| 6 | Case studies with real numbers vs. screenshots only | Numbers beat pictures | Time on `/work`, clicks to `/contact` |

Track every variant as a GA4 event (`generate_lead`, `cta_click`, `form_start`) so the
result is readable in one report.

---

## 5. Heatmap and analytics setup guide

**Tag manager first.** Install GTM in `index.html` (head + noscript iframe). Put GA4,
Google Ads and Microsoft Clarity inside GTM so one container controls everything.

**Data layer is already wired.** The router pushes a `page_view` event with
`page_path` and `page_title` on every route change, so set GA4's tag to
`send_page_view: false` and listen for the custom `page_view` event. Otherwise SPA
navigation will look like one long session.

**Events to create in GTM**

| Event | Fired by | Use |
| --- | --- | --- |
| `generate_lead` | Any form submit (`src/components/forms.tsx`) | Primary conversion. Import to Google Ads as a conversion action. |
| `cta_click` | Add to `Btn` when `variant="primary"` | Measures hero vs. inline vs. sticky CTA |
| `whatsapp_click` | Any `wa.me` link | Secondary conversion — Pakistan's real path to enquiry |
| `tel_click` | Phone links | Secondary conversion |
| `scroll_75` | GA4 built-in scroll depth | Content engagement |
| `faq_open` | `FaqList` details toggle | Objection research for copy |

**Microsoft Clarity.** Add the snippet, then build three recordings filters:
1. Visited `/contact` and did not submit.
2. Reached the final CTA band on `/`.
3. Opened a service detail page and left within 15 seconds.

Look for rage clicks on the form, dead clicks on the case-study expanders, and whether
the sticky mobile bar covers the form's submit button at 360px.

**Weekly numbers worth reading (one page, no dashboards):**
Spend → enquiries → qualified enquiries → calls booked → proposals sent → wins, by
channel. If a metric is not on that chain, it is decoration.

**Alerting.** Set a GA4 anomaly alert on `generate_lead` volume and an uptime check on
the form endpoint. A silent form failure is the most expensive bug a services site can
have.
