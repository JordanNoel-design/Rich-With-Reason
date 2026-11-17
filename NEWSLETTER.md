# The Weekly Reason — newsletter rules

The Rich With Reason weekly email. These rules are the source of truth for every issue. Claude
drafts each issue from them; the owner reviews, edits if needed, and sends it from Wix.

## 1. Content format

**Promise to the reader:** one email every Sunday, a five-minute read, smarter money. No hype,
no spam.

**Subject line:** under 50 characters. Lead with the Buzzword of the week or the week's most
useful idea. No clickbait, no ALL CAPS, no emoji-only subjects.
Examples: "What a 'sinking fund' is (and why you want one)", "Your savings rate, explained".

**Preheader:** one sentence, under 90 characters, that adds to the subject rather than repeating it.

**Sections, always in this order:**

| # | Section | What goes in it | Length |
|---|---------|-----------------|--------|
| 1 | Greeting | "Your money, this week ☕" plus one or two warm, plain sentences. Use the reader's first name if Wix has it. | 1–2 sentences |
| 2 | 💡 Buzzword Brief | One finance term people are searching or hearing. What it means, why it matters to the reader, one real-life example. Link to the related Rich With Reason guide when one exists. | 80–130 words |
| 3 | 📈 One market thing | The week's biggest money headline in plain English, and what (if anything) it means for an ordinary household. Name the source and link to it. | 80–130 words |
| 4 | ✅ One action | One task the reader can finish in five minutes this week, written as a numbered mini-checklist. | 3–5 short steps |
| 5 | 📚 Best of the blog | Three Rich With Reason articles, each with its title, a one-line reason to read it and a link. Mix topics; favour new or seasonal articles. | 3 items |
| 6 | Sign-off | "Talk soon, The Rich With Reason team" and an invite to reply with a money question (reader questions may be answered in a future issue). | 1–2 sentences |
| 7 | Footer | The disclaimer and disclosure in section 3, plus Wix's unsubscribe link and mailing address. | — |

**Total length:** 450–700 words (a five-minute read).

**Voice:** the same as the site: clear, honest, friendly, no jargon without explaining it, no
shaming. Short sentences and short paragraphs. Talk to one person ("you").

**Links:** use clean site URLs only, such as `https://richwithreason.com/investing/` or
`https://richwithreason.com/<topic>/<article-slug>/`. Never `#/` links. Only link to articles
that are published (not "coming soon" pages).

**Facts and numbers:** every rate, statistic, date or news claim comes from a source checked that
week, and the email names the source. Say "about" or give a range when figures move daily. Never
invent quotes, numbers or reader stories. Prefer primary sources (the Fed, BLS, IRS, SEC, FDIC,
company announcements) over aggregators.

**Don't repeat:** a buzzword or action used in the last 8 issues isn't reused. Keep the running
list in the "Issue log" at the bottom of this file.

## 2. Schedule and workflow

| When (US Eastern) | What happens | Who |
|---|---|---|
| Friday, about 12:40 pm | Claude researches the week and creates the issue as a **draft campaign** in Wix Email Marketing (Rich With Reason site), then adds it to the Issue log below. | Claude (scheduled task) |
| Friday–Saturday | Owner opens the draft in Wix, reads it, edits anything, and sends a test email to themselves. | Owner |
| Sunday, 7 am | The issue goes out to all subscribers. Owner schedules this in Wix (Schedule → Sunday 7:00 am) or sends it manually. | Owner |
| Monday | Optional: owner checks opens and clicks in Wix and tells Claude what worked, so future drafts improve. | Owner |

**Claude never sends, schedules, publishes or test-sends a campaign, and never sends any email
on the owner's behalf.** Claude only creates drafts. If a draft can't be created, Claude reports
the problem instead of working around it.

A skipped week is better than a rushed or inaccurate issue. If there isn't enough checked
material, the draft says so at the top in a note to the owner.

## 3. Compliance and disclaimers

Every issue includes, in the footer:

> **Not financial advice.** The Weekly Reason is for education and information only. It isn't
> financial, investment, tax, insurance or legal advice. Consider talking with a licensed
> professional about your situation. Investing and cryptocurrency involve risk, including loss
> of principal.

When an issue contains any affiliate or sponsored link, it also includes, near the top and in the
footer:

> Some links in this email are affiliate links. If you sign up through them, Rich With Reason may
> earn a commission at no extra cost to you. It never affects what we recommend.

Sponsored sections are labelled "Sponsored" where they appear.

**Content rules:**
- Never tell readers to buy, sell or hold a specific stock, fund, coin or other security, and
  never predict prices. Explain concepts and trade-offs; let the reader decide.
- No guaranteed-return or get-rich-quick language ("guaranteed", "risk-free", "can't lose").
- Product mentions (cards, accounts, apps) state that terms change and should be checked, and
  give the date the figures were checked.
- No subject lines that mislead about what's inside.

**CAN-SPAM basics (Wix handles most of this, but check):**
- The sender name is "Rich With Reason" and the reply-to address is one the owner reads.
- Every email has a working unsubscribe link (Wix adds it automatically; never remove it).
- Every email shows a physical mailing address. It comes from the sender details in Wix Email
  Marketing; the owner must set it (a PO box or registered virtual mailbox is fine).
- Unsubscribes are honoured right away. Wix does this automatically.

## 4. Subscriber handling

- **Where signups come from:** the newsletter forms on richwithreason.com (home page and every
  topic page). Each signup goes to the Wix form **"The Weekly Reason signup"** on the Rich With
  Reason Wix site, which creates or updates the contact and marks their email as **Subscribed**.
- **Who receives the newsletter:** contacts whose email status is Subscribed. Never add people
  who didn't sign up themselves (no imported, bought or scraped lists).
- **Topic preferences:** the topics a subscriber picks are saved on their form submission (Wix
  dashboard → Forms → The Weekly Reason signup → Submissions). For now every subscriber gets the
  same issue, and the "Best of the blog" section mixes topics. When the list is big enough, the
  owner can segment by topic.
- **Welcome email:** Wix automation "Welcome email for new Weekly Reason subscribers"
  (trigger: "The Weekly Reason signup" form submitted → send the welcome email to that contact).
  It's a promotional email, so it respects unsubscribes. The owner turns it on or off in
  Wix → Automations; Claude never switches it on without being asked.
- **Unsubscribes and bounces:** handled by Wix. Never re-subscribe someone who unsubscribed,
  even if they appear in another list.
- **Privacy:** subscriber emails are never sold, shared, pasted into chats, or stored anywhere
  outside Wix. Claude doesn't read or list subscribers' personal details when drafting.
- **Replies:** reader replies go to the owner's inbox. Questions worth answering can become a
  future "Reader Q" article or Buzzword Brief, with no personal details included.

## Technical notes (for Claude)

- Wix site: "Rich With Reason", site ID `27c4bbd3-0f80-42ab-abf1-1ec09cca675c`.
- Signup form: "The Weekly Reason signup", form ID `208dca30-0514-429d-90a8-734ff9f132e4`.
- Website headless client ID (public): `bd6b5e41-1016-4400-b98c-d667515c8ae9`.
- Drafts: Wix Email Marketing `POST https://www.wixapis.com/email-marketing/v1/campaigns` with
  MJML content (creates a draft). Never call Publish or any send/schedule/test endpoint.
- Draft title format: `The Weekly Reason — <Sunday date, e.g. Nov 22, 2026> — <Buzzword>`.
- Blog articles to feature come from `ARTICLES` in `assets/site.js` (published ones only).

## Issue log

Newest first. One line per issue: Sunday date · Buzzword · Market topic · Action.

| Sunday | Buzzword | Market thing | Action |
|---|---|---|---|
