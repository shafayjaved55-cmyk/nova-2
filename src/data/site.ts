/**
 * Company facts. Everything in [square brackets] must be replaced before launch.
 * See LAUNCH-CHECKLIST.md for the full list.
 */

export const COMPANY = {
  legalName: "SoftAxes Technology Pvt Ltd",
  shortName: "SoftAxes",
  phoneDisplay: "[Add phone number]",
  phoneHref: "tel:+920000000000",
  whatsappDisplay: "[Add WhatsApp number]",
  whatsappHref: "https://wa.me/920000000000",
  email: "[Add email address]",
  emailHref: "mailto:hello@softaxes.com",
  addressLines: ["[Add street address]", "[Add city], Pakistan", "[Add postcode]"],
  mapEmbedUrl: "[Paste Google Maps embed URL for the office]",
  calendarEmbedUrl: "[Paste Calendly / Google Calendar booking URL]",
  hours: "Mon–Fri, 9:00–18:00 PKT",
  responsePromise: "We reply to every enquiry within one working day.",
  socials: [
    { label: "LinkedIn", href: "[Add LinkedIn URL]" },
    { label: "Facebook", href: "[Add Facebook URL]" },
    { label: "Instagram", href: "[Add Instagram URL]" },
  ],
  registrations: [
    { name: "SECP", detail: "[Add registration number]" },
    { name: "PASHA", detail: "[Add membership status]" },
    { name: "PSEB", detail: "[Add registration number]" },
    { name: "Chamber of Commerce", detail: "[Add membership number]" },
  ],
};

export const NAV = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
];

export const SERVICE_OPTIONS = [
  "Mobile app development",
  "Web development",
  "UI/UX design",
  "Custom software",
  "Quality assurance",
  "Digital marketing",
  "Not sure yet",
];

export const BUDGET_RANGES = [
  "Under PKR 500k",
  "PKR 500k – 1.5m",
  "PKR 1.5m – 4m",
  "USD 5k – 15k",
  "USD 15k – 50k",
  "USD 50k+",
  "Need guidance",
];

/**
 * ── PARTNER SLIDER ─────────────────────────────────────────────────────────
 * Rules built into the component:
 *   1. Only `confirmed: true` partners are rendered. Confirm the partnership in
 *      each platform's own dashboard, then flip the flag.
 *   2. Official badge files live in /public/assets/partners/. We never draw,
 *      recolour, crop or restyle a partner logo.
 *   3. If a badge file is missing, the chip shows a clearly labelled upload slot.
 */
export type Partner = {
  id: string;
  name: string;
  /** Full path to the official badge SVG you upload. */
  asset: string;
  /** Official verification / profile page the badge links to. */
  profileUrl: string;
  confirmed: boolean;
};

export const PARTNERS: Partner[] = [
  {
    id: "google",
    name: "Google Partner",
    asset: "/assets/partners/google-partner.svg",
    profileUrl: "[add real Google Partner profile URL]",
    confirmed: false,
  },
  {
    id: "meta",
    name: "Meta Business Partner",
    asset: "/assets/partners/meta-partner.svg",
    profileUrl: "[add real Meta Business Partner profile URL]",
    confirmed: false,
  },
  {
    id: "tiktok",
    name: "TikTok Marketing Partner",
    asset: "/assets/partners/tiktok-partner.svg",
    profileUrl: "[add real TikTok Marketing Partner profile URL]",
    confirmed: false,
  },
  {
    id: "microsoft",
    name: "Microsoft Partner",
    asset: "/assets/partners/microsoft-partner.svg",
    profileUrl: "[add real Microsoft partner profile URL]",
    confirmed: false,
  },
];
