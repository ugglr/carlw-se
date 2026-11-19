import { email, legalName, links, mailto, products } from "./content";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="bar">
        <span>{legalName}</span>
        <a href={mailto("Hello")}>Email</a>
      </header>

      <main>
        <section className="intro">
          <h1>{legalName}</h1>
          <p className="lead">
            A one-person software company in Sweden. I build Remoet and
            CrabStack, and take on some contract work.
          </p>
        </section>

        {products.map((p) => (
          <section key={p.name} className="product" aria-labelledby={p.name}>
            <div className="product-head">
              <h2 id={p.name}>{p.name}</h2>
              <a href={p.url}>{p.host} →</a>
            </div>
            <p>{p.line}</p>
            <a href={p.url} className="shot">
              <img src={p.image} width={1440} height={860} alt={p.alt} />
            </a>
          </section>
        ))}

        <section className="product" aria-labelledby="contract">
          <h2 id="contract">Contract work</h2>
          <p>
            Fullstack TypeScript (Next.js, NestJS, React, React Native,
            PostgreSQL) and MCP servers for AI agents. Remote, invoiced by{" "}
            {legalName}.
          </p>
          <p>
            <a href={mailto("Contract work")}>Email me →</a>
          </p>
        </section>
      </main>

      <footer>
        <p>
          © {year} {legalName} · Enskild firma, Sweden
        </p>
        <p className="footer-links">
          <a href={mailto("Hello")}>{email}</a>
          <a href={links.github}>GitHub</a>
          <a href={links.linkedin}>LinkedIn</a>
        </p>
      </footer>
    </>
  );
}
