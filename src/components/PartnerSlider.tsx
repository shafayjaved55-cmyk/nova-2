import { useState } from "react";
import { PARTNERS, type Partner } from "@/data/site";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/utils/cn";

/**
 * Partner badge row.
 *  - Only confirmed partnerships are ever rendered as real badges.
 *  - Official badge files are used as-is: no recolouring, cropping, stretching
 *    or restyling. They sit on a light chip purely for legibility.
 *  - Missing files render a clearly labelled upload slot.
 */

function Chip({ partner, compact }: { partner: Partner; compact?: boolean }) {
  const [failed, setFailed] = useState(false);
  const showImage = partner.confirmed && !failed;
  const placeholder = `[Upload official ${partner.name} badge]`;

  return (
    <a
      href={partner.confirmed ? partner.profileUrl : undefined}
      target={partner.confirmed ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={partner.confirmed ? `${partner.name} — verification page` : `${partner.name} — badge pending upload`}
      className={cn(
        "flex h-16 items-center justify-center rounded-xl bg-chip px-4 text-center transition-transform duration-200 hover:-translate-y-0.5",
        // Only the scrolling marquee needs a fixed width; the compact grid must
        // stay fluid so the badges never overflow the footer column.
        compact ? "w-full" : "min-w-[196px] shrink-0 px-6",
        !partner.confirmed && "border border-dashed border-[#0c161b]/25 bg-chip/85",
      )}
    >
      {showImage ? (
        <img
          src={partner.asset}
          alt={`${partner.name} official badge`}
          width={compact ? 120 : 150}
          height={40}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="max-h-9 w-auto"
        />
      ) : (
        <span className="max-w-[15ch] text-center text-[11.5px] leading-tight font-semibold text-[#0c161b]/70">
          {placeholder}
        </span>
      )}
    </a>
  );
}

function Row({ compact }: { compact?: boolean }) {
  return (
    <>
      {PARTNERS.map((p) => (
        <Chip key={p.id} partner={p} compact={compact} />
      ))}
    </>
  );
}

export function PartnerSlider({ compact = false }: { compact?: boolean }) {
  const reduced = useReducedMotion();
  const anyConfirmed = PARTNERS.some((p) => p.confirmed);

  if (compact) {
    return (
      <div>
        <div className="grid grid-cols-2 gap-3">
          <Row compact />
        </div>
        {!anyConfirmed ? (
          <p className="mt-3 text-[12.5px] leading-relaxed text-muted">
            Badges appear here once each partnership is verified and the official file is uploaded.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <p className="mb-7 text-[clamp(1.05rem,2.4vw,1.3rem)] leading-snug font-semibold text-chalk prose-body">
        Certified to run your ads on the platforms your customers use.
      </p>

      {reduced ? (
        <div className="flex flex-wrap gap-3">
          <Row />
        </div>
      ) : (
        <div
          className="marquee-pause relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max gap-3 will-change-transform">
            <div className="flex gap-3">
              <Row />
            </div>
            <div className="flex gap-3" aria-hidden="true">
              <Row />
            </div>
          </div>
        </div>
      )}

      {!anyConfirmed ? (
        <p className="mt-4 text-[12.5px] leading-relaxed text-muted">
          Partner badges are placeholders until each partnership is confirmed in the platform dashboard and the official
          badge file is uploaded to <span className="font-mono text-[12px]">/assets/partners/</span>. Unverified
          partnerships are not displayed.
        </p>
      ) : null}
    </div>
  );
}
