# Samir Solanki — Portfolio Site

Built on the same plain HTML/CSS/JS template your brother-in-law uses — no
React, no build step, no coding required to update it later.

## What's in this folder

- `index.html` — page structure. Headline, hero paragraph, and section
  titles live here (edited rarely).
- `style.css` — all visual design, colors, fonts, layout. You don't need
  to touch this.
- `content.js` — **all your repeating content**: profile summary, hero
  stats, work experience, certifications, skills, education, contact
  details, résumé filename. This is the file you'll edit most.
- `theme.js` — the three color palettes (paper / slate / ink). The little
  circular button in the header cycles through them.
- `script.js` — reads `content.js` and builds the page automatically.
  You don't need to touch this.
- `Samir_Solanki_Resume.pdf` — your uploaded CV, wired up to both the
  "Download résumé" button and hero download icon.
- `certs/` — 6 of your TCS iON certificate PDFs, linked from the
  "View certificate" buttons in the Certifications section.
- `photo.jpg` — a placeholder graphic (your initials, "SS"). **Replace
  this** with a real headshot before you go live — see below.

## What I changed from the source template

- Rewrote every section (hero, about, experience, skills, education,
  contact) around your CV instead of the sales-leadership original.
- Turned the old "Self-built tools / Projects" section into
  **Certifications & training**, since that's what you actually have —
  9 certificates total (all in `content.js`, `demoUrl` fields point to
  the 6 PDF files you have; the 3 without a file — CCC, Tally 9.0 ERP,
  and Investment Banking — show as text-only cards since there's no PDF
  to link yet).
- Two of the uploaded certificate PDFs (**Mutual Funds & Role of a
  Transfer Agency** and **Master Data Management for Beginners**)
  weren't listed in your CV's Certificates section but you had the
  actual certificates, so I included both.
- Design, colors, fonts, and all animations are untouched from the
  original — only the content changed.

## Step 1 — Add your real photo (optional but recommended)

The hero section currently shows a placeholder. To swap it:
1. Get a clear, front-facing photo of yourself (square-ish crops best).
2. Rename it exactly `photo.jpg`.
3. Replace the placeholder file in this folder with it before uploading
   to GitHub in Step 3.

You can skip this for now and add it later — just repeat this step and
re-upload to GitHub whenever you have a photo ready.

## Step 2 — Create a GitHub account and repository

1. Go to [github.com](https://github.com) and sign up (free) if you
   don't have an account.
2. Click the **+** icon top-right → **New repository**.
3. Name it something like `samir-portfolio`.
4. Set it to **Public**, leave everything else default, click
   **Create repository**.

## Step 3 — Upload these files to GitHub

1. On your new repo's page, click **uploading an existing file** (or
   **Add file → Upload files**).
2. Drag in all the files from this folder: `index.html`, `style.css`,
   `script.js`, `content.js`, `theme.js`, `photo.jpg`,
   `Samir_Solanki_Resume.pdf`, and the whole `certs` folder.
3. Scroll down, write a commit message like "Initial portfolio", click
   **Commit changes**.

## Step 4 — Connect Netlify and deploy

1. Go to [netlify.com](https://www.netlify.com) and sign up — choose
   **Sign up with GitHub** so the two are linked automatically.
2. From your Netlify dashboard, click **Add new site → Import an
   existing project**.
3. Choose **GitHub**, authorize Netlify if asked, then select your
   `samir-portfolio` repository.
4. Leave the build settings blank (there's no build step — this is a
   static site) and click **Deploy site**.
5. Netlify gives you a live URL in about a minute, something like
   `https://random-name-12345.netlify.app`.

## Step 5 — Get a cleaner URL (optional)

In Netlify: **Site settings → Change site name** — pick something like
`samir-solanki-portfolio`, so your link becomes
`https://samir-solanki-portfolio.netlify.app`.

## Updating the site later

Whenever you want to change anything (new job, new certificate, updated
skills):
1. Open `content.js` on GitHub (or edit locally and re-upload).
2. Edit the relevant array — for a new certificate, copy one block
   inside `projects` and fill in the fields.
3. Commit the change on GitHub.
4. Netlify auto-detects the change and redeploys within about a
   minute — no extra steps needed.

For headline/section-title changes, edit `index.html` the same way.

## A few things worth doing once you're live

- Update the `<meta property="og:image">` and add an
  `<meta property="og:url">` tag near the top of `index.html` with your
  actual Netlify URL, so link previews on WhatsApp/LinkedIn look right.
- Double-check your phone/email links work by clicking them on the live
  site.
- Add your LinkedIn "Featured" section with a link to the finished site.
