import { Link } from "@/lib/router";
import { SERVICES } from "@/data/services";
import { COMPANY } from "@/data/site";
import { Btn, Container, FaqList, H2, Kicker, Lede, Note, PhotoSlot, Stat } from "@/components/ui";
import { BuildConsole } from "@/components/BuildConsole";
import { CtaBand, InlineCta } from "@/components/forms";
import { PartnerSlider } from "@/components/PartnerSlider";
import { useSeo } from "@/lib/seo";

const faqs = [
  {
    q: "Do you build and market, or do I need two agencies?",
    a: "Both, under one roof. The team that instruments your app and site is the same team running the campaigns, so the numbers you are judged on are the ones we can actually see.",
  },
  {
    q: "How do you price work?",
    a: "Fixed price per phase, against a written screen list. No hourly mystery. Marketing is a flat monthly fee separate from your media spend.",
  },
  {
    q: "Who owns the code, the accounts and the data?",
    a: "You do. Repositories, store listings, ad accounts and analytics live in your organisation from the first week, not at handover.",
  },
  {
    q: "How involved do I need to be?",
    a: "One decision-maker, roughly two hours a week: a sprint review, a few approvals, and quick answers when we are blocked.",
  },
  {
    q: "Can you take over a project another team started?",
    a: "Often. We start with a two-week technical audit, then tell you honestly whether to continue, fix or rebuild.",
  },
  {
    q: "Where is your team?",
    a: `${COMPANY.addressLines[1]}. We work with Pakistani SMEs and international startups across UK, UAE, US and Australia time zones.`,
  },
];

export default function Home() {
  useSeo({
    title: "SoftAxes Technology — We build the software, then bring the customers",
    description:
      "Web apps, mobile apps and the Google, Meta and TikTok ads that fill them with users. One Pakistani team from first design to first sale.",
    path: "/",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  });

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20">
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
            <div>
              <h1 className="font-display text-[clamp(2.4rem,6.4vw,4.1rem)] leading-[0.98] font-extrabold tracking-[-0.035em] text-chalk">
                We build the software, <span className="grad-text">then bring the customers.</span>
              </h1>
              <p className="mt-6 max-w-[54ch] text-[17.5px] leading-[1.6] text-muted">
                Web apps, mobile apps and the Google, Meta and TikTok ads that fill them with users. One team from first
                design to first sale.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Btn to="/contact" size="lg">
                  Book a free strategy call
                </Btn>
                <Btn to="/work" variant="ghost" size="lg">
                  See what we build
                </Btn>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13.5px] text-muted">
                <span>30 minutes, no sales deck</span>
                <span aria-hidden="true" className="text-line">
                  /
                </span>
                <span>Reply within one working day</span>
                <span aria-hidden="true" className="text-line">
                  /
                </span>
                <span>{COMPANY.addressLines[1]}</span>
              </p>
            </div>

            <BuildConsole />
          </div>
        </Container>
      </section>

      {/* ── Partner slider ───────────────────────────────────────────────── */}
      <section aria-labelledby="partners" className="border-y border-line bg-surface2 py-12 sm:py-14">
        <Container>
          <h2 id="partners" className="sr-only">
            Platform partnerships
          </h2>
          <PartnerSlider />
        </Container>
      </section>

      {/* ── Problem ──────────────────────────────────────────────────────── */}
      <section className="py-18 sm:py-24" aria-labelledby="problem">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Kicker>Why launches go quiet</Kicker>
              <H2 id="problem">The gap between the two teams is where the money disappears.</H2>
              <Lede className="mt-5">
                You do not have a technology problem and a marketing problem. You have one project that two different
                companies are half-watching.
              </Lede>
            </div>

            <ul className="border-t border-line">
              {[
                {
                  lead: "Developers in one company, marketers in another.",
                  body: "The agency building your app has never opened your ad account. The agency running your ads cannot change a landing page without a ticket.",
                },
                {
                  lead: "Nothing is connected.",
                  body: "No events on the screens that matter, no conversion values, no way to say which rupee of spend produced which sale.",
                },
                {
                  lead: "You launch to silence.",
                  body: "Store listing live, site deployed, then a quiet fortnight while everyone waits for the other team to start promoting.",
                },
                {
                  lead: "Six months later, a rebuild.",
                  body: "No design system, no tests, no documentation. Cheaper to start again than to change anything. We have inherited that project more than once.",
                },
              ].map((item) => (
                <li key={item.lead} className="group border-b border-line py-6 sm:py-7">
                  <h3 className="text-[19px] leading-snug font-bold text-chalk transition-colors group-hover:text-mint sm:text-[21px]">
                    {item.lead}
                  </h3>
                  <p className="mt-2.5 max-w-[62ch] text-[15px] leading-[1.65] text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <InlineCta
            text="If two of those four describe your project, the next call is worth thirty minutes."
            secondary={
              <Btn to="/process" variant="quiet">
                How we work instead
              </Btn>
            }
          />
        </Container>
      </section>

      {/* ── Services rows ────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-surface2 py-18 sm:py-24" aria-labelledby="services">
        <Container>
          <div className="max-w-[62ch]">
            <H2 id="services">Six things we do, and do not pretend are one thing.</H2>
            <Lede className="mt-5">
              Most clients start with two of these. Build and marketing sit in the same plan, so nothing gets thrown
              over a wall.
            </Lede>
          </div>

          <ul className="mt-12 border-t border-line">
            {SERVICES.map((s) => (
              <li key={s.slug} className="border-b border-line">
                <Link
                  to={`/services/${s.slug}`}
                  className="group -mx-3 flex flex-col gap-3 rounded-lg px-3 py-6 transition-colors duration-200 hover:bg-ink/60 sm:flex-row sm:items-center sm:gap-8 sm:py-7"
                >
                  <span
                    aria-hidden="true"
                    className="hidden w-0 shrink-0 self-stretch bg-mint transition-all duration-300 group-hover:w-1 sm:block"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[21px] leading-tight font-bold tracking-[-0.025em] text-chalk transition-colors group-hover:text-mint sm:text-[26px]">
                      {s.name}
                    </span>
                    <span className="mt-2 block max-w-[64ch] text-[14.5px] leading-relaxed text-muted">{s.summary}</span>
                  </span>
                  <span className="shrink-0 font-mono text-[11.5px] text-muted transition-colors group-hover:text-mint">
                    {s.timeline.split(",")[0]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <InlineCta text="Not sure which one you need first? That is exactly what the strategy call is for." to="/services" label="Compare all six services" />
        </Container>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-18 sm:py-24" aria-labelledby="process">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[46ch]">
              <H2 id="process">Four stages. You always know which one you are in.</H2>
            </div>
            <Btn to="/process" variant="quiet">
              Full process, in detail
            </Btn>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Discover", w: "Week 1–2", d: "We map the process, the users and the numbers. You get a written scope and a fixed price before committing." },
              { t: "Design", w: "Week 2–4", d: "A clickable prototype you can use on your phone. Sign-off happens here, when changes are still cheap." },
              { t: "Build and test", w: "Sprints of 2 weeks", d: "A working build every fortnight. QA runs alongside development, not in the last three days." },
              { t: "Launch and grow", w: "Week 10+", d: "Store submission, tracking verification, then campaigns. The first month of data tells us what to scale." },
            ].map((step, i) => (
              <li
                key={step.t}
                className={cnOffset(i)}
              >
                <span className="font-mono text-[11.5px] text-mint">{step.w}</span>
                <h3 className="mt-3 font-display text-[22px] font-bold tracking-[-0.025em] text-chalk">{step.t}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-muted">{step.d}</p>
              </li>
            ))}
          </ol>

          <Note label="Confirm with client">These stage names are used in every proposal, so keep them consistent with the sales deck.</Note>
        </Container>
      </section>

      {/* ── Stats + testimonial slot ─────────────────────────────────────── */}
      <section className="border-y border-line bg-surface2 py-18 sm:py-24" aria-labelledby="proof">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <H2 id="proof">The work, in numbers.</H2>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                <Stat value={100} suffix="+" label="Clients" detail="Since 2019, mostly in Pakistan, the Gulf and the UK." />
                <Stat value={400} suffix="+" label="Projects" detail="Apps, portals, campaigns and rebuilds." />
                <Stat value={15} suffix="+" label="Team" detail="Developers, designers, QA and media buyers. In-house." />
              </div>
              <Note label="Confirm with client">
                Confirm the three figures above, plus founding year and office locations, before launch.
              </Note>
            </div>

            <div className="flex flex-col gap-6">
              <PhotoSlot ratio="16/10" label="[Upload real workspace photo 1600x1000]" note="WebP · 3:2 or 16:10 · dark teal grade applied" />
              <figure className="rounded-xl2 border border-line bg-ink/50 p-6">
                <blockquote className="text-[17.5px] leading-[1.5] font-semibold text-chalk prose-body">
                  “<span className="text-muted">[Add real client quote — one sentence on the outcome, in their words.]</span>”
                </blockquote>
                <figcaption className="mt-4 text-[13.5px] text-muted">
                  [Add real client name], [Add role], [Add company]
                </figcaption>
              </figure>
            </div>
          </div>

          <InlineCta text="Want the numbers behind a specific project? Ask on the call and we will walk you through it." to="/work" label="Read the case studies" />
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-18 sm:py-24" aria-labelledby="faq">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <H2 id="faq">Questions we get on almost every first call.</H2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted prose-body">
                Something not covered? Ask it directly —{" "}
                <a href={COMPANY.whatsappHref} target="_blank" rel="noreferrer" className="font-semibold text-chalk underline decoration-line decoration-2 underline-offset-4 hover:decoration-mint">
                  WhatsApp
                </a>{" "}
                gets the fastest reply.
              </p>
            </div>
            <FaqList items={faqs} idPrefix="home-faq" />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

/** Staggered offsets so the four stages do not read as a row of identical cards. */
function cnOffset(i: number) {
  return [
    "bg-ink p-6 sm:p-7",
    i === 1 ? "sm:mt-8" : "",
    i === 2 ? "lg:mt-4" : "",
    i === 3 ? "sm:mt-8 lg:mt-12" : "",
  ]
    .filter(Boolean)
    .join(" ");
}
