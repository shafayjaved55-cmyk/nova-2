import { Link } from "@/lib/router";
import { COMPANY, NAV } from "@/data/site";
import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui";
import { PartnerSlider } from "@/components/PartnerSlider";
import { useRouter } from "@/lib/router";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface2">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_1fr_1.1fr]">
          <div>
            <Link to="/" className="font-display text-[19px] font-extrabold tracking-[-0.03em] text-chalk">
              Soft<span className="text-mint">Axes</span>
            </Link>
            <p className="mt-4 max-w-[34ch] text-[14.5px] leading-relaxed text-muted">
              A Pakistani software house. We build the software and run the ads that fill it — one team, one backlog,
              one number to answer for both.
            </p>
            <div className="mt-6">
              <PartnerSlider compact />
            </div>
          </div>

          <nav aria-label="Services">
            <h2 className="text-[13px] font-semibold text-chalk">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-[14px] text-muted transition-colors hover:text-mint">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-[13px] font-semibold text-chalk">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-[14px] text-muted transition-colors hover:text-mint">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-[14px] text-muted transition-colors hover:text-mint">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[13px] font-semibold text-chalk">Talk to us</h2>
            <ul className="mt-4 space-y-2.5 text-[14px] text-muted">
              <li>
                <a href={COMPANY.phoneHref} className="transition-colors hover:text-mint">
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={COMPANY.whatsappHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-mint">
                  WhatsApp: {COMPANY.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={COMPANY.emailHref} className="transition-colors hover:text-mint">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
            <address className="mt-5 text-[14px] leading-relaxed text-muted not-italic">
              {COMPANY.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-[13px] text-muted">{COMPANY.hours}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.legalName}. Registered with SECP · PASHA · PSEB · Chamber of Commerce.
          </p>
          <nav aria-label="Legal" className="flex gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-chalk">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-chalk">
              Terms
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

/** Sticky mobile CTA — hidden on the contact and thank-you pages where it is redundant. */
export function MobileCta() {
  const { path } = useRouter();
  if (path === "/contact" || path === "/thank-you") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink/92 px-4 pt-3 pb-3 backdrop-blur-xl sm:hidden">
      <div className="flex gap-2.5">
        <Link
          to="/contact"
          className="btn-primary flex-1 rounded-lg px-4 py-3 text-center text-[14.5px] font-bold tracking-[-0.01em]"
        >
          Book a free strategy call
        </Link>
        <a
          href={COMPANY.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Message SoftAxes on WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#10d9a0" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15c-1.5 0-2.98-.4-4.27-1.17l-.31-.18-3.12.82.83-3.04-.2-.32a8.23 8.23 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.14 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
