import { useEffect, useState } from "react";
import { Link, useRouter } from "@/lib/router";
import { NAV } from "@/data/site";
import { Btn, Container } from "@/components/ui";
import { useScrolled } from "@/lib/hooks";
import { cn } from "@/utils/cn";

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10d9a0" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <path d="M4 22.5 16 4.5l12 18h-8.2L16 14.8 12.2 22.5H4Z" fill="url(#mark)" />
        <path d="M11.5 26.5h9" stroke="#e8f3f1" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="font-display text-[17px] leading-none font-extrabold tracking-[-0.03em] text-chalk">
        Soft<span className="text-mint">Axes</span>
      </span>
    </span>
  );
}

export function Header() {
  const { path } = useRouter();
  const scrolled = useScrolled(10);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to: string) => path === to || (to !== "/" && path.startsWith(to));

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-mint focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled ? "border-b border-line bg-ink/78 backdrop-blur-xl" : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6 sm:h-18">
          <Link to="/" aria-label="SoftAxes Technology — home" className="rounded-md">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-md px-3 py-2 text-[14.5px] font-medium transition-colors",
                  isActive(item.to) ? "text-chalk" : "text-muted hover:text-chalk",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-px bg-mint transition-opacity duration-200",
                    isActive(item.to) ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Btn to="/contact" className="hidden sm:inline-flex">
              Get a free quote
            </Btn>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line lg:hidden"
            >
              <span className="relative block h-3 w-4.5">
                <span
                  className={cn(
                    "absolute left-0 block h-px w-full bg-chalk transition-transform duration-200",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-px w-full bg-chalk transition-transform duration-200",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {open ? (
        <div id="mobile-nav" className="fixed inset-0 top-16 z-40 bg-ink/97 backdrop-blur-xl lg:hidden">
          <Container className="flex h-full flex-col pt-6 pb-10">
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="border-b border-line py-4 font-display text-[24px] font-bold tracking-[-0.03em] text-chalk"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="border-b border-line py-4 font-display text-[24px] font-bold tracking-[-0.03em] text-mint">
                Contact
              </Link>
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <Btn to="/contact" size="lg" full>
                Book a free strategy call
              </Btn>
              <Btn href="https://wa.me/920000000000" variant="ghost" size="lg" full>
                Message on WhatsApp
              </Btn>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
}
