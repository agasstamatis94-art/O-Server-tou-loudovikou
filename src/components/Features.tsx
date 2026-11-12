import { Gamepad2, Music, CalendarDays, Megaphone, Bot, Trophy } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Voice channels για gaming",
    text: "Ξεχωριστά κανάλια για κάθε παιχνίδι: Valorant, Fortnite, Minecraft, League και πολλά ακόμα.",
    accent: "from-emerald-500/20 to-emerald-500/5 text-emerald-400",
  },
  {
    icon: Music,
    title: "Μουσική & listen-along",
    text: "Μοιράσου τις λίστες σου, οργάνωσε listen-along βράδια και ανακάλυψε νέα τραγούδια.",
    accent: "from-pink-500/20 to-pink-500/5 text-pink-400",
  },
  {
    icon: CalendarDays,
    title: "Εβδομαδιαία events",
    text: "Movie nights, game tournaments, trivia και quiz evenings κάθε εβδομάδα για όλα τα μέλη.",
    accent: "from-amber-500/20 to-amber-500/5 text-amber-400",
  },
  {
    icon: Megaphone,
    title: "Ανεξάρτητα κανάλια συζήτησης",
    text: "Από memes και αγγελίες μέχρι σοβαρές συζητήσεις — κάθε θέμα έχει τον χώρο του.",
    accent: "from-cyan-500/20 to-cyan-500/5 text-cyan-400",
  },
  {
    icon: Bot,
    title: "Έξυπνα bots",
    text: "Levels, custom commands, μουσικά bots και αυτόματοι ρόλοι για μια ομαλή εμπειρία.",
    accent: "from-[#5865F2]/25 to-[#5865F2]/5 text-[#8b93ff]",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    text: "Κέρδισε XP μιλώντας και συμμετέχοντας, ανέβα level και ξεκλείδωσε ειδικούς ρόλους.",
    accent: "from-orange-500/20 to-orange-500/5 text-orange-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8b93ff]">
            Τι θα βρεις μέσα
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Ένας server φτιαγμένος για να μένεις
          </h2>
          <p className="mt-4 text-slate-400">
            Ό,τι χρειάζεσαι για να περνάς ωραία — από casual κουβέντα μέχρι
            ανταγωνιστικά τουρνουά.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div
                className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${f.accent}`}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
