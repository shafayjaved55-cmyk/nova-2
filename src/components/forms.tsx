import { useState, type ReactNode } from "react";
import { BUDGET_RANGES, COMPANY, SERVICE_OPTIONS } from "@/data/site";
import { Btn, Container, H2, Kicker, Lede } from "@/components/ui";
import { track } from "@/lib/seo";
import { useRouter } from "@/lib/router";
import { cn } from "@/utils/cn";

const labelClass = "block text-[13.5px] font-semibold text-chalk";
const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line bg-surface2 px-3.5 py-2.5 text-[15px] text-chalk placeholder:text-muted/60 transition-colors focus:border-mint/60 focus:outline-none";

type Errors = Partial<Record<"name" | "email" | "service", string>>;

/**
 * Five fields, no more. Wire `submitTo` to your endpoint (Formspree, Netlify
 * Forms, HubSpot or your own API) before launch — see LAUNCH-CHECKLIST.md.
 */
export function LeadForm({
  heading,
  sub,
  submitTo = "[Add form endpoint — Formspree / HubSpot / own API]",
  compact = false,
  submitLabel = "Book a free strategy call",
  source,
}: {
  heading: string;
  sub?: string;
  submitTo?: string;
  compact?: boolean;
  submitLabel?: string;
  source?: string;
}) {
  const { navigate } = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    details: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "A valid email, so we can reply.";
    if (!values.service) next.service = "Pick the closest match — 'Not sure yet' is fine.";
    setErrors(next);
    if (Object.keys(next).length) return;

    track("generate_lead", { form_location: source ?? heading, service: values.service, budget: values.budget });
    // Replace with a real POST to `submitTo`, then redirect.
    navigate("/thank-you");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl2 border border-line bg-surface p-5 sm:p-7">
      <h3 className="text-[22px] leading-tight font-bold text-chalk">{heading}</h3>
      {sub ? <p className="mt-2 text-[14.5px] leading-relaxed text-muted prose-body">{sub}</p> : null}

      <div className={cn("mt-5 grid gap-4", compact ? "" : "sm:grid-cols-2")}>
        <div className={cn(!compact && "sm:col-span-1")}>
          <label htmlFor={`${source}-name`} className={labelClass}>
            Name
          </label>
          <input
            id={`${source}-name`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${source}-name-err` : undefined}
            className={fieldClass}
            placeholder="Your name"
          />
          {errors.name ? (
            <p id={`${source}-name-err`} className="mt-1.5 text-[13px] text-mint">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${source}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${source}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${source}-email-err` : undefined}
            className={fieldClass}
            placeholder="you@company.com"
          />
          {errors.email ? (
            <p id={`${source}-email-err`} className="mt-1.5 text-[13px] text-mint">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${source}-service`} className={labelClass}>
            What do you need?
          </label>
          <select
            id={`${source}-service`}
            name="service"
            value={values.service}
            onChange={set("service")}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? `${source}-service-err` : undefined}
            className={cn(fieldClass, "appearance-none")}
          >
            <option value="">Select one</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id={`${source}-service-err`} className="mt-1.5 text-[13px] text-mint">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${source}-budget`} className={labelClass}>
            Budget range
          </label>
          <select
            id={`${source}-budget`}
            name="budget"
            value={values.budget}
            onChange={set("budget")}
            className={cn(fieldClass, "appearance-none")}
          >
            <option value="">Select a range</option>
            {BUDGET_RANGES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className={cn(!compact && "sm:col-span-2")}>
          <label htmlFor={`${source}-details`} className={labelClass}>
            Project details <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id={`${source}-details`}
            name="details"
            rows={3}
            value={values.details}
            onChange={set("details")}
            className={cn(fieldClass, "resize-y")}
            placeholder="Two lines about what you are building and when you need it."
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Btn type="submit" size="lg" full>
          {submitLabel}
        </Btn>
        <a href={COMPANY.whatsappHref} target="_blank" rel="noreferrer" className="text-[14px] font-semibold text-muted transition-colors hover:text-mint">
          or message us on WhatsApp
        </a>
      </div>
      <p className="mt-3 text-[12.5px] leading-relaxed text-muted">{COMPANY.responsePromise} No sales sequence, no follow-up calls for a month.</p>
      <p className="mt-2 font-mono text-[11px] text-muted/70">{submitTo}</p>
    </form>
  );
}

/** Short CTA used after major sections. Deliberately plain — one line, one action. */
export function InlineCta({
  text,
  to = "/contact",
  label = "Book a free strategy call",
  secondary,
}: {
  text: string;
  to?: string;
  label?: string;
  secondary?: ReactNode;
}) {
  return (
    <div className="mt-10 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
      <p className="max-w-[52ch] text-[16px] leading-snug font-semibold text-chalk">{text}</p>
      <div className="flex shrink-0 flex-wrap items-center gap-3">
        {secondary}
        <Btn to={to}>{label}</Btn>
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="border-t border-line bg-surface2 py-16 sm:py-20" aria-labelledby="cta-band">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <Kicker>Next step</Kicker>
            <H2 id="cta-band">Thirty minutes. You leave with a plan either way.</H2>
            <Lede className="mt-5">
              We look at what you have, tell you what we would build first, and give you a realistic number. If we are
              not the right fit, we say so on the call.
            </Lede>
            <dl className="mt-8 space-y-3.5 border-t border-line pt-7">
              {[
                ["Call length", "30 minutes, on Google Meet or at our office."],
                ["Who joins", "A lead developer and someone who runs ads. Not a salesperson."],
                ["What you get", "A written scope outline and a price range within two working days."],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4">
                  <dt className="w-32 shrink-0 text-[13.5px] font-semibold text-chalk">{k}</dt>
                  <dd className="text-[14.5px] leading-relaxed text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <LeadForm source="cta-band" heading="Tell us what you're building" sub="Five fields. We read every one before the call." />
        </div>
      </Container>
    </section>
  );
}
