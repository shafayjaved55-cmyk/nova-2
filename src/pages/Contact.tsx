import { COMPANY } from "@/data/site";
import { Container, H2, Kicker, Lede, Note, PhotoSlot } from "@/components/ui";
import { LeadForm } from "@/components/forms";
import { useSeo } from "@/lib/seo";

export default function Contact() {
  useSeo({
    title: "Contact SoftAxes — book a free strategy call",
    description:
      "Talk to SoftAxes Technology about your app, website or campaign. Book a 30-minute strategy call, message us on WhatsApp, or request a quote. We reply within one working day.",
    path: "/contact",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact SoftAxes Technology",
      url: "https://www.softaxes.com/contact",
      mainEntity: {
        "@type": "Organization",
        name: COMPANY.legalName,
        telephone: COMPANY.phoneDisplay,
        email: COMPANY.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.addressLines[0],
          addressLocality: COMPANY.addressLines[1],
          addressCountry: "PK",
        },
      },
    },
  });

  return (
    <>
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker>Contact</Kicker>
              <h1 className="font-display text-[clamp(2.2rem,5.6vw,3.6rem)] leading-[1.0] font-extrabold tracking-[-0.035em] text-chalk">
                Tell us what you are building.
              </h1>
            </div>
            <Lede className="lg:pb-3">
              Thirty minutes with a lead developer and a media buyer. You get a written scope outline and a price range
              within two working days — whether or not you hire us.
            </Lede>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <LeadForm
              source="contact"
              heading="Request a call or a quote"
              sub="Five fields. Nothing here gets added to a newsletter."
              submitLabel="Book a free strategy call"
            />

            <div className="flex flex-col gap-6">
              <div className="rounded-xl2 border border-line bg-surface p-6">
                <h2 className="text-[13px] font-semibold text-chalk">Faster ways to reach us</h2>
                <div className="mt-4 space-y-3">
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-center justify-between rounded-lg border border-line px-4 py-3.5 transition-colors hover:border-mint/50"
                  >
                    <span className="text-[14.5px] font-semibold text-chalk">Call the office</span>
                    <span className="font-mono text-[13px] text-mint">{COMPANY.phoneDisplay}</span>
                  </a>
                  <a
                    href={COMPANY.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex items-center justify-between rounded-lg px-4 py-3.5"
                  >
                    <span className="text-[14.5px] font-bold">Message on WhatsApp</span>
                    <span className="font-mono text-[13px]">{COMPANY.whatsappDisplay}</span>
                  </a>
                  <a
                    href={COMPANY.emailHref}
                    className="flex items-center justify-between rounded-lg border border-line px-4 py-3.5 transition-colors hover:border-mint/50"
                  >
                    <span className="text-[14.5px] font-semibold text-chalk">Email</span>
                    <span className="font-mono text-[13px] text-mint">{COMPANY.email}</span>
                  </a>
                </div>
                <p className="mt-4 border-t border-line pt-4 text-[13.5px] leading-relaxed text-muted">
                  {COMPANY.responsePromise} {COMPANY.hours}.
                </p>
              </div>

              <div className="rounded-xl2 border border-line bg-surface p-6">
                <h2 className="text-[13px] font-semibold text-chalk">Pick a slot yourself</h2>
                <div className="mt-4 flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-line bg-surface2 p-6 text-center">
                  <p className="max-w-[30ch] text-[13.5px] leading-relaxed text-muted">
                    [Embed the live booking calendar here — Calendly, Google Calendar appointment slots or HubSpot
                    meetings. Placeholder height 420px.]
                  </p>
                </div>
              </div>

              <div className="rounded-xl2 border border-line bg-surface p-6">
                <h2 className="text-[13px] font-semibold text-chalk">Office</h2>
                <address className="mt-3 text-[15px] leading-relaxed text-muted not-italic">
                  {COMPANY.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <div className="mt-4 flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-line bg-surface2 p-6 text-center">
                  <p className="max-w-[28ch] text-[13.5px] leading-relaxed text-muted">
                    [Paste the Google Maps embed iframe here, loading="lazy", title attribute set.]
                  </p>
                </div>
                <p className="mt-4 font-mono text-[11.5px] text-muted">{COMPANY.mapEmbedUrl}</p>
              </div>

              <PhotoSlot ratio="3/2" label="[Upload real office photo 1500x1000]" note="WebP · 3:2 · same grade as About page" />
            </div>
          </div>

          <div className="mt-14 border-t border-line pt-10">
            <H2 className="text-[clamp(1.4rem,3vw,1.9rem)]">What happens after you send this</H2>
            <ol className="mt-7 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-3">
              {[
                ["Within one working day", "A real reply from a person, with two or three suggested times. No automated sequence."],
                ["The call", "Thirty minutes on the problem. We ask more than we talk, then give you a view."],
                ["Within two working days", "A written scope outline and a price range. Yours to take elsewhere if you want."],
              ].map(([when, what]) => (
                <li key={when} className="bg-surface p-6">
                  <p className="font-mono text-[11.5px] text-mint">{when}</p>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">{what}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Note label="Before launch">
                Connect the form to a real endpoint and a CRM, add reCAPTCHA or Cloudflare Turnstile, and confirm the
                response-time promise with the team who has to keep it.
              </Note>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
