import { Link } from "@/lib/router";
import { SERVICES, type Service } from "@/data/services";
import { Btn, Container, H2, Kicker, Lede, PhotoSlot, Pill } from "@/components/ui";
import { useSeo } from "@/lib/seo";
import { cn } from "@/utils/cn";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.summary,
      provider: { "@type": "Organization", name: "SoftAxes Technology Pvt Ltd" },
      url: `https://www.softaxes.com/services/${s.slug}`,
    },
  })),
};

export default function Services() {
  useSeo({
    title: "Services — apps, web, design, software, QA and ads | SoftAxes",
    description:
      "Six services from one Pakistani team: mobile apps, web development, UI/UX design, custom software, quality assurance and digital marketing on Google, Meta and TikTok.",
    path: "/services",
    schema: serviceSchema,
  });

  return (
    <>
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker>Services</Kicker>
              <h1 className="font-display text-[clamp(2.2rem,5.6vw,3.6rem)] leading-[1.0] font-extrabold tracking-[-0.035em] text-chalk">
                Build it, test it, then fill it with customers.
              </h1>
            </div>
            <Lede className="lg:pb-3">
              Six services, one delivery team. Take one, or take the whole chain — either way the person who scopes your
              build is in the same room as the person spending your ad budget.
            </Lede>
          </div>
        </Container>
      </section>

      {SERVICES.map((service, index) => (
        <ServiceBlock key={service.slug} service={service} index={index} />
      ))}

      <section className="border-t border-line bg-surface2 py-18 sm:py-24" aria-labelledby="not-sure">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <H2 id="not-sure">Not sure what you need?</H2>
              <Lede className="mt-5">
                That is the normal starting position. Describe the problem in plain words and we will tell you which of
                these is actually the first move — sometimes it is none of them.
              </Lede>
              <ul className="mt-9 border-t border-line">
                {[
                  ["Customers order or book over WhatsApp", "Mobile app or web portal"],
                  ["The website is slow and generates few enquiries", "Web development, then ads"],
                  ["Users sign up and never return", "UI/UX design before anything new"],
                  ["Operations run on spreadsheets", "Custom software, built in phases"],
                  ["Releases keep breaking", "Quality assurance, starting with an audit"],
                  ["Traffic exists but nobody buys", "Digital marketing plus a landing page rebuild"],
                ].map(([symptom, answer]) => (
                  <li key={symptom} className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="text-[15.5px] font-semibold text-chalk sm:w-1/2">{symptom}</span>
                    <span className="font-mono text-[12.5px] text-mint">{answer}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-xl2 border border-line bg-ink/60 p-6 sm:p-8">
                <h3 className="font-display text-[24px] font-bold tracking-[-0.03em] text-chalk">Book a 30-minute scoping call</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted prose-body">
                  Bring the problem, not a spec. You leave with a recommended first phase, a price range and an honest
                  opinion on whether you need us at all.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Btn to="/contact" size="lg">
                    Book a free strategy call
                  </Btn>
                  <Btn to="/process" variant="ghost" size="lg">
                    See how we work
                  </Btn>
                </div>
              </div>
              <PhotoSlot ratio="3/2" label="[Upload office or workspace photo 1500x1000]" note="WebP · 3:2 · used on Contact page too" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/** Three alternating section shapes so the page does not read as one repeated card. */
function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const variant = index % 3;
  const isDark = index % 2 === 1;

  return (
    <section
      key={service.slug}
      aria-labelledby={`svc-${service.slug}`}
      id={service.slug}
      className={cn("border-t border-line py-16 sm:py-20", isDark && "bg-surface2")}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className={cn(variant === 1 && "lg:order-2")}>
            <p className="font-mono text-[12px] text-mint">{service.shortName}</p>
            <h2
              id={`svc-${service.slug}`}
              className="mt-3 font-display text-[clamp(1.6rem,3.4vw,2.35rem)] leading-[1.08] font-bold tracking-[-0.03em] text-chalk"
            >
              {service.headline}
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.65] text-muted prose-body">{service.summary}</p>

            <div className="mt-7 rounded-xl border border-line bg-ink/40 p-5">
              <h3 className="text-[13px] font-semibold text-chalk">Who it is for</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">{service.whoFor}</p>
            </div>

            <h3 className="mt-8 text-[13px] font-semibold text-chalk">What you get</h3>
            <ul className="mt-3 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li key={d.title} className="flex gap-2.5 text-[14.5px] leading-snug text-muted">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  <span>
                    <span className="font-semibold text-chalk">{d.title}.</span> {d.detail}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Btn to="/contact">Get a quote</Btn>
              <Link
                to={`/services/${service.slug}`}
                className="text-[14.5px] font-semibold text-chalk underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-mint"
              >
                Full service page
              </Link>
            </div>
          </div>

          {variant === 2 ? (
            <div className="lg:order-1 lg:pt-10">
              <div className="rounded-xl2 border border-line bg-ink/40 p-6">
                <h3 className="text-[13px] font-semibold text-chalk">How it works</h3>
                <ol className="mt-4 space-y-4 border-l border-line pl-5">
                  {service.process.map((p) => (
                    <li key={p.step} className="relative">
                      <span aria-hidden="true" className="absolute top-1.5 -left-[23px] h-2 w-2 rounded-full bg-sky" />
                      <p className="text-[14.5px] font-semibold text-chalk">{p.step}</p>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{p.detail}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[12px] text-mint">{service.timeline}</p>
              </div>
            </div>
          ) : (
            <div className={cn(variant === 1 ? "lg:order-1" : "", "lg:pt-10")}>
              <div className="rounded-xl2 border border-line bg-ink/40 p-6">
                <h3 className="text-[13px] font-semibold text-chalk">Typical timeline</h3>
                <p className="mt-2 font-mono text-[13.5px] text-mint">{service.timeline}</p>

                <h3 className="mt-7 text-[13px] font-semibold text-chalk">First three steps</h3>
                <ol className="mt-3 space-y-3">
                  {service.process.slice(0, 3).map((p, i) => (
                    <li key={p.step} className="flex gap-3">
                      <span className="font-mono text-[12px] text-muted">{i + 1}</span>
                      <span>
                        <span className="block text-[14.5px] font-semibold text-chalk">{p.step}</span>
                        <span className="mt-0.5 block text-[13.5px] leading-relaxed text-muted">{p.detail}</span>
                      </span>
                    </li>
                  ))}
                </ol>

                <h3 className="mt-7 text-[13px] font-semibold text-chalk">Tools</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <Pill key={t}>{t.trim()}</Pill>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
