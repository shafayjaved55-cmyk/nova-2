export type Article = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  readTime: string;
  updated: string;
  author: string;
  /** Body blocks — rendered by the article template. */
  body: { type: "h2" | "p" | "list" | "quote" | "note"; text?: string; items?: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "app-development-cost-in-pakistan",
    title: "What an app costs to build in Pakistan in 2026",
    description:
      "A plain breakdown of app development pricing in Pakistan: what drives the number, what a realistic range looks like, and where cheap quotes cost you more.",
    topic: "Budgeting",
    readTime: "8 min read",
    updated: "2026",
    author: "SoftAxes Technology",
    body: [
      {
        type: "p",
        text: "Ask five software houses what an app costs and you will get five numbers, sometimes differing by a factor of ten. The gap is not greed. It is scope. This is how we price, and how to read a quote you have been handed.",
      },
      { type: "h2", text: "The three things that actually set the price" },
      {
        type: "list",
        items: [
          "Number of distinct screens and states. A screen with error, empty and loading states is four pieces of work, not one.",
          "Integrations. Payments, WhatsApp Business API, ERP connections and courier APIs each add days of testing, not just coding.",
          "Who is accountable after launch. Support, store rejections and OS updates are a cost whether or not your quote mentions them.",
        ],
      },
      { type: "h2", text: "Where the money goes" },
      {
        type: "p",
        text: "On a typical v1, design takes roughly 15% of the effort, development 55%, QA and release 20%, project management the rest. If a quote has no visible QA line, you are paying for it later in a different form.",
      },
      {
        type: "note",
        text: "[Add real starting price band and any published rate card before launch.]",
      },
      { type: "h2", text: "How to compare two quotes fairly" },
      {
        type: "list",
        items: [
          "Ask both for a screen list. If one has 12 screens and the other has 30, the cheaper number is not cheaper.",
          "Ask who owns the repository and the store accounts. You should.",
          "Ask what happens when Apple rejects the build. It happens to everyone eventually.",
          "Ask for the test plan. Not the promise — the plan.",
        ],
      },
      { type: "h2", text: "The expensive version of cheap" },
      {
        type: "p",
        text: "We get rebuild requests from teams that paid for a fast, low-cost build with no design system, no tests and no documentation. Starting again costs more than doing it properly once. That is not a sales line, it is arithmetic.",
      },
      {
        type: "quote",
        text: "[Add a short line on your own typical v1 price band and delivery window.]",
      },
    ],
  },
  {
    slug: "google-ads-mistakes-small-businesses",
    title: "Seven Google Ads mistakes we see in Pakistani small businesses",
    description:
      "The same seven errors cost small businesses real money every month. Most are fixable in an afternoon once you know where to look.",
    topic: "Advertising",
    readTime: "7 min read",
    updated: "2026",
    author: "SoftAxes Technology",
    body: [
      {
        type: "p",
        text: "We audit a lot of accounts. The names change, the mistakes repeat. Here are the seven that cost the most, in order.",
      },
      { type: "h2", text: "1. No conversion tracking, or tracking the wrong thing" },
      {
        type: "p",
        text: "If the account optimises towards form submissions and a third of those forms are spam or job applications, the algorithm is happily spending your money on the wrong people. Verify the tag against real enquiries, not Tag Assistant alone.",
      },
      { type: "h2", text: "2. One campaign, all services" },
      {
        type: "p",
        text: "A plumber and a construction company should not share a budget. Separate campaigns by service so you can put money behind the work with margin.",
      },
      { type: "h2", text: "3. Broad match with no negative list" },
      {
        type: "list",
        items: [
          "Add 'free', 'jobs', 'salary', 'course' and government-related terms as negatives from day one.",
          "Review the search terms report weekly for the first two months, then monthly.",
        ],
      },
      { type: "h2", text: "4. Sending traffic to the homepage" },
      {
        type: "p",
        text: "The homepage has to serve everyone. An ad has one promise. The page it lands on should answer exactly that promise and ask for one action.",
      },
      { type: "h2", text: "5. Judging results too early" },
      {
        type: "p",
        text: "Two weeks is not a verdict. Give a campaign enough budget to exit the learning phase, then judge cost per qualified enquiry, never cost per click.",
      },
      { type: "h2", text: "6. Ignoring WhatsApp as a conversion" },
      {
        type: "p",
        text: "In Pakistan, a large share of serious buyers will message rather than fill a form. If WhatsApp conversations are not tracked as conversions, you are blind to half your pipeline.",
      },
      { type: "h2", text: "7. No idea what a customer is worth" },
      {
        type: "p",
        text: "You cannot set a sensible cost-per-acquisition target without knowing what a customer earns you in the first year. Work that out before you scale spend, not after.",
      },
      {
        type: "note",
        text: "[Add a real anonymised account example and figures before publishing.]",
      },
    ],
  },
  {
    slug: "how-to-choose-a-software-house",
    title: "How to choose a software house without getting burned",
    description:
      "Ten questions that separate a real development partner from a team that will disappear after the deposit. Written for founders and SME owners.",
    topic: "Choosing a partner",
    readTime: "6 min read",
    updated: "2026",
    author: "SoftAxes Technology",
    body: [
      {
        type: "p",
        text: "The decision is less about technology and more about what happens in month four. These are the questions we would ask in your position, and the answers we would expect.",
      },
      { type: "h2", text: "Ask for the screen list, not the quote" },
      {
        type: "p",
        text: "Any serious estimate comes from a written scope: screens, states, integrations, roles. A one-page quote with a total and no scope is a promise nobody can keep.",
      },
      { type: "h2", text: "Ask who writes the code" },
      {
        type: "list",
        items: [
          "In-house, freelance subcontractors, or resold to a third team? All three exist in this market.",
          "Who reviews the code, and can you see the repository during the project, not after?",
        ],
      },
      { type: "h2", text: "Ask what you will see in two weeks" },
      {
        type: "p",
        text: "You should be tapping a clickable prototype early, not reading status reports. Demos beat documents.",
      },
      { type: "h2", text: "Ask about QA specifically" },
      {
        type: "p",
        text: "'We test everything' is not an answer. Ask which devices, which browsers, who signs off, and what happens when a defect is found the day before release.",
      },
      { type: "h2", text: "Ask what happens after launch" },
      {
        type: "list",
        items: [
          "How long is the warranty period, and what does it cover?",
          "What does a monthly retainer cost, and what is included?",
          "If you stop paying, do you still have the code and the accounts?",
        ],
      },
      { type: "h2", text: "Ask for a reference you can call" },
      {
        type: "p",
        text: "A past client, on a phone call, not a logo on a slide. If they cannot arrange one, that is the answer.",
      },
      {
        type: "note",
        text: "[Add a downloadable version of this checklist as a lead magnet before launch.]",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
