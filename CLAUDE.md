# Rich With Reason — working rules for Claude

Owner's standing instruction: every change Claude makes to this site goes live automatically.
Don't stop to ask before committing or pushing site updates.

After any edit (articles, design, copy, images, tags):
1. Always run `node tools/build-pages.mjs` (builds index.html and every topic/article page with
   content built in, plus the sitemap and asset version stamps).
2. Commit with a short message describing the change.
3. Push to `main` on github.com/JordanNoel-design/Rich-With-Reason. GitHub Pages deploys to
   richwithreason.com in about a minute.
4. Update the project copy: run `node tools/single-file.mjs <path outside repo>/rich-with-reason.html`
   and save that file over `rich-with-reason.html` in the claude.ai "Rich With Reason" project.
   GitHub and the project copy must always match.
5. Sync the Wix copy (see "Wix copy" below). It must match GitHub after every push to `main`.
6. Check the live page loads, then tell the owner what changed (and whether the Wix sync worked).

Before editing, pull the latest from GitHub. GitHub is the source of truth; never rebuild the site
from the project copy alone.

Site notes:
- Clean URLs only: links are `/topic/` and `/topic/article-slug/`. Never add `#/` links.
- Articles live in `ARTICLES` and topics in `CATS` inside `assets/site.js`.
- Layout, head tags and home page sections live in `tools/shell.html`. `index.html`, topic/article
  folders, `404.html`, `sitemap.xml` and `robots.txt` are generated; don't hand-edit them.
- No emojis anywhere on the web pages (copy, headings, buttons, articles, Buzzword of the Day).
  Topic icons are the line icons in `ICON` in `assets/site.js`.
- The site is verified in Google Search Console by `google326d43f13534df04.html` in the repo root.
  Never delete or change that file.

Wix copy (step 5):
The same site also runs on Wix as a mirror: Wix site "Rich With Reason" (Wix Headless, uploaded
files), site ID `fea00c88-5cb8-40a0-8fc2-7737fde49e94`, live at
https://headless-kgxameghwen-jnoel113-1408.wix-site-host.com . This is NOT the owner's old
editor-built Wix site (27c4bbd3-…); never upload site files there. richwithreason.com stays on
GitHub Pages. Only sync what is on `main` (never a branch or unmerged pull request).
Run it after every push to `main`, using the Wix connector (call WixREADME once first):
1. Note the commit you pushed: `git rev-parse HEAD`.
2. UploadImageToWixSite with siteId above and imageUrls
   `["https://github.com/JordanNoel-design/Rich-With-Reason/archive/<sha>.zip"]`.
   Keep the returned file ID (ends in `.zip`). Wix's sandbox can't reach GitHub directly; this is how
   the code gets into Wix.
3. ExecuteWixAPI (siteId above) in ONE call:
   - POST `https://www.wixapis.com/site-media/v1/files/generate-download-url` body
     `{ fileIds: ["<zip file ID>"] }` → `data.downloadUrl`; GET it with `responseType: "base64"`.
   - `wix.unzip()` it (if the result is a single inner .zip, unzip that too). Strip the one top
     folder (`Rich-With-Reason-<sha>/`). Skip folders/empty entries and leave out `tools/`,
     `README.md`, `CLAUDE.md`, `NEWSLETTER.md`, `CNAME`, `.nojekyll`, `google326d43f13534df04.html`.
     Stop if there is no `index.html`.
   - Drop the full set (a drop replaces every file, so always send the whole site):
     `wix.multipart(files)` → POST
     `https://www.wixapis.com/headless-business-setup/v1/headless-business/<siteId>/drop?campaign=mcp&agent=claude-code/cli/opus-5.5`
     (account scope, Content-Type from multipart).
   - Clean up: POST `https://www.wixapis.com/site-media/v1/bulk/files/delete` body
     `{ fileIds: ["<zip file ID>"], permanent: true }` (only that zip; never other media).
4. Check: fetch the Wix home page and confirm it carries the change (e.g. today's Buzzword).
   Wix serves only exact file names, so `/topic/` addresses 404 on a direct visit; that's expected,
   test inner pages as `/topic/index.html`.
If any step fails, GitHub stays live as normal: report the exact error (with the Wix request id)
and don't work around it.

Newsletter:
- The Weekly Reason rules live in `NEWSLETTER.md`. Follow them for every issue.
- Claude only ever creates draft campaigns in Wix Email Marketing. Never send, schedule,
  publish or test-send a campaign, and never send any email on the owner's behalf.

Buzzword of the Day:
- The home page card reads `BUZZWORD` in `assets/site.js`. Change it only with
  `node tools/set-buzzword.mjs <file.json>` (fields: date, term, def, why, source {name, url},
  optional link, linkText). It also logs each pick to `tools/buzzword-history.json`.
- Pick the finance term getting the most attention in the last 24–48 hours across major news
  outlets (Reuters, AP, CNBC, Bloomberg, WSJ, NYT, Yahoo Finance, MarketWatch, Fox Business, NPR)
  and official sources (Fed, BLS, Treasury, IRS, SEC). It must be a real money term a regular
  reader would hear and want explained, not a company name, ticker or person.
- Never repeat a buzzword: every day must be a different term from every past day in
  `tools/buzzword-history.json` (set-buzzword.mjs refuses exact repeats). Also skip near-duplicates
  and variants of a past term (e.g. "rate hike" vs "interest rate increase"); if the top story is
  about a term already used, pick the next most-talked-about term instead.
- `def`: plain English, one or two sentences, no jargon. `why`: one sentence on why it's in the
  news today, with facts from the cited `source` (a real article or official page you opened).
  Never invent numbers or quotes. Stay politically neutral.
- `link`: the closest published Rich With Reason guide (clean URL), otherwise `/trending/`.
- The daily update needs no approval: set it, build, commit, push, update the project copy, sync the Wix copy.

SEO (a priority for every article):
- Target a specific question people type into Google (e.g. "how long does a late payment stay on
  your credit report"), not a broad topic. Research what people are actually asking before writing.
- Every ARTICLES entry needs: `seo` (the search-friendly <title>, under ~65 characters, containing
  the main question or keyword), `faq` (3-4 [question, answer] pairs using real searched questions,
  plain-text answers of 1-3 sentences, facts checked), and an entry in `RELATED` (3 related article
  keys, plus a calculator key: compound, debt, emergency or millionaire, when one fits).
- The byline is "By Jordan Noel" (automatic). Structured data (Article, FAQPage, BreadcrumbList)
  is added by tools/build-pages.mjs; don't hand-write it.
- Link to 2-3 related Rich With Reason guides inside the body text, using clean URLs.
- Calculators live in `TOOLS` / `TOOL_PAGES` in assets/site.js and are listed at /calculators/.
