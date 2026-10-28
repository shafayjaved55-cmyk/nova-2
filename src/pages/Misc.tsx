import { COMPANY } from "@/data/site";
import { Btn, Container, H2, Kicker, Lede, Note } from "@/components/ui";
import { useSeo } from "@/lib/seo";
import { Link } from "@/lib/router";

export function ThankYou() {
  useSeo({
    title: "Thanks — we have your enquiry | SoftAxes",
    description: "Your enquiry reached SoftAxes Technology. Here is what happens next.",
    path: "/thank-you",
  });

  return (
    <section className="pt-32 pb-24 sm:pt-44">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Kicker>Received</Kicker>
            <h1 className="font-display text-[clamp(2.2rem,5.6vw,3.4rem)] leading-[1.0] font-extrabold tracking-[-0.035em] text-chalk">
              Got it. A person is reading it now.
            </h1>
            <Lede className="mt-6 text-[18px]">
              {COMPANY.responsePromise} You will get a reply from a real inbox with two or three suggested call times —
              not an automated sequence and not a calendar link you have to fight with.
            </Lede>
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn href={COMPANY.whatsappHref} size="lg">
                Message us on WhatsApp now
              </Btn>
              <Btn to="/work" variant="ghost" size="lg">
                Read a case study meanwhile
              </Btn>
            </div>
          </div>

          <aside className="rounded-xl2 border border-line bg-surface p-6 sm:p-7">
            <h2 className="text-[13px] font-semibold text-chalk">What happens next</h2>
            <ol className="mt-5 space-y-5 border-l border-line pl-5">
              {[
                ["We read it properly", "Someone who has scoped this kind of work before reads your note, not a bot."],
                ["A short reply", "Two or three questions, so the call is useful instead of exploratory."],
                ["The call", "Thirty minutes. You get a straight view on scope, sequence and cost."],
                ["Written outline", "Scope and price range within two working days, in a document you can forward."],
              ].map(([t, d]) => (
                <li key={t} className="relative">
                  <span aria-hidden="true" className="absolute top-1.5 -left-[23px] h-2 w-2 rounded-full bg-mint" />
                  <p className="text-[15px] font-semibold text-chalk">{t}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{d}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-line pt-5 text-[13px] leading-relaxed text-muted">
              Sent something urgent? Call {COMPANY.phoneDisplay} during {COMPANY.hours}.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function NotFound() {
  useSeo({
    title: "Page not found | SoftAxes",
    description: "That page does not exist. Here is where to go instead.",
    path: "/404",
  });

  return (
    <section className="pt-32 pb-28 sm:pt-44">
      <Container>
        <div className="max-w-[52ch]">
          <Kicker>Error 404</Kicker>
          <h1 className="font-display text-[clamp(2.4rem,7vw,4rem)] leading-[1.0] font-extrabold tracking-[-0.04em] text-chalk">
            That page is not here.
          </h1>
          <p className="mt-6 text-[17px] leading-[1.6] text-muted prose-body">
            Either the link is old or we typed the address wrong. Nothing has been lost — the useful pages are below.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Btn to="/contact" size="lg">
              Book a free strategy call
            </Btn>
            <Btn to="/" variant="ghost" size="lg">
              Back to home
            </Btn>
          </div>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Services", "Six services, one team", "/services"],
            ["Work", "Projects and results", "/work"],
            ["Process", "How delivery runs", "/process"],
            ["Resources", "Guides and pricing", "/resources"],
          ].map(([title, sub, to]) => (
            <li key={to} className="bg-surface">
              <Link to={to} className="block p-6 transition-colors hover:bg-ink">
                <span className="block font-display text-[19px] font-bold tracking-[-0.02em] text-chalk">{title}</span>
                <span className="mt-1.5 block text-[13.5px] text-muted">{sub}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const LEGAL: Record<string, { title: string; intro: string; sections: { h: string; p: string }[] }> = {
  "privacy-policy": {
    title: "Privacy policy",
    intro:
      "This is a working draft. Replace every bracketed item and have it reviewed against PECA, the PDPB where applicable and any client jurisdiction requirements before launch.",
    sections: [
      { h: "Who we are", p: "[Add legal entity, registered address, company registration number and a contact email for privacy requests.]" },
      { h: "What we collect", p: "[List: name, email, phone, budget range, project details submitted through forms; analytics data from GA4 and Microsoft Clarity; ad platform cookies.]" },
      { h: "Why we collect it", p: "[State purposes: responding to enquiries, preparing proposals, improving the site, running and measuring advertising.]" },
      { h: "Legal basis", p: "[Add the lawful basis relied on for each purpose.]" },
      { h: "Who we share it with", p: "[List processors: hosting provider, email provider, CRM, Google, Meta, TikTok, Microsoft Clarity.]" },
      { h: "How long we keep it", p: "[Add retention periods for enquiries, client records and analytics data.]" },
      { h: "Cookies and advertising", p: "[Explain analytics and advertising cookies, and how to refuse them. Link to a consent management setup if you run EU/UK traffic.]" },
      { h: "Your rights", p: "[List access, correction, deletion, objection and portability rights, and how to exercise them.]" },
      { h: "Changes", p: "[State how changes will be published and where the last-updated date appears.]" },
    ],
  },
  terms: {
    title: "Terms of service",
    intro:
      "Draft placeholder. These terms do not replace your project contract — [confirm the relationship between this page and the signed MSA/SOW].",
    sections: [
      { h: "Scope of these terms", p: "[Explain what these website terms cover versus the signed project agreement.]" },
      { h: "Quotations and pricing", p: "[State validity period of quotes, what triggers a change of price and the currency.]" },
      { h: "Payment terms", p: "[Add deposit, milestone schedule, invoice due dates and late payment terms.]" },
      { h: "Timelines and client responsibilities", p: "[State dependencies on client feedback, content and third-party access, and how delays are handled.]" },
      { h: "Intellectual property", p: "[State when ownership of code, design and content transfers, and what is licensed rather than sold.]" },
      { h: "Warranty and support", p: "[Add warranty period after launch, what it covers, and the retainer options.]" },
      { h: "Advertising spend", p: "[Clarify that media spend is paid by the client directly, and that performance is not guaranteed.]" },
      { h: "Confidentiality", p: "[Add mutual confidentiality obligations.]" },
      { h: "Limitation of liability and governing law", p: "[Add liability cap and governing law and jurisdiction.]" },
    ],
  },
};

export function Legal({ kind }: { kind: "privacy-policy" | "terms" }) {
  const doc = LEGAL[kind];
  useSeo({
    title: `${doc.title} | SoftAxes`,
    description: `${doc.title} for SoftAxes Technology Pvt Ltd.`,
    path: `/${kind}`,
  });

  return (
    <section className="pt-32 pb-24 sm:pt-40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>Legal</Kicker>
            <h1 className="font-display text-[clamp(2rem,4.6vw,2.9rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-chalk">
              {doc.title}
            </h1>
            <p className="mt-4 font-mono text-[11.5px] text-muted">Last updated: [Add date]</p>
            <nav aria-label="On this page" className="mt-8">
              <h2 className="font-mono text-[11.5px] tracking-[0.04em] text-muted uppercase">On this page</h2>
              <ul className="mt-3 space-y-2 border-t border-line pt-3">
                {doc.sections.map((s, i) => (
                  <li key={s.h}>
                    <a href={`#s-${i}`} className="text-[13.5px] text-muted transition-colors hover:text-mint">
                      {s.h}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <div className="mb-8">
              <Note label="Draft">{doc.intro}</Note>
            </div>
            <div className="max-w-[68ch]">
              {doc.sections.map((s, i) => (
                <section key={s.h} id={`s-${i}`} className="mt-9 scroll-mt-28 first:mt-0">
                  <h2 className="font-display text-[20px] leading-tight font-bold tracking-[-0.025em] text-chalk">
                    {s.h}
                  </h2>
                  <p className="mt-3 text-[16px] leading-[1.7] text-muted">{s.p}</p>
                </section>
              ))}
            </div>
            <div className="mt-12 border-t border-line pt-8">
              <H2 as="h2" className="text-[clamp(1.3rem,2.6vw,1.7rem)]">
                Questions about this?
              </H2>
              <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-muted">
                Email {COMPANY.email} or call {COMPANY.phoneDisplay} and we will point you to the right person.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
