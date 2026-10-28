import { Link, useRouter } from "@/lib/router";
import { getService, SERVICES, type Service } from "@/data/services";
import { CASE_STUDIES } from "@/data/cases";
import { Btn, Container, FaqList, H2, Kicker, Lede, Note, PhotoSlot, Pill } from "@/components/ui";
import { CtaBand } from "@/components/forms";
import { useSeo } from "@/lib/seo";

export default function ServiceDetail() {
  const { path } = useRouter();
  const slug = path.replace("/services/", "");
  const service = getService(slug);

  return service ? <ServicePage service={service} /> : <MissingPage what="service" to="/services" />;
}

function MissingPage({ what, to }: { what: string; to: string }) {
  return (
      <Container className="pt-40 pb-24">
        <h1 className="font-display text-3xl font-bold text-chalk">We could not find that {what}.</h1>
        <p className="mt-4 text-muted">Try the full list instead.</p>
        <div className="mt-6">
          <Btn to={to}>See everything</Btn>
        </div>
      </Container>
  );
}

function ServicePage({ service }: { service: Service }) {
  const related = CASE_STUDIES.filter((c) => c.services.includes(service.shortName));
  const caseStudy = related[0];
  const next = SERVICES[(SERVICES.findIndex((s) => s.slug === service.slug) + 1) % SERVICES.length];

  useSeo({
    title: `${service.name} in Pakistan — ${service.shortName} | SoftAxes`,
    description: `${service.summary} Typical timeline: ${service.timeline}`,
    path: `/services/${service.slug}`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.summary,
        serviceType: service.name,
        provider: { "@type": "Organization", name: "SoftAxes Technology Pvt Ltd", url: "https://www.softaxes.com/" },
        areaServed: ["Pakistan", "United Arab Emirates", "United Kingdom", "United States", "Australia"],
        url: `https://www.softaxes.com/services/${service.slug}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  });

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line pt-28 pb-14 sm:pt-36 sm:pb-18">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-7 font-mono text-[12px] text-muted">
            <Link to="/" className="hover:text-mint">
              SoftAxes
            </Link>
            <span aria-hidden="true" className="mx-2 text-line">
              /
            </span>
            <Link to="/services" className="hover:text-mint">
              Services
            </Link>
            <span aria-hidden="true" className="mx-2 text-line">
              /
            </span>
            <span className="text-chalk">{service.shortName}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Kicker>{service.name}</Kicker>
              <h1 className="font-display text-[clamp(2.1rem,5.2vw,3.4rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-chalk">
                {service.headline}
              </h1>
              <Lede className="mt-6 text-[18px]">{service.summary}</Lede>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Btn to="/contact" size="lg">
                  Get a quote
                </Btn>
                <Btn to="/work" variant="ghost" size="lg">
                  See related work
                </Btn>
              </div>
            </div>

            <aside className="rounded-xl2 border border-line bg-surface p-6 lg:mt-4">
              <dl className="space-y-5">
                {[
                  ["Typical timeline", service.timeline],
                  ["Team on the work", "[Add real team composition]"],
                  ["Starting from", "[Add real starting price]"],
                  ["Engagement", "Fixed price per phase, or a monthly retainer"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[11.5px] tracking-[0.04em] text-muted uppercase">{k}</dt>
                    <dd className="mt-1.5 text-[15px] leading-snug font-semibold text-chalk">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-[13.5px] leading-relaxed text-muted">
                  Not ready to talk? Send the problem in writing and we will reply with a suggested first phase.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-18 sm:py-22" aria-labelledby={`prob-${service.slug}`}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <H2 id={`prob-${service.slug}`}>The problem this solves</H2>
            </div>
            <ul className="border-t border-line">
              {service.problem.map((p) => (
                <li key={p} className="flex gap-4 border-b border-line py-5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  <p className="text-[17px] leading-snug font-semibold text-chalk">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="border-y border-line bg-surface2 py-18 sm:py-22" aria-labelledby={`del-${service.slug}`}>
        <Container>
          <div className="max-w-[56ch]">
            <H2 id={`del-${service.slug}`}>What you actually receive</H2>
            <Lede className="mt-4">Named deliverables, not activities. Each one appears in the proposal you sign.</Lede>
          </div>
          <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
            {service.deliverables.map((d, i) => (
              <div key={d.title} className="border-t border-line py-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11.5px] text-mint">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-[16.5px] font-bold text-chalk">{d.title}</h3>
                </div>
                <p className="mt-2 pl-8 text-[14.5px] leading-[1.6] text-muted">{d.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-18 sm:py-22" aria-labelledby={`proc-${service.slug}`}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <H2 id={`proc-${service.slug}`}>How it runs</H2>
              <Lede className="mt-4">
                Five stages. You see something usable at the end of each one, and you can stop after any of them.
              </Lede>
            </div>
            <ol className="relative border-l border-line pl-7 sm:pl-9">
              {service.process.map((p, i) => (
                <li key={p.step} className={i === service.process.length - 1 ? "" : "pb-9"}>
                  <span
                    aria-hidden="true"
                    className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink bg-mint"
                  />
                  <h3 className="text-[17.5px] font-bold text-chalk">{p.step}</h3>
                  <p className="mt-1.5 max-w-[58ch] text-[14.5px] leading-[1.62] text-muted">{p.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Tech + case study */}
      <section className="border-y border-line bg-surface2 py-18 sm:py-22" aria-labelledby={`tech-${service.slug}`}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <H2 id={`tech-${service.slug}`}>Tools and tech</H2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted prose-body">
                We pick the boring, well-supported option unless there is a specific reason not to. Your team should be
                able to hire someone who knows it.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <Pill key={t}>{t.trim()}</Pill>
                ))}
              </div>
            </div>

            <article>
              <PhotoSlot ratio="16/9" label={caseStudy?.coverAlt ?? "[Upload project screenshot 1920x1080]"} note="WebP · 16:9 · real product screenshot" />
              <div className="mt-6 rounded-xl2 border border-line bg-ink/50 p-6">
                <p className="font-mono text-[11.5px] tracking-[0.04em] text-muted uppercase">Case study</p>
                <h3 className="mt-2 font-display text-[21px] leading-snug font-bold text-chalk">{service.caseStudyTitle}</h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-[13px] font-semibold text-mint">Challenge</h4>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                      {caseStudy?.challenge ?? "[Add the client's starting situation.]"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-mint">Result</h4>
                    <ul className="mt-1.5 space-y-1.5">
                      {(caseStudy?.result ?? ["[Add real result]"]).map((r) => (
                        <li key={r} className="text-[14px] leading-relaxed text-muted">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Note label="Placeholder">This slot needs a real, verifiable project before launch. Do not publish invented numbers.</Note>
                <div className="mt-5">
                  <Btn to="/work" variant="quiet">
                    Browse all case studies
                  </Btn>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-18 sm:py-22" aria-labelledby={`faq-${service.slug}`}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <H2 id={`faq-${service.slug}`}>Straight answers</H2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted prose-body">
                Prices on this page are ranges, not quotes. The only accurate number comes from a written scope.
              </p>
            </div>
            <FaqList items={service.faqs} idPrefix={`faq-${service.slug}`} />
          </div>
        </Container>
      </section>

      {/* Next service */}
      <section className="border-t border-line py-14">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[11.5px] text-muted">Next service</p>
              <Link
                to={`/services/${next.slug}`}
                className="mt-1.5 inline-block font-display text-[24px] font-bold tracking-[-0.03em] text-chalk transition-colors hover:text-mint"
              >
                {next.name}
              </Link>
            </div>
            <Btn to="/contact" size="lg">
              Get a quote
            </Btn>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
