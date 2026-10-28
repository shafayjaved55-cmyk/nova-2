export type Service = {
  slug: string;
  name: string;
  shortName: string;
  /** Outcome-led H1 for the detail page. */
  headline: string;
  /** Short summary used on cards and rows. */
  summary: string;
  whoFor: string;
  deliverables: { title: string; detail: string }[];
  process: { step: string; detail: string }[];
  timeline: string;
  tech: string[];
  problem: string[];
  faqs: { q: string; a: string }[];
  /** Case-study slot note shown on the detail page. */
  caseStudyTitle: string;
};

export const SERVICES: Service[] = [
  {
    slug: "mobile-apps",
    name: "Mobile App Development",
    shortName: "Mobile apps",
    headline: "An app people keep on their home screen, not one they delete in a week.",
    summary:
      "Native and cross-platform apps for Android and iOS, shipped with the analytics and ad tracking already wired in.",
    whoFor:
      "Founders launching a product, retailers replacing a clunky ordering process, and Pakistani businesses that need an app their customers actually open twice a week.",
    deliverables: [
      { title: "Android and iOS builds", detail: "One React Native or Flutter codebase, or fully native Swift/Kotlin when the app needs it." },
      { title: "Design system", detail: "Screens, states and components — not a Figma file that dies after handover." },
      { title: "Store submission", detail: "Google Play and App Store listings, screenshots, review handling, resubmissions." },
      { title: "Analytics and events", detail: "Firebase or GA4 events mapped to the actions that matter: signup, order, repeat purchase." },
      { title: "Ad tracking", detail: "Meta SDK, Google Ads conversion import and TikTok events configured before the first campaign." },
      { title: "30 days of support", detail: "Crash fixes, store rejections and small changes after launch, included." },
    ],
    process: [
      { step: "Scope workshop", detail: "We list every screen and cut the ones you don't need for version one." },
      { step: "Clickable prototype", detail: "You tap through the app before we write production code." },
      { step: "Two-week sprints", detail: "A test build on your phone at the end of every sprint." },
      { step: "Closed beta", detail: "Ten to thirty real users, crash logs and session recordings reviewed weekly." },
      { step: "Store release", detail: "Submission, review responses, then a staged rollout." },
    ],
    timeline: "10–16 weeks for a v1 with accounts, payments and push notifications.",
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Supabase", "Node.js", "PostgreSQL", "Meta SDK", "AppsFlyer"],
    problem: [
      "You have a great idea and no idea which half of it to build first.",
      "A previous quote was either suspiciously cheap or impossible to read.",
      "The last agency built the app, then left you alone with it.",
      "Nobody could tell you where your first 500 users were coming from.",
    ],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "Cross-platform for almost everything. One codebase means one team, one backlog and half the QA surface. We go native when you need heavy device APIs, offline media processing or the last few percent of frame rate.",
      },
      {
        q: "What does an app cost in Pakistan?",
        a: "A scoped v1 usually lands between [Add real price band]. We quote against a screen list, not a guess. See our article on app development cost in Pakistan for the full breakdown.",
      },
      {
        q: "Do we own the code?",
        a: "Yes. Full repository access from day one, in your Git organisation if you prefer, with documentation and a handover session at the end.",
      },
      {
        q: "Can you handle the launch marketing too?",
        a: "That is the point of SoftAxes. The same team that instrumented your events runs the install campaigns, so cost per install is measured against real revenue.",
      },
    ],
    caseStudyTitle: "[Add real client case study — retail ordering app]",
  },
  {
    slug: "web-development",
    name: "Web Development",
    shortName: "Web apps",
    headline: "Fast websites and web apps that turn visitors into enquiries.",
    summary:
      "Marketing sites, customer portals and dashboards built to load in under two seconds on Pakistani mobile networks.",
    whoFor:
      "Businesses whose site loads slowly on 4G, companies running operations out of spreadsheets and WhatsApp, and teams that need a portal customers can self-serve in.",
    deliverables: [
      { title: "Site or app build", detail: "Next.js or Astro front end, headless CMS your team can edit without calling us." },
      { title: "Core Web Vitals work", detail: "LCP under 2.0s on mid-range Android. Checked on real throttled devices, not just Lighthouse." },
      { title: "Booking and lead flows", detail: "Forms, quote calculators and call booking wired to your inbox, CRM and WhatsApp." },
      { title: "Customer portal or dashboard", detail: "Logins, roles, payments and reporting where it removes real manual work." },
      { title: "Conversion tracking", detail: "Google Ads, GA4 and Meta tags firing on the events that count, verified in Tag Assistant." },
      { title: "Documentation", detail: "Editor guide, deploy notes and an admin walkthrough recording." },
    ],
    process: [
      { step: "Content and structure", detail: "We write the page structure around the questions your buyers actually ask." },
      { step: "Design in browser", detail: "Key screens built responsive from the first commit, tested at 360px." },
      { step: "Build and integrate", detail: "CMS, payments, CRM and tracking, on a staging URL you can click through." },
      { step: "Speed and QA pass", detail: "Device testing, accessibility check, form and email deliverability test." },
      { step: "Launch and monitor", detail: "DNS, SSL, uptime monitoring and a two-week tuning window." },
    ],
    timeline: "4–8 weeks for a marketing site, 10–14 weeks for a portal with payments.",
    tech: ["Next.js", "React", "TypeScript", "Astro", "Node.js", "PostgreSQL", "Stripe", "JazzCash", "Easypaisa", "Sanity", "Vercel", "AWS"],
    problem: [
      "Your site takes six seconds to load on mobile data and people leave.",
      "Every content change needs a developer.",
      "Sales leads arrive in three inboxes and two WhatsApp groups.",
      "You cannot tell which channel actually produced the last ten customers.",
    ],
    faqs: [
      {
        q: "Can our team update content themselves?",
        a: "Yes. We build on a headless CMS with an editor guide, so copy, blog posts and case studies are your job, not a support ticket.",
      },
      {
        q: "Do you work with WordPress?",
        a: "When it is the right tool. For content-heavy sites with a non-technical team it is still a sensible choice. We will say so honestly rather than rebuild something that works.",
      },
      {
        q: "Do you handle hosting and domains?",
        a: "Yes. We set up hosting, SSL, backups and monitoring in your account so you keep ownership if we ever part ways.",
      },
      {
        q: "What about local payment gateways?",
        a: "We integrate JazzCash, Easypaisa and bank transfer flows alongside Stripe for international cards.",
      },
    ],
    caseStudyTitle: "[Add real client case study — B2B portal]",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    shortName: "UI/UX design",
    headline: "Design decisions backed by what users did, not what they said.",
    summary:
      "Research, prototypes and a design system your developers can build from without guessing.",
    whoFor:
      "Teams with a working product that users abandon, and companies about to spend real money on development and want the flow settled first.",
    deliverables: [
      { title: "Research and audit", detail: "Session recordings, funnel drop-off points and a written list of what to fix first." },
      { title: "Flows and wireframes", detail: "Every path mapped, including the boring ones: errors, empty states, refunds." },
      { title: "High-fidelity screens", detail: "Desktop, tablet and mobile, with real content instead of grey boxes." },
      { title: "Clickable prototype", detail: "Testable on a phone with stakeholders before a line of production code." },
      { title: "Design system", detail: "Tokens, components and states in Figma, mirrored in code so they stay in sync." },
      { title: "Handover", detail: "Dev walkthrough, redlines and a QA checklist for visual sign-off." },
    ],
    process: [
      { step: "Evidence first", detail: "We watch real users before we form opinions about the redesign." },
      { step: "Map the funnel", detail: "Where people leave, in numbers, ranked by how much money it costs you." },
      { step: "Design and test", detail: "Prototype in front of five users. Fix. Test again." },
      { step: "Systemise", detail: "Components and tokens, so screen forty looks like screen four." },
      { step: "Support the build", detail: "We sit in sprint reviews until the last screen ships." },
    ],
    timeline: "3–6 weeks for a product audit and redesign of core flows.",
    tech: ["Figma", "Maze", "Hotjar", "Microsoft Clarity", "Storybook", "Framer"],
    problem: [
      "Users sign up, look around and never come back.",
      "Your support inbox answers the same three questions every day.",
      "Every screen looks like it was designed by a different person.",
      "Developers keep asking what a screen should do.",
    ],
    faqs: [
      {
        q: "Can you redesign without a full rebuild?",
        a: "Often yes. We can redesign screens and hand over a component library your existing team implements over a few sprints.",
      },
      {
        q: "How do you test with real users?",
        a: "Five to eight participants per round, recruited from your actual customer base, on unmoderated tasks plus a short interview.",
      },
      {
        q: "Do you write the copy?",
        a: "Interface copy, yes. Buttons, error messages, empty states. Long-form marketing copy is a separate engagement.",
      },
      {
        q: "What do we get at the end?",
        a: "Figma source files, a documented component library, the prototype and a prioritised fix list ranked by impact.",
      },
    ],
    caseStudyTitle: "[Add real client case study — checkout redesign]",
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    shortName: "Custom software",
    headline: "Retire the spreadsheet that only one person understands.",
    summary:
      "Internal tools, ERPs and integrations built around how your operation actually runs.",
    whoFor:
      "Pakistani manufacturers, distributors, schools and clinics running core operations on spreadsheets, and growing companies whose off-the-shelf tool no longer fits.",
    deliverables: [
      { title: "Process mapping", detail: "Two weeks in your operation, on site where it helps, before anything is built." },
      { title: "Role-based system", detail: "Permissions, approvals and audit trails for the people who actually touch the data." },
      { title: "Integrations", detail: "Accounting, WhatsApp Business API, courier APIs, barcode scanners and legacy databases." },
      { title: "Reporting", detail: "The ten numbers owners ask about daily, on one screen, not in a monthly export." },
      { title: "Data migration", detail: "Historical records cleaned, mapped and verified with you before cutover." },
      { title: "Training", detail: "On-site sessions, written SOPs and recorded walkthroughs for each role." },
    ],
    process: [
      { step: "Discovery on site", detail: "We shadow the work, not the documentation of the work." },
      { step: "Blueprint and estimate", detail: "Screen list, data model, phased plan, fixed price per phase." },
      { step: "Phase one in weeks", detail: "The single most painful process goes live first, so value lands early." },
      { step: "Roll out by team", detail: "One department at a time, with training and a feedback loop." },
      { step: "Maintain", detail: "A monthly retainer for changes, support and hosting." },
    ],
    timeline: "8–20 weeks depending on integrations, usually delivered in phases.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Python", "Docker", "AWS", "Azure", "WhatsApp Business API", "QuickBooks API"],
    problem: [
      "One person holds the whole process in their head and a spreadsheet.",
      "Month-end reporting takes four days of copy-paste.",
      "Three systems hold three versions of the same customer record.",
      "Your current software cannot be changed without a vendor quote.",
    ],
    faqs: [
      {
        q: "Build or buy?",
        a: "Buy when an off-the-shelf product covers 80% of your process and the remaining 20% is cheap to work around. Build when the process itself is your advantage. We will tell you if buying is the better answer.",
      },
      {
        q: "Can you work with our legacy system?",
        a: "Usually. We have integrated with old SQL databases, desktop accounting packages and vendor APIs of varying quality. The first week is spent proving the connection before we commit to a date.",
      },
      {
        q: "Who owns it?",
        a: "You do — source code, database and infrastructure, in your accounts, with documentation.",
      },
      {
        q: "What happens after launch?",
        a: "A support retainer covering hosting, monitoring, fixes and a fixed number of change requests each month.",
      },
    ],
    caseStudyTitle: "[Add real client case study — inventory and dispatch system]",
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    shortName: "Quality assurance",
    headline: "Find the bugs before your customers pay for them.",
    summary:
      "Manual and automated testing, device labs and release gatekeeping for teams that ship often.",
    whoFor:
      "Teams about to launch, agencies that need an independent QA pair of eyes, and products with a rising support ticket count.",
    deliverables: [
      { title: "Test plan and matrix", detail: "Devices, browsers, OS versions and user roles, agreed in writing." },
      { title: "Manual test passes", detail: "Functional, regression and exploratory testing with video evidence for each defect." },
      { title: "Real device testing", detail: "Mid-range Android phones common in Pakistan, not just simulators." },
      { title: "Automated regression", detail: "Playwright or Appium suites that run on every pull request." },
      { title: "Accessibility check", detail: "Keyboard paths, contrast, screen reader labels, focus order." },
      { title: "Release gate", detail: "Go or no-go report with severity counts before each release." },
    ],
    process: [
      { step: "Baseline", detail: "We test the current build and report what breaks, ranked by severity." },
      { step: "Coverage plan", detail: "Which cases get automated, which stay manual, and why." },
      { step: "Embed in the sprint", detail: "QA runs in parallel with development, not in the last three days." },
      { step: "Automate the boring part", detail: "Regression suite grows sprint by sprint." },
      { step: "Report", detail: "One page per release: what was tested, what failed, what it puts at risk." },
    ],
    timeline: "1–2 weeks for a launch audit; ongoing per-sprint from there.",
    tech: ["Playwright", "Appium", "Jest", "BrowserStack", "Postman", "k6", " axe-devtools", "Jira"],
    problem: [
      "Releases are followed by an afternoon of apologies.",
      "Nobody tests on the phone your customers actually own.",
      "The same regression comes back every second sprint.",
      "Developers test their own work and call it tested.",
    ],
    faqs: [
      {
        q: "Can you test a product another team built?",
        a: "Yes, and it is one of the most useful things we do. Fresh eyes find the assumptions the original team stopped noticing.",
      },
      {
        q: "How fast can you start?",
        a: "A baseline pass can begin within a week of getting access to the build and staging environment.",
      },
      {
        q: "Do you fix the bugs?",
        a: "We can. Our engineers take defects off your backlog, or we hand a clean, reproducible bug list to your team — your choice.",
      },
      {
        q: "Is automation worth it for us?",
        a: "If you release more than twice a month, yes. If you release quarterly, a disciplined manual pass is better value.",
      },
    ],
    caseStudyTitle: "[Add real client case study — release quality improvement]",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortName: "Digital marketing",
    headline: "Ads that bring buyers, measured against revenue not clicks.",
    summary:
      "Google Ads, Meta, TikTok, SEO and ASO run by the same team that built your product and its tracking.",
    whoFor:
      "Pakistani SMEs tired of paying for traffic that never buys, and products with solid numbers that nobody has heard of yet.",
    deliverables: [
      { title: "Tracking audit", detail: "Conversion tags verified end to end. No campaign starts on broken measurement." },
      { title: "Google Ads", detail: "Search and Performance Max, structured on services and locations that convert." },
      { title: "Meta campaigns", detail: "Facebook and Instagram creative, audiences and retargeting on WhatsApp and lead forms." },
      { title: "TikTok", detail: "Short-form creative made for the platform, with Spark Ads on what performs." },
      { title: "SEO", detail: "Technical fixes, page speed, content briefs and local SEO for city-level search." },
      { title: "ASO", detail: "Store listing, keywords, screenshots and review strategy for your app." },
    ],
    process: [
      { step: "Measurement first", detail: "If we cannot see the sale, we do not switch the ads on." },
      { step: "Offer and landing page", detail: "Most campaigns fail here. We fix the page before scaling the spend." },
      { step: "Small, fast tests", detail: "Three to five creative angles per platform, judged in seven days." },
      { step: "Scale what works", detail: "Budget moves to the ads producing enquiries, not the cheapest clicks." },
      { step: "Monthly review", detail: "One page: spend, cost per enquiry, cost per sale, what changes next." },
    ],
    timeline: "Set up in 2 weeks, first meaningful data at 30 days, real decisions at 90.",
    tech: ["Google Ads", "Meta Ads Manager", "TikTok Ads Manager", "GA4", "Google Tag Manager", "Looker Studio", "Semrush", "Ahrefs", "AppsFlyer"],
    problem: [
      "You are spending on ads and cannot point to a single sale.",
      "An agency sends a dashboard of clicks and impressions every month.",
      "Your landing page loads slowly and asks for too much, too early.",
      "Nobody has verified the conversion tag since 2023.",
    ],
    faqs: [
      {
        q: "What is the minimum ad budget?",
        a: "PKR 150,000 per month in media spend for Google or Meta to generate enough data to make decisions. Below that, SEO and content usually earns better returns.",
      },
      {
        q: "How do you charge?",
        a: "A flat monthly fee based on scope, separate from your media budget, agreed before we start. No percentage-of-spend incentives.",
      },
      {
        q: "Are you actually a partner?",
        a: "We hold [confirm and add: Google Partner / Meta Business Partner / Microsoft Partner] status. Badges on this site link to the official verification pages once confirmed.",
      },
      {
        q: "How soon will we see results?",
        a: "Lead quality shifts in the first month. Reliable cost-per-sale numbers take a full quarter, because that is how long a decision cycle needs.",
      },
    ],
    caseStudyTitle: "[Add real client case study — lead generation campaign]",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
