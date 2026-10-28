export type CaseStudy = {
  slug: string;
  clientLabel: string;
  /** "Retail · Karachi" style descriptor — never an invented client name. */
  descriptor: string;
  services: string[];
  challenge: string;
  approach: string[];
  result: string[];
  tech: string[];
  quote: string;
  /** Aspect ratio 16:9 project screenshot slot. */
  coverAlt: string;
  featured?: boolean;
};

/**
 * NO INVENTED RESULTS. Every number below is a marked placeholder that the
 * client must replace with a real, verifiable figure before launch.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ordering-app-case-study",
    clientLabel: "[Add real client name]",
    descriptor: "Retail · Karachi",
    services: ["Mobile apps", "Digital marketing"],
    challenge:
      "Wholesale customers placed orders over WhatsApp. Staff retyped them into a spreadsheet, prices drifted between reps, and peak days produced errors that cost real margin.",
    approach: [
      "Mapped the ordering flow with three reps on the shop floor before writing a line of code.",
      "Built a React Native ordering app with a customer price list, repeat-order shortcuts and offline queueing for patchy connections.",
      "Instrumented every step — signup, first order, repeat order — in Firebase and the Meta SDK before launch.",
      "Ran Google App campaigns and Meta retargeting against the repeat-order event, not installs.",
    ],
    result: [
      "[Add real result: e.g. orders moved off WhatsApp within N weeks]",
      "[Add real result: cost per first order]",
      "[Add real result: repeat order rate change]",
    ],
    tech: ["React Native", "Firebase", "Node.js", "PostgreSQL", "Google App Campaigns", "Meta Ads"],
    quote: "[Add real client quote]",
    coverAlt: "[Upload project screenshot: ordering app on two phones, 1920x1080 WebP]",
    featured: true,
  },
  {
    slug: "b2b-portal-case-study",
    clientLabel: "[Add real client name]",
    descriptor: "Distribution · Lahore",
    services: ["Web development", "Custom software"],
    challenge:
      "Sales staff could not see stock or pricing without calling the warehouse. Quotes took a day to go out and lost deals to faster competitors.",
    approach: [
      "Two weeks embedded with the sales team to map the real quoting process.",
      "Built a Next.js portal with live stock, tiered pricing and one-click PDF quotes.",
      "Integrated the existing accounting package through a nightly sync instead of a risky big-bang migration.",
      "Trained each role on site, in Urdu and English, with recorded walkthroughs.",
    ],
    result: [
      "[Add real result: quote turnaround time]",
      "[Add real result: adoption across the sales team]",
      "[Add real result: hours of manual work removed per week]",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "QuickBooks API", "Docker"],
    quote: "[Add real client quote]",
    coverAlt: "[Upload project screenshot: quoting dashboard on a laptop, 1920x1080 WebP]",
  },
  {
    slug: "lead-gen-case-study",
    clientLabel: "[Add real client name]",
    descriptor: "Professional services · Islamabad",
    services: ["Digital marketing", "Web development"],
    challenge:
      "Google Ads had run for a year with no idea which enquiries became clients. The landing page asked for nine fields and loaded in six seconds.",
    approach: [
      "Rebuilt conversion tracking end to end and reconciled it against the CRM for the previous six months.",
      "Rewrote the landing page around one decision, three fields and a call booking option.",
      "Split the account into service-level campaigns so budget could follow real margin.",
      "Added WhatsApp as a conversion path alongside the form, measured separately.",
    ],
    result: [
      "[Add real result: cost per qualified enquiry]",
      "[Add real result: enquiry to consultation rate]",
      "[Add real result: landing page load time]",
    ],
    tech: ["Google Ads", "GA4", "Google Tag Manager", "Looker Studio", "Next.js"],
    quote: "[Add real client quote]",
    coverAlt: "[Upload project screenshot: landing page and ad set, 1920x1080 WebP]",
  },
  {
    slug: "qa-rescue-case-study",
    clientLabel: "[Add real client name]",
    descriptor: "Fintech · Remote",
    services: ["Quality assurance", "Mobile apps"],
    challenge:
      "Every release was followed by hotfixes. The in-house team had no device coverage beyond two flagship phones and no regression suite.",
    approach: [
      "Ran a two-week baseline pass and reported defects by severity with video evidence.",
      "Built a Playwright and Appium regression suite that runs on every pull request.",
      "Added eight mid-range Android devices common in the local market to the test matrix.",
      "Introduced a go or no-go release gate owned by QA.",
    ],
    result: [
      "[Add real result: post-release defects per month]",
      "[Add real result: release frequency change]",
      "[Add real result: regression suite runtime and coverage]",
    ],
    tech: ["Playwright", "Appium", "BrowserStack", "Jira", "GitHub Actions"],
    quote: "[Add real client quote]",
    coverAlt: "[Upload project screenshot: test report and device matrix, 1920x1080 WebP]",
  },
  {
    slug: "ui-redesign-case-study",
    clientLabel: "[Add real client name]",
    descriptor: "Marketplace · Pakistan",
    services: ["UI/UX design", "Mobile apps"],
    challenge:
      "Plenty of installs, very few second sessions. Sellers abandoned onboarding halfway and support answered the same questions daily.",
    approach: [
      "Reviewed 30 days of session recordings and funnel data to find the three screens causing drop-off.",
      "Prototyped a rebuilt onboarding flow and tested it with eight users before development started.",
      "Delivered a documented design system so both app and web stayed consistent.",
      "Ran A/B tests on the two highest-impact screens after release.",
    ],
    result: [
      "[Add real result: onboarding completion rate]",
      "[Add real result: day-7 retention change]",
      "[Add real result: support tickets reduced]",
    ],
    tech: ["Figma", "Maze", "Microsoft Clarity", "Firebase", "React Native"],
    quote: "[Add real client quote]",
    coverAlt: "[Upload project screenshot: before and after onboarding screens, 1920x1080 WebP]",
  },
  {
    slug: "ecommerce-case-study",
    clientLabel: "[Add real client name]",
    descriptor: "E-commerce · Pakistan",
    services: ["Web development", "Digital marketing"],
    challenge:
      "A WooCommerce store that crashed on campaign days and a checkout that lost half its mobile sessions before payment.",
    approach: [
      "Rebuilt the storefront on Next.js with edge caching and WebP imagery throughout.",
      "Redesigned the checkout to three steps with local wallet and bank transfer options.",
      "Set up Meta and TikTok catalogues with server-side conversion events.",
      "Rebuilt Google Shopping feeds and Performance Max asset groups.",
    ],
    result: [
      "[Add real result: mobile conversion rate]",
      "[Add real result: page load time on 4G]",
      "[Add real result: return on ad spend]",
    ],
    tech: ["Next.js", "WooCommerce API", "Stripe", "JazzCash", "Meta Commerce", "TikTok Catalog"],
    quote: "[Add real client quote]",
    coverAlt: "[Upload project screenshot: storefront on phone and desktop, 1920x1080 WebP]",
  },
];
