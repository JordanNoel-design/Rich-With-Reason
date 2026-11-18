const CATS = [
  {slug:"trending", name:"Trending Posts", ico:"🔥", color:"#b3401f", tint:"#fbe9e3",
   blurb:"The money stories and buzzwords everyone's searching this week.",
   intro:"The most-read posts on Rich With Reason, plus fresh takes on the money headlines and buzzwords people are searching right now — updated every week.",
   sub:["This Week","Buzzword Brief","Money News","Most Read","Reader Questions"],
   steps:[["Catch the Buzzword Brief","One term, decoded in 30 seconds."],["Scan the week's money news","What happened and why it matters to you."],["Read the most-shared post","See what other readers found useful."],["Ask us a question","We answer reader questions every week."]],
   posts:["Buzzword Brief: what does 'rate hike' mean?","Buzzword Brief: what does 'soft landing' mean?","The 3-account system that makes saving automatic","Are high-yield savings rates still worth it?","What the latest jobs report means for your wallet","'Loud budgeting' explained","Reader Q: Should I pay off debt or invest first?"],
   terms:[["Soft landing","When an economy slows without falling into recession."],["Loud budgeting","Openly saying no to spending that doesn't fit your goals."],["Recession","A significant, widespread decline in economic activity."]]},
  {slug:"personal-finance", name:"Personal Finance", ico:"💼", color:"#7a4b12", tint:"#fbf3dd",
   blurb:"Budgeting, saving and everyday money habits that add up.",
   intro:"Start here if you're new. Budgeting, emergency funds, taxes and everyday money habits — explained step by step, with no judgment and no jargon.",
   sub:["Budgeting","Emergency Fund","Taxes","Saving Money","Money Habits"],
   steps:[["Track one month of spending","You can't change what you can't see."],["Build a starter emergency fund","Aim for $1,000, then 3–6 months of expenses."],["Choose a budget style","50/30/20, zero-based or pay-yourself-first."],["Set one money goal","Specific, dated and automated."]],
   posts:["The 50/30/20 budget, explained with examples","How much should be in your emergency fund?","Sinking funds: the stress-free way to save","Tax refunds vs. adjusting your withholding","20 painless ways to cut monthly bills","How to talk about money with your partner"],
   terms:[["Net worth","What you own minus what you owe."],["Sinking fund","Saving monthly for a known future expense."],["Zero-based budget","Every dollar gets a job before the month begins."]]},
  {slug:"financial-freedom", name:"Financial Freedom", ico:"🕊️", color:"#0f5b3f", tint:"#e7f2ec",
   blurb:"FIRE, side income and the path to choosing how you spend your time.",
   intro:"Financial freedom means your money supports the life you want — not the other way around. Explore FIRE, passive income, side hustles and the mindset shifts that get you there sooner.",
   sub:["FIRE Movement","Side Hustles","Passive Income","Mindset","Early Retirement"],
   steps:[["Find your freedom number","Annual expenses × 25 — your starting target."],["Raise your savings rate","The single biggest lever on your timeline."],["Add a second income stream","Even $300/month changes the math."],["Invest the gap automatically","Make progress the default."]],
   posts:["What is FIRE? Lean, Fat and Coast explained","The 4% rule in plain English","12 side hustles you can start this weekend","How to calculate your financial independence number","Passive income ideas that actually work","Why your savings rate matters more than returns"],
   terms:[["FIRE","Financial Independence, Retire Early."],["Savings rate","The share of your income you keep and invest."],["Coast FI","Having enough invested that growth alone covers retirement."]]},
  {slug:"banking-credit", name:"Banking & Credit", ico:"🏦", color:"#1d4e89", tint:"#e6eef8",
   blurb:"Checking, savings, credit scores and cards — the foundation of every money move.",
   intro:"Your bank account and credit score quietly shape the price you pay for almost everything. Learn how to pick the right accounts, build credit from scratch, and use cards without paying a cent in interest.",
   sub:["Credit Scores","Credit Cards","Savings Accounts","Checking","Debt Payoff"],
   steps:[["Know your score","Where to check it for free and what the number means."],["Pick a high-yield savings account","Stop letting your emergency fund earn almost nothing."],["Use one card, pay it in full","The simplest way to build credit without debt."],["Automate your bills","Never pay a late fee again."]],
   posts:["How credit scores are actually calculated","High-yield savings vs. money market accounts","Balance transfer cards: when they're worth it","Debt snowball vs. avalanche: which wins?","How to build credit with no credit history","Overdraft fees: how to avoid them for good"],
   terms:[["APR","The yearly cost of borrowing, including interest."],["Credit utilization","How much of your available credit you're using — keep it under 30%."],["APY","What your savings actually earn in a year with compounding."]]},
  {slug:"investing", name:"Investing", ico:"📈", color:"#3b3a8f", tint:"#ecebfa",
   blurb:"Index funds, retirement accounts and growing money for the long run.",
   intro:"Investing doesn't have to be complicated. Learn how index funds, 401(k)s and IRAs work, how to think about risk, and how to build a simple portfolio you can stick with.",
   sub:["Index Funds","Retirement (401k/IRA)","Stocks","ETFs","Beginner Investing"],
   steps:[["Grab any employer match","It's an instant return on your money."],["Open a Roth or traditional IRA","Know the difference before you choose."],["Pick a low-cost index fund","Broad, diversified and cheap."],["Invest on autopilot","Dollar-cost averaging beats market timing."]],
   posts:["Index funds vs. ETFs: what's the difference?","Roth IRA vs. traditional IRA, simply explained","How to start investing with $100","What is an expense ratio and why it matters","Dollar-cost averaging, explained","How to build a three-fund portfolio"],
   terms:[["Index fund","A fund that tracks a market index like the S&P 500."],["Expense ratio","The yearly fee a fund charges, as a % of your investment."],["Diversification","Spreading money across investments to reduce risk."]]},
  {slug:"insurance", name:"Insurance", ico:"🛡️", color:"#0e6b73", tint:"#e3f3f4",
   blurb:"Life, health, auto and home coverage — protect what you've built.",
   intro:"Insurance protects everything else you're building. Understand what coverage you actually need, how to compare policies, and where people commonly overpay.",
   sub:["Life Insurance","Health Insurance","Auto Insurance","Home & Renters","Disability"],
   steps:[["List what you need to protect","Income, home, car, family."],["Learn the key terms","Premium, deductible, out-of-pocket max."],["Compare at least three quotes","Prices vary more than you'd think."],["Review coverage every year","Life changes; your policy should too."]],
   posts:["Term vs. whole life insurance: which do you need?","How much life insurance is enough?","Why renters insurance is the best deal in finance","How to lower your car insurance premium","HSA vs. FSA explained","Disability insurance: the coverage most people skip"],
   terms:[["Premium","What you pay for coverage, monthly or yearly."],["Deductible","What you pay before insurance kicks in."],["Term life","Coverage for a set period, usually 10–30 years."]]},
];

/* ============ ARTICLES ============
   Add a new article by adding an entry keyed by its slug (the title in lowercase with
   dashes, e.g. "how-to-build-credit-with-no-credit-history"). Any card whose title has
   no entry here opens a "coming soon" page instead of a dead link. */
const ARTICLES = {
  "how-credit-scores-are-actually-calculated": {
    cat:"banking-credit",
    title:"How credit scores are actually calculated",
    dek:"Five ingredients, one three-digit number. Here's what goes into your FICO score, how much each part counts, and which levers actually move it.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Your FICO score is built from five factors: payment history (35%), amounts owed (30%), length of credit history (15%), credit mix (10%) and new credit (10%).</li>
<li>Paying on time and keeping your card balances low drive about two-thirds of your score.</li>
<li>Your income, savings and job aren't part of the formula at all.</li>
</ul></div>

<p>A credit score can feel like a grade handed down by a mysterious committee. It's actually the output of a formula, and once you know the formula you know exactly where to put your effort and where you're wasting it.</p>

<h2>First: which credit score?</h2>
<p>You don't have one credit score. You have dozens. Two companies build the models most lenders use: <strong>FICO</strong> and <strong>VantageScore</strong>. Both read the data in your credit reports from the three bureaus (Equifax, Experian and TransUnion), and their main versions score you from 300 to 850.</p>
<p>FICO is still used in most lending decisions. VantageScore has been gaining ground, though. In 2026, Fannie Mae and Freddie Mac began accepting VantageScore 4.0 for mortgages alongside classic FICO. That's why the score in your banking app may not match the one your lender pulls: it may be a different model, a different bureau or a different day. The good news is that both models reward the same habits.</p>

<h2>The five ingredients of a FICO score</h2>
<table class="weights">
<thead><tr><th>Factor</th><th>Weight</th><th style="width:34%"></th></tr></thead>
<tbody>
<tr><td>Payment history</td><td class="pct">35%</td><td><div class="wbar"><i style="width:100%"></i></div></td></tr>
<tr><td>Amounts owed</td><td class="pct">30%</td><td><div class="wbar"><i style="width:86%"></i></div></td></tr>
<tr><td>Length of credit history</td><td class="pct">15%</td><td><div class="wbar"><i style="width:43%"></i></div></td></tr>
<tr><td>Credit mix</td><td class="pct">10%</td><td><div class="wbar"><i style="width:29%"></i></div></td></tr>
<tr><td>New credit</td><td class="pct">10%</td><td><div class="wbar"><i style="width:29%"></i></div></td></tr>
</tbody></table>

<h3>1. Payment history (35%)</h3>
<p>This is the biggest piece, and it answers one question: do you pay what you owe, when you owe it? A payment usually isn't reported as late until it's at least 30 days past due. After that, each step (60 days, 90 days, collections) does more damage. A late payment can stay on your report for up to seven years, but its impact fades as it ages, especially if everything after it is on time.</p>
<div class="callout"><strong>Easiest win:</strong> Set up autopay for at least the minimum payment on every card and loan. Then pay the rest manually. One forgotten due date can cost you more points than months of good behavior earn.</div>

<h3>2. Amounts owed (30%)</h3>
<p>The key number here is your <strong>credit utilization</strong>: how much of your available credit you're using. If you have $5,000 in total card limits and $1,500 in balances, your utilization is 30%. Scoring models look at it overall and card by card.</p>
<p>The common advice is to stay under 30%, but people with the highest scores tend to sit in the single digits. One detail trips people up. Your card issuer usually reports your <em>statement</em> balance, not what you owe after you pay. So even if you pay in full every month, a big balance on statement day can show up as high utilization. Paying a chunk before your statement closes fixes that.</p>
<p>Utilization can also bounce back quickly. In classic FICO models, once a lower balance is reported, the score reflects it. Newer models such as VantageScore 4.0 also look at "trended data," meaning whether your balances have been rising or falling over time. That's another reason to pay balances down, not just move them around.</p>

<h3>3. Length of credit history (15%)</h3>
<p>This looks at the age of your oldest account, your newest account and the average age of all of them. You can't speed this one up. You can only avoid resetting it. That's why closing your oldest no-fee card is often a mistake. You lose its credit limit, which pushes utilization up. Over time you also lose its age once it eventually drops off your report.</p>

<h3>4. Credit mix (10%)</h3>
<p>Lenders like to see that you can handle different kinds of credit. That means <em>revolving</em> accounts like credit cards and <em>installment</em> loans like auto loans, student loans or a mortgage. It's a small factor. Never take out a loan just to improve your mix. The interest will cost far more than the few points it might add.</p>

<h3>5. New credit (10%)</h3>
<p>Each time you apply for credit, the lender usually does a <strong>hard inquiry</strong>. One inquiry typically costs only a few points. FICO counts it for 12 months, and it stays on your report for two years. Several new accounts in a short stretch can look risky, though. There's an exception for shoppers: multiple mortgage, auto or student loan inquiries within a short window are generally counted as one, so comparing rates won't hurt much. Checking your own score is a "soft" inquiry and never counts.</p>

<h2>What's <em>not</em> in your score</h2>
<p>Some things people assume matter don't show up at all. These include your income, savings balance, employer and job title, and age. Using a debit card doesn't count either, and neither does how often you check your own credit. Rent and utility payments usually don't count unless they're reported to the bureaus, though some newer models (including VantageScore 4.0) can use rent data when it's there.</p>

<h2>A quick example</h2>
<p>Maya and Luis both earn $60,000 and both have $5,000 in credit card limits.</p>
<ul>
<li><strong>Maya</strong> usually carries a $2,500 balance (50% utilization) and paid one bill 30+ days late last year.</li>
<li><strong>Luis</strong> pays in full every month and his statements show about $300 (6% utilization).</li>
</ul>
<p>Luis will almost certainly have the stronger score, by a wide margin, even though their income is identical. The two biggest factors, payment history and amounts owed, both favor him. Maya's fix doesn't need a raise. She needs autopay and a plan to bring that balance down.</p>

<h2>Your 5-minute action plan</h2>
<ol>
<li><strong>Pull your reports.</strong> You can get free reports from all three bureaus every week at <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener">AnnualCreditReport.com</a>, the official site. Dispute anything that isn't yours.</li>
<li><strong>Turn on autopay</strong> for at least the minimum on every account.</li>
<li><strong>Find your utilization.</strong> Divide your total balances by your total limits. If it's over 30%, pay down balances or make a payment before your statement date.</li>
<li><strong>Keep your oldest no-fee card open.</strong> Put a small recurring bill on it so the issuer doesn't close it for inactivity.</li>
<li><strong>Space out applications.</strong> When you're rate-shopping for a loan, do it within a couple of weeks.</li>
</ol>

<h2>The bottom line</h2>
<p>About two-thirds of your FICO score comes down to two habits: paying on time and not using much of the credit you have. Get those right and most of the rest takes care of itself with time.</p>

<p class="art-note">Factor weights are FICO's published general guidelines; the exact impact of any action depends on your full credit profile and the scoring model a lender uses. This article is for education only and isn't financial advice.</p>
`},
  "high-yield-savings-vs-money-market-accounts": {
    cat:"banking-credit",
    title:"High-yield savings vs. money market accounts",
    dek:"They pay similar rates and carry the same insurance. The real difference is how you get your money out, and that should decide which one you open.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Both are insured savings accounts that pay far more than a typical big-bank savings account.</li>
<li>A money market account usually adds checks or a debit card. A high-yield savings account usually pays a little more and has lower minimums.</li>
<li>For most emergency funds, a high-yield savings account at an online bank is the simpler choice.</li>
</ul></div>

<p>If your savings sit in the same bank as your checking account, there's a good chance they're earning almost nothing. Both high-yield savings accounts and money market accounts can fix that. They're closer cousins than their names suggest, so the choice comes down to a few practical details.</p>

<h2>What they have in common</h2>
<ul>
<li><strong>They're both bank deposits.</strong> At an FDIC-insured bank or NCUA-insured credit union, each is protected up to $250,000 per depositor, per institution, per ownership category.</li>
<li><strong>Their rates are variable.</strong> The rate can rise or fall at any time, usually following the Federal Reserve.</li>
<li><strong>They pay far more than average.</strong> In November 2026, the best high-yield savings accounts pay roughly 4% to 4.4% APY, while the FDIC's national average for savings is about 0.38%. On $10,000, that's around $400 a year versus less than $40.</li>
</ul>

<h2>Where they differ</h2>
<table class="weights">
<thead><tr><th></th><th>High-yield savings</th><th>Money market account</th></tr></thead>
<tbody>
<tr><td>Typical top rates (Nov 2026)</td><td>~4.0% to 4.4% APY</td><td>~3.8% to 4.0% APY</td></tr>
<tr><td>Checks or debit card</td><td>Rarely</td><td>Often</td></tr>
<tr><td>Minimum balance</td><td>Often $0</td><td>Often $1,000 or more for the best rate</td></tr>
<tr><td>Rate tiers by balance</td><td>Sometimes</td><td>Common</td></tr>
<tr><td>Where you find the best ones</td><td>Online banks</td><td>Online banks and credit unions</td></tr>
</tbody></table>
<p>The big practical difference is access. With most high-yield savings accounts, you move money to checking first and then spend it, which usually takes one to two business days. A money market account often lets you write a check or use a debit card straight from the account.</p>

<div class="callout"><strong>Don't mix these up:</strong> A money market <em>account</em> is a bank deposit and is FDIC- or NCUA-insured. A money market <em>fund</em> is an investment you buy through a brokerage. It's generally low-risk, but it isn't FDIC-insured. Both are useful; they're just not the same thing.</div>

<h2>Which one should you choose?</h2>
<h3>Choose a high-yield savings account if…</h3>
<ul>
<li>You're building an emergency fund or saving for a goal like a car or a trip.</li>
<li>You want no minimum balance and no monthly fee.</li>
<li>A one- or two-day wait to reach your money is fine, or even helpful because it keeps you from dipping in.</li>
</ul>
<h3>Choose a money market account if…</h3>
<ul>
<li>You keep a larger balance and want to pay some big bills straight from savings, like a property tax bill or a contractor.</li>
<li>You can meet the minimum to earn the top rate.</li>
<li>You like having a checkbook for that money without parking it in a low-paying checking account.</li>
</ul>

<h2>What to check before you open either one</h2>
<ol>
<li><strong>The real APY and its conditions.</strong> Some top rates are promotional, last only a few months or apply only up to a set balance. Read the fine print.</li>
<li><strong>Fees and minimums.</strong> A $10 monthly fee can wipe out the interest on a small balance.</li>
<li><strong>Insurance.</strong> Confirm the bank is FDIC-insured or the credit union is NCUA-insured. Some apps hold your money at partner banks, so check which one.</li>
<li><strong>Withdrawal limits.</strong> The federal six-per-month limit was removed in 2020, but some banks still cap transfers or charge for extras.</li>
<li><strong>Transfer speed.</strong> Find out how long it takes to move money to your checking account.</li>
</ol>

<h2>A simple setup that works for most people</h2>
<p>Keep about one month of spending in checking. Put your emergency fund in a high-yield savings account at a separate online bank, so it isn't sitting one tap away. Then set up an automatic transfer on payday. If you later build a large cash cushion and want check-writing, a money market account can hold part of it.</p>

<h2>The bottom line</h2>
<p>The difference between these two accounts is small. The difference between either one and a 0.4% savings account is huge. Pick the one that fits how you'll use the money, and then automate your deposits.</p>

<p class="art-note">Rates quoted are approximate ranges for top accounts in November 2026 and change often. Always confirm the current APY and terms with the bank. This article is for education only and isn't financial advice.</p>
`},
  "balance-transfer-cards-when-theyre-worth-it": {
    cat:"banking-credit",
    title:"Balance transfer cards: when they're worth it",
    dek:"A 0% balance transfer can save you more than a thousand dollars in interest, or cost you a fee for nothing. Here's how to tell which one you're about to get.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>A balance transfer moves debt from a high-interest card to a new card with 0% APR for a set time, usually for a 3% to 5% fee.</li>
<li>It pays off when you can clear most or all of the balance before the 0% period ends.</li>
<li>It backfires if you keep adding new debt or miss a payment.</li>
</ul></div>

<p>Credit card interest is brutal. Most regular card APRs today run from the high teens to the high twenties. A balance transfer card hits pause on that interest so more of every payment goes toward what you actually owe. Used well, it's one of the best debt tools there is. Used carelessly, it just moves the problem around.</p>

<h2>How a balance transfer works</h2>
<ol>
<li>You apply for a card with a 0% intro APR on balance transfers. Today the longest offers run up to about 21 months.</li>
<li>Once you're approved, you ask the new card to pay off your old card's balance, usually up to your new credit limit.</li>
<li>The new card adds a <strong>balance transfer fee</strong>, typically 3% to 5% of the amount moved.</li>
<li>You pay 0% interest on that balance until the intro period ends. After that, the card's regular APR applies to whatever is left.</li>
</ol>

<h2>The math: when it's worth it</h2>
<p>Say you owe <strong>$6,000 at 24% APR</strong> and can pay <strong>$300 a month</strong>.</p>
<ul>
<li><strong>Stay put:</strong> It takes about 26 months to pay off, and you pay roughly <strong>$1,740 in interest</strong>.</li>
<li><strong>Transfer to a 21-month 0% card with a 5% fee:</strong> The fee is $300, so you owe $6,300. At $300 a month, it's gone in exactly 21 months. Your total cost is <strong>$300</strong>.</li>
</ul>
<p>That's about <strong>$1,440 saved</strong>, and you're debt-free five months sooner. With a 3% fee the savings are even bigger.</p>

<div class="callout"><strong>Quick test:</strong> Divide your balance (plus the fee) by the number of 0% months. If you can comfortably pay that amount every month, a transfer is very likely worth it. If you can only pay half of it, you'll still save, but have a plan for what's left when the regular APR kicks in.</div>

<h2>When it's <em>not</em> worth it</h2>
<ul>
<li><strong>The balance is small.</strong> If you can pay off $800 in two or three months anyway, the fee may cost more than the interest you'd save.</li>
<li><strong>You'll keep using the old card.</strong> If the old card fills right back up, you end up with two balances instead of one.</li>
<li><strong>Your credit isn't strong enough.</strong> The best offers usually need good to excellent credit, roughly 670 or higher. A smaller credit limit may only cover part of your debt.</li>
<li><strong>The real problem is overspending.</strong> A transfer buys time. It doesn't fix a budget that runs short every month.</li>
</ul>

<h2>The fine print that trips people up</h2>
<ul>
<li><strong>Transfer deadlines.</strong> Many cards only give the 0% rate on transfers made within a set window after opening, often 60 to 120 days.</li>
<li><strong>Same-bank rule.</strong> You usually can't move a balance between two cards from the same issuer.</li>
<li><strong>New purchases.</strong> Some cards give 0% on transfers but not on purchases. New spending could start charging interest right away. Keep the card for the transfer only.</li>
<li><strong>Late payments.</strong> On many cards, one late payment can end the 0% rate early. Set up autopay for at least the minimum.</li>
<li><strong>Minimums aren't a plan.</strong> The required minimum payment is usually far too small to clear the balance in time. Set your own payment using the quick test above.</li>
</ul>

<h2>What happens to your credit score?</h2>
<p>Applying adds a hard inquiry and a new account, which may dip your score a few points at first. Over time, a transfer often <em>helps</em>. Your total available credit goes up, and as you pay the balance down, your utilization falls. Utilization is one of the biggest factors in your score. Keep the old card open, with a zero balance, so you don't lose that available credit.</p>

<h2>A step-by-step game plan</h2>
<ol>
<li>Add up the balances and APRs on every card.</li>
<li>Compare the 0% period length, the transfer fee and the regular APR after the intro period.</li>
<li>Do the quick test to work out your monthly payment.</li>
<li>Apply, then complete the transfer before the deadline.</li>
<li>Set up autopay for your planned payment, not just the minimum.</li>
<li>Put the old card somewhere out of reach, but keep it open.</li>
<li>Put a reminder in your calendar a few months before the 0% period ends.</li>
</ol>

<h2>The bottom line</h2>
<p>A balance transfer is worth it when three things are true: the interest you'll avoid is much bigger than the fee, you can pay off most of the balance before the 0% window closes, and you've stopped adding new debt. If all three are true, it's one of the fastest ways out of credit card debt.</p>

<p class="art-note">Card terms such as intro periods, fees and APRs vary and change often. Check the current offer details before applying. Example figures are rounded estimates. This article is for education only and isn't financial advice.</p>
`},
  "debt-snowball-vs-avalanche-which-wins": {
    cat:"banking-credit",
    title:"Debt snowball vs. avalanche: which wins?",
    dek:"One method saves the most money on paper. The other gets more people to the finish line. Here's how to choose, with real numbers.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li><strong>Snowball:</strong> Pay off the smallest balance first. You get quick wins that keep you motivated.</li>
<li><strong>Avalanche:</strong> Pay off the highest interest rate first. It costs you the least in interest.</li>
<li>The money difference is often smaller than people expect. The best method is the one you'll keep doing.</li>
</ul></div>

<p>When you have several debts, it's hard to know where to send extra money. Both of these methods start the same way. You pay the minimum on everything, then put every extra dollar toward one target debt. When that debt is gone, its payment "rolls over" to the next one. The only difference is the order of the targets.</p>

<h2>The debt snowball</h2>
<p>List your debts from <strong>smallest balance to largest</strong>, no matter the interest rate. Attack the smallest one first.</p>
<p><strong>Why it works:</strong> You wipe out a whole debt fast, often within months. That means one less bill, one less due date and real proof that the plan is working. That momentum matters. Research on real borrowers suggests that fully clearing individual balances helps people stick with paying off debt.</p>

<h2>The debt avalanche</h2>
<p>List your debts from <strong>highest interest rate to lowest</strong>, no matter the balance. Attack the most expensive one first.</p>
<p><strong>Why it works:</strong> The highest rate is the debt that grows fastest, so knocking it out first means you pay the least total interest. It's the mathematically best order.</p>

<h2>Let's run the numbers</h2>
<p>Here's one example with three debts and a total budget of <strong>$625 a month</strong> (the minimums plus $300 extra):</p>
<table class="weights">
<thead><tr><th>Debt</th><th>Balance</th><th>APR</th><th>Minimum</th></tr></thead>
<tbody>
<tr><td>Store card</td><td>$800</td><td>20%</td><td>$25</td></tr>
<tr><td>Credit card</td><td>$4,500</td><td>26%</td><td>$90</td></tr>
<tr><td>Car loan</td><td>$7,000</td><td>7%</td><td>$210</td></tr>
</tbody></table>
<table class="weights">
<thead><tr><th></th><th>Snowball</th><th>Avalanche</th></tr></thead>
<tbody>
<tr><td>First debt paid off</td><td>Store card, month 3</td><td>Credit card, month 14</td></tr>
<tr><td>Debt-free in</td><td>23 months</td><td>23 months</td></tr>
<tr><td>Total interest paid</td><td>About $1,575</td><td>About $1,520</td></tr>
</tbody></table>
<p>The avalanche saves about <strong>$55</strong> here. The snowball gets you your first win <strong>11 months sooner</strong>. That's the real trade-off. The gap grows when your debts have very different rates and big balances, and shrinks when the rates are close.</p>
<p class="art-note" style="margin-top:0;border:0;padding:0">Example assumes fixed minimum payments and no new charges; figures are rounded.</p>

<h2>How to choose</h2>
<h3>Pick the snowball if…</h3>
<ul>
<li>You've tried to pay off debt before and lost steam.</li>
<li>You have a few small balances you could clear quickly.</li>
<li>Juggling lots of bills stresses you out and you want fewer of them fast.</li>
</ul>
<h3>Pick the avalanche if…</h3>
<ul>
<li>You're motivated by numbers and can stay on track without quick wins.</li>
<li>One debt has a much higher rate than the rest, like a 29% card next to a 6% student loan.</li>
<li>Your balances are large, so the interest savings could be big.</li>
</ul>
<div class="callout"><strong>Hybrid option:</strong> Knock out one or two tiny balances first for momentum, then switch to the avalanche for the rest. There's no rule against mixing them.</div>

<h2>Make either method work better</h2>
<ol>
<li><strong>Stop adding new debt.</strong> Neither method works if the balances keep growing. Use cash or debit while you pay down.</li>
<li><strong>Keep a small emergency fund.</strong> Even $1,000 keeps a surprise car repair from landing back on a card.</li>
<li><strong>Automate the minimums.</strong> Then make the extra payment by hand each payday so you see your progress.</li>
<li><strong>Lower the rates where you can.</strong> A 0% balance transfer or a lower-rate consolidation loan can speed up either plan.</li>
<li><strong>Roll over every freed-up dollar.</strong> When a debt is paid off, its whole payment goes to the next target. Don't let it disappear into spending.</li>
<li><strong>Track it visually.</strong> A simple chart on the fridge or a spreadsheet you cross off works surprisingly well.</li>
</ol>

<h2>The bottom line</h2>
<p>The avalanche wins on paper and the snowball often wins in real life. If you're sure you'll stick with it, choose the avalanche. If motivation has been the problem, choose the snowball and don't feel bad about the small extra cost. Getting to zero is what counts.</p>

<p class="art-note">This article is for education only and isn't financial advice. If you're struggling to make minimum payments, a nonprofit credit counselor (look for NFCC members) can help you review your options.</p>
`},
  "how-to-build-credit-with-no-credit-history": {
    cat:"banking-credit",
    title:"How to build credit with no credit history",
    dek:"No credit history means lenders can't score you yet. You can't skip that step, but you can get through it in months, not years.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>With no credit history, many scoring models can't produce a score for you at all. You're "credit invisible," not bad at credit.</li>
<li>The fastest ways to start are a secured credit card, a credit-builder loan or becoming an authorized user.</li>
<li>Pay on time and keep balances low, and a solid score can follow within about 6 to 12 months.</li>
</ul></div>

<p>It's the classic catch-22: you need credit to get credit. Students, new arrivals to the U.S. and people who've always paid cash run into it all the time. The good news is that there are products built for exactly this situation, and they work.</p>

<h2>Why you don't have a score yet</h2>
<p>A credit score is a summary of your credit report. If your report is empty or too thin, there's nothing to summarize. Classic FICO models generally need at least one account that's been open for about six months and has been reported in the last six months. VantageScore can often score you sooner. Either way, the first step is the same: get an account reporting to the credit bureaus.</p>

<h2>Five ways to start</h2>

<h3>1. A secured credit card</h3>
<p>You put down a refundable deposit, often $200 to $500, and that usually becomes your credit limit. Otherwise it works like any credit card, and your payments are reported to the bureaus. Many issuers review your account after several months of on-time payments and may "graduate" you to a regular card and return your deposit.</p>
<p><strong>Look for:</strong> no annual fee, reporting to all three bureaus (Equifax, Experian and TransUnion) and a clear path to an upgrade.</p>

<h3>2. A credit-builder loan</h3>
<p>These are offered by many credit unions, community banks and some apps. The lender holds the loan amount in a savings account while you make fixed monthly payments. When you're done, you get the money back, minus any interest and fees. You build payment history <em>and</em> savings at the same time. It also adds an installment loan to your credit mix.</p>

<h3>3. Become an authorized user</h3>
<p>A family member or partner with good credit habits adds you to their credit card. If that issuer reports authorized users, the card's history can show up on your report. Only do this with someone who pays on time and keeps a low balance, because their mistakes can show up on your report too. You don't even need to use the card.</p>

<h3>4. A starter or student card</h3>
<p>Some unsecured cards are designed for people with limited history, especially students. They usually come with low limits. Approval isn't guaranteed, so check for "pre-qualification" tools, which use a soft inquiry that won't affect your credit.</p>

<h3>5. Get credit for bills you already pay</h3>
<p>Rent-reporting services and some bank-data tools can add rent, utilities or phone payments to your credit file. They don't count in every scoring model, but newer ones, including VantageScore 4.0, can use rent data when it's reported.</p>

<div class="callout"><strong>Avoid:</strong> Anyone who promises to "create a new credit identity" or sells you a "CPN" instead of your Social Security number. That's fraud, and you could be the one held responsible. Also be wary of paying big fees for "credit repair" when you don't have any credit yet.</div>

<h2>Use your first account the right way</h2>
<ol>
<li><strong>Make a small purchase each month,</strong> like a streaming subscription or a tank of gas.</li>
<li><strong>Pay the full statement balance</strong> by the due date. You never need to carry a balance or pay interest to build credit. That's a myth.</li>
<li><strong>Keep your balance low.</strong> On a $300 limit, try to keep the reported balance under about $30 to $90.</li>
<li><strong>Turn on autopay</strong> so you never miss a payment. Payment history is the biggest part of your score.</li>
<li><strong>Don't apply for lots of cards at once.</strong> One or two accounts are enough to start.</li>
</ol>

<h2>A realistic timeline</h2>
<ul>
<li><strong>Month 0:</strong> Open a secured card or credit-builder loan. Ask a family member about adding you as an authorized user.</li>
<li><strong>Months 1 to 6:</strong> Small charges, paid in full and on time, every month.</li>
<li><strong>Around 6 months:</strong> Most scoring models can now give you a score. Check it for free through your bank or card app.</li>
<li><strong>Months 6 to 12:</strong> Ask about graduating your secured card. If you want a second account, consider one regular no-fee card.</li>
<li><strong>Beyond:</strong> Keep your oldest account open and let time work for you.</li>
</ul>

<h2>Check your progress</h2>
<p>You can pull your credit reports from all three bureaus for free every week at <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener">AnnualCreditReport.com</a>. Make sure your new accounts appear and that the information is correct.</p>

<h2>The bottom line</h2>
<p>Starting from zero isn't a bad credit score. It's a blank page. Open one or two starter accounts, use them lightly and pay on time, every time. In a year you can have a credit history that opens the door to better cards, loans and apartments.</p>

<p class="art-note">Product terms vary by lender. Confirm that any account you open reports to the credit bureaus. This article is for education only and isn't financial advice.</p>
`},
  "overdraft-fees-how-to-avoid-them-for-good": {
    cat:"banking-credit",
    title:"Overdraft fees: how to avoid them for good",
    dek:"An overdraft fee can turn a $5 coffee into a $30 mistake. A few settings and habits can make sure it never happens to you again.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>An overdraft happens when you spend more than is in your checking account and the bank covers it for a fee, often around $25 to $35.</li>
<li>You can opt out of overdraft coverage for debit card and ATM transactions. Then they're simply declined, with no fee.</li>
<li>Low-balance alerts, a small cushion and a bank with no overdraft fees take care of the rest.</li>
</ul></div>

<p>Overdraft fees are among the most frustrating costs in banking because they hit when money is already tight. Banks still collect billions of dollars from them every year. The good news is that they're almost entirely avoidable once you know how they work.</p>

<h2>How overdrafts work</h2>
<p>If a payment comes through and your balance can't cover it, your bank has two choices:</p>
<ul>
<li><strong>Pay it anyway</strong> and charge you an <strong>overdraft fee</strong>. Your balance goes negative.</li>
<li><strong>Reject it</strong> and possibly charge a <strong>non-sufficient funds (NSF) fee</strong>, which many banks have dropped.</li>
</ul>
<p>Bankrate's most recent survey put the average overdraft fee at about $27, and many large banks still charge around $35. Some charge it more than once a day, and some add an extra fee if you stay negative for several days. A few small purchases on a bad day can add up to $100 or more in fees.</p>

<h2>Step 1: Check your overdraft settings</h2>
<p>Under federal rules, a bank can't charge you an overdraft fee on <strong>ATM withdrawals or one-time debit card purchases</strong> unless you've opted in to overdraft coverage. Many people opted in without realizing it when they opened their account.</p>
<p>Log in to your bank app or call the bank and ask: <em>"Am I opted in to overdraft coverage for debit card and ATM transactions?"</em> If you are, opt out. A card swipe without enough money will just be declined, which is mildly embarrassing but free.</p>
<div class="callout"><strong>Note:</strong> Opting out covers debit card and ATM transactions. Checks, automatic bill payments and other recurring charges can still overdraw your account, so the next steps matter too.</div>

<h2>Step 2: Turn on low-balance alerts</h2>
<p>Almost every bank app can send a text or push alert when your balance drops below an amount you choose. Set it to something like $100 or $200, enough warning to move money or hold off on spending.</p>

<h2>Step 3: Link a backup account</h2>
<p>Many banks offer <strong>overdraft protection transfers</strong>. If checking runs short, the bank pulls money from your linked savings account. The transfer fee, if any, is usually much smaller than an overdraft fee, and at many banks it's free. Ask how yours works.</p>

<h2>Step 4: Keep a buffer</h2>
<p>Treat a small amount, say $100 to $200, as "zero." Don't count it as spending money. That buffer absorbs the timing surprises: a subscription that renews early or a payment that clears before your paycheck lands.</p>

<h2>Step 5: Line up your bill dates with payday</h2>
<p>Many overdrafts come from timing, not overspending. Most companies will let you change a due date. Move your big bills to just after payday so the money is there when they're paid.</p>

<h2>Step 6: Consider a bank that doesn't charge overdraft fees</h2>
<p>A number of banks, including several large ones and many online banks, have dropped overdraft fees entirely. Others give you a grace period or a small "cushion" before any fee applies. If your bank still charges $35 per overdraft, switching may be the simplest fix of all.</p>

<h2>Already got hit? Ask for a refund</h2>
<p>If it's a first-time or rare overdraft, call your bank and politely ask them to waive the fee. Banks often refund one, especially for long-time customers. It takes five minutes and frequently works.</p>

<h2>Watch out for the "cheap" fixes</h2>
<p>Paycheck advance apps and payday loans can look like an easy way out of an overdraft. Some charge "tips" or express fees that work out to very high costs for a short loan. Use them rarely, if ever. A small emergency fund is the real long-term fix.</p>

<h2>Your 10-minute checklist</h2>
<ol>
<li>Opt out of debit and ATM overdraft coverage.</li>
<li>Set a low-balance alert.</li>
<li>Link your savings account for overdraft protection transfers.</li>
<li>Pick your buffer amount and treat it as zero.</li>
<li>Move bill due dates to right after payday.</li>
<li>Compare your bank's fees with no-overdraft-fee banks.</li>
</ol>

<h2>The bottom line</h2>
<p>Overdraft fees aren't a cost of having a bank account. They're a setting you can usually turn off, plus a couple of habits that keep the rest away. Spend 10 minutes on it today and you may never pay one again.</p>

<p class="art-note">Overdraft policies vary by bank and change often. Check your account agreement for current terms. This article is for education only and isn't financial advice.</p>
`},
  "what-is-fire-lean-fat-and-coast-explained": {
    cat:"financial-freedom",
    title:"What is FIRE? Lean, Fat and Coast explained",
    dek:"FIRE stands for Financial Independence, Retire Early. It isn't one plan but a family of them. Here's how each version works and who it fits.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>FIRE means saving and investing aggressively until your investments can cover your living costs, so work becomes optional.</li>
<li>The most common target is about <strong>25 times your yearly spending</strong>.</li>
<li>Lean, Fat, Coast and Barista FIRE are different trade-offs between how much you spend and how soon you're free.</li>
</ul></div>

<p>The FIRE movement started with a simple idea that sounds radical: if you save a big share of your income and invest it, you can reach the point where your investments pay your bills decades before traditional retirement age. Some people use that freedom to stop working completely. Many more use it to work on their own terms.</p>

<h2>The core math</h2>
<p>Most FIRE plans are built on the "4% rule," a rule of thumb from retirement research. It suggests that a diversified portfolio can support yearly withdrawals of about 4% of its starting value, adjusted for inflation, for around 30 years. Flip that around and you get the classic target:</p>
<div class="callout"><strong>FI number = your yearly spending × 25</strong><br>Spend $40,000 a year? Your target is about $1,000,000. Spend $30,000? About $750,000.</div>
<p>That's why FIRE is as much about spending as earning. Every dollar you cut from your yearly costs lowers your target by $25 <em>and</em> frees up another dollar to invest.</p>

<h2>The four main flavors</h2>

<h3>Lean FIRE</h3>
<p><strong>What it is:</strong> Reaching independence on a minimalist budget, often well under the typical household's spending.</p>
<p><strong>Pros:</strong> A smaller target means you can get there fastest.</p>
<p><strong>Cons:</strong> Thin margin for surprises like medical bills, a new roof or inflation. Lean FIRE works best for people who genuinely enjoy a simple life, not for those white-knuckling it.</p>

<h3>Fat FIRE</h3>
<p><strong>What it is:</strong> Independence with a comfortable or generous budget, often $100,000 a year or more.</p>
<p><strong>Pros:</strong> Plenty of cushion, and room for travel, hobbies and helping family.</p>
<p><strong>Cons:</strong> A target of $2.5 million or more usually takes a high income, a long runway or both.</p>

<h3>Coast FIRE</h3>
<p><strong>What it is:</strong> You've saved enough that, <em>without adding another dollar</em>, your investments should grow to your full retirement number by a traditional retirement age. You still work to pay today's bills, but you no longer need to save for retirement.</p>
<p><strong>Example:</strong> If you want $1 million (in today's dollars) at 65 and expect about 5% growth after inflation, you'd need roughly $181,000 invested at age 30 to "coast" there.</p>
<p><strong>Pros:</strong> Huge pressure relief. You can take a lower-paying job you love, work part-time or take a career break.</p>

<h3>Barista FIRE</h3>
<p><strong>What it is:</strong> Your investments cover part of your costs, and part-time or flexible work covers the rest. The name comes from the idea of a part-time job that also offers health insurance.</p>
<p><strong>Pros:</strong> You leave full-time work years earlier than with full FIRE, and the work you keep can add structure and social connection.</p>

<table class="weights">
<thead><tr><th>Version</th><th>Yearly spending</th><th>Target (×25)</th><th>Still working?</th></tr></thead>
<tbody>
<tr><td>Lean</td><td>$35,000</td><td>$875,000</td><td>Optional</td></tr>
<tr><td>Classic</td><td>$60,000</td><td>$1.5 million</td><td>Optional</td></tr>
<tr><td>Fat</td><td>$120,000</td><td>$3 million</td><td>Optional</td></tr>
<tr><td>Coast</td><td>Any</td><td>Enough to grow into it</td><td>Yes, but no need to save</td></tr>
<tr><td>Barista</td><td>Any</td><td>Partial</td><td>Part-time</td></tr>
</tbody></table>

<h2>What makes FIRE work</h2>
<ol>
<li><strong>A high savings rate.</strong> This is the single biggest lever. Someone saving 50% of their take-home pay can reach independence in roughly 17 years, compared with about 37 years at a 20% savings rate (assuming 5% growth after inflation).</li>
<li><strong>Low-cost, diversified investing.</strong> Most FIRE followers use broad index funds with tiny fees.</li>
<li><strong>Using tax-advantaged accounts.</strong> 401(k)s, IRAs and HSAs cut your tax bill while you build wealth.</li>
<li><strong>Growing your income.</strong> Raises, job changes and side income speed things up more than extreme frugality alone.</li>
</ol>

<h2>The challenges nobody should skip</h2>
<ul>
<li><strong>Health insurance before 65.</strong> Without an employer plan, you'll likely use the ACA marketplace. Budget for it carefully.</li>
<li><strong>Getting to your retirement money early.</strong> Withdrawals from 401(k)s and IRAs before 59½ usually come with a 10% penalty, though there are legal workarounds, such as withdrawing Roth contributions (not earnings) or using certain IRS-approved payment plans. Early retirees often keep a taxable brokerage account as a "bridge."</li>
<li><strong>Longer time horizons.</strong> A 40- or 50-year retirement is longer than the 30 years the 4% rule was built for. Many early retirees plan with a lower withdrawal rate, around 3.25% to 3.5%, or stay flexible with their spending.</li>
<li><strong>The human side.</strong> Some people find that the hardest part of early retirement is purpose, not money. Plan what you're retiring <em>to</em>.</li>
</ul>

<h2>How to start, even if early retirement isn't your goal</h2>
<ol>
<li>Track your spending for one month to find your real yearly number.</li>
<li>Multiply by 25 to see your rough FI number.</li>
<li>Calculate your savings rate: what you save and invest divided by your take-home pay.</li>
<li>Raise it by a few points, and then automate it.</li>
</ol>

<h2>The bottom line</h2>
<p>You don't have to retire at 40 to benefit from FIRE thinking. Knowing your number, spending on purpose and investing the gap gives you options, whether that's retiring early, switching careers or simply sleeping better.</p>

<p class="art-note">Examples are simplified and assume steady returns. Real markets go up and down, and your situation may differ. This article is for education only and isn't financial advice.</p>
`},
  "the-4-rule-in-plain-english": {
    cat:"financial-freedom",
    title:"The 4% rule in plain English",
    dek:"It's the most famous number in retirement planning, and the most misunderstood. Here's what the 4% rule actually says, where it came from and how experts see it today.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>The 4% rule says you can withdraw about 4% of your savings in your first year of retirement, raise that dollar amount with inflation each year, and very likely not run out of money for 30 years.</li>
<li>Its creator, Bill Bengen, now puts the number at 4.7%. Morningstar's 2026 estimate is 3.9%.</li>
<li>Treat it as a starting point for planning, not a guarantee.</li>
</ul></div>

<p>"How much can I spend in retirement without running out of money?" It's one of the hardest questions in personal finance. The 4% rule is the most popular short answer. To use it well, you need to know what's behind it.</p>

<h2>Where the 4% rule came from</h2>
<p>In 1994, financial planner William Bengen studied historical U.S. stock and bond returns going back decades. He asked a simple question: what's the highest starting withdrawal rate that would have survived <em>every</em> 30-year retirement in history, including the worst ones, like retiring just before the high inflation of the late 1960s and 1970s?</p>
<p>His answer was about 4%. A few years later, the well-known "Trinity study" reached similar conclusions. The rule stuck.</p>

<h2>How it actually works</h2>
<p>People often get this part wrong. The rule <strong>isn't</strong> "withdraw 4% of whatever your balance is each year." It works like this:</p>
<ol>
<li>In <strong>year one</strong>, withdraw 4% of your starting portfolio.</li>
<li>In <strong>each later year</strong>, take the same <em>dollar amount</em> as the year before, adjusted for inflation, no matter what the market did.</li>
</ol>
<div class="callout"><strong>Example:</strong> You retire with $1,000,000. In year one you withdraw $40,000. If inflation runs 3% that year, year two's withdrawal is $41,200. Year three adjusts again from there.</div>

<h2>Flip it around to find your target</h2>
<p>If 4% of your savings is what you can spend, then you need about <strong>25 times</strong> your yearly spending to retire. Planning to spend $50,000 a year from your portfolio? Your target is about $1.25 million. That's where the popular "×25" rule comes from.</p>

<h2>So is it 4%, 4.7% or 3.9%?</h2>
<p>The rule has been revisited many times, and today's experts land on slightly different numbers:</p>
<table class="weights">
<thead><tr><th>Source</th><th>Starting rate</th><th>Why it differs</th></tr></thead>
<tbody>
<tr><td>Original rule (1994)</td><td class="pct">4.0%</td><td>Historical worst case, simple stock and bond mix</td></tr>
<tr><td>Bill Bengen (2025 update)</td><td class="pct">4.7%</td><td>Adds more asset classes for broader diversification</td></tr>
<tr><td>Morningstar (2026 retirees)</td><td class="pct">3.9%</td><td>Forward-looking estimates of returns and inflation, 90% success rate</td></tr>
</tbody></table>
<p>These numbers aren't really in conflict. They answer slightly different questions. Bengen's figure comes from history with a more diversified portfolio. Morningstar's comes from projecting future returns. Both say you'll probably be safe starting somewhere around 4%.</p>

<h2>What the rule doesn't account for</h2>
<ul>
<li><strong>Retirements longer than 30 years.</strong> If you retire at 45, your money may need to last 45 years or more. Early retirees often plan around 3.25% to 3.5%.</li>
<li><strong>Taxes and fees.</strong> The 4% is a pre-tax withdrawal. High investment fees reduce what you can safely take.</li>
<li><strong>Your actual portfolio.</strong> The research assumes a diversified mix of stocks and bonds. A portfolio that's all cash or all one stock behaves very differently.</li>
<li><strong>Other income.</strong> Social Security, pensions or part-time work reduce how much you need from your portfolio.</li>
<li><strong>Your flexibility.</strong> The rule assumes you never cut spending, even in a crash. Real people usually do adjust.</li>
</ul>

<h2>The case for being flexible</h2>
<p>The fixed-dollar approach is deliberately cautious. It was designed to survive the worst periods in history. In most periods, retirees following it ended up with more money than they started with. Bengen himself has noted that the average safe withdrawal rate across history was much higher than his worst-case figure.</p>
<p>That's why many planners recommend <strong>guardrails</strong>: start near 4%, trim spending a little after a bad market year and give yourself a raise after strong years. Morningstar's research finds that retirees who are willing to adjust spending can start meaningfully higher than 3.9%.</p>

<h2>How to use the 4% rule today</h2>
<ol>
<li><strong>Use it for planning.</strong> Multiply your expected yearly spending (minus Social Security or pension income) by 25 to set a savings target.</li>
<li><strong>Adjust for your timeline.</strong> Retiring early? Use 28 to 30 times your spending to add a margin of safety.</li>
<li><strong>Keep a cash buffer.</strong> One to two years of spending in cash or short-term bonds can keep you from selling stocks in a downturn.</li>
<li><strong>Revisit every year.</strong> Check your spending, your portfolio and the markets, and adjust.</li>
<li><strong>Get personalized help</strong> as you get close to retirement. Taxes, Social Security timing and account withdrawals can change the math a lot.</li>
</ol>

<h2>The bottom line</h2>
<p>The 4% rule is a useful, research-backed rule of thumb. It turns "how much do I need?" into a number you can work toward. Just remember it describes a cautious starting point, not a promise. Pair it with flexibility and an annual check-up, and it's a solid foundation for a retirement plan.</p>

<p class="art-note">Withdrawal research is based on historical data and forecasts that may not repeat. This article is for education only and isn't financial, tax or investment advice.</p>
`},
  "12-side-hustles-you-can-start-this-weekend": {
    cat:"financial-freedom",
    title:"12 side hustles you can start this weekend",
    dek:"No big investment, no business degree. Here are 12 realistic ways to earn extra money starting this weekend, plus the tax basics most people miss.",
    date:"Nov 17, 2026", read:"7 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>The best side hustle uses skills or things you already have, so you can start fast and cheap.</li>
<li>Even $300 to $500 a month, if you invest it, can change your long-term finances.</li>
<li>Side income is taxable. Set aside 25% to 30% of what you earn for taxes.</li>
</ul></div>

<p>A side hustle is one of the fastest ways to speed up any money goal, whether that's paying off debt, building an emergency fund or investing toward financial freedom. Investing an extra $300 a month for 10 years at 5% growth after inflation adds up to about $45,000. Here are 12 options you can realistically start in a weekend, grouped by what they need from you.</p>

<h2>Use your time and energy</h2>

<h3>1. Pet sitting and dog walking</h3>
<p>Apps like Rover and Wag connect you with local pet owners, or you can just tell your neighbors. Startup cost: basically nothing. Best for animal lovers with flexible hours.</p>

<h3>2. Food and grocery delivery</h3>
<p>Sign up with a delivery app and work whenever you want. Approval can take a few days, so apply now. Remember that gas and wear on your car come out of your earnings, so track your mileage.</p>

<h3>3. Odd jobs and errands</h3>
<p>Furniture assembly, moving help, yard work and mounting TVs are always in demand. Post on TaskRabbit or Nextdoor, or ask friends to spread the word.</p>

<h3>4. House cleaning or car detailing</h3>
<p>The supplies cost under $100, and repeat clients turn this into steady monthly income. Before-and-after photos make great marketing.</p>

<h2>Use your skills</h2>

<h3>5. Tutoring</h3>
<p>Help students with math, reading, test prep or a language you speak well. Sessions can be online, so your market isn't limited to your town.</p>

<h3>6. Freelance writing, editing or design</h3>
<p>Small businesses always need help with website copy, social posts, flyers and logos. Start with two or three samples, even ones you made for practice, and pitch local businesses or freelance marketplaces.</p>

<h3>7. Virtual assistant work</h3>
<p>Managing inboxes and calendars, entering data and booking travel can all be done remotely. If you're organized and good with common office software, this is a natural fit.</p>

<h3>8. Teach what you know</h3>
<p>Cooking, guitar, fitness, Excel, photography: if you're good at something, someone wants to learn it. Start with one small class or a one-on-one session.</p>

<h2>Use your stuff</h2>

<h3>9. Sell things you no longer use</h3>
<p>Clothes, electronics, furniture and baby gear sell well on Facebook Marketplace, eBay and Poshmark. It's a one-time boost, but it often funds your next hustle.</p>

<h3>10. Flip thrift and yard-sale finds</h3>
<p>Once you've learned what sells by clearing out your own closet, buy underpriced items and resell them. Focus on one niche you know, like sneakers, vintage clothes or tools.</p>

<h3>11. Rent out what sits idle</h3>
<p>Peer-to-peer platforms let you rent out your car, parking space, storage space or camera gear. Read the insurance terms carefully before you list anything.</p>

<h3>12. Sell simple digital products</h3>
<p>Printable planners, budget spreadsheets, templates or a short guide on something you know can sell on platforms like Etsy over and over. It takes up-front work, but there's no inventory.</p>

<div class="callout"><strong>Pick your hustle in 3 questions:</strong> What am I already good at? What do people already ask me for help with? How many hours a week do I realistically have? The best fit is usually where all three overlap.</div>

<h2>The tax basics (don't skip this)</h2>
<ul>
<li><strong>All side income is taxable,</strong> whether or not you get a tax form for it.</li>
<li><strong>Self-employment tax applies.</strong> If you net $400 or more from self-employment in a year, you generally owe self-employment tax (about 15.3% for Social Security and Medicare) on top of income tax.</li>
<li><strong>Know the forms.</strong> For 2026, payment apps and marketplaces generally only send a Form 1099-K if you receive more than $20,000 <em>and</em> more than 200 transactions. Businesses that pay you directly send a 1099-NEC once they pay you $2,000 or more. Not getting a form doesn't mean the income is tax-free.</li>
<li><strong>Set money aside.</strong> Move 25% to 30% of every payment into a separate savings account for taxes.</li>
<li><strong>Pay quarterly if you need to.</strong> If you'll owe $1,000 or more for the year, the IRS generally expects quarterly estimated payments.</li>
<li><strong>Track your expenses.</strong> Supplies, a portion of your phone bill and business mileage may be deductible, which lowers what you owe.</li>
</ul>

<h2>Make the money actually matter</h2>
<p>Side hustle income tends to disappear into everyday spending unless you give it a job. Open a separate account for it, set aside the tax portion, and then send the rest straight to your goal: extra debt payments, your emergency fund or an investment account.</p>

<h2>Your weekend plan</h2>
<ol>
<li><strong>Saturday morning:</strong> Choose one hustle using the three questions above.</li>
<li><strong>Saturday afternoon:</strong> Create your profile or listing, or tell 10 people you're offering the service.</li>
<li><strong>Sunday:</strong> Open a separate savings account for side income and taxes.</li>
<li><strong>Next week:</strong> Do your first job, ask for a review, and decide what to do with your first $100.</li>
</ol>

<h2>The bottom line</h2>
<p>The best side hustle is the one you'll actually start. Keep it simple, take care of the taxes and point every extra dollar at a goal. That's how a few weekend hours turn into real financial progress.</p>

<p class="art-note">Platform rules, pay and availability vary by location. Tax rules summarized here are general and for 2026; check with a tax professional about your situation. This article is for education only.</p>
`},
  "how-to-calculate-your-financial-independence-number": {
    cat:"financial-freedom",
    title:"How to calculate your financial independence number",
    dek:"Your FI number is the amount of invested money that could cover your living costs for life. Here's how to work out yours in about 15 minutes.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li><strong>FI number = (yearly spending − other reliable income) × 25.</strong></li>
<li>Use 28 to 30 instead of 25 if you plan to retire early or want extra safety.</li>
<li>Recalculate once a year. Your number changes as your life does.</li>
</ul></div>

<p>"Financial independence" can feel vague and far away. Your FI number makes it concrete: it's the size of the investment portfolio that could pay your bills without a paycheck. Once you know it, every savings decision has a clear target.</p>

<h2>Step 1: Find your real yearly spending</h2>
<p>This is the most important input, and the one most people guess at. Don't estimate. Look it up:</p>
<ul>
<li>Pull 3 to 12 months of bank and credit card statements.</li>
<li>Add up everything you spent, including irregular costs like car repairs, gifts, travel and annual subscriptions.</li>
<li>Multiply your monthly average by 12.</li>
</ul>
<p>Then adjust for retirement. You'll stop saving for retirement and stop paying payroll taxes, and you might pay off your mortgage. But health insurance before Medicare, travel and home maintenance might go <em>up</em>.</p>

<h2>Step 2: Subtract reliable income</h2>
<p>Any income you'll have without working reduces how much your portfolio has to cover:</p>
<ul>
<li>Social Security. You can see your estimate at ssa.gov with a free my Social Security account.</li>
<li>A pension.</li>
<li>Rental income, after expenses.</li>
<li>Part-time work you actually plan to do.</li>
</ul>
<p>If you're retiring well before Social Security age, you may need to plan in two phases: a "bridge" period before benefits start, and the years after.</p>

<h2>Step 3: Multiply by your safety factor</h2>
<p>The classic multiplier is <strong>25</strong>. It comes from the 4% rule, which suggests a diversified portfolio can support yearly withdrawals of about 4% of its starting value, adjusted for inflation, for about 30 years.</p>
<table class="weights">
<thead><tr><th>Your situation</th><th>Multiplier</th><th>Withdrawal rate</th></tr></thead>
<tbody>
<tr><td>Traditional retirement (~30 years)</td><td class="pct">25×</td><td>4.0%</td></tr>
<tr><td>Want a little extra cushion</td><td class="pct">28×</td><td>~3.6%</td></tr>
<tr><td>Early retirement (40+ years)</td><td class="pct">30×</td><td>~3.3%</td></tr>
</tbody></table>

<h2>A worked example</h2>
<p>Dana spends <strong>$48,000 a year</strong>. At full retirement age she expects about <strong>$18,000 a year</strong> from Social Security.</p>
<ul>
<li>Spending her portfolio must cover: $48,000 − $18,000 = <strong>$30,000</strong></li>
<li>FI number at 25×: $30,000 × 25 = <strong>$750,000</strong></li>
<li>With extra cushion at 28×: <strong>$840,000</strong></li>
</ul>
<p>If Dana wants to stop working <em>before</em> Social Security starts, she'll also need enough set aside to cover the full $48,000 during those bridge years.</p>

<div class="callout"><strong>The hidden lever:</strong> Every $100 a month you permanently cut from your spending lowers your FI number by about $30,000 ($1,200 a year × 25). Cutting spending works twice: it shrinks your target and frees more money to invest.</div>

<h2>Step 4: Find your timeline</h2>
<p>Now compare your FI number with what you have and what you save each year. A rough rule: the higher your <strong>savings rate</strong> (the share of take-home pay you save and invest), the faster you get there. Starting from zero and assuming about 5% growth after inflation:</p>
<table class="weights">
<thead><tr><th>Savings rate</th><th>Years to FI (approx.)</th></tr></thead>
<tbody>
<tr><td>10%</td><td>52</td></tr>
<tr><td>20%</td><td>37</td></tr>
<tr><td>30%</td><td>28</td></tr>
<tr><td>50%</td><td>17</td></tr>
<tr><td>70%</td><td>9</td></tr>
</tbody></table>
<p>Online FIRE calculators can model your exact numbers, including what you've already saved.</p>

<h2>Also calculate your "Coast FI" number</h2>
<p>Coast FI is the amount you'd need invested <em>today</em> so that growth alone gets you to your FI number by your target age, even if you never save another dollar. The formula is:</p>
<div class="callout"><strong>Coast FI = FI number ÷ (1 + growth rate)<sup>years until retirement</sup></strong><br>Example: a $1,000,000 goal in 35 years at 5% growth after inflation is $1,000,000 ÷ 1.05<sup>35</sup> ≈ <strong>$181,000</strong> today.</div>
<p>Hitting Coast FI is a huge milestone. It means you could take a lower-stress job or work part-time and still be on track for retirement.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Underestimating spending.</strong> Forgetting irregular costs is the number-one error. Add a 10% buffer if you're unsure.</li>
<li><strong>Forgetting health care.</strong> If you retire before 65, budget for marketplace insurance and out-of-pocket costs.</li>
<li><strong>Ignoring taxes.</strong> Withdrawals from traditional 401(k)s and IRAs are taxed as income. Your spending number should include those taxes.</li>
<li><strong>Counting your home.</strong> Your house only counts toward FI if you plan to sell it or rent it out. Otherwise, leave it out.</li>
</ul>

<h2>Do it now: your 15-minute worksheet</h2>
<ol>
<li>Yearly spending: $______</li>
<li>Minus reliable yearly income in retirement: $______</li>
<li>= Amount your portfolio must cover: $______</li>
<li>× 25 (or 28 to 30 for early retirement) = <strong>Your FI number: $______</strong></li>
<li>Current invested assets: $______ → percent of the way there: ______%</li>
</ol>

<h2>The bottom line</h2>
<p>Your FI number turns a fuzzy dream into a measurable goal. Calculate it, write it down and check it once a year. Watching that "percent of the way there" number climb is one of the most motivating things in personal finance.</p>

<p class="art-note">Calculations are simplified and assume steady growth; real returns vary. This article is for education only and isn't financial advice.</p>
`},
  "passive-income-ideas-that-actually-work": {
    cat:"financial-freedom",
    title:"Passive income ideas that actually work",
    dek:"Most passive income takes money, work or both up front. Here's an honest look at what works, what it really requires and what to avoid.",
    date:"Nov 17, 2026", read:"7 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Truly passive income usually comes from money you've already saved: interest, dividends and investment growth.</li>
<li>"Semi-passive" income like rentals and digital products takes real work up front and some upkeep.</li>
<li>If someone promises big, guaranteed passive income for little money, it's almost always a scam.</li>
</ul></div>

<p>"Make money while you sleep" is one of the most appealing ideas in personal finance, and one of the most oversold. Passive income is real, and it's the foundation of financial independence. But nearly all of it requires one of two things up front: <strong>capital</strong> (money to invest) or <strong>effort</strong> (time to build something). Here's an honest guide.</p>

<h2>Level 1: Truly passive (requires capital)</h2>

<h3>High-yield savings and money market accounts</h3>
<p><strong>What it is:</strong> Interest from FDIC- or NCUA-insured accounts. In late 2026, top high-yield savings accounts pay roughly 4% APY.</p>
<p><strong>Effort:</strong> Almost none. <strong>Risk:</strong> Very low, but rates are variable and may not always beat inflation.</p>
<p><strong>Best for:</strong> Your emergency fund and short-term goals. It's not a long-term wealth builder on its own.</p>

<h3>Treasury bills and CDs</h3>
<p><strong>What it is:</strong> Short-term government debt or bank certificates that pay a fixed rate for a set time. Interest on Treasuries is exempt from state and local income tax.</p>
<p><strong>Effort:</strong> Low. <strong>Risk:</strong> Very low if you hold to maturity.</p>

<h3>Dividend-paying index funds</h3>
<p><strong>What it is:</strong> Broad stock index funds pay out a share of company profits as dividends, usually every quarter. You can reinvest them automatically.</p>
<p><strong>Effort:</strong> Low. <strong>Risk:</strong> Moderate to high. Stock prices and dividends rise and fall.</p>
<p><strong>Best for:</strong> Long-term wealth. Over decades, the growth of a diversified portfolio does most of the work. Dividends are a bonus, not the whole story.</p>

<h3>Bond funds</h3>
<p><strong>What it is:</strong> A fund holding many bonds, which pays out the interest they earn.</p>
<p><strong>Effort:</strong> Low. <strong>Risk:</strong> Lower than stocks, but bond prices fall when interest rates rise.</p>

<h3>REITs (real estate investment trusts)</h3>
<p><strong>What it is:</strong> Companies that own income-producing real estate and must pay out most of their taxable income to shareholders. You can buy them like stocks or through index funds.</p>
<p><strong>Effort:</strong> Low. <strong>Risk:</strong> Moderate. It's real estate exposure without being a landlord.</p>

<div class="callout"><strong>How much do you need?</strong> To earn $1,000 a month ($12,000 a year) from a portfolio you could draw about 4% from each year, you'd need roughly $300,000 invested. That's why consistent investing over time is the real engine of passive income.</div>

<h2>Level 2: Semi-passive (requires effort, then upkeep)</h2>

<h3>Rental property</h3>
<p><strong>What it is:</strong> Buying a home or unit and renting it out.</p>
<p><strong>Reality check:</strong> You need a down payment, cash for repairs, good tenants and either your own time or a property manager (often 8% to 12% of rent). Run the numbers on vacancies, maintenance, insurance and taxes before you buy.</p>
<p><strong>Upside:</strong> Rental income plus potential appreciation and tax benefits.</p>

<h3>House hacking</h3>
<p><strong>What it is:</strong> Renting out a room, basement unit or the other side of a duplex you live in.</p>
<p><strong>Upside:</strong> It can sharply cut your own housing costs, which is one of the fastest ways to raise your savings rate.</p>

<h3>Digital products</h3>
<p><strong>What it is:</strong> Templates, printables, e-books, online courses or stock photos you create once and sell many times.</p>
<p><strong>Reality check:</strong> Creating it is the easy part. Marketing is the hard part. Most products earn little; a few do very well. Expect to update and promote them.</p>

<h3>Content with ads or affiliate links</h3>
<p><strong>What it is:</strong> A blog, YouTube channel or newsletter that earns from ads and referrals.</p>
<p><strong>Reality check:</strong> It often takes a year or more of steady publishing before meaningful income shows up. It's closer to building a small business than earning passive income.</p>

<h3>Renting out your stuff</h3>
<p><strong>What it is:</strong> Listing a car, parking spot, storage space or equipment on a peer-to-peer platform.</p>
<p><strong>Reality check:</strong> Check insurance and wear and tear carefully. It's simple to start, but there's some coordination involved.</p>

<h2>Red flags: avoid these</h2>
<ul>
<li><strong>"Guaranteed" high returns.</strong> Real investments don't guarantee 2% a month.</li>
<li><strong>Pay-to-join programs</strong> where income depends on recruiting others. That's the hallmark of a pyramid scheme.</li>
<li><strong>Crypto "staking" or "trading bot" offers</strong> from strangers on social media or dating apps.</li>
<li><strong>Expensive courses</strong> that promise you'll replace your salary in weeks.</li>
<li><strong>Pressure to act now</strong> or keep it secret.</li>
</ul>

<h2>A realistic passive income plan</h2>
<ol>
<li><strong>Build your base:</strong> An emergency fund in a high-yield savings account.</li>
<li><strong>Automate investing:</strong> Invest a fixed amount every month in low-cost, diversified index funds through your 401(k), IRA or brokerage account.</li>
<li><strong>Add one active-to-passive project if you want:</strong> a digital product, content or a rental, but only one at a time.</li>
<li><strong>Reinvest:</strong> Plow dividends and side income back in until the portfolio is large enough to live on.</li>
</ol>

<h2>The bottom line</h2>
<p>The most reliable passive income isn't a clever trick. It's a growing pile of invested money that pays you back. Every other idea on this list works best as a way to feed that pile faster.</p>

<p class="art-note">Rates cited are approximate as of November 2026 and change often. Investments can lose value. This article is for education only and isn't financial or investment advice.</p>
`},
  "why-your-savings-rate-matters-more-than-returns": {
    cat:"financial-freedom",
    title:"Why your savings rate matters more than returns",
    dek:"You can't control what the market does. You can control how much you save. For most people, especially early on, that's the number that decides when they're free.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Your savings rate is the share of your take-home pay that you save and invest.</li>
<li>Early in your journey, what you put in matters far more than what your investments earn.</li>
<li>A higher savings rate helps twice: you invest more <em>and</em> you need less to live on.</li>
</ul></div>

<p>People spend hours hunting for the "best" investment, trying to squeeze an extra 1% or 2% of return out of the market. Meanwhile the most powerful number in their financial life gets almost no attention: how much they actually save. Here's why your savings rate deserves the spotlight.</p>

<h2>What is a savings rate?</h2>
<div class="callout"><strong>Savings rate = (money saved and invested) ÷ (take-home pay)</strong><br>Example: You take home $4,000 a month and put $600 into your 401(k), IRA and savings. Your savings rate is 15%. If your employer adds a match, many people count that too.</div>
<p>Some people calculate it from gross (pre-tax) income. Either way works. Just be consistent so you can track it over time.</p>

<h2>Reason 1: Early on, contributions beat growth</h2>
<p>When your balance is small, even great returns don't add up to much in dollars. A 10% return on $5,000 is $500. Adding $500 a month is $6,000 a year. For the first several years, <strong>your deposits drive almost all of your progress</strong>. Returns only take over once your balance gets large.</p>

<h2>Reason 2: Saving more beats earning more, by a lot</h2>
<p>Here's a 20-year example for someone earning $60,000 a year:</p>
<table class="weights">
<thead><tr><th>Scenario</th><th>Saves each year</th><th>Return</th><th>After 20 years</th></tr></thead>
<tbody>
<tr><td>A: Chases returns</td><td>$9,000 (15%)</td><td>8%</td><td>~$412,000</td></tr>
<tr><td>B: Saves more</td><td>$15,000 (25%)</td><td>6%</td><td>~$552,000</td></tr>
</tbody></table>
<p>Person B earned a <em>lower</em> return every single year and still ended up with about <strong>$140,000 more</strong>. And B's result is far more certain. Nobody can guarantee 8% a year, but you can set your savings rate yourself.</p>

<h2>Reason 3: It works on both sides of the equation</h2>
<p>This is the part most people miss. When you save more, you're also proving you can live on less. That lowers the amount you need to retire. A common target is about 25 times your yearly spending, so:</p>
<ul>
<li>Living on $60,000 a year → you need about $1.5 million.</li>
<li>Living on $50,000 a year → you need about $1.25 million.</li>
</ul>
<p>Raising your savings rate speeds you toward the finish line <em>and</em> moves the finish line closer to you.</p>

<h2>The savings rate timeline</h2>
<p>Starting from zero, assuming about 5% growth after inflation and a target of 25 times your spending, here's roughly how long it takes to reach financial independence:</p>
<table class="weights">
<thead><tr><th>Savings rate</th><th>Years to FI</th><th style="width:40%"></th></tr></thead>
<tbody>
<tr><td>10%</td><td class="pct">52</td><td><div class="wbar"><i style="width:100%"></i></div></td></tr>
<tr><td>20%</td><td class="pct">37</td><td><div class="wbar"><i style="width:71%"></i></div></td></tr>
<tr><td>30%</td><td class="pct">28</td><td><div class="wbar"><i style="width:54%"></i></div></td></tr>
<tr><td>40%</td><td class="pct">22</td><td><div class="wbar"><i style="width:42%"></i></div></td></tr>
<tr><td>50%</td><td class="pct">17</td><td><div class="wbar"><i style="width:33%"></i></div></td></tr>
<tr><td>60%</td><td class="pct">13</td><td><div class="wbar"><i style="width:25%"></i></div></td></tr>
<tr><td>70%</td><td class="pct">9</td><td><div class="wbar"><i style="width:17%"></i></div></td></tr>
</tbody></table>
<p>Notice that this table barely mentions investment returns. Your savings rate alone sets the rough timeline.</p>

<h2>Returns still matter, so get the basics right</h2>
<p>None of this means investing doesn't matter. Over decades, returns do most of the heavy lifting. But you don't need to be clever to get good returns. You need to avoid the things that drag them down:</p>
<ul>
<li><strong>Keep fees low.</strong> A 1% yearly fee can take a big bite out of a lifetime of returns. Broad index funds often cost under 0.10%.</li>
<li><strong>Stay diversified.</strong> Own the whole market instead of a handful of stocks.</li>
<li><strong>Don't panic-sell.</strong> Selling after a crash locks in losses and misses the recovery.</li>
<li><strong>Use tax-advantaged accounts.</strong> Your 401(k), IRA and HSA let more of your money stay invested.</li>
</ul>
<p>Do these four things and your returns will mostly take care of themselves. That leaves your energy for the lever you actually control.</p>

<h2>How to raise your savings rate without misery</h2>
<ol>
<li><strong>Pay yourself first.</strong> Automate transfers on payday so saving happens before spending.</li>
<li><strong>Save your raises.</strong> Each time your pay goes up, send at least half of the increase to savings. You won't miss money you never got used to.</li>
<li><strong>Go after the big three.</strong> Housing, transportation and food usually make up most of a budget. One win here beats dozens of small cuts.</li>
<li><strong>Grab the full employer match.</strong> It's an instant, risk-free boost to your savings rate.</li>
<li><strong>Raise it 1% at a time.</strong> Many 401(k) plans can do this for you automatically every year.</li>
<li><strong>Add income.</strong> A side hustle invested in full can add 5 to 10 points to your rate.</li>
</ol>

<h2>The bottom line</h2>
<p>You can't control the market. You can control your savings rate, and for most people it's the number that decides how soon they're free. Calculate yours today, write it down and try to nudge it up a little every few months.</p>

<p class="art-note">Examples assume steady returns for illustration; real returns vary year to year and are not guaranteed. This article is for education only and isn't financial advice.</p>
`},
  "the-50-30-20-budget-explained-with-examples": {
    cat:"personal-finance",
    title:"The 50/30/20 budget, explained with examples",
    dek:"Three buckets, one paycheck, no spreadsheet obsession. Here's how the 50/30/20 budget works, with real numbers, and how to adjust it when life doesn't fit the formula.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Split your take-home pay into three buckets: <strong>50% needs, 30% wants and 20% savings and debt payoff</strong>.</li>
<li>It's simple enough to start in 15 minutes and flexible enough to last.</li>
<li>If your needs take more than 50%, adjust the percentages. The habit matters more than the exact split.</li>
</ul></div>

<p>Most budgets fail because they're too complicated. Tracking 40 categories down to the dollar is exhausting, and most people give up by February. The 50/30/20 budget, popularized by Senator Elizabeth Warren and her daughter Amelia Warren Tyagi in their book <em>All Your Worth</em>, takes the opposite approach: three big buckets and a few simple rules.</p>

<h2>The three buckets</h2>

<h3>50% → Needs</h3>
<p>Things you must pay to live and work, the bills that would cause real problems if you skipped them:</p>
<ul>
<li>Rent or mortgage, property taxes and renters or homeowners insurance</li>
<li>Utilities, phone and internet</li>
<li>Groceries (not restaurants)</li>
<li>Transportation: car payment, gas, insurance and transit</li>
<li>Health insurance and medical costs</li>
<li>Minimum payments on debts</li>
<li>Childcare</li>
</ul>

<h3>30% → Wants</h3>
<p>Everything that makes life enjoyable but isn't essential: dining out, streaming, hobbies, travel, shopping, gym memberships and upgrades (the nicer phone, the bigger apartment).</p>

<h3>20% → Savings and debt payoff</h3>
<p>Money that improves your future: emergency fund deposits, retirement contributions, investing, and any debt payments <em>above</em> the minimum.</p>

<div class="callout"><strong>Use take-home pay.</strong> The 50/30/20 split is based on what actually lands in your bank account after taxes. If money for your 401(k) or health insurance comes out of your paycheck before you see it, add it back to the right bucket so the math reflects reality.</div>

<h2>Example 1: $4,000 a month take-home</h2>
<table class="weights">
<thead><tr><th>Bucket</th><th>Target</th><th>What it could cover</th></tr></thead>
<tbody>
<tr><td>Needs (50%)</td><td class="pct">$2,000</td><td>$1,250 rent, $400 groceries, $200 car insurance and gas, $150 utilities and phone</td></tr>
<tr><td>Wants (30%)</td><td class="pct">$1,200</td><td>Dining out, subscriptions, hobbies, a travel fund</td></tr>
<tr><td>Savings (20%)</td><td class="pct">$800</td><td>$400 to a Roth IRA, $250 to an emergency fund, $150 extra on a credit card</td></tr>
</tbody></table>

<h2>Example 2: $6,500 a month (two earners)</h2>
<table class="weights">
<thead><tr><th>Bucket</th><th>Target</th><th>What it could cover</th></tr></thead>
<tbody>
<tr><td>Needs (50%)</td><td class="pct">$3,250</td><td>Mortgage, utilities, groceries, two car payments and childcare</td></tr>
<tr><td>Wants (30%)</td><td class="pct">$1,950</td><td>Family activities, dining out, vacations</td></tr>
<tr><td>Savings (20%)</td><td class="pct">$1,300</td><td>Retirement accounts, a college fund and an emergency fund</td></tr>
</tbody></table>

<h2>When your numbers don't fit</h2>
<p>In many high-cost cities, rent alone can eat 40% of take-home pay. If your needs come in above 50%, you're not failing. You're normal. Try one of these:</p>
<ul>
<li><strong>60/20/20:</strong> Squeeze wants to protect your savings. This is the most common adjustment.</li>
<li><strong>60/30/10 for now:</strong> If money is very tight, start saving 10% and raise it by 1% every few months.</li>
<li><strong>Work on the big needs over time.</strong> A roommate, a cheaper car or refinancing a loan can move your needs back toward 50%.</li>
</ul>
<p>On the flip side, if you're already comfortably under 50% on needs, consider a <strong>50/20/30</strong> split, putting 30% toward savings to reach your goals faster.</p>

<h2>The tricky gray areas</h2>
<ul>
<li><strong>Groceries vs. takeout:</strong> Basic groceries are a need. The fancy cheese and the delivery fees are wants.</li>
<li><strong>Phone plan:</strong> A basic plan is a need. The newest phone on a payment plan is partly a want.</li>
<li><strong>Gym:</strong> Usually a want, unless it's genuinely essential to your health. Be honest with yourself.</li>
<li><strong>Debt:</strong> Minimum payments are needs. Anything extra counts toward the 20%.</li>
</ul>

<h2>How to set it up in 15 minutes</h2>
<ol>
<li><strong>Find your monthly take-home pay.</strong> Check your last two paychecks.</li>
<li><strong>Do the math:</strong> multiply by 0.5, 0.3 and 0.2.</li>
<li><strong>List your fixed needs</strong> and total them. Are you above or below 50%?</li>
<li><strong>Automate the 20% first.</strong> Set transfers to savings and investments for payday.</li>
<li><strong>Use two checking accounts</strong> (optional but powerful): one for bills, one for spending money. Whatever's in the "wants" account is yours to spend guilt-free.</li>
<li><strong>Check in monthly.</strong> Look at your bank and card statements and see how close you came.</li>
</ol>

<h2>Pros and cons</h2>
<p><strong>Pros:</strong> It's simple, flexible and guilt-free about fun spending, and it builds savings automatically.</p>
<p><strong>Cons:</strong> It's less precise than zero-based budgeting, the "needs" line can get fuzzy, and 20% may not be enough if you have big goals like early retirement.</p>

<h2>The bottom line</h2>
<p>The 50/30/20 budget works because it focuses on the big picture: cover your needs, enjoy your life and pay your future self first. Start with the standard split, adjust it to fit your real life and automate the 20%. That alone puts you ahead of most people.</p>

<p class="art-note">Examples are illustrative. Your ideal split depends on your income, location and goals. This article is for education only and isn't financial advice.</p>
`},
  "how-much-should-be-in-your-emergency-fund": {
    cat:"personal-finance",
    title:"How much should be in your emergency fund?",
    dek:"Three months? Six? A year? The right answer depends on how stable your income is and who depends on you. Here's how to find your number and build it.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Start with a <strong>$1,000 to $2,000</strong> starter fund, then build up to <strong>3 to 6 months of essential expenses</strong>.</li>
<li>Aim higher, 6 to 12 months, if your income is irregular, you're the only earner or you work in an unstable industry.</li>
<li>Keep it in a high-yield savings account that's separate from your checking account.</li>
</ul></div>

<p>An emergency fund is the most boring part of personal finance, and the most important. It's what turns a job loss, a car repair or a surprise medical bill from a crisis into an inconvenience. Without one, emergencies usually land on a credit card at 20%+ interest, and the debt can follow you for years.</p>

<h2>Step 1: Calculate your essential monthly expenses</h2>
<p>Your emergency fund should cover what you <em>must</em> pay, not your full lifestyle. Add up:</p>
<ul>
<li>Rent or mortgage</li>
<li>Utilities, phone and internet</li>
<li>Groceries</li>
<li>Transportation</li>
<li>Insurance premiums</li>
<li>Minimum debt payments</li>
<li>Childcare and essential medical costs</li>
</ul>
<p>Leave out dining out, travel and shopping. In a real emergency, those get cut first.</p>

<h2>Step 2: Pick your number of months</h2>
<table class="weights">
<thead><tr><th>Your situation</th><th>Target</th></tr></thead>
<tbody>
<tr><td>Stable salaried job, dual income, no kids</td><td class="pct">3 months</td></tr>
<tr><td>Stable job, single income or kids</td><td class="pct">4–6 months</td></tr>
<tr><td>Commission, freelance, gig or seasonal income</td><td class="pct">6–12 months</td></tr>
<tr><td>Self-employed or business owner</td><td class="pct">6–12 months</td></tr>
<tr><td>Older home or older car, health issues</td><td class="pct">Add 1–2 months</td></tr>
<tr><td>Near retirement or in a specialized field</td><td class="pct">6+ months</td></tr>
</tbody></table>
<p>Ask yourself: <em>If I lost my income tomorrow, how long would it realistically take to replace it?</em> That's a good guide to how many months you need.</p>

<h2>Step 3: Do the math</h2>
<div class="callout"><strong>Example:</strong> Marcus has essential expenses of $3,200 a month. He has a stable job, but he's the only earner for his family of three, so he picks 5 months. <strong>His target: $3,200 × 5 = $16,000.</strong></div>
<p>If that number feels huge, that's normal. Nobody builds it overnight. Break it into milestones.</p>

<h2>Build it in stages</h2>
<ol>
<li><strong>Starter fund: $1,000 to $2,000.</strong> This covers the most common emergencies, like car repairs, an urgent vet bill or a broken appliance. Build this first, even while paying down debt.</li>
<li><strong>One month of essentials.</strong> Now a short gap in income won't wreck you.</li>
<li><strong>Three months.</strong> You're protected against most job changes and medical surprises.</li>
<li><strong>Your full target.</strong> Then shift your savings toward investing and other goals.</li>
</ol>

<h2>Where to keep it</h2>
<p>Your emergency fund has two jobs: be <strong>safe</strong> and be <strong>available</strong>. Earning a return is a distant third.</p>
<ul>
<li><strong>Best:</strong> A high-yield savings account at an FDIC-insured bank or NCUA-insured credit union. The top accounts paid around 4% APY in late 2026, far above the national average.</li>
<li><strong>Also fine:</strong> A money market account. For a large fund, consider a mix, such as a "CD ladder" or Treasury bills for the portion you're unlikely to need right away.</li>
<li><strong>Avoid:</strong> Stocks or crypto. Emergencies and market crashes often arrive together, such as when layoffs hit during a recession.</li>
</ul>
<p>Keep it at a <em>different</em> bank from your checking account. One or two days of transfer time is just enough friction to stop "emergency" pizza.</p>

<h2>What counts as an emergency?</h2>
<p>A simple test: is it <strong>unexpected</strong>, <strong>necessary</strong> and <strong>urgent</strong>?</p>
<ul>
<li>✓ Job loss or reduced hours</li>
<li>✓ Medical or dental bills</li>
<li>✓ Essential car or home repairs</li>
<li>✓ Emergency travel for family</li>
<li>✗ Holiday gifts, vacations or annual insurance premiums. These are predictable, so plan for them with <em>sinking funds</em> instead.</li>
</ul>

<h2>How to build it faster</h2>
<ul>
<li><strong>Automate it.</strong> Set a transfer for payday, even $25 or $50.</li>
<li><strong>Use windfalls.</strong> Put tax refunds, bonuses or side hustle income straight in.</li>
<li><strong>Cancel and redirect.</strong> Cut one or two subscriptions and send that money to savings.</li>
<li><strong>Round up.</strong> Many banks offer round-up features that move spare change into savings.</li>
</ul>

<h2>Should you invest or build the emergency fund first?</h2>
<p>A common order: (1) build a starter fund, (2) get your full employer 401(k) match, (3) pay off high-interest debt, (4) finish your full emergency fund, and (5) invest more. The match is free money, so don't skip it while you build savings.</p>

<h2>After you use it</h2>
<p>That's exactly what it's for, so don't feel guilty. Once the emergency is handled, pause extra goals and rebuild the fund before moving on.</p>

<h2>The bottom line</h2>
<p>Start with $1,000, work toward 3 to 6 months of essential expenses and keep the money safe and separate. It won't make you rich, but it will protect everything else you're building.</p>

<p class="art-note">Rates mentioned are approximate as of November 2026. This article is for education only and isn't financial advice.</p>
`},
  "sinking-funds-the-stress-free-way-to-save": {
    cat:"personal-finance",
    title:"Sinking funds: the stress-free way to save",
    dek:"Most \"surprise\" expenses aren't surprises at all: holidays, car registration, annual subscriptions. A sinking fund turns them into small monthly amounts so they never hit hard again.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>A sinking fund is money you set aside each month for a <strong>known future expense</strong>.</li>
<li>Formula: <strong>cost ÷ months until you need it = monthly amount</strong>.</li>
<li>It keeps predictable costs from landing on a credit card or raiding your emergency fund.</li>
</ul></div>

<p>Have you ever had a month where everything seemed to come due at once: the car insurance, a wedding gift, back-to-school shopping and an annual subscription renewal? None of those are emergencies. They're predictable. The problem is that they arrive in lumps, while your paycheck arrives in steady pieces. Sinking funds fix that mismatch.</p>

<h2>What is a sinking fund?</h2>
<p>The term comes from corporate finance, where companies set aside money over time to pay off a future debt. For personal finance, it simply means:</p>
<div class="callout"><strong>Saving a little each month for a specific, expected expense, so the full amount is ready when the bill arrives.</strong></div>

<h2>Sinking fund vs. emergency fund</h2>
<table class="weights">
<thead><tr><th></th><th>Sinking fund</th><th>Emergency fund</th></tr></thead>
<tbody>
<tr><td>Purpose</td><td>Known, planned costs</td><td>Unknown, unplanned costs</td></tr>
<tr><td>Examples</td><td>Holidays, car registration, vacation</td><td>Job loss, medical bills, a major repair</td></tr>
<tr><td>Spending it</td><td>Expected, that's the point</td><td>Only in true emergencies</td></tr>
</tbody></table>
<p>Without sinking funds, predictable expenses often get paid from your emergency fund, which leaves you exposed when a real emergency hits.</p>

<h2>How to calculate it</h2>
<p>Take the expected cost and divide it by the number of months until you need it.</p>
<table class="weights">
<thead><tr><th>Expense</th><th>Cost</th><th>Months away</th><th>Monthly</th></tr></thead>
<tbody>
<tr><td>Holiday gifts and travel</td><td>$1,200</td><td>12</td><td class="pct">$100</td></tr>
<tr><td>Car insurance (paid every 6 months)</td><td>$720</td><td>6</td><td class="pct">$120</td></tr>
<tr><td>Summer vacation</td><td>$1,800</td><td>9</td><td class="pct">$200</td></tr>
<tr><td>Car maintenance and tires</td><td>$900</td><td>12</td><td class="pct">$75</td></tr>
<tr><td>Annual subscriptions</td><td>$240</td><td>12</td><td class="pct">$20</td></tr>
</tbody></table>
<p>Total: <strong>$515 a month</strong>. That may sound like a lot, but those costs were coming anyway. Now they're spread out instead of arriving as a $1,800 shock in June.</p>

<h2>Common sinking fund categories</h2>
<ul>
<li><strong>Car:</strong> registration, maintenance, tires, insurance deductible, eventual replacement</li>
<li><strong>Home:</strong> repairs, appliances, property taxes, HOA fees</li>
<li><strong>Holidays and gifts:</strong> birthdays, weddings, baby showers</li>
<li><strong>Travel</strong></li>
<li><strong>Medical:</strong> deductibles, dental work, glasses</li>
<li><strong>Kids:</strong> school supplies, activities, camps</li>
<li><strong>Pets:</strong> checkups and grooming</li>
<li><strong>Annual bills:</strong> subscriptions, memberships, insurance premiums</li>
<li><strong>Tech:</strong> replacing your phone or laptop</li>
<li><strong>Big goals:</strong> a down payment or a new car</li>
</ul>

<h2>Where to keep sinking funds</h2>
<p>Use a <strong>high-yield savings account</strong> so your money earns interest while it waits. To keep the categories separate, you have options:</p>
<ul>
<li><strong>Bucket features:</strong> Many online banks let you create named sub-accounts or "buckets" (Car, Holidays, Travel) inside one savings account.</li>
<li><strong>Multiple accounts:</strong> Open a few free savings accounts and nickname each one.</li>
<li><strong>One account plus a tracker:</strong> Keep everything in one account and track each category's balance in a simple spreadsheet.</li>
</ul>

<h2>How to start (even on a tight budget)</h2>
<ol>
<li><strong>Look back 12 months.</strong> Scan your statements for irregular expenses. Those are your sinking fund categories.</li>
<li><strong>Pick your top three.</strong> Don't try to fund 15 categories at once. Start with the ones that hurt most.</li>
<li><strong>Do the math</strong> and set up automatic transfers on payday.</li>
<li><strong>Spend from the fund</strong> when the bill comes, guilt-free. That's what it's for.</li>
<li><strong>Add categories</strong> as your budget allows.</li>
</ol>

<div class="callout"><strong>Starting late?</strong> If the holidays are 2 months away and you need $600, you'd need $300 a month. If that's too much, save what you can now, scale back the spending a little this year, and start next year's fund in January at $50 a month.</div>

<h2>Why it feels so good</h2>
<p>Sinking funds change how spending feels. When you've saved $1,200 for the holidays, spending it is a planned choice, not a source of guilt. And when the car needs new tires, it's a mild annoyance instead of a crisis.</p>

<h2>The bottom line</h2>
<p>If you know it's coming, save for it. Sinking funds turn lumpy expenses into small, predictable payments, protect your emergency fund and keep your credit cards clear. Pick three categories and start this payday.</p>

<p class="art-note">This article is for education only and isn't financial advice.</p>
`},
  "tax-refunds-vs-adjusting-your-withholding": {
    cat:"personal-finance",
    title:"Tax refunds vs. adjusting your withholding",
    dek:"A big tax refund feels like a bonus, but it's really your own money coming back late. Here's how to decide whether to keep the refund or put that money in your paycheck instead.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>A refund means you overpaid taxes during the year. The IRS returns it without interest.</li>
<li>Adjusting your W-4 can move that money into your paychecks, which could mean a few hundred dollars more each month.</li>
<li>A refund isn't wrong. It's a trade-off between convenience and control.</li>
</ul></div>

<p>Through mid-April of the 2026 filing season, the average federal refund was about $3,400, according to IRS data. For many households it's the biggest single deposit of the year. But it's worth asking: is a giant refund actually the best way to get that money?</p>

<h2>How withholding works</h2>
<p>When you start a job, you fill out a <strong>Form W-4</strong>. Your employer uses it to estimate how much federal income tax to take out of each paycheck. At tax time, you compare what was withheld with what you actually owe:</p>
<ul>
<li>Withheld <strong>more</strong> than you owe → you get a <strong>refund</strong>.</li>
<li>Withheld <strong>less</strong> than you owe → you <strong>owe</strong> a balance, and possibly a penalty if it's large.</li>
</ul>
<p>A refund isn't a gift. It's money you lent the government for free.</p>

<h2>The case for adjusting your withholding</h2>
<ul>
<li><strong>More money every month.</strong> A $3,000 refund is about $250 a month, or $115 per paycheck if you're paid every two weeks.</li>
<li><strong>Put it to work right away.</strong> That money could pay down a credit card charging 20%+ interest, build your emergency fund or go into investments.</li>
<li><strong>Less temptation.</strong> Big refunds often get spent on impulse. Smaller monthly amounts can go into a planned budget.</li>
<li><strong>Less reliance on credit.</strong> Extra cash flow means you're less likely to put surprises on a card.</li>
</ul>

<h2>The case for keeping your refund</h2>
<ul>
<li><strong>Forced savings.</strong> If extra money in your paycheck would just disappear, a refund guarantees a lump sum once a year.</li>
<li><strong>A goal for the lump sum.</strong> Some people plan around it to pay off a debt, fund a vacation or top up an emergency fund.</li>
<li><strong>Peace of mind.</strong> No risk of an unexpected bill in April.</li>
<li><strong>Refundable credits.</strong> If most of your refund comes from credits like the Earned Income Tax Credit or the refundable portion of the Child Tax Credit, it isn't overwithholding. Those credits are paid out when you file.</li>
</ul>

<div class="callout"><strong>Middle ground:</strong> Aim for a <strong>small refund</strong>, a few hundred dollars. You keep most of the money in your paycheck but still have a cushion against owing.</div>

<h2>Why your refund might change this year</h2>
<p>Tax law changes in 2025 added several new deductions, including temporary deductions for some tip and overtime income, a bigger deduction for seniors and a deduction for some car loan interest. These helped push average refunds higher in 2026. If you qualify for any of them, your withholding may now be higher than it needs to be. It's worth a fresh check.</p>

<h2>How to adjust your withholding</h2>
<ol>
<li><strong>Grab your latest pay stub</strong> and last year's tax return.</li>
<li><strong>Use the IRS Tax Withholding Estimator</strong> at irs.gov. It's free and walks you through your situation.</li>
<li><strong>Fill out a new W-4</strong> based on the results and give it to your employer, usually through your HR or payroll portal.</li>
<li><strong>Check your next pay stub</strong> to confirm the change took effect.</li>
<li><strong>Re-check after big life changes:</strong> marriage, divorce, a new baby, a second job or a big raise.</li>
</ol>

<h2>Common W-4 situations</h2>
<ul>
<li><strong>Two jobs, or both spouses work:</strong> These households are the most likely to <em>under</em>-withhold. Use the estimator or the "Multiple Jobs" step on the W-4.</li>
<li><strong>Side income:</strong> If you have freelance or gig income, you can have extra tax withheld from your main job's paycheck instead of making separate quarterly payments.</li>
<li><strong>Big deductions or credits:</strong> If you expect large deductions, the W-4 lets you account for them so less is withheld.</li>
</ul>

<h2>Don't overcorrect</h2>
<p>Withholding too little can leave you with a bill in April and possibly an underpayment penalty. In general, you can avoid a penalty if you've paid at least 90% of this year's tax or 100% of last year's (110% if your income is higher). Make small adjustments and check them.</p>

<h2>What to do with the extra paycheck money</h2>
<p>Adjusting only helps if the money goes somewhere useful. Before you change your W-4, decide where the extra will go and automate it:</p>
<ol>
<li>Pay down high-interest debt.</li>
<li>Build your emergency fund.</li>
<li>Increase your retirement contributions.</li>
<li>Fund your sinking funds.</li>
</ol>

<h2>The bottom line</h2>
<p>If you're disciplined with money, adjusting your withholding gives you control of your cash all year. If you'd rather have a forced savings plan, a refund works, just know what it is. Either way, run the IRS estimator once a year so the choice is yours, not an accident.</p>

<p class="art-note">Tax rules change and individual situations vary. Consider talking with a tax professional. This article is for education only and isn't tax advice.</p>
`},
  "20-painless-ways-to-cut-monthly-bills": {
    cat:"personal-finance",
    title:"20 painless ways to cut monthly bills",
    dek:"You don't need to give up everything you enjoy to save money. These 20 moves trim recurring bills, most in under an hour, and the savings repeat every month.",
    date:"Nov 17, 2026", read:"7 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Recurring bills are the best place to save. Cut once and you save every month.</li>
<li>Start with the biggest bills: insurance, phone, internet and subscriptions.</li>
<li>Send every dollar you save to a goal, or it will quietly get spent.</li>
</ul></div>

<p>Cutting your latte saves a few dollars. Cutting a bill saves money every single month without any willpower. Here are 20 ways to lower recurring costs, grouped by category. Pick the five that fit you best and do them this week.</p>

<h2>Subscriptions and memberships</h2>
<ol>
<li><strong>Audit every subscription.</strong> Look through three months of bank and card statements. Most people find at least one subscription they forgot about.</li>
<li><strong>Rotate streaming services.</strong> Keep one or two at a time. Binge a show, cancel and switch next month.</li>
<li><strong>Switch to annual plans</strong> for services you'll definitely keep. They're often 15% to 20% cheaper than paying monthly.</li>
<li><strong>Check for bundles and perks.</strong> Your phone plan, credit card or another subscription may already include a streaming service or cloud storage you're paying for separately.</li>
<li><strong>Use your library.</strong> Many libraries offer free e-books, audiobooks, movies and even online courses.</li>
</ol>

<h2>Phone and internet</h2>
<ol start="6">
<li><strong>Try a prepaid or budget carrier.</strong> Many smaller carriers run on the same major networks for much less.</li>
<li><strong>Right-size your data.</strong> Check how much you actually use. Many people pay for unlimited data and use a fraction of it.</li>
<li><strong>Call your internet provider.</strong> Ask about current promotions or mention competitor prices. Retention departments often have discounts.</li>
<li><strong>Return rented equipment.</strong> Buying your own modem and router can pay for itself within a year.</li>
<li><strong>Check for low-income programs.</strong> Many internet providers offer discounted plans for qualifying households.</li>
</ol>

<h2>Insurance</h2>
<ol start="11">
<li><strong>Shop your car insurance every year.</strong> Rates for the same coverage can vary a lot between companies.</li>
<li><strong>Raise your deductibles,</strong> if your emergency fund can cover them. Going from a $250 to a $1,000 deductible can noticeably lower premiums.</li>
<li><strong>Bundle home or renters and auto</strong> with one insurer for a multi-policy discount.</li>
<li><strong>Ask about discounts:</strong> safe driver, good student, low mileage, paperless billing, paying in full and safe-driving tracking apps.</li>
</ol>

<h2>Utilities and home</h2>
<ol start="15">
<li><strong>Use a smart or programmable thermostat.</strong> Turning it back a few degrees while you sleep or are away adds up.</li>
<li><strong>Switch to LED bulbs</strong> and use smart power strips to stop "vampire" power drain.</li>
<li><strong>Check for utility programs.</strong> Many utilities offer free energy audits, rebates or budget billing to smooth out seasonal spikes.</li>
</ol>

<h2>Debt and banking</h2>
<ol start="18">
<li><strong>Ask for a lower credit card APR.</strong> If you've paid on time, call and ask. It sometimes works, and it costs nothing to try.</li>
<li><strong>Look at refinancing</strong> high-interest loans or moving card balances to a 0% balance transfer offer.</li>
<li><strong>Stop paying bank fees.</strong> Switch to a no-fee checking account, opt out of overdraft coverage and set low-balance alerts.</li>
</ol>

<div class="callout"><strong>How much could you save?</strong> Cancelling two subscriptions ($25), switching phone plans ($30) and shopping your car insurance ($40) adds up to about $95 a month, or more than $1,100 a year. Invested, that's real money over time.</div>

<h2>A simple script for negotiating</h2>
<p>Negotiating feels awkward, but it's often the fastest win. Try this:</p>
<p><em>"Hi, I've been a customer for [X] years. I'm reviewing my budget and I've seen lower prices from [competitor]. Are there any promotions or plans that could lower my bill? If not, I'd like to know my options for cancelling."</em></p>
<p>Be polite, be ready to actually switch, and ask to speak with the retention or loyalty department.</p>

<h2>Make the savings stick</h2>
<ol>
<li><strong>Track your wins.</strong> Write down each bill you cut and how much you're saving.</li>
<li><strong>Redirect the money immediately.</strong> Increase an automatic transfer to savings or debt by the same amount.</li>
<li><strong>Set a yearly reminder.</strong> Prices creep up. Review your bills every year.</li>
</ol>

<h2>The bottom line</h2>
<p>You don't have to give up what you love to save money. Cut the bills you don't notice, negotiate the ones you need and send every saved dollar to a goal. An hour of work this week can pay you back every month for years.</p>

<p class="art-note">Savings vary by provider and location. This article is for education only and isn't financial advice.</p>
`},
  "how-to-talk-about-money-with-your-partner": {
    cat:"personal-finance",
    title:"How to talk about money with your partner",
    dek:"Money is one of the most common sources of tension in relationships, and one of the best ways to build trust. Here's how to start the conversation and keep it going.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Start with goals and values, not numbers or blame.</li>
<li>Share the full picture: income, debts, credit and spending habits.</li>
<li>Pick a system for combining money that feels fair to both of you, then check in regularly.</li>
</ul></div>

<p>Many couples avoid talking about money until something goes wrong: a surprise bill, a hidden debt or an argument over a purchase. But couples who talk openly about money tend to make better decisions and feel more like a team. Here's how to have the conversation without it turning into a fight.</p>

<h2>Why money talks feel hard</h2>
<p>Money is never just money. It's tied to how you grew up, what you fear and what you dream about. One partner may have grown up watching parents struggle and now feels anxious about spending. The other may have learned that money is meant to be enjoyed. Neither is wrong. Understanding <em>why</em> you each feel the way you do makes the numbers much easier to discuss.</p>

<h2>Before the conversation</h2>
<ul>
<li><strong>Choose the right time.</strong> Not when you're tired, rushed or already arguing. Schedule it like a date: coffee on a Saturday morning works well.</li>
<li><strong>Set the tone.</strong> Say it's about working as a team, not judging each other.</li>
<li><strong>Do a little prep.</strong> Each of you can jot down your income, debts and rough monthly spending, plus one or two things you'd love to do with money.</li>
</ul>

<h2>Start with these questions</h2>
<p>Begin with values and goals before you get to the spreadsheets:</p>
<ol>
<li>What did money look like in your home growing up?</li>
<li>What does "financial security" mean to you?</li>
<li>What's one thing you'd love to do or have in the next five years?</li>
<li>What's your biggest money worry right now?</li>
<li>What's a purchase you think is worth spending a lot on? What feels wasteful to you?</li>
</ol>
<p>Listen more than you talk. You're trying to understand, not to win.</p>

<h2>Then share the full picture</h2>
<p>Once you trust each other, put everything on the table:</p>
<ul>
<li>Income from every source</li>
<li>Debts: student loans, credit cards, car loans, money owed to family</li>
<li>Credit scores</li>
<li>Savings and retirement accounts</li>
<li>Regular spending and subscriptions</li>
</ul>
<div class="callout"><strong>Be honest about debt.</strong> Hidden debt is one of the most damaging forms of "financial infidelity." It's much better to share it early, with a plan, than to have it discovered later.</div>

<h2>Choose how to combine your money</h2>
<p>There's no single right answer. Common setups include:</p>
<table class="weights">
<thead><tr><th>System</th><th>How it works</th><th>Good for</th></tr></thead>
<tbody>
<tr><td>All joint</td><td>All income goes into shared accounts</td><td>Couples with fully shared goals and similar habits</td></tr>
<tr><td>Yours, mine and ours</td><td>A joint account for shared bills plus separate personal accounts</td><td>Most couples: shared goals with some independence</td></tr>
<tr><td>Fully separate</td><td>Each pays an agreed share of costs</td><td>New relationships, or couples who strongly value independence</td></tr>
</tbody></table>
<p>For uneven incomes, many couples split shared costs <strong>in proportion to income</strong>. If one partner earns 60% of the household income, they cover 60% of shared bills. That often feels fairer than a 50/50 split.</p>

<h2>Set ground rules</h2>
<ul>
<li><strong>A "check-in" amount:</strong> Agree that any purchase over a set amount ($200? $500?) gets discussed first.</li>
<li><strong>Personal spending money:</strong> Each person gets an amount to spend with no questions asked. This prevents a lot of arguments.</li>
<li><strong>Shared goals:</strong> Pick one or two to work on together, like an emergency fund, a vacation or paying off a credit card.</li>
</ul>

<h2>Keep the conversation going</h2>
<p>One talk isn't enough. Set up a regular <strong>money date</strong>, monthly or every couple of weeks, for about 30 minutes:</p>
<ol>
<li>Celebrate one win since last time.</li>
<li>Review spending against your plan.</li>
<li>Look at upcoming expenses.</li>
<li>Check progress on your shared goals.</li>
<li>Decide on one thing to adjust.</li>
</ol>
<p>Keep it short and positive. Order takeout or pour a glass of wine. Make it something you look forward to.</p>

<h2>When you disagree</h2>
<ul>
<li>Focus on the specific decision, not your partner's character. Say "I'm worried about this purchase," not "You're bad with money."</li>
<li>Look for the goal underneath: security, freedom, fun, status.</li>
<li>Try a compromise, like a trial period or splitting the difference.</li>
<li>If money arguments keep repeating, a financial counselor or couples therapist can help.</li>
</ul>

<h2>The bottom line</h2>
<p>Talking about money is a skill, and like any skill it gets easier with practice. Start with values, share the full picture, pick a fair system and check in regularly. The goal isn't to agree on everything. It's to make decisions as a team.</p>

<p class="art-note">If you're in a relationship where money is used to control or limit you, that's a form of financial abuse. Support is available through the National Domestic Violence Hotline at 1-800-799-7233. This article is for education only.</p>
`},
  "index-funds-vs-etfs-whats-the-difference": {
    cat:"investing",
    title:"Index funds vs. ETFs: what's the difference?",
    dek:"They're often described as rivals, but an ETF can be an index fund, and many index funds come in both forms. Here's what actually separates them and how to choose.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>An <strong>index fund</strong> is a strategy: it tracks a market index instead of picking stocks.</li>
<li>An <strong>ETF</strong> is a wrapper: a fund that trades on the stock market like a share.</li>
<li>Many popular ETFs <em>are</em> index funds. The real choice is usually between an index <strong>mutual fund</strong> and an index <strong>ETF</strong>, and both can be excellent.</li>
</ul></div>

<p>If you've started reading about investing, you've probably seen advice like "just buy index funds" next to "ETFs are the best way to start." It sounds like two competing options. They aren't, exactly. Once you see how the terms fit together, the choice gets much simpler.</p>

<h2>What is an index fund?</h2>
<p>An index fund owns all, or a representative sample, of the investments in a market index, such as the S&amp;P 500 (500 large U.S. companies) or a "total market" index covering thousands of stocks. It doesn't try to beat the market. It tries to <em>be</em> the market.</p>
<p>Why that's powerful:</p>
<ul>
<li><strong>Low costs.</strong> There are no expensive analysts picking stocks. In 2025 the average index equity mutual fund cost investors just 0.05% a year, according to the Investment Company Institute.</li>
<li><strong>Instant diversification.</strong> One fund can hold hundreds or thousands of companies.</li>
<li><strong>Strong long-term results.</strong> Over long periods, most actively managed funds fail to beat their index after fees.</li>
</ul>

<h2>What is an ETF?</h2>
<p>An exchange-traded fund is a fund that trades on a stock exchange throughout the day, just like an individual stock. Most ETFs track an index, so they're index funds too. Some ETFs are actively managed, and some track narrow or complex strategies.</p>

<h2>The real comparison: index mutual fund vs. index ETF</h2>
<table class="weights">
<thead><tr><th></th><th>Index mutual fund</th><th>Index ETF</th></tr></thead>
<tbody>
<tr><td>How you buy</td><td>Directly from the fund company or a brokerage, at one price after the market closes</td><td>Like a stock, at the market price during the trading day</td></tr>
<tr><td>Minimum investment</td><td>Sometimes $1,000 to $3,000; some are $0</td><td>The price of one share, or $1 with fractional shares</td></tr>
<tr><td>Automatic investing</td><td>Easy: invest exact dollar amounts on a schedule</td><td>Depends on the brokerage; many now allow it</td></tr>
<tr><td>Costs</td><td>Very low for broad index funds</td><td>Very low for broad index ETFs</td></tr>
<tr><td>Tax efficiency (taxable accounts)</td><td>Good</td><td>Usually better, thanks to how ETFs are built</td></tr>
<tr><td>Moving to another brokerage</td><td>Some funds are only available at one company</td><td>Can be held at almost any brokerage</td></tr>
</tbody></table>

<h3>Why ETFs tend to be more tax-efficient</h3>
<p>When mutual fund investors cash out, the fund sometimes has to sell holdings, which can create capital gains distributions for <em>everyone</em> in the fund. ETFs usually handle redemptions in a way that avoids selling, so they distribute fewer taxable gains. This only matters in a regular taxable brokerage account. In a 401(k) or IRA, it doesn't matter.</p>

<h2>Which one should you choose?</h2>
<h3>Choose an index ETF if…</h3>
<ul>
<li>You're investing in a regular taxable brokerage account.</li>
<li>You're starting small and want to buy with any amount.</li>
<li>You want flexibility to move your account to any brokerage.</li>
</ul>
<h3>Choose an index mutual fund if…</h3>
<ul>
<li>You want to automatically invest an exact dollar amount every payday.</li>
<li>You're investing inside a 401(k), where mutual funds are often the only option.</li>
<li>You like not seeing prices bounce around during the day. It removes the temptation to trade.</li>
</ul>
<div class="callout"><strong>Honest answer:</strong> For a long-term investor, the difference between a low-cost S&amp;P 500 index mutual fund and a low-cost S&amp;P 500 index ETF is tiny. Picking a broad, cheap fund and investing consistently matters far more than which wrapper it comes in.</div>

<h2>What to look for in any index fund or ETF</h2>
<ol>
<li><strong>Expense ratio:</strong> For broad U.S. stock index funds, look for well under 0.20%, ideally under 0.10%.</li>
<li><strong>What it tracks:</strong> Broad indexes (total market, S&amp;P 500, total international, total bond) are best for most people.</li>
<li><strong>Size and trading volume:</strong> For ETFs, larger, heavily traded funds usually have tighter bid-ask spreads (the small gap between buying and selling prices).</li>
<li><strong>Tracking:</strong> A good fund stays very close to its index's return.</li>
</ol>

<h2>Watch out for these</h2>
<ul>
<li><strong>Leveraged and inverse ETFs</strong> (often labeled 2x, 3x or "short"). They're built for short-term trading and can lose value over time even if the market goes nowhere.</li>
<li><strong>Very narrow themes,</strong> such as a single trend or technology. They're more concentrated and often more expensive.</li>
<li><strong>Overtrading.</strong> Being able to trade ETFs all day is a feature, not an invitation.</li>
</ul>

<h2>The bottom line</h2>
<p>"Index fund" describes <em>what</em> a fund owns. "ETF" describes <em>how</em> you buy it. For most people, a broad, low-cost index fund, in either form, is one of the best investing tools available. Pick the one that fits your account, then focus on investing regularly.</p>

<p class="art-note">Investing involves risk, including possible loss of principal. Past performance doesn't guarantee future results. This article is for education only and isn't investment advice.</p>
`},
  "roth-ira-vs-traditional-ira-simply-explained": {
    cat:"investing",
    title:"Roth IRA vs. traditional IRA, simply explained",
    dek:"Both help you save for retirement with big tax advantages. The difference is when you pay the tax: now or later. Here's how to pick, with 2026 limits.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li><strong>Traditional IRA:</strong> You may get a tax deduction now and pay tax when you withdraw in retirement.</li>
<li><strong>Roth IRA:</strong> You pay tax now, and qualified withdrawals in retirement are tax-free.</li>
<li>For 2026, you can contribute up to <strong>$7,500</strong> in total across your IRAs ($8,600 if you're 50 or older).</li>
</ul></div>

<p>An IRA (individual retirement account) is an account you open yourself, separate from any workplace plan, that gives your investments special tax treatment. The big question is which type to choose. It mostly comes down to one thing: <strong>do you expect your tax rate to be higher now or in retirement?</strong></p>

<h2>Side by side</h2>
<table class="weights">
<thead><tr><th></th><th>Traditional IRA</th><th>Roth IRA</th></tr></thead>
<tbody>
<tr><td>Tax break</td><td>Contributions may be tax-deductible now</td><td>No deduction now</td></tr>
<tr><td>Growth</td><td>Tax-deferred</td><td>Tax-free</td></tr>
<tr><td>Withdrawals in retirement</td><td>Taxed as ordinary income</td><td>Tax-free if qualified</td></tr>
<tr><td>2026 contribution limit</td><td colspan="2">$7,500 combined; $8,600 if 50+</td></tr>
<tr><td>Income limits to contribute</td><td>None, but deductibility can phase out if you have a workplace plan</td><td>Yes. In 2026 it phases out at $153,000–$168,000 (single) and $242,000–$252,000 (married filing jointly)</td></tr>
<tr><td>Required minimum distributions</td><td>Yes, starting in your 70s</td><td>None for the original owner</td></tr>
<tr><td>Early access to contributions</td><td>Generally taxed plus a 10% penalty before 59½</td><td>Contributions (not earnings) can be withdrawn any time, tax- and penalty-free</td></tr>
</tbody></table>

<h2>How the tax trade-off works</h2>
<p>Imagine you put $7,500 into an IRA and it grows to $60,000 by retirement.</p>
<ul>
<li><strong>Traditional:</strong> You might save on taxes this year. In retirement, all $60,000 is taxed as income when you withdraw it.</li>
<li><strong>Roth:</strong> You pay taxes on the $7,500 this year. In retirement, the full $60,000 is yours, tax-free.</li>
</ul>
<p>If your tax rate in retirement is <em>higher</em> than today, the Roth wins. If it's <em>lower</em>, the traditional IRA usually wins. If it's the same, they come out about even.</p>

<h2>When a Roth IRA usually makes sense</h2>
<ul>
<li>You're early in your career and in a lower tax bracket than you expect to be later.</li>
<li>You want tax-free income in retirement and flexibility to manage taxes then.</li>
<li>You value being able to withdraw your contributions in an emergency.</li>
<li>You'd like to avoid required minimum distributions.</li>
</ul>

<h2>When a traditional IRA usually makes sense</h2>
<ul>
<li>You're in your peak earning years and a high tax bracket now.</li>
<li>You expect a lower income in retirement.</li>
<li>Your income is too high to contribute to a Roth directly, though you may still be able to use a "backdoor Roth." Talk with a tax professional first.</li>
<li>You need the deduction to lower your taxable income this year.</li>
</ul>

<div class="callout"><strong>Can't decide? Split it.</strong> Nobody knows future tax rates. Having some money in each type ("tax diversification") gives you flexibility to choose which account to withdraw from in retirement.</div>

<h2>Common questions</h2>
<h3>Can I have both an IRA and a 401(k)?</h3>
<p>Yes. You can contribute to both. If you or your spouse is covered by a workplace plan, your traditional IRA deduction may be limited based on income, but you can still contribute.</p>
<h3>Can I have both a Roth and a traditional IRA?</h3>
<p>Yes, but the $7,500 limit is shared between them. You could put $4,000 in one and $3,500 in the other.</p>
<h3>What's the deadline?</h3>
<p>You can generally make contributions for a tax year until that year's tax filing deadline, usually in mid-April of the following year.</p>
<h3>What does "qualified" mean for Roth withdrawals?</h3>
<p>Generally, you must be at least 59½ and have had a Roth IRA for at least five years for earnings to come out tax-free.</p>
<h3>Do I need earned income?</h3>
<p>Yes. You (or your spouse, if filing jointly) need earned income at least equal to what you contribute.</p>

<h2>How to open one</h2>
<ol>
<li>Choose a low-cost brokerage.</li>
<li>Open a Roth or traditional IRA online. It takes about 15 minutes.</li>
<li>Fund it with a transfer from your bank account, and set up automatic monthly contributions if you can.</li>
<li><strong>Invest the money.</strong> Many people forget this step and leave contributions sitting in cash. A broad index fund or target-date fund is a simple choice.</li>
</ol>

<h2>The bottom line</h2>
<p>Roth means pay tax now and none later. Traditional means a possible tax break now and pay tax later. If you're unsure and eligible, a Roth is a great default for many younger savers. Most importantly, open one, contribute regularly and invest the money.</p>

<p class="art-note">Limits shown are for 2026 and change annually. Tax situations vary, so consider consulting a tax professional. This article is for education only and isn't tax or investment advice.</p>
`},
  "how-to-start-investing-with-100": {
    cat:"investing",
    title:"How to start investing with $100",
    dek:"You don't need thousands of dollars to start investing. With $100 and the right first steps, you can own a slice of thousands of companies by this afternoon.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Many brokerages have $0 minimums, no trading commissions and fractional shares, so $100 is enough to start.</li>
<li>Put it in a broad, low-cost index fund or ETF, not a single "hot" stock.</li>
<li>The habit matters more than the first amount. $100 a month for 30 years at 7% grows to about $113,000.</li>
</ul></div>

<p>One of the biggest myths about investing is that you need a lot of money to begin. Not long ago, high minimums and trading fees made small investments impractical. Today, $100 can buy a diversified portfolio. Here's exactly how to do it.</p>

<h2>Before you invest: a quick checklist</h2>
<ul>
<li><strong>High-interest debt?</strong> If you're paying 20%+ on a credit card, paying it down is a guaranteed "return" that beats the stock market. Consider tackling it first.</li>
<li><strong>Emergency cushion?</strong> Have at least a small emergency fund so you won't need to sell investments when something goes wrong.</li>
<li><strong>Time horizon?</strong> Stock investing is for money you won't need for at least five years. Shorter-term money belongs in savings.</li>
</ul>

<h2>Step 1: Choose your account</h2>
<table class="weights">
<thead><tr><th>Account</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>401(k) at work</td><td>If your employer offers a match, start here. The match is free money.</td></tr>
<tr><td>Roth IRA</td><td>Long-term retirement savings with tax-free growth. A great choice for many beginners.</td></tr>
<tr><td>Taxable brokerage account</td><td>Flexible investing for goals other than retirement. No contribution limits or withdrawal rules.</td></tr>
</tbody></table>

<h2>Step 2: Pick a brokerage</h2>
<p>Look for:</p>
<ul>
<li>$0 account minimums and $0 commissions on stock and ETF trades</li>
<li><strong>Fractional shares</strong>, so you can buy $10 of a fund even if one share costs $500</li>
<li>Automatic recurring investments</li>
<li>A simple app and good customer support</li>
</ul>
<p>Most large, well-known brokerages now offer all of these.</p>

<h2>Step 3: Choose what to buy</h2>
<p>With $100, keep it simple and diversified. Three beginner-friendly options:</p>
<ol>
<li><strong>A total U.S. stock market or S&amp;P 500 index fund or ETF.</strong> You own a small piece of hundreds or thousands of companies, for a very low fee.</li>
<li><strong>A total world stock index fund.</strong> U.S. and international companies in one fund.</li>
<li><strong>A target-date fund,</strong> named for the year you plan to retire, like 2060. It holds a mix of stocks and bonds and automatically becomes more conservative over time. It's a great "set it and forget it" option, especially in an IRA.</li>
</ol>
<div class="callout"><strong>Skip for now:</strong> individual "hot" stocks, crypto, options and anything promising fast gains. With a small amount, one bad pick can wipe out most of it. Diversification protects you.</div>

<h2>Step 4: Buy, then automate</h2>
<ol>
<li>Transfer your $100 from your bank to your new account.</li>
<li>Search for your chosen fund's ticker symbol.</li>
<li>Enter the dollar amount to invest, using fractional shares if needed, and confirm.</li>
<li>Set up a <strong>recurring investment</strong>, even $25 or $50 every payday.</li>
<li>Turn on <strong>dividend reinvestment</strong> so dividends automatically buy more shares.</li>
</ol>

<h2>What $100 a month can become</h2>
<p>Assuming an average 7% annual return (real returns vary year to year):</p>
<table class="weights">
<thead><tr><th>Years</th><th>You put in</th><th>Could grow to</th></tr></thead>
<tbody>
<tr><td>10</td><td>$12,000</td><td>~$17,000</td></tr>
<tr><td>20</td><td>$24,000</td><td>~$49,000</td></tr>
<tr><td>30</td><td>$36,000</td><td>~$113,000</td></tr>
</tbody></table>
<p>Most of that 30-year total comes from growth, not deposits. That's compounding, and it rewards starting early far more than starting big.</p>

<h2>Beginner mistakes to avoid</h2>
<ul>
<li><strong>Checking your balance every day.</strong> Markets swing. Daily checking leads to emotional decisions.</li>
<li><strong>Selling in a downturn.</strong> Drops are normal. Historically, patient investors who stayed invested have recovered and grown.</li>
<li><strong>Chasing what's hot.</strong> By the time something is trending on social media, the easy gains are often gone.</li>
<li><strong>Paying high fees.</strong> A 1% yearly fee can quietly take a large share of your long-term growth.</li>
<li><strong>Waiting for the "right time."</strong> Time in the market beats timing the market.</li>
</ul>

<h2>The bottom line</h2>
<p>$100 is enough to become an investor today. Open the right account, buy a broad, low-cost fund, automate small contributions and leave it alone. The amount will grow with your income. The habit is what makes the difference.</p>

<p class="art-note">Return figures are hypothetical and assume a steady 7% annual return for illustration; actual returns vary and aren't guaranteed. Investing involves risk, including loss of principal. This article is for education only and isn't investment advice.</p>
`},
  "what-is-an-expense-ratio-and-why-it-matters": {
    cat:"investing",
    title:"What is an expense ratio and why it matters",
    dek:"It's a fee you never see on a bill, and that's exactly why it's easy to ignore. Over a lifetime of investing, the difference between a cheap fund and an expensive one can reach tens of thousands of dollars.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>An expense ratio is the yearly fee a fund charges, as a percentage of your investment.</li>
<li>It's taken automatically from the fund's returns, so you never see a bill.</li>
<li>Investing $500 a month for 30 years, the difference between a 0.05% fund and a 1% fund could be about <strong>$87,000</strong>.</li>
</ul></div>

<p>When you buy a mutual fund or ETF, you pay the fund company to run it. That cost is the <strong>expense ratio</strong>. It's one of the few things in investing you can control completely, and one of the best predictors of how much of the market's return you'll actually keep.</p>

<h2>How it works</h2>
<p>An expense ratio of 0.10% means you pay $1 a year for every $1,000 invested. The fee isn't charged separately. It's quietly deducted from the fund's assets, so the returns you see are already net of fees.</p>
<table class="weights">
<thead><tr><th>Expense ratio</th><th>Yearly cost on $10,000</th><th>Yearly cost on $100,000</th></tr></thead>
<tbody>
<tr><td>0.03%</td><td>$3</td><td>$30</td></tr>
<tr><td>0.10%</td><td>$10</td><td>$100</td></tr>
<tr><td>0.50%</td><td>$50</td><td>$500</td></tr>
<tr><td>1.00%</td><td>$100</td><td>$1,000</td></tr>
</tbody></table>

<h2>Why small percentages become big money</h2>
<p>Fees compound just like returns, but against you. Every dollar paid in fees is a dollar that never gets to grow. Here's someone investing <strong>$500 a month for 30 years</strong>, assuming the market returns 7% a year before fees:</p>
<table class="weights">
<thead><tr><th>Expense ratio</th><th>Ending balance</th><th style="width:34%"></th></tr></thead>
<tbody>
<tr><td>0.05%</td><td class="pct">~$562,000</td><td><div class="wbar"><i style="width:100%"></i></div></td></tr>
<tr><td>0.40%</td><td class="pct">~$528,000</td><td><div class="wbar"><i style="width:94%"></i></div></td></tr>
<tr><td>1.00%</td><td class="pct">~$474,000</td><td><div class="wbar"><i style="width:84%"></i></div></td></tr>
</tbody></table>
<p>Same deposits, same market. The only difference is the fee, and the gap between the cheapest and the most expensive is about <strong>$87,000</strong>.</p>

<h2>What's a "good" expense ratio?</h2>
<p>Fees have fallen dramatically. According to the Investment Company Institute, the average expense ratio investors paid for equity mutual funds dropped from 1.04% in 1996 to 0.40% in 2025. Index equity mutual funds averaged just 0.05%. A rough guide:</p>
<ul>
<li><strong>Broad stock or bond index funds and ETFs:</strong> under 0.10% is excellent; under 0.20% is good.</li>
<li><strong>Target-date funds:</strong> under 0.30% is reasonable; index-based versions are often much cheaper.</li>
<li><strong>Actively managed funds:</strong> often 0.50% to 1%+. Ask whether the manager is really likely to earn that back.</li>
<li><strong>Specialty or niche ETFs:</strong> often 0.30% to 0.75%+.</li>
</ul>

<h2>Do more expensive funds perform better?</h2>
<p>Usually, no. Research has repeatedly found that most actively managed funds trail their benchmark index over long periods, largely because of their higher costs. A low fee doesn't guarantee great performance, but a high fee is a guaranteed headwind.</p>

<h2>Other costs to watch</h2>
<p>The expense ratio isn't the only fee investors pay:</p>
<ul>
<li><strong>Sales loads:</strong> a commission of up to several percent when you buy or sell some mutual funds. Look for "no-load" funds.</li>
<li><strong>Advisory fees:</strong> often around 1% a year of your assets, charged on top of fund expenses.</li>
<li><strong>Account fees:</strong> annual maintenance or inactivity fees at some brokerages.</li>
<li><strong>401(k) administrative fees:</strong> check your plan's annual fee disclosure.</li>
</ul>

<h2>How to find a fund's expense ratio</h2>
<ol>
<li>Search the fund's ticker symbol on your brokerage's site or the fund company's website.</li>
<li>Look for "expense ratio" or "net expense ratio" on the summary page.</li>
<li>For your 401(k), check the plan's investment lineup or fee disclosure document.</li>
</ol>

<h2>What to do today</h2>
<ol>
<li>List every fund you own and its expense ratio.</li>
<li>Flag anything above 0.50% and ask whether a cheaper option holds similar investments.</li>
<li>In your 401(k), see if a low-cost index fund is available. Most plans have at least one.</li>
<li>In taxable accounts, consider any capital gains taxes before switching funds.</li>
</ol>

<h2>The bottom line</h2>
<p>You can't control the market, but you can control what you pay. Choosing low-cost funds is one of the simplest, most reliable ways to keep more of your returns, and over decades it can be worth as much as years of extra saving.</p>

<p class="art-note">Examples are hypothetical and assume steady returns; actual results vary. This article is for education only and isn't investment advice.</p>
`},
  "dollar-cost-averaging-explained": {
    cat:"investing",
    title:"Dollar-cost averaging, explained",
    dek:"Investing the same amount on a regular schedule takes emotion out of the market. Here's how dollar-cost averaging works, what the research says, and when investing all at once is better.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Dollar-cost averaging (DCA) means investing a fixed amount on a regular schedule, no matter what the market is doing.</li>
<li>If you invest from each paycheck, you're already doing it, and that's a great habit.</li>
<li>If you have a lump sum, investing it all at once has historically come out ahead about two-thirds of the time, but DCA can reduce regret.</li>
</ul></div>

<p>Trying to "buy low and sell high" sounds simple. In practice, almost nobody can predict when the market will rise or fall. Dollar-cost averaging sidesteps the problem completely: you stop trying to time the market and simply invest on a schedule.</p>

<h2>How it works</h2>
<p>Say you invest $200 on the first of every month into an index fund. When prices are high, your $200 buys fewer shares. When prices drop, the same $200 buys more shares.</p>
<table class="weights">
<thead><tr><th>Month</th><th>Investment</th><th>Share price</th><th>Shares bought</th></tr></thead>
<tbody>
<tr><td>January</td><td>$200</td><td>$50</td><td>4.0</td></tr>
<tr><td>February</td><td>$200</td><td>$40</td><td>5.0</td></tr>
<tr><td>March</td><td>$200</td><td>$25</td><td>8.0</td></tr>
<tr><td>April</td><td>$200</td><td>$50</td><td>4.0</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$800</strong></td><td>Avg. price: $41.25</td><td><strong>21.0</strong></td></tr>
</tbody></table>
<p>You bought 21 shares for $800, an average cost of about <strong>$38.10 a share</strong>, which is <em>lower</em> than the average market price of $41.25. You automatically bought more when prices were low. Once the price recovered to $50, your shares were worth $1,050.</p>

<h2>The benefits</h2>
<ul>
<li><strong>Removes emotion.</strong> You don't have to decide whether "now is a good time." Fear and excitement both lead to bad decisions.</li>
<li><strong>Turns downturns into opportunities.</strong> Market drops mean your regular investment buys more.</li>
<li><strong>Builds a habit.</strong> Investing becomes automatic, like paying a bill.</li>
<li><strong>Fits how most people earn.</strong> Investing a set amount from each paycheck is natural.</li>
</ul>

<h2>DCA vs. investing a lump sum all at once</h2>
<p>This is where it gets interesting. If you <em>already have</em> a large sum, such as an inheritance, a bonus or money from selling a house, should you invest it all now or spread it out?</p>
<p>Vanguard studied this using market data from 1976 to 2022. Investing a lump sum right away beat spreading it out over a year about <strong>68% of the time</strong>. The reason is simple: markets rise more often than they fall, so money waiting on the sidelines usually misses gains.</p>
<p>But DCA beat holding the money in cash most of the time, and it does better during the less common periods when markets fall soon after you invest.</p>

<div class="callout"><strong>So which should you choose?</strong> If you can handle seeing your investment drop soon after you buy, investing the lump sum has better odds. If a big early drop would make you panic and sell, or keep you from investing at all, spreading it over 3 to 12 months is a perfectly reasonable compromise.</div>

<h2>Common questions</h2>
<h3>How often should I invest?</h3>
<p>Matching your pay schedule (every two weeks or monthly) works well. The exact frequency matters far less than being consistent.</p>
<h3>Should I stop during a market crash?</h3>
<p>No. That's when DCA does its best work, because you're buying more shares at lower prices. Stopping during a downturn defeats the purpose.</p>
<h3>Does DCA guarantee a profit?</h3>
<p>No. It reduces the risk of investing everything at a bad moment, but it can't protect you if the investment itself falls over the long term. That's why it works best with diversified funds.</p>
<h3>What should I DCA into?</h3>
<p>Broad, low-cost index funds or target-date funds are ideal. DCA into a single risky stock still carries a lot of single-stock risk.</p>

<h2>How to set it up</h2>
<ol>
<li>Choose your account: a 401(k), IRA or brokerage account.</li>
<li>Pick a diversified, low-cost fund.</li>
<li>Set up an automatic recurring investment on payday.</li>
<li>Turn on dividend reinvestment.</li>
<li>Raise the amount whenever your income goes up.</li>
<li>Then ignore the daily market news.</li>
</ol>

<h2>The bottom line</h2>
<p>For money you earn over time, dollar-cost averaging is one of the simplest, most effective investing habits there is. For money you already have, investing it all at once usually wins, but DCA is a fine choice if it helps you get invested and stay invested.</p>

<p class="art-note">Examples are hypothetical. Past performance doesn't guarantee future results. Investing involves risk. This article is for education only and isn't investment advice.</p>
`},
  "how-to-build-a-three-fund-portfolio": {
    cat:"investing",
    title:"How to build a three-fund portfolio",
    dek:"Three low-cost index funds can give you a globally diversified portfolio that's simple to manage and hard to beat. Here's how to build one and choose your mix.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>A three-fund portfolio holds a <strong>total U.S. stock fund</strong>, a <strong>total international stock fund</strong> and a <strong>total bond fund</strong>.</li>
<li>Together they cover thousands of stocks and bonds worldwide, at very low cost.</li>
<li>Your main decision is the mix between stocks and bonds, which depends on your timeline and comfort with risk.</li>
</ul></div>

<p>Investing can feel like it requires dozens of funds and constant tinkering. It doesn't. The three-fund portfolio, popularized by the Bogleheads community (fans of Vanguard founder John Bogle), shows that three broad index funds can give you nearly everything a well-diversified investor needs.</p>

<h2>The three funds</h2>
<table class="weights">
<thead><tr><th>Fund</th><th>What it holds</th><th>Role</th></tr></thead>
<tbody>
<tr><td>1. Total U.S. stock market</td><td>Thousands of U.S. companies, large and small</td><td>Main growth engine</td></tr>
<tr><td>2. Total international stock</td><td>Thousands of companies in developed and emerging markets</td><td>Global diversification</td></tr>
<tr><td>3. Total U.S. bond market</td><td>Government and high-quality corporate bonds</td><td>Stability and income; cushions stock drops</td></tr>
</tbody></table>
<p>Most major fund companies offer all three as low-cost index mutual funds or ETFs, often for well under 0.10% a year.</p>

<h2>Why it works</h2>
<ul>
<li><strong>Maximum diversification:</strong> You own a slice of most of the world's public companies and the U.S. bond market.</li>
<li><strong>Rock-bottom costs:</strong> Broad index funds are among the cheapest investments available.</li>
<li><strong>Simplicity:</strong> Three funds are easy to understand, track and rebalance.</li>
<li><strong>No guessing:</strong> You don't need to pick sectors, countries or stocks.</li>
</ul>

<h2>Step 1: Choose your stock and bond mix</h2>
<p>Stocks grow more over long periods but swing more. Bonds grow less but steady the ride. A few sample mixes:</p>
<table class="weights">
<thead><tr><th>Profile</th><th>U.S. stocks</th><th>Int'l stocks</th><th>Bonds</th></tr></thead>
<tbody>
<tr><td>Aggressive (20+ years to go)</td><td>60%</td><td>30%</td><td>10%</td></tr>
<tr><td>Moderate (10–20 years)</td><td>45%</td><td>25%</td><td>30%</td></tr>
<tr><td>Conservative (near or in retirement)</td><td>30%</td><td>15%</td><td>55%</td></tr>
</tbody></table>
<p>One classic rule of thumb is to hold roughly your age, or your age minus 10 to 20, as a percentage in bonds. It's only a starting point. The right mix is one you can stick with during a market crash.</p>
<div class="callout"><strong>Gut check:</strong> If your portfolio dropped 30% in a year, which has happened before, would you hold steady or sell? If you'd sell, add more bonds. Ending up with a mix you'll abandon in a panic is worse than having a slightly lower expected return.</div>

<h2>Step 2: Decide your international share</h2>
<p>Common approaches range from about 20% to 40% of your <em>stock</em> money in international funds. Global market-weight is closer to the high end. Many investors land around 30%. International stocks add diversification because U.S. and foreign markets don't always move together.</p>

<h2>Step 3: Place funds in the right accounts</h2>
<p>If you have more than one account type, where you hold each fund can save taxes:</p>
<ul>
<li><strong>Bonds</strong> often fit best in tax-advantaged accounts like a 401(k) or traditional IRA, because their interest is taxed as ordinary income.</li>
<li><strong>U.S. and international stock funds</strong> are relatively tax-efficient in taxable accounts. International funds held in a taxable account may also qualify you for the foreign tax credit.</li>
<li>If your 401(k) lacks one of the three, use the closest option there and fill the gap in your IRA or brokerage account. Think of all your accounts as one portfolio.</li>
</ul>

<h2>Step 4: Rebalance once a year</h2>
<p>Over time, the investments that do well grow into a bigger share of your portfolio, so your mix drifts. Once a year (or when any fund is more than about 5 percentage points off target):</p>
<ol>
<li>Check your current percentages.</li>
<li>Direct new contributions to whichever fund is below target. This avoids selling and taxes.</li>
<li>If needed, sell some of the overweight fund and buy the underweight one, preferably inside tax-advantaged accounts.</li>
</ol>
<p>Rebalancing forces you to buy low and sell high, without any guessing.</p>

<h2>A simpler alternative: one fund</h2>
<p>If even three funds feels like too much, a <strong>target-date fund</strong> or a balanced "all-in-one" fund holds a similar mix inside a single fund and rebalances automatically. You pay a bit more in fees, but there's nothing to manage. Just don't combine a target-date fund with other funds unless you understand how they overlap.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Adding "just one more" fund.</strong> Extra funds usually overlap with what you already own and add complexity.</li>
<li><strong>Changing your mix after the market moves.</strong> Decide your mix when you're calm, and stick to it.</li>
<li><strong>Never rebalancing.</strong> Your risk level drifts without you noticing.</li>
<li><strong>Getting too conservative too early.</strong> Long-term goals need growth to beat inflation.</li>
</ul>

<h2>The bottom line</h2>
<p>Three low-cost index funds, a mix you can live with and a yearly rebalance: that's a complete investment plan. It's not exciting, and that's exactly why it works.</p>

<p class="art-note">Sample allocations are illustrative, not recommendations. Investing involves risk, including loss of principal. This article is for education only and isn't investment advice.</p>
`},
  "term-vs-whole-life-insurance-which-do-you-need": {
    cat:"insurance",
    title:"Term vs. whole life insurance: which do you need?",
    dek:"One is simple, temporary and cheap. The other is permanent, complex and expensive. Here's how term and whole life insurance really compare, and why most families start with term.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li><strong>Term life</strong> covers you for a set period, like 20 or 30 years. It's pure protection and very affordable.</li>
<li><strong>Whole life</strong> covers you for life and builds cash value, but costs many times more for the same death benefit.</li>
<li>Most people who need life insurance to protect dependents are well served by term.</li>
</ul></div>

<p>Life insurance exists for one main reason: to replace your income or cover your obligations if you die while people depend on you. Both term and whole life do that. The difference is in how long they last, what else they do and how much they cost.</p>

<h2>Term life insurance</h2>
<p>You choose a coverage amount and a term, typically 10, 20 or 30 years. If you die during the term, your beneficiaries get the death benefit, usually tax-free. If you outlive the term, the policy ends and nothing is paid out.</p>
<p><strong>Cost:</strong> Very low for young, healthy people. A healthy 30-year-old non-smoker can often get a 20-year, $500,000 policy for roughly $20 to $30 a month in 2026. Premiums stay the same for the whole term.</p>

<h2>Whole life insurance</h2>
<p>Whole life is a type of permanent insurance. It covers you for your entire life as long as you pay premiums, and it includes a <strong>cash value</strong> account that grows slowly at a guaranteed rate. You can borrow against the cash value or surrender the policy for it.</p>
<p><strong>Cost:</strong> High. The same $500,000 of coverage for that 30-year-old could cost several hundred dollars a month, often 10 times as much or more than term.</p>

<h2>Side by side</h2>
<table class="weights">
<thead><tr><th></th><th>Term life</th><th>Whole life</th></tr></thead>
<tbody>
<tr><td>How long it lasts</td><td>A set number of years</td><td>Your whole life</td></tr>
<tr><td>Premiums</td><td>Low; fixed for the term</td><td>High; usually fixed for life</td></tr>
<tr><td>Cash value</td><td>None</td><td>Yes, grows slowly</td></tr>
<tr><td>Complexity</td><td>Simple</td><td>Complex: fees, surrender charges, loan terms</td></tr>
<tr><td>Best for</td><td>Replacing income while dependents rely on you</td><td>Lifelong needs, certain estate-planning goals</td></tr>
</tbody></table>

<h2>"Buy term and invest the difference"</h2>
<p>This is the classic argument for term. Because term costs so much less, you can buy it and invest the money you save in a 401(k), IRA or index funds. For most people, those investments are likely to grow more over time than whole life cash value, and you keep control of the money.</p>
<div class="callout"><strong>Example:</strong> If term costs $25 a month and whole life costs $350, the difference is $325 a month. Invested for 20 years at a 6% average return, that's roughly $150,000, and you still had $500,000 of protection the whole time.</div>
<p>This only works if you actually invest the difference. If you'd spend it, whole life's forced savings could look more appealing, though it's an expensive way to save.</p>

<h2>When whole life (or other permanent insurance) can make sense</h2>
<ul>
<li><strong>Lifelong dependents,</strong> such as a child with special needs who will need support after you're gone.</li>
<li><strong>Estate planning</strong> for high-net-worth families, for example to provide money to pay estate taxes or to equalize an inheritance.</li>
<li><strong>Business needs,</strong> like funding a buy-sell agreement.</li>
<li><strong>You've already maxed out</strong> your 401(k), IRA and HSA and want another tax-advantaged option. Get unbiased advice first.</li>
</ul>

<h2>Questions to ask before buying whole life</h2>
<ul>
<li>How much of my first few years of premiums goes to commissions and fees?</li>
<li>What's the guaranteed cash value after 5, 10 and 20 years, and what's the surrender charge if I cancel?</li>
<li>What happens if I can't afford the premiums later?</li>
<li>How do policy loans affect the death benefit?</li>
</ul>
<p>Whole life is often sold by agents who earn large commissions on it. That doesn't make it bad, but it's a reason to get a second opinion, ideally from a fee-only financial planner who doesn't sell insurance.</p>

<h2>How to choose a term length</h2>
<p>Match your term to how long people will depend on your income:</p>
<ul>
<li>Until your youngest child finishes school or college.</li>
<li>Until your mortgage is paid off.</li>
<li>Until you expect to have enough saved that your family wouldn't need the payout.</li>
</ul>
<p>Some people "ladder" policies, for example a 30-year policy plus a 20-year policy, so coverage steps down as their needs shrink.</p>

<h2>Tips for buying term</h2>
<ol>
<li><strong>Buy while you're young and healthy.</strong> Rates are based on age and health when you apply.</li>
<li><strong>Compare several insurers.</strong> Prices for the same coverage vary, and an independent broker can shop many companies at once.</li>
<li><strong>Check the insurer's financial strength rating.</strong></li>
<li><strong>Look for a conversion option,</strong> which lets you convert to permanent coverage later without a new medical exam.</li>
<li><strong>Don't rely only on work coverage.</strong> Employer life insurance is often only 1 to 2 times your salary and usually ends if you leave the job.</li>
</ol>

<h2>The bottom line</h2>
<p>For most families, term life insurance provides the protection they need at a price they can afford, leaving more money to invest. Whole life has a place for specific needs, but it's a complex, expensive product, so understand exactly what you're buying.</p>

<p class="art-note">Rates are rough 2026 estimates for healthy non-smokers and vary by insurer, age, health and state. This article is for education only and isn't insurance or financial advice.</p>
`},
  "how-much-life-insurance-is-enough": {
    cat:"insurance",
    title:"How much life insurance is enough?",
    dek:"Too little leaves your family exposed; too much wastes money every month. Here's a simple way to calculate the coverage you actually need.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>If no one depends on your income, you may not need life insurance at all.</li>
<li>A quick rule of thumb is <strong>10 to 12 times your income</strong>, but a needs-based calculation is more accurate.</li>
<li>Add up what your family would need, subtract what you already have, and round up.</li>
</ul></div>

<p>Life insurance is about one question: <em>If I died tomorrow, how much money would the people who depend on me need?</em> Here's how to answer it.</p>

<h2>First: do you need life insurance?</h2>
<p><strong>You probably do if:</strong></p>
<ul>
<li>You have children or other dependents.</li>
<li>A spouse or partner relies on your income to pay the mortgage or bills.</li>
<li>Someone co-signed a debt with you, like a private student loan.</li>
<li>You're a stay-at-home parent. Replacing childcare and household work costs real money.</li>
</ul>
<p><strong>You may not if:</strong> you're single with no dependents, or you already have enough savings to cover your family's needs.</p>

<h2>Method 1: The quick rule of thumb</h2>
<p>Multiply your yearly income by <strong>10 to 12</strong>. If you earn $70,000, that's $700,000 to $840,000. It's a reasonable starting point but ignores your debts, savings and family situation.</p>

<h2>Method 2: The DIME method</h2>
<p>DIME stands for Debt, Income, Mortgage and Education. Add up:</p>
<table class="weights">
<thead><tr><th>Category</th><th>What to include</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>D</strong>ebt</td><td>Car loans, credit cards, personal loans, plus final expenses</td><td>$30,000</td></tr>
<tr><td><strong>I</strong>ncome</td><td>Your income × the number of years your family would need it</td><td>$70,000 × 10 = $700,000</td></tr>
<tr><td><strong>M</strong>ortgage</td><td>Remaining mortgage balance</td><td>$250,000</td></tr>
<tr><td><strong>E</strong>ducation</td><td>Expected college or school costs for your kids</td><td>$100,000</td></tr>
<tr><td colspan="2"><strong>Total need</strong></td><td><strong>$1,080,000</strong></td></tr>
</tbody></table>

<h2>Step 3: Subtract what you already have</h2>
<ul>
<li>Savings and investments your family could use</li>
<li>Existing life insurance, including from work (but remember it usually ends if you change jobs)</li>
<li>Social Security survivor benefits, which can be significant for families with young children</li>
</ul>
<div class="callout"><strong>Example continued:</strong> Total need of $1,080,000, minus $80,000 in savings and $70,000 of work coverage, leaves $930,000. Round up and this family might choose a <strong>$1 million</strong> term policy.</div>

<h2>Adjust for your situation</h2>
<ul>
<li><strong>Your partner's income:</strong> If your partner earns a good income, they may need less replacement income from your policy.</li>
<li><strong>Childcare:</strong> If your death would mean paying for childcare that you currently provide, add it.</li>
<li><strong>Inflation:</strong> A payout that seems large today buys less in 15 years. Rounding up helps.</li>
<li><strong>Your plan for the money:</strong> If your family would invest the payout and draw from it, a larger amount can produce ongoing income.</li>
</ul>

<h2>Don't forget a stay-at-home parent</h2>
<p>A parent who doesn't earn a paycheck still provides enormous value: childcare, transportation, cooking and household management. Replacing those services can cost tens of thousands of dollars a year. Many families insure both parents.</p>

<h2>How long should coverage last?</h2>
<p>For most families, <strong>term life insurance</strong> is the best fit. Choose a term that lasts until:</p>
<ul>
<li>Your youngest child is financially independent.</li>
<li>Your mortgage is paid off.</li>
<li>Your savings would be enough to support your family.</li>
</ul>
<p>Because term life is relatively inexpensive for healthy people, buying a little more coverage than you think you need is often affordable.</p>

<h2>Review it regularly</h2>
<p>Revisit your coverage after major life events:</p>
<ul>
<li>Marriage or divorce</li>
<li>A new baby or adoption</li>
<li>Buying a home</li>
<li>A big raise or a career change</li>
<li>Paying off major debts</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Relying only on work coverage,</strong> which is often just 1 to 2 times your salary.</li>
<li><strong>Insuring only the main earner.</strong></li>
<li><strong>Waiting.</strong> Premiums rise with age and health issues.</li>
<li><strong>Not naming beneficiaries</strong> or forgetting to update them after life changes.</li>
<li><strong>Naming a minor child as a direct beneficiary.</strong> Consider a trust or a custodian instead. An estate attorney can help.</li>
</ul>

<h2>The bottom line</h2>
<p>Use 10 to 12 times your income as a starting point, then refine it with the DIME method and subtract what you already have. The right amount lets the people you love keep their home, stay on track and grieve without money worries.</p>

<p class="art-note">This article is for education only and isn't insurance or financial advice. Consider a licensed professional for your situation.</p>
`},
  "why-renters-insurance-is-the-best-deal-in-finance": {
    cat:"insurance",
    title:"Why renters insurance is the best deal in finance",
    dek:"For about the cost of a streaming subscription, renters insurance protects your belongings, covers you if someone gets hurt and pays for a hotel if your home becomes unlivable.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Renters insurance typically costs about <strong>$13 to $23 a month</strong> in 2026, depending on the study and where you live.</li>
<li>It covers your belongings, your liability if someone is hurt and extra living costs if you're displaced.</li>
<li>Your landlord's insurance covers the building, not your stuff and not you.</li>
</ul></div>

<p>Many renters skip insurance because they assume they don't own enough to protect, or that their landlord's policy covers them. Both are usually wrong. For a small monthly cost, renters insurance offers some of the best value for money in personal finance.</p>

<h2>What renters insurance covers</h2>

<h3>1. Your personal property</h3>
<p>Your belongings are covered against risks like fire, smoke, theft, vandalism, certain water damage (such as a burst pipe) and windstorms. Coverage usually follows your belongings, too, so a laptop stolen from your car or a bag stolen while traveling may be covered.</p>

<h3>2. Personal liability</h3>
<p>If a guest slips in your apartment, or you accidentally cause damage to someone else's property (say your overflowing bathtub floods the unit below), liability coverage helps pay for their medical bills, repairs and legal costs. Policies often include $100,000 or more. This may be the most valuable part of the whole policy.</p>

<h3>3. Additional living expenses</h3>
<p>If a covered event like a fire makes your home unlivable, this helps pay for a hotel, restaurant meals and other extra costs while repairs happen.</p>

<h3>4. Medical payments to others</h3>
<p>Small medical bills for guests injured in your home, regardless of who was at fault.</p>

<h2>What it usually doesn't cover</h2>
<ul>
<li><strong>Floods and earthquakes.</strong> These require separate policies.</li>
<li><strong>Your roommate's belongings,</strong> unless they're named on your policy.</li>
<li><strong>High-value items above certain limits,</strong> like jewelry, watches or collectibles. Add a "rider" (extra coverage) for these.</li>
<li><strong>Pest damage and general wear and tear.</strong></li>
<li><strong>Your car.</strong> Auto insurance covers the car, though belongings stolen from it may be covered by renters insurance.</li>
</ul>

<h2>Why it's such a good deal</h2>
<p>Think about what it would cost to replace everything you own: clothes, furniture, electronics, kitchen gear, bedding. For most people, that adds up to $20,000 or more, far more than they'd guess. Now add potential liability for an injury lawsuit. Renters insurance protects against all of that for roughly the price of a couple of coffees a month.</p>
<div class="callout"><strong>Quick test:</strong> Walk through your home and estimate what it would cost to replace everything if it disappeared tomorrow. Could you afford it out of savings? If not, renters insurance is worth it.</div>

<h2>Key choices when buying</h2>
<h3>Replacement cost vs. actual cash value</h3>
<p><strong>Actual cash value</strong> pays what your items are worth today, after depreciation, so a five-year-old laptop might get you very little. <strong>Replacement cost</strong> pays what it costs to buy a new equivalent. Replacement cost costs a bit more, and it's usually worth it.</p>
<h3>Coverage amount</h3>
<p>Make a quick home inventory (photos or a video of each room work) to estimate your belongings' value. Many renters need $20,000 to $50,000 of property coverage.</p>
<h3>Deductible</h3>
<p>This is what you pay before insurance kicks in, often $250 to $1,000. A higher deductible lowers your premium, but make sure you could cover it from savings.</p>

<h2>How to save on renters insurance</h2>
<ul>
<li><strong>Bundle it with car insurance.</strong> Multi-policy discounts are common and can make renters insurance nearly free.</li>
<li><strong>Ask about safety discounts</strong> for smoke detectors, deadbolts and security systems.</li>
<li><strong>Pay annually</strong> instead of monthly if there's a discount.</li>
<li><strong>Compare a few quotes.</strong> Prices vary by insurer and location.</li>
</ul>

<h2>Filing a claim: be prepared</h2>
<ol>
<li>Keep a home inventory: photos, a video walkthrough and receipts for big purchases.</li>
<li>Store it in the cloud, not just on a device that could be lost in the same event.</li>
<li>After a loss, document the damage, file a police report if anything was stolen, and contact your insurer quickly.</li>
</ol>

<h2>The bottom line</h2>
<p>Renters insurance protects everything you own, shields you from lawsuits and gives you a place to stay if disaster strikes, all for a small monthly cost. If you rent and don't have it, getting a quote takes about 10 minutes.</p>

<p class="art-note">Average costs are 2026 estimates from several rate studies and vary by location and coverage. Coverage details vary by policy, so read yours carefully. This article is for education only and isn't insurance advice.</p>
`},
  "how-to-lower-your-car-insurance-premium": {
    cat:"insurance",
    title:"How to lower your car insurance premium",
    dek:"Full-coverage car insurance now averages well over $2,000 a year. Here are the moves that can lower your bill without leaving you underinsured.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Shopping around is the biggest lever. Different insurers can charge very different prices for the same driver.</li>
<li>Raising your deductible, bundling policies and asking for every discount can cut your premium further.</li>
<li>Don't save money by dropping liability coverage to state minimums. That can cost you far more after a serious accident.</li>
</ul></div>

<p>Car insurance has become a major household expense. Insurify's mid-2026 data put the national average for full coverage at about $2,237 a year, and other rate studies come in higher. The good news: many drivers are paying more than they need to. Here's how to bring your bill down.</p>

<h2>1. Shop around every year</h2>
<p>Insurers price risk differently, so quotes for the same coverage can vary by hundreds or even thousands of dollars. Get at least three quotes:</p>
<ul>
<li>When your policy renews</li>
<li>After a life change: moving, marriage, a new car or a ticket dropping off your record</li>
<li>If your rate jumps unexpectedly</li>
</ul>
<p>Compare the exact same coverage limits and deductibles so the comparison is fair. An independent agent can shop several companies at once.</p>

<h2>2. Raise your deductible</h2>
<p>Your deductible is what you pay out of pocket before collision or comprehensive coverage kicks in. Raising it from $250 or $500 to $1,000 can noticeably lower your premium. Just make sure your emergency fund can cover it.</p>

<h2>3. Bundle your policies</h2>
<p>Buying auto plus home or renters insurance from the same company often earns a multi-policy discount. Insuring multiple cars on one policy usually helps too.</p>

<h2>4. Ask about every discount</h2>
<p>Many discounts aren't applied automatically. Ask about:</p>
<ul>
<li>Safe driver or claims-free discounts</li>
<li>Good student discounts for young drivers</li>
<li>Defensive driving course completion</li>
<li>Low-mileage discounts if you drive less than average</li>
<li>Paying in full, autopay and paperless billing</li>
<li>Safety and anti-theft features on your car</li>
<li>Professional, alumni, employer or military affiliations</li>
</ul>

<h2>5. Try usage-based insurance</h2>
<p>"Telematics" programs use an app or a plug-in device to track how you drive: speed, hard braking, phone use and time of day. Safe drivers can earn meaningful discounts. If you often drive late at night or brake hard, it may not help, so ask how the program affects your rate before you join.</p>

<h2>6. Reconsider coverage on an older car</h2>
<p><strong>Collision</strong> and <strong>comprehensive</strong> coverage pay to repair or replace <em>your</em> car. If your car is worth only a few thousand dollars, the cost of that coverage plus your deductible may not be worth it.</p>
<div class="callout"><strong>Rule of thumb:</strong> If your yearly collision and comprehensive premium is more than about 10% of your car's value, and you could afford to replace the car yourself, consider dropping those coverages. Never drop them if you have a loan or lease; your lender will require them.</div>

<h2>7. Improve your credit</h2>
<p>In most states, insurers can use a credit-based insurance score to set rates. Paying bills on time and keeping credit card balances low can lead to lower premiums over time. (A few states, including California, Hawaii, Massachusetts and Michigan, limit or ban this practice.)</p>

<h2>8. Choose your next car carefully</h2>
<p>Insurance costs vary widely by model. Cars with high repair costs, high theft rates or lots of horsepower cost more to insure. Get insurance quotes <em>before</em> you buy.</p>

<h2>9. Keep a clean record</h2>
<p>Tickets and at-fault accidents can raise your rate for three to five years. Safe driving is the best long-term discount there is.</p>

<h2>What not to cut</h2>
<p><strong>Liability coverage</strong> pays for injuries and damage you cause to others. State minimums are often very low. In a serious accident, medical bills and repairs can quickly exceed them, and you could be personally responsible for the rest. Many experts suggest limits of at least 100/300/100 ($100,000 per person, $300,000 per accident for injuries and $100,000 for property damage) if you can afford it.</p>
<p>Also think twice before dropping <strong>uninsured/underinsured motorist coverage</strong>, which protects you if the other driver has too little insurance or none.</p>

<h2>Your 30-minute plan</h2>
<ol>
<li>Pull out your current policy's coverage page.</li>
<li>Get three quotes for the same coverage.</li>
<li>Ask each insurer to check every discount you might qualify for.</li>
<li>Price out a higher deductible.</li>
<li>Switch, or ask your current insurer to match the best quote.</li>
</ol>

<h2>The bottom line</h2>
<p>You can't control what insurers charge, but you can control how often you shop, which discounts you claim and how you set up your coverage. A half hour of comparison shopping is often the best-paid work you'll do all year.</p>

<p class="art-note">Average cost figures come from 2026 rate studies and vary by source. Rules on credit-based pricing and coverage requirements vary by state. This article is for education only and isn't insurance advice.</p>
`},
  "hsa-vs-fsa-explained": {
    cat:"insurance",
    title:"HSA vs. FSA explained",
    dek:"Both let you pay for health costs with pre-tax money. But one is yours forever and can be invested, while the other is mostly use-it-or-lose-it. Here's how they compare, with 2026 limits.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li><strong>HSA (Health Savings Account):</strong> requires an HSA-eligible health plan, rolls over forever, can be invested and stays with you if you change jobs.</li>
<li><strong>FSA (Flexible Spending Account):</strong> offered through your employer and mostly use-it-or-lose-it each year.</li>
<li>2026 limits: HSA <strong>$4,400</strong> (self) or <strong>$8,750</strong> (family); health FSA <strong>$3,400</strong>.</li>
</ul></div>

<p>Health costs are a big part of most budgets. HSAs and FSAs let you pay for many of them with money that's never taxed, which can save you hundreds or even thousands of dollars a year. But they work very differently.</p>

<h2>Side by side</h2>
<table class="weights">
<thead><tr><th></th><th>HSA</th><th>Health FSA</th></tr></thead>
<tbody>
<tr><td>Who can open one</td><td>People with an HSA-eligible health plan</td><td>Employees whose employer offers one</td></tr>
<tr><td>2026 contribution limit</td><td>$4,400 self-only; $8,750 family; +$1,000 if 55+</td><td>$3,400 per employee</td></tr>
<tr><td>Unused money</td><td>Rolls over every year, forever</td><td>Lost at year-end, unless the plan allows a carryover (up to $680 in 2026) or a grace period</td></tr>
<tr><td>Can you invest it?</td><td>Yes, at most providers</td><td>No</td></tr>
<tr><td>If you change jobs</td><td>The account is yours</td><td>Usually forfeited</td></tr>
<tr><td>Change contributions mid-year?</td><td>Yes</td><td>Generally only with a qualifying life event</td></tr>
<tr><td>Money available</td><td>As you contribute it</td><td>Your full annual amount on day one</td></tr>
</tbody></table>

<h2>The HSA: a triple tax advantage</h2>
<p>An HSA is the only account in the tax code with three tax breaks:</p>
<ol>
<li><strong>Contributions</strong> are tax-deductible, or pre-tax if made through payroll.</li>
<li><strong>Growth</strong> is tax-free.</li>
<li><strong>Withdrawals</strong> for qualified medical expenses are tax-free.</li>
</ol>
<p>After age 65, you can withdraw for any reason without penalty. Non-medical withdrawals are taxed as income, like a traditional IRA. That's why many people treat an HSA as a stealth retirement account: they pay current medical costs out of pocket, invest the HSA and save receipts so they can reimburse themselves tax-free years later.</p>

<h3>Who qualifies for an HSA in 2026?</h3>
<ul>
<li>You must be enrolled in an HSA-eligible plan. Traditionally that's a high-deductible health plan, with a minimum deductible of $1,700 for self-only or $3,400 for family coverage in 2026.</li>
<li><strong>New for 2026:</strong> Under the 2025 tax law, bronze and catastrophic plans on the ACA marketplace now count as HSA-eligible. Certain direct primary care arrangements no longer disqualify you either.</li>
<li>You can't be enrolled in Medicare or claimed as someone's dependent, and generally can't have other non-qualifying health coverage, including a general-purpose FSA.</li>
</ul>

<h2>The FSA: simple, but use it or lose it</h2>
<p>An FSA lets you set aside pre-tax money from your paycheck for medical costs like copays, prescriptions, dental work and glasses. Two big perks: you can use your <em>whole</em> annual election on January 1, even before you've contributed it, and you don't need a high-deductible plan.</p>
<p>The catch is the use-it-or-lose-it rule. Employers can offer either a carryover (up to $680 into 2027) or a grace period of up to two and a half months, but not both, or neither.</p>
<div class="callout"><strong>FSA tip:</strong> Estimate conservatively. Add up predictable costs like prescriptions, regular copays, planned dental work and glasses, and contribute about that much. Don't guess high.</div>

<h2>What about a "limited-purpose" FSA?</h2>
<p>If you have an HSA, some employers offer a <strong>limited-purpose FSA</strong> for dental and vision costs only. You can have both, which lets you save HSA money for later while covering dental and vision expenses with the FSA.</p>

<h2>What can you spend them on?</h2>
<p>Qualified medical expenses include deductibles, copays, prescriptions, dental and vision care, many over-the-counter medicines, menstrual care products, and some equipment and services. Check IRS Publication 502 or your plan administrator for the full list.</p>

<h2>Which should you choose?</h2>
<h3>An HSA is often better if…</h3>
<ul>
<li>You're generally healthy and have an HSA-eligible plan.</li>
<li>You can afford to cover the deductible if needed.</li>
<li>You want a long-term, investable, tax-free account.</li>
</ul>
<h3>An FSA may be better if…</h3>
<ul>
<li>Your employer doesn't offer an HSA-eligible plan.</li>
<li>You have predictable medical costs each year.</li>
<li>You prefer a lower-deductible health plan.</li>
</ul>

<h2>Don't forget the dependent care FSA</h2>
<p>This is a separate account for childcare costs, not medical bills. The 2025 tax law raised its limit to $7,500 per household starting in 2026. If you pay for daycare or after-school care, ask your employer about it.</p>

<h2>The bottom line</h2>
<p>An FSA is a handy way to save on predictable health costs this year. An HSA does that too, plus it can grow into a powerful long-term account. If you're eligible for an HSA, it's one of the best deals in the tax code.</p>

<p class="art-note">Limits shown are for 2026 and change yearly. Plan rules vary by employer. This article is for education only and isn't tax or insurance advice.</p>
`},
  "disability-insurance-the-coverage-most-people-skip": {
    cat:"insurance",
    title:"Disability insurance: the coverage most people skip",
    dek:"Your ability to earn an income may be your biggest financial asset. Disability insurance protects it, yet many workers have little or none. Here's how it works and how much you need.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Disability insurance replaces part of your income if illness or injury keeps you from working.</li>
<li>The Social Security Administration estimates that more than 1 in 4 of today's 20-year-olds will become disabled before reaching retirement age.</li>
<li>Look for coverage that replaces about 60% to 70% of your income, ideally with an "own-occupation" definition.</li>
</ul></div>

<p>People insure their homes, cars and phones, but often not the thing that pays for all of them: their paycheck. If you're 30 and earn $60,000 a year, you could earn more than $2 million over your career. Disability insurance protects that future income.</p>

<h2>Why disability coverage matters</h2>
<p>Most disabilities aren't caused by dramatic accidents. Illnesses like cancer, heart disease, back problems and mental health conditions are among the leading causes. Many people assume government benefits will cover them, but Social Security Disability Insurance (SSDI) has strict qualifying rules, often involves a long approval process and typically replaces only a modest portion of income.</p>

<h2>Short-term vs. long-term disability</h2>
<table class="weights">
<thead><tr><th></th><th>Short-term disability</th><th>Long-term disability</th></tr></thead>
<tbody>
<tr><td>Starts</td><td>After a few days to two weeks</td><td>After a waiting period, often 90 days</td></tr>
<tr><td>Lasts</td><td>A few months, often up to 6</td><td>Years, sometimes until age 65 or 67</td></tr>
<tr><td>Typical income replacement</td><td>Often 60% to 70%</td><td>Often around 60%</td></tr>
<tr><td>Best for</td><td>Recovery from surgery, injury or childbirth</td><td>Serious, long-lasting illness or injury</td></tr>
</tbody></table>
<p>Long-term disability coverage is the more important of the two. A few months without income is painful, but your emergency fund may cover it. Years without income is a financial catastrophe.</p>

<h2>Check what you have through work</h2>
<p>Many employers offer group disability insurance. Find out:</p>
<ul>
<li><strong>How much income it replaces,</strong> and whether there's a monthly cap. A 60% benefit capped at $5,000 a month may cover far less than 60% if you earn more.</li>
<li><strong>Whether benefits are taxable.</strong> If your employer pays the premium, benefits are usually taxable. If you pay with after-tax dollars, benefits are usually tax-free.</li>
<li><strong>How "disability" is defined.</strong> More on that below.</li>
<li><strong>Whether you can take it with you.</strong> Group coverage usually ends when you leave the job.</li>
</ul>

<h2>Key features of a good policy</h2>
<h3>Definition of disability</h3>
<ul>
<li><strong>Own-occupation:</strong> pays if you can't do <em>your</em> specific job, even if you could do another one. This is the strongest protection and especially valuable for specialized professionals.</li>
<li><strong>Any-occupation:</strong> pays only if you can't do <em>any</em> job you're reasonably suited for. Easier to qualify for coverage, harder to collect.</li>
</ul>
<h3>Elimination (waiting) period</h3>
<p>The time between becoming disabled and receiving benefits. A 90-day wait is common and keeps premiums lower, as long as your emergency fund can bridge the gap.</p>
<h3>Benefit period</h3>
<p>How long benefits last. To age 65 or 67 offers the most protection.</p>
<h3>Useful add-ons ("riders")</h3>
<ul>
<li><strong>Non-cancelable / guaranteed renewable:</strong> The insurer can't cancel your policy or raise your premium as long as you pay.</li>
<li><strong>Residual or partial disability:</strong> pays a partial benefit if you can only work reduced hours.</li>
<li><strong>Cost-of-living adjustment:</strong> increases benefits with inflation during a long claim.</li>
<li><strong>Future increase option:</strong> lets you buy more coverage as your income grows, without new medical underwriting.</li>
</ul>

<h2>What does it cost?</h2>
<p>Individual long-term disability insurance commonly costs <strong>1% to 3% of your annual income</strong>. The price depends on your age, health, job, benefit amount, waiting period and features. Riskier jobs and stronger definitions cost more.</p>
<div class="callout"><strong>Example:</strong> On a $60,000 salary, 2% is $1,200 a year, or $100 a month. In return, you could protect $3,000 or more a month of income for decades if something happens.</div>

<h2>How to get covered</h2>
<ol>
<li><strong>Enroll in your employer's plan</strong> if it's offered. It's usually the cheapest coverage available.</li>
<li><strong>Calculate your gap.</strong> Compare your take-home pay with what your work policy would actually pay.</li>
<li><strong>Consider an individual policy</strong> to fill the gap or provide coverage you can keep if you change jobs.</li>
<li><strong>Self-employed?</strong> You have no employer coverage, so an individual policy is especially important.</li>
<li><strong>Work with an independent broker</strong> who can compare several insurers.</li>
</ol>

<h2>The bottom line</h2>
<p>Disability is more common than most people expect, and the financial impact can be devastating. Check your work coverage today, find out what it actually pays, and fill any gap. It's one of the most important and most overlooked parts of a solid financial plan.</p>

<p class="art-note">Policy features and costs vary by insurer and state. This article is for education only and isn't insurance or financial advice.</p>
`},
  "buzzword-brief-what-does-rate-hike-mean": {
    cat:"trending",
    title:"Buzzword Brief: what does 'rate hike' mean?",
    dek:"With inflation heating up again, the Fed is widely expected to raise rates in December. Here's what a 'rate hike' is, how it reaches your credit card and savings account, and what to do about it.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>A <strong>rate hike</strong> is when the Federal Reserve raises its benchmark interest rate, the federal funds rate, to cool the economy and bring inflation down.</li>
<li>Higher rates make borrowing more expensive (credit cards, car loans, home equity lines) and saving more rewarding.</li>
<li>Markets now expect the Fed to raise rates again at its December 8 and 9 meeting, its second hike of 2026, because inflation has picked back up.</li>
</ul></div>

<p>For most of the last two years, money headlines were about rate <em>cuts</em>. That has flipped. After a hot October inflation report, "rate hike" is back at the top of the financial news. Here's what it means, how it works and what it could mean for your budget.</p>

<h2>What is a rate hike?</h2>
<p>A rate hike is a decision by the Federal Reserve's policy committee, the Federal Open Market Committee (FOMC), to raise the target range for the <strong>federal funds rate</strong>. That's the interest rate banks charge each other for overnight loans. The Fed doesn't set your credit card rate or your mortgage rate directly, but the federal funds rate is the starting point that many other rates are built on.</p>
<p>Hikes are usually announced in "basis points." One basis point is one-hundredth of a percentage point, so a 25-basis-point hike is a quarter of a percentage point (0.25%).</p>

<h2>How the mechanism works</h2>
<p>The Fed steers the federal funds rate mostly through the interest it pays banks on the money they keep at the Fed. In its <a href="https://www.federalreserve.gov/monetarypolicy/files/monetary20261028a1.pdf" target="_blank" rel="noopener">October 28 statement</a>, for example, the Fed set that "interest on reserve balances" rate at 3.90%, inside its 3.75% to 4% target range. Banks won't lend to each other for much less than they can earn risk-free at the Fed, so moving that rate moves the whole range.</p>
<p>From there, the change ripples outward:</p>
<ul>
<li><strong>The prime rate:</strong> By long-standing convention, banks set their prime rate about 3 percentage points above the federal funds rate, and they usually adjust it right after a Fed move.</li>
<li><strong>Credit cards:</strong> Most cards have variable rates set at prime plus a margin, so a quarter-point Fed hike typically pushes your card's APR up by about a quarter point within a billing cycle or two, as <a href="https://www.cnbc.com/select/how-credit-apr-is-affected-when-fed-raises-interest-rates" target="_blank" rel="noopener">CNBC Select explains</a>.</li>
<li><strong>Savings:</strong> Banks tend to raise yields on high-yield savings accounts and CDs when rates rise, though often more slowly than they raise loan rates.</li>
<li><strong>Mortgages:</strong> Fixed mortgage rates track longer-term bond yields, like the 10-year Treasury, more than the Fed's overnight rate. Those yields have been rising too: the 10-year yield touched about 5.17% on November 13, <a href="https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html" target="_blank" rel="noopener">according to CNBC</a>.</li>
</ul>
<p>The goal is to make borrowing and spending less attractive, so demand cools and price increases slow. Rate changes take months to work through the economy, so the Fed often moves before inflation is fully under control.</p>

<h2>A quick history</h2>
<p>Rate hikes come in cycles. In 1994, the Fed surprised markets with a series of increases, including a 75-basis-point move that stayed the largest single hike until <a href="https://www.bankrate.com/banking/federal-reserve/fomc-meeting-recap-june-2022" target="_blank" rel="noopener">June 2022</a>. In 2022, facing the highest inflation in about 40 years, the Fed raised rates at the <a href="https://www.chicagofed.org/publications/chicago-fed-letter/2023/476" target="_blank" rel="noopener">fastest pace since the 1980s</a>, including several 75-basis-point hikes, and kept going into 2023.</p>
<p>After cutting rates in 2024 and 2025, the Fed reversed course this fall. On September 16, 2026, it raised its target range by a quarter point to 3.75% to 4%, its first hike since 2023, <a href="https://www.npr.org/2026/09/16/nx-s1-5968724/federal-reserve-interest-rates-inflation-economy" target="_blank" rel="noopener">NPR reported</a>. At the October meeting it held steady, but two officials, Governors Lisa Cook and Beth Hammack, voted for another increase right away.</p>

<h2>Why it's in the news this week</h2>
<ul>
<li><strong>Inflation picked up:</strong> The <a href="https://www.bls.gov/cpi/" target="_blank" rel="noopener">Bureau of Labor Statistics</a> reported that consumer prices rose 0.4% in October, and core prices (excluding food and energy) rose 0.3%.</li>
<li><strong>Forecasters agree:</strong> All 101 economists in a <a href="https://www.fxstreet.com/news/25-basis-points-is-the-unanimous-call-for-december-fed-hike-reuters-poll-202611101326" target="_blank" rel="noopener">Reuters poll</a> taken November 6 to 10 expect a quarter-point hike in December, which would lift the range to 4% to 4.25%. They split on what comes next: 56 said December would be the last hike of this cycle, while 45 expect at least two more.</li>
<li><strong>Bigger move on the table:</strong> Fed Governor Christopher Waller said a half-point hike should be considered in December, <a href="https://www.forbes.com/sites/simonmoore/2026/11/13/waller-floats-prospect-of-larger-december-interest-rate-hike/" target="_blank" rel="noopener">Forbes reported</a>, though he leans toward a quarter point.</li>
</ul>
<p>Nothing is final until the Fed announces its decision on December 9.</p>

<h2>What it means for your wallet</h2>
<ul>
<li><strong>Tackle variable-rate debt first.</strong> Credit cards and home equity lines reprice quickly. If you carry a balance, every hike makes it more expensive, so paying it down, or moving it to a 0% balance transfer card, is worth more now.</li>
<li><strong>Lock in fixed rates when you can.</strong> If you're shopping for a car loan or personal loan, a fixed rate protects you from future hikes.</li>
<li><strong>Make your cash earn more.</strong> Higher rates are good news for savers. If your emergency fund sits in an account paying close to zero, a high-yield savings account or short-term CD could earn far more.</li>
<li><strong>Don't overreact as an investor.</strong> Rate news can move markets sharply day to day. For goals years away, a steady plan usually beats trading on Fed headlines.</li>
</ul>

<h2>Related buzzwords</h2>
<ul>
<li><strong>Basis point:</strong> one-hundredth of a percentage point. 25 basis points = 0.25%.</li>
<li><strong>Hawkish:</strong> leaning toward higher rates to fight inflation. "Dovish" is the opposite.</li>
<li><strong>Tightening cycle:</strong> a stretch of repeated hikes, like the one that may be underway now.</li>
</ul>

<h2>The bottom line</h2>
<p>A rate hike is the Fed's way of tapping the brakes on inflation by making money more expensive to borrow. You can't control what the Fed does on December 9, but you can control your exposure: shrink variable-rate debt, keep your savings in an account that pays a real yield, and stick to your long-term investing plan.</p>

<p class="art-note">Rates and economic data cited are from the Federal Reserve, the Bureau of Labor Statistics and news reports as of November 17, 2026, and will change. This post is for education only and is not investment advice.</p>
`},
  "buzzword-brief-what-does-soft-landing-mean": {
    cat:"trending",
    title:"Buzzword Brief: what does 'soft landing' mean?",
    dek:"You'll hear it on the news whenever the Fed meets. Here's what a 'soft landing' is, why it's so hard to pull off, and where the U.S. economy stands in late 2026.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>A <strong>soft landing</strong> is when the Federal Reserve slows inflation without pushing the economy into a recession.</li>
<li>A <strong>hard landing</strong> is when the fight against inflation tips the economy into a recession with big job losses.</li>
<li>In late 2026, hiring is holding up but inflation has picked back up, so the Fed is trying to land the plane a second time.</li>
</ul></div>

<p>"Soft landing" is a pilot's metaphor. Imagine the economy is a plane flying too fast. That's inflation. The Federal Reserve is the pilot trying to slow it down. Slow down gently and you touch down smoothly. Slow down too hard and you crash into a recession. Slow down too little and prices keep climbing.</p>

<h2>How the Fed tries to land the plane</h2>
<p>The Fed's main tool is the <strong>federal funds rate</strong>, the interest rate banks charge each other for overnight loans. It ripples out to the rates on mortgages, car loans, credit cards and savings accounts.</p>
<ul>
<li><strong>Raising rates</strong> makes borrowing more expensive. People and businesses spend less, which cools demand and, eventually, inflation.</li>
<li><strong>Cutting rates</strong> makes borrowing cheaper and gives the economy a boost.</li>
</ul>
<p>The hard part is timing. Rate changes take months to work their way through the economy, so the Fed is always steering based on where it <em>thinks</em> the economy will be, not where it is today.</p>

<h2>Soft landing vs. hard landing vs. no landing</h2>
<table class="weights">
<thead><tr><th>Scenario</th><th>Inflation</th><th>Jobs</th></tr></thead>
<tbody>
<tr><td>Soft landing</td><td>Falls back toward the Fed's 2% goal</td><td>Unemployment stays fairly low</td></tr>
<tr><td>Hard landing</td><td>Falls</td><td>Recession and rising unemployment</td></tr>
<tr><td>"No landing"</td><td>Stays stubbornly high</td><td>Economy keeps running hot</td></tr>
</tbody></table>
<p>Historically, soft landings are rare. The mid-1990s is the classic example economists point to.</p>

<h2>Where things stand in November 2026</h2>
<ul>
<li><strong>Interest rates:</strong> After a series of cuts, the Fed raised rates in September 2026, its first hike since 2023, and held them at 3.75% to 4% at its October 28 meeting. Two officials voted for another increase. The next meeting is December 8 and 9.</li>
<li><strong>Inflation:</strong> Consumer prices rose 3.7% over the year through September, well above the Fed's 2% goal, and rose another 0.4% in October.</li>
<li><strong>Jobs:</strong> Employers added 165,000 jobs in October and the unemployment rate dipped to 4.1%, a stronger report than economists expected.</li>
</ul>
<p>So the economy hasn't crashed, which is the "soft" part. But inflation has moved back up, so the landing isn't finished. Economists are debating whether the Fed can bring prices down again without causing a downturn.</p>

<h2>What it means for your wallet</h2>
<ul>
<li><strong>Borrowing costs:</strong> Credit card rates, car loans and mortgages tend to stay high while the Fed holds or raises rates. Paying down variable-rate debt is especially valuable now.</li>
<li><strong>Savings:</strong> The upside of higher rates is that high-yield savings accounts and CDs still pay around 4% at the top banks. Make sure your cash isn't sitting at 0.4%.</li>
<li><strong>Jobs:</strong> A solid job market is good news, but have an emergency fund in case the landing gets bumpier.</li>
<li><strong>Investing:</strong> Headlines about the Fed can move markets day to day. Long-term investors are usually best served by sticking to their plan.</li>
</ul>

<h2>Related buzzwords</h2>
<ul>
<li><strong>Recession:</strong> a significant, widespread decline in economic activity lasting more than a few months.</li>
<li><strong>Stagflation:</strong> high inflation combined with weak growth and rising unemployment, the worst of both worlds.</li>
<li><strong>Hawkish / dovish:</strong> "Hawks" favor higher rates to fight inflation; "doves" favor lower rates to support jobs.</li>
</ul>

<h2>The bottom line</h2>
<p>A soft landing means taming inflation without a recession. It's the outcome everyone wants and history says it's hard to achieve. You can't control the Fed, but you can prepare: keep an emergency fund, pay down high-interest debt and earn a real return on your cash.</p>

<p class="art-note">Economic data cited is from the Federal Reserve and Bureau of Labor Statistics as of mid-November 2026 and will change. This article is for education only and isn't financial advice.</p>
`},
  "the-3-account-system-that-makes-saving-automatic": {
    cat:"trending",
    title:"The 3-account system that makes saving automatic",
    dek:"Split your paycheck into spend, save and grow, and stop relying on willpower to build wealth. Here's how to set up the system in about 30 minutes.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Use three accounts: <strong>Spend</strong> (checking), <strong>Save</strong> (high-yield savings) and <strong>Grow</strong> (investment accounts).</li>
<li>Automate transfers on payday so saving happens before you can spend.</li>
<li>Whatever is left in your Spend account is yours to use, guilt-free.</li>
</ul></div>

<p>Most people try to save whatever's left at the end of the month. The problem is that there's rarely anything left. The 3-account system flips the order: your future gets paid first, automatically, and you spend what remains.</p>

<h2>The three accounts</h2>
<table class="weights">
<thead><tr><th>Account</th><th>Type</th><th>Its job</th></tr></thead>
<tbody>
<tr><td>1. Spend</td><td>Checking account</td><td>Bills and everyday spending</td></tr>
<tr><td>2. Save</td><td>High-yield savings account</td><td>Emergency fund and short-term goals (sinking funds)</td></tr>
<tr><td>3. Grow</td><td>401(k), IRA or brokerage account</td><td>Long-term wealth and retirement</td></tr>
</tbody></table>

<h3>Account 1: Spend</h3>
<p>Your paycheck lands here. It covers rent, utilities, groceries, subscriptions and fun money. Choose a checking account with no monthly fee and no overdraft fees.</p>

<h3>Account 2: Save</h3>
<p>This is your safety net and short-term goal fund: emergencies, car repairs, travel and holidays. Keep it at a <strong>different bank</strong> from your checking account. That small bit of friction stops impulse transfers. Choose a high-yield account; top rates were around 4% in late 2026, compared with a national average under 0.5%.</p>

<h3>Account 3: Grow</h3>
<p>This is where money goes to compound for decades. Start with your workplace 401(k), especially if there's a match, then add a Roth or traditional IRA and, eventually, a taxable brokerage account. Invest in broad, low-cost index funds.</p>

<h2>How to set it up</h2>
<ol>
<li><strong>Pick your percentages.</strong> A common starting point: 10% to Grow and 5% to 10% to Save. Use whatever you can, even 1%, and raise it over time.</li>
<li><strong>Set up Grow first.</strong> Retirement contributions through your employer come straight out of your paycheck before it reaches checking.</li>
<li><strong>Schedule the Save transfer</strong> for payday or the day after, so it moves before you spend.</li>
<li><strong>Set up IRA contributions</strong> as an automatic monthly transfer too.</li>
<li><strong>Spend the rest freely.</strong> If the bills are paid and savings are funded, there's no need to agonize over a dinner out.</li>
</ol>

<div class="callout"><strong>Example on a $4,000 monthly take-home:</strong><br>
• $400 (10%) → 401(k) or IRA (Grow)<br>
• $300 (7.5%) → high-yield savings (Save)<br>
• $3,300 stays in checking (Spend)<br>
That's $8,400 a year saved and invested without a single decision.</div>

<h2>Why it works</h2>
<ul>
<li><strong>It removes willpower.</strong> Automated transfers happen whether you're feeling disciplined or not.</li>
<li><strong>It makes spending guilt-free.</strong> Your goals are already funded, so the money in checking is truly available.</li>
<li><strong>It separates money by purpose.</strong> You're less likely to spend your emergency fund when it's not sitting in your checking account.</li>
<li><strong>It grows with you.</strong> Each raise is a chance to bump your percentages up.</li>
</ul>

<h2>Level up: add sub-accounts</h2>
<p>Many online banks let you split your Save account into named "buckets": Emergency, Car, Travel, Holidays. Some people also use two checking accounts, one for fixed bills and one for spending money, which makes it easy to see exactly what's left to spend.</p>

<h2>Common questions</h2>
<h3>What if I have high-interest debt?</h3>
<p>Keep a small amount going to Save (to build a starter emergency fund) and grab any 401(k) match, then put extra money toward the debt before increasing Grow.</p>
<h3>What if my income is irregular?</h3>
<p>Use percentages instead of fixed dollar amounts, and move money each time you're paid. Aim for a bigger Save balance to smooth out lean months.</p>
<h3>How often should I review it?</h3>
<p>Every few months, and any time your income changes. Try raising your Save or Grow percentage by 1% each time.</p>

<h2>The bottom line</h2>
<p>Three accounts, a couple of automatic transfers and one simple rule: pay your future self first. Set it up once and let it run.</p>

<p class="art-note">Rates are approximate as of November 2026. This article is for education only and isn't financial advice.</p>
`},
  "are-high-yield-savings-rates-still-worth-it": {
    cat:"trending",
    title:"Are high-yield savings rates still worth it?",
    dek:"Top savings accounts still pay around 4%, while the average bank pays under 0.5%. But with inflation running higher in 2026, is a savings account still worth it? Here's the honest math.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>In November 2026, top high-yield savings accounts pay about 4% to 4.4% APY, compared with a national average around 0.38%.</li>
<li>With inflation recently running around 3.7%, the best accounts are roughly keeping pace. Average accounts are losing ground.</li>
<li>For emergency funds and short-term goals, a high-yield savings account is still the right home. For long-term growth, look elsewhere.</li>
</ul></div>

<p>High-yield savings accounts became popular when rates jumped in 2023. Rates eased during the Fed's cuts in 2024 and 2025, and in 2026 the Fed reversed course with a rate hike in September. So where do savings rates stand, and are they still worth it?</p>

<h2>The rate gap is still huge</h2>
<p>The difference between a high-yield account and a typical bank account is the main story:</p>
<table class="weights">
<thead><tr><th>Account</th><th>Approx. APY</th><th>Interest on $10,000 for a year</th></tr></thead>
<tbody>
<tr><td>National average savings</td><td class="pct">0.38%</td><td>~$38</td></tr>
<tr><td>Typical online high-yield account</td><td class="pct">~3.65%</td><td>~$365</td></tr>
<tr><td>Top high-yield accounts</td><td class="pct">~4.4%</td><td>~$440</td></tr>
</tbody></table>
<p>Moving $10,000 from a typical big-bank savings account to a top online account could earn you around $400 more a year for about 15 minutes of work.</p>

<h2>What about inflation?</h2>
<p>This is the honest catch. Consumer prices rose 3.7% over the year through September 2026, and prices rose another 0.4% in October. That means:</p>
<ul>
<li>At ~4.4%, the best accounts are <strong>slightly ahead</strong> of inflation before taxes.</li>
<li>After taxes on the interest, they're roughly <strong>breaking even</strong> in real terms.</li>
<li>At 0.38%, average accounts are <strong>losing</strong> more than 3% of their buying power each year.</li>
</ul>
<p>So a high-yield account isn't a way to grow wealth right now. It's a way to <em>protect</em> your cash, which is exactly what an emergency fund needs.</p>

<h2>When a high-yield savings account is the right choice</h2>
<ul>
<li><strong>Emergency fund.</strong> You need safety and quick access more than growth.</li>
<li><strong>Short-term goals</strong> within the next one to three years: a car, a move, a wedding or a home down payment.</li>
<li><strong>Sinking funds</strong> for predictable costs like insurance premiums and holidays.</li>
<li><strong>Cash you can't afford to lose.</strong> FDIC or NCUA insurance covers up to $250,000 per depositor, per bank, per ownership category.</li>
</ul>

<h2>When to look elsewhere</h2>
<ul>
<li><strong>Long-term money (5+ years):</strong> Diversified stock and bond investments have historically beaten inflation by more over long periods, though with ups and downs.</li>
<li><strong>Locking in a rate:</strong> If you think rates could fall, a CD fixes your rate for a set term.</li>
<li><strong>State taxes:</strong> Treasury bills pay competitive rates and their interest is exempt from state and local income tax, which helps in high-tax states.</li>
<li><strong>Larger cash balances:</strong> Money market funds at brokerages can be competitive, but they're not FDIC-insured.</li>
</ul>

<h2>Will rates go up or down from here?</h2>
<p>Savings rates usually follow the Fed. The Fed raised its benchmark rate in September 2026 and held it in October, with two officials voting for another hike. If the Fed raises rates again, savings rates could tick up. If it later cuts, they'll fall. Since high-yield rates are variable, it's worth checking yours every few months and moving if your bank falls behind.</p>

<h2>Quick checklist</h2>
<ol>
<li>Check your current savings APY. If it's under 1%, move your money.</li>
<li>Compare a few top online banks and credit unions.</li>
<li>Read the fine print: promotional rates, balance limits and fees.</li>
<li>Confirm FDIC or NCUA insurance.</li>
<li>Set up automatic transfers to keep building your balance.</li>
</ol>

<h2>The bottom line</h2>
<p>Yes, high-yield savings accounts are still worth it, as long as you use them for the right job. They're the best home for your emergency fund and short-term goals, and they beat the average bank account by a mile. Just don't expect them to build long-term wealth.</p>

<p class="art-note">Rates and inflation data are approximate as of mid-November 2026 and change often. This article is for education only and isn't financial advice.</p>
`},
  "what-the-latest-jobs-report-means-for-your-wallet": {
    cat:"trending",
    title:"What the latest jobs report means for your wallet",
    dek:"The October 2026 jobs report beat expectations: 165,000 new jobs and a 4.1% unemployment rate. Here's what the numbers mean for your paycheck, your job security and your money.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Employers added <strong>165,000 jobs</strong> in October 2026, far more than economists expected, and the unemployment rate fell to <strong>4.1%</strong>.</li>
<li>Average hourly pay rose 3.1% from a year earlier, less than recent inflation, so many workers are still losing buying power.</li>
<li>Strong job numbers may keep the Fed cautious on rates, which affects borrowing and savings costs.</li>
</ul></div>

<p>Every month, the Bureau of Labor Statistics releases the "Employment Situation" report, better known as the jobs report. It moves markets and shapes Federal Reserve decisions. Here's a plain-English look at the latest one, released November 6, 2026, and what it means for you.</p>

<h2>The headline numbers</h2>
<table class="weights">
<thead><tr><th>Measure</th><th>October 2026</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Jobs added</td><td class="pct">+165,000</td><td>Hiring picked up sharply; the prior 12-month average was 48,000</td></tr>
<tr><td>Unemployment rate</td><td class="pct">4.1%</td><td>Down from 4.2% in September and still low by historical standards</td></tr>
<tr><td>Average hourly earnings</td><td class="pct">$38.00</td><td>Up 0.4% for the month and 3.1% over the year</td></tr>
<tr><td>Revisions</td><td class="pct">+84,000</td><td>August and September were stronger than first reported</td></tr>
</tbody></table>
<p>Professional and business services and health care led the gains. Economists had expected only around 60,000 new jobs, so this was a clear upside surprise.</p>

<h2>What it means for your paycheck</h2>
<p>Pay is rising, but not as fast as prices. Wages grew 3.1% over the past year, while consumer prices rose 3.7% over the year through September. In other words, the typical worker's raise hasn't fully kept up with the cost of living.</p>
<p><strong>What to do:</strong> A strong job market gives workers more bargaining power. If you haven't had a raise that matches inflation, now may be a good time to ask, or to explore what your skills are worth elsewhere.</p>

<h2>What it means for job security</h2>
<p>Broad-based hiring and low unemployment are good signs. But not every measure was rosy: a broader measure of underemployment, which includes people working part-time who want full-time work, rose to 7.9%. Monthly job growth has also been uneven this year.</p>
<p><strong>What to do:</strong> Keep building your emergency fund toward 3 to 6 months of essential expenses. Good times are the best time to prepare for bad ones.</p>

<h2>What it means for interest rates</h2>
<p>The Federal Reserve watches the jobs report closely. A strong labor market plus elevated inflation makes the Fed less likely to cut rates soon. The Fed raised rates in September and held them at 3.75% to 4% in October, and its next meeting is December 8 and 9.</p>
<ul>
<li><strong>Borrowers:</strong> Credit card, auto loan and mortgage rates are likely to stay elevated. Paying down variable-rate debt saves real money.</li>
<li><strong>Savers:</strong> The upside is that high-yield savings and CD rates should stay attractive for now.</li>
</ul>

<h2>What it means for investors</h2>
<p>Markets often react sharply to jobs reports, sometimes in ways that seem backwards. Strong job numbers can push stocks down if investors expect higher interest rates. For long-term investors, one month's report shouldn't change your plan. Keep contributing on schedule.</p>

<h2>How to read future jobs reports</h2>
<ul>
<li><strong>Look at the trend,</strong> not one month. Numbers are revised, sometimes significantly.</li>
<li><strong>Compare wages to inflation</strong> to see whether workers are getting ahead.</li>
<li><strong>Check which industries are hiring.</strong> It can hint at where opportunities are growing.</li>
<li><strong>Watch the unemployment rate</strong> alongside broader measures of underemployment.</li>
</ul>

<h2>Your action plan this month</h2>
<ol>
<li>Compare your pay increase over the last year with inflation of about 3.7%.</li>
<li>If you're behind, research market pay and prepare to negotiate.</li>
<li>Check your emergency fund and keep adding to it.</li>
<li>Put extra money toward high-interest, variable-rate debt.</li>
<li>Make sure your savings are earning a competitive rate.</li>
</ol>

<h2>The bottom line</h2>
<p>The October jobs report shows a resilient labor market, which is good news for job seekers. But with wages trailing inflation and rates likely to stay high, it's a good moment to negotiate your pay, pay down expensive debt and keep your cash working.</p>

<p class="art-note">Figures are from the Bureau of Labor Statistics' October 2026 Employment Situation report and the Federal Reserve. The next jobs report will update these numbers. This article is for education only and isn't financial advice.</p>
`},
  "loud-budgeting-explained": {
    cat:"trending",
    title:"'Loud budgeting' explained",
    dek:"It started as a TikTok joke and became a real money movement: saying your financial goals out loud instead of quietly overspending. Here's what loud budgeting is and how to try it.",
    date:"Nov 17, 2026", read:"5 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li>Loud budgeting means being open about your money goals and saying "no" to spending that doesn't fit them, without embarrassment.</li>
<li>It was coined on TikTok in late 2023 by comedian Lukas Battle as "the opposite of quiet luxury."</li>
<li>The key idea: it's not "I can't afford it," it's "I'd rather spend my money on something else."</li>
</ul></div>

<p>For years, social media pushed us to show off: designer bags, lavish trips and "quiet luxury" outfits that whisper wealth. Loud budgeting flips that script. Instead of quietly going along with expensive plans you can't really afford, you say out loud what you're saving for, and you make it something to be proud of.</p>

<h2>Where it came from</h2>
<p>At the end of 2023, writer and comedian Lukas Battle posted his list of what was "in" and "out" for 2024 on TikTok. "Loud budgeting" was in. He framed it as the opposite of quiet luxury. It started as a joke, but it struck a nerve with people tired of social pressure to spend, and the term spread quickly.</p>

<h2>What loud budgeting sounds like</h2>
<ul>
<li>"I'm saving for a trip in the spring, so I'll skip the concert, but let's do a picnic instead."</li>
<li>"That restaurant's out of my budget this month. Want to cook at my place?"</li>
<li>"I'm trying to pay off my credit card by summer, so I'm doing a no-spend weekend."</li>
<li>"I'm putting that money toward my emergency fund instead."</li>
</ul>
<div class="callout"><strong>The mindset shift:</strong> Loud budgeting isn't about scarcity. It's about priorities. "I don't have enough" becomes "I'm choosing something more important to me."</div>

<h2>Why it works</h2>
<ul>
<li><strong>It reduces social pressure.</strong> Much overspending happens because saying no feels awkward. Naming a goal makes it easier.</li>
<li><strong>It creates accountability.</strong> Saying your goal out loud makes you more likely to stick with it.</li>
<li><strong>It normalizes money talk.</strong> Friends often feel the same pressure and are relieved when someone speaks up.</li>
<li><strong>It suggests alternatives.</strong> Saying no to a pricey dinner often leads to cheaper plans that are just as fun.</li>
</ul>

<h2>How to try loud budgeting</h2>
<ol>
<li><strong>Pick one or two clear goals,</strong> such as "save $1,500 for an emergency fund by March" or "pay off my $2,000 card balance this year."</li>
<li><strong>Make a simple budget</strong> so you know what you can spend on fun each month. The 50/30/20 approach is a good start.</li>
<li><strong>Practice your line.</strong> Have a friendly, ready phrase for when plans don't fit: "I'm loud budgeting this month!"</li>
<li><strong>Offer an alternative</strong> instead of just saying no.</li>
<li><strong>Share your wins.</strong> Celebrate milestones with friends, or online if you want to inspire others.</li>
<li><strong>Find your people.</strong> Friends or online communities with similar goals make it much easier.</li>
</ol>

<h2>Loud budgeting dos and don'ts</h2>
<p><strong>Do:</strong></p>
<ul>
<li>Speak for yourself and your own goals.</li>
<li>Stay flexible. A budget can include fun.</li>
<li>Suggest low-cost ways to stay connected.</li>
</ul>
<p><strong>Don't:</strong></p>
<ul>
<li>Lecture friends about their spending.</li>
<li>Overshare details you're not comfortable sharing, like your exact salary or debts.</li>
<li>Turn it into deprivation. If it makes you miserable, adjust the plan.</li>
</ul>

<h2>Related trends</h2>
<ul>
<li><strong>No-spend challenges:</strong> going a day, week or month without non-essential purchases.</li>
<li><strong>De-influencing:</strong> creators telling followers what <em>not</em> to buy.</li>
<li><strong>Cash stuffing:</strong> using labeled envelopes of cash for spending categories.</li>
</ul>

<h2>The bottom line</h2>
<p>Loud budgeting turns saving from something private and a little embarrassing into something confident and shared. You don't need to announce every decision. But next time a plan doesn't fit your budget, try saying so out loud. Your friends might be relieved, and your goals will thank you.</p>

<p class="art-note">This article is for education only and isn't financial advice.</p>
`},
  "reader-q-should-i-pay-off-debt-or-invest-first": {
    cat:"trending",
    title:"Reader Q: Should I pay off debt or invest first?",
    dek:"It's one of the most common money questions we get. The answer depends mostly on one number, your interest rate, plus a few rules that come first. Here's the framework.",
    date:"Nov 17, 2026", read:"6 min read",
    body:`
<div class="tldr"><b>The short version</b>
<ul>
<li><strong>Always get your employer 401(k) match first.</strong> It's an instant return you can't get anywhere else.</li>
<li><strong>Pay off high-interest debt</strong> (roughly 8% and up, like credit cards) before investing beyond the match.</li>
<li><strong>For low-interest debt</strong> (roughly under 5%), investing usually makes more sense. In between, splitting your money is reasonable.</li>
</ul></div>

<p><em>"I have about $500 extra each month. I've got $6,000 on a credit card, a car loan at 6% and student loans at 4.5%. Should I pay those off first or start investing?"</em></p>
<p>Great question, and a common one. There's no single answer, but there is a clear framework. It comes down to comparing the <strong>guaranteed return</strong> of paying off debt with the <strong>expected (but not guaranteed) return</strong> of investing.</p>

<h2>Paying off debt is a guaranteed return</h2>
<p>Every dollar you put toward a credit card charging 24% is like earning 24% risk-free, because that's interest you'll never pay. No investment reliably offers that. Stocks have historically averaged somewhere around 7% to 10% a year over long periods, but with big ups and downs and no guarantees.</p>

<h2>The priority order</h2>
<ol>
<li><strong>Build a starter emergency fund</strong> ($1,000 to $2,000). Without it, the next surprise goes right back on the credit card.</li>
<li><strong>Get your full employer 401(k) match.</strong> A 50% or 100% match on your contributions is an immediate return that beats paying off almost any debt.</li>
<li><strong>Pay off high-interest debt</strong>: credit cards, payday loans and most personal loans above roughly 8%.</li>
<li><strong>Build your full emergency fund</strong> of 3 to 6 months of essential expenses.</li>
<li><strong>Medium-interest debt (about 5% to 8%):</strong> split extra money between paying it down and investing, or pick based on your comfort level.</li>
<li><strong>Low-interest debt (under about 5%):</strong> pay the minimum and invest the rest, especially in tax-advantaged accounts.</li>
</ol>

<h2>Applying it to our reader</h2>
<table class="weights">
<thead><tr><th>Debt</th><th>Rate</th><th>Priority</th></tr></thead>
<tbody>
<tr><td>Credit card ($6,000)</td><td class="pct">~24%</td><td>Pay off aggressively</td></tr>
<tr><td>Car loan</td><td class="pct">6%</td><td>Gray zone: steady payments, maybe a little extra</td></tr>
<tr><td>Student loans</td><td class="pct">4.5%</td><td>Minimum payments; invest instead</td></tr>
</tbody></table>
<p><strong>Our suggested plan:</strong></p>
<ul>
<li>Make sure there's a starter emergency fund and that the full 401(k) match is captured.</li>
<li>Send the full $500 extra to the credit card. At 24%, it would be paid off in a little over a year, or faster with a 0% balance transfer.</li>
<li>Once the card is gone, send most of that $500 into a Roth IRA or extra 401(k) contributions, while paying the minimums on the car and student loans.</li>
</ul>

<h2>Factors that can change the answer</h2>
<ul>
<li><strong>Taxes:</strong> Investing through a 401(k), IRA or HSA adds tax benefits. On the other side, student loan interest may be partly tax-deductible.</li>
<li><strong>Variable vs. fixed rates:</strong> Debt with a rate that can rise, like credit cards and some private loans, deserves extra priority.</li>
<li><strong>Your timeline:</strong> Investing is for money you won't need for at least five years.</li>
<li><strong>Peace of mind:</strong> Some people sleep better debt-free even when the math slightly favors investing. That's a valid choice, especially for medium-rate debt.</li>
<li><strong>Federal student loans:</strong> They may offer income-driven repayment or forgiveness options worth considering before you pay them off early.</li>
<li><strong>Today's rates:</strong> With top savings accounts paying around 4% and Treasury yields elevated in late 2026, paying off debt below about 4% to 5% is less compelling than it would be if rates were near zero.</li>
</ul>

<div class="callout"><strong>Quick rule of thumb:</strong> If the interest rate on a debt is higher than the return you could reasonably expect from investing after taxes, pay the debt. If it's lower, invest. If it's close, do some of both.</div>

<h2>Don't forget the time factor</h2>
<p>Investing early is powerful because of compounding. A 25-year-old who waits five years to start investing may give up a large amount of future growth. That's why getting the employer match, and at least starting small, matters even while you pay down debt.</p>

<h2>The bottom line</h2>
<p>Get the match, kill high-interest debt, build your safety net, and then invest while paying off low-rate debt on schedule. It's not all-or-nothing. Most people do best with a clear order of priorities and automatic payments for each one.</p>

<p><em>Have a money question? Join The Weekly Reason and reply to any issue. We answer reader questions every week.</em></p>

<p class="art-note">This article is for education only and isn't financial advice. Your situation may differ, so consider speaking with a licensed professional.</p>
`},
};

const bySlug = Object.fromEntries(CATS.map(c=>[c.slug,c]));
const $ = s=>document.querySelector(s);
const readTime = i => (4 + (i*3)%7) + " min read";
const dates = ["Nov 15","Nov 13","Nov 11","Nov 8","Nov 5","Nov 2"];
const slugify = t => t.toLowerCase().replace(/&/g," and ").replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const artUrl = (c,t) => `/${c.slug}/${slugify(t)}/`;
const artMeta = (t,i,off=0) => { const a = ARTICLES[slugify(t)]; return a ? [a.date, a.read] : [dates[(i+off)%6]+", 2026", readTime(i+off)]; };

function card(c,title,i){
  const a = ARTICLES[slugify(title)], [d,r] = artMeta(title,i);
  return `<a class="card" href="${artUrl(c,title)}"><div class="thumb" style="background:${c.tint}"><span class="pill" style="color:${c.color}">${c.name}</span>${c.ico}</div>
  <div class="card-body"><h3>${title}</h3><p>${a ? a.dek : "A clear, step-by-step guide that explains what it is, why it matters and what to do next."}</p>
  <div class="meta"><span>${d}</span><span>${r}</span></div></div></a>`;
}

// Nav, tiles, footer, chips
// "Trending" is a feed of the latest posts, not a subject, so it's styled apart from the topics in the menu.
$("#menu").innerHTML = CATS.map(c=>c.slug==="trending"
  ? `<li class="menu-feed-li"><a class="menu-feed" href="/${c.slug}/" data-slug="${c.slug}">Trending</a></li>`
  : `<li><a href="/${c.slug}/" data-slug="${c.slug}">${c.name}</a></li>`).join("");
if($("#topicCount")) $("#topicCount").innerHTML = String(CATS.filter(c=>c.slug!=="trending").length);
if($("#catTiles")) $("#catTiles").innerHTML = CATS.map(c=>`<a class="cat" href="/${c.slug}/"><div class="ico" style="background:${c.tint}">${c.ico}</div><h3>${c.name}</h3><p>${c.blurb}</p><span class="go">Explore ${c.name} →</span></a>`).join("");
$("#footCats").innerHTML = CATS.map(c=>`<li><a href="/${c.slug}/">${c.name}</a></li>`).join("");
$("#chips").innerHTML = CATS.filter(c=>c.slug!=="trending").map(c=>`<label><input type="checkbox" value="${c.slug}"><span>${c.ico} ${c.name}</span></label>`).join("");
if($("#trendList")) $("#trendList").innerHTML = bySlug.trending.posts.slice(0,5).map((t,i)=>`<li><a href="${artUrl(bySlug.trending,t)}"><small>${["Buzzword Brief","Financial Freedom","Banking & Credit","Money News","Personal Finance"][i]}</small><strong>${t}</strong></a></li>`).join("");
if($("#latestGrid")) $("#latestGrid").innerHTML = ["investing","banking-credit","insurance","trending","personal-finance","financial-freedom"].map((s,i)=>card(bySlug[s],bySlug[s].posts[i%6],i)).join("");

// Category pages
function renderCat(c){
  const others = CATS.filter(o=>o.slug!==c.slug);
  $("#page-cat").innerHTML = `
  <div class="cat-hero" style="background:linear-gradient(135deg,${c.color},${c.color}dd)">
    <div class="wrap">
      <div class="crumbs"><a href="/">Home</a> › ${c.name}</div>
      <div class="big-ico">${c.ico}</div>
      <h1>${c.name}</h1>
      <p>${c.intro}</p>
      <div class="subnav">${c.sub.map(s=>`<a href="/${c.slug}/">${s}</a>`).join("")}</div>
    </div>
  </div>
  <section>
    <div class="wrap layout">
      <div>
        <div class="eyebrow" style="color:${c.color}">New here? Start with these</div>
        <h2 style="margin:6px 0 20px">${c.name} in four steps</h2>
        <div class="start">${c.steps.map((s,i)=>`<div class="step"><div class="n" style="color:${c.color}">0${i+1}</div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div>

        <div class="eyebrow" style="color:${c.color}">Featured</div>
        <h2 style="margin:6px 0 20px">Popular ${c.name.toLowerCase()} guides</h2>
        <div class="grid-3" style="margin-bottom:44px">${c.posts.slice(0,3).map((p,i)=>card(c,p,i)).join("")}</div>

        <div class="eyebrow" style="color:${c.color}">Latest</div>
        <h2 style="margin:6px 0 20px">Recently published</h2>
        <div class="rows">${c.posts.slice(3).map((p,i)=>{const [d,r]=artMeta(p,i,3); return `<a class="row card" href="${artUrl(c,p)}"><div class="thumb" style="background:${c.tint}">${c.ico}</div><div class="card-body"><h3>${p}</h3><p>Everything you need to know, with real examples and a simple next step.</p><div class="meta"><span>${d}</span><span>${r}</span></div></div></a>`}).join("")}</div>
      </div>
      <aside>
        <div class="box side-nl">
          <h3>📬 Get ${c.name} tips weekly</h3>
          <p style="font-size:.86rem;color:var(--ink-soft)">Join The Weekly Reason and we'll include the best new ${c.name.toLowerCase()} guides every Sunday.</p>
          <form class="side-form" data-topic="${c.slug}" novalidate><input type="email" placeholder="Email address"><button class="btn btn-primary" type="submit">Subscribe free</button></form>
        </div>
        <div class="box">
          <h3>📖 Key terms</h3>
          <dl class="terms">${c.terms.map(t=>`<dt>${t[0]}</dt><dd>${t[1]}</dd>`).join("")}</dl>
        </div>
        <div class="box other-cats">
          <h3>More topics</h3>
          ${others.map(o=>`<a href="/${o.slug}/"><span>${o.ico} ${o.name}</span><span>→</span></a>`).join("")}
        </div>
      </aside>
    </div>
  </section>`;
  document.querySelectorAll(".side-form").forEach(f=>f.addEventListener("submit",sideSubmit));
}

// Article pages
function renderArticle(c, aslug){
  const a = ARTICLES[aslug];
  const title = a ? a.title : (c.posts.find(p=>slugify(p)===aslug) || CATS.flatMap(x=>x.posts).find(p=>slugify(p)===aslug) || "Article not found");
  const more = c.posts.filter(p=>slugify(p)!==aslug).slice(0,3);
  const moreHtml = `<div class="art-more"><div class="eyebrow" style="color:${c.color}">Keep reading</div><h2 style="margin:6px 0 20px">More ${c.name.toLowerCase()} guides</h2><div class="grid-3">${more.map((p,i)=>card(c,p,i)).join("")}</div></div>`;
  if(!a){
    $("#page-art").innerHTML = `<div class="soon"><div class="big-ico">${c.ico}</div><div class="eyebrow" style="color:${c.color}">${c.name} · Coming soon</div><h1 style="font-size:clamp(1.7rem,3.5vw,2.4rem);margin-top:10px">${title}</h1><p>We're putting the finishing touches on this guide. Join The Weekly Reason and we'll send it to you the Sunday it goes live.</p><a href="#newsletter" data-scroll class="btn btn-primary">Notify me →</a></div>${moreHtml}`;
    return title;
  }
  $("#page-art").innerHTML = `
  <div class="art-hero" style="background:linear-gradient(135deg,${c.color},${c.color}dd)">
    <div class="wrap">
      <div class="crumbs"><a href="/">Home</a> › <a href="/${c.slug}/">${c.name}</a></div>
      <span class="pill" style="display:inline-block;background:rgba(255,255,255,.18);padding:4px 12px;border-radius:999px;font-size:.75rem;font-weight:700">${c.ico} ${c.name}</span>
      <h1>${a.title}</h1>
      <p class="dek">${a.dek}</p>
      <div class="art-meta"><span>By the Rich With Reason team</span><span>${a.date}</span><span>${a.read}</span></div>
    </div>
  </div>
  <article class="article">${a.body}</article>
  ${moreHtml}`;
  return a.title;
}

// About page
const ABOUT_DESC = "Meet Jordan Noel, founder of Rich With Reason: a Temple University finance grad working in private equity accounting, making finance digestible for anyone.";
function renderAbout(){
  $("#page-about").innerHTML = `
  <div class="art-hero about-hero">
    <div class="wrap">
      <div class="crumbs"><a href="/">Home</a> › About</div>
      <div class="eyebrow" style="color:var(--gold);margin-top:14px">About Rich With Reason</div>
      <h1>Finance, made digestible for everyone.</h1>
      <p class="dek">No jargon, no hype, no assumption that you already know the lingo. Just clear explanations of how money works, so you can make your next decision with confidence.</p>
    </div>
  </div>
  <section class="about">
    <div class="about-grid">
      <figure class="about-photo">
        <img src="/assets/about-headshot.jpg" alt="Jordan Noel, founder of Rich With Reason" width="640" height="640" loading="eager">
        <figcaption><strong>Jordan Noel</strong><span>Founder, Rich With Reason<br>Finance, Temple University<br>Private Equity Accounting</span></figcaption>
      </figure>
      <div class="article about-text">
        <h2>Hi, I'm Jordan Noel.</h2>
        <p>I studied finance at <strong>Temple University</strong>, and today I work in <strong>private equity accounting</strong>, keeping track of where investment dollars go and how they grow.</p>
        <p>Outside the office, I run Rich With Reason, where I turn the finance-speak I hear every day into plain English you can actually use.</p>
        <p>Working in finance taught me something that surprised me: most money topics aren't actually hard. They just tend to be explained in jargon, by people who forget what it was like not to know the terms. That gap keeps a lot of smart people from making confident decisions about their own money.</p>
        <p>Rich With Reason is my attempt to close it. My goal is simple: <strong>make finance digestible to anyone.</strong> Whether you're opening your first savings account, trying to figure out what a "rate hike" means for you, or finally getting serious about investing, you should be able to read a guide here and walk away understanding it.</p>
        <h2>What you'll find here</h2>
        <ul>
          <li><strong>Plain-English guides</strong> on banking and credit, personal finance, investing, insurance and financial freedom.</li>
          <li><strong>The Buzzword Brief</strong>: the finance terms everyone's using, decoded in a couple of minutes.</li>
          <li><strong>The Weekly Reason</strong>: one short email every Sunday with a money term, a take on the week's news and one small action.</li>
        </ul>
      </div>
    </div>
    <div class="about-values">
      <div class="step"><div class="n">01</div><h3>Plain English first</h3><p>If a term needs explaining, we explain it. You shouldn't need a finance degree to follow along.</p></div>
      <div class="step"><div class="n">02</div><h3>The why, not just the what</h3><p>Rules of thumb are useful, but understanding the reason behind them is what lets you apply them to your life.</p></div>
      <div class="step"><div class="n">03</div><h3>Honest, never hype</h3><p>No get-rich-quick promises. Just the trade-offs, laid out clearly, so you can make the call.</p></div>
    </div>
    <div class="about-cta">
      <a href="/personal-finance/" class="btn btn-primary">Start with the basics →</a>
      <a href="#newsletter" data-scroll class="btn btn-ghost" style="color:var(--green)">Join The Weekly Reason</a>
    </div>
    <p class="art-note about-note">Rich With Reason is for education only. Nothing here is personal financial, investment, tax or legal advice, and the views shared are my own, not those of my employer.</p>
  </section>`;
}

// Contact page
const CONTACT_EMAIL = "richwreason@gmail.com";
const CONTACT_DESC = "Get in touch with Rich With Reason. Questions, topic ideas, partnerships and press: email richwreason@gmail.com.";
function renderContact(){
  const reasons = [
    ["💬","Questions about a post","Something not clicking? Ask, and it may become a future guide or Reader Q."],
    ["💡","Topic suggestions","A buzzword you keep hearing or a money topic you want explained."],
    ["🤝","Partnerships and advertising","Brands and creators interested in working with Rich With Reason."],
    ["📰","Press and media","Interviews, quotes and speaking requests."],
    ["✏️","Corrections","Spotted a mistake or an outdated number? Let me know so I can fix it."],
  ];
  $("#page-contact").innerHTML = `
  <div class="art-hero about-hero">
    <div class="wrap">
      <div class="crumbs"><a href="/">Home</a> › Contact</div>
      <div class="eyebrow" style="color:var(--gold);margin-top:14px">Contact</div>
      <h1>Let's talk money.</h1>
      <p class="dek">Questions, ideas, partnerships or just a hello. Every message comes straight to me.</p>
    </div>
  </div>
  <section class="contact">
    <div class="contact-card">
      <div class="contact-ico">✉️</div>
      <div>
        <div class="eyebrow">Email</div>
        <a class="contact-email" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
        <p>I read every email that comes in.</p>
      </div>
      <a class="btn btn-primary" href="mailto:${CONTACT_EMAIL}">Send an email →</a>
    </div>
    <h2 class="contact-h">What to reach out about</h2>
    <div class="contact-grid">${reasons.map(r=>`<div class="step"><div class="contact-ri">${r[0]}</div><h3>${r[1]}</h3><p>${r[2]}</p></div>`).join("")}</div>
    <p class="art-note about-note">Please don't send account numbers or other sensitive financial details by email. I can't give personal financial advice, but I'm always happy to point you to a guide that helps.</p>
  </section>`;
}

// Router
function route(){
  const [slug, aslug] = location.pathname.split("/").filter(Boolean);
  document.querySelectorAll(".menu a").forEach(a=>a.classList.toggle("active",a.dataset.slug===slug));
  $("#menu").classList.remove("open");
  if(bySlug[slug] && aslug){ const t = renderArticle(bySlug[slug], aslug); show("art"); setMeta(t+" — Rich With Reason", (ARTICLES[aslug]||{}).dek); }
  else if(slug==="contact"){ renderContact(); show("contact"); setMeta("Contact — Rich With Reason", CONTACT_DESC); }
  else if(slug==="about"){ renderAbout(); show("about"); setMeta("About — Rich With Reason", ABOUT_DESC); }
  else if(bySlug[slug]){ renderCat(bySlug[slug]); show("cat"); setMeta(bySlug[slug].name+" — Rich With Reason", bySlug[slug].blurb); }
  else {
    // Topic/article pages are built without the home sections; load the real home page.
    const ph = $("#page-home"); if(ph && ph.children && !ph.children.length){ location.reload(); return; }
    show("home"); setMeta("Rich With Reason — Money, Explained With Reason", "Clear, honest guides on banking, credit, investing and insurance."); }
  window.scrollTo({top:0,behavior:"instant"});
}
function setMeta(title,desc){
  document.title = title;
  const url = "https://richwithreason.com"+location.pathname;
  const set=(sel,attr,v)=>{const m=document.querySelector(sel); if(m) m.setAttribute(attr,v);};
  set('link[rel="canonical"]',"href",url); set('meta[property="og:url"]',"content",url);
  set('meta[property="og:title"]',"content",title); set('meta[name="twitter:title"]',"content",title);
  if(desc){ set('meta[name="description"]',"content",desc); set('meta[property="og:description"]',"content",desc); set('meta[name="twitter:description"]',"content",desc); }
}
function show(p){ document.querySelectorAll(".page").forEach(x=>x.classList.remove("on")); $("#page-"+p).classList.add("on"); }
// Clean URLs: turn old "#/..." links into real paths and drop stray "?..." / "#" bits
function cleanUrl(){
  let p = location.pathname, h = location.hash;
  if(h.startsWith("#/")){ p = "/" + h.slice(2).split("/").filter(Boolean).join("/") + "/"; h = ""; if(p==="//") p="/"; }
  if(h==="#") h = "";
  if(location.search || p!==location.pathname || h!==location.hash) history.replaceState(null,"",p+h);
}
cleanUrl();
window.addEventListener("popstate",route);
window.addEventListener("hashchange",()=>{ if(location.hash.startsWith("#/")){ cleanUrl(); route(); } });
document.addEventListener("click",e=>{
  const a = e.target.closest("[data-scroll]");
  if(a){ e.preventDefault(); $("#newsletter").scrollIntoView({behavior:"smooth"}); $("#menu").classList.remove("open"); }
  const l = e.target.closest("a[href^='/']");
  if(l && !a && !l.target && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button===0){
    e.preventDefault();
    if(l.getAttribute("href")!==location.pathname) history.pushState(null,"",l.getAttribute("href"));
    route();
  }
});
$("#burger").onclick = ()=>$("#menu").classList.toggle("open");

// Newsletter: signups go to the "The Weekly Reason signup" form on the Rich With Reason Wix site,
// which creates/updates the contact and subscribes their email (Wix Email Marketing audience).
// WIX_CLIENT_ID is the site's public headless client id (not a secret; it only mints visitor tokens).
const WIX = {
  clientId: "bd6b5e41-1016-4400-b98c-d667515c8ae9",
  formId: "208dca30-0514-429d-90a8-734ff9f132e4",
  f: { first: "first_name_9abc", email: "email_3fe8", topics: "topics_4fd6", subscribe: "subscribe_bda9" },
  topicNames: { "banking-credit":"Banking & Credit", "financial-freedom":"Financial Freedom", "personal-finance":"Personal Finance", "investing":"Investing", "insurance":"Insurance" }
};
async function wixToken(){
  const key = "rwr-wix-visitor", now = Date.now();
  let t = null; try { t = JSON.parse(localStorage.getItem(key)); } catch(_){}
  if(t && t.expiresAt - 60000 > now) return t.accessToken;
  const mint = async body => {
    const r = await fetch("https://www.wixapis.com/oauth2/token", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(Object.assign({ clientId: WIX.clientId }, body)) });
    if(!r.ok) throw new Error("auth " + r.status);
    const d = await r.json();
    return { accessToken: d.access_token, refreshToken: d.refresh_token, expiresAt: now + d.expires_in*1000 };
  };
  let fresh = null;
  if(t && t.refreshToken){ try { fresh = await mint({ grantType:"refresh_token", refreshToken: t.refreshToken }); } catch(_){} }
  if(!fresh) fresh = await mint({ grantType:"anonymous" });
  try { localStorage.setItem(key, JSON.stringify(fresh)); } catch(_){}
  return fresh.accessToken;
}
async function subscribe({ email, name, topics }){
  const values = { [WIX.f.email]: email, [WIX.f.subscribe]: true };
  if(name) values[WIX.f.first] = name;
  const t = (topics||[]).map(s=>WIX.topicNames[s]).filter(Boolean);
  if(t.length) values[WIX.f.topics] = t;
  const r = await fetch("https://www.wixapis.com/form-submission-service/v4/submissions", {
    method:"POST", headers:{ "Content-Type":"application/json", Authorization: await wixToken() },
    body: JSON.stringify({ submission: { formId: WIX.formId, submissions: values } })
  });
  if(!r.ok) throw new Error("submit " + r.status);
  return r.json();
}
const okEmail = v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const SUBMIT_ERR = "Something went wrong. Please try again in a moment.";
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),3200); }
$("#nlForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const form=e.currentTarget, btn=form.querySelector("button[type=submit]"), err=$("#nlErr");
  const email=$("#nlEmail").value.trim(), name=$("#nlName").value.trim();
  if(!okEmail(email)){ err.textContent="Please enter a valid email address."; err.style.display="block"; $("#nlEmail").focus(); return; }
  err.style.display="none"; btn.disabled=true; btn.textContent="Subscribing…";
  try {
    const topics=[...form.querySelectorAll('#chips input:checked')].map(i=>i.value);
    await subscribe({ email, name, topics });
    $("#okName").textContent = name ? ", "+name : "";
    $("#nlFields").style.display="none"; $("#nlOk").style.display="block";
  } catch(_){
    err.textContent=SUBMIT_ERR; err.style.display="block";
  } finally { btn.disabled=false; btn.textContent="Subscribe to The Weekly Reason"; }
});
async function sideSubmit(e){
  e.preventDefault();
  const f=e.currentTarget, inp=f.querySelector("input"), btn=f.querySelector("button");
  if(!okEmail(inp.value.trim())){ inp.style.borderColor="#b3261e"; inp.focus(); return; }
  btn.disabled=true; btn.textContent="Subscribing…";
  try {
    await subscribe({ email: inp.value.trim(), topics: f.dataset.topic ? [f.dataset.topic] : [] });
    f.innerHTML = `<p style="font-weight:600;color:var(--green);margin-top:10px">✓ You're subscribed! First issue arrives Sunday.</p>`;
    toast("Welcome to The Weekly Reason 📬");
  } catch(_){
    btn.disabled=false; btn.textContent="Subscribe free"; toast(SUBMIT_ERR);
  }
}

// Compound calculator
function calc(){
  const m=+$("#m").value, y=+$("#y").value, r=+$("#r").value/100/12;
  $("#vM").textContent="$"+m.toLocaleString(); $("#vY").textContent=y; $("#vR").textContent=$("#r").value+"%";
  const fvAt = n => r ? m*((Math.pow(1+r,n)-1)/r) : m*n;
  const fv=fvAt(y*12), c=m*y*12;
  const f=v=>"$"+Math.round(v).toLocaleString();
  $("#fv").textContent=f(fv); $("#contrib").textContent=f(c); $("#growth").textContent=f(fv-c);
  const pts=10, max=fv;
  $("#bars").innerHTML = Array.from({length:pts},(_,i)=>{const n=Math.round((i+1)/pts*y*12); return `<div style="height:${Math.max(4,fvAt(n)/max*100)}%" class="${i===pts-1?'c':''}"></div>`}).join("");
}
// The calculator only exists on the home page.
if($("#m")){ ["m","y","r"].forEach(id=>$("#"+id).addEventListener("input",calc)); calc(); }
route();
