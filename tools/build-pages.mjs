// Builds the finished site from tools/shell.html + assets/site.js:
//  - index.html and a real page for every topic and article, at clean URLs
//    (richwithreason.com/banking-credit/how-credit-scores-are-actually-calculated/)
//  - each page has its full content already in the HTML (menus, cards, article text),
//    so search engines can read it without running JavaScript
//  - each page has its own title/description for search results and link previews
//  - 404.html, sitemap.xml, robots.txt, and version stamps on the CSS/JS links
//
// Edit tools/shell.html (layout, home page) or assets/site.js (topics, articles), then run:
//   node tools/build-pages.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";

const SITE = "https://richwithreason.com";
const js = fs.readFileSync("assets/site.js", "utf8");
const css = fs.readFileSync("assets/site.css", "utf8");
const ver = s => crypto.createHash("sha1").update(s).digest("hex").slice(0, 8);
const shell = fs.readFileSync("tools/shell.html", "utf8")
  .replace(/\/assets\/site\.js(\?v=\w+)?/, `/assets/site.js?v=${ver(js)}`)
  .replace(/\/assets\/site\.css(\?v=\w+)?/, `/assets/site.css?v=${ver(css)}`);

// ---- Run site.js against a tiny fake page to capture what it renders for a given path ----
function renderPath(pathname) {
  const els = {};
  const el = id => els[id] ??= new Proxy({
    _html: null, value: "1", style: {}, dataset: {},
    classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
    addEventListener() {}, scrollIntoView() {}, focus() {}, setAttribute() {},
    querySelector: () => null, querySelectorAll: () => [],
  }, {
    set(t, k, v) { if (k === "innerHTML") t._html = v; else t[k] = v; return true; },
    get(t, k) { return k in t ? t[k] : undefined; },
  });
  const doc = {
    title: "",
    querySelector: sel => sel.startsWith("#") ? el(sel.slice(1)) : null,
    querySelectorAll: () => [],
    addEventListener() {},
  };
  const loc = { pathname, hash: "", search: "", href: SITE + pathname };
  const ctx = {
    document: doc, location: loc, console,
    window: { addEventListener() {}, scrollTo() {} },
    history: { replaceState() {}, pushState() {} },
    setTimeout() {},
  };
  vm.runInNewContext(js, ctx);
  const out = {};
  for (const [id, e] of Object.entries(els)) if (typeof e._html === "string") out[id] = e._html;
  return { html: out, title: doc.title };
}

// Fill each empty container in the shell (e.g. <ul id="menu"></ul>) with its rendered HTML.
function fill(page, rendered) {
  for (const [id, html] of Object.entries(rendered)) {
    const re = new RegExp(`(<(\\w+)[^>]*\\bid="${id}"[^>]*>)(</\\2>)`);
    page = page.replace(re, (_, open, tag, close) => open + html + close);
  }
  return page;
}

const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
function build({ pathname, desc, type = "website" }) {
  const { html, title } = renderPath(pathname);
  const url = SITE + pathname;
  let page = fill(shell, html);
  const which = pathname === "/" ? "home" : pathname === "/about/" ? "about" : pathname === "/contact/" ? "contact" : pathname === "/compound-calculator/" ? "calc" : pathname.split("/").filter(Boolean).length > 1 ? "art" : "cat";
  // Show the right section before JavaScript runs.
  page = page.replace(`class="page" id="page-${which}"`, `class="page on" id="page-${which}"`);
  // Topic/article pages don't carry the home page's sections (keeps each page about one thing).
  if (which !== "home") page = page.replace(/(<div class="page" id="page-home">)[\s\S]*?(\n  <\/div>\n\n  <!-- CATEGORY)/, "$1$2");
  const t = esc(title), d = esc(desc);
  return page
    .replace(/<title>.*?<\/title>/, () => `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, (_, a) => a + d)
    .replace(/(<link rel="canonical" href=")[^"]*/, (_, a) => a + url)
    .replace(/(<meta property="og:type" content=")[^"]*/, (_, a) => a + type)
    .replace(/(<meta property="og:title" content=")[^"]*/, (_, a) => a + t)
    .replace(/(<meta property="og:description" content=")[^"]*/, (_, a) => a + d)
    .replace(/(<meta property="og:url" content=")[^"]*/, (_, a) => a + url)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, (_, a) => a + t)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, (_, a) => a + d);
}
function write(rel, html) {
  fs.mkdirSync(path.dirname(rel), { recursive: true });
  fs.writeFileSync(rel, html);
}

// Topic and article data, for the list of pages to build.
const ctx = {};
vm.runInNewContext(js.slice(0, js.indexOf("const bySlug")) + "\nthis.CATS = CATS; this.ARTICLES = ARTICLES;", ctx);
const { CATS, ARTICLES } = ctx;
const slugify = t => t.toLowerCase().replace(/&/g, " and ").replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const HOME_DESC = "Clear, honest guides on banking, credit, investing and insurance.";

// Clear out previously generated topic folders so removed articles disappear.
for (const c of CATS) fs.rmSync(c.slug, { recursive: true, force: true });

const noindex = h => h.replace("<head>", '<head>\n<meta name="robots" content="noindex">');
const home = build({ pathname: "/", desc: HOME_DESC });
write("index.html", home);
write("404.html", noindex(home));
const urls = [SITE + "/"];
let n = 1;
// About page
const ABOUT_DESC = "Meet Jordan Noel, founder of Rich With Reason: a Temple University finance grad working in private equity accounting, making finance digestible for anyone.";
write("about/index.html", build({ pathname: "/about/", desc: ABOUT_DESC }));
urls.push(`${SITE}/about/`); n++;
// Contact page
write("contact/index.html", build({ pathname: "/contact/", desc: "Get in touch with Rich With Reason. Questions, topic ideas, partnerships and press: email richwreason@gmail.com." }));
urls.push(`${SITE}/contact/`); n++;
// Compound calculator page
write("compound-calculator/index.html", build({ pathname: "/compound-calculator/", desc: "Free compound interest calculator: see how monthly investing grows over time, plus a plain-English guide to how compounding works." }));
urls.push(`${SITE}/compound-calculator/`); n++;
for (const c of CATS) {
  write(`${c.slug}/index.html`, build({ pathname: `/${c.slug}/`, desc: c.blurb }));
  urls.push(`${SITE}/${c.slug}/`); n++;
  for (const p of c.posts) {
    const s = slugify(p), a = ARTICLES[s];
    let html = build({
      pathname: `/${c.slug}/${s}/`,
      desc: a ? a.dek : `${c.name} guide from Rich With Reason.`,
      type: a ? "article" : "website",
    });
    // "Coming soon" placeholders stay out of search results until the article exists.
    if (!a) html = noindex(html);
    write(`${c.slug}/${s}/index.html`, html);
    if (a) urls.push(`${SITE}/${c.slug}/${s}/`);
    n++;
  }
}
const today = new Date().toISOString().slice(0, 10);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`Built ${n} pages, 404.html, sitemap.xml (${urls.length} URLs)`);
