import { ShieldCheck } from "lucide-react";

const rules = [
  {
    title: "Σεβασμός σε όλους",
    text: "Καμία προσβολή, ρατσισμός, σεξισμός ή bullying. Αντίπαποι απόψεις είναι εντάξει — η αγένεια όχι.",
  },
  {
    title: "Κανένα spam",
    text: "Μην πλημμυρίζεις κανάλια, μην στέλνεις ανεπιθύμητες διαφημίσεις ή invites σε άλλους servers.",
  },
  {
    title: "Κατάλληλο περιεχόμενο",
    text: "Όχι NSFL/NSFW υλικό, όχι παράνομο περιεχόμενο, όχι doxxing ή προσωπικά δεδομένα άλλων.",
  },
  {
    title: "Ακολούθα τους staff",
    text: "Οι moderators έχουν τον τελευταίο λόγο. Αν θες να αμφισβητήσεις μια απόφαση, στείλε DM στον διαχειριστή.",
  },
];

export default function Rules() {
  return (
    <section id="rules" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Κανόνες
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Μια κοινότητα με σεβασμό
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Κρατάμε τον server φιλικό και ασφαλή για όλους. Λίγοι απλοί
              κανόνες αρκούν για να περνάει καλά κόσμος.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4">
              <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-400" />
              <p className="text-sm text-emerald-200">
                Ενεργή ομάδα moderators και αυτόματα φίλτρα, 24/7.
              </p>
            </div>
          </div>

          <ol className="space-y-4">
            {rules.map((r, i) => (
              <li
                key={r.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#5865F2]/20 text-sm font-bold text-[#8b93ff]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {r.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
