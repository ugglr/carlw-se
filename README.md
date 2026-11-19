# carlw.se

The website of Igelström, Carl, a sole proprietorship in Sweden. One static page: the company's products (Remoet and CrabStack) and its contract work.

- Next.js 16, App Router, `output: "export"`: `npm run build` writes the static site to `out/`.
- Netlify publishes `out/` (see `netlify.toml`, which also redirects the old `/about` and `/projects/*` pages).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

The legal name "Igelström, Carl" must stay on the page (h1 and footer): Meta's business verification checks for it.
