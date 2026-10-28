import { Link } from "@/lib/router";
import { ARTICLES } from "@/data/articles";
import { Btn, Container, H2, Kicker, Lede } from "@/components/ui";
import { useSeo } from "@/lib/seo";
import { COMPANY } from "@/data/site";

export default function Resources() {
  const [featured, ...rest] = ARTICLES;

  useSeo({
    title: "Resources — pricing, ads and choosing a software house | SoftAxes",
    description:
      "Practical guides from SoftAxes: what an app costs in Pakistan, the Google Ads mistakes that waste small budgets, and how to choose a software house.",
    path: "/resources",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "SoftAxes Resources",
      url: "https://www.softaxes.com/resources",
      blogPost: ARTICLES.map((a) => ({
        "@type": "BlogPosting",
        headline: a.title,
        description: a.description,
        url: `https://www.softaxes.com/resources/${a.slug}`,
      })),
    },
  });

  return (
    <>
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker>Resources</Kicker>
              <h1 className="font-display text-[clamp(2.2rem,5.6vw,3.6rem)] leading-[1.0] font-extrabold tracking-[-0.035em] text-chalk">
                The things we end up explaining on every second call.
              </h1>
            </div>
            <Lede className="lg:pb-3">
              Written by the people who scope the work and run the campaigns. No filler, no twenty-slide think pieces.
            </Lede>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <Link
            to={`/resources/${featured.slug}`}
            className="group grid gap-7 rounded-xl2 border border-line bg-surface p-6 transition-colors hover:border-mint/40 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12"
          >
            <div>
              <p className="font-mono text-[12px] text-mint">{featured.topic}</p>
              <h2 className="mt-3 font-display text-[clamp(1.7rem,3.6vw,2.5rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-chalk transition-colors group-hover:text-mint">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.62] text-muted">{featured.description}</p>
              <p className="mt-5 font-mono text-[11.5px] text-muted">
                {featured.readTime} · updated {featured.updated}
              </p>
            </div>
            <div className="flex items-end lg:justify-end">
              <span className="inline-flex h-40 w-full max-w-[280px] items-end rounded-xl border border-line bg-ink/60 p-5 font-mono text-[11.5px] leading-relaxed text-muted lg:h-48">
                [Upload custom article illustration or graphic 1200x900]
              </span>
            </div>
          </Link>
        </Container>
      </section>

      <section className="border-t border-line py-14 sm:py-16" aria-labelledby="more-reading">
        <Container>
          <H2 id="more-reading" className="text-[clamp(1.4rem,3vw,1.9rem)]">
            More reading
          </H2>
          <ul className="mt-8 border-t border-line">
            {rest.map((a) => (
              <li key={a.slug} className="border-b border-line">
                <Link
                  to={`/resources/${a.slug}`}
                  className="group -mx-3 flex flex-col gap-2 rounded-lg px-3 py-6 transition-colors hover:bg-surface sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="w-28 shrink-0 font-mono text-[11.5px] text-mint">{a.topic}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[19px] leading-snug font-bold text-chalk transition-colors group-hover:text-mint sm:text-[21px]">
                      {a.title}
                    </span>
                    <span className="mt-1.5 block max-w-[68ch] text-[14.5px] leading-relaxed text-muted">{a.description}</span>
                  </span>
                  <span className="shrink-0 font-mono text-[11.5px] text-muted">{a.readTime}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-6 rounded-xl2 border border-line bg-surface2 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-display text-[22px] leading-tight font-bold tracking-[-0.03em] text-chalk">
                Want this as a checklist you can hand to a supplier?
              </h3>
              <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-muted">
                We turn the choosing-a-software-house questions into a one-page scorecard. Ask for it on the call.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Btn to="/contact">Request the scorecard</Btn>
              <Btn href={COMPANY.whatsappHref} variant="ghost">
                Ask on WhatsApp
              </Btn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
