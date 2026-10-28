import { Btn, Container, H2, Kicker, Lede, Note } from "@/components/ui";
import { CtaBand, InlineCta } from "@/components/forms";
import { useSeo } from "@/lib/seo";

const STAGES = [
  {
    n: "01",
    name: "Discover",
    window: "Week 1–2",
    what: "We sit with the people who do the work, not just the person who signed the contract. We map the process, list every screen, identify the numbers that decide success, and write it down.",
    you: [
      "Give two hours for a scoping workshop",
      "Share access: analytics, ad accounts, existing code",
      "Name one decision-maker who can say yes",
    ],
    us: [
      "Interview the team doing the work",
      "Audit what already exists",
      "Deliver a written scope, fixed price per phase, and a delivery date",
    ],
  },
  {
    n: "02",
    name: "Design",
    window: "Week 2–4",
    what: "A clickable prototype on your phone before production code exists. This is where changes cost an afternoon instead of a sprint.",
    you: ["Use the prototype with two or three real customers", "Approve content and flows", "Say what feels wrong early"],
    us: [
      "Design flows, states and empty screens",
      "Test with real users",
      "Hand over a component library your developers can read",
    ],
  },
  {
    n: "03",
    name: "Build and test",
    window: "Sprints of two weeks",
    what: "Development and QA run in parallel. You get a working build every fortnight and a short written note on what changed, what broke and what is next.",
    you: ["Join a 45-minute sprint review", "Test on your own device", "Log anything odd as it happens"],
    us: [
      "Ship a test build every two weeks",
      "Run regression and device testing",
      "Keep the repository, branch protection and CI in your account",
    ],
  },
  {
    n: "04",
    name: "Launch and grow",
    window: "Week 10 onward",
    what: "Store submission, tracking verification against real events, then the first campaigns. We do not switch ads on until conversion data is trustworthy.",
    you: ["Approve store listings and creative", "Confirm the budget you are comfortable testing with"],
    us: [
      "Submit, handle review rejections, roll out in stages",
      "Verify every tag end to end",
      "Run and optimise campaigns, and report cost per enquiry, not clicks",
    ],
  },
];

const CADENCE = [
  ["Sprint review", "Every two weeks", "45 minutes, screen share, working build"],
  ["Written update", "Weekly, Friday", "One email: shipped, in progress, blocked, decisions needed"],
  ["WhatsApp group", "Working hours", "Fast questions, shared with your team and ours"],
  ["Monthly call", "Monthly", "Numbers, budget, next phase, honest opinion"],
];

export default function Process() {
  useSeo({
    title: "How we work — four stages from scope to launch | SoftAxes",
    description:
      "Our delivery process: discover, design, build and test, launch and grow. What you do at each stage, what we do, and how we communicate.",
    path: "/process",
    schema: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How SoftAxes delivers a software project",
      step: STAGES.map((s) => ({ "@type": "Step", name: s.name, text: s.what })),
    },
  });

  return (
    <>
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker>Process</Kicker>
              <h1 className="font-display text-[clamp(2.2rem,5.6vw,3.6rem)] leading-[1.0] font-extrabold tracking-[-0.035em] text-chalk">
                Four stages, and you always know which one you are in.
              </h1>
            </div>
            <Lede className="lg:pb-3">
              No black boxes. You see a working build every two weeks, you can stop after any stage, and the price you
              agreed in stage one does not move unless the scope does.
            </Lede>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <ol className="space-y-px overflow-hidden rounded-xl2 border border-line bg-line">
            {STAGES.map((s) => (
              <li key={s.n} className="bg-ink">
                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr_1.4fr] lg:gap-10">
                  <div className="lg:w-28">
                    <span className="font-display text-[42px] leading-none font-extrabold tracking-[-0.05em] text-line transition-colors duration-300">
                      {s.n}
                    </span>
                  </div>

                  <div>
                    <p className="font-mono text-[11.5px] text-mint">{s.window}</p>
                    <h2 className="mt-2 font-display text-[clamp(1.5rem,3vw,2rem)] leading-tight font-bold tracking-[-0.03em] text-chalk">
                      {s.name}
                    </h2>
                    <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.62] text-muted">{s.what}</p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-[12.5px] font-semibold text-mint">What you do</h3>
                      <ul className="mt-3 space-y-2">
                        {s.you.map((y) => (
                          <li key={y} className="flex gap-2.5 text-[14px] leading-[1.55] text-muted">
                            <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky" />
                            {y}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[12.5px] font-semibold text-mint">What we do</h3>
                      <ul className="mt-3 space-y-2">
                        {s.us.map((u) => (
                          <li key={u} className="flex gap-2.5 text-[14px] leading-[1.55] text-muted">
                            <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mint" />
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-line bg-surface2 py-16 sm:py-20" aria-labelledby="cadence">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <H2 id="cadence">How we communicate</H2>
              <Lede className="mt-4">
                Fixed rhythm, no chasing. If a decision is blocked on you, you will hear about it the same day, in
                writing, with the options.
              </Lede>
            </div>
            <div className="overflow-hidden rounded-xl2 border border-line">
              <table className="w-full text-left text-[14.5px]">
                <caption className="sr-only">Communication cadence for active projects</caption>
                <thead>
                  <tr className="bg-ink/60">
                    {["Channel", "Frequency", "What it covers"].map((h) => (
                      <th key={h} scope="col" className="px-4 py-3 text-[12px] font-semibold tracking-[0.04em] text-muted uppercase">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {CADENCE.map(([channel, freq, covers]) => (
                    <tr key={channel} className="bg-surface">
                      <th scope="row" className="px-4 py-4 font-semibold text-chalk">
                        {channel}
                      </th>
                      <td className="px-4 py-4 font-mono text-[13px] text-mint">{freq}</td>
                      <td className="px-4 py-4 text-muted">{covers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="after-launch">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <H2 id="after-launch">What happens after launch</H2>
              <Lede className="mt-4">
                Launch is the middle of the project, not the end. Here is the first ninety days, in writing, before you
                sign anything.
              </Lede>
            </div>
            <div>
              <ul className="border-t border-line">
                {[
                  ["Days 1–30", "Support and fixes are included. Crash logs, store rejections, small copy and layout changes."],
                  ["Days 1–30", "Tracking reconciliation: we compare platform numbers against your real sales and flag the gap."],
                  ["Days 30–60", "First campaign tests conclude. We cut what did not work and move budget to what produced enquiries."],
                  ["Days 60–90", "Retention work: the screens where users drop, the emails or notifications that bring them back."],
                  ["Ongoing", "A monthly retainer covering hosting, monitoring, security updates and a fixed number of change requests."],
                ].map(([when, what], i) => (
                  <li key={i} className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:gap-8">
                    <span className="w-28 shrink-0 font-mono text-[12px] text-mint">{when}</span>
                    <p className="max-w-[62ch] text-[15px] leading-[1.6] text-muted">{what}</p>
                  </li>
                ))}
              </ul>
              <Note label="Confirm with client">
                Confirm the retainer scope, included hours and response-time SLA so this matches your standard contract.
              </Note>
            </div>
          </div>

          <InlineCta
            text="You will know the process, the price and the date before you commit to anything."
            secondary={
              <Btn to="/work" variant="quiet">
                See the work
              </Btn>
            }
          />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
