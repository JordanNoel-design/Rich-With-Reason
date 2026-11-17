# Rich With Reason — working rules for Claude

Owner's standing instruction: every change Claude makes to this site goes live automatically.
Don't stop to ask before committing or pushing site updates.

After any edit (articles, design, copy, images, tags):
1. If articles, topics or `index.html` changed, run `node tools/build-pages.mjs` (rebuilds the
   clean-URL pages, sitemap and asset version stamps).
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
- Topic/article folders, `404.html`, `sitemap.xml` and `robots.txt` are generated; don't hand-edit them.
