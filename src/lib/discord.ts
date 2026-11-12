export interface DiscordStats {
  memberCount: number;
  onlineCount: number;
  approximate: boolean;
  fetchedAt: string;
}

export async function fetchDiscordStats(): Promise<DiscordStats> {
  const baseUrl = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!baseUrl || !anonKey) {
    throw new Error("Η σύνδεση με τα ζωντανά στοιχεία δεν είναι διαθέσιμη.");
  }

  const response = await fetch(`${baseUrl}/functions/v1/discord-stats`, {
    headers: {
      Authorization: `Bearer ${anonKey}`,
      apikey: anonKey,
    },
  });

  if (!response.ok) {
    throw new Error("Δεν ήταν δυνατή η λήψη των στοιχείων του Discord.");
  }

  const payload: unknown = await response.json();
  if (!isDiscordStats(payload)) {
    throw new Error("Τα στοιχεία του Discord δεν είναι διαθέσιμα αυτή τη στιγμή.");
  }

  return payload;
}

function isDiscordStats(value: unknown): value is DiscordStats {
  if (!value || typeof value !== "object") return false;
  const stats = value as Record<string, unknown>;
  return (
    Number.isInteger(stats.memberCount) &&
    Number.isInteger(stats.onlineCount) &&
    (stats.memberCount as number) >= 0 &&
    (stats.onlineCount as number) >= 0 &&
    typeof stats.approximate === "boolean" &&
    typeof stats.fetchedAt === "string"
  );
}
