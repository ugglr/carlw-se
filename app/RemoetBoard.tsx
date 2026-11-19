"use client";

import { useEffect, useState } from "react";
import { links } from "./content";
import {
  ago,
  DAY,
  fetchRemoetStats,
  formatCount,
  type RemoetStats,
} from "./remoet";

export default function RemoetBoard({ snapshot }: { snapshot: RemoetStats }) {
  const [stats, setStats] = useState(snapshot);
  // Start from the snapshot's own clock so the server and browser render the same text.
  const [now, setNow] = useState(() => Date.parse(snapshot.computedAt));
  const [open, setOpen] = useState(0);

  useEffect(() => {
    setNow(Date.now());
    fetchRemoetStats({ cache: "no-store" }).then((fresh) => {
      if (fresh) {
        setStats(fresh);
        setNow(Date.now());
      }
    });
  }, []);

  const rows = stats.recentlyRefreshed.slice(0, 9);

  return (
    <>
      <p className="live-lead" data-reveal>
        Remoet reads the careers pages of{" "}
        <strong>{formatCount(stats.companiesTracked)} companies</strong> and has{" "}
        <strong>{formatCount(stats.activeRoles)} open roles</strong> on file.
        These are the last companies it checked. Open one.
      </p>
      <ol className="departures" data-ui aria-label="Companies Remoet checked most recently">
        {rows.map((c, i) => {
          const isOpen = i === open;
          const fresh = now - Date.parse(c.lastJobPostedAt) < DAY;
          return (
            <li key={c.name} className={isOpen ? "row is-open" : "row"}>
              <button
                type="button"
                className="row-button"
                aria-expanded={isOpen}
                onClick={() => setOpen(i)}
              >
                <span className="row-name">{c.name}</span>
                <span className="row-fact row-roles">
                  {c.roleCount} {c.roleCount === 1 ? "role" : "roles"}
                </span>
                <span className="row-fact row-checked">
                  checked {ago(c.scrapedAt, now)}
                </span>
                <span className={fresh ? "row-status is-new" : "row-status"}>
                  {fresh ? "New role" : "Open"}
                </span>
              </button>
              {isOpen && (
                <div className="row-detail">
                  <p>
                    {c.name} has {c.roleCount} open{" "}
                    {c.roleCount === 1 ? "role" : "roles"} on its own careers
                    page. Remoet checked it {ago(c.scrapedAt, now)}, and the
                    newest role landed {ago(c.lastJobPostedAt, now)}.
                  </p>
                  <a className="link" href={links.remoet}>
                    Track companies like {c.name} on Remoet
                  </a>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}
