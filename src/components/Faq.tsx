import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Πώς μπαίνω στον server;",
    a: "Πατάς το κουμπί «Μπες στο Discord» και σε πηγαίνει απευθείας στην πρόσκληση. Αν δεν έχεις λογαριασμό Discord, η δημιουργία είναι δωρεάν και παίρνει λιγότερο από ένα λεπτό.",
  },
  {
    q: "Συντήρηση κόστους;",
    a: "Όχι. Ο server είναι εντελώς δωρεάν για όλα τα μέλη. Προαιρετικά υπάρχουν ειδικοί ρόλοι υποστηρικτών για όσους θέλουν να βοηθήσουν συντηρώντας τα έξοδα.",
  },
  {
    q: "Πόσο παλιά είναι η κοινότητα;",
    a: "Ο server έχει μια σταθερή και ενεργή παρέα που μεγαλώνει καθημερινά. Τα ζωντανά στοιχεία στην ενότητα της κοινότητας ενημερώνονται από το Discord.",
  },
  {
    q: "Μπορώ να γίνω moderator;",
    a: "Αναζητούμε moderators περιοδικά. Γίνε ενεργό μέλος, και όταν ανοίξει θέση θα ανακοινώσουμε αίτηση μέσα στον server.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8b93ff]">
            Συχνές Ερωτήσεις
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Ό,τι θέλεις να μάθεις
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-[#5865F2]/40 bg-[#5865F2]/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-white">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
