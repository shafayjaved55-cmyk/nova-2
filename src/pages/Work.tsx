import { useMemo, useState } from "react";
import { CASE_STUDIES } from "@/data/cases";
import { Btn, Container, H2, Kicker, Lede, Note, PhotoSlot, Pill } from "@/components/ui";
import { CtaBand } from "@/components/forms";
import { useSeo } from "@/lib/seo";
import { cn } from "@/utils/cn";

/** Asymmetric span pattern (12-col grid) so no two rows look identical. */
const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7", "lg:col-span-6", "lg:col-span-6"];

export default function Work() {
  const [filter, setFilter] = useState<string>("All");
  const filters = useMemo(() => ["All", ...Array.from(new Set(CASE_STUDIES.flatMap((c) => c.services)))], []);
  const visible = filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.services.includes(filter));

  useSeo({
    title: "Case studies — apps, portals and campaigns | SoftAxes",
    description:
      "Selected SoftAxes projects: mobile apps, B2B portals, e-commerce rebuilds and paid campaigns. Challenge, approach and measured results.",
    path: "/work",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Case studies",
      url: "https://www.softaxes.com/work",
      about: "Software development and digital marketing case studies",
    },
  });

  return (
    <>
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Kicker>Selected work</Kicker>
              <h1 className="font-display text-[clamp(2.2rem,5.6vw,3.6rem)] leading-[1.0] font-extrabold tracking-[-0.035em] text-chalk">
                Projects, and what changed afterwards.
              </h1>
            </div>
            <Lede className="lg:pb-3">
              Every result on this page is a real, verifiable number from a real client. Where a figure has not been
              cleared for publication yet, we have marked it rather than guessed.
            </Lede>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter case studies by service">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-[13.5px] font-semibold transition-colors",
                  filter === f ? "border-mint bg-mint/10 text-mint" : "border-line text-muted hover:border-mint/50 hover:text-chalk",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-7">
            {visible.map((c, i) => (
              <article
                key={c.slug}
                className={cn("rounded-xl2 border border-line bg-surface p-5 sm:p-6", SPANS[i % SPANS.length])}
              >
                <PhotoSlot ratio="16/9" label={c.coverAlt} note="WebP · 16:9" />

                <header className="mt-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="font-display text-[20px] leading-tight font-bold tracking-[-0.025em] text-chalk sm:text-[23px]">
                      {c.clientLabel}
                    </h2>
                    <span className="font-mono text-[11.5px] text-muted">{c.descriptor}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </header>

                <div className="mt-5 border-t border-line pt-5">
                  <h3 className="text-[13px] font-semibold text-mint">Challenge</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.62] text-muted">{c.challenge}</p>
                </div>

                <details className="group mt-5 border-t border-line pt-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-[14.5px] font-semibold text-chalk">What we did, and what it changed</span>
                    <span aria-hidden="true" className="font-mono text-mint transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="mt-5 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-[12.5px] font-semibold text-mint">What we did</h4>
                      <ul className="mt-2 space-y-2">
                        {c.approach.map((a) => (
                          <li key={a} className="flex gap-2.5 text-[14px] leading-[1.55] text-muted">
                            <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[12.5px] font-semibold text-mint">Result</h4>
                      <ul className="mt-2 space-y-2">
                        {c.result.map((r) => (
                          <li key={r} className="text-[14px] leading-[1.55] font-semibold text-chalk">
                            {r}
                          </li>
                        ))}
                      </ul>
                      <h4 className="mt-5 text-[12.5px] font-semibold text-mint">Tech</h4>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {c.tech.map((t) => (
                          <span key={t} className="font-mono text-[11px] text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="mt-6 border-l-2 border-mint pl-4 text-[15px] leading-[1.55] font-semibold text-chalk">
                    “<span className="text-muted">{c.quote}</span>”
                  </blockquote>
                </details>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Note label="Before launch">
              Replace every client name, quote and result placeholder above with verified client-approved content. Six
              case studies with real numbers beat twenty with none.
            </Note>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <H2 as="h3" className="max-w-[30ch] text-[clamp(1.4rem,3vw,1.9rem)]">
              Want something similar built?
            </H2>
            <Btn to="/contact" size="lg">
              Book a free strategy call
            </Btn>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
