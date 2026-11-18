// Sets the home page "Buzzword of the Day" and logs it to tools/buzzword-history.json.
//   node tools/set-buzzword.mjs /path/to/buzzword.json
// The JSON needs: date (YYYY-MM-DD), term, def, why, source {name, url}; optional link, linkText.
// Then run node tools/build-pages.mjs as usual.
import fs from "node:fs";

const file = process.argv[2];
if (!file) throw new Error("Usage: node tools/set-buzzword.mjs <buzzword.json>");
const b = JSON.parse(fs.readFileSync(file, "utf8"));

const need = ["date", "term", "def", "why"];
for (const k of need) if (!b[k] || typeof b[k] !== "string" || !b[k].trim()) throw new Error(`Missing "${k}"`);
if (!/^\d{4}-\d{2}-\d{2}$/.test(b.date)) throw new Error("date must be YYYY-MM-DD");
if (!b.source || !/^https:\/\//.test(b.source.url || "") || !b.source.name) throw new Error("source needs name and an https url");
if (b.term.length > 40) throw new Error("term too long (max 40 chars)");
if (b.def.length > 260) throw new Error("def too long (max 260 chars)");
if (b.why.length > 220) throw new Error("why too long (max 220 chars)");
if (b.link && !/^\/[a-z0-9-]+\/([a-z0-9-]+\/)?$/.test(b.link)) throw new Error("link must be a clean site path like /investing/ or /topic/slug/");

const out = { date: b.date, term: b.term.trim(), def: b.def.trim(), why: b.why.trim(),
  source: { name: b.source.name.trim(), url: b.source.url.trim() },
  link: b.link || "/trending/", linkText: (b.linkText || "More trending money news").trim() };

const js = fs.readFileSync("assets/site.js", "utf8");
const re = /\/\* BUZZWORD:START \*\/[\s\S]*?\/\* BUZZWORD:END \*\//;
if (!re.test(js)) throw new Error("BUZZWORD markers not found in assets/site.js");
fs.writeFileSync("assets/site.js", js.replace(re, () =>
  `/* BUZZWORD:START */\nconst BUZZWORD = ${JSON.stringify(out, null, 2)};\n/* BUZZWORD:END */`));

const hp = "tools/buzzword-history.json";
const hist = fs.existsSync(hp) ? JSON.parse(fs.readFileSync(hp, "utf8")) : [];
const filtered = hist.filter(h => h.date !== out.date);
filtered.push({ date: out.date, term: out.term, source: out.source.url });
fs.writeFileSync(hp, JSON.stringify(filtered.slice(-365), null, 2) + "\n");
console.log(`Buzzword of the Day for ${out.date}: ${out.term}`);
