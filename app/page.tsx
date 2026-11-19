import RemoetBoard from "./RemoetBoard";
import { fetchRemoetStats, formatCount } from "./remoet";
import {
  email,
  jobs,
  legalName,
  links,
  mailto,
  shots,
  studies,
} from "./content";

// Letter heights for the block wordmark in the footer, as a share of the band.
const WORDMARK = "IGELSTRÖM".split("");
const HEIGHTS = [100, 74, 90, 64, 96, 80, 70, 92, 84];

export default async function Home() {
  const snapshot = await fetchRemoetStats();
  const year = new Date().getFullYear();

  return (
    <>
      <header className="topbar">
        <a className="tile mark" href="#top" aria-label="Igelström, Carl, to the top">
          I
        </a>
        <nav className="tile nav" aria-label="Sections">
          <a className="link" href="#remoet">Remoet, live</a>
          <a className="link" href="#products">Products</a>
          <a className="link" href="#about">About</a>
          <a className="link" href="#work-with-me">Work with me</a>
        </nav>
        <a className="tile action" href={mailto("Hello")}>
          Email me
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="title">
          <div className="tile name-tile">
            <h1 id="title" className="display">
              {legalName}
            </h1>
            <p className="small name-note">
              Igel is Swedish for hedgehog. Painting by Hans Hoffmann, 1584.
            </p>
          </div>
          <figure className="tile photo shutter">
            <img
              src="/images/hoffmann-hedgehog-1584.jpg"
              width={1800}
              height={1232}
              alt="A watercolour of a hedgehog in profile on old paper, painted by Hans Hoffmann in 1584"
            />
          </figure>
          <figure className="tile photo">
            <img
              src={shots[0].src}
              width={1440}
              height={900}
              alt={shots[0].alt}
            />
          </figure>
          <div className="hero-pair">
            <p className="tile statement">
              A one-person software company in Sweden. I build, run and sell
              Remoet and CrabStack, and take on some contract work.
            </p>
            <a className="tile statement accent" href="#remoet">
              {snapshot
                ? `Remoet watches the careers pages of ${formatCount(snapshot.companiesTracked)} companies. See what it just found.`
                : "Remoet reads the careers pages of over a thousand tech companies."}
            </a>
          </div>
        </section>

        <section id="remoet" className="panel live" aria-labelledby="live-title">
          <h2 id="live-title" className="head" data-reveal>
            Remoet, live
          </h2>
          {snapshot ? (
            <RemoetBoard snapshot={snapshot} />
          ) : (
            <p className="live-lead">
              Remoet reads the careers pages of tech companies and shows every
              new role the day it posts.{" "}
              <a className="link" href={links.remoet}>
                See it on remoet.dev
              </a>
            </p>
          )}
        </section>

        <section id="products" className="panel paper" aria-labelledby="products-title">
          <h2 id="products-title" className="giant" data-reveal>
            Products
          </h2>

          <div className="products">
            <article className="product" data-reveal>
              <h3 className="lead-head">Remoet</h3>
              <p>
                Every new tech job from the companies you want to work for,
                straight from their own careers pages instead of recycled job
                board feeds. Pick your companies, or let your AI agent run the
                search through Remoet&apos;s MCP server.
              </p>
              <p className="price">Free for 50 companies. Pro and Max for heavier use.</p>
              <div className="actions">
                <a className="button" href={links.remoet}>Open remoet.dev</a>
                <a className="link" href={links.remoetMcp}>The MCP server</a>
              </div>
            </article>
            <article className="product" data-reveal>
              <h3 className="lead-head">CrabStack</h3>
              <p>
                The full-stack SaaS template your AI agents can build on.
                NestJS, Next.js and PostgreSQL with login, Stripe billing,
                email, an admin backoffice, a blog and an admin MCP server,
                covered by more than 1,000 tests.
              </p>
              <p className="price">$199 once for the full source. $349 for a team.</p>
              <div className="actions">
                <a className="button" href={links.crabstack}>Open crabstack.dev</a>
                <a className="link" href={links.crabstackDocs}>Read the docs</a>
              </div>
            </article>
          </div>

          <ul className="wall" aria-label="Screens from Remoet and CrabStack">
            {shots.map((s, i) => (
              <li key={s.src} className={`wall-item wall-${i}`} data-reveal>
                <a href={s.product === "Remoet" ? links.remoet : links.crabstack}>
                  <img src={s.src} width={1440} height={900} alt={s.alt} loading="lazy" />
                </a>
                <p className="caption small">
                  <span>{s.product}</span>
                  <span className="soft">{s.page}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="panel about" aria-labelledby="about-title">
          <h2 id="about-title" className="head" data-reveal>
            About the company
          </h2>
          <div className="about-row">
            <dl className="facts small" data-reveal>
              <div>
                <dt>Legal name</dt>
                <dd>{legalName}</dd>
              </div>
              <div>
                <dt>Company form</dt>
                <dd>Sole proprietorship (enskild firma)</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Sweden</dd>
              </div>
            </dl>
            <p className="about-text" data-reveal>
              I&apos;m Carl. I studied Electrical Engineering at Lund University
              and started out designing hardware, where a chip that has shipped
              can&apos;t be patched, so I still verify everything first. I have
              built web and mobile products since 2018, and {legalName} is the
              company my own products run under.
            </p>
          </div>
          <div className="about-row record">
            <p className="small record-word">Record</p>
            <div className="record-lists">
              <div data-reveal>
                <h3 className="small record-title">Worked at</h3>
                <ul className="record-list small">
                  {jobs.map((j) => (
                    <li key={j.name}>
                      <span>{j.name}</span>
                      <span className="soft">{j.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-reveal>
                <h3 className="small record-title">Studied at</h3>
                <ul className="record-list small">
                  {studies.map((s) => (
                    <li key={s.name}>
                      <span>{s.name}</span>
                      <span className="soft">{s.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="work-with-me" className="panel contact" aria-labelledby="contact-title">
          <div className="strip" aria-hidden="true">
            <div className="strip-track">
              {[...shots, ...shots].map((s, i) => (
                <img key={i} src={s.src} width={1440} height={900} alt="" loading="lazy" />
              ))}
            </div>
          </div>
          <div className="contact-head">
            <h2 id="contact-title" className="head" data-reveal>
              Need an engineer?
            </h2>
            <p className="contact-lead" data-reveal>
              Next to my own products I take on a few contract projects:
              features built end to end, from the database to the UI, or an AI
              agent wired into your product through MCP.
            </p>
          </div>
          <div className="cells">
            <div className="cell-wrap" data-reveal>
              <p className="cell">
                Fullstack TypeScript: Next.js, NestJS, React, React Native and
                PostgreSQL
              </p>
              <p className="small cell-note">
                Contract work, remote, invoiced by {legalName}.
              </p>
            </div>
            <div className="cell-wrap" data-reveal>
              <p className="cell">
                MCP servers and tooling for AI agents, tested like my own
                products
              </p>
            </div>
            <div className="cell-wrap" data-reveal>
              <a className="cell cell-action" href={mailto("Contract work")}>
                Email me about a project
              </a>
              <p className="small cell-note">{email}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="panel footer">
        <div className="wordmark" aria-hidden="true">
          {WORDMARK.map((letter, i) => (
            <span
              key={i}
              className={`block block-${i % 3}`}
              style={{ height: `${HEIGHTS[i]}%` }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="footer-grid small">
          <div>
            <h2 className="footer-title">Products</h2>
            <a className="link" href={links.remoet}>Remoet</a>
            <a className="link" href={links.crabstack}>CrabStack</a>
          </div>
          <div>
            <h2 className="footer-title">Elsewhere</h2>
            <a className="link" href={links.github}>GitHub</a>
            <a className="link" href={links.linkedin}>LinkedIn</a>
          </div>
          <div>
            <h2 className="footer-title">Company</h2>
            <p>{legalName}</p>
            <p>Sole proprietorship, Sweden</p>
          </div>
          <div>
            <h2 className="footer-title">Picture</h2>
            <p>
              <a className="link" href="https://www.metmuseum.org/art/collection/search/370476">
                A Hedgehog, Hans Hoffmann, before 1584
              </a>
              , The Met, public domain
            </p>
          </div>
          <div className="footer-contact">
            <h2 className="footer-title">Contact</h2>
            <a className="link" href={mailto("Hello")}>{email}</a>
          </div>
        </div>
        <div className="footer-last small">
          <p>
            © {year} {legalName}
          </p>
          <a className="button button-small" href="#top">
            Back to the top
          </a>
        </div>
      </footer>
    </>
  );
}
