import { useEffect, useRef, useState } from "react";
import { Clock3, Radio } from "lucide-react";
import type { DiscordStats } from "@/lib/discord";

function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const progress = Math.min((t - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function StatItem({
  target,
  label,
  start,
}: {
  target: number;
  label: string;
  start: boolean;
}) {
  const value = useCountUp(target, start);

  return (
    <div className="text-center">
      <p className="text-4xl font-extrabold text-white sm:text-5xl">
        {value.toLocaleString("el-GR")}
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

export default function Stats({
  stats,
  error,
}: {
  stats: DiscordStats | null;
  error: string | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div
          ref={ref}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-10 sm:px-12"
        >
          <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Ζωντανά στοιχεία
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Η κοινότητα αυτή τη στιγμή
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Radio className="h-4 w-4 text-emerald-400" />
              {stats ? "Ενημέρωση από Discord" : "Σύνδεση με Discord..."}
            </div>
          </div>

          {stats ? (
            <>
              <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2">
                <StatItem
                  target={stats.memberCount}
                  label={stats.approximate ? "Περίπου μέλη στον server" : "Μέλη στον server"}
                  start={visible}
                />
                <StatItem
                  target={stats.onlineCount}
                  label={stats.approximate ? "Περίπου online τώρα" : "Online τώρα"}
                  start={visible}
                />
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <Clock3 className="h-3.5 w-3.5" />
                Τελευταία ενημέρωση: {new Date(stats.fetchedAt).toLocaleTimeString("el-GR")}
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg font-semibold text-white">
                {error ? "Τα ζωντανά στοιχεία δεν είναι διαθέσιμα" : "Φόρτωση πραγματικών στοιχείων..."}
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                {error ?? "Περιμένουμε απάντηση από το Discord. Δεν εμφανίζουμε προσωρινά ή τυχαία νούμερα."}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
