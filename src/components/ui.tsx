import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Link } from "@/lib/router";
import { useCountUp, useInView } from "@/lib/hooks";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1180px] px-5 sm:px-8", className)}>{children}</div>;
}

/* ── Buttons ─────────────────────────────────────────────────────────────── */

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "quiet";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  full?: boolean;
  ariaLabel?: string;
};

const variants = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  quiet: "text-chalk underline decoration-line decoration-2 underline-offset-4 hover:decoration-mint transition-colors",
};

export function Btn({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  full,
  ariaLabel,
}: BtnProps) {
  const base = cn(
    "inline-flex items-center justify-center rounded-lg font-semibold tracking-[-0.01em]",
    size === "lg" ? "px-6 py-3.5 text-[15px]" : "px-4.5 py-2.5 text-[14.5px]",
    full && "w-full",
    variants[variant],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={base} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={base} aria-label={ariaLabel} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={base} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

/* ── Section headings ────────────────────────────────────────────────────── */

/** Small kicker used sparingly — never as a tracked all-caps eyebrow on every heading. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[12.5px] leading-none text-mint">{children}</p>
  );
}

export function H2({
  children,
  className,
  as: As = "h2",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
  id?: string;
}) {
  return (
    <As id={id} className={cn("text-[clamp(1.75rem,4vw,2.6rem)] leading-[1.06] font-bold text-chalk", className)}>
      {children}
    </As>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-[17px] leading-[1.62] text-muted prose-body", className)}>{children}</p>;
}

/* ── Photo slots ─────────────────────────────────────────────────────────── */

const ratios: Record<string, string> = {
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
};

/**
 * Reserved upload slot for a real photograph. Keeps the exact aspect ratio so
 * nothing shifts when the client drops the image in.
 */
export function PhotoSlot({
  ratio = "3/2",
  label,
  note,
  className,
}: {
  ratio?: keyof typeof ratios | string;
  label: string;
  note?: string;
  className?: string;
}) {
  return (
    <figure
      data-empty="true"
      className={cn(
        "photo-frame flex flex-col items-center justify-center gap-2 p-6 text-center",
        // Every slot rendered here is an empty upload placeholder, so it is dashed.
        "border-dashed",
        ratios[ratio] ?? ratios["3/2"],
        className,
      )}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-40">
        <path d="M4 5.5h16v13H4z" stroke="#8ba3a8" strokeWidth="1.2" />
        <circle cx="9" cy="10" r="1.6" stroke="#8ba3a8" strokeWidth="1.2" />
        <path d="M4.5 16.5 9.8 12l3.4 2.6 2.9-2.2 3.4 4.1" stroke="#8ba3a8" strokeWidth="1.2" />
      </svg>
      <figcaption className="max-w-[26ch] text-[13px] leading-snug font-semibold text-muted">{label}</figcaption>
      {note ? <span className="font-mono text-[11px] text-muted/70">{note}</span> : null}
    </figure>
  );
}

/* ── Stats ───────────────────────────────────────────────────────────────── */

export function Stat({
  value,
  suffix = "",
  label,
  detail,
}: {
  value: number;
  suffix?: string;
  label: string;
  detail?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="border-l border-line pl-5">
      <div className="font-display text-[clamp(2.6rem,6vw,3.75rem)] leading-none font-extrabold tracking-[-0.04em] text-chalk tabular-nums">
        {n}
        <span className="text-mint">{suffix}</span>
      </div>
      <div className="mt-3 text-[15px] font-semibold text-chalk">{label}</div>
      {detail ? <p className="mt-1 max-w-[30ch] text-[13.5px] leading-relaxed text-muted">{detail}</p> : null}
    </div>
  );
}

/* ── FAQ accordion ───────────────────────────────────────────────────────── */

export function FaqList({ items, idPrefix = "faq" }: { items: { q: string; a: string }[]; idPrefix?: string }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <details key={item.q} id={`${idPrefix}-${i}`} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
            <span className="text-[16.5px] leading-snug font-semibold text-chalk pr-2">{item.q}</span>
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 font-mono text-mint transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="pr-8 pb-6">
            <p className="text-[15px] leading-[1.68] text-muted prose-body">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

/* ── Misc blocks ─────────────────────────────────────────────────────────── */

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-block rounded-full border border-line px-3 py-1 text-[12.5px] font-medium text-muted", className)}>
      {children}
    </span>
  );
}

export function Note({ children, label = "Placeholder" }: { children: ReactNode; label?: string }) {
  return (
    <p className="rounded-lg border border-dashed border-mint/40 bg-mint/[0.04] px-4 py-3 text-[13.5px] leading-relaxed text-muted">
      <span className="mr-2 font-mono text-[11.5px] text-mint">[{label}]</span>
      {children}
    </p>
  );
}

export function SectionRule() {
  return <hr className="border-0 border-t border-line" />;
}
