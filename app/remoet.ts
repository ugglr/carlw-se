export const REMOET_STATS_URL = "https://api.remoet.dev/stats/public";

export type RemoetCompany = {
  name: string;
  roleCount: number;
  scrapedAt: string;
  lastJobPostedAt: string;
};

export type RemoetStats = {
  companiesTracked: number;
  activeRoles: number;
  recentlyRefreshed: RemoetCompany[];
  computedAt: string;
};

function isCompany(c: unknown): c is RemoetCompany {
  const x = c as RemoetCompany;
  return (
    typeof x?.name === "string" &&
    typeof x.roleCount === "number" &&
    typeof x.scrapedAt === "string" &&
    typeof x.lastJobPostedAt === "string"
  );
}

function isStats(s: unknown): s is RemoetStats {
  const x = s as RemoetStats;
  return (
    typeof x?.companiesTracked === "number" &&
    typeof x.activeRoles === "number" &&
    typeof x.computedAt === "string" &&
    Array.isArray(x.recentlyRefreshed) &&
    x.recentlyRefreshed.every(isCompany)
  );
}

// Used at build time (for the snapshot in the HTML) and in the browser (for fresh
// numbers). Anything but a well-formed answer is null, so the page never breaks on it.
// The build passes no options: `no-store` there makes Next abandon the static render.
// Next's year-long build cache for this fetch is cleared by the build script instead.
export async function fetchRemoetStats(init?: RequestInit): Promise<RemoetStats | null> {
  try {
    const res = await fetch(REMOET_STATS_URL, init);
    if (!res.ok) return null;
    const data: unknown = await res.json();
    return isStats(data) ? data : null;
  } catch {
    return null;
  }
}

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;

export function ago(iso: string, now: number): string {
  const ms = Math.max(0, now - Date.parse(iso));
  if (ms < HOUR) {
    const m = Math.max(1, Math.round(ms / MINUTE));
    return `${m} min ago`;
  }
  if (ms < DAY) {
    const h = Math.round(ms / HOUR);
    return `${h} ${h === 1 ? "hour" : "hours"} ago`;
  }
  const d = Math.round(ms / DAY);
  return d === 1 ? "yesterday" : `${d} days ago`;
}

export const formatCount = (n: number) => n.toLocaleString("en-US");
