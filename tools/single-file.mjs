// Writes the whole site as one self-contained HTML file (CSS and JS inlined),
// for the copy kept in the claude.ai "Rich With Reason" project (rich-with-reason.html).
//   node tools/single-file.mjs /path/to/rich-with-reason.html
import fs from "node:fs";
import path from "node:path";
const out = process.argv[2];
if (!out || !path.relative(process.cwd(), path.resolve(out)).startsWith("..")) throw new Error("Pass an output path outside the repo");
const css = fs.readFileSync("assets/site.css", "utf8"), js = fs.readFileSync("assets/site.js", "utf8");
const html = fs.readFileSync("index.html", "utf8")
  .replace(/<link rel="stylesheet" href="\/assets\/site\.css[^"]*">/, () => `<style>\n${css}</style>`)
  .replace(/<script src="\/assets\/site\.js[^"]*"><\/script>/, () => `<script>\n${js}</script>`);
fs.writeFileSync(out, html);
console.log(`Wrote ${out}`);
