import { Link, useRouter } from "@/lib/router";
import { ARTICLES, getArticle } from "@/data/articles";
import { Btn, Container, Kicker, Note } from "@/components/ui";
import { CtaBand } from "@/components/forms";
import { useSeo } from "@/lib/seo";

export default function Article() {
  const { path } = useRouter();
  const slug = path.replace("/resources/", "");
  const article = getArticle(slug);

  return article ? <ArticlePage article={article} /> : <MissingArticle />;
}

function MissingArticle() {
  return (
    <Container className="pt-40 pb-24">
      <h1 className="font-display text-3xl font-bold text-chalk">That article has moved.</h1>
      <p className="mt-4 text-muted">Browse everything we have published instead.</p>
      <div className="mt-6">
        <Btn to="/resources">All resources</Btn>
      </div>
    </Container>
  );
}

function ArticlePage({ article }: { article: NonNullable<ReturnType<typeof getArticle>> }) {
  const others = ARTICLES.filter((a) => a.slug !== article.slug);

  useSeo({
    title: `${article.title} | SoftAxes`,
    description: article.description,
    path: `/resources/${article.slug}`,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      articleSection: article.topic,
      author: { "@type": "Organization", name: article.author },
      publisher: { "@type": "Organization", name: "SoftAxes Technology Pvt Ltd" },
      url: `https://www.softaxes.com/resources/${article.slug}`,
    },
  });

  return (
    <>
      <article className="pt-28 pb-14 sm:pt-36 sm:pb-18">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[12px] text-muted">
            <Link to="/resources" className="hover:text-mint">
              Resources
            </Link>
            <span aria-hidden="true" className="mx-2 text-line">
              /
            </span>
            <span className="text-chalk">{article.topic}</span>
          </nav>

          <header className="max-w-[70ch]">
            <h1 className="font-display text-[clamp(2rem,4.8vw,3.2rem)] leading-[1.03] font-extrabold tracking-[-0.035em] text-chalk">
              {article.title}
            </h1>
            <p className="mt-5 text-[18px] leading-[1.6] text-muted">{article.description}</p>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11.5px] text-muted">
              <span className="text-mint">{article.topic}</span>
              <span aria-hidden="true" className="text-line">
                /
              </span>
              <span>{article.readTime}</span>
              <span aria-hidden="true" className="text-line">
                /
              </span>
              <span>By {article.author}</span>
            </p>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
            <div className="max-w-[68ch]">
              {article.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="mt-11 mb-4 font-display text-[clamp(1.4rem,3vw,1.85rem)] leading-tight font-bold tracking-[-0.03em] text-chalk">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="my-5 space-y-2.5">
                      {block.items?.map((item) => (
                        <li key={item} className="flex gap-3 text-[16.5px] leading-[1.65] text-muted">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote key={i} className="my-8 border-l-2 border-mint pl-5 text-[19px] leading-[1.5] font-semibold text-chalk">
                      {block.text}
                    </blockquote>
                  );
                }
                if (block.type === "note") {
                  return (
                    <div key={i} className="my-7">
                      <Note label="Edit before publishing">{block.text}</Note>
                    </div>
                  );
                }
                return (
                  <p key={i} className="mt-5 text-[16.5px] leading-[1.7] text-muted">
                    {block.text}
                  </p>
                );
              })}

              <div className="mt-14 rounded-xl2 border border-line bg-surface2 p-6">
                <Kicker>Free call</Kicker>
                <h2 className="font-display text-[22px] leading-tight font-bold tracking-[-0.03em] text-chalk">
                  Want a number for your project, not an average?
                </h2>
                <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-muted">
                  Send us what you are building. We reply with a realistic range and a suggested first phase, normally
                  within one working day.
                </p>
                <div className="mt-5">
                  <Btn to="/contact">Book a free strategy call</Btn>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-mono text-[11.5px] tracking-[0.04em] text-muted uppercase">Read next</h2>
              <ul className="mt-4 space-y-4 border-t border-line pt-4">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={`/resources/${o.slug}`} className="group block">
                      <span className="block text-[14.5px] leading-snug font-semibold text-chalk transition-colors group-hover:text-mint">
                        {o.title}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] text-muted">{o.readTime}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </article>

      <CtaBand />
    </>
  );
}
