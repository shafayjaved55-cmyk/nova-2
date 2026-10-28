import { COMPANY, PARTNERS } from "@/data/site";
import { Btn, Container, H2, Kicker, Lede, Note, PhotoSlot, Stat } from "@/components/ui";
import { CtaBand, InlineCta } from "@/components/forms";
import { useSeo } from "@/lib/seo";

const BEHAVIOURS = [
  {
    value: "We say the number early",
    do_: "A price range in the first call, not after three meetings. If we are a bad fit for your budget, you hear it on that call.",
  },
  {
    value: "We show work that is unfinished",
    do_: "Sprint reviews use a real build, not slides. You see the rough version, because that is the only one you can correct cheaply.",
  },
  {
    value: "We write things down",
    do_: "Scopes, decisions, changes and reasons — in a document you can forward to your board. Verbal agreements do not exist here.",
  },
  {
    value: "We admit when we are wrong",
    do_: "If a technical choice turns out badly, we say so in the sprint review and quote the cost of fixing it ourselves.",
  },
  {
    value: "We do not sell what you do not need",
    do_: "If a plugin, a template or an off-the-shelf product solves it for a tenth of the price, that is the recommendation.",
  },
];

const TEAM = [
  { slot: "[Upload team photo 1200x1500]", role: "[Add role — e.g. Founder / CEO]" },
  { slot: "[Upload team photo 1200x1500]", role: "[Add role — e.g. Lead Engineer]" },
  { slot: "[Upload team photo 1200x1500]", role: "[Add role — e.g. Design Lead]" },
  { slot: "[Upload team photo 1200x1500]", role: "[Add role — e.g. Performance Marketing Lead]" },
  { slot: "[Upload team photo 1200x1500]", role: "[Add role — e.g. QA Lead]" },
  { slot: "[Upload team photo 1200x1500]", role: "[Add role — e.g. Project Manager]" },
];

export default function About() {
  useSeo({
    title: "About SoftAxes — a Pakistani software house built around one team",
    description:
      "SoftAxes Technology is a Pakistani software house combining development, design, QA and paid marketing under one roof. Our story, values as behaviours, registrations and partners.",
    path: "/about",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About SoftAxes Technology",
      url: "https://www.softaxes.com/about",
    },
  });

  return (
    <>
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div>
              <Kicker>About</Kicker>
              <h1 className="font-display text-[clamp(2.2rem,5.6vw,3.6rem)] leading-[1.0] font-extrabold tracking-[-0.035em] text-chalk">
                We kept losing projects to the handover. So we stopped handing over.
              </h1>
            </div>
            <Lede className="lg:pb-3">
              SoftAxes started because the same thing kept happening: a good product got built, then thrown to a
              marketing agency that had never seen the code. Both teams did their job. The launch still went quiet.
            </Lede>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="border-y border-line bg-surface2 py-16 sm:py-20" aria-labelledby="story">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 id="story" className="sr-only">
                Our story
              </h2>
              <div className="space-y-5 text-[16px] leading-[1.68] text-muted prose-body">
                <p className="text-[18px] leading-[1.6] font-semibold text-chalk">
                  [Add the founder's story in their own words — three short paragraphs.]
                </p>
                <p>
                  [Paragraph one: what the founders were doing before, and the specific moment the handover problem
                  became obvious.]
                </p>
                <p>
                  [Paragraph two: how the team grew, the first clients, and the decision to keep development and paid
                  media in the same room.]
                </p>
                <p>
                  [Paragraph three: where the company is now, who you work with day to day, and what you are trying to
                  build over the next five years.]
                </p>
              </div>
              <Note label="Placeholder">Founding year, city of origin and founder names must be confirmed and added above.</Note>
            </div>
            <div className="flex flex-col gap-6">
              <PhotoSlot ratio="3/2" label="[Upload real office photo 1500x1000]" note="WebP · 3:2 · dark teal grade applied" />
              <div className="grid grid-cols-3 gap-6">
                <Stat value={100} suffix="+" label="Clients" />
                <Stat value={400} suffix="+" label="Projects" />
                <Stat value={15} suffix="+" label="Team" />
              </div>
            </div>
          </div>

          <InlineCta
            text="Fifteen people, in-house, in [Add city]. No white-labelling to a third team."
            secondary={
              <Btn to="/work" variant="quiet">
                See the work
              </Btn>
            }
          />
        </Container>
      </section>

      {/* Values as behaviours */}
      <section className="py-16 sm:py-20" aria-labelledby="values">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <H2 id="values">Values, written as things you can check.</H2>
              <Lede className="mt-4">
                Anyone can print the word integrity on a wall. Here is what each of ours looks like on a Tuesday.
              </Lede>
            </div>
            <ul className="border-t border-line">
              {BEHAVIOURS.map((b) => (
                <li key={b.value} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[1fr_1.15fr] sm:gap-8">
                  <h3 className="text-[18px] leading-snug font-bold text-chalk">{b.value}</h3>
                  <p className="text-[14.5px] leading-[1.62] text-muted">{b.do_}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-y border-line bg-surface2 py-16 sm:py-20" aria-labelledby="team">
        <Container>
          <div className="max-w-[56ch]">
            <H2 id="team">The people you will actually work with</H2>
            <Lede className="mt-4">
              No account manager relay between you and the people writing the code. You are in the group chat with them.
            </Lede>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
            {TEAM.map((member, i) => (
              <li key={i}>
                <PhotoSlot ratio="4/5" label={member.slot} note="WebP · 4:5" />
                <h3 className="mt-3.5 text-[14.5px] font-bold text-chalk">[Add name]</h3>
                <p className="mt-0.5 text-[13px] leading-snug text-muted">{member.role}</p>
              </li>
            ))}
          </ul>

          <Note label="Placeholder">
            Only publish real photos with written consent. Do not use stock portraits or AI-generated faces. Add or
            remove cards so the grid matches the real headcount.
          </Note>
        </Container>
      </section>

      {/* Registrations + partners */}
      <section className="py-16 sm:py-20" aria-labelledby="registrations">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <H2 id="registrations">Registered, listed and accountable</H2>
              <Lede className="mt-4">
                We are a registered Pakistani company and an active member of the industry bodies that publish member
                lists, so you can check us independently.
              </Lede>
            </div>

            <div>
              <ul className="grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2">
                {COMPANY.registrations.map((r) => (
                  <li key={r.name} className="bg-surface p-5">
                    <h3 className="font-display text-[18px] font-bold tracking-[-0.02em] text-chalk">{r.name}</h3>
                    <p className="mt-1.5 font-mono text-[12.5px] text-muted">{r.detail}</p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-[13px] font-semibold text-chalk">Platform partnerships</h3>
              <div className="mt-4">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {PARTNERS.filter((p) => p.confirmed).map((p) => (
                    <a
                      key={p.id}
                      href={p.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-16 items-center justify-center rounded-xl bg-chip px-4"
                    >
                      <img src={p.asset} alt={`${p.name} official badge`} width={120} height={40} loading="lazy" className="max-h-9 w-auto" />
                    </a>
                  ))}
                </div>
                <p className="mt-3 text-[12.5px] leading-relaxed text-muted">
                  {PARTNERS.some((p) => p.confirmed)
                    ? "Badges link to the official verification listing for each partnership."
                    : "Partner badges are shown on this page only after each partnership is verified in the platform dashboard and the official badge file is uploaded."}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
