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
5. Check the live page loads, then tell the owner what changed.

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
- Don't repeat any term used in the last 30 days (check the history file).
- `def`: plain English, one or two sentences, no jargon. `why`: one sentence on why it's in the
  news today, with facts from the cited `source` (a real article or official page you opened).
  Never invent numbers or quotes. Stay politically neutral.
- `link`: the closest published Rich With Reason guide (clean URL), otherwise `/trending/`.
- The daily update needs no approval: set it, build, commit, push, update the project copy.

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
