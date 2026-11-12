import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Χαρακτηριστικά" },
  { href: "#stats", label: "Κοινότητα" },
  { href: "#rules", label: "Κανόνες" },
  { href: "#faq", label: "Συχνές Ερωτήσεις" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0b10]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <img
            src="/Νέον_Κυανό_Έμβλημα_Discord_με_Καπνό-removebg-preview.png"
            alt="Ο Server Του Loudouvikou"
            className="h-10 w-10 rounded-full object-cover shadow-lg shadow-cyan-500/30"
          />
          <span className="text-lg font-bold tracking-tight">Loudouvikou</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://discord.gg/VDEeYXmgX"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#5865F2] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#5865F2]/30 transition-all hover:-translate-y-0.5 hover:bg-[#4752c4] hover:shadow-[#5865F2]/50"
          >
            Μπες στο Discord
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
          aria-label="Μενού"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0a0b10]/95 px-5 pb-6 pt-2 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://discord.gg/VDEeYXmgX"
            className="mt-3 block rounded-full bg-[#5865F2] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Μπες στο Discord
          </a>
        </div>
      )}
    </header>
  );
}
