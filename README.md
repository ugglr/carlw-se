# carlw.se

The website of Igelström, Carl, a sole proprietorship in Sweden. One static page that presents the company's products (Remoet and CrabStack) and its contract work.

- Next.js 16, App Router, `output: "export"`: `npm run build` writes the static site to `out/`.
- Netlify publishes `out/` (see `netlify.toml`, which also redirects the old `/about` and `/projects/*` pages).
- The "Remoet, live" board reads `https://api.remoet.dev/stats/public`: once at build time for the snapshot in the HTML, and again in the browser for fresh numbers.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

The legal name "Igelström, Carl" must stay on the page (h1, About and footer): Meta's business verification checks for it.
