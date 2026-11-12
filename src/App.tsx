import { useEffect, useState } from "react";
import CtaFooter from "@/components/CtaFooter";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Rules from "@/components/Rules";
import Stats from "@/components/Stats";
import { DiscordStats, fetchDiscordStats } from "@/lib/discord";

function App() {
  const [discordStats, setDiscordStats] = useState<DiscordStats | null>(null);
  const [statsError, setStatsError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetchDiscordStats()
      .then((stats) => {
        if (active) setDiscordStats(stats);
      })
      .catch((error: unknown) => {
        if (active) {
          setStatsError(
            error instanceof Error
              ? error.message
              : "Τα ζωντανά στοιχεία δεν είναι διαθέσιμα αυτή τη στιγμή.",
          );
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0b10] font-sans text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero stats={discordStats} />
        <Features />
        <Stats stats={discordStats} error={statsError} />
        <Rules />
        <Faq />
        <CtaFooter />
      </main>
    </div>
  );
}

export default App;
