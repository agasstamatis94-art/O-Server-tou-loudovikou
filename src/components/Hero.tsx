import { MessageCircle, Users, Sparkles, ShieldCheck } from "lucide-react";
import type { DiscordStats } from "@/lib/discord";

export default function Hero({ stats }: { stats: DiscordStats | null }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5 pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('/Νέον_Μπάνερ_Discord_με_Στέμμα.png')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0b10]/70 via-[#0a0b10]/80 to-[#0a0b10]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-100 lg:mx-0">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            24/7 δραστηριότητα, φιλική κοινότητα
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Ο Server Του{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Loudouvikou
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            Κάνε νέους φίλους, μίλα για τα παιχνίδια σου, άκου μουσική και
            συμμετέχε σε events. Η παρέα σου σε περιμένει στο Discord.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="https://discord.gg/VDEeYXmgX"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-cyan-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-400/30 transition-all hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Μπες τώρα — δωρεάν
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Μάθε περισσότερα
            </a>
          </div>

          <div className="mx-auto mt-14 flex max-w-lg items-center justify-center gap-8 text-slate-300 sm:gap-14 lg:mx-0 lg:justify-start">
            <div className="flex items-center gap-2.5">
              <Users className="h-5 w-5 text-cyan-300" />
              <span className="text-sm font-medium">
                {stats
                  ? `${stats.approximate ? "Περίπου " : ""}${stats.memberCount.toLocaleString("el-GR")} μέλη`
                  : "Φόρτωση μελών..."}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium">ασφαλές & moderated</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-4 rounded-full bg-cyan-400/20 blur-3xl" />
          <img
            src="/Νέον_Κυανό_Έμβλημα_Discord_με_Καπνό-removebg-preview.png"
            alt="Το κυανό έμβλημα του Server Του Loudouvikou"
            className="relative w-full drop-shadow-[0_0_35px_rgba(34,211,238,0.4)] transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
