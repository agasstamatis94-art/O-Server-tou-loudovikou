import { MessageCircle } from "lucide-react";

export default function CtaFooter() {
  return (
    <footer className="relative overflow-hidden pt-10">
      <section className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-[#5865F2]/30 bg-gradient-to-br from-[#5865F2]/25 via-[#5865F2]/10 to-transparent px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[#5865F2]/30 blur-[100px]" />
          <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
            Έτοιμος να μπεις;
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-slate-300">
            Η παρέα σε περιμένει. Δεν χρειάζεται τίποτα άλλο από ένα κλικ.
          </p>
          <a
            href="https://discord.gg/VDEeYXmgX"
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#5865F2] px-10 py-4 text-sm font-semibold text-white shadow-xl shadow-[#5865F2]/40 transition-all hover:-translate-y-0.5 hover:bg-[#4752c4]"
          >
            <MessageCircle className="h-5 w-5" />
            Μπες στο Discord
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <div className="flex items-center justify-center gap-2.5">
          <img
            src="/Νέον_Κυανό_Έμβλημα_Discord_με_Καπνό-removebg-preview.png"
            alt="Ο Server Του Loudouvikou"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="font-bold text-white">Loudouvikou</span>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          © 2026 Ο Server Του Loudouvikou. Φτιαγμένο με αγάπη από την κοινότητα.
        </p>
      </div>
    </footer>
  );
}
