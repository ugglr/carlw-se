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

// Runs at build time; the page ships with this snapshot and the browser
// swaps in fresh numbers when the API answers.
export async function getRemoetSnapshot(): Promise<RemoetStats | null> {
  try {
    const res = await fetch(REMOET_STATS_URL);
    if (!res.ok) return null;
    return (await res.json()) as RemoetStats;
  } catch {
    return null;
  }
}

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

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
