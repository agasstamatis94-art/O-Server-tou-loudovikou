const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const inviteCode = "VDEeYXmgX";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const response = await fetch(
      `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`,
      { headers: { Accept: "application/json" } },
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Το Discord δεν επέστρεψε τα στοιχεία του server." }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const payload: unknown = await response.json();
    if (!isInviteWithCounts(payload)) {
      return new Response(
        JSON.stringify({ error: "Τα στοιχεία του Discord δεν είχαν την αναμενόμενη μορφή." }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    return new Response(
      JSON.stringify({
        memberCount: payload.approximate_member_count,
        onlineCount: payload.approximate_presence_count,
        approximate: true,
        fetchedAt: new Date().toISOString(),
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch {
    return new Response(
      JSON.stringify({ error: "Δεν ήταν δυνατή η σύνδεση με το Discord." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});

function isInviteWithCounts(
  value: unknown,
): value is {
  approximate_member_count: number;
  approximate_presence_count: number;
} {
  if (!value || typeof value !== "object") return false;
  const invite = value as Record<string, unknown>;
  return (
    Number.isInteger(invite.approximate_member_count) &&
    Number.isInteger(invite.approximate_presence_count) &&
    (invite.approximate_member_count as number) >= 0 &&
    (invite.approximate_presence_count as number) >= 0
  );
}
