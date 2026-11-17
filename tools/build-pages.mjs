// Builds a real page for every topic and article so URLs are clean
// (richwithreason.com/banking-credit/how-credit-scores-are-actually-calculated/)
// and each link shows its own title/description when shared.
//
// Run from the repo root after adding or editing articles in assets/site.js:
//   node tools/build-pages.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const SITE = "https://richwithreason.com";
import crypto from "node:crypto";
const js = fs.readFileSync("assets/site.js", "utf8");
const css = fs.readFileSync("assets/site.css", "utf8");
const ver = s => crypto.createHash("sha1").update(s).digest("hex").slice(0, 8);
// Stamp asset links with a content hash so browsers never run a stale copy after an update.
const shell = fs.readFileSync("index.html", "utf8")
  .replace(/\/assets\/site\.js(\?v=\w+)?/, `/assets/site.js?v=${ver(js)}`)
  .replace(/\/assets\/site\.css(\?v=\w+)?/, `/assets/site.css?v=${ver(css)}`);
fs.writeFileSync("index.html", shell);

// Pull CATS and ARTICLES out of site.js without running the page code.
const dataSrc = js.slice(0, js.indexOf("const bySlug"));
const ctx = {};
vm.runInNewContext(dataSrc + "\nthis.CATS = CATS; this.ARTICLES = ARTICLES;", ctx);
const { CATS, ARTICLES } = ctx;
const slugify = t => t.toLowerCase().replace(/&/g, " and ").replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
function page({ title, desc, url, type = "website" }) {
  const t = esc(title), d = esc(desc);
  return shell
    .replace(/<title>.*?<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:type" content=")[^"]*/, `$1${type}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${d}`);
}
function write(rel, html) {
  fs.mkdirSync(path.dirname(rel), { recursive: true });
  fs.writeFileSync(rel, html);
}

// Clear out previously generated topic folders so removed articles disappear.
for (const c of CATS) fs.rmSync(c.slug, { recursive: true, force: true });

let n = 0;
const urls = [SITE + "/"];
for (const c of CATS) {
  const curl = `${SITE}/${c.slug}/`;
  write(`${c.slug}/index.html`, page({ title: `${c.name} — Rich With Reason`, desc: c.blurb, url: curl }));
  urls.push(curl); n++;
  for (const p of c.posts) {
    const s = slugify(p), a = ARTICLES[s];
    const url = `${SITE}/${c.slug}/${s}/`;
    write(`${c.slug}/${s}/index.html`, page({
      title: `${a ? a.title : p} — Rich With Reason`,
      desc: a ? a.dek : `${c.name} guide from Rich With Reason.`,
      url, type: a ? "article" : "website",
    }));
    if (a) urls.push(url);
    n++;
  }
}
// Unknown addresses fall back to the site instead of GitHub's error page.
write("404.html", shell);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`Built ${n} pages + 404.html, sitemap.xml (${urls.length} URLs)`);
