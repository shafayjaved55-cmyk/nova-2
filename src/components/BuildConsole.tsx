import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "@/lib/hooks";
import { cn } from "@/utils/cn";

type Line = { text: string; tag: string };

const LINES: Line[] = [
  { text: "design ready", tag: "design" },
  { text: "app and web built and tested", tag: "build" },
  { text: "tracking and ads connected", tag: "growth" },
  { text: "live", tag: "deploy" },
];

const CHARS_PER_TICK = 26;
const LINE_PAUSE = 420;

/**
 * The homepage signature moment: a build console that types out the four stages,
 * then reveals the finished app UI. Runs once, respects reduced motion.
 */
export function BuildConsole() {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [typed, setTyped] = useState<string[]>([]);
  const [active, setActive] = useState(0);
  const [done, setDone] = useState(false);
  const timers = useRef<number[]>([]);

  const clearAll = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const run = () => {
    clearAll();
    setTyped([]);
    setActive(0);
    setDone(false);

    let elapsed = 300;
    LINES.forEach((line, lineIndex) => {
      for (let c = 1; c <= line.text.length; c++) {
        const slice = line.text.slice(0, c);
        elapsed += CHARS_PER_TICK;
        const at = elapsed;
        timers.current.push(
          window.setTimeout(() => {
            setActive(lineIndex);
            setTyped((prev) => {
              const next = [...prev];
              next[lineIndex] = slice;
              return next;
            });
          }, at),
        );
      }
      elapsed += LINE_PAUSE;
      const endAt = elapsed;
      timers.current.push(
        window.setTimeout(() => {
          setTyped((prev) => {
            const next = [...prev];
            next[lineIndex] = line.text;
            return next;
          });
          if (lineIndex === LINES.length - 1) setDone(true);
        }, endAt),
      );
    });
  };

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setTyped(LINES.map((l) => l.text));
      setDone(true);
      return;
    }
    run();
    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced]);

  return (
    <div ref={ref} className="relative">
      <div
        className={cn(
          "rounded-xl2 border border-line bg-surface/90 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] transition-opacity duration-300",
        )}
      >
        {/* window bar */}
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </span>
          <span className="font-mono text-[11.5px] text-muted">softaxes — build</span>
          <span
            className={cn(
              "ml-auto flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px]",
              done ? "border-mint/40 text-mint" : "border-line text-muted",
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", done ? "bg-mint dot-live" : "bg-muted/50")} />
            {done ? "live" : "running"}
          </span>
        </div>

        {/* output */}
        <div className="min-h-[168px] px-4 py-4 font-mono text-[13px] leading-[1.9] sm:text-[13.5px]">
          {LINES.map((line, i) => {
            const visible = typed[i] !== undefined;
            return (
              <div key={line.tag} className="flex items-baseline gap-3">
                <span className="w-[62px] shrink-0 text-[11px] tracking-[0.04em] text-muted/70 uppercase">{line.tag}</span>
                <span className={cn(visible ? "text-chalk" : "text-transparent")}>
                  {typed[i] ?? ""}
                  {active === i && !done ? <span className="caret ml-px inline-block text-mint">▌</span> : null}
                </span>
                {visible && typed[i] === line.text ? (
                  <span className="ml-auto hidden text-[11px] text-mint sm:inline">ok</span>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* revealed app UI */}
        <div
          className={cn(
            "border-t border-line transition-all duration-500 ease-out",
            done ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 overflow-hidden opacity-0",
          )}
        >
          <div className="p-4">
            <div className="rounded-xl border border-line bg-ink/60 p-3.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-mint to-sky text-[13px] font-bold text-[#04120f]">
                  OD
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-semibold text-chalk">Order desk</p>
                  <p className="font-mono text-[10.5px] text-muted">v1.0 · Android + iOS</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/5 px-2 py-0.5 font-mono text-[10px] text-mint">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  tracking on
                </span>
              </div>

              <dl className="mt-3.5 grid grid-cols-3 gap-2">
                {[
                  ["Sessions", "—"],
                  ["First orders", "—"],
                  ["Cost / order", "—"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-line px-2.5 py-2">
                    <dt className="text-[10.5px] text-muted">{k}</dt>
                    <dd className="mt-0.5 font-mono text-[13px] text-chalk">{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-3 font-mono text-[10.5px] text-muted">
                [Upload real project screenshot — metrics populate from client data]
              </p>
            </div>
          </div>
        </div>
      </div>

      {done && !reduced ? (
        <button
          type="button"
          onClick={run}
          className="mt-3 font-mono text-[11.5px] text-muted transition-colors hover:text-mint"
        >
          replay build
        </button>
      ) : null}
    </div>
  );
}
